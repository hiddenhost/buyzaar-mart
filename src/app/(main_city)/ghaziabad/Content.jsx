import React from "react";
import Link from "next/link";
import { citiesData } from "@/data/citiesData";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

export default function GhaziabadContent() {
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
            <span className="text-green-600 font-semibold text-lg">Ghaziabad</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-serif text-center mb-4">
            Buyzaar Mart Franchise Opportunity in Ghaziabad
          </h1>

          <p className="text-gray-700 text-center text-lg mb-6 max-w-7xl mx-auto leading-relaxed">
            Own a high-revenue supermarket franchise in Ghaziabad — the Gateway City of Uttar Pradesh. 
            Tap into one of NCR's fastest-growing retail markets with Buyzaar Mart's proven franchise model 
            and earn consistent monthly profits from day one.
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

          {/* Main Content - Order 1 on all screens */}
          <div className="flex-1 order-1 lg:order-1">
            <div className="prose prose-lg max-w-none">

              <h2 className="text-2xl font-serif font-semibold mb-4">
                Why Ghaziabad is the Best City to Open a Supermarket Franchise in NCR
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ghaziabad, home to over 23 lakh residents, is one of the most commercially vibrant cities in 
                Uttar Pradesh and a critical node of the National Capital Region (NCR). Sharing its western 
                border directly with Delhi and well-connected via NH-9, NH-58, the Delhi-Meerut Expressway, 
                and the rapid metro network, Ghaziabad offers unmatched accessibility that drives consistent 
                daily footfall. The city's booming IT and manufacturing sectors have cultivated a large, 
                upwardly mobile working population — particularly across planned townships like Indirapuram, 
                Vaishali, Vasundhara, Crossings Republik, and Raj Nagar Extension — who actively seek 
                premium, organized grocery shopping experiences. A Buyzaar Mart franchise in Ghaziabad 
                positions you at the centre of this surging consumer demand.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Ghaziabad's Retail Market: A ₹6,000+ Crore Opportunity
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The retail market in Ghaziabad is estimated to exceed ₹6,000 crores annually, yet organized 
                retail penetration remains below 18% — a significant white space that early franchise partners 
                stand to capture. Densely populated residential clusters such as Raj Nagar, Kaushambi, 
                Siddharth Vihar, Mohan Nagar, and Pratap Vihar are home to nuclear families, dual-income 
                households, and young professionals who prefer the convenience of a well-stocked supermarket 
                over traditional kirana stores. A strategically located Buyzaar Mart franchise in Ghaziabad 
                can realistically serve 600–900 customers per day, generating monthly revenues of 
                ₹18–30 lakhs with strong, recurring margins.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Franchise Support That Sets You Up for Immediate Profitability
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you are a seasoned business owner or a first-time entrepreneur, the Buyzaar Mart 
                franchise system is built to fast-track your success in the Ghaziabad market. From the day 
                you sign up, our dedicated team assists with location scouting across high-traffic zones, 
                lease negotiation, and complete store fit-out including design, layout, signage, and fixture 
                installation. Before your store opens, you will complete a 20-day immersive training programme 
                covering every aspect of supermarket operations — billing and POS management, inventory 
                control, staff recruitment, vendor relations, customer service, and daily audits. 
                Post-launch field managers conduct regular store visits, performance reviews, and provide 
                actionable recommendations to keep your store consistently profitable.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Flexible Investment Models Tailored for Ghaziabad's Diverse Localities
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Buyzaar Mart offers three scalable franchise formats to match different locations and 
                investment capacities in Ghaziabad. The <strong>Mini Mart format (600–1,000 sq.ft)</strong> 
                is ideal for residential pockets and colony-level retail with an investment of 
                <strong> ₹15,25,000</strong>, offering quick break-even and steady neighbourhood footfall. 
                The <strong>Super Mart format (1,001–3,000 sq.ft)</strong> suits main roads, market 
                complexes, and high-density townships at an investment of <strong>₹26,63,407</strong>, 
                delivering higher sales volumes and broader product assortment. For entrepreneurs targeting 
                large-format retail near malls or expressway corridors, the 
                <strong> Hyper Mart format (3,001–8,000 sq.ft)</strong> at <strong>₹78,89,960</strong> 
                unlocks the highest revenue potential and the full Buyzaar Mart brand experience.
                <br /><br />
                Beyond core retail margins, franchise partners in Ghaziabad benefit from multiple 
                additional revenue streams: private label product commissions, supplier-funded 
                promotional incentives, in-store display rentals for FMCG brands, digital payment 
                processing commissions, and a loyalty programme that drives repeat visits and higher 
                basket sizes — all contributing to a faster return on investment.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Cutting-Edge Technology Built for Modern Retail Management
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every Buyzaar Mart franchise in Ghaziabad is powered by an integrated retail technology 
                suite designed to reduce costs and increase operational efficiency. The cloud-based POS 
                system provides real-time sales data and billing with zero downtime. AI-driven inventory 
                management automatically forecasts demand based on local buying patterns — preventing 
                overstocking and stockouts simultaneously. Franchise owners can access financial 
                dashboards, GST-compliant accounting reports, and employee payroll management from any 
                device. Centralized campaign management allows head office to push city-wide promotions, 
                festival pricing, and flash deals directly to your store's systems — ensuring you never 
                miss a sales opportunity. Our regional distribution centre covering Ghaziabad and NCR 
                delivers fresh produce and dairy daily and replenishes FMCG categories weekly, keeping 
                your working capital lean and shelves full.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Hyperlocal Marketing Support to Dominate Ghaziabad's Retail Market
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Buyzaar Mart's marketing engine ensures your Ghaziabad store is visible, trusted, and 
                preferred by local consumers from launch day. Our support includes national TV and 
                digital brand campaigns, Ghaziabad-specific outdoor and print advertising, professional 
                social media management with local geo-targeting, and local SEO strategies to capture 
                "supermarket near me" searches across Indirapuram, Vaishali, Vasundhara, and other key 
                micro-markets. Grand opening events feature targeted leaflet campaigns, RWA tie-ups, 
                and community activation drives to rapidly build your customer base. Ongoing 
                festival-season promotions — Diwali, Holi, Eid, and Republic Day campaigns — are 
                pre-planned and executed centrally, so you benefit from high-impact marketing without 
                managing it yourself. You also receive a full kit of ready-to-use store branding, 
                in-store merchandising displays, and digital creatives customised for the Ghaziabad market.
              </p>

            </div>
          </div>

          {/* Form Section - Smart positioning with CSS order */}
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