from flask import request, Blueprint
from Config.Common import crud_routes
from flask_jwt_extended import jwt_required

from Routes.Users.UsersCrud import users_crud
from Routes.Users.UserAuth import user_auth

users_api = Blueprint("users_api", __name__)

@users_api.route("/auth/login", methods=["POST"])
def login():
    return user_auth.login(request)

@users_api.route("/auth/register", methods=["POST"])
def register():
    return user_auth.register(request)

@users_api.route("/verify", methods=["GET"])
def verify():
    return user_auth.verify(request)

@users_api.route("/confirmpassword" , methods=["POST"])
def confirm():
    return user_auth.confirmPassword(request)

@users_api.route("/forgotpassword" , methods=["GET"])
def forgot():
    return user_auth.forgotPassword(request)

@users_api.route("/crud", methods=["GET", "POST", "PUT", "DELETE"])
@jwt_required()
def user_crud_routes():
    return crud_routes(request, users_crud)

