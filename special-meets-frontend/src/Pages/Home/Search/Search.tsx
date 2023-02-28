import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../../Redux/Posts/Slice";
import { AppDispatch, RootState } from "../../../Redux/Store";
import SearchJSX from "./SearchJSX";

const Search: React.FC = ({ }) => {
  const dispatch = useDispatch<AppDispatch>()
  const search: string = useSelector((state: RootState) => state.post.posts.search)
  const [focused, setFocused] = useState(false)
  const handleSearch = value => dispatch(setSearch(value))
  return <SearchJSX
    handleSearch={handleSearch}
    search={search}
    focused={focused}
    setFocused={setFocused}
  />;
};

export default Search;
