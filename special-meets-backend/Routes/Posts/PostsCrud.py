from Config.Config import db
from Config.Models import Posts
from Config.Common import custom_abort, get_random_alphanumerical, get_extension
from Config.Constants import constants
from sqlalchemy import exc
from Config.Common import hash_query_results
from Config.Common import convertor
from flask import jsonify
from Config.Config import uri


class PostsCrud:
    def __init__(self):
        pass
    def create(self,request):
        data = request.form
        files = request.files
        required_keys = ["user_id", "text"]
        for key in required_keys:
            if key not in data:
                return custom_abort(400, "Required key is missing from request - " + key)

        if "image" not in files:
            return custom_abort(400, "Please attach an image.")

        image = files["image"]
        relative_path = "posts/" + get_random_alphanumerical(16) + "." + get_extension(image)
        image.save(constants["static_root"] + relative_path)

        try:
            post = Posts(image = relative_path) 
            [setattr(post , key , data[key]) for key in required_keys if key in data]
            db.session.add(post)
            db.session.commit()
        except Exception as e:
            print(e)
            return custom_abort(500, "Unexpected server error.")

        post = Posts.query.filter_by(id = post.id).first()
        ret = convertor(post)
        return jsonify({
            "post" : ret
        })           

    def read(self,request):
        hashed = False
        if "hashed" in request.args and request.args["hashed"] == "true":
            hashed = True
        id = None
        if "id" in request.args:
            id = int(request.args["id"])
        page = 1  if "page" not in request.args else int(request.args["page"]) 
        per_page = 10 if "per_page" not in request.args else int(request.args["per_page"])

        if id is not None:
            post = Posts.query.filter_by(id = id).first()
            if post is None:
                return custom_abort(404 , "Post not found!")
            ret = convertor(post)
            return jsonify({
                "post" : ret
            })
        posts = Posts.query.paginate(page , per_page , error_out=False)
        
        
        
        ret = convertor(posts.items)
        if type(ret) != type([]):
            ret = [ret]

        if hashed == True:
            ret = hash_query_results(ret , "id")
        if posts.items:
            if len(ret) < per_page and page == 1:
                print(ret)
                return jsonify({
                    "posts" : ret, 
                    "page" : posts.page,
                    "per_page" : posts.per_page,
                    "total_pages" : 1
                })
            elif len(ret) < per_page:
                return jsonify({
                "posts" : ret,
                "page": posts.page,
                "per_page": per_page,
                "total_pages": posts.pages
            })
            else:
                return jsonify({
                "posts" : ret,
                "page": posts.page,
                "per_page": per_page,
                "total_pages": posts.pages
            })

        else:
            return jsonify({
                "posts" : [],
                "page" : page,
                "per_page" : per_page,
                "total_pages" : 0
            })   
    def update(self,request):
        pass
    def delete(self,request):
        pass

posts_crud = PostsCrud()    