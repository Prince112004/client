import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Locationform({ diffcities }) {
  var { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const latLongToServer = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:3000/fetchLocations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send the ID in the body
      });
      const rs = await response.json();
      console.log(rs);
      diffcities(rs);
    } catch (error) {
      console.log(error);
    }
  };
  const data2 = async (response) => {};
  return (
    <div className="h-full  flex items-start justify-center w-full">
      <form
        onSubmit={handleSubmit((data) => {
          data2(data);

          console.log(data);
          latLongToServer(data);
          navigate("/locsearch");
          reset();
        })}
        className="locationform px-[1.2vw] py-[2vw] flex flex-col h-[70%] bg-[#FACF2E] w-[80%] rounded"
      >
        <label className="text-lg font-[500] text-[#1C3738]">
          Enter the latitude of the location :
        </label>
        <input
          {...register("latitude")}
          className="userform h-[2.2vw] mt-[0.3vw] px-[0.3vw]"
          placeholder="eg :- 15.5010° N"
          type="text"
        />
        <label className="text-lg mt-[1vw] font-[500] text-[#1C3738]">
          Enter the longitude of the location :
        </label>
        <input
          {...register("longitude")}
          className="userform h-[2.2vw] mt-[0.3vw] px-[0.3vw]"
          placeholder="eg :- 73.8294° E "
          type="text"
        />
        <button className="h-[2.8vw] bg-[#1C3738] mt-[2vw]" type="submit">
          <h1 className="text-[#fff] font-[600]">
            Search <i className="ri-search-line ml-[0.3vw] text-[#fff]"></i>
          </h1>
        </button>
      </form>
    </div>
  );
}

export default Locationform;
