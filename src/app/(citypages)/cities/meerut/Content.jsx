import React from "react";
import Link from "next/link";
import { citiesData } from "@/data/citiesData";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

export default function MeerutContent() {
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
            <span className="text-green-600 font-semibold text-lg">Meerut</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-serif text-center mb-4">
            Buyzaar Mart Franchise Opportunity in Meerut
          </h1>

          <p className="text-gray-700 text-center text-lg mb-6 max-w-7xl mx-auto leading-relaxed">
            Capitalize on Meerut's booming retail market with a Buyzaar Mart supermarket franchise. Join India's 
            fastest-growing retail chain in one of UP's largest and most prosperous cities.
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
                Why Meerut is a Goldmine for Supermarket Franchise Business
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Meerut, with over 15 lakh population, is the second-largest city in western Uttar Pradesh and a major
                commercial hub in the NCR region. The city's strategic location just 70 km from Delhi, excellent
                connectivity via expressways and metro, and strong industrial base (sports goods, scissors, engineering)
                have created a prosperous middle and upper-middle class with high disposable income. The city is
                witnessing rapid urbanization with multiple new residential projects, shopping complexes, and lifestyle
                changes that favor organized retail. This makes Meerut an ideal location for a high-revenue Buyzaar Mart
                franchise.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Massive Market Size with Growing Organized Retail Demand
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Meerut's retail market is estimated at over ₹5000 crores annually, with organized retail penetration
                still below 15%. The city has numerous residential colonies like Shastri Nagar, Jagriti Vihar, Ganganagar,
                Pallavpuram, and new developing areas that are home to educated, affluent families seeking quality shopping
                experiences. Modern consumers prefer one-stop shopping destinations offering variety, quality assurance,
                and convenience. A well-located Buyzaar Mart franchise can easily capture 500-800 daily customers,
                generating monthly revenues of ₹15-25 lakhs with healthy profit margins.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                End-to-End Franchise Support for Guaranteed Success
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Buyzaar Mart franchise model is designed for both experienced retailers and first-time entrepreneurs.
                We provide comprehensive support including detailed market analysis and site selection, lease negotiation
                assistance, complete store design and layout planning, fixture procurement and installation, initial
                inventory planning and stocking, 20-day intensive training program covering operations, billing, inventory
                management, customer service, and vendor management. Post-launch, you receive continuous field support,
                mystery shopping audits, performance analytics, and business optimization recommendations.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Competitive Investment with Multiple Revenue Streams
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Buyzaar Mart franchise models are designed to offer competitive entry investment with
                multiple income opportunities. The <strong>Mini Mart format (600–1000 sq.ft)</strong>
                requires an investment of <strong>₹14,71,080</strong>, making it a cost-effective option
                for residential and neighborhood markets. The <strong>Super Mart format (1001–3000 sq.ft)</strong>
                involves an investment of <strong>₹25,07,232</strong>, ideal for high-footfall locations and
                mixed-use commercial areas. For large-scale retail operations, the
                <strong> Hyper Mart format (3001–8000 sq.ft)</strong> requires an investment of
                <strong>₹75,17,645</strong>, offering higher volume sales and scalability.
                <br /><br />
                In addition to regular retail margins, franchise partners benefit from diversified revenue
                streams such as private label products with higher profit margins, supplier-backed promotional
                incentives, digital payment commissions, branded in-store display rentals, and loyalty-driven
                customer retention programs. With these combined revenue channels, franchisees can achieve
                healthy overall profitability and a structured path toward operational break-even.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Advanced Technology and Supply Chain Infrastructure
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our state-of-the-art technology platform includes cloud-based POS with real-time synchronization,
                automated inventory management with AI-based demand forecasting, integrated accounting and financial
                reporting, customer relationship management with purchase history, employee attendance and payroll
                management, and centralized pricing and promotional campaign management. Our regional distribution center
                ensures daily deliveries of fresh produce and dairy, weekly replenishment of grocery and FMCG, and
                just-in-time delivery to minimize working capital requirements.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Brand Marketing and Local Market Activation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Benefit from our comprehensive marketing support including national brand campaigns on TV and digital
                platforms, regional print and outdoor advertising in Meerut, professional social media management and
                local SEO, grand opening campaigns with local celebrity presence, ongoing promotional calendars tied to
                festivals and events, in-store merchandising and visual display support, and collaboration with local
                RWAs and housing societies. We also provide ready-to-use marketing collaterals, pamphlets, and promotional
                materials customized for Meerut market.
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

      {/* Other Cities Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-serif font-medium text-center mb-3">
            Franchise Opportunities in Other Cities
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Explore franchise opportunities across Uttar Pradesh and NCR
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