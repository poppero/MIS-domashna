import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { PostState } from "../../Redux/Posts/Interface"
import { RootState } from "../../Redux/Store"
import { UserState } from "../../Redux/User/Interface"
import SearchJSX from "./SearchJSX"

const Search: React.FC<{}> = ({ }) => {
    const type: string = useParams<{ type: string }>().type
    const PostReducer:PostState = useSelector((state:RootState) => state.post)
    const UserReducer:UserState = useSelector((state:RootState) => state.user)
    const query = PostReducer.posts.search

    useEffect(() => {
        
    }, [])

    return (
        <SearchJSX
            
        />
    )
}

export default Search