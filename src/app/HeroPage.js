"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

// ✅ Load Work Sans font
const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const HeroPage = ({ openModal }) => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canDownload, setCanDownload] = useState(false);

  const handleDownloadClick = () => {
    setShowDownloadModal(true);
    setCanDownload(false);
    setFormData({ name: "", phone: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please fill in both name and phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to FormSubmit
      const response = await fetch("https://formsubmit.co/info@thebuyzaarmart.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          _subject: "Someone Downloaded Your Brochure!",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setCanDownload(true);
        setIsSubmitting(false);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/brochures/franchise-brochure.pdf";
    link.download = "Franchise-Brochure.pdf";
    link.click();
    
    // Close modal after download
    setTimeout(() => {
      setShowDownloadModal(false);
      setFormData({ name: "", phone: "" });
      setCanDownload(false);
    }, 500);
  };

  return (
    <>
      <section
        id="home"
        className={`${worksans.className} relative bg-white overflow-hidden mt-1`}
      >
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-left space-y-6 sm:space-y-8 lg:space-y-15 px-2 sm:px-0 lg:pr-16 lg:-ml[-40px]">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-[#b00000]">The Buyzaar Mart - &quot;Your Friendly Neighborhood Store&quot;</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Join <span className="text-black">Buyzaar</span> and become a part of India&apos;s growing entrepreneurial network.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Apply Now Button */}
                <button
                  onClick={openModal}
                  className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#b00000] transition-all transform hover:scale-105 shadow-lg text-center"
                >
                  Apply Now
                </button>

                {/* Download Brochure Button */}
                <button
                  onClick={handleDownloadClick}
                  className="border-2 border-[#b00000] text-black cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#b00000] hover:text-white transition-all"
                >
                  Download brochure
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mt-8 lg:mt-0 mx-4 sm:mx-0 lg:-ml-8 xl:-ml-12">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform scale-100 sm:scale-105 lg:scale-115">
                <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
                  <Image
                    src="/images/f01.jpg"
                    alt="Buyzaar Mart Store"
                    width={700}
                    height={800}
                    priority
                    className="w-full h-full object-cover scale-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Brochure Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 backdrop-blur-md bg-opacity-30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowDownloadModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#b00000] mb-2">
              Download Brochure
            </h2>
            <p className="text-gray-600 mb-6">
              Please provide your details to download our franchise brochure!
            </p>

            {!canDownload ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b00000] focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b00000] focus:outline-none transition-colors"
                    placeholder="Enter 10-digit phone number"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#b00000] text-white py-3 rounded-lg font-semibold hover:bg-black transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit & Enable Download"}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-4">
                  <p className="text-green-700 font-semibold">
                    ✓ Details submitted successfully!
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    You can now download the brochure
                  </p>
                </div>
                
                <button
                  onClick={handleDownloadBrochure}
                  className="w-full bg-[#b00000] text-white py-3 rounded-lg font-semibold hover:bg-black transition-all transform hover:scale-105"
                >
                  Download Brochure Now
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeroPage;