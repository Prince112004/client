import React from "react";
import { useNavigate } from "react-router-dom";

function Specificlocationbar({ data }) {
  const { caption, num_comments, num_likes, profile_pic, timestamp, username } =
    data;
    console.log(profile_pic)
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/locpost", { state: { data } });
  };
  return (
    <div className="w-full rounded p-[1.5vw] bg-[#1C3738] ">
      <div className="upperpart">
        <div className="userinfo flex items-center gap-[1vw]">
          <div className="profilepic overflow-hidden h-[3.2vw] w-[3.2vw] rounded-full bg-[#ececec]">
            <img
              src={`${profile_pic}`}
              className="profileimg h-full w-full object-cover object-center"
            ></img>
          </div>
          <div className="username">
            <h1 className="text-white font-[600] text-xl">@{username}</h1>
          </div>
        </div>
      </div>
      <div className="lowerpart">
        <button
          onClick={handleClick}
          className="px-[2vw] mb-[0.7vw] mt-[1.5vw] flex items-center justify-center w-fit py-[0.5vw] rounded bg-[#2b9348]"
        >
          <h1 className=" text-[#fff] text-sm">View Post</h1>
        </button>
        <h1 className="text-[#ffffff] leading-[1.4] text-xl ">{caption}</h1>
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
    </div>
  );
}

export default Specificlocationbar;
