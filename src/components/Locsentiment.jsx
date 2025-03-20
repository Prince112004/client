import React from "react";
import Locsentimentbar from "./Locsentimentbar";

function Locsentiment() {
  return (
    <div className="h-full px-[3vw] w-full flex flex-col overflow-auto gap-[0.6vw]">
      <h1 className="text-[1.9vw] mb-[0.5vw] font-[800]">
        Here are the harmful posts :{" "}
      </h1>
      <Locsentimentbar/>
      <Locsentimentbar/>
      <Locsentimentbar/>
      <Locsentimentbar/>
      <Locsentimentbar/>
    </div>
  );
}

export default Locsentiment;
