from Config.Config import db
from Config.Models import User, RoseTransactions
from Config.Common import custom_abort, get_random_alphanumerical
from Config.Constants import constants
from Config.Common import hash_query_results
from Config.Common import convertor
from flask import jsonify
import datetime


class RoseTransactions:

    def __init__(self):
        # id
        # from_id
        # to_id
        # date
        # amount
        pass

    def create(self, request):
        data = request.form
        required = ["from_id", "to_id", "amount"]
        
        for key in required:
            if key not in data:
                return custom_abort(400, "Missing required key - " + key)
        
        user_from = User.query.filtar_by(id = int(data["from_id"])).first()
        user_to = User.query.filtar_by(id = int(data["to_id"])).first()

        if user_from is None:
            return custom_abort(404, "Transaction cannot be completed - Sender not found")

        if user_to is None:
            return custom_abort(404, "Transaction cannot be completed - Reciever not found")

        if user_from.balance < int(data["amount"]):
            return custom_abort(400, "Transaction cannot be completed - insufficient funds.")

        transaction = RoseTransactions(date = datetime.datetime.now())
        [setattr(transaction, key, data[key]) for key in required]
        db.session.add(transaction)
        
        user_from.amount = user_from.amount - int(daata["amount"])
        user_to.amount = user_from.amount + int(daata["amount"])

        db.session.commit()

        transaction = RoseTransactions.query.filter_by(id = transaction.id).first()
        user_from = User.query.filtar_by(id = int(data["from_id"])).first()
        user_to = User.query.filtar_by(id = int(data["to_id"])).first()

        ret = {
            "transaction": convertor(transaction),
            "sender": convertor(user_from, ["password"]),
            "reciever": convertor(user_to, ["password"]),
        }

        return jsonify(ret)

    def read(self, request):
        args = request.args
        
        from_id = None if "user_id" not in args["user_id"] else int(args["user_id"])
        to_id = None if "user_id" not in args["user_id"] else int(args["user_id"])
        hashed = False if "hashed" not in args or args["hashed"] != "true" else True

        transactions = []

        if from_id is not None:
            transactions = RoseTransactions.query.filter_by(from_id = from_id).all()
        elif to_id is not None:
            transactions = RoseTransactions.query.filter_by(to_id = to_id).all()
        else:
            transactions = RoseTransactions.query.all()

        transactions = convertor(transactions)
        if type(transactions) != type([]):
            transactions = [transactions]
        
        if hashed:
            transactions = hash_query_results(transactions, "id")
        
        return jsonify({
            "transactions" : transactions,
            "params" : {
                "from_id" : from_id, "to_id" : to_id, "hashed" : hashed
            }
        })

    def update(self, request):
        pass

    def delete(self, request):
        pass

transactions_crud = RoseTransactions()