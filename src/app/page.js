'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroPage from './HeroPage';
import About from './About';
import Services from './Services';
import FranchiseApplication from './FranchiseApplication';
import Process from './Process';
import WhyChoose from './WhyChhoose';
import Footer from './Footer';
import Calculator from './Calculator';
import FranchisePopupModal from './FranchisePopup';
import Brands from './Brands';
import MainBanner from './MainBanner';
import BrandPillar from './BrandPillars';
import HomeBrandImages from './HomeBrandImages';
import StoreLocator from './storelocator';
// import Comic from './Comic';

export const metadata = {
  title:
    "The Buyzaar Mart – Retail Franchise & Neighborhood Store Solutions in India",

  description:
    "The Buyzaar Mart is a leading retail franchise network in India offering smart neighborhood store ownership opportunities, quality daily-need products, and reliable retail solutions for entrepreneurs.",

  keywords: [
    "retail franchise in India",
    "neighborhood store franchise",
    "buyzaar mart franchise",
    "smart retail solutions",
    "retail business opportunity",
    "franchise store network",
    "daily need retail store",
    "FMCG retail store franchise",
    "local grocery retail solutions",
    "franchise investment opportunity",
    "retail operations support",
    "POS enabled retail systems",
    "retail CRM solutions",
    "franchise business in India",
    "affordable retail franchise",
    "store launch support",
    "micro retail franchise",
    "entrepreneur retail network",
    "retail store ownership",
    "community retail services",
    "India retail franchise network",
    "retail training and support"
  ],

  // CANONICAL URL
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/",
  },

  // OPEN GRAPH (FOR SOCIAL SHARING)
  openGraph: {
    title:
      "The Buyzaar Mart – Retail Franchise & Neighborhood Store Solutions",

    description:
      "Join The Buyzaar Mart franchise network to own and operate your neighborhood retail store with modern systems, inventory support, and ongoing operations guidance.",

    url: "https://www.thebuyzaarmart.com/",
    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart – Retail Franchise & Store Ownership",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // TWITTER CARD
  twitter: {
    card: "summary_large_image",

    title:
      "The Buyzaar Mart – Retail Franchise & Neighborhood Store Network",

    description:
      "Empowering entrepreneurs with retail franchise opportunities, smart store solutions, and community-focused retail services across India.",

    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};





const Page = () => {
  // State for manual modal (button click)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Sections */}
      <MainBanner/>
     <HeroPage openModal={openModal} />
      <About />
      
      <Process openModal={openModal} /> {/* Pass openModal function as prop */}
      
      <Services />
      <BrandPillar/>
      <HomeBrandImages/>
      <WhyChoose />
      {/* <Comic/> */}
      <Calculator />
      <FranchiseApplication />
      <StoreLocator/>
      <Brands />
      
      {/* Footer */}
      <Footer />
      
      {/* Fixed Apply for Franchise Button - Right Side Vertical */}
      <div className="fixed right-0 z-40
                     /* Desktop positioning - same as before */
                     md:top-[40%] md:transform md:-translate-y-1/2
                     
                     /* Mobile positioning - lower on screen */
                     top-[55%] transform -translate-y-1/2">
        <button
          onClick={openModal}
          className="bg-[#b00000] text-white font-bold shadow-lg hover:shadow-xl hover:from-[#e06d00] hover:to-[#d15c00] transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-l-lg
          
          /* Desktop styles */
          md:px-8 md:py-3 md:text-lg
          
          /* Mobile styles - much slimmer */
          px-6 py-3 text-xs"
          type="button"
          title="Apply for Franchise"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          <span className="transform rotate-180 inline-block 
          
          /* Desktop letter spacing */
          md:tracking-wider
          
          /* Mobile - tighter letter spacing */
          tracking-tight">
            Apply Now
          </span>
        </button>
      </div>

      {/* Auto-show Modal (shows on page load/refresh) */}
      <FranchisePopupModal showOnLoad={true} />

      {/* Manual Modal (shows on button click) */}
      <FranchisePopupModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        showOnLoad={false}
      />
    </div>
  );
};

export default Page;
