from flask import request, Blueprint
from Config.Common import crud_routes
from flask_jwt_extended import jwt_required

from Routes.UserTypes.UserTypesCrud import usertypescrud

usertypes_api = Blueprint("usertypes_api" , __name__)

@usertypes_api.route("/crud" , methods=["GET" , "POST"])
# @jwt_required()
def user_types_crud_routes():
    return crud_routes(request , usertypescrud)
