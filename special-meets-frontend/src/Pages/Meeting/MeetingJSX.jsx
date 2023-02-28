import React from 'react'
import {BiMicrophone , BiCamera, BiMicrophoneOff , BiCameraOff } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const MeetingJSX = ({setMic , setCam , cam , mic}) => {
  return (
    <div className='w-screen h-screen bg-red-500 flex flex-col justify-center items-center'>
        
        <div className='bg-neutral-100 w-1/4 h-1/2 rounded-md flex flex-col justify-center items-center'>
           <div className='flex flex-row gap-4 mb-10 items-center'>
           <img className="inline-block h-[7rem] w-auto rounded-full  " src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />

           <img className="inline-block h-[7rem] w-auto rounded-full " src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
           </div>
            <h1 className='text-red-500 font-poppins text-3xl'>Ready to join?</h1>
            <div className='flex flex-row justify-center items-center gap-4 p-8'>
            {mic === true ? <BiMicrophone onClick={() => setMic(false)} className='text-red-500 text-[2rem]'/> : 
            <BiMicrophoneOff onClick={() => setMic(true)} className='text-red-500 text-[2rem]'/>}
            {cam === true ? <BiCamera onClick={() => setCam(false)} className='text-red-500 text-[2rem]'/> : 
            <BiCameraOff onClick={() => setCam(true)} className='text-red-500 text-[2rem]'/>}
            </div>
            <NavLink to="/meetings/123"><button className='bg-red-500 pl-4 pr-4 hover:bg-red-600 cursor-pointer p-2 mt-4 rounded-3xl'>Join now</button></NavLink>
            <NavLink to="/home/all" className='text-red-500 pt-8 font-poppins'>Back home</NavLink>
        </div>
    </div>
  )
}

export default MeetingJSX