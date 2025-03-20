import React from "react";

function Locsentimentbar() {
  return (
    <div className="sentimentbar py-[1.2vw] px-[1.6vw] rounded flex w-full bg-[#1C3738]">
      <div className="tweettext flex flex-col justify-center h-full w-[70%]">
        <h1 className="text-[#fff] mt-[0.3vw]">
          Beneath the starlit sky, dreams intertwined with constellations. The
          universe unfolded its secrets, inviting explorers to navigate through
          galaxies, where imagination painted vivid landscapes of wonder and
          possibility.
        </h1>
        <div className="socials mt-[0.5vw] flex gap-[2vw] ">
          <div className="like flex items-center gap-[0.5vw]">
            <i class="ri-heart-line text-[#fff] text-xl"></i>
            <h1 className="text-[#fff] text-sm">23</h1>
          </div>
          <div className="comments flex items-center gap-[0.5vw]">
            <i class="ri-chat-1-line text-[#fff]  text-xl"></i>
            <h1 className="text-[#fff] text-sm">6</h1>
          </div>
        </div>
      </div>
      <div className="buttons flex justify-end gap-[1.5vw] items-center h-full w-[30%]">
        <button className="bg-[#2b9348] px-[1.5vw] h-fit py-[0.7vw] rounded">
          <h1 className="text-[0.9vw] text-[#fff]">Perform Network Analysis</h1>
        </button>
        <button className="bg-[#c1121f] px-[1.5vw] h-fit py-[0.7vw] rounded">
          <h1 className="text-[0.9vw] text-[#fff]">Alert Reinforcement</h1>
        </button>
      </div>
    </div>
  );
}

export default Locsentimentbar;
