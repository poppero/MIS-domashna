import { InfoTypes , Comments } from "../../Common/Interfaces"


export interface CommentState {
    comments : {
        createStatus: InfoTypes
        createMessage: string
        readStatus: InfoTypes
        readMessage: string
        updateStatus: InfoTypes
        updateMessage: string
        deleteStatus: InfoTypes
        deleteMessage: string
        comments: Array<Comments | null>
    }
}