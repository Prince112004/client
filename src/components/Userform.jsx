import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asnyTweets } from "../store/actions/TweetAction";

function Userform({ user, onSearch, social }) {
  var { register, handleSubmit, reset } = useForm();
  const extractUsername = (url) => {
    try {
      const parsedUrl = new URL(url); // Parse the URL
      const pathname = parsedUrl.pathname; // Extract the pathname (e.g., /elonmusk)

      let username = ""; // Initialize empty username

      if (url.includes("x.com")) {
        // Handle Twitter (or X) URL
        social("twitter");
        username = pathname.split("/").filter(Boolean).pop(); // Extract username part from URL
        console.log("Twitter username:", username);
      } else if (url.includes("instagram.com")) {
        // Handle Instagram URL
        social("instagram");
        username = pathname.split("/").filter(Boolean).pop(); // Extract Instagram username
        console.log("Instagram username:", username);
      } else {
        // Unsupported URL case
        alert("Unsupported URL: Neither Twitter (X) nor Instagram");
      }
      console.log(username)
      return username; // Return the extracted username
    } catch (error) {
      // Handle invalid URL error
      console.error("Invalid URL:", error);
      return null;
    }
  };
  return (
    <div className="h-full  flex items-start justify-center w-full">
      <form
        onSubmit={handleSubmit((data) => {
          const url = data.url; // Extract the URL from form data
          const username = extractUsername(url);
          user(username); // Call the handleusername function to set the user state
          onSearch(username);
          reset();
        })}
        className="form px-[1.2vw] py-[2vw] flex flex-col h-[50%] bg-[#FACF2E] w-[80%] rounded"
      >
        <label className="text-lg font-[500] text-[#1C3738]">
          Provide the Profile URL :
        </label>
        <input
          {...register("url")}
          className="userform h-[2.2vw] mt-[0.3vw] px-[0.3vw]"
          placeholder="Insert Profile Link"
          type="url"
        />
        <button className="h-[2.8vw] bg-[#1C3738] mt-[1.5vw]" type="submit">
          <h1 className="text-[#fff] font-[600]">
            Search <i className="ri-search-line ml-[0.3vw] text-[#fff]"></i>
          </h1>
        </button>
      </form>
    </div>
  );
}

export default Userform;
