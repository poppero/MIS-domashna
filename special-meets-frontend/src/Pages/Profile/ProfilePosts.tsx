import { Post } from "../../Common/Interfaces"
import {MdCalendarViewMonth , MdCalendarViewWeek} from 'react-icons/md'
import { useState } from "react"
 
export const ProfilePosts: React.FC<{ posts: Array<Post> }> = ({
    posts,

}) => {
        const [clicked , setClicked] = useState<String>("row")
        const rowClass = ' w-full overflow-y-auto flex flex-wrap justify-center items-start gap-1 pb-10 mb-10'
        const colClass = ''
    return (
        <div >
            <div className="w-full flex flex-row justify-center items-center">
            <div className="w-1/2 flex justify-center p-5">
            <MdCalendarViewMonth onClick={() => setClicked("row")} className="text-slate-500 text-3xl"/>
            </div>
            <div className="w-1/2 flex justify-center  p-5">
            <MdCalendarViewWeek onClick={() => setClicked("col")} className="text-slate-500 text-3xl rotate-90" />
            </div>
            </div>
           <div className=" w-full overflow-y-auto flex flex-col justify-center items-center gap-3 " style={{ "maxHeight": "calc(900vh)" }}>
           {posts.map(post => (
                <div
                    className="w-2/5 h-[400px]"
                    style={{
                        "background": "url('" + post.image + "')",
                        "backgroundSize": "cover",
                        "backgroundPosition": "center",
                    }}
                ></div>
            ))}
           </div>
        </div>
    )
}

export default ProfilePosts