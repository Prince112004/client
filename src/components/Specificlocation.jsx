import React from "react";
import Specificlocationbar from "./Specificlocationbar";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function Specificlocation({ posts }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/locsentiment");
  };
  return (
    <div className="h-[100%] overflow-auto px-[3vw] flex flex-col gap-[0.5vw] w-full">
      <div className="useridandbutton flex justify-between items-center   mb-[1vw]">
        <h1 className=" font-[800] text-3xl">
          {" "}
          Posts from your chosen location :
        </h1>
        <button
          onClick={handleClick}
          className="sentimentalbutton bg-[#2b9348] rounded  px-[2vw] py-[0.95vw]"
        >
          <h1 className="text-[#fff] text-sm">Perform Sentimental Analysis </h1>
        </button>
      </div>
      {Object.keys(posts).length > 0 ? (
        Object.entries(posts).map(([key, elem], index) => (
          <Specificlocationbar key={key} data={elem} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Specificlocation;
