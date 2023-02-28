import { register_button_regular, register_buttton_selected } from "../../theme/customClasses"

const RegisterJSX = ({
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

            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div className="w-full">
                    <h1 className="text-2xl font-semibold font-poppins tracking-wider text-gray-700 capitalize ">
                        Create your account now.
                    </h1>

                    <p className="mt-4 text-gray-500  font-poppins">
                        Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                    </p>

                    <div className="mt-6">
                        <h1 className="text-gray-500 font-poppins font-bold">Select type of account</h1>

                        <div className="mt-3 md:flex md:items-center md:-mx-2">
                            <button onClick={e => setUser({...user , user_type_id : 1})} className={user.user_type_id === 1 ? register_buttton_selected : register_button_regular}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>

                                <span className="mx-2 font-bold font-poppins ">
                                    client
                                </span>
                            </button>

                            <button onClick={e => setUser({...user , user_type_id : 3})} className={user.user_type_id === 3 ? register_buttton_selected : register_button_regular}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>

                                <span className="mx-2  font-bold font-poppins">
                                    special person
                                </span>
                            </button>
                        </div>
                    </div>

                    <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm text-gray-500 font-bold font-poppins">First Name</label>
                            <input onChange={e => setUser({...user , first_name : e.target.value})} type="text" placeholder="John" className="block w-full px-5 font-poppins py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 outline-none shadow-lg rounded-md  bg-white" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-500 font-bold font-poppins ">Last name</label>
                            <input onChange={e => setUser({...user , last_name : e.target.value})} type="text" placeholder="Snow" className="block w-full px-5 font-poppins py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 outline-none  rounded-md  bg-white" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-500 font-bold font-poppins ">Phone number</label>
                            <input onChange={e => setUser({...user , phone_number : e.target.value})} type="text" placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 font-poppins py-3 mt-2 text-gray-700 border border-gray-200 outline-none shadow-lg rounded-md  bg-white" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-500 font-bold font-poppins ">Email address</label>
                            <input onChange={e => setUser({...user , email : e.target.value})} type="email" placeholder="johnsnow@example.com" className="block w-full px-5 font-poppins py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 outline-none shadow-lg rounded-md  bg-white" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-500 font-bold font-poppins ">Password</label>
                            <input onChange={e => setUser({...user , password : e.target.value})} type="password" placeholder="Enter your password" className="block w-full px-5 font-poppins py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 outline-none shadow-lg rounded-md  bg-white" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-500 font-bold font-poppins ">Confirm password</label>
                            <input onChange={e => setUser({...user , confirm : e.target.value})} type="password" placeholder="Enter your password" className="block w-full px-5 font-poppins py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 outline-none shadow-lg rounded-md  bg-white" />
                        </div>

                        <button
                            onClick={e => handleSubmit(e)}
                            className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md shadow-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span className="font-poppins">Sign Up </span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
)

export default RegisterJSX