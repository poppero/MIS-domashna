from Config.Config import db
from Config.Models import Comments
from Config.Common import custom_abort
from sqlalchemy import exc
from Config.Common import hash_query_results
from Config.Common import convertor
from flask import jsonify
import datetime


class CommentsCrud:
    def __init__(self):
        pass
    def create(self , request):
        data = request.form
        required_keys = ["user_id" , "post_id" , "comment_text"]
        for key in required_keys:
            if key not in data:
                return custom_abort(400, "Required key is missing from request - " + key)
        try:
            comment = Comments(date = datetime.datetime.now())
            [setattr(comment , key , data[key]) for key in required_keys if key in data]
            db.session.add(comment)
            db.session.commit()
        except Exception as e:
            print(e)
            return custom_abort(500, "Unexpected server error.")  
        comment = Comments.query.filter_by(id= comment.id).first()
        converted = convertor(comment)
        return jsonify({
            "comment" : converted
        })      

    def read(self , request):
        hashed = False 
        if "hashed" in request.args and request.args["hashed"] == "true":
            hashed = True
        post_id = None
        if "post_id" in request.args:
            post_id = int(request.args["post_id"])

        if post_id is not None:
            comment = Comments.query.filter_by(post_id=post_id).all()
            if comment is None:
                return custom_abort(404 , "Comment not found!")
            converted = convertor(comment)
            return jsonify({
                "AllCommentsByPost" : converted
            })        
        else:
            comments = Comments.query.all()
            converted = convertor(comments)
            if type(converted) != type([]):
                converted = [converted]

            if hashed == True:
                converted = hash_query_results(converted, "post_id")
            return jsonify({
                "AllComments" : converted
            })    
    def update(self , request):
        pass
    def delete(self , request):
        pass

commenct_crud = CommentsCrud()    