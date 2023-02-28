const meetingsClass = "profile-page overflow-y-scroll bg-gray-300"
const profileClass = "profile-page  bg-gray-300"

const meetingsClassOverFlo = "md:w-11/12 mx-auto bg-purple-200 pt-2 rounded relative -mt-[21vh] shadow h-full"
const profileClassOverFlo = "md:w-11/12 mx-auto bg-purple-200 pt-2 rounded relative -mt-[21vh] shadow h-[89vh]"

const ProfileContainerJSX = ({
    children,
    selectedComponent
}) => (
    <main className="profile-page overflow-y-scroll   bg-gray-300" >
        <section className="relative block" style={{ height: "300px" }}>
            <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundColor: "#ef4444" }}>
                <span id="blackOverlay" className="w-full h-full absolute opacity-1"></span>
            </div>
            <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: "70px" }} >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    viewBox="0 0 2560 100"
                    version="1.1" x="0" y="0">
                    <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100" ></polygon>
                </svg>
            </div>
        </section>
        
        <div className="md:w-11/12 mx-auto bg-white pt-2 rounded relative -mt-[21vh] shadow h-[96vh] ">
            {children}
        </div>

    </main>
)

export default ProfileContainerJSX