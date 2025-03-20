import React from "react";

function Tweetbar({tweet}) {
  return (
    <div className=" tweetbar px-[1.6vw] flex flex-col justify-center  py-[1.2vw] w-full bg-[#1C3738] rounded">
      <h1 className="text-[#ffffff] leading-[1.4] text-xl ">
        {tweet.text}
      </h1>
      <div className="socials mt-[0.7vw] flex items-center gap-[2vw] ">
        <div className="like flex items-center gap-[0.5vw]">
          <i className="ri-heart-line text-[#fff] text-xl"></i>
          <h1 className="text-[#fff] text-sm">{tweet.favorites}</h1>
        </div>
        <div className="repost flex items-center gap-[0.5vw]">
          <i className="ri-repeat-2-line text-[#fff]  text-xl"></i>
          <h1 className="text-[#fff] text-sm">{tweet.retweets}</h1>
        </div>
        <div className="comments flex items-center gap-[0.5vw]">
          <i className="ri-chat-1-line text-[#fff]  text-xl"></i>
          <h1 className="text-[#fff] text-sm">{tweet.replies}</h1>
        </div>
        <div className="comments flex items-center gap-[0.5vw]">
          <h1 className="text-[#fff] text-sm font-[400]">Created At :</h1>
          <h1 className="text-[#fff] text-sm">{tweet.created_at}</h1>
        </div>
      </div>
    </div>
  );
}

export default Tweetbar;
