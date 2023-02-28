import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosRose } from "react-icons/io";

const RosesShop: React.FC = ({}) => {
  return (
    <div className="max-w-sm rounded-lg bg-white overflow-hidden shadow-xl  mr-20 mt-[2rem]">
      <div className="flex">
        <div className="flex flex-row items-center gap-1 p-3">
          <h2 className="px-4 py-2 text-sm  font-semibold text-red-500 font-poppins">
            Purchase roses
          </h2>
          <IoIosRose className="text-red-500 text-lg" />
        </div>
      </div>

      <hr className="border-red-500" />

      <div className=" flex flex-row  items-center p-6 gap-2 w-full">
        
          <input
            className="bg-slate-50 p-2 rounded-lg outline-none font-poppins text-black"
            type="text"
            placeholder="Number of Roses"
          />
        <a href="" className=" float-right">
            <button className="bg-red-500 hover:bg-red-400  text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-md">
              Buy
            </button>
          </a>
      </div>

      
        <div className="flex flex-row gap-1  p-2 justify-center ">
        <AiOutlineInfoCircle className="text-red-500" size={34}/>
          <h1 className="font-poppins text-red-500 text-md ">
            To connect with special people and stand out in the community, buy
            roses!
          </h1>
      </div>
    </div>
  );
};

export default RosesShop;
