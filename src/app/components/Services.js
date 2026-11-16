"use client";
import React, { useState, useEffect } from 'react';
import {
  ShoppingCart,
  CreditCard,
  Store,
  Users,
  Palette,
  MapPin,
  Package,
  IndianRupee,
  BarChart3,
  Shield,
  Clock,
  CheckCircle,
  Pause,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const services = [
    {
      id: 1,
      title: "Wide Product Range",
      description: "Daily-need items under one roof!",
      icon: "https://img.icons8.com/ios/50/10B981/product--v1.png",
      color: "bg-black",
      features: [
        "FMCG, groceries, home care, and personal care products.",
        "Carefully curated product mix to meet the needs of urban and semi-urban households."
      ]
    },
    {
      id: 2,
      title: "Affordable Pricing",
      description: "Value-conscious pricing strategy!",
      icon: "https://img.icons8.com/ios/50/10B981/tags--v1.png",
      color: "bg-black",
      features: [
        "Competitive retail pricing across categories.",
        "Combo deals for value-conscious customers.",
        "Pocket-friendly without compromising on quality."
      ]
    },
    {
      id: 3,
      title: "POS-Enabled Billing System",
      description: "Modern point-of-sale technology!",
      icon: "https://img.icons8.com/ios/50/10B981/billing-machine.png",
      color: "bg-black",
      features: [
        "Stores are equipped with modern Point-of-Sale systems.",
        "Fast and accurate billing, GST-compliant invoices.",
        "Real-time tracking of sales and inventory."
      ]
    },
    {
      id: 4,
      title: "Customer Relationship Management (CRM)",
      description: "Building lasting customer relationships!",
      icon: "https://img.icons8.com/10B981/external-ddara-lineal-ddara/64/external-customer-relationship-management-business-CRM-partner-business-ddara-lineal-ddara.png",
      color: "bg-black",
      features: [
        "Captures customer data for building loyalty programs and repeat marketing.",
        "Enables personalized offers and return-customer engagement.",
        "Helps improve store profitability and customer retention."
      ]
    },
    {
      id: 5,
      title: "Uniform Branding & Store Design",
      description: "Consistent professional identity!",
      icon: "https://img.icons8.com/ios/50/10B981/online-store.png",
      color: "bg-black",
      features: [
        "All The Buyzaar Mart stores follow a consistent brand layout, signage, and merchandising.",
        "Builds trust and a professional identity across locations.",
        "Easy for customers to recognize and trust."
      ]
    },
    {
      id: 6,
      title: "Localized Product Flexibility",
      description: "Adapted to local preferences!",
      icon: "https://img.icons8.com/ios/50/10B981/product--v1.png",
      color: "bg-black",
      features: [
        "While core SKUs are standardized, stores have the flexibility to include region-specific or locally popular items based on demand."
      ]
    }
  ];

  // Error handler for product images
  const handleImageError = (e, productNum, currentExt) => {
    const extensions = ['png', 'jpg', 'webp'];
    const currentIndex = extensions.indexOf(currentExt);

    // Try next extension
    const nextIndex = (currentIndex + 1) % extensions.length;
    const nextExt = extensions[nextIndex];

    // Only try each extension once
    if (e.target.dataset.attempts === undefined) {
      e.target.dataset.attempts = 1;
    } else {
      e.target.dataset.attempts = parseInt(e.target.dataset.attempts) + 1;
    }

    if (e.target.dataset.attempts < 3) {
      e.target.src = `/images/product${productNum}.${nextExt}`;
    } else {
      // Hide image after trying all formats
      e.target.style.display = 'none';
    }
  };

  // Auto-slide for mobile when not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, services.length]);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 40) {
      // Swiped left -> next
      setCurrentSlide((prev) => (prev + 1) % services.length);
    } else if (distance < -40) {
      // Swiped right -> prev
      setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div id="services" className="bg-white py-10 md:py-10">
      {/* Hero Section */}
      <div className="relative bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-black p-3.5 rounded-2xl shadow-md">
              <img
                src="https://img.icons8.com/ios/50/10B981/fast-moving-consumer-goods.png"
                alt="Trust & Transparency"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#b00000] mb-4 leading-tight">
            Store Features{" "}
            <span className="text-black">& Services</span>
          </h1>

          <div className="w-20 h-1.5 bg-black mx-auto mb-4 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Discover our comprehensive range of services designed to provide the
            <span className="font-semibold text-black"> best shopping experience </span>
            for urban and semi-urban households
          </p>
        </div>
      </div>

      {/* Services Grid with Side Products */}
      <div className="relative py-6 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Left Side Products - Moving Up */}
        <div className="hidden lg:block absolute left-0 top-0 w-24 h-full">
          <div className="flex flex-col animate-scroll-up">
            {[
              { num: 1, ext: 'png' }, { num: 2, ext: 'png' }, { num: 3, ext: 'png' },
              { num: 4, ext: 'jpg' }, { num: 5, ext: 'png' }, { num: 6, ext: 'jpg' },
              { num: 7, ext: 'png' }, { num: 8, ext: 'png' }, { num: 9, ext: 'jpg' },
              { num: 10, ext: 'jpg' }, { num: 11, ext: 'jpg' }, { num: 12, ext: 'webp' },
              { num: 13, ext: 'webp' }, { num: 14, ext: 'webp' }, { num: 15, ext: 'jpg' },
              { num: 16, ext: 'jpg' }, { num: 17, ext: 'webp' },
              { num: 1, ext: 'png' }, { num: 2, ext: 'png' }, { num: 3, ext: 'png' },
              { num: 4, ext: 'jpg' }, { num: 5, ext: 'png' },
            ].map((product, index) => (
              <div key={`left-${index}`} className="shrink-0 my-4 ml-4">
                <img
                  src={`/images/product${product.num}.${product.ext}`}
                  alt={`Product ${product.num}`}
                  className="w-20 h-20 object-cover rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                  onError={(e) => handleImageError(e, product.num, product.ext)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Products - Moving Down */}
        <div className="hidden lg:block absolute right-0 top-0 w-24 h-full">
          <div className="flex flex-col animate-scroll-down">
            {[
              { num: 6, ext: 'jpg' }, { num: 7, ext: 'png' }, { num: 8, ext: 'png' },
              { num: 9, ext: 'jpg' }, { num: 10, ext: 'jpg' }, { num: 11, ext: 'jpg' },
              { num: 12, ext: 'webp' }, { num: 13, ext: 'webp' }, { num: 14, ext: 'webp' },
              { num: 15, ext: 'jpg' }, { num: 1, ext: 'png' }, { num: 2, ext: 'png' },
              { num: 16, ext: 'jpg' }, { num: 17, ext: 'webp' },
              { num: 3, ext: 'png' }, { num: 4, ext: 'jpg' }, { num: 5, ext: 'png' },
              { num: 6, ext: 'jpg' }, { num: 7, ext: 'png' }, { num: 8, ext: 'png' },
              { num: 9, ext: 'jpg' }, { num: 10, ext: 'jpg' }
            ].map((product, index) => (
              <div key={`right-${index}`} className="shrink-0 my-4 mr-4">
                <img
                  src={`/images/product${product.num}.${product.ext}`}
                  alt={`Product ${product.num}`}
                  className="w-20 h-20 object-cover rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                  onError={(e) => handleImageError(e, product.num, product.ext)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center Services Content */}
        <div className="max-w-6xl mx-auto relative z-10 px-4 lg:px-16">
          {/* Mobile View: Slide Carousel with Tap & Hold to Pause */}
          <div className="block md:hidden relative">
            {/* Helper status */}
            <div className="flex items-center justify-between mb-2 px-1 text-xs text-gray-500 font-medium">
              <span className="text-gray-400">Swipe or tap & hold to pause</span>
              {isPaused && (
                <span className="flex items-center gap-1 text-[#b00000] font-semibold bg-red-50 px-2 py-0.5 rounded-full border border-red-200 text-[11px] animate-pulse">
                  <Pause size={11} /> Paused
                </span>
              )}
            </div>

            {/* Slider Viewport */}
            <div
              className="overflow-hidden rounded-2xl select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={() => setIsPaused(false)}
              onMouseDown={() => setIsPaused(true)}
              onMouseUp={() => setIsPaused(false)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={service.id} className="w-full shrink-0 px-1">
                      <div className="relative bg-gradient-to-br from-red-800 via-red-900 to-neutral-900 rounded-2xl shadow-lg p-5 border border-red-700/60 min-h-[220px] flex flex-col justify-between overflow-hidden">
                        {/* Top Bar with Icon & Counter */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="bg-black/90 p-3 rounded-xl shadow-md border border-white/10">
                            {typeof IconComponent === "string" ? (
                              <img
                                src={IconComponent}
                                alt="icon"
                                className="w-7 h-7 object-contain"
                              />
                            ) : (
                              <IconComponent className="w-7 h-7 text-white" />
                            )}
                          </div>
                          <span className="text-xs font-bold text-red-200/60 tracking-wider">
                            0{index + 1} / 0{services.length}
                          </span>
                        </div>

                        {/* Content */}
                        <div>
                          <h2 className="text-lg font-bold text-white mb-1.5">
                            {service.title}
                          </h2>
                          <p className="text-xs sm:text-sm text-gray-200/90 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Bottom Accent line */}
                        <div className="mt-3 h-1 w-12 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Controls: Prev/Next & Dots */}
            <div className="flex items-center justify-between mt-3 px-1">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 active:scale-90 transition"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-1.5 items-center">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index
                        ? "w-6 h-2 bg-[#b00000]"
                        : "w-2 h-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 active:scale-90 transition"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Desktop View: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isBlack = index % 2 === 0;

              return (
                <div key={service.id} className="relative group h-full w-full mx-auto">
                  {/* Main Card */}
                  <div className={`relative bg-red-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group border border-red-700/50 
                    flex flex-col h-[280px]`}>

                    {/* Animated Background linear */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 ${isBlack ? 'bg-red-800' : 'bg-red-800'}`}></div>

                    {/* Top Icon Section */}
                    <div
                      className={`relative p-5 pb-4 ${isBlack ? "bg-red-800" : "bg-red-800"
                        } rounded-t-2xl flex-grow flex flex-col justify-center`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`${service.color} p-3 rounded-xl shadow-md group-hover:scale-105 transition-all duration-300`}
                        >
                          {typeof IconComponent === "string" ? (
                            <img
                              src={IconComponent}
                              alt="icon"
                              className="w-8 h-8 object-contain"
                            />
                          ) : (
                            <IconComponent className="w-8 h-8 text-white" />
                          )}
                        </div>
                        <div
                          className={`w-12 h-1 ${isBlack ? "bg-black" : "bg-black"
                            } rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100`}
                        ></div>
                      </div>
                      <h2 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-white transition-colors duration-200">
                        {service.title}
                      </h2>
                      <p
                        className="text-xs sm:text-sm font-medium text-gray-200 leading-snug line-clamp-3"
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Accent with Pulse Effect */}
                    <div className={`absolute bottom-0 left-0 h-1.5 w-full ${isBlack ? 'bg-black' : 'bg-black'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isBlack ? 'shadow-gray-200' : 'shadow-gray-200'} shadow-2xl pointer-events-none`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Brand Image Section - Added after cards section */}
      <div className="py-6 px-4 sm:px-6 lg:px-8  bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative inline-block">
            <img
              src="/images/BUYZAAR BRAND 1.png"
              alt="The Buyzaar Mart - अपना बाजार - बचत का साथ Quality की बात"
              className="w-full max-w-6xl border-4 border-red-800 mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll-up {
          0% { transform: translateY(100vh); }
          100% { transform: translateY(-100vh); }
        }
        
        @keyframes scroll-down {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }
        
        .animate-scroll-down {
          animation: scroll-down 25s linear infinite;
        }

        .auto-rows-fr {
          grid-auto-rows: 1fr;
        }
      `}</style>
    </div>
  );
};

export default Services;