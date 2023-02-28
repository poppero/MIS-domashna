import React from "react";
import { useEffect } from "react";
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import { useSelector } from "react-redux";
import { MeetingsState } from "../../Redux/Meetings/Interface";
import { RootState } from "../../Redux/Store";
import { UserState } from "../../Redux/User/Interface";

interface CalendarState {
  weekendsVisible: boolean;
  currentEvents: EventApi[];
}

const Calendar: React.FC<{}> = () => {
    const UsersReducer: UserState = useSelector((state : RootState) => state.user)
    const MeetingsReducer: MeetingsState = useSelector((state : RootState) => state.meetings)
    const meetings = MeetingsReducer.meetings.meetings
    const user_current = UsersReducer.user.current
    
    const filteredMeetings = meetings.filter(m => m.participant_one_id === user_current.id)
        let mtgs = []
        filteredMeetings.map(m => {
            let start = new Date(m.date_start)
            const month = (start.getMonth() + 1).toString()
   
            const day = (start.getDate()).toString()
            const start_conv = start.getFullYear() + "-" + (month.length === 1 ? ("0" + month) : month) + "-" + (day.length === 1 ? ("0" + day) : day)

            let end =  new Date(m.date_end)
            end.setDate(end.getDate() + 1)
            const month_end = (end.getMonth() + 1).toString()
            const day_end = (end.getDate() - 1).toString() 
            const end_conv = end.getFullYear() + "-" + (month_end.length === 1 ? ("0" + month_end) : month_end) + "-" + (day_end.length === 1 ? ("0" + day_end) : day_end)


            mtgs.push({
                id : m.id,
                title : m.id,
                start : start_conv +"T"+ m.date_start.slice(17,22) +":00",
                end : end_conv +"T" + m.date_end.slice(17,22)+":00" ,
                allDay : false,
                

            })
        })

    
  return (
    <div className="w-full bg-red-500  flex  pb-4">
      <div className="w-7/12 p-12 mb-4 mx-auto">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={mtgs}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          initialEvents={INITIAL_EVENTS}
        />
      </div>
    </div>
  );
};

export default Calendar;
