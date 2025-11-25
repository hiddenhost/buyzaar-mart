"use client";
import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Calculator from "../Calculator";
import Services from "../Services";
import FranchisePopupModal from "../FranchisePopup";
import {
  FaBullseye,
  FaRocket,
  FaCogs,
  FaUsers,
  FaMapMarkerAlt,
  FaUserTie,
  FaBullhorn,
  FaBoxes,
  FaStore,
  FaLink,
} from "react-icons/fa";

export default function FranchisePage() {
  const storeFormats = [
    {
      name: "MINI MART",
      size: "600-1000 SQFT",
      products: [
        "Personal Care",
        "Beverages",
        "Grocery & Staples",
        "Homecare and Hygiene",
        "Stationery",
        "Snacks and Biscuits",
      ],
    },
    {
      name: "SUPER MART",
      size: "1000-3000 SQFT",
      products: [
        "Personal Care",
        "Beverages",
        "Grocery & Staples",
        "Homecare and Hygiene",
        "Stationery",
        "Snacks and Biscuits",
        "Dairy Items",
        "F & V",
      ],
    },
    {
      name: "HYPER MART",
      size: "3000-8000 SQFT",
      products: [
        "Personal Care",
        "Beverages",
        "Grocery & Staples",
        "Homecare and Hygiene",
        "Stationery",
        "Snacks and Biscuits",
        "Dairy Items",
        "F & V",
        "Gifts & Toys",
        "Frozen Ready to Eat",
      ],
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <div className="bg-white min-h-screen mt-8 flex flex-col">
      <Navbar />

      {/* HERO SECTION - Responsive */}
      <section className="relative isolate">
        <div className="absolute inset-0 bg-red-800 opacity-90"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col items-center z-10">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 sm:mb-6 border-4 border-gray-100">
            <img
              src="/images/buyzaar-logo.png"
              alt="Brand Logo"
              className="w-32 h-30 sm:w-36 sm:h-34 md:w-40 md:h-38 object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center drop-shadow mb-2 tracking-tight px-2">
            Franchise with Us
          </h1>
          <div className="h-1 w-16 sm:w-20 md:w-24 bg-white/60 rounded-full my-3 sm:my-4"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl text-center font-light px-4">
            Unlock our proven business model,{" "}
            <span className="font-semibold">full operational support</span>, and
            a strong brand presence!
          </p>
        </div>
      </section>

      {/* USP SECTION - Responsive Grid */}
      <section className="relative py-8 sm:py-10 md:py-14 px-4 sm:px-6 bg-white flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-6 sm:mb-8 md:mb-10 px-4">
          What Makes Our Brand Unique?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl w-full mx-auto">
          {/* CARD 1 */}
          <div className="bg-red-800 rounded-2xl shadow hover:shadow-lg transition-all p-6 sm:p-7 md:p-8 flex flex-col items-center text-center border border-[#b00000]">
            <FaRocket className="text-white text-3xl sm:text-4xl mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
              Rapid Local Visibility
            </h3>
            <p className="text-sm sm:text-base text-gray-200">
              Distinctive store launch strategy ensuring rapid local visibility.
            </p>
          </div>
          
          {/* CARD 2 */}
          <div className="bg-red-800 rounded-2xl shadow hover:shadow-lg transition-all p-6 sm:p-7 md:p-8 flex flex-col items-center text-center border border-[#b00000]">
            <FaBullseye className="text-white text-3xl sm:text-4xl mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-200">
              Hyper-local Marketing
            </h3>
            <p className="text-sm sm:text-base text-gray-200">
              Hyper-local marketing campaigns tailored for every franchise
              location.
            </p>
          </div>
          
          {/* CARD 3 */}
          <div className="bg-red-800 rounded-2xl shadow hover:shadow-lg transition-all p-6 sm:p-7 md:p-8 flex flex-col items-center text-center border border-[#b00000]">
            <FaCogs className="text-white text-3xl sm:text-4xl mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-200">
              Complete Backend Support
            </h3>
            <p className="text-sm sm:text-base text-gray-200">
              End-to-end backend operational support streamlining business
              setup.
            </p>
          </div>
          
          {/* CARD 4 */}
          <div className="bg-red-800 rounded-2xl shadow hover:shadow-lg transition-all p-6 sm:p-7 md:p-8 flex flex-col items-center text-center border border-[#b00000]">
            <FaUsers className="text-white text-3xl sm:text-4xl mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-200">
              Customer Acquisition Focus
            </h3>
            <p className="text-sm sm:text-base text-gray-200">
              Dedicated customer acquisition solutions focused on growth.
            </p>
          </div>
        </div>
      </section>

      {/* Banner Image - Responsive */}
      <section className="w-full flex flex-col items-center mb-6 sm:mb-8 px-4 sm:px-6">
        <img
          src="/images/BUYZAAR BRAND 1.png"
          alt="Buyzaar Mart Banner"
          className="w-full max-w-6xl border-2 sm:border-4 border-red-800 rounded-lg shadow-lg"
        />
      </section>

      {/* Inventory Assurance - Responsive */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-gray-200 mb-8 sm:mb-12 md:mb-16 flex flex-col items-center mx-4 sm:mx-6 md:mx-auto max-w-6xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 text-red-800 px-2">
          Hassle-Free Inventory Assurance
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 text-center max-w-2xl px-2">
          Worry less about unsold, expired or damaged stock. With Buyzaar&apos;s
          guarantee, we take back expired and damaged goods so you can focus on
          stocking and selling what matters.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center w-full">
          <div className="flex justify-center">
            <img
              src="/images/Comic 1 Panel 1.png"
              alt="Expired and damaged products concern"
              className="max-h-64 sm:max-h-80 md:max-h-96 w-auto rounded-lg shadow-md border border-gray-300"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/images/Comic 1 Panel 2.png"
              alt="Buyzaar Mart takes back expired/damaged goods"
              className="max-h-64 sm:max-h-80 md:max-h-96 w-auto rounded-lg shadow-md border border-gray-300"
            />
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <Services />

      {/* FRANCHISE BENEFITS - Responsive */}
      <section className="max-w-6xl mx-auto my-8 sm:my-12 md:my-16 px-4 sm:px-6 py-8 sm:py-10 md:py-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-red-800">
              Provide
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Comprehensive support for your franchise success!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Store Location & Rent */}
          <div className="group bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-3 sm:p-4 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-4xl sm:text-5xl text-red-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-red-800 transition-colors">
                Store Location & Rent
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Franchisees are responsible for securing and paying rent for
                their store location. Buyzaar Mart provides location selection
                guidance and support.
              </p>
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 w-full">
                <span className="text-xs sm:text-sm font-semibold text-red-800">
                  ✓ Site Selection Assistance
                </span>
              </div>
            </div>
          </div>

          {/* Marketing & Brand Promotion */}
          <div className="group bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-50 p-3 sm:p-4 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaBullhorn className="text-4xl sm:text-5xl text-red-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-red-800 transition-colors">
                Marketing & Brand Promotion
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Complete marketing support including TV advertisements, radio
                campaigns, social media marketing, promotional materials, and
                local area brand building activities.
              </p>
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 w-full">
                <span className="text-xs sm:text-sm font-semibold text-red-800">
                  ✓ Full Marketing Coverage
                </span>
              </div>
            </div>
          </div>

          {/* Inventory & Supply Chain */}
          <div className="group bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-50 p-3 sm:p-4 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaBoxes className="text-4xl sm:text-5xl text-red-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-red-800 transition-colors">
                Inventory & Supply Chain
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Fully managed inventory with regular stock replenishment,
                quality products sourced directly from manufacturers, and
                automated supply chain management.
              </p>
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 w-full">
                <span className="text-xs sm:text-sm font-semibold text-red-800">
                  ✓ Automated Management
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO-IMAGE GALLERY - Responsive */}
      <section className="max-w-5xl mx-auto my-8 sm:my-12 md:my-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-5 sm:mb-7 text-red-800">
          Discover Your Franchise Style!
        </h2>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/Comic-2.png"
              alt="Franchise Store Interior"
              className="rounded-2xl shadow-xl border-2 border-red-800 w-full object-cover max-h-80 sm:max-h-96 md:max-h-100 transition duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/Comic 4.png"
              alt="Team Working at Franchise"
              className="rounded-2xl shadow-xl border-2 border-red-800 w-full object-cover max-h-80 sm:max-h-96 md:max-h-100 transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Store Format Options - Responsive */}
      <div className="max-w-full rounded-2xl mx-4 sm:mx-6 md:mx-auto p-6 sm:p-8 md:p-10 shadow-xl border-2 border-red-800 bg-gradient-to-br from-gray-50 to-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-6 sm:mb-8 md:mb-10 px-2">
          Store Formats & Product Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {storeFormats.map((format, index) => (
            <div
              key={index}
              className="bg-red-800 rounded-xl p-5 sm:p-6 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <FaStore className="text-white flex-shrink-0" size={24} />
                <h3 className="text-xl sm:text-2xl font-bold text-black">{format.name}</h3>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-3 sm:mb-4 bg-gray-100 inline-block px-2 sm:px-3 py-1 rounded">
                {format.size}
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-200">
                {format.products.map((product, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-black mr-2 flex-shrink-0">•</span>
                    <span>{product}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* DOCUMENTS REQUIRED - Responsive */}
      <section className="max-w-full sm:max-w-6xl mx-4 sm:mx-6 md:mx-auto my-8 sm:my-10 md:my-12 p-0 rounded-2xl shadow-lg border border-gray-100 bg-white overflow-hidden">
        <div className="bg-black px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl text-white">📄</span>
            <span className="font-bold text-white text-lg sm:text-xl md:text-2xl">
              Documents Required
            </span>
          </div>
        </div>
        <div className="px-4 sm:px-6 md:px-8 pt-3 sm:pt-4 pb-0">
          <div className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
            Complete list of required documents for franchise application
          </div>
          
          <div className="mb-2 mt-3 sm:mt-4">
            <div className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
              Applicant's personal details:
            </div>
            <div className="space-y-2">
              <div className="bg-gray-50 rounded-lg px-3 sm:px-4 py-2 flex items-start gap-2 text-xs sm:text-sm">
                <span className="mt-1 text-gray-600 flex-shrink-0">●</span>
                <span>ID Proof: Aadhar/Pan/Voter ID</span>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 sm:px-4 py-2 flex items-start gap-2 text-xs sm:text-sm">
                <span className="mt-1 text-gray-600 flex-shrink-0">●</span>
                <span>
                  Address proof: Electricity Bill/Rent Agreement/Ration Card
                </span>
              </div>
            </div>
          </div>
          
          <div className="mb-2 mt-4 sm:mt-6">
            <div className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
              Details for Franchise Application:
            </div>
            <div className="space-y-2">
              <div className="bg-gray-50 rounded-lg px-3 sm:px-4 py-2 flex items-start gap-2 text-xs sm:text-sm">
                <span className="mt-1 text-gray-600 flex-shrink-0">●</span>
                <span>
                  Educational Certificate: Certificate of Highest Education - 10th/12th/Grad/Post-Grad{" "}
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 sm:px-4 py-2 flex items-start gap-2 text-xs sm:text-sm">
                <span className="mt-1 text-gray-600 flex-shrink-0">●</span>
                <span>Bank Details: Cancelled cheque/Copy of Passbook</span>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 sm:px-4 py-2 flex items-start gap-2 text-xs sm:text-sm">
                <span className="mt-1 text-gray-600 flex-shrink-0">●</span>
                <span>
                  Property Documents for Proposed Store: Ownership/Rental Agreement
                </span>
              </div>
            </div>
          </div>
          
          <div className="mb-3 sm:mb-4 mt-4 sm:mt-6 pb-2">
            <div className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
              Additional Details(Not Documents): For applicant KYC
            </div>
            <div className="space-y-2">
              <div className="bg-gray-50 rounded-lg px-3 sm:px-4 py-2 flex items-start gap-2 text-xs sm:text-sm">
                <span className="mt-1 text-gray-600 flex-shrink-0">●</span>
                <span>Financial details (Income)</span>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 sm:px-4 py-2 flex items-start gap-2 text-xs sm:text-sm">
                <span className="mt-1 text-gray-600 flex-shrink-0">●</span>
                <span>Work experience/background/skills</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <Calculator openModal={openModal} />
      <FranchisePopupModal isOpen={isModalOpen} onClose={closeModal} />

      {/* FRANCHISE APPLICATION FORM - Fully Responsive */}
      <section className="max-w-3xl mx-4 sm:mx-6 md:mx-auto mb-12 sm:mb-16 md:mb-20 p-0 rounded-2xl shadow-xl border border-gray-100 bg-white overflow-hidden">
        <div className="bg-black px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-6 rounded-t-2xl">
          <h2 className="font-bold text-white text-xl sm:text-2xl md:text-3xl flex items-center gap-2 sm:gap-3">
            📝 <span className="break-words">Franchise Application Form</span>
          </h2>
        </div>
        
        <form className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 space-y-6 sm:space-y-8 md:space-y-10">
          {/* Personal Details */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Personal Details</h3>
            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
              <input
                type="text"
                className="input"
                placeholder="Full Name"
                required
              />
              <input
                type="text"
                className="input"
                placeholder="Father's/Husband's Name"
                required
              />
              <div className="flex flex-col">
                <label className="mb-1 font-semibold text-gray-700 text-xs sm:text-sm">
                  Date of Birth (mm-dd-yyyy)
                </label>
                <input type="date" className="input" required />
              </div>
              <select className="input" required>
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select className="input" required>
                <option value="">Marital Status</option>
                <option>Single</option>
                <option>Married</option>
              </select>
              <input
                type="text"
                className="input"
                placeholder="Mobile Number"
                required
              />
              <input
                type="email"
                className="input sm:col-span-2"
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          {/* Your Selected Module */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">
              Your Selected Module
            </h3>
            <select className="input" required>
              <option value="">Select Module</option>
              <option value="FOFO">FOFO</option>
              <option value="FICO">FICO</option>
              <option value="FICO Premium">FICO Premium</option>
            </select>
          </div>

          {/* Identity Proof */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
              Identity Proof
            </h3>
            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-3 mb-3">
              <select className="input" required>
                <option value="">Select ID Type</option>
                <option value="aadhaar">Aadhaar</option>
                <option value="voter">Voter ID</option>
              </select>
              <input
                type="text"
                className="input"
                placeholder="ID Number"
                required
              />
              <input type="text" className="input" placeholder="PAN Number" />
            </div>
            <label className="flex flex-col sm:flex-row sm:items-center mt-3 gap-2">
              <input
                type="file"
                className="file-input"
                required
              />
              <div className="flex items-center gap-2">
                <FaLink className="text-red-800" size={18} />
                <span className="text-xs text-gray-500">
                  Attach Copy of Identity proof
                </span>
              </div>
            </label>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Address Details</h3>
            <textarea
              className="input min-h-[80px] sm:min-h-[100px]"
              placeholder="Full Permanent Address"
              required
            />
            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-3 mt-4">
              <input
                type="text"
                className="input"
                placeholder="District"
                required
              />
              <input
                type="text"
                className="input"
                placeholder="State"
                required
              />
              <input
                type="text"
                className="input"
                placeholder="PIN Code"
                required
              />
            </div>
            <label className="flex flex-col sm:flex-row sm:items-center mt-3 gap-2">
              <input
                type="file"
                className="file-input"
                required
              />
              <div className="flex items-center gap-2">
                <FaLink className="text-red-800" size={18} />
                <span className="text-xs text-gray-500">Attach Copy of address proof</span>
              </div>
            </label>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">
              Educational Qualification
            </h3>
            <select className="input mb-3" required>
              <option value="">Highest Qualification Achieved</option>
              <option>10th</option>
              <option>12th</option>
              <option>Graduate</option>
              <option>Post-Graduate</option>
            </select>
            <label className="flex flex-col sm:flex-row sm:items-center gap-2">
              <input
                type="file"
                className="file-input"
                required
              />
              <div className="flex items-center gap-2">
                <FaLink className="text-red-800" size={18} />
                <span className="text-xs text-gray-500">
                  Attach Copy of last qualification marksheet/certificate
                </span>
              </div>
            </label>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">
              Work Experience & Skills
            </h3>
            <textarea
              className="input min-h-[80px] sm:min-h-[100px]"
              placeholder="Previous Business or Work Experience if any"
            />
            <textarea
              className="input mt-3 min-h-[80px] sm:min-h-[100px]"
              placeholder="Relevant Skills or Certifications if any"
            />
          </div>

          {/* Financial Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">
              Financial Information
            </h3>
            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
              <input
                type="text"
                className="input"
                placeholder="Current Monthly Family Income"
                required
              />
              <select className="input" required>
                <option value="">Any existing Loans or Liabilities?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          {/* Banking Details */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Banking Details</h3>
            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
              <input type="text" className="input" placeholder="Bank Name" required />
              <input type="text" className="input" placeholder="Branch Name" required />
            </div>
            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 mt-4">
              <input
                type="text"
                className="input"
                placeholder="Account Number"
                required
              />
              <input type="text" className="input" placeholder="IFSC Code" required />
            </div>
            <label className="flex flex-col sm:flex-row sm:items-center mt-3 gap-2">
              <input
                type="file"
                className="file-input"
                required
              />
              <div className="flex items-center gap-2">
                <FaLink className="text-red-800" size={18} />
                <span className="text-xs text-gray-500">
                  Attach Cancelled Cheque / Passbook Copy
                </span>
              </div>
            </label>
          </div>

          {/* Proposed Store Location */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">
              Proposed Store Location
            </h3>
            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-3">
              <input className="input" placeholder="Village/Town" />
              <input className="input" placeholder="Block" />
              <input className="input" placeholder="District" />
            </div>
            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 mt-4">
              <select className="input" required>
                <option value="">Do you own the proposed premises?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <input
                className="input"
                placeholder="If leased, agreement duration"
              />
            </div>
            <input className="input mt-3" placeholder="Total Area (sq. ft.)" />
            <label className="flex flex-col sm:flex-row sm:items-center mt-3 gap-2">
              <input type="file" className="file-input" />
              <div className="flex items-center gap-2">
                <FaLink className="text-red-800" size={18} />
                <span className="text-xs text-gray-500">
                  Attach Ownership/Rent/Lease proof
                </span>
              </div>
            </label>
          </div>

          {/* References */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">
              References - Two known persons (Optional)
            </h3>
            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
              <input className="input" placeholder="Reference 1 Name" />
              <input className="input" placeholder="Reference 1 Contact" />
            </div>
            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 mt-4">
              <input className="input" placeholder="Reference 2 Name" />
              <input className="input" placeholder="Reference 2 Contact" />
            </div>
          </div>

          {/* Agent/Employee Declaration */}
          <div className="rounded-xl bg-gray-50 p-4 sm:p-6 md:p-8 shadow mt-6 sm:mt-8">
            <h4 className="font-semibold text-black mb-3 text-sm sm:text-base">
              Agent/Employee Declaration (For Internal Performance Tracking)
            </h4>
            <p className="text-gray-700 text-xs sm:text-sm mb-3">
              I declare that I was introduced to and assisted throughout the
              franchise onboarding process by the following
              representative/employee/agent of Buyzaar/Markview Fabrication pvt ltd.
            </p>
            <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
              <input
                className="input"
                placeholder="Buyzaar Representative Name"
              />
              <input
                className="input"
                placeholder="Designation/Role (if known)"
              />
              <input
                className="input sm:col-span-2"
                placeholder="Contact Number (if known)"
              />
            </div>
            <div className="flex items-start mt-4 gap-3">
              <input type="checkbox" id="guided" className="mt-1 flex-shrink-0" />
              <label htmlFor="guided" className="text-xs sm:text-sm text-gray-700">
                I confirm that the above person guided me during inquiry.
              </label>
            </div>
            <div className="flex items-start mt-4 gap-3">
              <input type="checkbox" id="independent" className="mt-1 flex-shrink-0" />
              <label htmlFor="independent" className="text-xs sm:text-sm text-gray-700">
                I was not assisted by any Buyzaar agent/employee and applied
                independently.
              </label>
            </div>
          </div>

          {/* Main Declaration */}
          <div className="rounded-xl bg-gray-100 p-4 sm:p-6 md:p-8 mt-6 sm:mt-8 shadow border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Declaration</h4>
            <p className="text-xs sm:text-sm text-gray-700 mb-3">
              I, the undersigned applicant, hereby declare that all the
              information and documents submitted in this franchise application
              form are true, correct, and complete to the best of my knowledge
              and belief.
            </p>
            <p className="text-xs sm:text-sm text-gray-700 mb-3">
              I have understood the need for and agreed to pay the site visitation
              fee. I understand that once the visit has been made, that is
              completely non refundable. Any false declaration, omission of
              facts, or submission of fraudulent or forged documents will result
              in immediate disqualification of my application or termination of
              my franchise rights at any stage, without refund or legal claim.
            </p>
            <p className="text-xs sm:text-sm text-gray-700 mb-3">
              I have understood the basic requirements of investment,
              operational responsibilities, and mandatory compliance as
              prescribed by Buyzaar/Markview Fabrication pvt ltd. under the{" "}
              "The Buyzaar Mart" franchise scheme.
            </p>
            <p className="text-xs sm:text-sm text-gray-700 mb-3">
              I agree to comply with all operational rules, training mandates,
              and monthly reporting procedures as communicated by
              Buyzaar/Markview Fabrication pvt ltd. I am fully aware that store
              performance, transparency of transactions, and customer
              experience will directly affect the continuity of my franchise.
            </p>
          </div>

          {/* Extra Declaration Checkboxes */}
          <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-5">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="declarationAgree"
                className="mt-1 flex-shrink-0"
                required
              />
              <label htmlFor="declarationAgree" className="text-xs sm:text-sm text-gray-700">
                I have read, understood, and agree to the above declaration and
                terms.
              </label>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="infoUnderstood"
                className="mt-1 flex-shrink-0"
                required
              />
              <label htmlFor="infoUnderstood" className="text-xs sm:text-sm text-gray-700">
                I have received and understood all the information
                available/provided to me about "The Buyzaar Mart" before filling
                this franchise application form and have understood the
                investment requirements and the fees involved.
              </label>
            </div>
          </div>

          {/* Signature, Date and Signature PDF Upload */}
          <div className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                className="input"
                type="text"
                placeholder="Signature"
                required
              />
              <input
                className="input"
                type="date"
                placeholder="Date"
                required
              />
            </div>
            <label className="flex flex-col sm:flex-row sm:items-center gap-2">
              <input
                type="file"
                accept="application/pdf"
                className="file-input"
                required
              />
              <div className="flex items-center gap-2">
                <FaLink className="text-red-800" size={18} />
                <span className="text-xs text-gray-500">
                  Upload signed declaration (PDF)
                </span>
              </div>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 sm:py-4 rounded-lg bg-black text-white font-semibold text-base sm:text-lg hover:bg-gray-800 transition shadow-xl mt-6 sm:mt-8"
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* Tailwind Custom Inputs - Enhanced Responsive */}
      <style jsx>{`
        .input {
          @apply border rounded-lg px-3 sm:px-4 py-2 w-full bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 transition text-sm sm:text-base;
        }
        .file-input {
          @apply border rounded-lg px-3 sm:px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 transition cursor-pointer text-xs sm:text-sm;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        label.flex > .file-input {
          width: 100%;
        }
        @media (min-width: 640px) {
          label.flex.sm\\:flex-row > .file-input {
            width: auto;
            margin-right: 0.5rem;
            padding: 0.4rem 0.8rem;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
}