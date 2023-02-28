import { CommentState } from "./Interface"
import { createSlice } from "@reduxjs/toolkit"
import { CommentReducer } from "./Actions"
// import { MeetingReducer } from "./Actions"

const init: CommentState = {
    comments: {
        comments: [],
        createStatus: "idle",
        createMessage: "",
        readStatus: "idle",
        readMessage: "",
        updateStatus: "idle",
        updateMessage: "",
        deleteStatus: "idle",
        deleteMessage: ""
    }
}

const CommentsSlice = createSlice({
    name: "comments",
    initialState: init,
    reducers: {
    },
    extraReducers(builder) {
        for (const action in CommentReducer) {
            builder.addCase(action, CommentReducer[action])
        }
    }
})


export const { } = CommentsSlice.actions
export default CommentsSlice.reducer