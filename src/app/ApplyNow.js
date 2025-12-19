"use client";

import React from "react";

const ApplyNowButton = ({ onClick }) => {
  return (
    <div
      className="fixed right-0 z-40
                 md:top-[40%] md:transform md:-translate-y-1/2
                 top-[55%] transform -translate-y-1/2"
    >
      <button
        onClick={onClick}
        type="button"
        title="Apply for Franchise"
        className="bg-[#b00000] text-white font-bold shadow-lg 
                   hover:shadow-xl transition-all duration-300
                   transform hover:scale-105 active:scale-95
                   rounded-l-lg
                   md:px-8 md:py-3 md:text-lg
                   px-6 py-3 text-xs"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        <span
          className="transform rotate-180 inline-block
                     md:tracking-wider tracking-tight"
        >
          Apply Now
        </span>
      </button>
    </div>
  );
};

export default ApplyNowButton;
