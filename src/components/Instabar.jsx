import React from "react";
import { useNavigate } from "react-router-dom";

function Instabar({instaData}) {
  var{caption, num_likes, num_comments, timestamp} = instaData;
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/post")
    }
  return (
    <div className=" tweetbar px-[1.6vw] flex flex-col justify-center  py-[1.2vw] w-full bg-[#1C3738] rounded">
      <button onClick={handleClick} className="px-[2vw] mb-[0.6vw] flex items-center justify-center w-fit py-[0.5vw] rounded bg-[#2b9348]">
        <h1 className=" text-[#fff] text-sm">View Post</h1>
      </button>
      <h1 className="text-[#ffffff] leading-[1.4] text-xl ">
        {caption}
      </h1>
      <div className="socials mt-[0.7vw] flex items-center gap-[2vw] ">
        <div className="like flex items-center gap-[0.5vw]">
          <i className="ri-heart-line text-[#fff] text-xl"></i>
          <h1 className="text-[#fff] text-sm">{num_likes}</h1>
        </div>
        <div className="comments flex items-center gap-[0.5vw]">
          <i className="ri-chat-1-line text-[#fff]  text-xl"></i>
          <h1 className="text-[#fff] text-sm">{num_comments}</h1>
        </div>
        <div className="comments flex items-center gap-[0.5vw]">
          <h1 className="text-[#fff] text-sm font-[400]">Created At :</h1>
          <h1 className="text-[#fff] text-sm">{timestamp}</h1>
        </div>
      </div>
    </div>
  );
}

export default Instabar;
