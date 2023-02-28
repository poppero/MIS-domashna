import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { CommentState } from '../../../Redux/Comments/Interface'
import { RootState } from '../../../Redux/Store'
import CommentJSX from './CommentJSX'
import { useParams } from "react-router"
import { UserState } from '../../../Redux/User/Interface'
import { IonSpinner } from '@ionic/react'


export const Comment :React.FC = () => {

    const id: number = parseInt(useParams<{ id: string }>().id)

    
    const CommentReducer : CommentState = useSelector((state : RootState) => state.comments)
    const UserReducer : UserState = useSelector((state : RootState) => state.user)
    const comments = CommentReducer.comments.comments
    // const comm = comments?.filter(c => c?.post_id === id);
    const users = UserReducer.user.users

  return (
   <Fragment>
     {CommentReducer.comments.readStatus === "pending" ? <div className="flex items-center justify-center my-2">
            <IonSpinner color={"danger"} />
        </div> : <div>
        {comments.map((c, idx) => <CommentJSX index={idx}  comm={c} users={users} />)}
        
    </div>}
   </Fragment>
  )
}
