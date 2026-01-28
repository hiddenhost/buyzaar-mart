import React from "react";
import Link from "next/link";
import { citiesData } from "@/data/citiesData";

export default function SaharanpurContent() {
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
            <span className="text-green-600 font-semibold text-lg">Saharanpur</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-serif text-center mb-4">
            Buyzaar Mart Franchise Opportunity in Saharanpur
          </h1>

          <p className="text-gray-700 text-center text-lg mb-6 max-w-7xl mx-auto leading-relaxed">
            Launch a premium supermarket franchise in Saharanpur, the wood carving capital with rich heritage and
            strong commercial activity. Join The Buyzaar Mart's expanding network and build a thriving retail business.
          </p>

          
        </div>
      </div>

      {/* Market Opportunity Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-serif font-semibold mb-4">
            Why Saharanpur is a Prime Location for Buyzaar Mart Franchise
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Saharanpur, with a population of over 7 lakhs, is one of the oldest and most significant cities in
            Uttar Pradesh. Known for its wood carving industry and paper mills, the city has a robust economy with
            high purchasing power. The city's proximity to both Dehradun and Delhi makes it a strategic commercial
            hub. Despite its economic strength, organized retail penetration remains low, presenting an exceptional
            opportunity for entrepreneurs to establish a Buyzaar Mart franchise and dominate the local market.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Untapped Market with High Consumer Demand
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Saharanpur's diverse economy attracts professionals, business families, and affluent residents who prefer
            quality shopping experiences. The city's growing residential sectors, educational institutions, and
            commercial zones create consistent demand for modern retail outlets. Traditional kirana stores dominate
            currently, leaving massive scope for organized retail. A Buyzaar Mart franchise here will attract not
            only local residents but also customers from neighboring areas like Deoband, Nakur, and Rampur, ensuring
            strong daily footfall and revenue.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Comprehensive Franchise Package
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Buyzaar Mart offers a complete turnkey franchise solution. From site evaluation and lease negotiation
            to store design, fixture installation, inventory planning, and staff recruitment support – we handle
            everything. Our franchise package includes 15-day comprehensive training (both classroom and on-site),
            proprietary POS and inventory management software, opening day marketing campaigns, ongoing promotional
            support, and dedicated relationship manager for continuous guidance. You focus on running the business
            while we provide the infrastructure and expertise.
          </p>
          <h3 className="text-xl font-serif font-semibold mb-3">
  Flexible Investment with Scalable Growth Potential
</h3>

<p className="text-gray-700 leading-relaxed mb-6">
  Buyzaar Mart provides flexible franchise investment options designed to match different
  market sizes and expansion goals. The <strong>Mini Mart format (600–1000 sq.ft)</strong>
  starts with an investment of <strong>₹14,71,080</strong>, making it suitable for compact
  residential locations and emerging neighborhoods. The
  <strong> Super Mart format (1001–3000 sq.ft)</strong> requires an investment of
  <strong>₹25,07,232</strong> and is ideal for high-traffic zones with consistent daily demand.
  The <strong>Hyper Mart format (3001–8000 sq.ft)</strong>, with an investment of
  <strong>₹75,17,645</strong>, is designed for large-format retail environments and
  long-term scalability.
  <br /><br />
  These formats enable franchise partners to benefit from diversified product categories,
  strong supplier partnerships, private-label opportunities, and efficient inventory
  management systems. While actual returns depend on location, operations, and market
  conditions, the structured franchise model supports sustainable revenue growth and
  progressive profitability over time.
</p>


          <h3 className="text-xl font-serif font-semibold mb-3">
            Technology-Driven Operations
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our advanced technology platform provides real-time inventory tracking, automated reorder points, sales
            analytics, customer purchase patterns, and financial reporting. The cloud-based system accessible from
            any device helps you monitor business performance, reduce wastage, optimize stock levels, and make
            data-driven decisions. Integrated payment solutions support all digital payment methods, attracting
            tech-savvy customers.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Brand Power and Marketing Support
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Leverage our growing brand recognition through national and regional marketing campaigns. We provide
            professionally designed marketing materials, social media content, local newspaper ads, radio spots,
            and digital marketing support. Grand opening campaigns typically include hoardings, pamphlet distribution,
            inaugural offers, and local influencer partnerships to create buzz and drive initial traffic. Ongoing
            promotional calendars aligned with festivals and seasons keep customer interest high throughout the year.
          </p>

        </div>
      </div>

      {/* Franchise Benefits Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-serif font-medium text-center mb-6">
            Complete Franchise Support System
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              ["Established Brand", "Join a trusted name with proven market acceptance"],
              ["Site Selection", "Expert assistance in location scouting and evaluation"],
              ["Store Design", "Professional interior design and fixture setup"],
              ["Training Program", "15-day intensive training for you and your team"],
              ["Technology Platform", "Advanced POS and inventory management system"],
              ["Supply Chain", "Reliable sourcing at competitive wholesale rates"],
              ["Marketing Support", "Grand opening and ongoing promotional campaigns"],
              ["Territory Protection", "Exclusive rights - no competing franchise nearby"],
              ["Business Guidance", "Dedicated relationship manager and field support"],
              ["Product Mix", "Carefully curated 3000+ SKUs across categories"],
              ["Payment Solutions", "Integrated digital payment gateways"],
              ["Customer Loyalty", "Ready-made loyalty program software"],
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