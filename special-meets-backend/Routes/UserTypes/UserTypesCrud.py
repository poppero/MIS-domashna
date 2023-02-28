from Config.Config import db
from Config.Models import UserTypes
from Config.Common import custom_abort, get_random_alphanumerical, get_extension
from Config.Constants import constants
from sqlalchemy import exc
from Config.Common import hash_query_results
from Config.Common import convertor
from flask import jsonify

class UserTypesCrud:
    def __init__(self):
        pass
    def create(self , request):
        data = request.form
        required_keys = ["name"]
        for key in required_keys:
            if key not in data:
                return custom_abort(400, "Required key is missing from request - " + key)
        
        try:
            user_type = UserTypes()
            [setattr(user_type , key , data[key]) for key in required_keys if key in data]
            db.session.add(user_type)
            db.session.commit()
        except Exception as e:
            return custom_abort(500, "Unexpected server error.") 

        user_type = UserTypes.query.filter_by(id = user_type.id).first()
        ret = convertor(user_type)
        return jsonify({
            "User_Type" : ret
        })    
    def read(self , request):
        hashed = True if "hashed" in request.args and request.args["hashed"] == "true" else False
        id = None
        if "id" in request.args:
            id = int(request.args["id"])
            if id is not None:
                user_type = UserTypes.query.filter_by(id=id).first()
                if user_type is None:
                    return custom_abort(404 , "User_Type not found!")
                ret = convertor(user_type)
                return jsonify({
                    "User_Type" : ret
                })    
        if hashed == True:
            ret = hash_query_results(ret , "id")   
        user_types = UserTypes.query.all()
        ret = convertor(user_types)
        return jsonify({
            "User_Types" : ret
        })         
    def update(self , request):
        pass
    def delete(self , request):
        pass

usertypescrud = UserTypesCrud()    