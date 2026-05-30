import React from "react";
import Link from "next/link";
import { citiesData } from "@/data/citiesData";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

export default function LucknowContent() {
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
            <span className="text-green-600 font-semibold text-lg">Lucknow</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-serif text-center mb-4">
            Buyzaar Mart Franchise Opportunity in Lucknow
          </h1>

          <p className="text-gray-700 text-center text-lg mb-6 max-w-7xl mx-auto leading-relaxed">
            Own a high-revenue supermarket franchise in Lucknow — the City of Nawabs and one of Uttar Pradesh&apos;s fastest-growing retail markets.
            Tap into rising consumer demand with Buyzaar Mart&apos;s proven franchise model and build a profitable retail business with strong long-term growth potential.
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
          {/* Main Content */}
          <div className="flex-1 order-1 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-serif font-semibold mb-4">
                Why Lucknow is the Best City to Open a Supermarket Franchise in Uttar Pradesh
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lucknow, the capital city of Uttar Pradesh, is one of North India&apos;s most promising urban retail destinations with a strong mix of traditional commerce, modern housing, government institutions, educational centres, and rapidly expanding residential zones. With excellent connectivity through Shaheed Path, Faizabad Road, Kanpur Road, Sitapur Road, Sultanpur Road, Amar Shaheed Path, and the Lucknow Metro, the city supports steady movement of families, professionals, students, and daily shoppers across key neighbourhoods. Areas such as Gomti Nagar, Gomti Nagar Extension, Indira Nagar, Aliganj, Jankipuram, Hazratganj, Alambagh, Rajajipuram, and Vrindavan Yojana have developed into major consumption hubs with growing demand for modern organised retail. A Buyzaar Mart franchise in Lucknow gives entrepreneurs the opportunity to serve this evolving consumer base with a trusted supermarket brand and a scalable business model.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Lucknow&apos;s Retail Market: A Fast-Expanding Business Opportunity
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lucknow has witnessed rapid urban development over the past decade, creating strong demand for organised supermarkets across both established and newly developed localities. Residential sectors such as Gomti Nagar Extension, Sushant Golf City, Amar Shaheed Path, Indira Nagar, Mahanagar, Ashiyana, and Chinhat are home to middle-income and upper-middle-income families who increasingly prefer modern grocery stores that offer convenience, better product assortment, hygienic shopping environments, and competitive pricing. As consumer preferences continue shifting from unorganised kirana stores to structured retail formats, a strategically located Buyzaar Mart franchise in Lucknow can benefit from strong daily walk-ins, repeat household purchases, and higher basket values. This makes Lucknow an ideal city for franchise investors seeking both stable recurring revenue and long-term retail growth.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Franchise Support That Helps You Launch with Confidence
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Buyzaar Mart provides complete franchise support to help partners succeed in the Lucknow market, whether they are experienced retailers or first-time business owners. From initial onboarding, our team supports you with location selection in high-potential residential or mixed-use areas, lease discussions, store planning, branding, interior fit-out, fixture installation, and pre-opening setup. Before launch, each franchise partner undergoes a 20-day practical training programme focused on billing systems, store operations, inventory handling, vendor management, customer service, team supervision, and day-to-day retail processes. After the store opens, our field support team continues to provide regular operational reviews, store performance monitoring, and business guidance to improve efficiency and profitability.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Flexible Investment Models for Different Locations in Lucknow
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Buyzaar Mart offers three franchise formats to suit different market sizes and investment capacities across Lucknow.
                The <strong>Mini Mart format (600–1,000 sq.ft)</strong> is ideal for neighbourhood clusters, residential colonies, and local streets with an investment of <strong>₹15,25,000</strong>, offering lower setup costs and dependable daily sales.
                The <strong>Super Mart format (1,001–3,000 sq.ft)</strong> works well for main roads, sector markets, and high-footfall urban zones at an investment of <strong>₹26,63,407</strong>, allowing a wider assortment and stronger monthly revenue.
                The <strong>Hyper Mart format (3,001–8,000 sq.ft)</strong> is suited for large-format retail opportunities in premium catchments, highway-linked corridors, and major commercial clusters at an investment of <strong>₹78,89,960</strong>, delivering the highest revenue potential and full-scale supermarket experience.
                <br />
                <br />
                In addition to retail sales margins, franchise partners in Lucknow can generate extra income through private label products, promotional support from FMCG brands, in-store display rentals, digital payment commissions, and customer loyalty programmes that boost repeat transactions and average basket size.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Modern Retail Technology for Efficient Store Management
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every Buyzaar Mart franchise in Lucknow operates on an integrated retail technology platform that improves efficiency, reduces manual errors, and supports better decision-making. The cloud-enabled POS system helps manage billing and real-time sales tracking, while AI-supported inventory tools assist with stock planning based on local demand trends. Franchise owners can monitor store performance through financial reports, GST-ready accounting summaries, and payroll management tools accessible from anywhere. Centralised campaign controls also allow city-wide promotions, festive discounts, and special offers to be launched smoothly across the Lucknow market, while dependable supply chain support ensures timely replenishment of groceries, dairy, staples, and daily-use FMCG items.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Hyperlocal Marketing Support to Grow Your Store in Lucknow
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Buyzaar Mart supports every Lucknow franchise with a complete hyperlocal marketing strategy designed to build trust and attract regular shoppers from the surrounding area. Our team helps promote your store through digital branding, location-targeted advertising, local SEO, print campaigns, outdoor visibility, and social media marketing tailored to neighbourhoods such as Gomti Nagar, Indira Nagar, Aliganj, Ashiyana, Chinhat, Rajajipuram, and Sushant Golf City. Grand opening promotions may include leaflet distribution, colony outreach, local activation drives, and community engagement to generate early footfall and store awareness. Seasonal campaigns for Diwali, Holi, Eid, Raksha Bandhan, and New Year are also planned centrally, helping your Lucknow outlet remain visible and competitive throughout the year.
              </p>
            </div>
          </div>

          {/* Form Section */}
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
            Explore franchise opportunities across Uttar Pradesh, Haryana, and NCR
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