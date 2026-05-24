import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Low Investment Franchise in Greater Noida - Start Your Own Buyzaar Mart Today",
  description:
    "Explore The Buyzaar Mart low-investment franchise opportunity in Greater Noida with Mini Mart, Super Mart, and Hyper Mart formats under the FOCM model, end-to-end support, and investment starting from ₹15 Lakh.",
  url: "https://www.thebuyzaarmart.com/greater-noida/low-investment-franchise-in-greater-noida",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Greater Noida",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum investment to start a Buyzaar Mart franchise in Greater Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum investment starts from ₹15 Lakh for a Mini Mart format covering 600 to 1,000 sq. ft. This includes opening stock, store interior, POS software fee, franchise fee inclusive of 18% GST, and a refundable security deposit. Super Mart and Hyper Mart investments vary based on store size.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior retail or business experience to get a Buyzaar Mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No prior experience is needed. The Buyzaar Mart FOCM model means the company manages operations, supply chain, and technology. The brand also provides complete staff training and ongoing operational support from day one.",
      },
    },
    {
      "@type": "Question",
      name: "What is the FOCM model and how does it benefit me as a franchisee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM stands for Franchise Owned, Company Managed. You own the store and the investment while Buyzaar manages procurement, POS technology, branding, marketing, and backend operations. This significantly reduces operational risk and is ideal for first-time business owners.",
      },
    },
    {
      "@type": "Question",
      name: "What gross margin can I expect from a Buyzaar Mart store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyzaar Mart franchises are designed to deliver an effective gross margin of 18 to 20% consistently. Actual earnings depend on store size, location, footfall, and operational efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if stock expires or gets damaged in my store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Buyzaar Mart offers hassle-free inventory assurance. Expired and damaged goods are taken back by the company. This protects the franchisee's capital and eliminates one of the biggest hidden risks in grocery retail.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to open a Buyzaar Mart store after applying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The process involves three steps: inquiry and response within 24 hours, documentation and agreement signing, and store setup and launch. The exact timeline depends on the store format and space readiness, but the process is designed to be fast and fully supported.",
      },
    },
    {
      "@type": "Question",
      name: "Which store format is best suited for a Greater Noida residential sector?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a society-level or lane-facing shop in a residential sector, the Mini Mart format of 600 to 1,000 sq. ft. is ideal. For a main sector market location with higher footfall, the Super Mart format of 1,001 to 3,000 sq. ft. offers better category depth and revenue potential. For high-traffic commercial zones, the Hyper Mart format of 3,001 to 8,000 sq. ft. is recommended.",
      },
    },
  ],
};

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1">
          <div className="max-w-4xl space-y-4 font-serif font-medium leading-relaxed text-gray-700">
            <h1 className="mt-8 text-2xl font-medium text-gray-900 sm:text-3xl">
              Low Investment Franchise in Greater Noida &mdash; Start Your Own
              Buyzaar Mart Today
            </h1>

            <p>
              Greater Noida is one of the fastest-growing cities in North India.
              With a booming residential population, expanding IT corridors,
              upcoming metro connectivity, and hundreds of new housing societies
              being added every year, the demand for organised retail is at an
              all-time high.
            </p>

            <p>
              Yet, a large gap remains between unorganised kirana stores and
              big-box hypermarkets. This gap is exactly where The Buyzaar Mart
              franchise opportunity sits &mdash; and it is available right now
              to aspiring entrepreneurs in Greater Noida at a genuinely low
              investment starting from ₹15 Lakh.
            </p>

            <p>
              If you have been looking for a low investment franchise in Greater
              Noida that combines a proven business model, end-to-end brand
              support, a recognisable retail identity, and honest returns, The
              Buyzaar Mart is built precisely for you.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Greater Noida Is the Perfect Market for a Grocery Franchise
            </h2>

            <p>
              Greater Noida has witnessed explosive urban growth over the past
              decade. Sectors like Omega, Gamma, Beta, Zeta, Mu, Alpha, and the
              Expressway belt are packed with working professionals, nuclear
              families, and first-generation homeowners who shop regularly and
              expect quality, affordability, and convenience &mdash; all under
              one roof.
            </p>

            <p>Here is why the timing is ideal:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Population density is rising sharply in new residential sectors,
                creating consistent daily footfall for grocery and FMCG retail.
              </li>
              <li>
                Organised retail penetration is still below 30% in peripheral
                pockets of Greater Noida, leaving enormous room for a
                well-branded neighbourhood supermart to dominate its locality.
              </li>
              <li>
                Per-capita spending on daily essentials in Greater Noida is
                significantly higher than in tier-2 towns, ensuring stronger
                basket sizes and better margins.
              </li>
              <li>
                Infrastructure investment &mdash; Jewar airport, Yamuna
                Expressway development, and metro Phase 2 &mdash; is driving new
                commercial activity and making the city even more attractive for
                retail entrepreneurs.
              </li>
              <li>
                The rise of dual-income households means both partners are too
                time-pressed for multiple kirana trips. A well-stocked,
                organised store nearby captures this segment immediately.
              </li>
            </ul>

            <p>
              In this environment, The Buyzaar Mart franchise model offers a
              rare combination: low capital requirement, strong brand backing,
              and a market hungry for organised neighbourhood retail.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Franchise Model: FOCM
            </h2>

            <p>
              The Franchise Owned, Company Managed (FOCM) model is what sets The
              Buyzaar Mart apart from a typical FOFO (Franchise Owned, Franchise
              Operated) setup where the owner is largely left to manage
              everything alone.
            </p>

            <p>Under the FOCM model:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                You Own: The investment, the store, and the income generated.
              </li>
              <li>
                Buyzaar Manages: Procurement and supply chain, store layout and
                branding, POS software and billing systems, staff training,
                marketing campaigns (both digital and hyper-local), inventory
                replenishment, and backend operational support.
              </li>
            </ul>

            <p>
              This is a major advantage for entrepreneurs in Greater Noida who
              may be investing in retail for the first time. You do not need
              prior experience in grocery retail, supply chain management, or
              merchandising.
            </p>

            <p>
              Buyzaar&apos;s team handles the operational complexity so you can
              focus on growing your customer base and running a profitable
              store.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Investment Plans: Mini Mart, Super Mart &amp; Hyper Mart
            </h2>

            <p>
              The Buyzaar Mart offers three distinct franchise formats tailored
              to different space availability and investment capacities.
            </p>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600 &ndash; 1,000 Sq. Ft.)
            </h3>

            <p>
              The Mini Mart is designed for localities with limited commercial
              space &mdash; lane-facing shops, society-level outlets, or smaller
              residential sectors. It is the most accessible entry point into
              the Buyzaar franchise ecosystem.
            </p>

            <p>
              Ideal for: First-time entrepreneurs, retired professionals,
              housewives, or anyone looking for a manageable side business with
              steady returns.
            </p>

            <p>Investment components include:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Initial stock covering FMCG, grocery, and daily essentials.</li>
              <li>
                Store interior and fit-out including branded shelving, signage,
                lighting, and counters.
              </li>
              <li>POS software licence fee.</li>
              <li>Franchise fee inclusive of 18% GST.</li>
              <li>Refundable security deposit.</li>
            </ul>

            <p>
              The Mini Mart model is calibrated to break even faster due to its
              lower fixed costs and focused product range. With consistent daily
              footfall of even 80 to 100 customers in a residential sector, the
              Mini Mart can generate strong monthly gross returns aligned with
              the brand&apos;s 18 to 20% gross margin benchmark.
            </p>

            <h3 className="font-medium text-gray-900">
              Super Mart (1,001 &ndash; 3,000 Sq. Ft.)
            </h3>

            <p>
              The Super Mart is the most popular franchise format for
              entrepreneurs who want a full-service neighbourhood supermarket
              experience &mdash; wide aisles, broader product categories, and
              the ability to capture larger family basket sizes.
            </p>

            <p>
              Ideal for: Main road locations, sector market-facing shops, or
              entrepreneurs targeting a larger catchment area of 2 to 5 km
              radius.
            </p>

            <p>Investment components include:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Higher opening stock across all FMCG and grocery categories.
              </li>
              <li>Superior interior design and store layout investment.</li>
              <li>Advanced POS system with CRM integration.</li>
              <li>Franchise fee inclusive of 18% GST.</li>
              <li>Security deposit refundable.</li>
            </ul>

            <p>
              The Super Mart format allows for stocking a wider range of
              products &mdash; from staples, packaged foods, and beverages to
              personal care, home care, baby products, and health items. This
              wider range translates to better customer retention, higher
              average transaction values, and stronger monthly revenue.
            </p>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3,001 &ndash; 8,000 Sq. Ft.)
            </h3>

            <p>
              The Hyper Mart is The Buyzaar Mart&apos;s flagship large-format
              store. It is designed for entrepreneurs with access to substantial
              commercial space &mdash; either owned or leased at competitive
              rates &mdash; in high-footfall locations.
            </p>

            <p>
              Ideal for: Main commercial arteries, shopping complexes, or large
              sector markets in Greater Noida where a single destination store
              can serve 10,000+ households within a 3 to 5 km radius.
            </p>

            <p>Investment components include:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Large opening stock across all product categories.</li>
              <li>Premium store interior and customer experience design.</li>
              <li>Multi-terminal POS and full CRM ecosystem.</li>
              <li>Franchise fee inclusive of 18% GST.</li>
              <li>Security deposit refundable.</li>
            </ul>

            <p>
              The Hyper Mart format maximises brand presence and category depth.
              With 3,000 to 8,000 sq. ft. of retail floor space, a Buyzaar
              Hyper Mart can stock thousands of SKUs across groceries, FMCG,
              personal care, home care, snacks, beverages, dairy, frozen, fresh
              produce, and more &mdash; creating a one-stop-shop experience that
              competes directly with organised chains while maintaining the
              neighbourliness and pricing advantage of the Buyzaar model.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment Comparison at a Glance
            </h2>

            <div className="overflow-x-auto">
              <table className="mt-4 w-full border border-gray-200 text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                      Store Format
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                      Area (Sq. Ft.)
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                      Starting Investment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Mini Mart
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      600 &ndash; 1,000
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      From ₹15 Lakh
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Super Mart
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1,001 &ndash; 3,000
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Moderate (As per area)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Hyper Mart
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      3,001 &ndash; 8,000
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Higher (As per area)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              All investments include stock, interior, software fee, franchise
              fee (GST included), and security deposit.
            </p>

            <p>
              Use the interactive investment calculator at{" "}
              <a
                href="https://www.thebuyzaarmart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.thebuyzaarmart.com
              </a>{" "}
              to get a precise estimate for your specific store size.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart Franchise in Greater Noida
            </h2>

            <ol className="ml-4 list-inside list-decimal space-y-2">
              <li>
                Proven gross margins of 18&ndash;20%. The Buyzaar Mart model is
                designed to deliver an effective gross margin of 18 to 20%
                consistently.
              </li>
              <li>
                Hassle-free inventory assurance. Unlike independent grocery store
                owners who bear the full burden of expired or damaged stock,
                Buyzaar franchisees benefit from the brand&apos;s buyback
                assurance on expired and damaged goods.
              </li>
              <li>
                End-to-end ecosystem support. From store setup, branding, and
                staff training to hyper-local marketing campaigns, customer
                acquisition strategies, and ongoing operational support, Buyzaar
                handles the entire ecosystem.
              </li>
              <li>
                Technology-driven operations. Every Buyzaar Mart runs on a
                modern POS-enabled billing system integrated with inventory
                management and CRM.
              </li>
              <li>
                50+ trusted brand partnerships. Buyzaar&apos;s supply chain
                includes partnerships with India&apos;s most recognised FMCG
                companies such as Tata, HUL, ITC, Nestle, P&amp;G, Dabur, and
                Britannia.
              </li>
            </ol>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Start Your Buyzaar Mart Franchise in Greater Noida
            </h2>

            <p>
              The process is straightforward and transparent, with three clear
              steps:
            </p>

            <h3 className="font-medium text-gray-900">
              Step 1 &mdash; Submit an Inquiry
            </h3>

            <p>
              Visit{" "}
              <a
                href="https://www.thebuyzaarmart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.thebuyzaarmart.com
              </a>
              , fill in the inquiry form with your name, contact details, state,
              and city. The team responds within 24 hours.
            </p>

            <p>
              Alternatively, call directly at 9217991727 or email{" "}
              <a
                href="mailto:info@thebuyzaarmart.com"
                className="hover:underline"
              >
                info@thebuyzaarmart.com
              </a>
              .
            </p>

            <h3 className="font-medium text-gray-900">Step 2 &mdash; Documentation</h3>

            <p>
              Once your inquiry is accepted, the team guides you through KYC and
              legal documentation, agreement review and signing, and complete
              compliance support. The process is designed to be simple and quick
              for first-time business owners.
            </p>

            <h3 className="font-medium text-gray-900">Step 3 &mdash; Store Launch</h3>

            <p>
              With documentation complete, Buyzaar&apos;s team drives the full
              store launch &mdash; from interior setup and stock procurement to
              a local marketing campaign and customer acquisition support.
            </p>

            <p>
              You are not handed the keys and left alone; you are supported
              through the grand opening and beyond.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Is the Ideal Franchise Partner in Greater Noida
            </h2>

            <p>
              The Buyzaar Mart franchise is designed to be accessible to a wide
              range of entrepreneurs. You do not need a retail background or
              prior business experience.
            </p>

            <p>You are an ideal candidate if you are:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                A salaried professional looking to build a second income or
                transition into entrepreneurship.
              </li>
              <li>
                A housewife or homemaker with a space available in a housing
                society or sector market.
              </li>
              <li>
                A retired government or private sector employee looking for a
                dignified livelihood.
              </li>
              <li>
                A young entrepreneur who wants the backing of a proven system
                rather than starting from scratch.
              </li>
              <li>
                A family with commercial space available and looking to put it
                to productive use.
              </li>
              <li>
                A woman entrepreneur. The Buyzaar Mart actively supports
                women-led franchise ownership as part of its community mission.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Buyzaar Mart Brand Pillars
            </h2>

            <p>
              Understanding the brand you are partnering with matters. The
              Buyzaar Mart operates on four foundational brand pillars:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Simplicity &mdash; The brand removes complexity from retail
                operations, handling procurement, inventory, supply chain, and
                technology so the franchisee can focus on running their store
                and serving their community.
              </li>
              <li>
                Reliability &mdash; Timely supply, transparent processes, and a
                partner you can trust define the Buyzaar relationship with every
                franchisee.
              </li>
              <li>
                Affordability &amp; Quality &mdash; Curated product range, fair
                pricing for customers, and consistent product availability form
                the commercial promise of every store.
              </li>
              <li>
                Ownership &amp; Legacy &mdash; A Buyzaar Mart store is a family
                business. Build it, grow it, scale it, and pass it on to the
                next generation.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Greater Noida Franchise Opportunity: The Bigger Picture
            </h2>

            <p>
              India&apos;s grocery retail market is projected to cross ₹60 lakh
              crore by 2030, and the shift towards organised neighbourhood
              retail is accelerating rapidly.
            </p>

            <p>
              Greater Noida, sitting at the intersection of a growing
              middle-class base, strong infrastructure investment, and deep
              grocery retail under-penetration, is one of the most fertile
              franchise markets in NCR today.
            </p>

            <p>
              By choosing The Buyzaar Mart as your franchise partner, you are
              not just opening a shop. You are entering a structured, scalable,
              supported retail ecosystem that is designed to grow with you.
            </p>

            <p>
              Whether you start with a Mini Mart in your society and expand into
              a Super Mart in a nearby sector, or launch a Hyper Mart near Pari
              Chowk to capture mass footfall, Buyzaar&apos;s three-format model
              gives you the flexibility to scale your investment as your
              confidence and revenue grow.
            </p>

            <p>
              The retail revolution in Greater Noida has already started. The
              question is whether you will lead it in your locality &mdash; or
              watch someone else do it.
            </p>

            <p>
              Apply now at{" "}
              <a
                href="https://www.thebuyzaarmart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.thebuyzaarmart.com
              </a>{" "}
              or call 9217991727.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the minimum investment to start a Buyzaar Mart
                  franchise in Greater Noida?
                </h3>
                <p className="mt-2">
                  The minimum investment starts from ₹15 Lakh for a Mini Mart
                  format (600&ndash;1,000 sq. ft.). This includes opening stock,
                  store interior, POS software fee, franchise fee (inclusive of
                  18% GST), and a refundable security deposit. Super Mart and
                  Hyper Mart investments vary based on store size. Use the
                  investment calculator at{" "}
                  <a
                    href="https://www.thebuyzaarmart.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    www.thebuyzaarmart.com
                  </a>{" "}
                  for a precise estimate.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. Do I need prior retail or business experience to get a
                  Buyzaar Mart franchise?
                </h3>
                <p className="mt-2">
                  No prior experience is needed. The Buyzaar Mart&apos;s FOCM
                  model means the company manages operations, supply chain, and
                  technology. The brand also provides complete staff training
                  and ongoing operational support from day one.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. What is the FOCM model and how does it benefit me as a
                  franchisee?
                </h3>
                <p className="mt-2">
                  FOCM stands for Franchise Owned, Company Managed. You own the
                  store and the investment while Buyzaar manages procurement,
                  POS technology, branding, marketing, and backend operations.
                  This significantly reduces operational risk and is ideal for
                  first-time business owners.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. What gross margin can I expect from a Buyzaar Mart store?
                </h3>
                <p className="mt-2">
                  Buyzaar Mart franchises are designed to deliver an effective
                  gross margin of 18&ndash;20% consistently. Actual earnings
                  depend on store size, location, footfall, and operational
                  efficiency.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. What happens if stock expires or gets damaged in my store?
                </h3>
                <p className="mt-2">
                  The Buyzaar Mart offers hassle-free inventory assurance.
                  Expired and damaged goods are taken back by the company. This
                  protects the franchisee&apos;s capital and eliminates one of
                  the biggest hidden risks in grocery retail.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. How long does it take to open a Buyzaar Mart store after
                  applying?
                </h3>
                <p className="mt-2">
                  The process involves three steps: inquiry and response within
                  24 hours, documentation and agreement signing, and store setup
                  and launch. The exact timeline depends on the store format and
                  space readiness, but the process is designed to be fast and
                  fully supported.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. Which store format is best suited for a Greater Noida
                  residential sector?
                </h3>
                <p className="mt-2">
                  For a society-level or lane-facing shop in a residential
                  sector, the Mini Mart (600&ndash;1,000 sq. ft.) is ideal. For
                  a main sector market location with higher footfall, the Super
                  Mart (1,001&ndash;3,000 sq. ft.) offers better category depth
                  and revenue potential. For high-traffic commercial zones, the
                  Hyper Mart (3,001&ndash;8,000 sq. ft.) is recommended.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                The Right Time. The Right Brand. The Right City.
              </h2>

              <p className="mb-4 text-gray-800">
                Greater Noida is growing. Its residents are ready for better
                retail. And The Buyzaar Mart is the brand that can help you
                deliver it &mdash; with a low investment, a complete support
                system, a proven model, and a genuine community-first approach.
              </p>

              <p className="mb-4 text-gray-800">
                You bring the space and the commitment. We bring the brand, the
                systems, the supply chain, and the support.
              </p>

              <p className="mb-4 text-gray-800">
                Apply today at{" "}
                <a
                  href="https://www.thebuyzaarmart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.thebuyzaarmart.com
                </a>{" "}
                and open your Buyzaar Mart retail store franchise in Greater
                Noida.
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">📞 Phone / WhatsApp:</span>{" "}
                9217991727
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Business Hours:</span> Monday to
                Saturday, 10:00 AM &ndash; 6:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="greater-noida"
            currentSlug="/greater-noida/low-investment-franchise-in-greater-noida"
          />
        </div>

        <div className="order-2 w-full p-8 lg:order-2 lg:w-[500px]">
          <div className="lg:sticky lg:top-28">
            <FranchiseEnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;