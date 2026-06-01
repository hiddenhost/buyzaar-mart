import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Buyzaar Mart – Retail Business Franchise in Bareilly",
  description:
    "The Buyzaar Mart offers retail business franchise opportunities in Bareilly with a tech-enabled FOCM model, Mini Mart investment starting from approximately ₹15 Lakh, FMCG brand partnerships, POS billing, CRM tools, and end-to-end support.",
  url: "https://www.thebuyzaarmart.com/bareilly/retail-business-franchise-in-bareilly",
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
          "Neighbourhood retail franchise format for 600 to 1000 square feet starting from approximately ₹15 Lakh",
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
      name: "What is the total Mini Mart investment for a Buyzaar Mart retail franchise in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The total Mini Mart investment is commonly presented in the range of approximately ₹15 Lakh to ₹22.87 Lakh depending on store size, location condition, and stock planning.",
      },
    },
    {
      "@type": "Question",
      name: "Is the security deposit refunded when I exit the franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The security deposit is described as refundable at franchise closure or transition, subject to compliance with the terms of the franchise agreement.",
      },
    },
    {
      "@type": "Question",
      name: "What gross margin does The Buyzaar Mart retail franchise offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The brand states an effective gross margin of 18 to 20 percent across its product range, supported by direct FMCG brand partnerships.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to recover the Mini Mart investment in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many well-managed Mini Mart franchise stores in comparable North Indian markets may target investment recovery within approximately 18 to 30 months, depending on location, footfall, and operating efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "What FMCG brands will my Bareilly retail franchise store carry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The store may carry products from 50 or more brands including HUL, ITC, Nestlé, Britannia, P and G, Dabur, Godrej, Tata Consumer, Patanjali, Parle, Coca-Cola, Marico, Reckitt, Emami, Himalaya, and Adani Wilmar.",
      },
    },
    {
      "@type": "Question",
      name: "What does the franchise fee cover in the Mini Mart investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The franchise fee covers the right to use The Buyzaar Mart brand, access to the FOCM operational model, supply chain integration, support systems, and technology platform access.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a retail business franchise in Bareilly with The Buyzaar Mart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit thebuyzaarmart.com and submit the franchise inquiry form, or contact the team by phone or email for the next steps.",
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
              The Retail Business Franchise Opportunity Bareilly Cannot Afford
              to Miss
            </h1>

            <p>
              Retail is India&apos;s second-largest employer and one of the
              fastest-growing sectors in the national economy. Within that
              landscape, the daily needs and FMCG segment is widely seen as one
              of the most consistent and resilient categories because it is
              driven by regular household purchasing.
            </p>

            <p>
              Bareilly, a thriving tier-2 city and a major commercial centre of
              the Rohilkhand region in Uttar Pradesh, stands at an important
              point in its retail journey. The city&apos;s population of over 10
              lakh is growing, its middle class is expanding, residential
              development is spreading into new localities, and consumer
              aspirations are rising sharply.
            </p>

            <p>
              Yet organised retail in Bareilly still appears underdeveloped
              relative to that demand, leaving a meaningful business opportunity
              for the right entrepreneur with the right franchise partner.
            </p>

            <p>
              Whether you are a first-generation entrepreneur, a working
              professional exploring a side business, a homemaker seeking
              financial independence, or a seasoned investor looking for a
              stable retail venture, The Buyzaar Mart retail business franchise
              in Bareilly is positioned as a structured, transparent, and
              support-driven opportunity backed by a FOCM model, 50+ FMCG brand
              partnerships, and end-to-end operational support.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Bareilly&apos;s Retail Landscape — Why the Timing Is Right Now
            </h2>

            <p>
              Before committing to any retail business franchise, smart
              investors study the market. Bareilly&apos;s current retail context
              makes a strong case for organised neighbourhood retail.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">
                  A City Still Dominated by Unorganised Retail:
                </span>{" "}
                Despite being one of Uttar Pradesh&apos;s larger commercial
                cities, Bareilly&apos;s neighbourhood retail is still heavily
                dominated by kirana stores that typically operate without modern
                technology, loyalty systems, structured merchandising, or
                centralised brand support.
              </li>
              <li>
                <span className="font-semibold">
                  A Consumer Base Ready for Organised Retail:
                </span>{" "}
                Today&apos;s urban Bareilly consumer is already comfortable with
                branded products, digital payments, and modern retail formats. A
                Buyzaar Mart franchise is designed to match that expectation.
              </li>
              <li>
                <span className="font-semibold">
                  New Residential Growth Creating Fresh Catchment Zones:
                </span>{" "}
                Areas such as Civil Lines, Subhash Nagar, Nawabganj, Izzatnagar,
                Pilibhit Bypass Road, Faridpur Road, and Rithora Road are seeing
                continued residential development, creating fresh neighbourhood
                demand pockets.
              </li>
              <li>
                <span className="font-semibold">
                  Consistent Daily Demand, Limited Seasonality:
                </span>{" "}
                Grocery, FMCG, personal care, and household essentials are
                repeat-purchase categories used by households throughout the
                year.
              </li>
              <li>
                <span className="font-semibold">
                  North India&apos;s Retail Growth Engine:
                </span>{" "}
                Uttar Pradesh continues to attract organised retail interest,
                and tier-2 cities such as Bareilly can benefit from early-mover
                brand recognition and long-term loyalty.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Retail Franchise Built for Tier-2 India
            </h2>

            <p>
              The Buyzaar Mart presents its mission as empowering communities
              through retail ownership by helping individuals build sustainable
              neighbourhood stores that combine affordability, quality, and
              convenience.
            </p>

            <p>
              For franchise investors in Bareilly, this mission translates into
              a business model built around operational support, format
              flexibility, and structured launch systems.
            </p>

            <p>
              The Buyzaar Mart is presented as compliant with key Indian
              regulatory requirements, including FSSAI licensing, GST
              registration, and MSME certification.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>FSSAI Licensed — Food Safety and Standards compliance.</li>
              <li>GST Registered — Goods and Services Tax compliance.</li>
              <li>MSME Certified — MSME registration support and recognition.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The FOCM Model — Why This Retail Franchise Works for Bareilly
            </h2>

            <p>
              The engine behind The Buyzaar Mart retail business franchise is
              its FOCM model, which stands for Franchise Owned, Company Managed.
              For a Bareilly investor, this structure is meant to reduce the
              complexity of building an independent retail operation from
              scratch.
            </p>

            <p>
              Under FOCM, the franchise investment and ownership of the store
              remain with the franchisee. At the same time, operational systems,
              supply chain support, technology platforms, store design
              standards, training programs, marketing frameworks, and ongoing
              management guidance are provided by The Buyzaar Mart.
            </p>

            <p>
              This structure is positioned to deliver three major benefits:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Lower Risk:</span> You are not
                building supplier relationships, operating systems, and retail
                processes from zero.
              </li>
              <li>
                <span className="font-semibold">Faster Profitability:</span>{" "}
                Store launch begins with defined products, systems, and
                marketing support rather than a long trial-and-error phase.
              </li>
              <li>
                <span className="font-semibold">
                  Full Ownership with Professional Support:
                </span>{" "}
                You retain store ownership while operating with guidance from an
                established franchise system.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Three Retail Store Formats — Designed for Every Investor in
              Bareilly
            </h2>

            <p>
              The Buyzaar Mart offers three store formats intended to match
              different investment levels, space sizes, and location profiles in
              Bareilly.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Mini Mart (600–1000 sq ft):</span>{" "}
                The entry-level format for residential colonies, local market
                pockets, and neighbourhood sites. It is presented as the most
                suitable format for first-time franchise investors in Bareilly.
              </li>
              <li>
                <span className="font-semibold">
                  Super Mart (1001–3000 sq ft):
                </span>{" "}
                A mid-tier format for stronger commercial locations, higher
                footfall capacity, and a wider range of products.
              </li>
              <li>
                <span className="font-semibold">
                  Hyper Mart (3001–8000 sq ft):
                </span>{" "}
                A flagship format for large commercial spaces or township retail
                with the broadest product mix and higher-volume potential.
              </li>
            </ul>

            <p>
              All formats are described as having transparent investment
              structures that can be estimated using the live calculator on{" "}
              <a
                href="https://www.thebuyzaarmart.com"
                className="font-semibold text-green-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.thebuyzaarmart.com
              </a>
              .
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Product Range and Opening Stock
            </h2>

            <p>
              The opening stock is positioned as one of the most important parts
              of the investment because it determines launch readiness, category
              depth, and early customer experience.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Staple Groceries:</span> Atta,
                rice, pulses, edible oils, sugar, salt, spices, and whole
                grains.
              </li>
              <li>
                <span className="font-semibold">
                  Packaged and Processed Foods:
                </span>{" "}
                Biscuits, cookies, snacks, noodles, pasta, cereals, ready-to-eat
                foods, jams, sauces, and condiments.
              </li>
              <li>
                <span className="font-semibold">Beverages:</span> Juices,
                carbonated drinks, energy drinks, packaged water, tea, coffee,
                and health drinks.
              </li>
              <li>
                <span className="font-semibold">
                  Personal Care and Hygiene:
                </span>{" "}
                Soaps, shampoos, conditioners, face wash, moisturisers,
                toothpaste, toothbrushes, deodorants, and feminine hygiene
                products.
              </li>
              <li>
                <span className="font-semibold">Household Cleaning:</span>{" "}
                Detergents, dishwash products, floor cleaners, toilet cleaners,
                and surface sprays.
              </li>
              <li>
                <span className="font-semibold">Baby Care:</span> Diapers, baby
                wipes, baby oil, and infant-related products.
              </li>
              <li>
                <span className="font-semibold">Health and Wellness:</span> OTC
                nutrition products, protein supplements, Ayurvedic and herbal
                categories.
              </li>
            </ul>

            <p>
              The stock is described as being sourced through The Buyzaar
              Mart&apos;s direct-brand supply network, which is intended to help
              improve buying efficiency and support healthier gross margins.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Complete Mini Mart Investment Summary
            </h2>

            <p>
              Based on the figures you provided, the Mini Mart investment
              summary can be structured as follows:
            </p>

            <div className="overflow-x-auto">
              <table className="mt-2 w-full border border-gray-200 text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3">
                      Investment Component
                    </th>
                    <th className="border border-gray-200 px-4 py-3">
                      Estimated Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Franchise Fee (incl. 18% GST)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ₹2,95,000
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Security Deposit (Refundable)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ₹1,42,857
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Interior and Store Setup
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ₹9,00,000
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      POS Software and Technology
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ₹50,000
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Opening Stock
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      ₹9,00,000
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold">
                      Total Estimated Investment
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold">
                      ₹22,87,857
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The most commonly cited entry-level figure is around ₹15 Lakh for
              a smaller 600 to 700 sq ft Mini Mart in a standard residential
              neighbourhood location in Bareilly. For a more exact estimate, the
              brand directs prospects to the live calculator on{" "}
              <a
                href="https://www.thebuyzaarmart.com"
                className="font-semibold text-green-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.thebuyzaarmart.com
              </a>
              .
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Financial Returns — What Does an 18–20% Margin Mean?
            </h2>

            <p>
              The Buyzaar Mart states an effective gross margin of 18 to 20
              percent on the product mix sold through the store. For a Mini Mart
              in Bareilly, your draft frames the economics in a practical way.
            </p>

            <p>
              A well-located Mini Mart with daily footfall of 80 to 120
              customers and an average transaction value of ₹200 to ₹300 may
              generate daily sales in the range of approximately ₹16,000 to
              ₹36,000. At 18 to 20 percent gross margin, that implies daily
              gross profit of approximately ₹2,880 to ₹7,200.
            </p>

            <p>
              On a monthly basis, using 26 operating days, gross profit may fall
              in the range of roughly ₹75,000 to ₹1,87,000 before rent, staff,
              electricity, and other operating costs are deducted.
            </p>

            <p>
              Many well-managed Mini Mart stores in comparable North Indian
              markets are described as targeting investment recovery within 18
              to 30 months.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Complete Support Ecosystem — What Happens After You Invest
            </h2>

            <p>
              The ongoing value of the franchise is positioned not just in the
              initial brand license, but in the operating support that continues
              after launch.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Pre-Launch:</span> Location
                assessment, interior setup supervision, stock planning, POS
                installation, staff training, and launch preparation.
              </li>
              <li>
                <span className="font-semibold">Grand Opening:</span> Local area
                marketing, social media activity, offers, and outreach designed
                to improve day-one footfall.
              </li>
              <li>
                <span className="font-semibold">Ongoing Supply Chain:</span>{" "}
                Replenishment support through the brand&apos;s FMCG supply
                network.
              </li>
              <li>
                <span className="font-semibold">Technology Support:</span>{" "}
                Ongoing POS and CRM support, dashboard access, and technical
                assistance.
              </li>
              <li>
                <span className="font-semibold">Operational Guidance:</span>{" "}
                Store audits, performance reviews, and field support visits.
              </li>
              <li>
                <span className="font-semibold">Marketing Campaigns:</span>{" "}
                Seasonal offers, brand-led promotions, and digital marketing
                activity.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              3-Step Application Process — How to Start Your Retail Franchise in
              Bareilly
            </h2>

            <h3 className="font-medium text-gray-900">
              Step 1 — Submit Inquiry
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
              and fill in the franchise inquiry form with your name, contact
              number, city, and preferred store format.
            </p>

            <h3 className="font-medium text-gray-900">
              Step 2 — Documentation
            </h3>
            <p>
              KYC verification, compliance checks, franchise agreement review,
              and formal signing are handled with support from The Buyzaar Mart
              team.
            </p>

            <h3 className="font-medium text-gray-900">Step 3 — Launch</h3>
            <p>
              The launch stage covers store setup, interior execution, stock
              loading, POS installation, team training, and opening-day
              marketing support.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FAQs — Retail Business Franchise in Bareilly by The Buyzaar Mart
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the total Mini Mart investment for a Buyzaar Mart
                  retail franchise in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  The investment is commonly presented in the range of
                  approximately ₹15 Lakh to ₹22.87 Lakh depending on store size,
                  location condition, and stock planning.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. Is the security deposit amount refunded when I exit the
                  franchise?
                </h3>
                <p className="mt-2 text-gray-700">
                  Yes. The security deposit is described as refundable at
                  franchise closure or transition, subject to compliance with the
                  terms of the franchise agreement.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. What gross margin does The Buyzaar Mart retail franchise
                  offer?
                </h3>
                <p className="mt-2 text-gray-700">
                  The brand states an effective gross margin of 18 to 20 percent
                  on the product range, supported by direct partnerships with 50
                  or more FMCG brands.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. How long does it take to recover the Mini Mart investment
                  in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  Many well-located Mini Mart franchise stores may target
                  investment recovery within approximately 18 to 30 months,
                  depending on footfall, location quality, and operating
                  efficiency.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. What FMCG brands will my Bareilly retail franchise store
                  carry?
                </h3>
                <p className="mt-2 text-gray-700">
                  Your store may carry products from 50+ brands including HUL,
                  ITC, Nestlé, Britannia, P&amp;G, Dabur, Godrej, Tata Consumer,
                  Patanjali, Parle, Coca-Cola, Marico, Reckitt, Emami, Himalaya,
                  and Adani Wilmar.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. What does the franchise fee cover in the Mini Mart
                  investment?
                </h3>
                <p className="mt-2 text-gray-700">
                  The franchise fee of ₹2,95,000 is presented as covering the
                  right to use The Buyzaar Mart brand, access to the FOCM
                  operating system, supply chain integration, support systems,
                  and technology platform access.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. How do I apply for a retail business franchise in Bareilly
                  with The Buyzaar Mart?
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
                  </a>{" "}
                  and submit the franchise inquiry form, or contact the team by
                  phone at{" "}
                  <a
                    href="tel:+919217991727"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    +91 9217991727
                  </a>{" "}
                  or email at{" "}
                  <a
                    href="mailto:info@thebuyzaarmart.com"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    info@thebuyzaarmart.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Your Retail Business Franchise in Bareilly Starts with The
                Buyzaar Mart
              </h2>

              <p className="mb-4 text-gray-800">
                You bring the location, the commitment, and the ambition. The
                Buyzaar Mart brings the brand, the system, the supply chain, the
                technology, and the support.
              </p>

              <p className="mb-4 text-gray-800">
                Together, this can help you build a retail business in Bareilly
                that your neighbourhood depends on and your family can be proud
                of over the long term.
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
                to apply for your Buyzaar Mart retail business franchise in
                Bareilly.
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
                <span className="font-semibold"> 📞Phone / WhatsApp:</span>{" "}
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
            currentSlug="/bareilly/retail-business-franchise-in-bareilly"
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