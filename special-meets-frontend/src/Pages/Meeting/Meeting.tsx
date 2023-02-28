
import React, { useState } from 'react'
import MeetingJSX from './MeetingJSX'

export const Meeting = () => {
    const [mic , setMic] = useState<boolean>(true)
    const [cam , setCam] = useState<boolean>(true)
  return (
    <div>
        <MeetingJSX setMic={setMic} setCam={setCam} mic={mic} cam={cam} />
    </div>
  )
}
