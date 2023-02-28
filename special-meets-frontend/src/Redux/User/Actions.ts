import { insertInHash, removeFromHash } from "../../Common/functions"
import { createHandler, buildFromCreator } from "../ReduxTemplates"
import { UserState as SliceInterface } from "./Interface"


export const UserCreator = {
    login: createHandler({
        name: "user/login",
        method: "POST",
        route: "user/auth/login",
        key: "user",
        skipAuth: true,
        pending: (state:SliceInterface, action) => {
            state.user.loginStatus = "pending"
            state.user.loginMessage = "Logging in... Please wait.."
            return state
        },
        fulfilled: (state:SliceInterface, action) => {
            state.user.loginStatus = "fulfilled"
            state.user.loginMessage = "Login success."
            state.user.current = action.payload.user
            state.user.users = insertInHash(state.user.users, action.payload.user, "id")
            state.user.token = action.payload.token
            state.user.refresh = action.payload.refresh
            return state
        },
        rejected: (state:SliceInterface, action) => {
            state.user.loginStatus = "rejected"
            state.user.loginMessage = action.payload.msg
            return state
        }
    }),
    register: createHandler({
        name: "user/register",
        method: "POST",
        route: "user/auth/register",
        key: "user",
        skipAuth: true,
        pending: (state:SliceInterface, action) => {
            state.user.registerStatus = "pending"
            state.user.registerMessage = "Registering user... Please wait."
            return state
        },
        fulfilled: (state:SliceInterface, action) => {
            state.user.registerStatus = "fulfilled"
            state.user.registerMessage = "User registered successfully."
            state.user.current = null
            state.user.users = insertInHash(state.user.users, action.payload.user, "id")
            return state
        },
        rejected: (state:SliceInterface, action) => {
            state.user.registerStatus = "rejected"
            state.user.registerMessage = action.payload.msg
            return state
        }
    }),
    createUser : createHandler({
        name: "user/create",
        method: "POST",
        route: "user/crud",
        key: "user",
        skipAuth: false,
        pending: (state:SliceInterface, action) => {
            state.user.createStatus = "pending"
            state.user.createMessage = "Creating user... Please wait."
        },
        fulfilled: (state:SliceInterface, action) => {
            state.user.createStatus = "fulfilled"
            state.user.createMessage = "User created succesfully."
            state.user.users = insertInHash(state.user.users, action.payload.user, "id")
            return state
        },
        rejected: (state:SliceInterface, action) => {
            state.user.createStatus = "rejected"
            state.user.createMessage = action.payload.msg
            return state
        }
    }),
    readUsers : createHandler({
        name: "user/read",
        method: "GET",
        route: "user/crud",
        key: "",
        skipAuth: false,
        pending: (state:SliceInterface, action) => {
            state.user.readStatus = "pending"
            state.user.readMessage = "Loading user(s)... Please wait."
        },
        fulfilled: (state:SliceInterface, action) => {
            state.user.readStatus = "fulfilled"
            state.user.readMessage = "User(s) loaded succesfully."
            if (action.payload?.user !== undefined) {
                state.user.users = insertInHash(state.user.users, action.payload.user, "id")
                if (action.payload.user.id === state.user.current.id) {
                    state.user.current = action.payload.user
                }
            }
            else if (action.payload.users.includes(null)) {
                state.user.users = action.payload.users
                for (const user of action.payload.users) {
                    if (user !== null && user.id === state.user.current.id) {
                        state.user.current = user
                    }
                }
            }
            else for (let user of action.payload.users) {
                if (user !== null && user.id === state.user.current.id) {
                    state.user.current = user
                }
                state.user.users = insertInHash(state.user.users, user, "id")
            }

            return state
        },
        rejected: (state:SliceInterface, action) => {
            state.user.readStatus = "rejected"
            state.user.readMessage = action.payload.msg
            return state
        }
    }),
    updateUser : createHandler({
        name: "user/update",
        method: "PUT",
        route: "user/crud",
        key: "user",
        skipAuth: false,
        pending: (state:SliceInterface, action) => {
            state.user.updateMessage = "Updating user... Please wait."
            state.user.updateStatus = "pending"
        },
        fulfilled: (state:SliceInterface, action) => {
            state.user.updateStatus = "fulfilled"
            state.user.updateMessage = "User updated succesfully."
            if (action.payload.user.id === state.user.current.id) state.user.current = action.payload.user
            state.user.users = insertInHash(state.user.users, action.payload.user, "id")
            return state
        },
        rejected: (state:SliceInterface, action) => {
            state.user.updateStatus = "rejected"
            state.user.updateMessage = action.payload.msg
            return state
        }
    }),
    readUserTypes : createHandler({
        name: "user/user_types/read",
        method: "GET",
        route: "user_types/crud",
        key: "",
        skipAuth: false,
        pending: (state:SliceInterface, action) => {
            state.userTypes.readStatus = "pending"
            state.userTypes.readMessage = "Loading user types... Please wait."
            return state
        },
        fulfilled: (state:SliceInterface, action) => {
            state.userTypes.readStatus = "fulfilled"
            state.userTypes.readMessage = "User types loaded succesfully."
            state.userTypes.types = action.payload.types
            return state
        },
        rejected: (state:SliceInterface, action) => {
            state.userTypes.readStatus = "rejected"
            state.userTypes.readMessage = action.payload.msg
            
            return state
        }
    }),
}

export const [UserActions, UserReducers] = buildFromCreator(UserCreator)