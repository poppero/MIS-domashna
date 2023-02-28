import React from "react";

const CommentJSX = ({ comm, index , users}) => {
  const reg_class = "flex flex- gap-4  items-center w-full p-6";
  const even_class =
    "flex flex- gap-4 bg-neutral-100 items-center w-full p-6";
  return (
   <div className={index % 2 === 0 ? "w-full bg-neutral-100" : "w-full"}>
    <h1 className="p-2"></h1>
     <div className={index % 2 === 0 ? even_class : reg_class}>
      <div className="flex flex-row gap-2">
        <span className="min-w-[4rem] min-h-[4rem] rounded-full bg-red-500" />
        <div className="flex flex-row gap-4 items-center w-full ">
          <h1 className="font-poppins text-slate-400">@{users.find(u => u?.id === comm.user_id).first_name}</h1>
          <h1 className="font-poppins text-black ">{comm.comment_text}</h1>
        </div>
 
      </div>
      
      
    </div>
    <h1  className="text-center p-2 text-slate-400 font-poppins">{comm.date.slice(0,25)}</h1>
   </div>
  );
};

export default CommentJSX;
