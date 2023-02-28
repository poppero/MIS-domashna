import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostActions } from "../../../Redux/Posts/Actions";
import { PostState } from "../../../Redux/Posts/Interface";
import { clearPosts } from "../../../Redux/Posts/Slice";
import { AppDispatch, RootState } from "../../../Redux/Store";
import PostsJSX from "./PostsJSX";

function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const Posts: React.FC = ({ }) => {
  var test = 1
  const dispatch = useDispatch<AppDispatch>();
  const PostsReducer: PostState = useSelector((state: RootState) => state.post);
  const handle_call = () => {

    const container = document.getElementById("posts-container");
    if (PostsReducer.posts.totalPages >= test) {
      if (
        container.scrollTop + 1000 > container.scrollHeight &&
        PostsReducer.posts.readStatus !== "pending"
      ) {
        dispatch(PostActions.readPosts({ arguments: { page: test, per_page: 10 } }));
        test += 1
      }
    }
    else {
    }
  };

  const debouncedFunction = debounce(handle_call, 500);
  useEffect(() => {
    dispatch(clearPosts({}));
    dispatch(PostActions.readPosts({ arguments: { page: 1 } }));
    const container = document.getElementById("posts-container");
    container.addEventListener("scroll", debouncedFunction);
  }, []);
  const posts = PostsReducer.posts.posts.filter(
    (p) =>
      p !== null &&
      p !== undefined &&
      (PostsReducer.posts.search === undefined ||
        PostsReducer.posts.search.length === 0 ||
        p.text.toLowerCase().includes(PostsReducer.posts.search.toLowerCase()))
  );


  const current_user = useSelector((state: RootState) => state.user.user.current)
  const [post, setPost] = useState({
    user_id: "",
    text: "",
    image: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append("user_id", (current_user.id).toString())
    data.append("text", post["text"])
    data.append("image", post["image"])
    dispatch(PostActions.createPost({ post: data }))
  }
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.name === "image" ? e.target.files[0] : e.target.value })
  }

  return (
    <PostsJSX posts={posts} handleChange={handleChange} handleSubmit={handleSubmit} />
    // <Test />
  );
};

export default Posts;
