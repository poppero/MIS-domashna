from flask import request, Blueprint
from Config.Common import crud_routes
from flask_jwt_extended import jwt_required

from Routes.LikedPosts.LikedPostsCrud import likedpostscrud

likedposts_api = Blueprint("likedposts_api" , __name__)

@likedposts_api.route("/crud" , methods=["GET", "POST" ,"DELETE"])
@jwt_required()
def likedposts_crud():
    return crud_routes(request, likedpostscrud)