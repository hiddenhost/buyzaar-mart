import React from "react";
import Link from "next/link";
import { citiesData } from "@/data/citiesData";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

export default function BareillyContent() {
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
            <span className="text-green-600 font-semibold text-lg">Bareilly</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-serif text-center mb-4">
            Buyzaar Mart Franchise Opportunity in Bareilly
          </h1>

          <p className="text-gray-700 text-center text-lg mb-6 max-w-7xl mx-auto leading-relaxed">
            Own a high-growth supermarket franchise in Bareilly and serve one of Uttar
            Pradesh’s fastest-expanding residential retail markets. Tap into strong daily
            grocery demand with Buyzaar Mart’s proven FOCM and FOCO franchise models and
            build a dependable monthly income through organised neighbourhood retail.
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
                Why Bareilly Is a Strong City to Open a Supermarket Franchise
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Bareilly is one of Western Uttar Pradesh’s important commercial and
                residential centres, with a steadily growing urban population, expanding
                housing clusters, and rising demand for organised grocery retail. From
                established residential areas to newly developing colonies and mixed-use
                commercial corridors, the city offers strong daily demand for food,
                household essentials, dairy, personal care, and packaged products. A
                Buyzaar Mart franchise in Bareilly gives investors an opportunity to enter
                a dependable, everyday-consumption market with scalable ownership models
                suited to both active and passive franchise partners.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Bareilly’s Daily Needs Retail Market Has Strong Local Potential
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Bareilly’s neighbourhood grocery market remains largely driven by small,
                unorganised kirana outlets despite rising expectations from consumers for
                cleaner stores, transparent pricing, digital billing, wider assortments,
                and better shopping convenience. Residential families across the city are
                increasingly looking for reliable branded supermarkets that combine value,
                freshness, and trust. A well-positioned Buyzaar Mart franchise in Bareilly
                can capture recurring local demand, generate repeat footfall, and build a
                strong customer base through daily essentials and convenience-led retail.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Two Franchise Models — Choose Your Preferred Role
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Buyzaar Mart franchise in Bareilly is available under two ownership
                models, allowing you to choose how actively you want to participate in the
                business.
                <br /><br />
                Under the <strong>FOCM model (Franchise Owned, Company Managed)</strong>,
                you own the franchise while Buyzaar Mart manages the day-to-day store
                setup, procurement, staffing, branding, operations, and monitoring through
                a structured business system. This works well for investors who want
                ownership with strategic oversight but do not want to personally manage the
                store floor every day.
                <br /><br />
                Under the <strong>FOCO model (Franchise Owned, Company Operated)</strong>,
                Buyzaar Mart handles the complete end-to-end operation of the outlet on
                your behalf. This model is suitable for passive investors, NRIs,
                professionals, and business owners who want to build a retail income stream
                without regular involvement in operations.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Investment Formats for Different Bareilly Locations
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Buyzaar Mart offers three scalable formats to match different locality
                sizes, property types, and investment capacities in Bareilly. The{" "}
                <strong>Mini Mart format (600–1,000 sq.ft)</strong> is suitable for
                residential market pockets, colony-front commercial shops, and compact
                neighbourhood demand zones with an investment of{" "}
                <strong>₹15,25,000</strong>. The{" "}
                <strong>Super Mart format (1,001–3,000 sq.ft)</strong> fits larger roads,
                mixed residential-commercial markets, and busier urban clusters at an
                investment of <strong>₹26,63,407</strong>. The{" "}
                <strong>Hyper Mart format (3,001–8,000 sq.ft)</strong> is ideal for
                high-footfall main roads and large-format retail spaces at an investment of{" "}
                <strong>₹78,89,960</strong>, offering the broadest assortment and strongest
                revenue upside.
                <br /><br />
                Franchise partners can also benefit from additional earnings through private
                label sales, supplier promotions, in-store display branding, customer
                loyalty programmes, and digital transaction-based revenue support, helping
                improve total return on investment.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Best Areas in Bareilly for a Buyzaar Mart Franchise
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Bareilly offers multiple promising franchise zones across residential,
                semi-commercial, and emerging urban areas. Locations with strong potential
                include Rajendra Nagar, Delapeer, Civil Lines, Prem Nagar, Model Town,
                Pilibhit Bypass Road, Stadium Road, and other growing neighbourhood markets
                with regular family footfall and visible demand for organised retail.
                Colony-facing shops, mixed-use roads, and residential connectors are strong
                opportunities for Mini Mart and Super Mart formats, while larger roadside
                properties in high-movement corridors can support Hyper Mart expansion.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Technology-Led Operations for Better Retail Performance
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every Buyzaar Mart franchise in Bareilly is supported by an integrated
                retail technology ecosystem that improves operational control and store
                performance. The business uses cloud-enabled POS billing, inventory
                monitoring, demand forecasting, GST-ready reporting, and centralised sales
                performance tracking to reduce waste and improve decision-making. Franchise
                owners receive structured reporting and access to key operational insights,
                while the company’s supply and replenishment systems help maintain strong
                availability across daily-needs categories.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Local Marketing Support for Faster Market Capture
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Buyzaar Mart supports Bareilly franchise partners with launch and ongoing
                marketing designed to build neighbourhood trust and repeat customer
                behaviour. This includes local area promotions, printed campaign material,
                store branding, digital creatives, social media visibility, geo-targeted
                campaigns, and SEO support for location-based searches such as
                “supermarket near me.” Grand opening promotion, festival offers, and
                community-focused activations help new stores gain early traction and build
                long-term customer loyalty in the Bareilly market.
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