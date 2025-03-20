import React from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
var id = {} ;
function Locsearch({ cities, handlePosts }) {
  const navigate = useNavigate();
  const handleLocation = (elem) => {
    id = cities[elem].id;
    
    console.log(id)
    fetchLocationposts(id);
    navigate("/specificlocation");
  };
  const fetchLocationposts = async (id) => {
    try {
      const response = await fetch("http://127.0.0.1:3000/fetchPosts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id:`${id}`}) , // Send the ID in the body
      });
      const posts = await response.json();
      handlePosts(posts);
      console.log(posts)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full w-full overflow-auto flex flex-col items-center px-[4vw] pt-[1vw] ">
      <h1 className="font-[600] text-3xl ">
        Here is a list of locations around the input you provided
      </h1>
      <div className="locbar mt-[3vw] items-center w-[60%]  flex flex-col gap-[1vw]">
        {cities.length > 0 ? (
          cities.map((elem, index) => (
            <div
              key={index} // Adding a unique key for each element
              className="loclist flex justify-between gap-[1.5vw] w-full items-center px-[1.5vw] py-[1.5vw] flex rounded bg-[#1C3738]"
            >
              <div className="nameofcities w-[60%]">
                <h1 className="text-[#fff] uppercase font-[500] text-2xl">
                  {elem.name}
                </h1>
              </div>
              <button
                onClick={()=> handleLocation(index)}
                className="px-[1.5vw]  rounded py-[0.5vw] bg-[#2b9348] flex items-center justify-center"
              >
                <h1 className="text-white text-sm">
                  View posts from this location
                </h1>
              </button>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Locsearch;
