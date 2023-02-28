import { useDispatch, useSelector } from "react-redux"
import { User } from "../../../Common/Interfaces"
import { AppDispatch, RootState } from "../../../Redux/Store"
import { UserState } from "../../../Redux/User/Interface"
import { logout } from "../../../Redux/User/Slice"
import NavigationsJSX from "./NavigationsJSX"

const Navigations:React.FC = ({

}) => {

    const dispatch = useDispatch<AppDispatch>()
    const UserReducer: UserState = useSelector((state :RootState) => state.user)
    const current: User = UserReducer.user.current

    const handleLogout = () => dispatch(logout())

    return (
        <NavigationsJSX current={current} handleLogout={handleLogout}/>
    )
}

export default Navigations