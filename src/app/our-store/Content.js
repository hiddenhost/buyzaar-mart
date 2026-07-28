'use client';

import React from "react";
import Image from "next/image";


export default function OurStore() {
  const storeImages = [
    {
      id: 1,
      src: "/images/f01.jpg",
      alt: "Store Front View",
      title: "Store Exterior"
    },
    {
      id: 2,
      src: "/images/IN03.jpg",
      alt: "Store Interior Section 1",
      title: "Product Display Area"
    },
    {
      id: 3,
      src: "/images/IN02.jpg",
      alt: "Store Interior Section 2",
      title: "Checkout Counter"
    },
  ];

  return (
    <>
      
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-red-800 text-white py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-10 leading-tight">
              Your Dream Store Awaits
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-3xl mx-auto font-medium">
              Experience our current store!
            </p>
            <div className="w-24 md:w-32 h-1 bg-white mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Store Images Gallery */}
        <section className="py-12 md:py-16 lg:py-20 px-4 bg-linear-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Store
                <span className="text-transparent bg-clip-text bg-linear-to-r from-black to-gray-800 ml-2">
                  Gallery
                </span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                Explore every corner of your future store with our 3D renders
              </p>
            </div>

            {/* Responsive Grid Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {storeImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-2 border-gray-200 hover:border-black cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      // Add modal or lightbox functionality here
                    }
                  }}
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-lg md:text-xl font-bold mb-1">{image.title}</h3>
                        <p className="text-xs md:text-sm text-gray-200">Click to view details</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Instagram Reel Link */}
            <div className="text-center mt-8">
              <p className="text-gray-600 text-xl">
                Want to see more?{" "}
                <a
                  href="https://www.instagram.com/reel/DSaC7V6Ej6r/?igsh=OHFtdGw5cGN0ZDJw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-800 hover:text-red-600 underline font-bold transition-colors"
                >
                  Watch our store walkthrough on Instagram
                </a>
              </p>
            </div>

            {/* 360 View Section - Compact */}
            <div className="mt-10 md:mt-12">
              <div className="text-center mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                  360° Virtual Tour
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  Take a virtual walkthrough of "The Buyzaar Mart"
                </p>
              </div>
              <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200" style={{ paddingBottom: '50%' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1785225268257!6m8!1m7!1sCAoSHENJQUJJaERYbWRGYzEyTnlKUTd1WVNoVGFSeHI.!2m2!1d28.55804249226858!2d77.34193465857015!3f60!4f0!5f0.7820865974627469"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking; gyroscope; accelerometer"
                  title="The Buyzaar Mart 360 View"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
     
    </>
  );
}