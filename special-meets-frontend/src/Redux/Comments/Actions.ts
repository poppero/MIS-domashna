import { insertInHash } from "../../Common/functions"
import { buildFromCreator, createHandler } from "../ReduxTemplates"
import { CommentState as SliceInterface } from "./Interface"



export const CommentCreator = {
    createComment: createHandler({
        name: "comments/create",
        method: "POST",
        route: "comments/crud",
        key: "comment",
        skipAuth: false,
        pending: (state: SliceInterface, action) => {
            state.comments.createStatus = "pending"
            state.comments.createMessage = "Creating comment... Please wait."
        },
        fulfilled: (state: SliceInterface, action) => {
            state.comments.createStatus = "fulfilled"
            state.comments.createMessage = "Comment created succesfully."
            state.comments.comments = [...state.comments.comments, action.payload.comment]
            return state
        },
        rejected: (state: SliceInterface, action) => {
            state.comments.createStatus = "rejected"
            state.comments.createMessage = action.payload.msg
            return state
        }
    }),
    readComment: createHandler({
        name: "comments/read",
        method: "GET",
        route: "comments/crud",
        key: "",
        skipAuth: false,
        pending: (state: SliceInterface, action) => {
            state.comments.readStatus = "pending"
            state.comments.readMessage = "Loading comment(s)... Please wait."
        },
        fulfilled: (state: SliceInterface, action) => {
            state.comments.readStatus = "fulfilled"
            state.comments.readMessage = "Comment(s) loaded succesfully."
            state.comments.comments = action.payload.AllCommentsByPost
            return state
        },
        rejected: (state: SliceInterface, action) => {
            state.comments.readStatus = "rejected"
            state.comments.readMessage = action.payload.msg
            return state
        }
    }),
}

export const [CommentActions , CommentReducer] = buildFromCreator(CommentCreator)