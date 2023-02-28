from Config.Config import db
from Config.Models import User
from Config.Common import custom_abort
from sqlalchemy import exc
from Config.Common import hash_query_results
from Config.Common import convertor
from flask import jsonify


class UsersCrud:

    def __init__(self):
        pass
    
    def create(self, request):
        required_keys = ["email" , "first_name" , "last_name" , "password" , "phone_number" , "country_id"]
        data = request.form
        for key in required_keys:
            if key not in data:
                return custom_abort(400, "Required key is missing from request - " + key)

        try:
            user = User()
            [setattr(user , key , data[key]) for key in required_keys if key in data]
            db.session.add(user)
            db.commit()
        except exc.IntegrityError:  
            return custom_abort(409, "Email is taken. Please enter another email..")
        except Exception as e:
            return custom_abort(500, "Unexpected server error.") 

        user = User.query.filter_by(id = user.id).first()

        ret = convertor("user" , ["password"])

        return jsonify({
            "user" : ret
         })         


    def read(self, request):
        hashed = True if "hashed" in request.args and request.args["hashed"] == "true" else False
        id = None
        if "id" in request.args:
            id = int(request.args["id"])

        if id is not None:
            user = User.query.filter_by(id = id).first()
            if user is None:
                return custom_abort(404 , "User not found!")
            ret = convertor(user , ["password"])
            return jsonify({
                "user" : ret
            })
        user = User.query.all()
        ret = convertor(user , ["password"])

        if hashed ==True:
           ret =  hash_query_results(ret , "id")

        return jsonify({
            "users" : ret
        })   

                   

    def update(self, request):
        required_keys = [ "id"  , "first_name" , "last_name" , "password" , "phone_number" , "bio" , "charge_per_minute"]
        data = request.form
        for key in required_keys:
            if key not in data:
                return custom_abort(400, "Required key is missing from request - " + key)
        user = User.query.filter_by(id = int(data["id"])).first()
        
        if user is None:
            return custom_abort(404, "User not found!")
        print(len(data["password"]))
        if len(data["password"]) == 0:
            required_keys.remove("password")
        try:
            [setattr(user , key , data[key]) for key in required_keys if key in data]
            db.session.commit()
        except exc.IntegrityError:  
            return custom_abort(409, "Email is taken. Please enter another email..")
        except Exception as e:
            return custom_abort(500, "Unexpected server error.") 

        user = User.query.filter_by(id = user.id).first()

        ret = convertor(user , ["password"])

        return jsonify({
            "user" : ret
         })

    def delete(self, request):
        pass

users_crud = UsersCrud()

