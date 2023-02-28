import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../Common/constants";
import { logout } from "./User/Slice";



export const createRequest = async options => {
    let requestOptions = { "method": options.method, "body": options.body, headers: {} }
    if (options.method === "GET") requestOptions = { "method": options.method, headers: {} }

    if (options.skipAuth === false){
        if (options.route === "api/user/auth/refresh") requestOptions["headers"]["Authorization"] = "Bearer " + options.ext.getState().user.user.refresh
        else requestOptions["headers"]["Authorization"] = "Bearer " + options.ext.getState().user.user.token
    }

    const request = await fetch(API_URL + options.route + options.arguments, requestOptions)
    if (request.status === 401) {
        const response = await request.json()
        if (response.msg === "Token has expired") options.ext.dispatch(logout())
        else throw response
    }
    const response = await request.json()
    if (request.status >= 400) throw response
    return response
}

export const createReducer = (options, action) => {
    return {
        [action.pending]: (state, action) => state = options.pending(state, action),
        [action.fulfilled]: (state, action) => state = options.fulfilled(state, action),
        [action.rejected]: (state, action) => state = options.rejected(state, action)
    }
}

export const buildArgStringFromArray = args => {
    if (args === undefined || args.length === 0) return ""
    let ret = "?"
    for (const key in args) ret += key + "=" + args[key] + "&"
    return ret.slice(0, - 1)
}

export const createAction = options => createAsyncThunk(
    options.name,
    async (data, ext) => {
        try {
            const res = await createRequest({
                route: options.route,
                method: options.method,
                body: data[options.key] || {},
                arguments: buildArgStringFromArray(data.arguments) || "",
                skipAuth: options.skipAuth,
                ct: options.ct || "multipart/form-data",
                ext
            })
            if(options.dispatchAfterSuccess !== undefined) {
                ext.dispatch(options.dispatchAfterSuccess(options.getValueFromResponseSuccess(res)))
            }
            return res
        } catch (error) {
            return ext.rejectWithValue(error)
        }
    }
)

export const createHandler = options => {
    const action = createAction(options)
    const reducers = createReducer(options, action)

    return { action, reducers }
}

export const buildFromCreator = creator => {
    let actions = {}
    let reducers = {}
    for (const c in creator) {
        actions[c] = creator[c].action
        reducers = { ...reducers, ...creator[c].reducers }
    }

    return [actions, reducers]
}