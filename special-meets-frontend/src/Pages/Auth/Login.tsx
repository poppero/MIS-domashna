import { IonLoading, useIonAlert } from "@ionic/react"
import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { AppDispatch, RootState } from "../../Redux/Store"
import { UserActions } from "../../Redux/User/Actions"
import { UserState } from "../../Redux/User/Interface"
import LoginJSX from "./LoginJSX"

const Login: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const UserReducer: UserState = useSelector((state: RootState) => state.user)


    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [infoAlert] = useIonAlert()
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [redirect, setRedirect] = useState<string>("")

    useEffect(() => {
        if (submitted !== true) return
        if (UserReducer.user.loginStatus === "fulfilled") {
            setRedirect("/home")
        }
        if (UserReducer.user.loginStatus === "rejected") {
            infoAlert({ message: UserReducer.user.loginMessage, header: 'Login Error.', buttons: ['OK'] })
        }
    }, [dispatch, UserReducer.user.loginStatus, UserReducer.user.loginMessage])

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const data = new FormData()
        data.append("email", user.email)
        data.append("password", user.password)

        dispatch(UserActions.login({ user: data }))
        setSubmitted(true)
    }
    if (redirect.length > 0) return <Redirect to={redirect} />


    return <Fragment>
        <IonLoading isOpen={UserReducer.user.loginStatus === "pending"} message={UserReducer.user.loginMessage} />
        <LoginJSX
            user={user} 
            setUser={setUser}
            handleSubmit={handleSubmit}
        />
    </Fragment>

}

export default Login