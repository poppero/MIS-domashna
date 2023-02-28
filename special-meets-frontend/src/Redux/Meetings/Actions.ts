import { insertInHash } from "../../Common/functions"
import { buildFromCreator, createHandler } from "../ReduxTemplates"
import { MeetingsState as SliceInterface } from "./Interface"



export const MeetingCreator = {
    createMeeting: createHandler({
        name: "meetings/create",
        method: "POST",
        route: "scheduled_meetings/crud",
        key: "meeting",
        skipAuth: false,
        pending: (state: SliceInterface, action) => {
            state.meetings.createStatus = "pending"
            state.meetings.createMessage = "Creating meeting... Please wait."
        },
        fulfilled: (state: SliceInterface, action) => {
            state.meetings.createStatus = "fulfilled"
            state.meetings.createMessage = "Meeting created succesfully."
            state.meetings.meetings = insertInHash(state.meetings.meetings, action.payload.meetings, "id")
            return state
        },
        rejected: (state: SliceInterface, action) => {
            state.meetings.createStatus = "rejected"
            state.meetings.createMessage = action.payload.msg
            return state
        }
    }),
    readMeetings: createHandler({
        name: "meetings/read",
        method: "GET",
        route: "scheduled_meetings/crud",
        key: "",
        skipAuth: false,
        pending: (state: SliceInterface, action) => {
            state.meetings.readStatus = "pending"
            state.meetings.readMessage = "Loading meeting(s)... Please wait."
        },
        fulfilled: (state: SliceInterface, action) => {
            state.meetings.readStatus = "fulfilled"
            state.meetings.readMessage = "Meeting(s) loaded succesfully."
            state.meetings.meetings = action.payload.ScheduledMeetings
            return state
        },
        rejected: (state: SliceInterface, action) => {
            state.meetings.readStatus = "rejected"
            state.meetings.readMessage = action.payload.msg
            return state
        }
    }),
    updateMeeting: createHandler({
        name: "meetings/update",
        method: "PUT",
        route: "meetings/crud",
        key: "meeting",
        skipAuth: false,
        pending: (state: SliceInterface, action) => {
            state.meetings.updateMessage = "Updating post... Please wait."
            state.meetings.updateStatus = "pending"
        },
        fulfilled: (state: SliceInterface, action) => {
            state.meetings.updateStatus = "fulfilled"
            state.meetings.updateMessage = "Meeting updated succesfully."
            state.meetings.meetings = insertInHash(state.meetings.meetings, action.payload.meetign, "id")
            return state
        },
        rejected: (state: SliceInterface, action) => {
            state.meetings.updateStatus = "rejected"
            state.meetings.updateMessage = action.payload.msg
            return state
        }
    })
}

export const [MeetingActions , MeetingReducer] = buildFromCreator(MeetingCreator)