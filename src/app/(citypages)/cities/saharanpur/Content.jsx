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
            Saharanpur – Premium Supermarket & Grocery Store
          </h1>

          <p className="text-gray-700 text-center text-lg mb-0 max-w-7xl mx-auto leading-relaxed">
            Saharanpur, known for its rich cultural heritage and thriving commercial activity, deserves a shopping
            experience that matches its stature. The Buyzaar Mart brings world-class retail convenience to Saharanpur
            residents with an extensive selection of fresh groceries, premium products, daily essentials, personal care
            items, and household necessities. We combine traditional values of trust and quality with modern retail
            practices to serve the diverse needs of Saharanpur's growing community.
          </p>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-serif font-semibold mb-4">
            Saharanpur's Most Trusted Supermarket for Quality and Value
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As one of the prominent cities in Uttar Pradesh, Saharanpur has witnessed rapid urban development and
            changing consumer preferences. Modern families seek organized retail spaces where quality, variety, and
            affordability come together seamlessly. The Buyzaar Mart addresses this need by offering a state-of-the-art
            supermarket experience with carefully curated products, maintained hygiene standards, and customer-centric
            service that has become the benchmark for retail excellence in Saharanpur.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Extensive Product Range Across Multiple Categories
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our Saharanpur supermarket stocks thousands of products across diverse categories to meet every household
            need. From farm-fresh fruits and vegetables sourced from local and regional suppliers to imported gourmet
            foods, we offer an unmatched variety. Our shelves feature staple groceries, premium rice and pulses, cooking
            oils, spices, ready-to-cook items, packaged snacks, beverages, dairy products, frozen foods, bakery items,
            personal care essentials, baby products, health supplements, and a comprehensive range of household cleaning
            and maintenance supplies.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Unbeatable Prices with Smart Shopping Benefits
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Buyzaar Mart Saharanpur is committed to providing maximum value to our customers. Our dynamic pricing
            strategy ensures competitive rates on all products while maintaining superior quality standards. We run
            weekly specials, festival offers, bulk purchase discounts, and exclusive member benefits that help families
            optimize their shopping budgets. Our transparent pricing policy means no hidden charges, and what you see
            is what you pay. Special combo deals and seasonal promotions are regularly updated to provide additional
            savings opportunities.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Superior Shopping Environment and Customer Experience
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We have invested significantly in creating a shopping environment that prioritizes customer comfort and
            convenience. Our spacious store layout features wide aisles for easy navigation, climate-controlled
            interiors for year-round comfort, well-lit sections for better product visibility, dedicated zones for
            different product categories, quick-billing counters to minimize waiting time, ample parking space, and
            wheelchair accessibility. Our trained staff members are always ready to assist with product selection,
            provide recommendations, and ensure a pleasant shopping experience from entry to checkout.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Commitment to Freshness and Quality Standards
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Quality assurance is non-negotiable at The Buyzaar Mart. We implement rigorous quality control protocols
            throughout our supply chain. Our fresh produce section receives daily deliveries to ensure optimal freshness.
            Perishable items are stored in temperature-controlled environments, and we maintain strict FIFO (First In,
            First Out) inventory practices. All products undergo quality checks before being placed on shelves, and we
            have a zero-tolerance policy for expired or substandard items. This dedication to quality has earned us the
            trust and loyalty of thousands of Saharanpur families.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Supporting Local Community and Sustainable Practices
          </h3>
          <p className="text-gray-700 leading-relaxed">
            As a responsible retail establishment, we actively support local farmers and suppliers by sourcing regional
            products wherever possible. This not only ensures freshness but also contributes to the local economy. We
            are committed to sustainable practices including minimal plastic usage, encouraging reusable bags, proper
            waste segregation, and energy-efficient store operations. Our goal is to be not just a supermarket, but a
            valued community partner in Saharanpur's growth and development.
          </p>

        </div>
      </div>

      {/* Additional Why Choose Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-serif font-medium text-center mb-6">
            Why Saharanpur Families Choose The Buyzaar Mart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              ["Unmatched product variety", "Thousands of products across all categories"],
              ["Competitive pricing", "Best prices with regular offers and discounts"],
              ["Premium quality assurance", "Strict quality checks and fresh products daily"],
              ["Modern infrastructure", "Spacious, clean, and well-organized store"],
              ["Convenient location", "Easy accessibility for all Saharanpur residents"],
              ["Professional service", "Courteous, trained, and helpful staff"],
              ["Extended shopping hours", "Flexible timings to suit your schedule"],
              ["Safe shopping environment", "Hygienic and secure premises"],
              ["Quick checkout", "Multiple billing counters for faster service"],
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