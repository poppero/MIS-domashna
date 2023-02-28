import { InfoTypes, User, UserTypes, UserLanguages } from "../../Common/Interfaces";


export interface UserState {
    user: {
        current: User | null
        users: Array<User | null>
        token: string
        refresh: string

        registerStatus: InfoTypes
        registerMessage: string
        loginStatus: InfoTypes
        loginMessage: string
        createStatus: InfoTypes
        createMessage: string
        readStatus: InfoTypes
        readMessage: string
        updateStatus: InfoTypes
        updateMessage: string
    }
    userTypes: {
        readStatus: InfoTypes
        readMessage: string
        types: Array<UserTypes | null>
    }
    userLanguages: {
        languages: Array<UserLanguages | null>
        readStatus: InfoTypes
        readMessage: string
    }
}