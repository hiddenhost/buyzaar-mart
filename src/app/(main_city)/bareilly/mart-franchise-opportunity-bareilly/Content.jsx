import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Buyzaar Mart – Mart Franchise Opportunity in Bareilly",
  description:
    "The Buyzaar Mart offers mart franchise opportunities in Bareilly with a tech-enabled FOCM model, investment starting from approximately ₹15 Lakh, FMCG brand partnerships, POS billing, CRM tools, and end-to-end support.",
  url: "https://www.thebuyzaarmart.com/bareilly/mart-franchise-opportunity-in-bareilly",
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
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Buyzaar Mart Franchise Formats",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart Franchise",
        description:
          "Neighbourhood mart franchise format for 600 to 1000 square feet starting from approximately ₹15 Lakh",
      },
      {
        "@type": "Offer",
        name: "Super Mart Franchise",
        description:
          "Retail franchise format for larger commercial and residential locations",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart Franchise",
        description:
          "Large-format supermarket franchise for high-traffic locations",
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
      name: "What is the total investment required for a Mini Mart franchise in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The total investment for a Buyzaar Mart Mini Mart in Bareilly ranges from approximately ₹15 Lakh to ₹25 Lakh covering franchise fee, security deposit, interior setup, POS software, and opening stock.",
      },
    },
    {
      "@type": "Question",
      name: "Is the security deposit refundable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The security deposit is refundable at the time of franchise closure or transition, subject to the terms of the franchise agreement.",
      },
    },
    {
      "@type": "Question",
      name: "What gross margin can I earn from a Buyzaar Mart Mini Mart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Buyzaar Mart offers an effective gross margin of 18 to 20 percent on the product range, supported by direct FMCG brand partnerships.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the opening stock investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Opening stock covers a complete range of daily essentials including staples, packaged foods, beverages, personal care, household cleaning, baby care, and health products sourced through Buyzaar Mart's FMCG supply chain.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience to run a Buyzaar Mart franchise in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No prior retail experience is required. The Buyzaar Mart provides comprehensive pre-launch training and ongoing operational support covering store management, billing, inventory, and customer service.",
      },
    },
    {
      "@type": "Question",
      name: "How long before I recover my Mini Mart investment in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At standard footfall and sales levels for a well-located Mini Mart in Bareilly, many franchise partners may expect investment recovery within approximately 18 to 30 months of operations.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for the Buyzaar Mart mart franchise opportunity in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit www.thebuyzaarmart.com, fill in the franchise inquiry form, or call +91 9217991727 or email info@thebuyzaarmart.com. The team responds within 24 hours.",
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
              The Mart Franchise Opportunity That Bareilly Has Been Waiting For
            </h1>

            <p>
              Bareilly is growing fast. As one of Uttar Pradesh&apos;s most
              strategically located tier-2 cities, it sits at the commercial
              heart of the Rohilkhand region with a population crossing 10 lakh
              and residential expansion happening in every direction.
            </p>

            <p>
              New colonies are coming up. Working families are multiplying.
              Consumer spending on daily essentials is rising month on month.
            </p>

            <p>
              And yet, organized retail is still catching up. Most of
              Bareilly&apos;s grocery and daily needs market remains in the hands
              of unorganized kirana stores that offer no consistency, no
              technology, no brand identity, and no system. That gap is not just
              a market observation, it is a business opportunity worth acting on
              right now.
            </p>

            <p>
              The Buyzaar Mart, a rapidly growing neighbourhood supermarket
              franchise brand from Noida, is offering exactly that opportunity
              to entrepreneurs in Bareilly. With a proven Franchise Owned
              Company Managed (FOCM) model, an investment entry point starting
              from ₹15 Lakh for the Mini Mart format, partnerships with 50+
              leading FMCG brands, and a complete end-to-end operational support
              system, The Buyzaar Mart is one of the most well-structured mart
              franchise opportunities available in Bareilly today.
            </p>

            <p>
              This article covers everything you need to know, the brand, the
              market, the model, and most importantly, the complete investment
              breakdown for the Mini Mart format, so you can make a fully
              informed decision before taking your first step.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why a Mart Franchise Opportunity in Bareilly Makes Strong Business
              Sense
            </h2>

            <p>
              Before you invest in any business, you need to validate the
              market. Bareilly does not just pass the test, it clears it with
              significant margin.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Population and Density:</span>{" "}
                Bareilly&apos;s urban population of over 10 lakh, spread across
                dense residential localities, creates a continuous and
                high-volume demand for daily essentials. Unlike seasonal
                businesses, a mart franchise selling groceries and FMCG products
                sees steady footfall every single day of the year.
              </li>
              <li>
                <span className="font-semibold">
                  Underserved Organized Retail Market:
                </span>{" "}
                National organized retail chains have largely concentrated on
                metros and large cities. Tier-2 cities like Bareilly remain
                massively underserved by branded, organized neighbourhood
                stores. This creates a rare first-mover advantage for franchise
                investors who enter the market now, before competition
                intensifies.
              </li>
              <li>
                <span className="font-semibold">
                  Growing Middle-Class Consumer Base:
                </span>{" "}
                Bareilly&apos;s middle class is expanding and increasingly
                aspirational. Today&apos;s Bareilly consumer wants branded FMCG
                products, fair pricing, clean store environments, and reliable
                availability, exactly what a Buyzaar Mart franchise delivers.
                The kirana store simply cannot match this expectation.
              </li>
              <li>
                <span className="font-semibold">
                  Stable, Recession-Proof Demand:
                </span>{" "}
                Groceries, personal care products, and household essentials are
                not discretionary purchases. They are bought by every household,
                every week, regardless of economic conditions. A mart franchise
                focused on daily needs is among the most recession-proof
                business models in existence.
              </li>
              <li>
                <span className="font-semibold">
                  Expanding Residential Infrastructure:
                </span>{" "}
                Areas like Rajendra Nagar, Izzatnagar, Nawabganj, Rithora Road,
                Faridpur Road, and Civil Lines are seeing rapid residential
                growth in Bareilly. Each new residential cluster is a fresh
                catchment area waiting for a reliable neighbourhood mart
                franchise to serve it.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              About The Buyzaar Mart — The Brand Behind the Opportunity
            </h2>

            <p>
              The Buyzaar Mart is not a new concept built on untested ideas. It
              is an operational, compliance-registered, tech-enabled
              neighbourhood supermarket franchise network headquartered in
              Sector-6, Noida, Uttar Pradesh, already running stores across
              multiple North Indian cities.
            </p>

            <p>
              The brand&apos;s mission is straightforward and powerful, to
              empower communities through retail ownership by enabling
              individuals to build dignified livelihoods running neighbourhood
              stores that deliver fairness, affordability, and convenience.
            </p>

            <p>
              The Buyzaar Mart carries full regulatory credibility. It is FSSAI
              Licensed, GST Registered, and MSME Certified. These are not just
              badges, they represent a brand that operates within India&apos;s
              full legal and compliance framework, which protects every
              franchise partner from day one.
            </p>

            <p>
              Current operational stores are live in Noida, Gangoh, Behat, and
              Bahadrabad, with upcoming stores in Ghaziabad. Bareilly is firmly
              on the expansion roadmap as a priority tier-2 market in Uttar
              Pradesh.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The FOCM Franchise Model — Why It Works for Bareilly Entrepreneurs
            </h2>

            <p>
              The Buyzaar Mart operates on the FOCM, Franchise Owned Company
              Managed model. Understanding this model is key to understanding
              why it is particularly well-suited for first-time business owners
              in Bareilly.
            </p>

            <p>
              Under the FOCM model, the franchise investment, store asset, and
              business ownership belong entirely to the franchisee. The
              franchisee is the owner. However, the operational systems, supply
              chain infrastructure, technology platforms, store design
              standards, marketing frameworks, training programs, and ongoing
              management support are all provided and maintained by The Buyzaar
              Mart&apos;s corporate team.
            </p>

            <p>
              What this means in practice is simple. You do not need to figure
              out suppliers, negotiate FMCG brand deals, build billing
              software, design your store, create a marketing plan, or develop
              operational processes from scratch. All of this is ready for you
              on day one. You invest, you own, and you operate within a proven
              system with a professional team supporting every step.
            </p>

            <p>
              For an entrepreneur in Bareilly who may not have prior retail
              experience but has capital, ambition, and a good location, the
              FOCM model significantly de-risks the investment while preserving
              full ownership and profit rights.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Mini Mart Format — The Perfect Entry Point for Bareilly
            </h2>

            <p>
              The Buyzaar Mart Mini Mart is the most accessible format in the
              franchise lineup and the ideal starting point for most
              entrepreneurs in Bareilly. It is a neighbourhood-level mart
              designed for residential colonies, local market pockets, and
              community-level commercial spots.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Store Size:</span> 600 to 1,000
                square feet
              </li>
              <li>
                <span className="font-semibold">Target Catchment:</span> 600 to
                1,000 households within a 1 to 2 km radius
              </li>
              <li>
                <span className="font-semibold">Daily Footfall Target:</span> 80
                to 150 customers per day
              </li>
              <li>
                <span className="font-semibold">Product Range:</span> Curated
                fast-moving daily essentials, FMCG brands, groceries, packaged
                foods, beverages, personal care, and household items
              </li>
            </ul>

            <p>
              The Mini Mart is compact enough to be manageable for a first-time
              franchise owner, yet large enough to stock a comprehensive daily
              needs range that covers every regular household purchase. It is
              the mart format most suited to Bareilly&apos;s dense residential
              neighbourhoods where consumers want a well-stocked, branded store
              within walking or short driving distance.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Mini Mart Investment Breakdown — Full Transparency Before You
              Invest
            </h2>

            <p>
              The Buyzaar Mart believes in complete investment transparency.
              Every prospective franchise partner in Bareilly deserves to know
              exactly where their money goes before signing any agreement. Here
              is the detailed investment breakdown for the Mini Mart format:
            </p>

            <h3 className="font-medium text-gray-900">
              1. Franchise Fee — ₹2,95,000
            </h3>
            <p>
              The franchise fee is the one-time cost paid to The Buyzaar Mart
              for the right to use the brand name, system, and operational
              framework. It covers your access to the FOCM model, brand
              identity, supply chain integration, and the full support
              infrastructure. The 18% GST is applied as per applicable Indian
              tax regulations.
            </p>
            <p>
              This is not a recurring annual fee. It is a one-time investment
              that gives you access to the Buyzaar Mart franchise system for
              your store.
            </p>

            <h3 className="font-medium text-gray-900">
              2. Security Deposit — ₹1,42,857
            </h3>
            <p>
              The security deposit is a refundable amount held by The Buyzaar
              Mart as a financial commitment signal from the franchisee. It is
              returned to you at the time of franchise closure or transition,
              subject to compliance with the franchise agreement terms.
            </p>
            <p>
              This amount is not an expense. It is a returnable capital
              commitment that secures your position as an active Buyzaar Mart
              franchise partner.
            </p>

            <h3 className="font-medium text-gray-900">
              3. Interior and Store Setup — ₹9,00,000
            </h3>
            <p>
              The interior investment covers the physical transformation of your
              raw space into a professional, branded Buyzaar Mart store.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Shelving units, racks, and display fixtures</li>
              <li>
                Branded signage, fascia board, and store identity elements
              </li>
              <li>
                Flooring, lighting, and electrical fittings as per store design
                standards
              </li>
              <li>Billing counter setup and POS hardware integration</li>
              <li>
                Cold storage or refrigeration units, where applicable for your
                product range
              </li>
              <li>
                Ceiling and wall treatment to match Buyzaar Mart&apos;s uniform
                store aesthetic
              </li>
            </ul>

            <p>
              The exact cost within this range depends on the current condition
              of your space, the specific location in Bareilly, and the final
              square footage of the store. The Buyzaar Mart team provides a
              site-specific interior estimate after location inspection.
            </p>

            <h3 className="font-medium text-gray-900">
              4. POS Software and Technology Fee — ₹50,000
            </h3>
            <p>
              Every Buyzaar Mart store operates on a cloud-based Point-of-Sale
              and inventory management software system. The technology fee
              covers:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>POS billing software licence</li>
              <li>Inventory management module</li>
              <li>Sales reporting and analytics dashboard</li>
              <li>CRM integration</li>
              <li>Staff access and training on the platform</li>
              <li>Initial technical setup and go-live support</li>
            </ul>

            <p>
              This is the technology backbone of your store. Without a proper
              POS and inventory system, daily needs retail becomes difficult to
              manage at scale. The Buyzaar Mart&apos;s software system is
              already tested across multiple stores, so you inherit a
              battle-tested platform from day one.
            </p>

            <h3 className="font-medium text-gray-900">
              5. Opening Stock — ₹9,00,000
            </h3>
            <p>
              The opening stock is the largest single component of your Mini
              Mart investment, and rightly so. It is the product inventory that
              fills your shelves and generates revenue from the very first day
              of operations. The opening stock investment covers:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Staple groceries, atta, rice, dal, edible oil, sugar, salt, and
                spices
              </li>
              <li>
                Packaged and processed foods, biscuits, noodles, snacks,
                breakfast cereals, and ready-to-eat items
              </li>
              <li>
                Beverages, juices, cold drinks, energy drinks, water, tea, and
                coffee
              </li>
              <li>
                Personal care and hygiene, soaps, shampoos, conditioners, face
                wash, toothpaste, and deodorants
              </li>
              <li>
                Household cleaning, detergents, dishwash, floor cleaners, and
                toilet cleaners
              </li>
              <li>Baby care products</li>
              <li>
                Health and wellness, OTC nutrition, protein supplements, and
                Ayurvedic products
              </li>
            </ul>

            <p>
              All stock is sourced through The Buyzaar Mart&apos;s established
              supply chain, which includes direct partnerships with 50+ leading
              FMCG brands such as HUL, ITC, Nestlé, Britannia, P&amp;G, Dabur,
              Godrej, Tata Consumer, Patanjali, Parle, Coca-Cola, Marico,
              Reckitt, Emami, Himalaya, Adani Wilmar, and many more. This
              direct sourcing ensures competitive pricing and margin protection.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Receive Beyond the Investment — The Full Support
              Ecosystem
            </h2>

            <p>
              The investment figures above tell you the cost. But the real value
              of a Buyzaar Mart mart franchise opportunity in Bareilly lies in
              what you receive after paying that cost.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Pre-Launch Support:</span> Site
                selection guidance, interior design execution, stock planning,
                POS setup, staff recruitment support, and a full training
                program before your store opens.
              </li>
              <li>
                <span className="font-semibold">
                  Grand Opening Marketing:
                </span>{" "}
                A complete launch marketing campaign including local area
                advertising, social media activation, promotional offers, and
                customer acquisition activities to ensure strong footfall on day
                one.
              </li>
              <li>
                <span className="font-semibold">
                  Supply Chain and Restocking:
                </span>{" "}
                Ongoing stock replenishment through The Buyzaar Mart&apos;s
                established FMCG supply chain, ensuring your shelves are never
                empty and your stock is sourced at the best available margin.
              </li>
              <li>
                <span className="font-semibold">
                  Operational Support and Audits:
                </span>{" "}
                Regular store audits, performance reviews, and ongoing
                operational guidance from The Buyzaar Mart&apos;s field support
                team, helping keep your store running at its best.
              </li>
              <li>
                <span className="font-semibold">
                  Marketing and Brand Campaigns:
                </span>{" "}
                Participation in national and regional brand promotions,
                seasonal marketing campaigns, digital presence management, and
                co-branded advertising, giving your Bareilly store visibility
                far beyond what an independent kirana could achieve.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Secure Your Mart Franchise Opportunity in Bareilly — 3
              Simple Steps
            </h2>

            <h3 className="font-medium text-gray-900">
              Step 1 — Submit an Inquiry
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
              and fill in the franchise inquiry form with your full name, phone
              number, city (Bareilly), and any specific questions you have. You
              will receive a response within 24 hours.
            </p>

            <h3 className="font-medium text-gray-900">
              Step 2 — Documentation and Agreement
            </h3>
            <p>
              The Buyzaar Mart team will guide you through KYC verification,
              legal documentation, franchise agreement review, and formal
              signing. Compliance support is provided at every stage.
            </p>

            <h3 className="font-medium text-gray-900">
              Step 3 — Store Launch
            </h3>
            <p>
              After agreements are in place, the store setup process begins,
              location finalization, interior execution, stock loading, POS
              installation, team training, and grand opening with full marketing
              support.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FAQs — Mart Franchise Opportunity in Bareilly by The Buyzaar Mart
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the total investment required for a Mini Mart
                  franchise in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  The total investment for a Buyzaar Mart Mini Mart in Bareilly
                  ranges from approximately ₹15 Lakh to ₹25 Lakh covering
                  franchise fee, security deposit, interior setup, POS software,
                  and opening stock. The commonly cited entry point is ₹15
                  Lakh.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. Is the security deposit refundable?
                </h3>
                <p className="mt-2 text-gray-700">
                  Yes. The security deposit is refundable at the time of
                  franchise closure or transition, subject to the terms of the
                  franchise agreement.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. What gross margin can I earn from a Buyzaar Mart Mini
                  Mart?
                </h3>
                <p className="mt-2 text-gray-700">
                  The Buyzaar Mart offers an effective gross margin of 18 to 20
                  percent on the product range, supported by direct FMCG brand
                  partnerships that help protect margins.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. What is included in the opening stock investment?
                </h3>
                <p className="mt-2 text-gray-700">
                  Opening stock covers a complete range of daily essentials,
                  including staples, packaged foods, beverages, personal care,
                  household cleaning, baby care, and health products, all
                  sourced through Buyzaar Mart&apos;s FMCG supply chain.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. Do I need retail experience to run a Buyzaar Mart
                  franchise in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  No prior retail experience is required. The Buyzaar Mart
                  provides comprehensive pre-launch training and ongoing
                  operational support covering store management, billing,
                  inventory, and customer service.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. How long before I recover my Mini Mart investment in
                  Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  At standard footfall and sales levels for a well-located Mini
                  Mart in Bareilly, many franchise partners may expect full
                  investment recovery within approximately 18 to 30 months of
                  operations.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. How do I apply for the Buyzaar Mart mart franchise
                  opportunity in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  Visit{" "}
                  <a
                    href="https://www.thebuyzaarmart.com"
                    className="font-semibold text-green-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.thebuyzaarmart.com
                  </a>
                  , fill in the franchise inquiry form, or call{" "}
                  <a
                    href="tel:+919217991727"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    +91 9217991727
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:info@thebuyzaarmart.com"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    info@thebuyzaarmart.com
                  </a>
                  . The team responds within 24 hours.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                The Mart Franchise Opportunity in Bareilly Starts Here
              </h2>

              <p className="mb-4 text-gray-800">
                The Mini Mart format, with a total investment range of ₹15 to
                ₹25 Lakh, a gross margin of 18 to 20 percent, and a projected
                payback period of 18 to 30 months, offers Bareilly
                entrepreneurs a genuinely accessible and financially sound entry
                into organized retail. You are not just buying a franchise, you
                are building a neighbourhood institution that your community
                relies on every single day.
              </p>

              <p className="mb-4 text-gray-800">
                The opportunity exists. The brand is ready. The system is
                proven. The only missing piece is you.
              </p>

              <p className="mb-4 text-gray-800">
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
                today and take the first step toward owning your Buyzaar Mart
                franchise in Bareilly.
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
                <span className="font-semibold">📞Phone / WhatsApp:</span>{" "}
                <a
                  href="tel:+919217991727"
                  className="font-semibold text-green-600 hover:underline"
                >
                  9217991727
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
            currentSlug="/bareilly/mart-franchise-opportunity-in-bareilly"
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