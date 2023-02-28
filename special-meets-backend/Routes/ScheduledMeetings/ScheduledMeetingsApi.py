from flask import request, Blueprint
from Config.Common import crud_routes
from flask_jwt_extended import jwt_required

from Routes.ScheduledMeetings.ScheduledMeetingsCrud import scheduledmeetingscrud

scheduled_meetings_api = Blueprint("scheduled_meetings_api" , __name__)

@scheduled_meetings_api.route("/crud" , methods=["GET" , "POST", "PUT" , "DELETE"])
# @jwt_required()
def sch_meetings_routes():
    return crud_routes(request , scheduledmeetingscrud)