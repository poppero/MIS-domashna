import React from "react";
import {BiMicrophone , BiCamera, BiMicrophoneOff , BiCameraOff } from 'react-icons/bi'
import { MdCallEnd } from "react-icons/md";

const CallJSX = ({setMic , setCam , cam , mic}) => {
  return (
    <div className="h-screen w-screen">
      <div className="w-full h-5/6 bg-neutral-900 "></div>
      <div className="w-full h-1/6 flex flex-row justify-between">
        <span className="w-1/6"></span>
        <div className="w-1/3 flex flex-row gap-8 justify-center items-center">
            <div className="bg-slate-800 p-4 rounded-full hover:bg-slate-700">
            {mic === true ? <BiMicrophone onClick={() => setMic(false)} className="text-white text-3xl"/> :
            <BiMicrophoneOff onClick={() => setMic(true)} className="text-white text-3xl"/>}
            </div>
            <div className="bg-slate-800 p-4 rounded-full hover:bg-slate-700">
            {cam === true ? <BiCamera onClick={() => setCam(false)} className="text-white text-3xl"/> :
            <BiCameraOff onClick={() => setCam(true)} className="text-white text-3xl"/>}
            </div>
            <div className="bg-slate-800 p-4 rounded-full hover:bg-slate-700">
            <MdCallEnd  className="text-white text-3xl"/>
            </div>
        </div>
        <div className="h-full w-1/6 bg-white"></div>
      </div>
    </div>
  );
};

export default CallJSX;
