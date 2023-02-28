import { NavLink } from "react-router-dom"
import PeopleYouMayKnow from "../PeopleYouMayKnow"
import SpecialPeople from "../SpecialPeople"


const SearchJSX = ({
    handleSearch,
    search,
    focused,
    setFocused
}) => (
    <div className="w-[270px] min-h-full hidden md:block">

        <div className="relative">
            <input
                type="search"
                name="search"
                placeholder="Search"
                className="block font-bold text-red-500 w-[95%] mx-auto mt-5 bg-white font-poppins h-10 px-10 pr-5 rounded-md text-sm focus:outline-none bg-purple-white shadow border-0"
                onChange={e => {
                    handleSearch(e.target.value)
                }}
                value={search}
                onFocus={e => setFocused(true)}
                onBlur={e => setFocused(false)}
            />
            {focused === true ? <div className="flex flex-col rounded-full absolute top-[50px] w-[95%] mx-[2.5%] rounded overflow-hidden shadow-lg">
                <NavLink className="px-4 py-2 bg-white hover:bg-slate-100 z-10 text-red-500 font-bold" to={"/search/posts/"}>Search In Posts</NavLink>
                <NavLink className="px-4 py-2 bg-white hover:bg-slate-100 z-10 text-red-500 font-bold" to={"/search/users/"}>Search In Users</NavLink>
            </div> : null}
        </div>

        <SpecialPeople />
        <PeopleYouMayKnow />

        <div className="flow-root m-6">
            <div className="flex-1">
                <a href="#">
                    <p className="text-sm leading-6 font-medium text-white font-poppins">Terms Privacy Policy Cookies Imprint Ads info</p>
                </a>
            </div>
            <div className="flex-2">
                <p className="text-sm leading-6 font-medium text-white font-poppins"> © 2020 SpecialMeets, Inc.</p>
            </div>
        </div>
    </div>
)

export default SearchJSX