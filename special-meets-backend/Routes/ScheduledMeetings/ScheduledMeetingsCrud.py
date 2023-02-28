from Config.Config import db
from Config.Models import ScheduledMeetings
from Config.Common import custom_abort, get_random_alphanumerical, get_extension
from Config.Constants import constants
from sqlalchemy import exc
from Config.Common import hash_query_results
from Config.Common import convertor
from flask import jsonify

class ScheduledMeetingsCrud:
    def __init__(self):
        pass
    def create(self,request):
        data = request.form
        required_keys = ["participant_one_id" , "participant_two_id" , "date_start" , "date_end"]
        for key in required_keys:
            if key not in data:
                return custom_abort(400, "Required key is missing from request - " + key)

            try:
                sch_meeting = ScheduledMeetings()
                [setattr(sch_meeting , key , data[key]) for key in required_keys if key in data]
                db.session.add(sch_meeting)
                db.session.commit()
            except Exception as e:
                return custom_abort(500, "Unexpected server error.")   

            sch_meeting = ScheduledMeetings.query.filter_by(id = sch_meeting.id).first()
            ret = convertor(sch_meeting)
            return jsonify({
                "ScheduledMeeting" : ret
            })         
    def read(self,request):
        hashed = True if "hashed" in request.args and request.args["hashed"] == "true" else False
        id = None
        if "id" in request.args:
            id = int(request.args["id"])
        if id is not None:
            sch_meeting = ScheduledMeetings.query.filter(id = id).first()
            if sch_meeting is None:
                return custom_abort(404 , "Meeting not found!")
            ret = convertor(sch_meeting)
            return jsonify({
                "ScheduledMeeting" : ret
            })
        sch_meetings = ScheduledMeetings.query.all()
        ret = convertor(sch_meetings)

        if hashed == True:
            ret = hash_query_results(ret , "id")

        return jsonify({
            "ScheduledMeetings" : ret
        })        

    def update(self,request):
        required_keys = ["date_start" , "data_end"]
        data = request.form
        for key in required_keys:
            if key not in data:
                return custom_abort(400, "Required key is missing from request - " + key)
        sch_meeting = ScheduledMeetings.query.filter_by(id = int(data["id"])).first()

        if sch_meeting is None:
            return custom_abort(404, "User not found!")
        try:
            [setattr(sch_meeting , key , data[key]) for key in required_keys if key in data]
            db.session.commit()
        except Exception as e:
            return custom_abort(500, "Unexpected server error.") 

        sch_meeting = ScheduledMeetings.query.filter_by(id = sch_meeting.id).first()


        ret = convertor(sch_meeting)
        return jsonify({
            "scheduled_meeting" : ret
        })            
    def delete(self,request):
        pass

scheduledmeetingscrud = ScheduledMeetingsCrud()