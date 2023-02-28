import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer } from 'redux-persist'

import UserReducer from './User/Slice'
import PostReducers from './Posts/Slice'
import MeetingsReducer from './Meetings/Slice'
import  CommentReducer from './Comments/Slice'


const persistConfig = {
    key: 'video-calls',
    storage,
}

export const store = configureStore({
    reducer: persistReducer(persistConfig, combineReducers({
        user: UserReducer,
        post: PostReducers,
        meetings: MeetingsReducer,
        comments : CommentReducer
    })),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch