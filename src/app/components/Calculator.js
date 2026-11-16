"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Building2,
  Package,
  Briefcase,
  Monitor,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Info,
} from "lucide-react";

const Calculator = ({ openModal }) => {
  const router = useRouter();
  const [area, setArea] = useState(600);

  // Store Tier mapping based on updated details:
  // Mini Mart: 600 - 1000 sqft | 18.5 - 26 Lakhs | Projected Sales: 10 - 16 Lakhs | Payback: 18 - 24 Months
  // Super Mart: 1001 - 3000 sqft | 27 - 76 Lakhs | Projected Sales: 16 - 48 Lakhs | Payback: 18 - 24 Months
  // Hyper Mart: 3001 - 8000 sqft | 77 Lakhs - 2 Cr. | Projected Sales: 48 Lakhs - 2 Cr. | Payback: 18 - 24 Months
  const currentTier = useMemo(() => {
    const val = Number(area) || 600;
    if (val <= 1000) {
      return {
        name: "Mini Mart",
        sizeRange: "600 - 1000 sqft",
        investmentRange: "18.5 – 26 Lakhs",
        salesRange: "10 – 16 Lakhs",
        payback: "18 – 24 Months",
        minArea: 600,
        maxArea: 1000,
        minTotal: 1850000,
        maxTotal: 2600000,
        itemCount: "1,000+ products",
      };
    } else if (val <= 3000) {
      return {
        name: "Super Mart",
        sizeRange: "1001 - 3000 sqft",
        investmentRange: "27 – 76 Lakhs",
        salesRange: "16 – 48 Lakhs",
        payback: "18 – 24 Months",
        minArea: 1001,
        maxArea: 3000,
        minTotal: 2700000,
        maxTotal: 7600000,
        itemCount: "3,000+ products",
      };
    } else {
      return {
        name: "Hyper Mart",
        sizeRange: "3001 - 8000 sqft",
        investmentRange: "77 Lakhs – 2 Cr.",
        salesRange: "48 Lakhs – 2 Cr.",
        payback: "18 – 24 Months",
        minArea: 3001,
        maxArea: 8000,
        minTotal: 7700000,
        maxTotal: 20000000,
        itemCount: "5,000+ products",
      };
    }
  }, [area]);

  const clampedArea = Math.min(Math.max(Number(area) || 600, 600), 8000);

  // Exact proportional interpolation to ensure total investment matches the requested figures
  const totalInvestment = useMemo(() => {
    const { minArea, maxArea, minTotal, maxTotal } = currentTier;
    const ratio = Math.max(0, Math.min(1, (clampedArea - minArea) / (maxArea - minArea || 1)));
    return Math.round(minTotal + ratio * (maxTotal - minTotal));
  }, [clampedArea, currentTier]);

  // Breakdown costs including Security Deposit, summing cleanly to totalInvestment
  const costs = useMemo(() => {
    const franchiseFeeWithGST = 295000; // ₹2,50,000 + 18% GST
    const softwareFeeWithGST = clampedArea <= 1000 ? 59000 : clampedArea <= 3000 ? 118000 : 236000;
    
    // Security Deposit: Starts at ₹1,00,000 and scales with tier size
    let securityDeposit = 100000;
    if (clampedArea > 1000 && clampedArea <= 3000) {
      const subRatio = (clampedArea - 1000) / 2000;
      securityDeposit = Math.round(150000 + subRatio * 150000); // 1.5L - 3L
    } else if (clampedArea > 3000) {
      const subRatio = (clampedArea - 3000) / 5000;
      securityDeposit = Math.round(350000 + subRatio * 450000); // 3.5L - 8L
    }

    const remaining = totalInvestment - franchiseFeeWithGST - softwareFeeWithGST - securityDeposit;
    const interior = Math.round((remaining * 0.46) / 1000) * 1000;
    const stock = remaining - interior;

    return {
      interior,
      stock,
      franchiseFee: franchiseFeeWithGST,
      softwareFee: softwareFeeWithGST,
      securityDeposit,
    };
  }, [totalInvestment, clampedArea]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-IN").format(Math.round(val));
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleAreaBlur = () => {
    if (!area || Number(area) < 600) setArea(600);
    else if (Number(area) > 8000) setArea(8000);
  };

  const handleContactClick = () => {
    router.push("/contact");
  };

  const sliderPercent = ((clampedArea - 600) / (8000 - 600)) * 100;

  return (
    <section id="calculator" className="bg-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Original Heading & Subtitle */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b00000] mb-2 px-2">
            Calculate Your{" "}
            <span className="text-black">Franchise Investment</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto px-4">
            Calculate your estimated investment for Mini Mart, Super Mart, or
            Hyper Mart franchise including stock, interior, software fee,
            franchise fee, and security deposit.
          </p>
        </div>

        {/* Compact Single-Screen Main Card (No table below) */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-5 sm:p-7 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            
            {/* Left Column: Store Size Selector & Included Highlights */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                  STORE SIZE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-0.5">
                  Choose Your Store Size
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Drag the slider or type your preferred area in sq ft to get a live investment estimate.
                </p>
              </div>

              {/* Slider Component with Floating Tooltip Indicator */}
              <div className="pt-5 pb-1">
                <div className="relative mb-2.5">
                  {/* Floating Tooltip Bubble */}
                  <div
                    className="absolute -top-8 transform -translate-x-1/2 bg-[#b00000] text-white text-xs font-bold px-2.5 py-0.5 rounded shadow pointer-events-none whitespace-nowrap"
                    style={{ left: `${sliderPercent}%` }}
                  >
                    {clampedArea} sq ft
                    <div className="w-2 h-2 bg-[#b00000] rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                  </div>

                  {/* Range Slider Track */}
                  <input
                    type="range"
                    min={600}
                    max={8000}
                    step={10}
                    value={clampedArea}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer range-slider"
                    style={{
                      background: `linear-gradient(to right, #b00000 0%, #b00000 ${sliderPercent}%, #e5e7eb ${sliderPercent}%, #e5e7eb 100%)`,
                    }}
                  />
                </div>

                {/* Min & Max labels */}
                <div className="flex justify-between text-xs font-semibold text-gray-400">
                  <span>600 sq ft</span>
                  <span>8000 sq ft</span>
                </div>
              </div>

              {/* Area Input Box & Current Tier Badge */}
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 focus-within:border-[#b00000] rounded-xl px-3 py-1.5 bg-gray-50/50">
                  <input
                    type="number"
                    value={area}
                    onChange={handleAreaChange}
                    onBlur={handleAreaBlur}
                    min={600}
                    max={8000}
                    className="w-20 text-base font-bold text-gray-900 bg-transparent focus:outline-none"
                  />
                  <span className="text-xs font-semibold text-gray-500 pl-1">sq ft</span>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-red-50 border border-red-100 text-xs sm:text-sm font-semibold text-[#b00000]">
                  <span className="w-2 h-2 rounded-full bg-[#b00000] animate-pulse"></span>
                  <span>{currentTier.name} ({currentTier.sizeRange})</span>
                </div>
              </div>

              {/* Quick Format Switch Tabs */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {[
                  { name: "Mini Mart", sqft: 600, range: "18.5 – 26 L" },
                  { name: "Super Mart", sqft: 1001, range: "27 – 76 L" },
                  { name: "Hyper Mart", sqft: 3001, range: "77 L – 2 Cr" },
                ].map((tier) => (
                  <button
                    key={tier.name}
                    type="button"
                    onClick={() => setArea(tier.sqft)}
                    className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                      currentTier.name === tier.name
                        ? "bg-[#b00000] text-white border-[#b00000] shadow-sm"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <div className="text-xs font-bold leading-tight">{tier.name}</div>
                    <div className={`text-[10px] mt-0.5 ${currentTier.name === tier.name ? "text-red-100" : "text-gray-500"}`}>
                      {tier.range}
                    </div>
                  </button>
                ))}
              </div>

              {/* What's Included Section */}
              <div className="pt-2 border-t border-gray-100">
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase block mb-2">
                  WHAT&apos;S INCLUDED
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
                  {[
                    "Complete Store Setup",
                    "Premium Interior Design",
                    `Product Stock (${currentTier.itemCount})`,
                    "POS Billing Software",
                    "Marketing Support",
                    "Dedicated Account Manager",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#b00000] shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Breakdown Cards (with Security Deposit), Total Highlight, CTA */}
            <div className="lg:col-span-6 space-y-2.5">
              
              {/* Item 1: Interior Setup */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/80 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-100/70 flex items-center justify-center text-[#b00000] shrink-0">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">Interior Setup</h4>
                    <p className="text-[11px] text-gray-400">Based on store size</p>
                  </div>
                </div>
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  ₹{formatCurrency(costs.interior)}
                </span>
              </div>

              {/* Item 2: Product Stock */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/80 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-100/70 flex items-center justify-center text-[#b00000] shrink-0">
                    <Package size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">Product Stock</h4>
                    <p className="text-[11px] text-gray-400">{currentTier.itemCount}</p>
                  </div>
                </div>
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  ₹{formatCurrency(costs.stock)}
                </span>
              </div>

              {/* Item 3: Franchise Fee */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/80 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-100/70 flex items-center justify-center text-[#b00000] shrink-0">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">Franchise Fee</h4>
                    <p className="text-[11px] text-gray-400">Incl. 18% GST</p>
                  </div>
                </div>
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  ₹{formatCurrency(costs.franchiseFee)}
                </span>
              </div>

              {/* Item 4: Software Fee */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/80 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-100/70 flex items-center justify-center text-[#b00000] shrink-0">
                    <Monitor size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">Software Fee</h4>
                    <p className="text-[11px] text-gray-400">Incl. 18% GST</p>
                  </div>
                </div>
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  ₹{formatCurrency(costs.softwareFee)}
                </span>
              </div>

              {/* Item 5: Security Deposit */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/80 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-100/70 flex items-center justify-center text-[#b00000] shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">Security Deposit</h4>
                    <p className="text-[11px] text-gray-400">Refundable / Adjustable operational buffer</p>
                  </div>
                </div>
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  ₹{formatCurrency(costs.securityDeposit)}
                </span>
              </div>

              {/* Estimated Setup Investment Box (Website Theme) */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#b00000] to-[#8f0000] text-white p-4 sm:p-5 shadow-md">
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-red-200">
                      <Building2 size={14} />
                      <span>ESTIMATED SETUP INVESTMENT</span>
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-0.5">
                      ₹{formatCurrency(totalInvestment)}
                    </div>
                    <p className="text-xs text-red-100 mt-1">
                      Payback Period: <span className="font-semibold text-white">{currentTier.payback}</span> • Projected Sales: <span className="font-semibold text-white">₹{currentTier.salesRange}</span>
                    </p>
                  </div>
                </div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none"></div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400 px-1">
                <Info size={12} className="shrink-0 text-gray-400" />
                <span>Final numbers may vary slightly based on city, store condition, and scope.</span>
              </div>

              {/* CTA Button in Black / Red Theme */}
              <button
                onClick={handleContactClick}
                type="button"
                className="w-full bg-[#111827] hover:bg-[#b00000] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow hover:shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer tracking-wide"
              >
                <PhoneCall size={16} />
                <span>CONTACT US FOR DETAILED PLAN</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .range-slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #b00000;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
          transition: transform 0.1s ease;
        }

        .range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }

        .range-slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #b00000;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Calculator;
