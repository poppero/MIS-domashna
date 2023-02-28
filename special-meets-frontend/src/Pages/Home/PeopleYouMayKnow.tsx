
import { IonSpinner } from "@ionic/react";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { UserState } from "../../Redux/User/Interface";

const PeopleYouMayKnow: React.FC = ({ }) => {

    const UsersReducer: UserState = useSelector((state: RootState) => state.user)
    const [arrayRandom, setArrayRandom] = useState([])
    
    useEffect(() => {
        if (UsersReducer.user.readStatus !== "fulfilled" || arrayRandom.length > 0) return
        const temp = []
        const array = UsersReducer.user.users.filter(u => u?.user_type_id === 3)
        let index = Math.floor(Math.random() * array.length)
        let index1 = Math.floor(Math.random() * array.length)
        if (index === index1) {
            index = Math.floor(Math.random() * array.length)
        }
        temp.push(array[index])
        temp.push(array[index1])
        setArrayRandom(temp)
    }, [UsersReducer.user.readStatus])

    return <div className="block max-w-[95%] mx-auto my-4 rounded-lg bg-white overflow-hidden shadow-xl">
        <div className="flex">
            <div className="flex-1 m-2">
                <h2 className="px-4 py-2 text-sm font-semibold text-red-500 font-poppins">People you may know</h2>
            </div>
        </div>


        <hr className="border-red-500" />

        {arrayRandom.length === 0 ? <div className="flex items-center justify-center my-2">
            <IonSpinner color={"danger"} />
        </div> : arrayRandom.map(u => u === undefined ? null : <Fragment key={u.id}>
            <div className="flex flex-shrink-0 pb-2">
                <div className="flex-1 ">
                    <div className="flex items-center">
                        <div>
                            <img className="inline-block h-10 w-auto rounded-full ml-4 mt-2" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                        </div>
                        <div className="ml-3 mt-3">
                            <p className="text-base leading-6 font-medium text-gray-800 font-poppins">
                                {u.first_name}
                            </p>
                            <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150 font-poppins">
                                @ {u.first_name + ' ' + u.last_name}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <hr className="border-red-500" />
        </Fragment>)}


    </div>;
};

export default PeopleYouMayKnow;



