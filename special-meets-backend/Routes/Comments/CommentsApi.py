from flask import request, Blueprint
from Config.Common import crud_routes
from flask_jwt_extended import jwt_required
from Routes.Comments.CommentsCrud import commenct_crud

# from Routes.Posts.PostsCrud import posts_crud


comments_api = Blueprint("comments_api" , __name__)

@comments_api.route("/crud" , methods=["GET" , "POST" , "PUT" , "DELETE"])
# @jwt_required()
def comments_crud_routes():
    return crud_routes(request  , commenct_crud)
