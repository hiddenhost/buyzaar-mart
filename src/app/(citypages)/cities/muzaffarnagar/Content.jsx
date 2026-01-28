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
            Muzaffarnagar – Your Trusted Supermarket & Grocery Store
          </h1>

          <p className="text-gray-700 text-center text-lg mb-0 max-w-7xl mx-auto leading-relaxed">
            Muzaffarnagar is a bustling city with a vibrant community that values quality, convenience, and affordability.
            The Buyzaar Mart is proud to serve Muzaffarnagar residents with a comprehensive selection of fresh groceries,
            daily essentials, packaged foods, personal care products, and household items. We are committed to providing
            a modern shopping experience that combines quality products, competitive pricing, and exceptional customer service.
          </p>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-serif font-semibold mb-4">
            Premier Supermarket in Muzaffarnagar for All Your Shopping Needs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As one of the major cities in western Uttar Pradesh, Muzaffarnagar has a growing demand for organized
            retail and modern shopping experiences. The Buyzaar Mart meets this demand by offering a clean, well-stocked
            supermarket where families can find everything they need in one convenient location. From fresh produce to
            household essentials, we ensure quality and freshness in every product we offer.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Comprehensive Product Selection for Every Household
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our Muzaffarnagar store features an extensive range of products including fresh fruits and vegetables,
            dairy products, premium groceries, snacks and beverages, cooking essentials, personal care items, baby
            products, and household cleaning supplies. We partner with leading brands and trusted suppliers to ensure
            that our customers receive only the best quality products every time they shop with us.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Competitive Pricing with Regular Offers and Discounts
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            At The Buyzaar Mart Muzaffarnagar, we understand the importance of value for money. Our pricing strategy
            is designed to offer the best deals without compromising on quality. We regularly feature special offers,
            seasonal discounts, and combo deals that help families save money on their monthly shopping expenses. Our
            goal is to make quality products accessible and affordable for everyone in Muzaffarnagar.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Modern Shopping Experience with Customer Convenience
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We have designed our store layout to ensure a hassle-free shopping experience. Wide aisles, clearly marked
            sections, organized shelves, and a clean environment make it easy for customers to find what they need quickly.
            Our friendly and knowledgeable staff are always available to assist you with product information, recommendations,
            and any queries you may have.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Fresh Produce and Quality Assurance
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Quality is our top priority at The Buyzaar Mart. We maintain strict quality control measures to ensure that
            all products, especially fresh produce and dairy items, meet the highest standards of freshness and hygiene.
            Our team regularly checks inventory, maintains proper storage conditions, and ensures that expired or
            substandard products never reach our shelves. This commitment to quality has made us a trusted name among
            Muzaffarnagar families.
          </p>

        </div>
      </div>

      {/* Additional Why Choose Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-serif font-medium text-center mb-6">
            Why Muzaffarnagar Residents Trust The Buyzaar Mart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              ["Extensive product variety", "Everything from groceries to household essentials"],
              ["Best prices in town", "Competitive rates with regular discounts and offers"],
              ["Fresh & quality products", "Strict quality checks and trusted brands"],
              ["Hygienic environment", "Clean, well-maintained, and organized store"],
              ["Convenient location", "Easy access for Muzaffarnagar residents"],
              ["Expert staff", "Friendly, helpful, and knowledgeable team members"],
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

      {/* Related Pages Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-serif font-medium text-center mb-3">
            Explore Other Cities
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Discover our supermarket presence in nearby cities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {citiesData.map((city, index) => (
              <Link
                key={index}
                href={`/cities/${city.slug}`}
                className="group"
              >
                <div className="flex items-start gap-3">
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
                      {city.name}
                    </h3>
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