import React from 'react';

// Adjusted captions to match the comic panels
const brandImages = [
  {
    src: "/images/Unorganized Inventory Leads to Losses.png", // Replace with your first image path
    alt: "Messy stock retail scenario",
    caption: "Unorganized inventory leads to losses.", // Left panel: Highlight messy and inefficient stock
  },
  {
    src: "/images/Predict Demand, Stock Smart.png", // Replace with your second image path
    alt: "Smart retail scenario Buyzaar Mart",
    caption: "Predict demand. Stock smart. Sell more with Buyzaar Mart.", // Right panel: Smart organized retail
  },
];

const HomeBrandImages = () => (
  <div className="w-full bg-white py-10 md:py-8 flex flex-col items-center">
    {/* NEW Heading based on comic */}
    <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-3 text-center">
      From Chaos to Smart Retail
    </h2>
    {/* NEW Paragraph text */}
    <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-3xl text-center mb-8 px-4 leading-relaxed">
      See how Buyzaar Mart transforms outdated practices into smart choices. Predict what&apos;s in demand, keep your shelves organized, and increase profits by stocking what matters.
    </p>
    {/* Image grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl w-full px-4 sm:px-6">
      {brandImages.map((img, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <img
            src={img.src}
            alt={img.alt}
            className="max-h-[400px] w-full object-contain rounded-xl shadow-lg border border-gray-200"
          />
          <div className="mt-4 text-base font-medium text-gray-900 text-center">
            {img.caption}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HomeBrandImages;
