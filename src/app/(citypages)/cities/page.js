import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Franchise Opportunities Across Cities | The Buyzaar Mart",
  description:
    "Explore Buyzaar Mart supermarket franchise opportunities across Uttar Pradesh and NCR. Start your own profitable retail business with complete support in Noida, Meerut, Saharanpur, Muzaffarnagar, and Gangoh.",
  keywords: [
    "buyzaar mart franchise",
    "supermarket franchise india",
    "grocery franchise opportunity",
    "retail franchise uttar pradesh",
    "franchise business ncr",
    "buyzaar mart dealership",
    "supermarket franchise locations"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Franchise Opportunities Across Cities | The Buyzaar Mart",
    description:
      "Start your own Buyzaar Mart supermarket franchise. Multiple locations available across UP and NCR with complete training and support.",
    url: "https://www.thebuyzaarmart.com/cities",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Opportunities Across Cities | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Franchise Opportunities Across Cities | The Buyzaar Mart",
    description:
      "Launch your supermarket franchise with Buyzaar Mart. Profitable opportunities available across UP and NCR.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

const cities = [
  { 
    name: "Noida", 
    slug: "noida", 
    desc: "Premium franchise opportunity in NCR's most affluent city",
    investment: "₹35-75 Lakhs",
    potential: "High Revenue Potential"
  },
  { 
    name: "Meerut", 
    slug: "meerut", 
    desc: "Capitalize on western UP's largest commercial hub",
    investment: "₹20-45 Lakhs",
    potential: "Fast Growing Market"
  },
  { 
    name: "Saharanpur", 
    slug: "saharanpur", 
    desc: "Strategic location near Dehradun-Delhi corridor",
    investment: "₹12-40 Lakhs",
    potential: "Established Market"
  },
  { 
    name: "Muzaffarnagar", 
    slug: "muzaffarnagar", 
    desc: "Major commercial center with strong consumer base",
    investment: "₹15-25 Lakhs",
    potential: "Growing Demand"
  },
  { 
    name: "Gangoh", 
    slug: "gangoh", 
    desc: "Untapped market with minimal competition",
    investment: "₹10-15 Lakhs",
    potential: "First Mover Advantage"
  },
];

export default function Page() {
  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium text-center mb-4 mt-21 font-serif">
            Franchise Opportunities Across India
          </h1>

          <p className="text-gray-700 text-lg text-center mb-8 max-w-6xl mx-auto leading-relaxed">
            Join India's fastest-growing supermarket chain. The Buyzaar Mart offers lucrative franchise opportunities across India, backed by a proven business model, complete training, and continuous operational support. Choose your preferred location and start your entrepreneurial journey with confidence today.
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

      {/* Cities Grid */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-serif  text-center mb-10">
          Available Franchise Locations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/cities/${city.slug}`}
              className="group"
            >
              <div className="p-6 border-2 border-gray-200 rounded-xl font-medium hover:border-green-500 hover:shadow-xl transition-all duration-300 bg-white h-full">
                <div className="flex items-start gap-3 ">
                  <svg
                    className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
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

                  <div className="flex-1">
                    <h2 className="text-2xl font-medium font-serif text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                      {city.name}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {city.desc}
                    </p>

                   

                    <div className="mt-2 flex items-center text-green-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Explore Opportunity
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      

      

    </div>
  );
}