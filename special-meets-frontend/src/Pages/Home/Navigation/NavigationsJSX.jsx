import { NavLink } from "react-router-dom"

import { RiLogoutBoxFill } from "react-icons/ri"
import { BsFillCalendarDateFill } from "react-icons/bs"
import { AiFillHome, AiFillCamera } from "react-icons/ai"
import { IoIosRose } from "react-icons/io"
import image from "../../../../src/logoElena.png"




const NavigationsJSX = ({
    current,
    handleLogout
}) => (
    <div className="w-[70px] md:w-[150px] text-white pl-2 h-screen py-4 h-auto bg-red-500">
        {/* <img src={image} /> */}
        <NavLink to={"/profile/" + current.id} className="mt-1 group flex items-center gap-2 px-2 py-2 text-base leading-6 font-semibold rounded-full bg-red-500 hover:bg-red-400 font-poppins mr-3 ">
            <img className="w-8 rounded-full border-[0.1rem] " src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" />
            <p className="hidden md:block">@{current.first_name} {current.last_name}</p>
        </NavLink>

        <nav className="mt-5 px-2 flex flex-col gap-3">
            <NavLink to="/home/all" className="flex items-center fill-white text-white stroke-white font-bold text-3xl md:text-lg gap-2 font-poppins">
                <AiFillHome /> <p className="hidden md:block">HOME</p>
            </NavLink>

            <NavLink to="/schedule" className="flex items-center fill-white text-white stroke-white font-bold text-3xl md:text-lg gap-2 font-poppins">
                <BsFillCalendarDateFill /> <p className="hidden md:block">SCHEDULE</p>
            </NavLink>


            <button onClick={e => {
                e.preventDefault()
                handleLogout()
            }} className="flex items-center fill-white text-white stroke-white font-bold text-3xl md:text-lg gap-2 font-poppins">
                <RiLogoutBoxFill />
                <p className="hidden md:block">LOGOUT</p>
            </button>
            <NavLink to="/meetings/m7hc-qfbm-bi92"><AiFillCamera className="text-white " size={35} /></NavLink>
        </nav>

        {/* <RosesStore /> */}
        {/* <RosesShop /> */}
        <div className="bg-white p-1 max-h-[30px] rounded-full ml-6 mt-10 flex items-center">
            <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full ml-[-25px] ">
                <IoIosRose className="text-red-500 text-xl" />
            </div>
            <p className="font-bold text-red-500 block w-[calc(100%-50px)] text-center">${current.balance*0.5}</p>
        </div>
    </div>
)

export default NavigationsJSX