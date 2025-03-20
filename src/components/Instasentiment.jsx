import React from "react";
import Sentimentbar from "./Sentimentbar";

function Instasentiment() {
  return (
    <div className="h-full px-[3vw] w-full flex flex-col overflow-auto gap-[0.6vw]">
      <h1 className="text-[1.9vw] mb-[0.5vw] font-[800]">
        Here are the harmful posts for this user :{" "}
      </h1>
      <Sentimentbar />
      <Sentimentbar />
      <Sentimentbar />
      <Sentimentbar />
      <Sentimentbar />
      <Sentimentbar />
    </div>
  );
}

export default Instasentiment;
