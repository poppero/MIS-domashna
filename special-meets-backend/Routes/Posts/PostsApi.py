from flask import request, Blueprint
from Config.Common import crud_routes
from flask_jwt_extended import jwt_required

from Routes.Posts.PostsCrud import posts_crud


posts_api = Blueprint("posts_api" , __name__)

@posts_api.route("/crud" , methods=["POST" , "PUT" , "GET" , "DELETE"])
# @jwt_required()
def posts_crud_routes():
    return crud_routes(request, posts_crud)


