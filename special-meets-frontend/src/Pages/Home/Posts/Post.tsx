import { NavLink } from "react-router-dom"
import { MdArrowBackIosNew } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch  ,RootState} from "../../../Redux/Store"
import { UserState } from "../../../Redux/User/Interface"
import { CommentActions } from "../../../Redux/Comments/Actions"
import { useEffect, useState } from "react"
import CommentJSX from "../Comments/CommentJSX"
import { Comment } from "../Comments/Comment"
const Post:React.FC<{ post_id : number }> = ({
    post_id
}) => {
        const post_info =  useSelector((state: RootState) => state.post.posts.posts)
        const UserReducer: UserState = useSelector((state: RootState) => state.user)
        const [errorMess , setErrorMess] = useState("")
        const [comment , setComment] = useState("")
        const user_info = UserReducer.user.current
        const post = post_info.find(p => p?.id === post_id)
        const dispatch = useDispatch<AppDispatch>()
        useEffect(() => {
            setErrorMess("")
            dispatch(CommentActions.readComment({arguments : {post_id : post_id}}))
       
        })
        const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) =>{
            e.preventDefault()
            if(comment === ""){
                setErrorMess("Please comment something!")
            }
            else
            {
                const data = new FormData()
            data.append("user_id" , user_info.id.toString())
            data.append("post_id" , post_id.toString())
            data.append("comment_text" , comment.toString())
            dispatch(CommentActions.createComment({"comment" : data}))
            setComment("")    
        }
            
        }
    return (
        <div className="bg-white h-screen overflow-y-scroll text-red-500 w-[calc(100%-75px)] md:w-[calc(100%-420px)] lg:w-[calc(100%-480px)] lg:mx-[30px] ">
            <NavLink className="bg-red-500 opacity-70 flex items-center w-full text-white px-2 py-3 text-xl font-bold font-poppins" to={"/home/all"}> <MdArrowBackIosNew className="mr-8" /> <p>THREAD</p></NavLink>
            <div className="flex flex-row items-center gap-4 m-4">
            <img src={post?.image} className="w-[4rem] h-[4rem] rounded-full" />
            <div className="flex flex-col ">
            <h1 className="font-poppins text-slate-500">Elon Musk</h1>
            <h1 className="font-poppins text-slate-400">@elonmusk</h1>
            </div>
           
           
            </div>
            <h1 className="pl-4 text-black font-poppins text-xl">Test na post hheheh i comments i taka i taka natamu</h1>
            <div className="overflow-hidden p-4">
            <img src={post?.image}  className="overflow-hidden rounded-xl" />
            </div>
            {/* Hello World {post_id} */}
            
            <div className="flex flex-row items-center gap-4 p-6">
       
            <form onSubmit={(e) => handleSubmit(e)} className="w-full flex flex-row gap-4 p-10">
              
                <input onChange={e => setComment(e.target.value)} className="w-full placeholder:p-2 bg-neutral-100 rounded outline-none p-4 placeholder:text-slate-500 text-black font-poppins placeholder:font-poppins" placeholder="Write a comment.." />
                {comment === "" ? 
                <button  className="bg-red-500 p-2 text-white rounded-full pl-8 pr-8 hover:bg-red-600 cursor-not-allowed">Post</button> 
                
                : 
                <button  className="bg-red-500 p-2 text-white rounded-full pl-8 pr-8 hover:bg-red-600 ">Post</button> 
                }
            </form>
                
            </div>
            {/* {errorMess} */}
            
            {/* <hr className="border-red-500 " /> */}
            <Comment />
         
            {/* <hr className="border-red-500 " /> */}
            
            
       
            
            
        </div>
    )
}

export default Post