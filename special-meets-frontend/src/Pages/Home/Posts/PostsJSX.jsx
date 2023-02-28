import PostJSX from "../PostJSX";

const PostsJSX = ({ posts , handleChange , handleSubmit }) => (
  <div className="flex w-[calc(100%-75px)] md:w-[calc(100%-420px)] lg:w-[calc(100%-480px)] lg:px-[30px] mb-[20rem]">
    <div className="w-full border border-gray-300 h-auto   border-t-0  ">
      <div className="flex bg-white h-[7vh]">
        <div className="flex-1 m-2">
          <h2 className="px-4 py-2 text-xl font-semibold text-red-500 font-poppins ">
            Home
          </h2>
        </div>
       
      </div>

      <div id="posts-container" className="overflow-y-auto h-[96vh] bg-white">
        <span id="last">
          <hr className="border-gray-300" />
          <div className="flex bg-white">
            <div className="m-2 w-10 py-1">
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                alt=""
              />
            </div>
            <div className="flex-1 px-2 pt-2 mt-2">
              <textarea onChange={(e) => handleChange(e)}
                className=" bg-transparent text-gray-400 font-medium text-lg w-full max-h-[20vh] min-h-[5vh]"
                rows="2"
                cols="50"
                placeholder="What's happening?"
                name="text"
              ></textarea>
            </div>
          </div>
          <div className="flex bg-white ">
            <div className="w-10"></div>

            <div className=" mt-2  ">
              <div className="flex items-center">
                <div className="flex-1 text-center px-1 py-1 m-2">
                <label>
            <input onChange={(e) => handleChange(e)} type="file" name="image" className="file:bg-red-500
             file:mt-5 file:hover:bg-red-400 file:text-white file:font-bold file:py-2 file:px-8 file:rounded-full file:border-none "  />
        </label>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <button onClick={(e) => handleSubmit(e)} className="bg-red-500 mt-5 hover:bg-red-400 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
                Post
              </button>
            </div>
          </div>
          <hr className="border-slate-300 " />
          {posts.map((post) => (
            <PostJSX post={post} />
          ))}
          <hr className="border-slate-300" />
          <hr className="border-gray-600" />
        </span>
      </div>
    </div>

    <div />
  </div>
);

export default PostsJSX;
