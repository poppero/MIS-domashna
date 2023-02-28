import { MeetingsState } from "./Interface"
import { createSlice } from "@reduxjs/toolkit"
import { MeetingReducer } from "./Actions"

const init: MeetingsState = {
    meetings: {
        meetings: [],
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

const MeetingsSlice = createSlice({
    name: "meetings",
    initialState: init,
    reducers: {
    },
    extraReducers(builder) {
        for (const action in MeetingReducer) {
            builder.addCase(action, MeetingReducer[action])
        }
    }
})


export const { } = MeetingsSlice.actions
export default MeetingsSlice.reducer