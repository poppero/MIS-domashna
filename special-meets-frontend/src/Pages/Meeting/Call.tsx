import React, { useState } from 'react'
import CallJSX from './CallJSX'

export const Call = () => {
    const [mic , setMic] = useState<boolean>(true)
    const [cam , setCam] = useState<boolean>(true)
  return (
    <div>
        <CallJSX setMic={setMic} setCam={setCam} mic={mic} cam={cam}/>
    </div>
  )
}
