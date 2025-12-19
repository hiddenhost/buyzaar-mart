"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroPage from "./HeroPage";
import About from "./About";
import Services from "./Services";
import FranchiseApplication from "./FranchiseApplication";
import Process from "./Process";
import WhyChoose from "./WhyChhoose";
import Footer from "./Footer";
import Calculator from "./Calculator";
import FranchisePopupModal from "./FranchisePopup";
import Brands from "./Brands";
import MainBanner from "./MainBanner";
import BrandPillar from "./BrandPillars";
import HomeBrandImages from "./HomeBrandImages";
import StoreLocator from "./storelocator";
import ApplyNowButton from "./ApplyNow";

const HomeClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <MainBanner />
      <HeroPage openModal={openModal} />
      <About />
      <Process openModal={openModal} />
      <Services />
      <BrandPillar />
      <HomeBrandImages />
      <WhyChoose />
      <Calculator />
      <FranchiseApplication />
      <StoreLocator />
      <Brands />
      <Footer />

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
