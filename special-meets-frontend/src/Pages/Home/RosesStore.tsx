import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsInfo } from "react-icons/bs";
import { IoIosRose } from "react-icons/io";

const RosesStore: React.FC = ({}) => {

    return <div className="max-w-sm rounded-lg bg-white overflow-hidden shadow-xl mx-auto  mt-[5rem]">
  <div className="flex">
      <div className="flex flex-row items-center gap-1 p-3">
          <h2 className="px-4 py-2 text-sm  font-semibold text-red-500 font-poppins">Current balance</h2>
          
      </div>
  </div>


  <hr className="border-red-500" />


  <div className="flex flex-shrink-0 items-center p-2 gap-2">
      
          
        <h1 className="text-black font-poppins p-2">Roses in USD: 17.5$</h1>


      
     
  </div>
  


  <div className="flex flex-shrink-0 p-3">
      <div className="flex flex-row gap-1 p-1">
          <h1 className="font-poppins text-black ">Roses : 45</h1>
          <IoIosRose className="text-red-500 text-xl" />
          

      </div>

  </div>

  <div className="flex flex-row gap-2 justify-center items-center p-2">
    <AiOutlineInfoCircle className="text-red-500 text-lg"/>
    <h1 className="font-poppins text-red-500">Each rose cost 0.50$</h1>
  </div>

  




</div>;
};

export default RosesStore;



