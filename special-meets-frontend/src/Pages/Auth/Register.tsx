import React, { Fragment } from "react"
import { IonLoading, useIonAlert } from "@ionic/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { validateEmail } from "../../Common/functions"
import { AppDispatch, RootState } from "../../Redux/Store"
import { UserActions } from "../../Redux/User/Actions"
import { UserState } from "../../Redux/User/Interface"
import RegisterJSX from "./RegisterJSX"

const Register: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const UserReducer: UserState = useSelector((state: RootState) => state.user)


    const [user, setUser] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        confirm: "",
        phone_number: "",
        user_type_id: 1,
    })
    const [infoAlert] = useIonAlert()
    const [redirect, setRedirect] = useState<string>("")
    const [submitted, setSubmitted] = useState<boolean>(false)

    useEffect(() => {
        if (submitted === false) return
        if (UserReducer.user.registerStatus === "fulfilled") {
            infoAlert({ message: "Thank you for joining.", header: 'Register success!', buttons: ['OK'], onWillDismiss: e => setRedirect("/auth/login") })
        } else if (UserReducer.user.registerStatus === "rejected") {
            infoAlert({ message: UserReducer.user.registerMessage, header: 'Register Error.', buttons: ['OK'] })
        }
    }, [dispatch, UserReducer.user.registerStatus, UserReducer.user.registerMessage])
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (validateEmail(user.email) === null) return infoAlert({ message: "Invalid email", header: 'Validation Error.', buttons: ['OK'] })
        if (user.first_name.length < 3) return infoAlert({ message: "First name must be at least 3 characters.", header: 'Validation Error.', buttons: ['OK'] })
        if (user.last_name.length < 3) return infoAlert({ message: "Last name must be at least 3 characters.", header: 'Validation Error.', buttons: ['OK'] })
        if (user.password.length < 8) return infoAlert({ message: "Password must be at least 8 characters.", header: 'Validation Error.', buttons: ['OK'] })
        if (user.password !== user.confirm) return infoAlert({ message: "Passwords do not match.", header: 'Validation Error.', buttons: ['OK'] })
        if (user.phone_number.length < 7) return infoAlert({ message: "Please enter a valid phone number..", header: 'Validation Error.', buttons: ['OK'] })

        const data = new FormData()
        data.append("email", user.email)
        data.append("first_name", user.first_name)
        data.append("last_name", user.last_name)
        data.append("password", user.password)
        data.append("phone_number", user.phone_number)
        data.append("user_type_id", user.user_type_id.toString())

        dispatch(UserActions.register({ user: data }))
        setSubmitted(true)
    }
    if (redirect.length > 0) return <Redirect to={redirect} />
    return <Fragment>
        <IonLoading isOpen={UserReducer.user.registerStatus === "pending"} message={UserReducer.user.registerMessage} />
        <RegisterJSX
            user={user}
            setUser={setUser}
            handleSubmit={handleSubmit}
        />
    </Fragment>
}

export default Register