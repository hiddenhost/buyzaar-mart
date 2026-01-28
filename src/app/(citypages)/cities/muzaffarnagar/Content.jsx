import React from "react";
import Link from "next/link";
import { citiesData } from "@/data/citiesData";

export default function MuzaffarnagarContent() {
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
            <span className="text-green-600 font-semibold text-lg">Muzaffarnagar</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-serif text-center mb-4">
            Buyzaar Mart Franchise Opportunity in Muzaffarnagar
          </h1>

          <p className="text-gray-700 text-center text-lg mb-6 max-w-7xl mx-auto leading-relaxed">
            Establish a profitable supermarket franchise in Muzaffarnagar, one of western UP's major commercial hubs.
            Partner with The Buyzaar Mart and leverage our proven business model for guaranteed success.
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

      {/* Market Opportunity Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-serif font-semibold mb-4">
            Why Muzaffarnagar is Perfect for a Buyzaar Mart Franchise
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Muzaffarnagar is a thriving commercial center with a population exceeding 4 lakhs and rapidly growing
            suburbs. The city's strong economy, driven by sugar mills, paper industries, and agricultural trade,
            has created a prosperous middle class with high purchasing power. The organized retail sector is still
            underpenetrated, making this the perfect time to establish a Buyzaar Mart franchise and capture
            significant market share.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            High-Growth Market with Strong Consumer Base
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Muzaffarnagar's strategic location on the Delhi-Dehradun highway and its role as a district headquarters
            attract shoppers from surrounding areas. The city's growing residential colonies, increased nuclear families,
            and changing lifestyle preferences have created strong demand for modern retail outlets. A Buyzaar Mart
            franchise here will serve not just the city but also customers from nearby towns, ensuring high footfall
            and consistent revenue.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Complete Franchise Support System
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Buyzaar Mart provides end-to-end franchise support including site selection assistance, store setup
            and design, comprehensive training programs, inventory management systems, POS and billing software,
            marketing and advertising support, and continuous operational guidance. Our field support team regularly
            visits franchise locations to ensure smooth operations and profitability. You're never alone in this
            business journey.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
  Attractive Investment with Scalable Return Potential
</h3>

<p className="text-gray-700 leading-relaxed mb-6">
  Buyzaar Mart offers a structured franchise investment model aligned with store size and
  operational capacity. The <strong>Mini Mart format (600–1000 sq.ft)</strong> requires an
  investment of <strong>₹14,71,080</strong>, making it a practical entry point for residential
  and neighborhood-focused locations.
  <br /><br />
  The <strong>Super Mart format (1001–3000 sq.ft)</strong> involves an investment of
  <strong>₹25,07,232</strong> and is well-suited for high-footfall areas, offering a wider
  assortment of daily essentials and increased sales potential.
  <br /><br />
  For large-scale retail operations, the <strong>Hyper Mart format (3001–8000 sq.ft)</strong>
  requires an investment of <strong>₹75,17,645</strong>. This format is designed for commercial
  hubs and high-density zones, supporting bulk inventory, multiple product categories, and
  long-term business scalability.
</p>


          <h3 className="text-xl font-serif font-semibold mb-3">
            Established Supply Chain and Competitive Pricing
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Benefit from our established relationships with 500+ suppliers and manufacturers. Our centralized
            procurement ensures you get the best wholesale rates, allowing competitive retail pricing while
            maintaining healthy margins. Automated inventory replenishment, just-in-time delivery, and zero stock-out
            policies keep your shelves full and customers happy.
          </p>

        </div>
      </div>

      {/* Franchise Benefits Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-serif font-medium text-center mb-6">
            What You Get as a Buyzaar Mart Franchisee
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              ["Proven Brand", "Established brand with growing market recognition"],
              ["Site Selection", "Expert help in choosing the best location"],
              ["Store Setup", "Complete store design and fixture installation"],
              ["Training Program", "10-day intensive training for operations"],
              ["Marketing Support", "Grand opening campaigns and ongoing promotions"],
              ["Supply Chain", "Reliable inventory at competitive wholesale prices"],
              ["POS System", "Modern billing and inventory management software"],
              ["Territory Rights", "Protected territory - no internal competition"],
              ["Ongoing Support", "Regular visits and business growth consultation"],
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

      

      {/* Other Cities Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-serif font-medium text-center mb-3">
            Franchise Opportunities in Other Cities
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Explore franchise opportunities in nearby cities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {citiesData.map((city, index) => (
              <Link
                key={index}
                href={`/cities/${city.slug}`}
                className="group"
              >
                <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-green-50 transition-colors">
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