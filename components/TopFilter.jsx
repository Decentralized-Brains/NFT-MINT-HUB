"use client";

//note here all button is dummy, I have not added any functionality to it yet
//but I have added the active class to the button which is clicked

import React, { useState } from "react";

const TopFilter = () => {
  const [activeButton, setActiveButton] = useState("today");

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="mt-5 md:mt-0">
      <div className="flex justify-between items-center">
        <div className="text-3xl float-left font-bold max-md:hidden">
          Today's Drops
        </div>
        <div className="flex justify-between flex-wrap  text-sm bg-[#5865f226] py-1 rounded-2xl">
          <button
            className={`mx-1 py-1 px-3 rounded-2xl duration-500 ${
              activeButton === "today" ? "bg-white" : ""
            }`}
            onClick={() => handleClick("today")}
          >
            Today
            <span className="ml-2 px-2 py-1 rounded-2xl text-xs bg-[#5865F2] text-white">
              100
            </span>
          </button>
          <button
            className={`mx-1 py-1 px-3 rounded-2xl duration-500 ${
              activeButton === "upcoming" ? "bg-white" : ""
            }`}
            onClick={() => handleClick("upcoming")}
          >
            Upcoming
            <span className="ml-2 px-2 py-1 rounded-2xl text-xs bg-[#5865F2] text-white">
              100
            </span>
          </button>
          <button
            className={`mx-1 py-1 px-3 rounded-2xl duration-500 ${
              activeButton === "ongoing" ? "bg-white" : ""
            }`}
            onClick={() => handleClick("ongoing")}
          >
            Ongoing
            <span className="ml-2 px-2 py-1 rounded-2xl text-xs bg-[#5865F2] text-white">
              100
            </span>
          </button>
          <button
            className={`mx-1 py-1 px-3 rounded-2xl duration-500 ${
              activeButton === "minting" ? "bg-white" : ""
            }`}
            onClick={() => handleClick("minting")}
          >
            Minting
            <span className="ml-2 px-2 py-1 rounded-2xl text-xs bg-[#5865F2] text-white">
              100
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopFilter;
