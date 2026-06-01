import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Buyzaar Mart – Low Investment Franchise in Bareilly",
  description:
    "The Buyzaar Mart offers low investment franchise opportunities in Bareilly with Mini Mart format starting from approximately ₹15 Lakh, FOCM model, FMCG brand partnerships, POS billing, CRM tools, and end-to-end support.",
  url: "https://www.thebuyzaarmart.com/bareilly/low-investment-franchise-in-bareilly",
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
          "Low investment neighbourhood store format for 600 to 1000 square feet starting from approximately ₹15 Lakh",
      },
      {
        "@type": "Offer",
        name: "Super Mart Franchise",
        description:
          "Retail franchise format for 1001 to 3000 square feet with a broader product range and stronger transaction volume",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart Franchise",
        description:
          "Large-format supermarket franchise for 3001 to 8000 square feet in high-traffic locations",
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
      name: "What is the exact investment required for The Buyzaar Mart low investment franchise in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Mini Mart total investment ranges from approximately ₹15 Lakh to ₹25 Lakh, covering franchise fee, refundable security deposit, interior setup, POS software, and opening stock.",
      },
    },
    {
      "@type": "Question",
      name: "Is the security deposit part of the investment refunded to me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The security deposit is refundable at franchise closure or transition, subject to compliance with the franchise agreement terms.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I recover my investment from a Mini Mart in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most well-located Mini Mart franchise partners may recover their full investment within 18 to 30 months, based on typical footfall and revenue levels in comparable North Indian markets.",
      },
    },
    {
      "@type": "Question",
      name: "What gross margin does the low investment Mini Mart franchise offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Buyzaar Mart offers an effective gross margin of 18 to 20 percent on the full product range, supported by direct FMCG brand partnerships.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a large space to open a Buyzaar Mart low investment franchise in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Mini Mart requires only 600 to 1000 square feet, which is suitable for residential localities and local market areas in Bareilly.",
      },
    },
    {
      "@type": "Question",
      name: "What ongoing support does The Buyzaar Mart provide after the store opens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ongoing support includes supply chain restocking, technology updates, operational audits, performance reviews, field support visits, and participation in marketing campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for The Buyzaar Mart low investment franchise in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit www.thebuyzaarmart.com and fill in the franchise inquiry form, or call +91 9217991727 or email info@thebuyzaarmart.com. The team responds within 24 hours.",
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
              The Low Investment Franchise in Bareilly That Actually Delivers
              Real Returns
            </h1>

            <p>
              One of the most common frustrations among aspiring entrepreneurs in
              Bareilly is the mismatch between what franchise opportunities
              promise and what they actually deliver. Many so-called low
              investment franchises either have hidden costs that inflate the
              true investment, offer no real brand support after the fee is
              paid, or operate in categories with unpredictable demand that
              makes profitability uncertain from month one.
            </p>

            <p>
              The ideal low investment franchise in Bareilly needs to satisfy
              three non-negotiable conditions. First, the investment must be
              genuinely affordable and not presented as a discounted entry that
              hides backend costs. Second, the business must operate in a
              category with consistent, recession-resistant demand. Third, the
              franchise brand must provide real operational support rather than
              just a name and a brochure.
            </p>

            <p>
              The Buyzaar Mart satisfies all three conditions cleanly. It is a
              fast-growing, tech-enabled neighbourhood supermarket franchise
              brand from Noida, Uttar Pradesh, offering a Mini Mart franchise
              format starting from approximately ₹15 Lakh, backed by a proven
              FOCM (Franchise Owned Company Managed) model, 50+ FMCG brand
              partnerships, an effective 18&ndash;20% gross margin, and a
              complete end-to-end support ecosystem.
            </p>

            <p>
              For any aspiring entrepreneur in Bareilly who wants to start a
              real, structured, brand-backed business without overcommitting
              capital, The Buyzaar Mart Mini Mart franchise stands out as one of
              the most compelling low investment franchise opportunities
              available in the city today.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Low Investment Franchise Opportunities in Bareilly Are in High
              Demand
            </h2>

            <p>
              The surge in interest around low investment franchises in Bareilly
              is not a passing trend. It reflects a fundamental shift in how the
              city&apos;s working and middle-class population thinks about
              financial security and livelihood building.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Salaried Job Insecurity:</span>{" "}
                Across Bareilly, a growing number of professionals, government
                employees, and private sector workers are looking for a business
                they can own, something that generates income independent of a
                single employer. A low investment franchise in daily needs
                retail offers recurring daily revenue that is not dependent on
                any one client, customer, or employer.
              </li>
              <li>
                <span className="font-semibold">
                  Limited Capital, High Ambition:
                </span>{" "}
                Many first-generation entrepreneurs in Bareilly do not have
                access to large capital. A low investment franchise requiring
                around ₹15 Lakh opens the door to business ownership for a much
                larger section of the city than high-investment franchise models
                do.
              </li>
              <li>
                <span className="font-semibold">
                  Risk Aversion After Bad Experiences:
                </span>{" "}
                Many local entrepreneurs who have tried independent businesses
                such as kirana stores, eateries, or trading ventures have faced
                difficulties because they operated without systems. They are not
                unwilling to invest again, but they now prefer a lower-risk
                model with operational structure and brand backing.
              </li>
              <li>
                <span className="font-semibold">Growing Consumer Market:</span>{" "}
                Bareilly&apos;s population of over 10 lakh and rapidly expanding
                residential areas create a consistently large and growing market
                for daily needs products. A low investment franchise serving
                this market benefits from strong demand fundamentals.
              </li>
              <li>
                <span className="font-semibold">
                  Access to Organised Retail Benefits Without High Capital:
                </span>{" "}
                Until recently, organised retail was accessible mainly to
                investors with crore-level capital. The Buyzaar Mart Mini Mart
                format brings the benefits of organised retail, including brand
                identity, FMCG partnerships, POS technology, CRM, and marketing,
                within an investment framework accessible to a wider range of
                Bareilly entrepreneurs.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Makes The Buyzaar Mart Mini Mart a True Low Investment
              Franchise in Bareilly
            </h2>

            <p>
              The phrase low investment is often used loosely in the franchise
              industry. Here is why The Buyzaar Mart Mini Mart genuinely
              qualifies as a low investment franchise in Bareilly and not just
              in marketing language.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">
                  Transparent Investment, No Hidden Costs:
                </span>{" "}
                The total Mini Mart investment is positioned in the range of
                approximately ₹15 Lakh to ₹25 Lakh and covers major components
                such as franchise fee, security deposit, interior setup,
                technology, and opening stock.
              </li>
              <li>
                <span className="font-semibold">
                  Refundable Security Deposit:
                </span>{" "}
                A portion of the investment is structured as a refundable
                security deposit, which reduces the effective non-refundable
                capital at risk.
              </li>
              <li>
                <span className="font-semibold">
                  Revenue-Generating Opening Stock:
                </span>{" "}
                A major investment component goes into opening stock, which is
                working capital rather than sunk cost. It begins generating
                sales and margin from the first day of operation.
              </li>
              <li>
                <span className="font-semibold">
                  No Need for Large Commercial Space:
                </span>{" "}
                The Mini Mart requires only 600 to 1000 square feet, a size that
                is relatively accessible in Bareilly&apos;s residential and local
                market areas.
              </li>
              <li>
                <span className="font-semibold">Low Break-Even Point:</span> A
                compact format, curated product range, and direct-brand supply
                chain can help the Mini Mart reach break-even with moderate
                neighbourhood footfall.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The FOCM Model and Lower Risk
            </h2>

            <p>
              The Buyzaar Mart operates on the FOCM model, Franchise Owned
              Company Managed. For a low investment franchise in Bareilly, this
              matters because it directly addresses one of the biggest risks in
              small retail businesses: operational failure caused by lack of
              systems and experience.
            </p>

            <p>
              Under FOCM, you own the franchise and its profit potential, while
              The Buyzaar Mart provides and maintains the broader operational
              framework, including supply chain, technology, store design
              standards, marketing, training, and management support. You are
              not simply buying a concept; you are entering a working system.
            </p>

            <p>
              For a Bareilly entrepreneur investing around ₹15 Lakh, possibly
              from personal savings or a bank loan, this operational safety net
              can make a major difference. It helps reduce trial-and-error
              spending and makes the investment work within a structured system
              from day one.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Mini Mart Profile
            </h2>

            <p>
              The Buyzaar Mart Mini Mart is the format specifically designed for
              the low investment segment. Here is a practical overview of what
              the Mini Mart offers in Bareilly.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Store Size:</span> 600 to 1000
                square feet, suitable for residential neighbourhood locations.
              </li>
              <li>
                <span className="font-semibold">Total Investment:</span> ₹15
                Lakh to ₹25 Lakh, with entry-level positioning from
                approximately ₹15 Lakh.
              </li>
              <li>
                <span className="font-semibold">Gross Margin:</span> Effective
                18&ndash;20% gross margin on the product range.
              </li>
              <li>
                <span className="font-semibold">Catchment Area:</span> 500 to
                1000 households within an approximate 1 to 2 km radius.
              </li>
              <li>
                <span className="font-semibold">Daily Footfall Target:</span> 80
                to 150 customers per day for a well-located neighbourhood store.
              </li>
              <li>
                <span className="font-semibold">Product Range:</span> Groceries,
                staples, packaged foods, beverages, personal care, hygiene,
                household cleaning products, baby care items, and health and
                wellness products from major FMCG brands.
              </li>
              <li>
                <span className="font-semibold">Technology:</span> Cloud-based
                POS billing, inventory management, sales analytics, and CRM
                tools.
              </li>
              <li>
                <span className="font-semibold">Staff Requirement:</span>{" "}
                Typically 2 to 3 staff members, helping keep wage costs lean.
              </li>
              <li>
                <span className="font-semibold">Payback Period:</span> Many Mini
                Mart cases are positioned around an 18 to 30 month recovery
                window depending on location and execution.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Mini Mart Investment Breakdown
            </h2>

            <div className="overflow-x-auto">
              <table className="mt-2 w-full border border-gray-200 text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3">
                      Investment Component
                    </th>
                    <th className="border border-gray-200 px-4 py-3">
                      Amount (Approx.)
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
              Each component serves a clear business purpose. The franchise fee
              provides brand access and system integration, the security deposit
              remains refundable under agreed terms, the interior investment
              professionalises the store environment, the technology investment
              supports billing and CRM, and the opening stock begins generating
              revenue from the start.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Financial Returns
            </h2>

            <p>
              For any low investment franchise decision, the most important
              question is what the capital can realistically earn. In a
              well-located Bareilly residential neighbourhood, a Mini Mart with
              steady daily footfall and reasonable basket size can build a
              meaningful monthly revenue base.
            </p>

            <p>
              With 80 to 120 customers per day and a practical average
              transaction size, daily sales can become strong enough to support a
              healthy margin structure. At an effective 18&ndash;20% gross
              margin, the gross profit generated each day can create a solid
              foundation for operating profitability once the store develops
              repeat footfall and customer loyalty.
            </p>

            <p>
              At these return levels, many investors view the full investment as
              recoverable within approximately 18 to 30 months, depending on
              location, expense control, and execution quality.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Support Ecosystem
            </h2>

            <p>
              The value of a Buyzaar Mart low investment franchise in Bareilly
              goes beyond the entry amount. Every Mini Mart partner is positioned
              to receive a full support ecosystem designed to help the store
              launch and grow in an organised way.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Pre-Launch Support:</span> Site
                selection guidance, interior design supervision, stock planning,
                POS installation, staff recruitment support, and pre-opening
                training.
              </li>
              <li>
                <span className="font-semibold">Grand Opening Campaign:</span> A
                local launch campaign with area promotions, social media
                activation, opening offers, and neighbourhood outreach.
              </li>
              <li>
                <span className="font-semibold">
                  Supply Chain and Restocking:
                </span>{" "}
                Ongoing stock replenishment through the brand&apos;s FMCG supply
                network.
              </li>
              <li>
                <span className="font-semibold">Technology Support:</span>{" "}
                Continuous POS and CRM support, remote technical guidance, and
                access to business analytics.
              </li>
              <li>
                <span className="font-semibold">Operational Guidance:</span>{" "}
                Store audits, performance reviews, and field support visits.
              </li>
              <li>
                <span className="font-semibold">Ongoing Marketing:</span>{" "}
                Participation in seasonal campaigns, brand promotions, and
                digital marketing activity.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who This Franchise Suits
            </h2>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">
                  First-Generation Entrepreneurs:
                </span>{" "}
                People starting their first business with limited capital who
                want brand backing and structured support.
              </li>
              <li>
                <span className="font-semibold">
                  Homemakers Seeking Financial Independence:
                </span>{" "}
                Those looking for a manageable retail format with practical
                investment size and neighbourhood relevance.
              </li>
              <li>
                <span className="font-semibold">
                  Salaried Professionals Diversifying Income:
                </span>{" "}
                Working professionals who want a business capable of generating
                consistent parallel income.
              </li>
              <li>
                <span className="font-semibold">Retired Individuals:</span>{" "}
                People seeking a structured business opportunity that offers both
                returns and local engagement.
              </li>
              <li>
                <span className="font-semibold">
                  Investors with a Good Location:
                </span>{" "}
                Anyone with access to a suitable 600 to 1000 square foot
                commercial or semi-commercial space in a Bareilly neighbourhood.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Apply
            </h2>

            <p>
              Starting a low investment franchise in Bareilly with The Buyzaar
              Mart follows a simple process.
            </p>

            <h3 className="font-medium text-gray-900">
              Step 1 &mdash; Submit Inquiry
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
              number, city, and preferred format. The team generally responds
              within 24 hours.
            </p>

            <h3 className="font-medium text-gray-900">
              Step 2 &mdash; Documentation and Agreement
            </h3>
            <p>
              KYC verification, legal compliance review, franchise agreement
              discussion, and formal signing are handled with support through
              each stage.
            </p>

            <h3 className="font-medium text-gray-900">
              Step 3 &mdash; Store Launch
            </h3>
            <p>
              This stage includes location finalisation, interior execution,
              stock loading, POS and CRM setup, staff training, and grand
              opening support with launch marketing.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FAQs &mdash; Low Investment Franchise in Bareilly
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the exact investment required for The Buyzaar Mart
                  low investment franchise in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  The Mini Mart total investment ranges from approximately ₹15
                  Lakh to ₹25 Lakh, covering franchise fee, refundable security
                  deposit, interior setup, POS software, and opening stock.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. Is the security deposit part of the investment refunded to
                  me?
                </h3>
                <p className="mt-2 text-gray-700">
                  Yes. The security deposit is refundable at franchise closure
                  or transition, subject to compliance with franchise agreement
                  terms.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. How quickly can I recover my investment from a Mini Mart
                  in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  Most well-located Mini Mart franchise partners may recover
                  their investment within approximately 18 to 30 months,
                  depending on footfall, execution, and operating efficiency.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. What gross margin does the low investment Mini Mart
                  franchise offer?
                </h3>
                <p className="mt-2 text-gray-700">
                  The Buyzaar Mart offers an effective gross margin of
                  18&ndash;20% on the product range, supported by direct FMCG
                  brand partnerships.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. Do I need a large space to open a Buyzaar Mart low
                  investment franchise in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  No. The Mini Mart requires only 600 to 1000 square feet, which
                  is practical for many Bareilly residential localities and
                  local market areas.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. What ongoing support does The Buyzaar Mart provide after
                  the franchise store opens in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  Ongoing support includes supply chain restocking, technology
                  updates, operational audits, performance reviews, field
                  support visits, and marketing campaign participation.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. How do I apply for The Buyzaar Mart low investment
                  franchise in Bareilly?
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
                  and fill in the franchise inquiry form, or call{" "}
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
                  .
                </p>
              </div>
            </div>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Low Investment Franchise in Bareilly That Builds a Real
              Business
            </h2>

            <p>
              Not every low investment franchise in Bareilly deserves your
              capital. Many opportunities stop at brand licensing, but The
              Buyzaar Mart positions itself differently by combining brand
              identity with a full operational system, supply chain support,
              technology, and ongoing business guidance.
            </p>

            <p>
              For entrepreneurs who want a structured retail business in a
              category with daily demand, the Mini Mart model offers a practical
              path to ownership, customer trust, and long-term growth within a
              manageable investment range.
            </p>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Low Investment Franchise in Bareilly with The Buyzaar
                Mart
              </h2>

              <p className="mb-4 text-gray-800">
                Your investment can build more than just a store. It can help
                you launch a structured retail business with professional
                systems, daily-needs demand, and support designed to help you
                grow with your neighbourhood.
              </p>

              <p className="mb-4 text-gray-800">
                Start today. Visit{" "}
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
                to apply for your Buyzaar Mart franchise in Bareilly.
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
                <span className="font-semibold">📞 Phone / WhatsApp:</span>{" "}
                <a
                  href="tel:+919217991727"
                  className="font-semibold text-green-600 hover:underline"
                >
                  9217991727
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Business Hours:</span> Monday to
                Saturday, 10:00 AM &ndash; 6:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="bareilly"
            currentSlug="/bareilly/low-investment-franchise-in-bareilly"
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