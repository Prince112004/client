import React from "react";

function LocTweet() {
  return (
    <div className=" tweetbar px-[1.6vw] flex flex-col justify-center  py-[1.2vw] w-full bg-[#1C3738] rounded">
      <h1 className="text-[#ffffff] leading-[1.4] text-xl ">text</h1>
      <div className="socials mt-[0.7vw] flex items-center gap-[2vw] ">
        <div className="like flex items-center gap-[0.5vw]">
          <i className="ri-heart-line text-[#fff] text-xl"></i>
          <h1 className="text-[#fff] text-sm">3422</h1>
        </div>
        <div className="repost flex items-center gap-[0.5vw]">
          <i className="ri-repeat-2-line text-[#fff]  text-xl"></i>
          <h1 className="text-[#fff] text-sm">432</h1>
        </div>
        <div className="comments flex items-center gap-[0.5vw]">
          <i className="ri-chat-1-line text-[#fff]  text-xl"></i>
          <h1 className="text-[#fff] text-sm">543</h1>
        </div>
        <div className="comments flex items-center gap-[0.5vw]">
          <h1 className="text-[#fff] text-sm font-[600]">Location :</h1>
          <h1 className="text-[#fff] text-sm">Panaji, Goa</h1>
        </div>
      </div>
    </div>
  );
}

export default LocTweet;
