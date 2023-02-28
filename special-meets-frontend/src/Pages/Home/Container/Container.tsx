import { Fragment, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { AppDispatch } from "../../../Redux/Store"
import { UserActions } from "../../../Redux/User/Actions"
import Navigations from "../Navigation/Navigations"
import NavigationsJSX from "../Navigation/NavigationsJSX"
import Post from "../Posts/Post"
import Posts from "../Posts/Posts"
import Search from "../Search/Search"

import ContainerJSX from "./ContainerJSX"

const Container: React.FC = ({

}) => {
    const id:number = parseInt(useParams<{id: string}>().id)

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(UserActions.readUsers({ arguments: {} }))
    }, [])

    

    return (
        <div className="bg-red-500 min-h-screen">
            <div className="flex max-w-[1500px] mx-auto">
                <Navigations />
                {isNaN(id) ? <Posts /> : <Post post_id={id} />}
                <Search />
            </div>
        </div>
    )
}

export default Container