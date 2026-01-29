import React from "react";
import Link from "next/link";
import { citiesData } from "@/data/citiesData";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

export default function NoidaContent() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-4 mt-30">
            <svg 
              className="w-8 h-8 text-green-600 mr-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            <span className="text-green-600 font-semibold text-lg">Noida</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-serif text-center mb-4">
            Premium Buyzaar Mart Franchise Opportunity in Noida
          </h1>

          <p className="text-gray-700 text-center text-lg mb-6 max-w-7xl mx-auto leading-relaxed">
            Launch a high-revenue supermarket franchise in Noida, NCR's most affluent and fastest-growing city. 
            Partner with Buyzaar Mart and tap into the premium retail market with exceptional ROI potential.
          </p>

          <div className="flex justify-center">
            <Link
              href="/franchise"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Apply for Franchise
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar Form */}
      <div className="max-w-9xl mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content - Order 1 on all screens */}
          <div className="flex-1 order-1 lg:order-1">
            <div className="prose prose-lg max-w-none">

              <h2 className="text-2xl font-serif font-semibold mb-4">
                Why Noida is India's Most Lucrative Market for Supermarket Franchises
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Noida stands as one of India's most prosperous cities with a population exceeding 8 lakhs and per capita
                income among the highest in the country. Home to IT professionals, corporate executives, and business
                families, Noida's demographic profile is characterized by high purchasing power, modern lifestyle choices,
                and preference for quality retail experiences. With over 150 residential societies, numerous commercial
                complexes, and continuous infrastructure development including metro expansion and Noida International
                Airport, the city offers unparalleled growth potential. The organized retail market in Noida is estimated
                at ₹8000+ crores annually and growing at 20%+ CAGR, making it the perfect location for a premium Buyzaar
                Mart franchise.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Premium Consumer Base with High Spending Power
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Noida's resident profile includes IT professionals earning ₹8-30 lakhs annually, corporate executives in
                multinational companies, entrepreneurs and business owners, and expatriate families. This demographic
                seeks premium products, imported goods, organic options, and gourmet foods - categories with significantly
                higher margins. Average basket size in Noida supermarkets ranges from ₹800-1500, substantially higher than
                tier-2 cities. Sectors like 50, 78, 62, 137, 168, and Greater Noida West have thousands of high-rise
                apartments where residents prefer organized retail for convenience and quality. A well-positioned Buyzaar
                Mart franchise can achieve daily footfall of 800-1200 customers with monthly revenues exceeding ₹30-50 lakhs.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Comprehensive Franchise Ecosystem for Success
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Buyzaar Mart franchise package for Noida includes premium market analysis with demographic mapping,
                site selection support with footfall and visibility assessment, architectural design optimized for Noida's
                upmarket consumers, complete fixture and refrigeration setup, curated product assortment tailored for
                premium market, 25-day executive training program covering advanced retail management, dedicated account
                manager for Noida region, mystery shopping and performance audits, and access to our supplier network of
                800+ brands including international labels. Our technology platform provides real-time business intelligence,
                automated ordering, customer analytics, and financial dashboards accessible from mobile devices.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Investment Options Tailored for Noida Market
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Buyzaar Mart offers flexible franchise investment options based on store size and operational scale.
                The <strong>Mini Mart format (600–1000 sq.ft)</strong> requires an investment of
                <strong> ₹14,71,080</strong>, making it ideal for residential areas and neighborhood markets,
                featuring essential FMCG products, daily groceries, and standard shelving infrastructure.
                <br /><br />
                The <strong>Super Mart format (1001–3000 sq.ft)</strong> involves an investment of
                <strong> ₹25,07,232</strong>, suitable for high-footfall localities and mixed-use areas.
                This format includes an expanded product range with fresh produce, packaged foods,
                household essentials, and enhanced billing and inventory systems.
                <br /><br />
                For large-scale retail operations, the <strong>Hyper Mart format (3001–8000 sq.ft)</strong>
                requires an investment of <strong> ₹75,17,645</strong>. Designed for commercial hubs
                and high-density zones, this format offers extensive inventory capacity, wide product categories,
                bulk purchasing options, advanced store layout, and higher revenue potential.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Revenue Maximization Through Multiple Channels
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Noida franchises benefit from diversified revenue streams beyond regular retail sales. These include
                premium private label products with 30-40% margins, corporate tie-ups for pantry supplies and bulk orders,
                home delivery services with delivery charges, subscription boxes for weekly/monthly groceries, brand
                display and promotion fees, loyalty program partnerships with credit card companies, event sponsorships
                in residential societies, and festive gift hamper sales during Diwali, New Year, Holi. Many successful
                franchisees also leverage B2B sales to nearby restaurants, cafes, and offices, adding 15-25% to revenue.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Technology-Driven Operations and Customer Experience
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our proprietary retail management platform offers omnichannel capabilities with mobile app integration,
                AI-powered inventory optimization to minimize dead stock, dynamic pricing engine for competitive advantage,
                CRM with personalized promotions based on purchase history, automated vendor ordering and reconciliation,
                real-time P&L tracking and financial analytics, employee scheduling and productivity monitoring, and
                integrated e-wallet and UPI payment systems. The platform also supports online ordering with home delivery,
                crucial for Noida's tech-savvy consumers who increasingly prefer digital convenience.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Marketing and Brand Building in Noida
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Noida franchise marketing includes strategic outdoor advertising on metro stations and main roads,
                digital marketing with geo-targeted social media campaigns, influencer partnerships with Noida-based
                lifestyle bloggers, society tie-ups with exclusive resident offers, corporate partnerships for employee
                discount programs, event sponsorships at Noida Marathon, exhibitions, and cultural festivals, PR
                campaigns in local newspapers and FM radio, and collaboration with food delivery platforms. We provide
                monthly marketing budget support and creative assets designed specifically for Noida's urban, educated
                demographic.
              </p>

            </div>
          </div>

          {/* Form Section - Smart positioning with CSS order */}
          <div className="w-full lg:w-[400px] xl:w-[500px] p-8 order-2 lg:order-2">
            <div className="lg:sticky lg:top-28">
              <FranchiseEnquiryForm />
            </div>
          </div>

        </div>
      </div>

      {/* Franchise Benefits Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-serif font-medium text-center mb-6">
            Complete Franchise Support Package
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              ["Premium Brand", "Established reputation in organized retail sector"],
              ["Market Research", "Detailed demographic and competition analysis"],
              ["Site Assistance", "Expert guidance on high-potential locations"],
              ["Store Design", "Premium interior tailored for upmarket consumers"],
              ["Product Curation", "Assortment optimized for Noida demographics"],
              ["Executive Training", "25-day advanced retail management program"],
              ["Technology Platform", "Cloud-based POS with business intelligence"],
              ["Supply Chain", "Access to 800+ suppliers including imports"],
              ["Marketing Budget", "Co-funded campaigns and promotional support"],
              ["Territory Rights", "Protected zone with exclusivity agreement"],
              ["Financing Support", "Bank loan facilitation up to 70% funding"],
              ["Ongoing Mentorship", "Regular business reviews and optimization"],
            ].map(([title, desc], index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✔</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prime Locations in Noida */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-serif font-medium text-center mb-4">
            Prime Franchise Locations in Noida
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            High-potential sectors and areas for supermarket franchise
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Sector 50, 52, 62",
              "Sector 76, 78, 79",
              "Sector 137, 168",
              "Greater Noida West",
              "Sector 15, 18, 22",
              "Noida Extension"
            ].map((location, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                <h3 className="font-semibold text-gray-900">{location}</h3>
                <p className="text-sm text-gray-600 mt-1">High footfall potential</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Cities Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-serif font-medium text-center mb-3">
            Franchise Opportunities in Other Cities
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Explore franchise opportunities across NCR and Uttar Pradesh
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {citiesData.map((city, index) => (
              <Link
                key={index}
                href={`/cities/${city.slug}`}
                className="group"
              >
                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-white transition-colors">
                  <svg
                    className="w-5 h-5 text-green-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 21c4.418-4.418 7-7.582 7-11a7 7 0 10-14 0c0 3.418 2.582 6.582 7 11z"
                    />
                  </svg>

                  <div>
                    <h3 className="text-lg font-serif font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {city.name} Franchise
                    </h3>
                    <p className="text-sm text-gray-500">View details →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}