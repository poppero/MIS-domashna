import { NavLink } from "react-router-dom"
import image from "../../../src/logoElena.png"


const LoginJSX = ({
    user,
    setUser,
    handleSubmit
}) => (
    <section className="bg-white">
        <div className="flex justify-center min-h-screen">
            <div className="hidden bg-cover lg:block lg:w-1/2 blur-sm" style={{
                background: "url('https://img.freepik.com/premium-photo/two-business-people-using-computer-preparing-meeting-discussing-ideas-with-colleagues-background_530697-15114.jpg?w=2000')"
            }}>
            </div>

            <div className="flex flex-col items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-1/2">
                <img src={image} className="h-2/5" />
                <div className="w-full">
                    <h1 className="text-2xl font-semibold font-poppins tracking-wider text-gray-700 capitalize ">
                        Login To Your Account.
                    </h1>

                    <form className="grid grid-cols-1 gap-6 mt-8">

                        <div>
                            <label className="block mb-2 text-sm text-gray-500 font-bold font-poppins ">Email address</label>
                            <input value={user.email} onChange={e => setUser({...user, email: e.target.value})} type="email" placeholder="johnsnow@example.com" className="block w-full px-5 font-poppins py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 outline-none shadow-lg rounded-md  bg-white" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-500 font-bold font-poppins ">Password</label>
                            <input value={user.password} onChange={e => setUser({...user, password: e.target.value})} type="password" placeholder="Enter your password" className="block w-full px-5 font-poppins py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 outline-none shadow-lg rounded-md  bg-white" />
                        </div>

                        <button
                            onClick={e => handleSubmit(e)}
                            className="flex shadow-lg items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span className="font-poppins">Login </span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                        <p className="font-poppins text-red-500">Need an acount? <NavLink to="/auth/register"><span className="underline cursor-pointer">SIGN UP</span></NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
)

export default LoginJSX