export type InfoTypes = "idle" | "warning" | "pending" | "fulfilled" | "rejected"
export interface Info {
    type: InfoTypes,
    message: string
}

export interface User {
    id: number
    email: string
    first_name: string
    last_name: string
    phone_number: string
    create_date: string
    confirmed: 1 | 0
    verified: 1 | 0
    country_id: number
    bio: string
    profile_picture: string
    user_type_id: number
    charge_per_minute: number
}

export interface UserTypes {
    id: number
    name: string
}

export interface UserLanguages {
    id: number
    user_id: number
    language_id: number
}

export interface Post {
    id: number
    user_id: number
    text: string
    image: string
}

export interface LikedPosts {
    id: number
    user_id: number
    post_id: number
}

export interface ScheduledMeetings {
    id : number
    participant_one_id : number
    participant_two_id : number
    date_start : string
    date_end : string
}

export interface Comments {
    id : number 
    date : string 
    user_id : number
    post_id : number 
    comment_text : string
}