import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Supermarket Franchise Opportunities in Uttar Pradesh | The Buyzaar Mart",
  description:
    "Start your supermarket franchise in Uttar Pradesh with The Buyzaar Mart. Profitable franchise opportunities available in Meerut, Saharanpur, Muzaffarnagar, Gangoh, and across UP with complete training and support.",
  keywords: [
    "buyzaar mart franchise uttar pradesh",
    "supermarket franchise up",
    "grocery franchise uttar pradesh",
    "retail franchise meerut",
    "franchise business saharanpur",
    "buyzaar mart dealership up",
    "supermarket franchise western up",
    "retail business opportunity uttar pradesh",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/uttar-pradesh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Supermarket Franchise Opportunities in Uttar Pradesh | The Buyzaar Mart",
    description:
      "Launch your own Buyzaar Mart supermarket franchise across Uttar Pradesh. Multiple locations available with proven business model and complete support.",
    url: "https://www.thebuyzaarmart.com/uttar-pradesh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Opportunities in Uttar Pradesh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Opportunities in Uttar Pradesh | The Buyzaar Mart",
    description:
      "Start your profitable supermarket franchise in UP. Join India's fastest-growing retail chain with complete training and support.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

const upCities = [
  {
    name: "Meerut",
    slug: "meerut",
    
  },
  {
    name: "Saharanpur",
    slug: "saharanpur",
    
  },
  {
    name: "Muzaffarnagar",
    slug: "muzaffarnagar",
   
  },
  {
    name: "Gangoh",
    slug: "gangoh",
    
  },
];

const franchiseBenefits = [
  {
    title: "Proven Business Model",
    desc: "Leverage our successful retail format with established supply chains and vendor relationships",
  },
  {
    title: "Marketing Support",
    desc: "Regional advertising campaigns, promotional materials, and digital marketing assistance",
  },
  {
    title: "Supply Chain Excellence",
    desc: "Direct sourcing from manufacturers ensuring competitive pricing and consistent quality",
  },
  {
    title: "Technology Integration",
    desc: "Advanced POS systems, inventory management software, and real-time sales tracking",
  },
  {
    title: "Ongoing Support",
    desc: "Dedicated relationship manager, regular audits, and continuous operational guidance",
  },
];



export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-35">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-medium mb-6 font-serif">
              Franchise Opportunities in Uttar Pradesh
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-50 max-w-4xl mx-auto leading-relaxed">
              Join India's fastest-growing supermarket chain in the country's most populous state
            </p>
            <p className="text-lg text-green-100 mb-8 max-w-3xl mx-auto">
              The Buyzaar Mart offers lucrative franchise opportunities across Uttar Pradesh with proven business models, complete training, and continuous support. Start your entrepreneurial journey in UP's booming retail sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/franchise"
                className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Apply for Franchise
              </Link>
              <Link
                href="/cities"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold text-lg"
              >
                Explore Locations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Uttar Pradesh Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-8">
            Why Invest in Uttar Pradesh?
          </h2>
          
          <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
            <p>
              Uttar Pradesh stands as India's retail powerhouse, home to over 240 million consumers—more than the entire population of Brazil. This massive consumer base represents an unprecedented opportunity for retail businesses, particularly in the organized supermarket sector where penetration remains low compared to metropolitan areas. The state's sheer demographic advantage creates a sustainable, long-term market for franchise partners.
            </p>

            <p>
              The landscape of Uttar Pradesh is transforming rapidly. Cities across Western and Central UP are experiencing accelerated urbanization, with improved infrastructure connecting tier-2 and tier-3 cities to major commercial hubs. The Purvanchal Expressway, Bundelkhand Expressway, and expanded metro networks are reshaping accessibility and commerce. This infrastructure boom is driving migration to urban centers, creating new middle-class neighborhoods hungry for modern retail experiences.
            </p>

            <p>
              Economic indicators paint an equally compelling picture. Rising disposable incomes, increased financial inclusion, and changing consumption patterns mark a fundamental shift in how UP's residents shop. The traditional kirana store model is giving way to organized retail, especially among younger demographics who value convenience, quality assurance, and diverse product selection. Government initiatives like One District One Product (ODOP) and favorable business policies further strengthen the investment climate.
            </p>

            <p>
              For franchise investors, Uttar Pradesh offers the perfect combination of high demand and manageable competition. While metropolitan markets are saturated, UP's cities provide first-mover advantages with lower real estate costs, eager customer bases, and supportive local ecosystems. The Buyzaar Mart's proven business model, coupled with UP's growth trajectory, positions franchise partners for sustained profitability and expansion opportunities across multiple locations.
            </p>
          </div>
        </div>
      </div>

      {/* Available Cities Section */}
<div id="cities" className="py-12 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-serif text-center mb-8">
      Available Franchise Cities in UP
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {upCities.map((city) => (
        <Link
          key={city.slug}
          href={`/cities/${city.slug}`}
          className="border border-gray-200 rounded-lg py-3 text-center text-lg font-semibold text-gray-800 hover:border-green-500 hover:text-green-600 hover:shadow transition-all duration-200"
        >
          {city.name}
        </Link>
      ))}
    </div>
  </div>
</div>


      {/* Franchise Benefits Section */}
<div className="bg-gradient-to-br from-gray-50 to-green-50 py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-serif text-center mb-4">
      Why Choose The Buyzaar Mart Franchise?
    </h2>
    <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
      A complete support ecosystem designed to help you succeed from day one
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {franchiseBenefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
        >
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            {benefit.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {benefit.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>


      

    </div>
  );
}