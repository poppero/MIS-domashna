import { InfoTypes, ScheduledMeetings } from "../../Common/Interfaces"

export interface MeetingsState {
    meetings: {
        createStatus: InfoTypes
        createMessage: string
        readStatus: InfoTypes
        readMessage: string
        updateStatus: InfoTypes
        updateMessage: string
        deleteStatus: InfoTypes
        deleteMessage: string
        meetings: Array<ScheduledMeetings | null>
    }
}