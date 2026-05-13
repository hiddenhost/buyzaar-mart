import React from "react";
import Link from "next/link";
import { citiesData } from "@/data/citiesData";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

export default function DelhiContent() {
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
            <span className="text-green-600 font-semibold text-lg">Delhi</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-medium font-serif text-center mb-4">
            Buyzaar Mart Franchise Opportunity in Delhi
          </h1>

          <p className="text-gray-700 text-center text-lg mb-6 max-w-7xl mx-auto leading-relaxed">
            Own a high-revenue supermarket franchise in Delhi &#8212; India&#39;s largest urban consumer
            market. Tap into the country&#39;s most consistent daily needs retail demand with Buyzaar
            Mart&#39;s proven FOCM and FOCO franchise models and earn reliable monthly profits from day one.
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
                Why Delhi Is the Best City to Open a Supermarket Franchise in India
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Delhi, with a population exceeding 2 crore across its residential zones, is India&#39;s
                largest urban consumer market and the anchor city of the National Capital Region. From
                the dense DDA colonies of East and West Delhi to the premium housing societies of South
                Delhi, the rapidly developing Dwarka sectors, and the vast residential corridors of
                North and Northwest Delhi, the city generates daily grocery and household essentials
                demand at a scale unmatched by any other Indian city. A Buyzaar Mart franchise in
                Delhi positions you at the centre of this vast, recession-proof consumer demand &#8212;
                with a choice of two ownership models that make this investment accessible regardless
                of your level of desired involvement in store operations.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Delhi&#39;s Retail Market: A &#8377;50,000+ Crore Opportunity
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The organised daily needs retail market in Delhi represents one of the largest untapped
                franchise opportunities in India. Yet organised retail penetration at the neighbourhood
                level &#8212; the colony market store, the society ground-floor shop, the residential
                lane mart &#8212; remains significantly underpenetrated across large parts of the city.
                Families in Janakpuri, Rohini, Uttam Nagar, Mayur Vihar, Laxmi Nagar, and dozens of
                other densely populated residential zones are still served predominantly by unorganised
                kirana stores that cannot deliver the product consistency, food safety certification,
                billing transparency, or brand reliability that today&#39;s Delhi consumer actively
                prefers. A strategically located Buyzaar Mart franchise in Delhi can realistically serve
                600&#8211;1,000 customers per day, generating monthly revenues of &#8377;20&#8211;35
                lakhs with strong, recurring margins.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Two Franchise Models &#8212; Choose Your Level of Involvement
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Buyzaar Mart franchise in Delhi is available under two distinct ownership models.
                Both give you full franchise ownership &#8212; the difference is how much involvement
                you want in your store&#39;s daily operations.
                <br /><br />
                Under the <strong>FOCM model (Franchise Owned, Company Managed)</strong>, you own the
                Delhi franchise outlet and Buyzaar Mart manages daily operations &#8212; store setup,
                inventory, supply chain, staff management, marketing, and performance monitoring &#8212;
                under a tested Standard Operating Process. You receive live KPI data and regular audit
                reports, participate in key decisions, and maintain oversight without managing the store
                floor daily. This model is best for Delhi investors who want professional management
                support with periodic involvement &#8212; business owners, professionals, and
                entrepreneurs who want a well-run retail asset without daily operational responsibility.
                <br /><br />
                Under the <strong>FOCO model (Franchise Owned, Company Operated)</strong>, Buyzaar
                Mart takes complete end-to-end operational responsibility. You are a fully passive
                investor &#8212; your role is ownership and capital. Buyzaar Mart operates the store
                entirely on your behalf and you receive regular performance reporting and financial
                updates. This model is best for NRIs, high-net-worth individuals, government employees
                with restrictions on active business involvement, or professionals who want a secondary
                income stream with zero time commitment.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Flexible Investment Models Tailored for Delhi&#39;s Diverse Localities
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Buyzaar Mart offers three scalable franchise formats to match different locations and
                investment capacities across Delhi. The <strong>Mini Mart format (600&#8211;1,000
                sq.ft)</strong> is ideal for DDA flat complex commercial units, colony-facing shops, and
                residential society ground floors &#8212; with an investment of{" "}
                <strong>&#8377;15,25,000</strong>, offering quick break-even and steady neighbourhood
                footfall. The <strong>Super Mart format (1,001&#8211;3,000 sq.ft)</strong> suits colony
                chowks, sector market areas, and residential main road locations at an investment of{" "}
                <strong>&#8377;26,63,407</strong>, delivering higher sales volumes and a broader product
                assortment. For entrepreneurs targeting large-format retail at high-footfall main road
                and market locations, the{" "}
                <strong>Hyper Mart format (3,001&#8211;8,000 sq.ft)</strong> at{" "}
                <strong>&#8377;78,89,960</strong> unlocks the highest revenue potential and the full
                Buyzaar Mart brand experience.
                <br /><br />
                Beyond core retail margins, franchise partners in Delhi benefit from multiple additional
                revenue streams: private label product commissions, supplier-funded promotional
                incentives, in-store display rentals for FMCG brands, digital payment processing
                commissions, and a loyalty programme that drives repeat visits and higher basket sizes
                &#8212; all contributing to a faster return on investment.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Best Delhi Locations for a Buyzaar Mart Franchise Right Now
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dwarka Sectors 1&#8211;23 represent one of Delhi&#39;s largest planned residential zones
                &#8212; DDA flats and housing societies housing millions of families where organised
                daily needs retail at the society and sector market level is significantly
                underpenetrated. Rohini Sectors 1&#8211;25 offer North West Delhi&#39;s largest
                residential zone with dense population and sector-level commercial markets that are
                predominantly unorganised. Janakpuri, Uttam Nagar, Mayur Vihar (Phase 1, 2, 3),
                Laxmi Nagar, Vasant Kunj, Patparganj, IP Extension, Shahdara, and Vivek Vihar all
                offer strong first-mover organised retail opportunities across both Mini Mart and
                Super Mart formats. High-footfall main road commercial frontages along the Outer Ring
                Road and connecting residential corridors are strong Hyper Mart territory for investors
                with access to larger commercial spaces.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Cutting-Edge Technology Built for Modern Retail Management
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every Buyzaar Mart franchise in Delhi is powered by an integrated retail technology
                suite designed to reduce costs and increase operational efficiency. The cloud-based POS
                system provides real-time sales data and billing with zero downtime. AI-driven inventory
                management automatically forecasts demand based on local buying patterns &#8212;
                preventing overstocking and stockouts simultaneously. Franchise owners can access
                financial dashboards, GST-compliant accounting reports, and employee payroll management
                from any device. Centralised campaign management allows head office to push city-wide
                promotions, festival pricing, and flash deals directly to your store&#39;s systems
                &#8212; ensuring you never miss a sales opportunity. Our regional distribution centre
                covering Delhi and NCR delivers fresh produce and dairy daily and replenishes FMCG
                categories weekly, keeping your working capital lean and shelves full.
              </p>

              <h3 className="text-xl font-serif font-semibold mb-3">
                Hyperlocal Marketing Support to Dominate Delhi&#39;s Retail Market
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Buyzaar Mart&#39;s marketing engine ensures your Delhi store is visible, trusted, and
                preferred by local consumers from launch day. Our support includes national TV and
                digital brand campaigns, Delhi-specific outdoor and print advertising, professional
                social media management with local geo-targeting, and local SEO strategies to capture
                &#8220;supermarket near me&#8221; searches across Dwarka, Rohini, Janakpuri, Mayur
                Vihar, and other key micro-markets. Grand opening events feature targeted leaflet
                campaigns, RWA tie-ups, and community activation drives to rapidly build your customer
                base. Ongoing festival-season promotions &#8212; Diwali, Holi, Eid, and Republic Day
                campaigns &#8212; are pre-planned and executed centrally, so you benefit from
                high-impact marketing without managing it yourself. You also receive a full kit of
                ready-to-use store branding, in-store merchandising displays, and digital creatives
                customised for the Delhi market.
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
                    <p className="text-sm text-gray-500">View details &#8594;</p>
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