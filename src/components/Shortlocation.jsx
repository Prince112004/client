import React from "react";
import LocTweet from "./LocTweet";

function Shortlocation() {
  return (
    <div className="h-full w-full px-[3vw]">
      <div className="useridandbutton flex justify-between items-center   mb-[1vw]">
        <h1 className=" font-[800] text-3xl"> Tweets Linked to Your Search Area</h1>
        <button className="sentimentalbutton bg-[#2b9348] rounded  px-[2vw] py-[0.95vw]">
          <h1 className="text-[#fff] text-sm">Perform Sentimental Analysis </h1>
        </button>
      </div>
      <LocTweet/>
    </div>
  );
}

export default Shortlocation;
