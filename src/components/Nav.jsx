import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="fixed flex px-[3vw] top-0 left-0 w-full h-[20%] z-[200]">
      <div className="nav1 w-[25%] gap-[0.5vw] flex items-center h-full">
        <div className="imgdiv w-[30%] flex items-center h-[80%]">
          <img
            className="h-[90%] w-[90%] object-contain"
            src="https://upload.wikimedia.org/wikipedia/en/d/dd/Emblem_of_Goa_Police.png"
            alt=""
          />
        </div>
        <div className="logotext w-[50%] h-full flex gap-[0.1vw] flex-col justify-center text-[#1C3738] ">
          <h1 className="leading-[1] font-[800] text-3xl">GOA</h1>
          <h1 className="leading-[1] font-[800] text-3xl">POLICE</h1>
        </div>
      </div>
      <div className="nav2 h-full  flex flex-col gap-[0.25vw] items-center justify-center w-[50%]">
        <h1 className="leading-[1] font-[800] uppercase text-5xl">
          Satya Sandhan
        </h1>
        <h4 className="leading-[1]">A Social Media Monitoring Tool</h4>
      </div>
      <div className="nav3 h-full flex items-center justify-end w-[25%]">
        <Link to='/about'>
          <div className=" px-[2.7vw] cursor-pointer hover:bg-[#fff] rounded py-[1vw] bg-[#1C3738] aboutus">
            <h1 className="font-[500]  tracking-[2.2px] text-xs text-[#ffffff]  uppercase">
              About Us
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
