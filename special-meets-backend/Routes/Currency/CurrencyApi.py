from flask import request, Blueprint
from Config.Common import crud_routes
from flask_jwt_extended import jwt_required

from Routes.Currency.Purchases import purchases_crud
from Routes.Currency.RoseTransactions import transactions_crud


currency_api = Blueprint("currency_api" , __name__)

@currency_api.route("/purchases/crud", methods=["POST", "GET"])
# @jwt_required()
def purchases_routes():
    return crud_routes(request, purchases_crud)

@currency_api.route("/purchases/verify", methods=["GET"])
# @jwt_required()
def verify_purchase():
    return purchases_crud.verify_purchase(request)

@currency_api.route("/transactions/crud", methods=["POST", "GET"])
# @jwt_required()
def transactions_routes():
    return crud_routes(request, transactions_crud)
