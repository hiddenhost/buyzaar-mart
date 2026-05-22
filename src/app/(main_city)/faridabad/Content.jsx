import React from "react";
import Link from "next/link";
import { citiesData } from "@/data/citiesData";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

export default function FaridabadContent() {
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
            <span className="text-green-600 font-semibold text-lg">Faridabad</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-serif text-center mb-4">
            Buyzaar Mart Franchise Opportunity in Faridabad
          </h1>

          <p className="text-gray-700 text-center text-lg mb-6 max-w-7xl mx-auto leading-relaxed">
            Own a high-revenue supermarket franchise in Faridabad — one of Haryana&apos;s
            fastest-growing industrial and residential cities. Tap into a strong and
            expanding retail market with Buyzaar Mart&apos;s proven franchise model and
            earn consistent monthly profits from day one.
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
                Why Faridabad is the Best City to Open a Supermarket Franchise in Haryana
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Faridabad is one of Haryana&apos;s most important commercial and industrial
                cities, strategically located within the NCR region. With strong road
                connectivity through Mathura Road, Delhi-Mumbai Expressway access,
                the Violet Line Metro, and seamless links to Delhi, Noida, Gurugram,
                and Palwal, the city experiences constant movement of working
                professionals, families, business owners, and daily commuters.
                Faridabad&apos;s mix of industrial zones, rapidly growing residential sectors,
                educational institutions, and expanding urban infrastructure has created
                a large and aspirational consumer base across areas like Sector 15,
                Sector 16, Sector 21C, NIT, Greater Faridabad, Ballabgarh, Green Field,
                and Charmwood. A Buyzaar Mart franchise in Faridabad places you at the
                centre of this rising organised retail demand.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Faridabad&apos;s Retail Market: A High-Growth Opportunity
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Faridabad has become one of the strongest consumption-driven retail
                markets in Haryana, backed by salaried households, industrial employees,
                entrepreneurs, students, and expanding housing developments. Localities
                such as Greater Faridabad, Sector 15, Sector 21, NIT, Ballabgarh,
                Surajkund Road, and Green Field Colony are home to nuclear families,
                dual-income households, and young professionals who increasingly prefer
                the convenience, hygiene, and product variety of organised supermarkets
                over traditional kirana stores. A strategically located Buyzaar Mart
                franchise in Faridabad can generate steady daily footfall, repeat
                purchases, and growing basket sizes as modern retail adoption continues
                to rise across the city.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Franchise Support That Sets You Up for Immediate Profitability
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you are an experienced business owner or a first-time
                entrepreneur, the Buyzaar Mart franchise system is designed to
                fast-track your success in the Faridabad market. From the day you
                join, our team assists with location scouting across high-footfall
                residential and commercial pockets, lease negotiation, and complete
                store fit-out including design, layout, signage, and fixture
                installation. Before launch, you will complete a 20-day immersive
                training programme covering supermarket operations, billing and POS
                management, inventory control, staff hiring, vendor coordination,
                customer service, and daily audit systems. After launch, field
                managers conduct regular store visits, performance reviews, and
                actionable guidance to help keep your outlet consistently profitable.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Flexible Investment Models Tailored for Faridabad&apos;s Diverse Localities
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Buyzaar Mart offers three scalable franchise formats to suit different
                locations and investment capacities in Faridabad. The <strong>Mini Mart format (600–1,000 sq.ft)</strong> is ideal for
                neighbourhood markets and residential sectors with an investment of{" "}
                <strong>₹15,25,000</strong>, offering faster break-even and reliable
                local footfall. The <strong>Super Mart format (1,001–3,000 sq.ft)</strong>{" "}
                is best suited for main roads, market complexes, and dense residential
                zones with an investment of <strong>₹26,63,407</strong>, enabling
                stronger sales and a wider product assortment. For entrepreneurs
                targeting premium catchments, large residential clusters, or major
                arterial roads, the <strong>Hyper Mart format (3,001–8,000 sq.ft)</strong>{" "}
                at <strong>₹78,89,960</strong> delivers the highest revenue potential
                and the complete Buyzaar Mart retail experience.
                <br />
                <br />
                Beyond standard product margins, franchise partners in Faridabad also
                benefit from multiple revenue streams including private label product
                commissions, supplier-funded promotional income, in-store display
                rentals from FMCG brands, digital payment commissions, and a loyalty
                programme that encourages repeat purchases and higher customer lifetime
                value.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Cutting-Edge Technology Built for Modern Retail Management
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every Buyzaar Mart franchise in Faridabad is supported by an integrated
                retail technology stack built to reduce costs and improve operational
                efficiency. The cloud-based POS system provides real-time sales
                visibility and smooth billing. AI-powered inventory tools help forecast
                demand based on local buying patterns, reducing stockouts and excess
                inventory. Franchise owners can monitor financial dashboards,
                GST-compliant accounting, and employee payroll from any device.
                Centralised campaign support also allows head office to roll out
                city-specific promotions, seasonal pricing, and flash offers directly
                to your store systems, helping you capture every sales opportunity.
                Reliable regional supply support across Faridabad and NCR ensures timely
                replenishment for fresh produce, dairy, staples, and FMCG goods while
                keeping working capital efficient.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Hyperlocal Marketing Support to Dominate Faridabad&apos;s Retail Market
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Buyzaar Mart&apos;s marketing support ensures your Faridabad store becomes
                visible, trusted, and preferred from the day it launches. Our team
                supports national digital branding, Faridabad-focused outdoor and print
                promotion, professional social media management with geo-targeting, and
                local SEO strategies to capture searches like &quot;supermarket near me&quot;
                across Sector 15, Sector 16, NIT, Greater Faridabad, Green Field
                Colony, Ballabgarh, and Surajkund Road. Grand opening campaigns include
                leaflet distribution, society outreach, resident welfare engagement,
                and local activation drives to quickly build your customer base.
                Ongoing festive campaigns for Diwali, Holi, Eid, Independence Day,
                and New Year are centrally planned so your store benefits from strong
                promotions without operational burden. You also receive ready-to-use
                branding assets, in-store merchandising support, and digital creatives
                customised for the Faridabad market.
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
            Explore franchise opportunities across Haryana, Uttar Pradesh, and NCR
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