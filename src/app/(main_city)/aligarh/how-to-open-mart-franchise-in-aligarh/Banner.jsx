"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-[400px] md:w-full h-[300px] sm:h-[400px] md:h-[570px] overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/dt8wjpf9e/image/upload/q_auto/f_auto/v1776671502/buyzaar-mart_ti8h8h.png"
            alt="How to Open Mart Franchise in Aligarh"
            className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-green-900/50" />
      </div>
      
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-5xl mt-18">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-medium tracking-wide capitalize mb-4 md:mb-6 leading-tight">
      How to Open Mart Franchise in Aligarh
            </h1>
        </div>
      </div>
    </section>
  );
}