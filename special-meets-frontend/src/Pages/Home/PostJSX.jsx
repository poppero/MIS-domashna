import React, { useState } from "react";
import { AiOutlineDollarCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosRose } from "react-icons/io";
import { FaRegComments } from "react-icons/fa";
import InfoModal from "../../ModalComponents/InfoModal";
import TipsModal from "../../ModalComponents/TipsModal";
import { IonIcon } from "@ionic/react";
import { NavLink } from "react-router-dom";


const PostJSX = (post) => {
  const [modal, setModal] = useState(false);
  const [tipsmodal, setTipsModal] = useState(false);
  return (
    <div className=" bg-white flex flex-col w-full">
      <div className="flex p-4 pb-0 bg-white w-full">
        <a href="#" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
  
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
                alt=""
              />
            </div>
            <div className="ml-3 ">
              <p className="text-base leading-6 font-semibold text-gray-800 font-poppins">
                Elon Musk
                <span className="text-sm leading-5 font-medium font-poppins text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @ElonMusk. 16 April
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>

      <h1 className="font-poppins text-black pl-2 m-4 p-">
        {post.post.text} &lt;3
      </h1>

      <div
        className="flex flex-col justify-center items-center w-full p-10 h-[35rem] mb-4 mt-4 ">
            <img className="object-contain" src={post.post.image}/>
      </div>

      <div className="flex  ">
        <div className="w-full">
          <div className="flex justify-between p-4">
            <div className="flex flex-row gap-1 items-center w-[4rem]">
              <IoIosRose
                onClick={(e) => setTipsModal(true)}
                className="text-slate-400 text-[2.2rem] hover:text-white hover:bg-red-500 hover:rounded-full p-1"
              />

              <h1 className="font-poppins text-sm text-slate-400">34</h1>
            </div>
            <div className="flex flex-row gap-1 items-center w-[4rem]">
              <NavLink to={"/home/" + post.post.id} ><FaRegComments className="text-slate-400 text-[2.2rem] hover:text-white hover:bg-red-500 hover:rounded-full p-1" /></NavLink>
              <h1 className="font-poppins text-sm text-slate-400">123</h1>
            </div>

            <InfoModal modal={modal} setModal={setModal} />

            <TipsModal tipsmodal={tipsmodal} setTipsModal={setTipsModal} />
            <div className="w-[4rem]">
              <AiOutlineInfoCircle
                onClick={(e) => setModal(true)}
                className="text-slate-400 text-[2.2rem] hover:text-white hover:bg-red-500 hover:rounded-full p-1"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-slate-300 " />
      
    </div>
  );
};

export default PostJSX;
