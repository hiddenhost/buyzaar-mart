import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-0 order-1 lg:order-1">
          <div className="space-y-4 text-gray-700 leading-relaxed max-w-4xl">
            {/* Meta Information */}
            <div className="bg-gray-100 p-4 rounded-lg text-sm mb-8">
              <p><strong></strong></p>
              <p><strong></strong></p>
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-8">
              The Buyzaar Mart – Best Grocery Store Franchise Opportunity in Gangoh
            </h1>
            
            <p>Your Gateway to Smart Retail in Gangoh, Uttar Pradesh</p>

            <p>
              Are you searching for a reliable, profitable <strong>grocery store franchise in Gangoh</strong>? The Buyzaar Mart is transforming how local communities shop — bringing the power of organized retail to every neighbourhood in Uttar Pradesh. Whether you're an entrepreneur looking to invest or a local business owner ready to scale, The Buyzaar Mart franchise model is built for you.
            </p>

            <p>
              With a choice between our flagship Hypermart and the compact Minimart format, we give you the freedom to start at your own scale — and grow at your own pace.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Gangoh Needs The Buyzaar Mart
            </h2>
            <p>
              Gangoh, a growing town in Saharanpur district of Uttar Pradesh, is home to a thriving local economy and a rapidly expanding middle-class consumer base. Yet organized grocery retail in Gangoh remains underdeveloped — meaning there's a massive opportunity waiting for smart investors.
            </p>
            <p>
              The Buyzaar Mart fills this gap with a trusted brand, proven supply chain, and a product mix that genuinely serves local shoppers. From daily essentials and fresh produce to household staples and packaged goods — everything under one roof, at honest prices.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Two Franchise Models: Hypermart & Minimart
            </h2>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              The Buyzaar Hypermart – Big Store, Bigger Returns
            </h3>
            <p>
              The Buyzaar Hypermart is our full-format grocery and lifestyle store. Ideal for larger spaces and high-footfall locations, the Hypermart format brings a premium retail experience to towns like Gangoh.
            </p>
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Store size: 3000–8,000 sq. ft.</li>
              <li>5,000+ SKUs across grocery, dairy, personal care, household, and lifestyle</li>
              <li>POS billing system, inventory management, and loyalty programs</li>
              <li>Air-conditioned shopping environment</li>
              <li>Staff training and onboarding support from Day 1</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">Hypermart Investment Breakdown</h4>
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Item</th>
                  <th className="border border-gray-300 px-4 py-2 text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">Stock</td><td className="border border-gray-300 px-4 py-2 text-right">96,00,000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Interior</td><td className="border border-gray-300 px-4 py-2 text-right">88,00,000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Software Fee</td><td className="border border-gray-300 px-4 py-2 text-right">2,00,000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Franchise Fee (incl. 18% GST)</td><td className="border border-gray-300 px-4 py-2 text-right">2,95,000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Security Deposit</td><td className="border border-gray-300 px-4 py-2 text-right">12,58,407</td></tr>
                <tr className="bg-gray-50 font-bold">
                  <td className="border border-gray-300 px-4 py-2">Total Investment</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">2,01,53,407</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-8">
              The Buyzaar Minimart – Smart Retail, Minimal Investment
            </h3>
            <p>
              The Buyzaar Minimart is our neighbourhood-friendly, compact retail format — designed to serve residential areas, colony markets, and semi-urban pockets where large stores aren't feasible.
            </p>
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Store size: 600–1,000 sq. ft.</li>
              <li>800–1,500 carefully curated SKUs</li>
              <li>Low initial investment with faster break-even</li>
              <li>Digital billing and stock management system</li>
              <li>Mobile app integration for local delivery</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">Minimart Investment Breakdown</h4>
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Item</th>
                  <th className="border border-gray-300 px-4 py-2 text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">Stock</td><td className="border border-gray-300 px-4 py-2 text-right">9,00,000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Interior</td><td className="border border-gray-300 px-4 py-2 text-right">9,00,000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Software Fee</td><td className="border border-gray-300 px-4 py-2 text-right">50,000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Franchise Fee (incl. 18% GST)</td><td className="border border-gray-300 px-4 py-2 text-right">2,95,000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Security Deposit</td><td className="border border-gray-300 px-4 py-2 text-right">1,42,857</td></tr>
                <tr className="bg-gray-50 font-bold">
                  <td className="border border-gray-300 px-4 py-2">Total Investment</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">22,87,857</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8">
              The Buyzaar Mart Module: Analyzed for Success
            </h2>
            <p>
              What truly sets The Buyzaar Mart apart is our proprietary franchise module — a data-driven, operations-first system that removes guesswork from retail management.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Location Analysis:</strong> Thorough demographic and footfall analysis</li>
              <li><strong>Supply Chain:</strong> Direct access to centralized supply network</li>
              <li><strong>Digital Operations:</strong> Real-time stock alerts, sales reports</li>
              <li><strong>Marketing Toolkit:</strong> WhatsApp campaigns, Google Business setup</li>
              <li><strong>Ongoing Support:</strong> Dedicated franchise relationship manager</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8">
              Benefits of Choosing The Buyzaar Mart Franchise
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Established brand identity – instant customer trust</li>
              <li>High-demand category – recession-proof grocery retail</li>
              <li>Scalable business model – start small, grow big</li>
              <li>Low operational complexity – systems handle the hard parts</li>
              <li>Community connection – designed to feel local</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8">
              Who Should Apply?
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Local entrepreneurs with commercial space in Gangoh</li>
              <li>Retired professionals seeking stable income</li>
              <li>Business families entering organized retail</li>
              <li>Existing kirana owners ready to upgrade</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-gray-900">
                  What is the minimum investment required?
                </h3>
                <p className="mt-2">Minimart: ₹22.88 lakhs | Hypermart: ₹2.02 crores</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Do I need prior retail experience?
                </h3>
                <p className="mt-2">No. Complete training provided for beginners.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  How long to set up a store in Gangoh?
                </h3>
                <p className="mt-2">Minimart: 30-45 days | Hypermart: 60-90 days</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  What support does The Buyzaar Mart provide?
                </h3>
                <p className="mt-2">Complete marketing toolkit, training, supply chain, and ongoing operations support.</p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Ready to Open Your Buyzaar Mart in Gangoh?
              </h2>
              <p className="text-gray-800 mb-4">
                Spots are limited. Secure your territory now!
              </p>
              <p className="text-gray-800 mb-4">
                📞 <strong>Call:</strong> +91-9217991727, 
              </p>
              <p className="text-gray-800">
                ✉️ <strong>Email:</strong> 
                <a href="mailto:info@thebuyzaarmart.com" className="text-green-600 hover:underline font-semibold ml-1">
                  info@thebuyzaarmart.com
                </a>
              </p>
            </div>
          </div>
          <CityInternalLinks city="gangoh" currentSlug="/cities/gangoh/best-grocery-franchise-in-gangoh"/>
        </div>

        {/* Form Section */}
        <div className="w-[400px] lg:w-[500px] p-8 order-2 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <FranchiseEnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;