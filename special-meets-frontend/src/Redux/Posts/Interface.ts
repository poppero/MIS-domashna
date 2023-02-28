import { InfoTypes, Post, LikedPosts } from "../../Common/Interfaces";


export interface PostState {
    posts: {
        createStatus: InfoTypes
        createMessage: string
        readStatus: InfoTypes
        readMessage: string
        updateStatus: InfoTypes
        updateMessage: string
        deleteStatus: InfoTypes
        deleteMessage: string
        posts: Array<Post | null>
        search: string
        currentPage : number
        totalPages : number
    }
    likedPosts: {
        createStatus: InfoTypes
        createMessage: string
        readStatus: InfoTypes
        readMessage: string
        updateStatus: InfoTypes
        updateMessage: string
        deleteStatus: InfoTypes
        deleteMessage: string
        likes: Array<LikedPosts | null>
    }
}