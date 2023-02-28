from Config.Config import db
from Config.Models import LikedPosts
from Config.Common import custom_abort, get_random_alphanumerical, get_extension
from Config.Constants import constants
from sqlalchemy import exc
from Config.Common import hash_query_results
from Config.Common import convertor
from flask import jsonify

class LikedPostsCrud:
    def __init__(self):
        pass
    def create(self,request):
        data = request.form
        required_keys = ["user_id" , "post_id"]
        for key in required_keys:
            if key not in data:
                return custom_abort(400, "Required key is missing from request - " + key)
            try:
                likedpost = LikedPosts()
                [setattr(likedpost , key , data[key]) for key in required_keys if key in data]
                db.session.add(likedpost)
                db.session.commit()
            except Exception as e:
                return custom_abort(500, "Unexpected server error.")

            likedpost = LikedPosts.query.filter_by(id = likedpost.id).first()
            ret = convertor(likedpost)
            return jsonify({
                "LikedPost" : ret
            })            
    def read(self,request):
        id = None
        if "id" in request.args:
            id = int(request.args["id"])
        if id is not None:
            likedpost = LikedPosts.query.filter_by(id=id).first()
            ret = convertor(likedpost)
            return jsonify({
                "LikedPost" : ret
            })
        likedposts = LikedPosts.query.all()
        ret = convertor(likedposts)
        return jsonify({
            "LikedPosts" : ret
        })    


    def update(self,request):
        pass
    def delete(self,request):
        print(request.args)
        if "id" not in request.args:
            return custom_abort(400, "Please specify ID")
        _id = int(request.args["id"])
        likedpost = LikedPosts.query.filter_by(id=_id).first()
        db.session.delete(likedpost)
        db.session.commit()

        return jsonify({
            "deleted_like" : _id
        })


likedpostscrud = LikedPostsCrud()    