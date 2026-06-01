import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Buyzaar Mart – Retail Franchise in Bareilly",
  description:
    "The Buyzaar Mart offers retail franchise opportunities in Bareilly with MiniMart, SuperMart, and HyperMart formats, flexible franchise models, organised retail systems, POS billing, training, marketing support, and end-to-end operational guidance.",
  url: "https://www.thebuyzaarmart.com/bareilly/how-to-open-retail-franchise-in-bareilly",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bareilly",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Bareilly",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Buyzaar Mart Franchise Formats",
    itemListElement: [
      {
        "@type": "Offer",
        name: "MiniMart Franchise",
        description:
          "Neighbourhood retail format for 600 to 1000 square feet starting from approximately ₹15 Lakh",
      },
      {
        "@type": "Offer",
        name: "SuperMart Franchise",
        description:
          "Mid-sized organised grocery and convenience retail format for 1001 to 3000 square feet",
      },
      {
        "@type": "Offer",
        name: "HyperMart Franchise",
        description:
          "Large-format organised retail franchise for 3001 to 8000 square feet with wider product range and higher revenue potential",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum investment to open a retail franchise in Bareilly with The Buyzaar Mart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum investment starts from approximately ₹15 Lakh for a MiniMart format, covering franchise fee, interior setup, POS technology, opening stock, and security deposit.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior retail experience to open a franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Under the FOCM and FOCO models, The Buyzaar Mart provides operational support and training, so prior retail experience is not mandatory.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to open a Buyzaar Mart store in Bareilly from inquiry to launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline depends on location finalisation, documentation, and fit-out readiness, but the brand aims to move franchisees from inquiry to launch through a structured onboarding process.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between MiniMart, SuperMart, and HyperMart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MiniMart is the entry-level daily essentials format, SuperMart is a full-service neighbourhood supermarket, and HyperMart is a large-format shopping destination with the widest product range and highest revenue potential.",
      },
    },
    {
      "@type": "Question",
      name: "Can I upgrade from a MiniMart to a SuperMart later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Buyzaar Mart supports franchisees who want to scale up from MiniMart to SuperMart or expand into additional locations over time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the expected gross margin at a Buyzaar Mart franchise store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Buyzaar Mart reports an effective gross margin of 18 to 20 percent across its organised grocery and FMCG product mix.",
      },
    },
    {
      "@type": "Question",
      name: "What legal registrations are needed to open a retail franchise in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key requirements generally include FSSAI registration, GST registration, trade license, and Shop and Establishment registration. Larger formats may also require additional approvals such as a fire NOC and commercial electricity connection, depending on the premises and use case.",
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
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1">
          <div className="max-w-4xl space-y-4 font-serif font-medium leading-relaxed text-gray-700">
            <h1 className="mt-8 text-2xl font-medium text-gray-900 sm:text-3xl">
              How to Open a Retail Franchise in Bareilly — A Complete Guide by
              The Buyzaar Mart
            </h1>

            <p>
              Bareilly is quietly becoming one of the most exciting retail
              investment destinations in Uttar Pradesh. The city is large enough
              to generate serious daily consumer demand, yet still early in its
              shift from unorganised kirana retail to modern, branded
              neighbourhood stores.
            </p>

            <p>
              If you are an aspiring entrepreneur, a property owner with
              commercial space, or an investor looking for a proven and
              structured business in Bareilly, opening a retail franchise with
              The Buyzaar Mart can be a strong move at this stage of the
              market&apos;s growth.
            </p>

            <p>
              The Buyzaar Mart, described as Your Friendly Neighbourhood Store,
              is a fast-growing, FSSAI-licensed, GST-registered, and
              MSME-certified retail franchise brand headquartered in Sector 6,
              Noida. The brand is expanding across Uttar Pradesh and North India
              with MiniMart, SuperMart, and HyperMart formats alongside flexible
              franchise models such as FOCM and FOCO.
            </p>

            <p>
              This page is structured as a step-by-step guide to opening a
              retail franchise in Bareilly with The Buyzaar Mart, covering the
              market opportunity, franchise formats, business models, compliance
              requirements, and how to get started.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Bareilly Is Ready for Organised Retail Franchising
            </h2>

            <p>
              Before exploring the process, it is important to understand why
              Bareilly is increasingly attractive for organised retail.
            </p>

            <p>
              Bareilly, with a population of over 10 lakh, is one of Uttar
              Pradesh&apos;s major commercial centres and a key hub for the
              Rohilkhand region. The local economy is supported by trade,
              agriculture, government employment, healthcare, education, and a
              growing service sector.
            </p>

            <p>
              Yet the retail landscape remains overwhelmingly unorganised,
              dominated by scattered kirana stores, local mandis, and informal
              neighbourhood trade. The gap between what today&apos;s consumers
              expect and what the current retail infrastructure delivers creates
              an opening for organised players like The Buyzaar Mart.
            </p>

            <p>
              Investors who establish a retail franchise in Bareilly at this
              stage may benefit from first-mover advantage, local brand recall,
              stronger community trust, and long-term customer loyalty before
              organised competition becomes denser.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              About The Buyzaar Mart — The Brand You Are Partnering With
            </h2>

            <p>
              The Buyzaar Mart is positioned not just as a grocery store brand,
              but as a complete franchise ecosystem built for entrepreneurs in
              tier-2 and tier-3 Indian cities.
            </p>

            <p>
              The brand states that its mission is to help individuals build
              sustainable livelihoods through neighbourhood stores that combine
              fairness, affordability, and convenience.
            </p>

            <p>The operating proposition includes:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                A transparent, component-by-component investment structure.
              </li>
              <li>
                A reported effective gross margin of 18 to 20 percent on
                organised grocery and FMCG retail.
              </li>
              <li>
                Inventory support claims including return handling for expired
                and damaged goods under applicable operating policies.
              </li>
              <li>
                Technology-enabled POS billing, inventory management, and sales
                tracking.
              </li>
              <li>
                Hyper-local marketing campaigns tailored to each franchise
                location.
              </li>
              <li>
                End-to-end support from store setup to audits and performance
                reviews.
              </li>
              <li>
                A 5-year franchise agreement under FOCM and a longer-term
                agreement structure under FOCO.
              </li>
            </ul>

            <p>
              The brand also highlights an expanding store presence in places
              such as Noida, Gangoh, Behat, Bahadrabad, and Rajnagar Extension,
              along with wider expansion activity across Uttar Pradesh.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 1 — Understand the Three Retail Franchise Formats
            </h2>

            <p>
              The first major decision for a prospective investor in Bareilly is
              selecting the right store format. The Buyzaar Mart offers three
              formats with different size ranges, investment profiles, and
              revenue potential.
            </p>

            <h3 className="font-medium text-gray-900">
              The MiniMart — Your Neighbourhood Daily Essentials Store
            </h3>

            <p>
              The MiniMart is the entry-level franchise format, designed for
              compact commercial spaces in residential neighbourhoods, colony
              interiors, and local market pockets.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Store Size:</span> 600 to 1,000
                square feet.
              </li>
              <li>
                <span className="font-semibold">Investment:</span> Starting from
                approximately ₹15 Lakh, including franchise fee, interior setup,
                POS technology, opening stock, and security deposit.
              </li>
              <li>
                <span className="font-semibold">Product Range:</span> A curated
                mix of daily essentials including staples, packaged FMCG, snacks,
                personal care, and household basics.
              </li>
              <li>
                <span className="font-semibold">
                  Best Locations in Bareilly:
                </span>{" "}
                Residential mohallas, apartment clusters, colony roads, and
                smaller market areas.
              </li>
              <li>
                <span className="font-semibold">Ideal For:</span> First-time
                entrepreneurs, homemakers entering business, or investors
                starting with a smaller capital commitment.
              </li>
              <li>
                <span className="font-semibold">Key Advantage:</span> Lower
                fixed costs, lean staffing, manageable electricity bills, and
                faster route to break-even compared with larger formats.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              The SuperMart — Your Full-Service Neighbourhood Supermarket
            </h3>

            <p>
              The SuperMart is the mid-tier format and often the most balanced
              option for tier-2 city investors because it combines stronger
              revenue potential with operational manageability.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Store Size:</span> 1,001 to
                3,000 square feet.
              </li>
              <li>
                <span className="font-semibold">Investment:</span> Approximately
                ₹25 Lakh to ₹50 Lakh depending on actual size, fit-out, and
                stock planning.
              </li>
              <li>
                <span className="font-semibold">Product Range:</span> Groceries,
                packaged FMCG, beverages, personal care, home care, dairy,
                bakery, produce, snacks, stationery, and general household
                merchandise.
              </li>
              <li>
                <span className="font-semibold">
                  Best Locations in Bareilly:
                </span>{" "}
                Civil Lines, Pilibhit Bypass, Cantt area, Subhash Nagar, Ram
                Ganga Vihar, Rajendra Nagar, and strong neighbourhood roads.
              </li>
              <li>
                <span className="font-semibold">Ideal For:</span> Investors with
                moderate capital, entrepreneurs with prior business exposure, or
                property owners with mid-sized commercial space.
              </li>
              <li>
                <span className="font-semibold">Key Advantage:</span> It can
                serve complete weekly household shopping needs and drive repeat
                family visits through a wider assortment.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              The HyperMart — Your Large-Format Retail Destination
            </h3>

            <p>
              The HyperMart is the flagship format and is designed as a
              large-format neighbourhood shopping destination with broader
              category depth and stronger long-term asset value.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Store Size:</span> 3,001 to
                8,000 square feet.
              </li>
              <li>
                <span className="font-semibold">Investment:</span> Approximately
                ₹50 Lakh to ₹1.2 Crore depending on size, stock, interior, and
                POS requirements.
              </li>
              <li>
                <span className="font-semibold">Product Range:</span> A much
                wider portfolio including grocery, FMCG, frozen foods, fresh
                produce, baby care, lifestyle and home products, seasonal
                merchandise, stationery, and general merchandise.
              </li>
              <li>
                <span className="font-semibold">
                  Best Locations in Bareilly:
                </span>{" "}
                High-footfall commercial roads, standalone buildings near large
                residential clusters, educational zones, and major market
                corridors.
              </li>
              <li>
                <span className="font-semibold">Ideal For:</span> High-capital
                investors, business families, experienced operators, and
                investors aiming to build a landmark store.
              </li>
              <li>
                <span className="font-semibold">Key Advantage:</span> Larger
                customer baskets, destination shopping behaviour, and stronger
                revenue potential.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Format Comparison at a Glance
            </h2>

            <div className="overflow-x-auto">
              <table className="mt-2 w-full border border-gray-200 text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3">Format</th>
                    <th className="border border-gray-200 px-4 py-3">Size</th>
                    <th className="border border-gray-200 px-4 py-3">
                      Investment
                    </th>
                    <th className="border border-gray-200 px-4 py-3">
                      Monthly Revenue Potential
                    </th>
                    <th className="border border-gray-200 px-4 py-3">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      MiniMart
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      600–1,000 sq ft
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      From ₹15 Lakh
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ₹3L–₹8L
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Entry-level, residential
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      SuperMart
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      1,001–3,000 sq ft
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ₹25L–₹50L
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ₹8L–₹20L
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Mid-size, neighbourhood
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      HyperMart
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      3,001–8,000 sq ft
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ₹50L–₹1.2Cr
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ₹25L–₹60L+
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      Large-format, destination
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 2 — Choose Your Franchise Business Model
            </h2>

            <p>
              After choosing the format, the next decision is selecting the
              right operating model. The Buyzaar Mart presents multiple
              franchise structures designed for different investor profiles.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">
                  FOCM (Franchise Owned, Company Managed):
                </span>{" "}
                You own the store and invest in setup, while the company manages
                supply chain systems, training, billing support, marketing, and
                audits. Operational costs such as rent, electricity, and staff
                are generally borne by the franchisee. This model is often
                suitable for investors who want ownership involvement with
                professional support.
              </li>
              <li>
                <span className="font-semibold">
                  FOCO (Franchise Owned, Company Operated):
                </span>{" "}
                A more hands-off model in which the investor owns the store and
                provides capital, while the company takes deeper control of
                operations. It is usually more suitable for passive investors,
                salaried professionals, NRIs, and retired individuals.
              </li>
            </ul>

            <p>
              For many first-time investors in Bareilly, a MiniMart or
              SuperMart under FOCM, or a larger store under FOCO, may be the
              most practical starting point.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 4 — Understand the Legal and Compliance Requirements
            </h2>

            <p>
              Opening a retail franchise in Bareilly requires compliance with
              several legal and regulatory requirements. Trade licensing in
              Bareilly is handled through Nagar Nigam Bareilly, and retail
              businesses typically need permissions depending on the activity and
              premises involved. [web:103]
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">FSSAI Registration:</span>{" "}
                Required for food retail businesses and outlet-level food
                handling activity in India. [web:103]
              </li>
              <li>
                <span className="font-semibold">GST Registration:</span> Usually
                required once the business crosses the applicable turnover
                threshold and is standard for organised retail operations.
                [web:101]
              </li>
              <li>
                <span className="font-semibold">Trade License:</span> Issued by
                Nagar Nigam Bareilly for carrying out business activities within
                the city. [web:103]
              </li>
              <li>
                <span className="font-semibold">
                  Shop and Establishment Registration:
                </span>{" "}
                Generally required for retail establishments under the relevant
                state labour and commercial establishment framework. [web:99]
              </li>
              <li>
                <span className="font-semibold">
                  Additional Approvals for Larger Formats:
                </span>{" "}
                Bigger formats may also require fire-related approvals and
                suitable commercial electricity arrangements depending on the
                building and use case. [web:101]
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 5 — Go Through the Franchise Application Process
            </h2>

            <p>
              The application path is structured from first inquiry to launch.
            </p>

            <h3 className="font-medium text-gray-900">
              Inquiry Submission
            </h3>
            <p>
              Visit{" "}
              <a
                href="https://www.thebuyzaarmart.com"
                className="font-semibold text-green-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.thebuyzaarmart.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+919217991727"
                className="font-semibold text-green-600 hover:underline"
              >
                +91 9217991727
              </a>{" "}
              and share your Bareilly location preference, target format, and
              investment capacity.
            </p>

            <h3 className="font-medium text-gray-900">
              Initial Consultation
            </h3>
            <p>
              A franchise advisor can discuss your goals, review your location
              interest, and help recommend the most suitable format and business
              model.
            </p>

            <h3 className="font-medium text-gray-900">
              Site Survey and Approval
            </h3>
            <p>
              The proposed Bareilly site is typically reviewed for catchment
              quality, access, footfall potential, and suitability for the
              selected format.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 6 — Ongoing Operations and Growth
            </h2>

            <p>
              Opening the store is only the beginning. The Buyzaar Mart presents
              ongoing support in the form of operational audits, performance
              dashboards, supply chain guidance, updated marketing activity, and
              technical support.
            </p>

            <p>
              As the business grows, franchisees may expand into additional
              locations, move from MiniMart to SuperMart, or increase their
              category depth and customer reach over time.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why The Buyzaar Mart Is the Right Retail Franchise for Bareilly
            </h2>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                It is presented as a retail brand purpose-built for tier-2 and
                tier-3 cities rather than a metro-first concept.
              </li>
              <li>
                The entry investment is accessible, beginning around ₹15 Lakh
                for MiniMart according to the brand&apos;s public materials.
              </li>
              <li>
                The business model emphasises transparency, SOP-driven
                operations, audits, and support systems designed to reduce
                execution risk.
              </li>
              <li>
                The stated 18 to 20 percent gross margin and repeat-purchase
                nature of grocery retail provide a strong foundation for
                long-term consistency.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FAQs — How to Open a Retail Franchise in Bareilly
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the minimum investment to open a retail franchise
                  in Bareilly with The Buyzaar Mart?
                </h3>
                <p className="mt-2 text-gray-700">
                  The minimum investment starts at approximately ₹15 Lakh for a
                  MiniMart format, covering franchise fee, interior setup, POS
                  technology, opening stock, and security deposit.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. Do I need prior retail experience to open a franchise?
                </h3>
                <p className="mt-2 text-gray-700">
                  No. Under the FOCM and FOCO models, The Buyzaar Mart provides
                  training and operational support, so prior retail experience
                  is not mandatory.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. How long does it take to open a Buyzaar Mart store in
                  Bareilly from inquiry to launch?
                </h3>
                <p className="mt-2 text-gray-700">
                  The timeline depends on location finalisation, documentation,
                  and setup readiness, but the brand follows a structured
                  onboarding and launch process.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. What is the difference between MiniMart, SuperMart, and
                  HyperMart?
                </h3>
                <p className="mt-2 text-gray-700">
                  MiniMart is the entry-level daily essentials format.
                  SuperMart is a full-service neighbourhood supermarket.
                  HyperMart is a larger-format retail destination with the
                  widest product range and higher revenue potential.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. Can I upgrade from a MiniMart to a SuperMart later?
                </h3>
                <p className="mt-2 text-gray-700">
                  Yes. The Buyzaar Mart supports franchisees who want to scale
                  from MiniMart to SuperMart or grow into additional locations
                  over time.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. What is the expected gross margin at a Buyzaar Mart
                  franchise store?
                </h3>
                <p className="mt-2 text-gray-700">
                  The Buyzaar Mart reports an effective gross margin of 18 to 20
                  percent across its organised grocery and FMCG product mix.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. What legal registrations are needed to open a retail
                  franchise in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  Key requirements generally include FSSAI registration, GST
                  registration, trade license, and Shop and Establishment
                  registration. Larger formats may also need additional
                  approvals depending on site conditions.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Contact The Buyzaar Mart for Your Bareilly Franchise
              </h2>

              <p className="mb-4 text-gray-800">
                If you are ready to open a retail franchise in Bareilly, The
                Buyzaar Mart team can guide you through format selection,
                investment planning, site evaluation, and the onboarding
                process.
              </p>

              <p className="mb-4 text-gray-800">
                Fill in the inquiry form on the official website and take the
                first step toward building a profitable neighbourhood store in
                Bareilly.
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://www.thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.thebuyzaarmart.com
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">📞 Phone:</span>{" "}
                <a
                  href="tel:+919217991727"
                  className="font-semibold text-green-600 hover:underline"
                >
                  +91 9217991727
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Business Hours:</span> Monday to
                Saturday, 10:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="bareilly"
            currentSlug="/bareilly/how-to-open-retail-franchise-in-bareilly"
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