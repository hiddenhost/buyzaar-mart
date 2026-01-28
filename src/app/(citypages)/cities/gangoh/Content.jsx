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
            Gangoh – Supermarket & Grocery Store for Everyday Needs
          </h1>

          <p className="text-gray-700 text-center text-lg mb-0 max-w-7xl mx-auto leading-relaxed">
            Gangoh is a growing town with families and businesses looking for reliable grocery and retail solutions.
            The Buyzaar Mart proudly serves the local community by offering fresh groceries, daily essentials,
            packaged foods, personal care, and household products at affordable prices. Our goal is to provide
            a convenient, quality-driven, and friendly shopping experience for every customer in Gangoh.
          </p>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-serif font-semibold mb-4">
            Trusted Supermarket in Gangoh for Your Daily Needs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Gangoh is steadily developing with a growing demand for organized retail and reliable grocery stores.
            Families today prefer a one-stop destination where they can find everything they need under one roof.
            The Buyzaar Mart fulfills this need by offering a modern supermarket experience with quality products,
            hygienic environment, and competitive pricing for every household in Gangoh.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Wide Range of Groceries & Household Essentials
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our store in Gangoh offers a complete range of groceries, packaged foods, snacks, beverages, dairy
            products, personal care items, and household essentials. We work with trusted brands and suppliers
            to ensure freshness, quality, and consistency in every product available on our shelves.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Affordable Pricing with Quality Assurance
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            At The Buyzaar Mart, we believe quality shopping should be affordable for everyone. Our pricing
            strategy focuses on delivering value through regular offers, seasonal discounts, and competitive
            rates without compromising on product standards. This helps families in Gangoh manage their
            household budgets efficiently.
          </p>

          <h3 className="text-xl font-serif font-semibold mb-3">
            Friendly Neighborhood Shopping Experience
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our clean store layout, organized shelves, and helpful staff ensure a smooth and comfortable
            shopping experience. Whether you visit us for daily groceries or monthly essentials, we aim to
            make every visit quick, convenient, and pleasant for our customers in Gangoh.
          </p>

        </div>
      </div>

     

      {/* Additional Why Choose Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-serif font-medium text-center mb-6">
            Why Shoppers in Gangoh Choose The Buyzaar Mart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              ["Wide product range", "All daily essentials under one roof"],
              ["Affordable pricing", "Best value for your money"],
              ["Quality assurance", "Trusted brands and fresh products"],
              ["Clean & organized store", "Comfortable shopping experience"],
              ["Friendly staff", "Helpful and customer-focused service"],
              ["Reliable supply", "Consistent availability of products"],
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