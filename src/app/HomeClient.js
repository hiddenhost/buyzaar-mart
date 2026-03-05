"use client";

import React, { useState } from "react";

import HeroPage from "../app/components/HeroPage";
import About from "../app/components/About";
import Services from "../app/components/Services";
import FranchiseApplication from "../app/components/FranchiseApplication";
import Process from "../app/components/Process";
import WhyChoose from "../app/components/WhyChhoose";
import Blogs from "../app/components/Blogs";

import Calculator from "../app/components/Calculator";
import FranchisePopupModal from "../app/components/FranchisePopup";
import Brands from "../app/components/Brands";
import MainBanner from "../app/components/MainBanner";
import BrandPillar from "../app/components/BrandPillars";
import HomeBrandImages from "../app/components/HomeBrandImages";
import StoreLocator from "../app/components/storelocator";
import ApplyNowButton from "./ApplyNow";


const HomeClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen">
   
      <MainBanner />
      <HeroPage openModal={openModal} />
      <About />
      <Process openModal={openModal} />
      <Services />
      <BrandPillar />
      <HomeBrandImages />
      <WhyChoose />
      <Calculator />
      <Blogs />

      <FranchiseApplication />
  
      <StoreLocator />
      <Brands />
    

      <ApplyNowButton onClick={openModal} />

      <FranchisePopupModal showOnLoad={true} />
      <FranchisePopupModal
        isOpen={isModalOpen}
        onClose={closeModal}
        showOnLoad={false}
      />
    </div>
  );
};

export default HomeClient;
