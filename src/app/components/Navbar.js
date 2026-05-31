"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const aboutButtonRef = useRef(null);

  const isHomePage = pathname === "/";

  const isActiveLink = (path) => {
    if (path === "/") return pathname === "/";
    if (path === "/#calculator") return pathname === "/" || pathname.includes("calculator");
    if (path === "/#services") return pathname === "/" && (typeof window !== "undefined" && window.location.hash === "#services");
    return pathname === path || pathname.startsWith(path + "/");
  };

  const isAboutSectionActive = () => isActiveLink("/our-mission") || isActiveLink("/our-vision");

  const isServicesSectionActive = () =>
    isActiveLink("/our-module") || (pathname === "/" && typeof window !== "undefined" && window.location.hash === "#services");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
    setIsAboutDropdownOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  const toggleAboutDropdown = useCallback(() => setIsAboutDropdownOpen((prev) => !prev), []);
  const toggleMobileAbout = useCallback(() => setIsMobileAboutOpen((prev) => !prev), []);
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);
  const toggleMobileServices = useCallback(() => setIsMobileServicesOpen((prev) => !prev), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        aboutButtonRef.current &&
        !aboutButtonRef.current.contains(event.target)
      ) {
        setIsAboutDropdownOpen(false);
      }
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(event.target)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSmoothScroll = useCallback(
    (e, targetId) => {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMobileMenu();
    },
    [closeMobileMenu]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && (isMenuOpen || isAboutDropdownOpen || isServicesDropdownOpen)) {
        closeMobileMenu();
        setIsAboutDropdownOpen(false);
        setIsServicesDropdownOpen(false);
      }
    },
    [isMenuOpen, isAboutDropdownOpen, isServicesDropdownOpen, closeMobileMenu]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="fixed top-0 w-full z-50 bg-[#b00000] text-white text-sm">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-start gap-6">
          <a
            href="tel:+919217991727"
            className="flex items-center gap-1.5 hover:text-red-200 transition-colors duration-200"
          >
            <Phone size={13} />
            <span>+91 9217991727</span>
          </a>
          <a
            href="mailto:info@thebuyzaarmart.com"
            className="flex items-center gap-1.5 hover:text-red-200 transition-colors duration-200"
          >
            <Mail size={13} />
            <span>info@thebuyzaarmart.com</span>
          </a>
        </div>
      </div>

      {/* ── MAIN HEADER ── pushed down by top bar (~30px) */}
      <header
        className={`fixed top-[30px] w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white shadow-md"
        }`}
      >
        <nav className="max-w-9xl mx-auto px-4 sm:px-6 py-0">
          {/* Desktop Layout */}
          <div className="hidden lg:flex relative items-center h-18">
            {/* Absolutely Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
              <Link href="/" className="flex items-center">
                <img
                  src="/images/buyzaar-logo.png"
                  alt="The Buyzaar Mart"
                  className={`w-auto transition-all duration-300 ${isScrolled ? "h-50" : "h-50"}`}
                />
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="flex flex-1 justify-end">
              <div className="flex items-center space-x-7">
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActiveLink("/") ? "text-black" : "text-gray-600 hover:text-black"
                  }`}
                >
                  Home
                </Link>

                {/* About Us Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    ref={aboutButtonRef}
                    onClick={toggleAboutDropdown}
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    className={`text-sm font-medium transition-colors duration-300 flex items-center cursor-pointer space-x-1 focus:outline-none ${
                      isAboutSectionActive() || isAboutDropdownOpen ? "text-black" : "text-gray-600 hover:text-black"
                    }`}
                    aria-expanded={isAboutDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>About Us</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${isAboutDropdownOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>

                  <div
                    className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 ${
                      isAboutDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <div className="py-2">
                      <Link
                        href="/our-mission"
                        className={`block px-4 py-2.5 text-sm transition-colors duration-300 font-medium ${
                          isActiveLink("/our-mission") ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"
                        }`}
                        onClick={() => setIsAboutDropdownOpen(false)}
                      >
                        Our Mission
                      </Link>
                      <Link
                        href="/our-vision"
                        className={`block px-4 py-2.5 text-sm transition-colors duration-300 font-medium ${
                          isActiveLink("/our-vision") ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"
                        }`}
                        onClick={() => setIsAboutDropdownOpen(false)}
                      >
                        Our Vision
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Services Dropdown */}
                <div className="relative" ref={servicesDropdownRef}>
                  <button
                    ref={servicesButtonRef}
                    onClick={toggleServicesDropdown}
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    className={`text-sm font-medium transition-colors duration-300 cursor-pointer flex items-center space-x-1 focus:outline-none ${
                      isServicesSectionActive() || isServicesDropdownOpen ? "text-black" : "text-gray-600 hover:text-black"
                    }`}
                    aria-expanded={isServicesDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>

                  <div
                    className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 ${
                      isServicesDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <div className="py-2">
                      <Link
                        href="/store-features"
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors duration-300 font-medium"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Store Features
                      </Link>
                      <Link
                        href="/our-module"
                        className={`block px-4 py-2.5 text-sm transition-colors duration-300 font-medium ${
                          isActiveLink("/our-module") ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"
                        }`}
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Our Module
                      </Link>
                      <Link
                        href="/our-store"
                        className={`block px-4 py-2.5 text-sm transition-colors duration-300 font-medium ${
                          isActiveLink("/our-store") ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"
                        }`}
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Experience The Buyzaar Mart
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/franchise"
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActiveLink("/franchise") ? "text-black" : "text-gray-600 hover:text-black"
                  }`}
                >
                  Franchise
                </Link>

                <Link
                  href="/blog"
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActiveLink("/blog") ? "text-black" : "text-gray-600 hover:text-black"
                  }`}
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActiveLink("/contact") ? "bg-[#b00000] text-white" : "bg-[#b00000] text-white hover:bg-[#8f0000]"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex lg:hidden items-center justify-between h-14 relative ml-4">
            {/* Mobile Logo - Centered */}
            <div className="absolute left-0 right-0 flex items-center justify-center z-10 max-w-[35%] mx-auto">
              <Link href="/" className="flex items-center">
                <img
                  src="/images/buyzaar-logo.png"
                  alt="The Buyzaar Mart"
                  className="h-30 w-auto transition-all duration-300 max-w-full"
                />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="ml-auto">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-800 hover:text-black transition-colors duration-300 p-2 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-md"
                aria-expanded={isMenuOpen}
                aria-label="Toggle mobile menu"
                type="button"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block px-3 py-2.5 rounded-md transition-colors duration-300 text-sm font-medium ${
                isActiveLink("/") ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* Mobile About Us */}
            <div>
              <button
                onClick={toggleMobileAbout}
                className={`flex items-center justify-between w-full px-3 py-2.5 rounded-md transition-colors duration-300 text-sm font-medium focus:outline-none ${
                  isAboutSectionActive() ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
                aria-expanded={isMobileAboutOpen}
              >
                <span>About Us</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isMobileAboutOpen ? "rotate-180" : "rotate-0"}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isMobileAboutOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-6 space-y-1">
                  <Link href="/our-mission" onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-sm transition-colors duration-300 ${isActiveLink("/our-mission") ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"}`}>Our Mission</Link>
                  <Link href="/our-vision" onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-sm transition-colors duration-300 ${isActiveLink("/our-vision") ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"}`}>Our Vision</Link>
                </div>
              </div>
            </div>

            {/* Mobile Services */}
            <div>
              <button
                onClick={toggleMobileServices}
                className={`flex items-center justify-between w-full px-3 py-2.5 rounded-md transition-colors duration-300 text-sm font-medium focus:outline-none ${
                  isServicesSectionActive() ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
                aria-expanded={isMobileServicesOpen}
              >
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : "rotate-0"}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-6 space-y-1">
                  <Link href="/store-features" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-300">Store Features</Link>
                  <Link href="/our-module" onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-sm transition-colors duration-300 ${isActiveLink("/our-module") ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"}`}>Our Module</Link>
                  <Link href="/our-store" onClick={closeMobileMenu} className={`block px-3 py-2 rounded-md text-sm transition-colors duration-300 ${isActiveLink("/our-store") ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"}`}>Experience The Buyzaar Mart</Link>
                </div>
              </div>
            </div>

            <Link href="/franchise" onClick={closeMobileMenu} className={`block px-3 py-2.5 rounded-md text-sm transition-colors duration-300 font-medium ${isActiveLink("/franchise") ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"}`}>Franchise</Link>
            <Link href="/blog" onClick={closeMobileMenu} className={`block px-3 py-2.5 rounded-md text-sm transition-colors duration-300 font-medium ${isActiveLink("/blog") ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"}`}>Blog</Link>
            <Link href="/contact" onClick={closeMobileMenu} className={`block px-3 py-2.5 rounded-md text-sm transition-all duration-300 font-medium text-center ${isActiveLink("/contact") ? "bg-[#b00000] text-white" : "bg-[#b00000] text-white hover:bg-[#8f0000]"}`}>Contact</Link>

          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;