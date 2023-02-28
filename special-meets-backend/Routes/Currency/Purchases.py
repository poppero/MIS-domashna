from Config.Config import db
from Config.Models import Purchases, User
from Config.Common import custom_abort, get_random_alphanumerical, generate_secret_key
from Config.Constants import constants
from Config.Common import hash_query_results
from Config.Common import convertor
from flask import jsonify
import datetime

class PurchasesCrud:
    def __init__(self):
        # id
        # user_id
        # amount
        # date
        # secret_code
        # confirmed
        pass

    def create(self,request):
        data = request.form
        files = request.files
        required_keys = ["user_id", "amount"]
        for key in required_keys:
            if key not in data:
                return custom_abort(400, "Required key is missing from request - " + key)

        try:
            purchase = Purchases()
            [setattr(purchase , key , data[key]) for key in required_keys if key in data]
            purchase.confirmed = 0
            purchase.date = datetime.datetime.utcnow()
            purchase.secret_code = generate_secret_key(64)
            db.session.add(purchase)
            db.session.commit()
        except Exception as e:
            print(e)
            return custom_abort(500, "Unexpected server error.")

        purchase = Purchases.query.filter_by(id = purchase.id).first()
        ret = convertor(purchase, ["secret_code"])
        
        return jsonify({ "purchase" : ret })

    def read(self,request):
        hashed = True if "hashed" in request.args and request.args["hashed"] == "true" else False
        id = None if "id" not in request.args else int(request.args["id"])

        if id is not None:
            purchase = Purchases.query.filter_by(id = id).first()
            if purchase is None:
                return custom_abort(404 , "Post not found!")
            ret = convertor(purchase, ["secret_code"])
            return jsonify({
                "purchase" : purchase
            })
        purchases = Purchases.query.all()
        ret = convertor(purchases, ["secret_code"])
        if type(ret) != type([]):
            ret = [ret]

        if hashed == True:
            ret = hash_query_results(ret , "id")

        return jsonify({ "purchases" : ret})

    def verify_purchase(self, request):
        if "purchase_id" not in request.args or "key" not in request.args:
            return custom_abort(400, "You cannot verify this purchase.")
        
        purchase = Purchases.query.filter_by(id = int(request.args["purchase_id"]), secret_code=request.args["key"]).first()

        if purchase is None:
            return custom_abort(404, "This purchase could not be verified or found in our database. ")
        
        purchase.confirmed = 1
        user = User.query.filter_by(id = purchase.user_id).first()
        user.balance = user.balance + purchase.amount
        db.session.commit()
        ret = convertor(purchase, ["secret_code"])

        return jsonify({ "purchase" : ret })

    def update(self,request):
        pass
    def delete(self,request):
        pass

purchases_crud = PurchasesCrud()