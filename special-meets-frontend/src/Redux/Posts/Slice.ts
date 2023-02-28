import { createSlice, current } from "@reduxjs/toolkit";
import { PostReducers } from "./Actions"
import { PostState } from "./Interface";


const init: PostState = {
    posts: {
        createStatus: "idle",
        createMessage: "",
        readStatus: "idle",
        readMessage: "",
        updateStatus: "idle",
        updateMessage: "",
        deleteStatus: "idle",
        deleteMessage: "",
        posts: [],
        search: "test",
        currentPage : 1,
        totalPages : 1
    },
    likedPosts: {
        createStatus: "idle",
        createMessage: "",
        readStatus: "idle",
        readMessage: "",
        updateStatus: "idle",
        updateMessage: "",
        deleteStatus: "idle",
        deleteMessage: "",
        likes: []
    }
}
const UserSlice = createSlice({
    name: "user",
    initialState: init,
    reducers: {
        setSearch: (state: PostState, action) => {
            state.posts.search = action.payload
            return state
        },
        clearPosts: (state:PostState, action) => {
            state.posts.posts = []
            state.posts.currentPage = 1
            return state
        }
    },
    extraReducers(builder) {
        for (const action in PostReducers) {
            builder.addCase(action, PostReducers[action])
        }
    }
})


export const { setSearch, clearPosts } = UserSlice.actions
export default UserSlice.reducer