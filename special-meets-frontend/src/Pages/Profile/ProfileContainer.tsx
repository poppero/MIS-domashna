import { IonLoading } from "@ionic/react"
import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { User } from "../../Common/Interfaces"
import { PostActions } from "../../Redux/Posts/Actions"
import { MeetingActions } from "../../Redux/Meetings/Actions"
import { PostState } from "../../Redux/Posts/Interface"
import { AppDispatch, RootState } from "../../Redux/Store"
import { UserActions } from "../../Redux/User/Actions"
import { UserState } from "../../Redux/User/Interface"
import CalendarJSX from "./CalendarJSX"
import NavBar from "./Navigation/NavBar"
import ProfileContainerJSX from "./ProfileContainerJSX"
import ProfileInfo from "./ProfileInfo"
import ProfilePosts from "./ProfilePosts"
import { MeetingsState } from "../../Redux/Meetings/Interface"
import Calendar from "./Calendar"
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';


const ProfileContainer: React.FC = ({

}) => {
    const id: number = parseInt(useParams<{ id: string }>().id)

    const dispatch = useDispatch<AppDispatch>()
    const PostsReducer: PostState = useSelector((state: RootState) => state.post)
    const UserReducer: UserState = useSelector((state: RootState) => state.user)
    const MeetingReducer: MeetingsState = useSelector((state: RootState) => state.meetings)

    const selected_user: User = UserReducer.user.users.find(u => u !== null && u !== undefined && u.id === id)
    const current: User = UserReducer.user.current
    const [confirmPassword , setConfirmPassword] = useState<string>("")
    const [selectedComponent , setSelectedComponent] = useState<string>("posts")
    useEffect(() => {
        dispatch(PostActions.readPosts({ arguments: {} }))  
        dispatch(UserActions.readUsers({ arguments: {} }))
        dispatch(MeetingActions.readMeetings({ arguments : {}}))
    }, [])

    const [edit , setEdit] = useState<boolean>(false)
    // const [value, onChange] = useState([new Date(), new Date()]);
    const user_posts = PostsReducer.posts.posts.filter(p => p !== null && p !== undefined && p.user_id === selected_user.id) 
    const meetings_info = MeetingReducer.meetings.meetings.filter(m => m.participant_one_id === current.id)
    return (
        <Fragment>
            <IonLoading isOpen={
                PostsReducer.posts.readStatus === "pending" ||
                UserReducer.user.readStatus === "pending"
            } message="Loading user data... Pelase wait" />
            <NavBar setSelectedComponent={setSelectedComponent} />
            <ProfileContainerJSX selectedComponent={selectedComponent}>
                <ProfileInfo  current={current}
                selected={selected_user} 
                edit={edit} 
                setEdit={setEdit}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword} />
                {/* <div className="bg-red-500 w-2/5 h-1/3">
                <DateTimeRangePicker onChange={onChange} value={value} />
                </div> */}
                {selectedComponent === "posts" ? <ProfilePosts  posts={user_posts} /> : null}
                {selectedComponent === "calendar" ? <Calendar   /> : null}
                
            </ProfileContainerJSX>
        </Fragment>
    )
}

export default ProfileContainer