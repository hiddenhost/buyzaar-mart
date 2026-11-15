"use client";

import React from "react";

const pillars = [
  {
    title: "Simplicity",
    description:
      "We take the complexity away from retail operations: Handling, purchasing, inventory and Supply Chain.",
  },
  {
    title: "Reliability",
    description: "Timely supply, transparent processes, A partner you can trust.",
  },
  {
    title: "Affordability & Quality",
    description: "Curated range, fair pricing, consistent availability.",
  },
  {
    title: "Ownership & Legacy",
    description: "A store is a family business — build it, grow it, pass it on.",
  },
];

const BrandPillar = () => {
  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 py-8 md:py-8 bg-white">
      <h2 className="text-center mb-3 sm:mb-4 text-2xl sm:text-4xl md:text-5xl font-black">
        <span className="text-[#b00000]">Our Brand</span>{" "}
        <span className="text-black">Pillars</span>
      </h2>
      <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-black mx-auto mb-6 sm:mb-8 rounded-full shadow-lg"></div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">
        {pillars.map(({ title, description }) => (
          <div
            key={title}
            className="p-3.5 sm:p-6 rounded-xl border border-gray-200 bg-white shadow-sm sm:shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-[#b00000] flex flex-col justify-start"
          >
            <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-2 text-[#b00000] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandPillar;
