import { insertInHash, removeFromHash } from "../../Common/functions"
import { createHandler, buildFromCreator } from "../ReduxTemplates"
import { PostState as SliceInterface } from "./Interface"


export const PostCreator = {
    createPost: createHandler({
        name: "posts/create",
        method: "POST",
        route: "posts/crud",
        key: "post",
        skipAuth: false,
        pending: (state: SliceInterface, action) => {
            state.posts.createStatus = "pending"
            state.posts.createMessage = "Creating post... Please wait."
        },
        fulfilled: (state: SliceInterface, action) => {
            state.posts.createStatus = "fulfilled"
            state.posts.createMessage = "Post created succesfully."
            state.posts.posts = insertInHash(state.posts.posts, action.payload.post, "id")
            return state
        },
        rejected: (state: SliceInterface, action) => {
            state.posts.createStatus = "rejected"
            state.posts.createMessage = action.payload.msg
            return state
        }
    }),
    readPosts: createHandler({
        name: "posts/read",
        method: "GET",
        route: "posts/crud",
        key: "",
        skipAuth: false,
        pending: (state: SliceInterface, action) => {
            state.posts.readStatus = "pending"
            state.posts.readMessage = "Loading post(s)... Please wait."
        },
        fulfilled: (state: SliceInterface, action) => {
            state.posts.readStatus = "fulfilled"
            state.posts.readMessage = "Post(s) loaded succesfully."
            state.posts.totalPages = action.payload.total_pages
     
            if (action.payload?.post !== undefined) {
                state.posts.posts = insertInHash(state.posts.posts, action.payload.post, "id")
            }
            else if (action.payload.posts.includes(null)) {
                state.posts.posts = action.payload.posts
            }
            else for (let post of action.payload.posts) {
                state.posts.posts = insertInHash(state.posts.posts, post, "id")
            }

            return state
        },
        rejected: (state: SliceInterface, action) => {
            state.posts.readStatus = "rejected"
            state.posts.readMessage = action.payload.msg
            return state
        }
    }),
    updatePost: createHandler({
        name: "posts/update",
        method: "PUT",
        route: "posts/crud",
        key: "post",
        skipAuth: false,
        pending: (state: SliceInterface, action) => {
            state.posts.updateMessage = "Updating post... Please wait."
            state.posts.updateStatus = "pending"
        },
        fulfilled: (state: SliceInterface, action) => {
            state.posts.updateStatus = "fulfilled"
            state.posts.updateMessage = "Post updated succesfully."
            state.posts.posts = insertInHash(state.posts.posts, action.payload.post, "id")
            return state
        },
        rejected: (state: SliceInterface, action) => {
            state.posts.updateStatus = "rejected"
            state.posts.updateMessage = action.payload.msg
            return state
        }
    }),
    deletePost: createHandler({
        name: "posts/update",
        method: "DELETE",
        route: "posts/crud",
        key: "",
        skipAuth: false,
        pending: (state: SliceInterface, action) => {
            state.posts.deleteStatus = "pending"
            state.posts.deleteMessage = "Updating post... Please wait."
        },
        fulfilled: (state: SliceInterface, action) => {
            state.posts.deleteStatus = "fulfilled"
            state.posts.deleteMessage = "Post updated succesfully."
            state.posts.posts = removeFromHash(state.posts.posts, null, parseInt(action.payload.post_id))
            return state
        },
        rejected: (state: SliceInterface, action) => {
            state.posts.deleteStatus = "rejected"
            state.posts.deleteMessage = action.payload.msg
            return state
        }
    }),
}

export const [PostActions, PostReducers] = buildFromCreator(PostCreator)