import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Aboutus() {
  const navigate = useNavigate();
  return (
    <div className="h-full relative w-full flex items-center justify-center">
      <div className=" h-full flex items-center justify-center aboutuslogo">
        <img
          className="h-full w-full opacity-[0.2] object-cover"
          src="https://upload.wikimedia.org/wikipedia/en/d/dd/Emblem_of_Goa_Police.png"
          alt=""
        />
      </div>
      <div className="abouttext mt-[-0vw] flex flex-col items-center text-center h-full w-full absolute top-0 left-0">
        <h1 className="text-5xl font-[800] leading-[1] ">About Us</h1>
        <div className="wholestory mt-[2vw] flex items-center px-[3.2vw]">
          <h4 className="text-xl font-[500]">
            Our Social Media Monitoring (SMM) Tool is designed to help law
            enforcement identify and analyze harmful content on social media
            platforms. Users can input a specific social media user ID to filter
            posts by predefined harmful keywords and hashtags. After performing
            sentiment analysis using GPT-4, the tool filters and flags posts
            that display illegal, communal, or seditious content. Once these
            posts are identified, network analysis is conducted to map
            connections between the user and those interacting with the flagged
            posts, including mutual followers, resulting in a visual graph of
            user relationships. The tool also provides URLs for associated image
            or video content, enabling users to utilize Google Lens to trace
            similar material across the web, aiding in tracking content origins.
            Upon user approval, a detailed report containing the user's details,
            flagged posts, and network analysis is generated and can be sent to
            law enforcement for further investigation, facilitating the
            detection and tracking of harmful networks to prevent illegal
            activities online. <br /> <span className="font-[600] inline-block mt-[1.2vw]"> Made with <i class="ri-heart-fill"></i> by Team Webstart</span>
          </h4>
        </div>
        <button
          onClick={() => navigate("/")}
          className="sentimentalbutton mt-[2vw] bg-[#2b9348] rounded  px-[2vw] py-[0.7vw]"
        >
          <h1 className="text-[#fff] text-md">Go to Home </h1>
        </button>
      </div>
    </div>
  );
}

export default Aboutus;
