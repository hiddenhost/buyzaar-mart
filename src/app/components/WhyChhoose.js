"use client";
import { useState, useEffect, useRef } from "react";

const WhyChoose = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 300);

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const features = [
    {
      icon: (
        <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/10B981/trust--v1.png"
            alt="Trust & Transparency"
            className="w-10 h-10 object-contain"
          />
        </div>
      ),
      title: "Trust & Transparency",
      description:
        "Attractive Pricing, Assured Quality, Constantly ongoing support",
      delay: 0,
    },

    {
      icon: (
        <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/10B981/business--v1.png"
            alt="Trust & Transparency"
            className="w-10 h-10 object-contain"
          />
        </div>
      ),
      title: "Franchise Ready",
      description:
        "Making Entrepreneurship Simple and less risky.",

      delay: 200,
    },
    {
      icon: (
        <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/10B981/customer-insight--v1.png"
            alt="One-Stop Retail"
            className="w-10 h-10 object-contain"
          />
        </div>
      ),
      title: "One-Stop Retail",
      description:
        "Wide range of groceries, FMCG, and daily essentials under one roof.",
      delay: 400,
    },

    {
      icon: (
        <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/10B981/workflow.png"
            alt="Trust & Transparency"
            className="w-10 h-10 object-contain"
          />
        </div>
      ),
      title: "Smart Operations",
      description:
        "Tried and Tested tech enabled systems and models.",

      delay: 600,
    },

    {
      icon: (
        <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/10B981/population-return.png"
            alt="Trust & Transparency"
            className="w-10 h-10 object-contain"
          />
        </div>
      ),
      title: "Profitable Returns",
      description:
        "Earn an effective gross margin of 18-20%",

      delay: 800,
    },
    {
      icon: (
        <div className="bg-black w-14 h-14 rounded-full flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios/50/10B981/speaker_1.png"
            alt="Trust & Transparency"
            className="w-8 h-8 object-contain"
          />
        </div>
      ),
      title: "End to End Ecosystem",
      description:
        "From Operations to Marketing, we handle it all!",
      delay: 800,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile, currentSlide]);

  return (
    <div className="bg-white py-10 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-8 md:mb-12 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Why Choose{" "}
            <span className="text-[#b00000]">BUYZAAR ?</span>
          </h1>
          <div className="w-20 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Retail without pain ? That&apos;s Buyzaar for you
          </p>
        </div>

        {/* Mobile Slider */}
        {isMobile ? (
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-xl">
              <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="w-full shrink-0 px-5">
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-black mx-5">
                      {/* Icon */}
                      <div
                        className={`${feature.color} rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto`}
                      >
                        {feature.icon}
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-justify">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentSlide === index ? "bg-black" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid - 3 Columns with Premium Styling */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 hover:-translate-y-2 ${visibleCards.includes(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative bg-gradient-to-br from-red-800 via-red-900 to-neutral-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-5 h-full border border-red-700/50 hover:border-red-500/80 flex flex-col justify-between overflow-hidden">
                  {/* Subtle Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  {/* Top: Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="bg-black/80 backdrop-blur-sm ring-1 ring-white/10 rounded-xl w-12 h-12 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    >
                      {feature.icon}
                    </div>
                    <span className="text-xs font-bold tracking-widest text-red-300/40 group-hover:text-red-200/80 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-red-100 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent line */}
                  <div className="mt-4 h-1 w-8 bg-red-500/60 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Floating Elements - Hidden on mobile for cleaner look */}
        {/* <div className="fixed top-20 left-10 w-4 h-4 bg-black rounded-full animate-bounce opacity-60 hidden lg:block"></div>
        <div className="fixed top-1/2 right-20 w-3 h-3 bg-gray-800 rounded-full animate-ping opacity-50 hidden lg:block"></div> */}
      </div>
    </div>
  );
};

export default WhyChoose;