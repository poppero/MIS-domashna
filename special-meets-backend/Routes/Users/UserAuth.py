from Config.Config import db, mail
from Config.Models import User
from Config.Common import convertor, custom_abort , get_random_alphanumerical
from flask_jwt_extended import create_access_token
import datetime, random
from flask import jsonify
from sqlalchemy import exc

from flask_mail import Message

class UserAuth:

    def __init__(self):
        pass
    
    def login(self, request):
        user = request.form
        u = User.query.filter_by(email=user["email"] , password=user["password"]).first()

        if u == None:
            return custom_abort(401 , "Incorect email or password !")
        
        if u.verified == 0:
            return custom_abort(403 , "Please check your email to verify your account!")
        
        ret = convertor(u, ["password"])
        token = create_access_token(ret ,  expires_delta=datetime.timedelta(hours=180))  
        return jsonify({
            "token" : token,
            "user" : ret
        })
  
    def register(self, request):
        data = request.form
        required_keys = ["email" , "first_name" , "last_name" , "password" , "phone_number"]
        for key in required_keys:
            if key not in data:
                return custom_abort(400, "Required key is missing from request" + key)
        try:
            user = User()
            [setattr(user , key , data[key]) for key in required_keys if key in data]
            user.create_date = datetime.datetime.utcnow()
            user.confirmation_number = "1234"
            user.confirmed = 1
            user.verified = 0
            user.country_id = 1
            user.bio = ""
            user.profile_picture = ""
            user.user_type_id = 1
            user.charge_per_minute = 123
            user.balance = 100
            db.session.add(user)
            db.session.commit()
            user = User.query.filter_by(id = user.id).first()
            print(user.id)
            msg = Message(
                subject="Email Verification", 
                sender="special_meet@outlook.com", 
                recipients=[user.email], 
                html=f'''
                <html>
                <head></head>
                <body>
                <div style="margin: 20px auto ; background-color: aliceblue; width: 25vw ; padding: 40px; border-radius: 10px; 	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); ">
        <p style="font-family: Arial, Helvetica, sans-serif ; font-size: 35px;">Hi {user.first_name},</p>
        <p style="width: 25vw ; font-size: 22px; font-family: Arial, Helvetica, sans-serif">We are happy you signed up for Special Meet. To start exploring the Special Meet, please confirm your email address.</p>
        <a href="http://localhost:5000/user/verify?user_id={str(user.id)}&confirmation_number={str(user.confirmation_number)}" style="background-color: #FF0000; color: white ; padding: 10px; padding-left: 20px; padding-right: 20px; border-radius: 50px; border: none; hover:background-color: #FF2400 ; ">Verify Now</a>

        <div style="display: flex; flex-direction: column; margin-top: 10px; gap: 1px;">
            <p style="font-weight : bold;">Welcome to Special Meet</p>
        <p style="font-weight : bold;">Special Meet Team ™</p>
        </div>

        
     </div>
                </body>
                </html>
                '''
                
            )
            msg.msgId = msg.msgId.split('@')[0] + "@specialmeet"
            mail.send(msg)
        except exc.IntegrityError:  
            return custom_abort(409, "Email is taken. Please enter another email..")
        except Exception as e:
            print(e)
            return custom_abort(500, "Unexpected server error.") 

        user = User.query.filter_by(id = user.id).first()

        ret = convertor(user , ["password"])
        print(ret)
        token = create_access_token(ret ,  expires_delta=datetime.timedelta(minutes=30))  

        return jsonify({
            "user" : ret,
            "token" : token
        })
    def verify(self, request):
        args = request.args
        if "user_id" not in args or "confirmation_number" not in args:
            return custom_abort(400, "Missing required arguments")

        user = User.query.filter_by(id = args["user_id"], confirmation_number = args["confirmation_number"]).first()
        if user is None:
            return custom_abort(404, "User not found")
        user.verified = 1
        db.session.commit()

        return jsonify({
            "msg" : "Success"
        })
    def confirmPassword(self,request):
        if "email" not in request.form:
            return custom_abort(400, "Missing required key - email")
        email = request.form["email"]
        user = User.query.filter_by(email=email).first()
        if user is None:
            return custom_abort(404, "User not found")

        user.confirmation_number = random.randint(100000, 999999)
        db.session.commit()

        msg = Message(
                subject="Email Verification", 
                sender="special_meet@outlook.com", 
                recipients=[user.email], 
                html=f'''
                <html>
                <head></head>
                <body>
                <div style="margin: 20px auto ; background-color: aliceblue; width: 25vw ; padding: 40px; border-radius: 10px; 	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); ">
                <p style="font-family: Arial, Helvetica, sans-serif ; font-size: 35px;">Hi {user.first_name},</p>
                <p style="width: 25vw ; font-size: 22px; font-family: Arial, Helvetica, sans-serif">Click the button bellow to confirm that you want to reset your password!.</p>
                <a href="http://localhost:5000/user/forgotpassword?user_id={str(user.id)}&confirmation_number={str(user.confirmation_number)}" style="background-color: #FF0000; color: white ; padding: 10px; padding-left: 20px; padding-right: 20px; border-radius: 50px; border: none; hover:background-color: #FF2400 ; ">CONFIRM</a>

                <div style="display: flex; flex-direction: column; margin-top: 10px; gap: 1px;">
                <p style="font-weight : bold;">Welcome to Special Meet</p>
                <p style="font-weight : bold;">Special Meet Team ™</p>
                </div>
                </div>
                </body>
                </html>
                ''')
        msg.msgId = msg.msgId.split('@')[0] + "@specialmeet"
        mail.send(msg)

        return jsonify({
            "msg" : "Success. Please check you mail."
        })
            
    def forgotPassword(self,request):
        args = request.args
        if "user_id" not in args or "confirmation_number" not in args:
            return custom_abort(400, "Missing required arguments")

        user = User.query.filter_by(id = args["user_id"] , confirmation_number = args["confirmation_number"]).first()
        if user is None:
            return custom_abort(404 , "User not found")
        user.password = get_random_alphanumerical(8)
        print(user.password)
        db.session.commit()
        msg = Message(
                subject="Email Verification", 
                sender="special_meet@outlook.com", 
                recipients=["ralevskip@gmail.com"], 
                html=f'''
                <html>
                <head></head>
                <body>
                <div style="margin: 20px auto ; background-color: aliceblue; width: 25vw ; padding: 40px; border-radius: 10px; 	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); ">
                <h1 style="font-family: Arial, Helvetica, sans-serif ; font-size: 30px;">Your password : {user.password}</h1>
                <p>Special Meet Team</p>            
            </div>
        
        </div>
                </body>
                </html>
                ''')
        msg.msgId = msg.msgId.split('@')[0] + "@specialmeet"
        mail.send(msg)
        return jsonify({
            "msg" : "SUCCESS"
        })

user_auth = UserAuth()