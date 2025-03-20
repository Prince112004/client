import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Locpost() {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(data)
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/specificlocation");
  };
  return (
    <div className="h-full w-full flex items-center relative justify-center">
      <div
        onClick={handleClick}
        className="back h-[4vw] bg-[#1C3738] top-[3%] left-[50%] translate-x-[-50%] absolute w-[4vw] flex items-center justify-center rounded-full cursor-pointer"
      >
        <i className="ri-close-fill text-white text-3xl"></i>
      </div>
      <div className="h-[80%] rounded w-[21%] border-2 border-[#1C3738] ">
        {!data.isVideo ? (
          <img
            src={`${data.image_url}`}
            alt="Post"
            className="h-full w-full object-cover rounded"
          />
        ) : data.videoUrl ? (
          <video controls className="h-full w-full object-cover rounded">
            <source src={data.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>No media available</p> // Optional fallback if neither URL is provided
        )}
      </div>
    </div>
  );
}

export default Locpost;
