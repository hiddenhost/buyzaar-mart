import React from "react";
import Link from "next/link";
import { citiesData } from "@/data/citiesData";

export default function GangohContent() {
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
            <span className="text-green-600 font-semibold text-lg">Gangoh</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-serif text-center mb-4">
            Buyzaar Mart Franchise Opportunity in Gangoh
          </h1>

          <p className="text-gray-700 text-center text-lg mb-6 max-w-7xl mx-auto leading-relaxed">
            Launch your own supermarket franchise in Gangoh with The Buyzaar Mart. Join India's fastest-growing
            retail chain and tap into the increasing demand for organized retail in this developing town.
          </p>

          <div className="flex justify-center">
            <Link
              href="/franchise-inquiry"
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
            Why Open a Buyzaar Mart Franchise in Gangoh?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Gangoh is a growing town with increasing urbanization and rising consumer demand for organized retail.
            The local market currently lacks modern supermarket chains, creating a significant opportunity for
            entrepreneurs to establish a profitable retail business. With The Buyzaar Mart franchise model, you can
            capitalize on this untapped market potential with minimal risk and maximum support.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Growing Market Potential in Gangoh
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Gangoh's growing population, increasing disposable income, and shift towards organized retail present
            an ideal environment for a supermarket franchise. Families are moving away from traditional kirana stores
            and seeking modern shopping experiences with quality products, variety, and convenience. As a Buyzaar Mart
            franchisee in Gangoh, you'll be the first to serve this evolving market demand.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Proven Business Model with Complete Support
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Buyzaar Mart offers a turnkey franchise solution with comprehensive training, inventory management
            support, marketing assistance, and operational guidance. Our established supply chain ensures competitive
            pricing, while our brand recognition attracts customers from day one. We handle the complexities so you
            can focus on growing your business.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
  Cost-Effective Entry with Long-Term Growth Potential
</h3>

<p className="text-gray-700 leading-relaxed">
  The Buyzaar Mart franchise model is structured to offer a practical investment entry
  aligned with store scale and local demand. Investment begins with the
  <strong> Mini Mart format (600–1000 sq.ft)</strong> at
  <strong> ₹14,71,080</strong>, followed by the
  <strong> Super Mart format (1001–3000 sq.ft)</strong> at
  <strong> ₹25,07,232</strong>. For entrepreneurs planning large-format retail operations,
  the <strong>Hyper Mart format (3001–8000 sq.ft)</strong> requires an investment of
  <strong> ₹75,17,645</strong>.
  <br /><br />
  Built around high-demand daily essentials, repeat customer behavior, and efficient
  supply-chain support, the model is designed to support consistent revenue generation
  and sustainable business growth over time.
</p>


        </div>
      </div>

      {/* Franchise Benefits Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-serif font-medium text-center mb-6">
            Franchise Benefits in Gangoh
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              ["Established Brand", "Leverage our recognized brand name and reputation"],
              ["Complete Training", "Comprehensive training for you and your staff"],
              ["Marketing Support", "Brand marketing and local promotional assistance"],
              ["Supply Chain", "Reliable inventory and competitive wholesale pricing"],
              ["Territory Rights", "Protected territory with no competition from us"],
              ["Ongoing Support", "Continuous operational and business guidance"],
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

          <div className="text-center mt-8">
            <Link
              href="/franchise"
              className="inline-block bg-green-600 text-white px-10 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold text-lg shadow-lg"
            >
              Get Franchise Details
            </Link>
          </div>
        </div>
      </div>

      {/* Investment Details Section */}
      

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
                    <p className="text-sm text-gray-500">Explore opportunity →</p>
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