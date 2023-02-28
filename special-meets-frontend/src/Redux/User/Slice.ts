import { createSlice } from "@reduxjs/toolkit";
import { UserReducers } from "./Actions"
import { UserState } from "./Interface";


const init: UserState = {
    user: {
        current: null,
        users: [],
        token: "",
        refresh: "",

        registerStatus: "idle",
        registerMessage: "",
        loginStatus: "idle",
        loginMessage: "",
        createStatus: "idle",
        createMessage: "",
        readStatus: "idle",
        readMessage: "",
        updateStatus: "idle",
        updateMessage: "",
    },
    userTypes: {
        readStatus: "idle",
        readMessage: "",
        types: []
    },
    userLanguages: {
        languages: [],
        readStatus: "idle",
        readMessage: "",
    }
}

const UserSlice = createSlice({
    name: "user",
    initialState: init,
    reducers: {
        logout: state => {
            state.user.current = null
            state.user.token = ""
            state.user.loginStatus = "idle"
            state.user.loginMessage = ""
        },
        setUserState: (state: UserState, action) => {
            for (let prop in action.payload) {
                state[prop] = action.payload[prop]
            }
            return state
        },
    },
    extraReducers(builder) {
        for (const action in UserReducers) {
            builder.addCase(action, UserReducers[action])
        }
    }
})


export const { logout, setUserState } = UserSlice.actions
export default UserSlice.reducer