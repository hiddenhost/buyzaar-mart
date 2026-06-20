import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Buyzaar Mart - Convenience Store Franchise in Lucknow",
  description:
    "The Buyzaar Mart offers a convenience store franchise opportunity in Lucknow with Mini Mart, Super Mart, and Hyper Mart formats, FOCM and FOCO models, full store setup support, POS technology, staff training, hyper-local marketing, and inventory protection.",
  url: "https://www.thebuyzaarmart.com/lucknow/convenience-store-franchise-in-lucknow",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Lucknow",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Buyzaar Mart Convenience Store Franchise Formats in Lucknow",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart Franchise",
        description:
          "Entry-level convenience store franchise format for residential lanes, smaller localities, and compact daily-needs retail locations in Lucknow",
      },
      {
        "@type": "Offer",
        name: "Super Mart Franchise",
        description:
          "Mid-sized convenience store franchise for market areas, busy roads, and larger residential colonies in Lucknow",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart Franchise",
        description:
          "Large-format convenience and daily-needs retail franchise for high-footfall commercial areas and township projects in Lucknow",
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
      name: "What is the minimum investment to start a The Buyzaar Mart franchise in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum investment starts from approximately ₹15 lakh for a Mini Mart format. The Super Mart and Hyper Mart formats require higher investment depending on store size and location.",
      },
    },
    {
      "@type": "Question",
      name: "What is the FOCM model offered by The Buyzaar Mart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM stands for Franchise Owned Company Managed. You invest in and own the store, while The Buyzaar Mart team handles operations, branding, supply chain, staff training, and technology management.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience to open a The Buyzaar Mart franchise in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No prior retail experience is required. The Buyzaar Mart provides complete training, operational SOPs, and ongoing support so that motivated investors can run a successful store.",
      },
    },
    {
      "@type": "Question",
      name: "What areas in Lucknow are suitable for a The Buyzaar Mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High-footfall residential areas such as Gomti Nagar, Indira Nagar, Aliganj, Vikas Nagar, Hazratganj surroundings, Faizabad Road, and new township developments along Shaheed Path are ideal locations.",
      },
    },
    {
      "@type": "Question",
      name: "Does The Buyzaar Mart take back expired or damaged stock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. One of the brand's key investor benefits is its policy of taking back expired and damaged goods from franchise partners, significantly reducing inventory risk.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the franchise agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The FOCM model franchise agreement is for a period of 5 years and is renewable upon mutual evaluation. The FOCO company-operated model agreement is structured for 10 years.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a The Buyzaar Mart franchise in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit www.thebuyzaarmart.com, fill out the online inquiry form, and the franchise team will connect with you to guide you through the process step by step.",
      },
    },
  ],
};

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <script
        key="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        key="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1">
          <div className="max-w-4xl space-y-4 font-serif font-medium leading-relaxed text-gray-700">
            <h1 className="mt-8 text-2xl font-medium text-gray-900 sm:text-3xl">
              Convenience Store Franchise in Lucknow &mdash; The Buyzaar Mart
            </h1>

            <p>
              Lucknow is no longer just the city of nawabs and tehzeeb. It is rapidly
              becoming one of Uttar Pradesh&apos;s most exciting retail markets. With a
              growing population, rising disposable income, expanding residential colonies,
              and a shift toward organized retail, Lucknow presents a golden window of
              opportunity for anyone looking to start a convenience store franchise. And
              among the emerging brands making their mark across North India, The Buyzaar
              Mart stands out as the most investor-friendly and community-focused retail
              franchise available today.
            </p>

            <p>
              Whether you are a first-time entrepreneur, a salaried professional looking to
              invest, or an existing business owner wanting to diversify, The Buyzaar
              Mart&apos;s convenience store franchise in Lucknow could be the smartest
              business decision you make this year.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Lucknow Is the Right City for a Convenience Store Franchise
            </h2>

            <p>
              Lucknow is experiencing a surge in planned residential areas, tech parks, and
              commercial hubs across localities like Gomti Nagar, Hazratganj, Aliganj,
              Indira Nagar, Vikas Nagar, Faizabad Road, and the Lucknow-Kanpur highway
              corridor. Each of these areas hosts dense residential populations that require
              daily-need retail outlets within walking distance.
            </p>

            <p>
              The retail gap in Lucknow is significant. Most neighborhoods still depend on
              unorganized kirana stores that lack variety, consistent pricing, modern
              billing, or product assurance. This is precisely where a branded convenience
              store franchise like The Buyzaar Mart fills the void, delivering a
              professional, trust-building retail experience at the neighborhood level.
            </p>

            <p>Key reasons why Lucknow is ideal for a convenience store franchise:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Lucknow is the state capital of Uttar Pradesh with a population of over 35
                lakh, growing steadily every year.
              </li>
              <li>
                Expanding urban infrastructure is creating new catchment areas across
                Lucknow&apos;s peripheral zones.
              </li>
              <li>
                A large middle-class demographic actively seeks organized, transparent, and
                reliable grocery retail.
              </li>
              <li>
                The city&apos;s improving road network and residential development are driving
                footfall into new localities.
              </li>
              <li>
                Lucknow ranks among the top tier-2 cities in India with high retail growth
                potential per industry estimates.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Your Friendly Neighborhood Store
            </h2>

            <p>
              The Buyzaar Mart is a fast-growing retail franchise brand built on the
              philosophy of &quot;Apna Bazar, Bachat Ka Saath, Quality Ki Baat.&quot; The
              brand is designed to bring organized, affordable, and transparent retail to
              Indian neighborhoods, starting with Uttar Pradesh and expanding across North
              India.
            </p>

            <p>
              What makes The Buyzaar Mart different from other franchise brands is its
              genuinely franchise-friendly structure. Under the FOCM (Franchise Owned,
              Company Managed) model, the franchisee owns the store and invests in the
              setup, while The Buyzaar Mart&apos;s corporate team manages branding,
              operations, technology, supply chain, staff training, and day-to-day
              performance. This means you own the asset and earn the returns without being
              overwhelmed by the operational complexities of running a modern retail store.
            </p>

            <p>
              The brand is already committed to investor protection in a way most retail
              franchises are not. The Buyzaar Mart takes back expired and damaged goods from
              its franchise partners, removing one of the biggest pain points of grocery
              retail for first-time investors.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Get as a The Buyzaar Mart Franchise Partner in Lucknow
            </h2>

            <p>
              When you apply for a convenience store franchise in Lucknow through The
              Buyzaar Mart, you are not just buying a store &mdash; you are joining a
              complete retail ecosystem. Here is what the brand provides:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Store Location Survey and Approval &mdash; The team helps you identify the
                right location in Lucknow based on footfall analysis, catchment mapping, and
                competition assessment.
              </li>
              <li>
                Store Layout, Interior Design, and Branding Setup &mdash; Full interior
                design and branding execution aligned with brand standards, ensuring every
                Buyzaar Mart store has a uniform, professional identity.
              </li>
              <li>
                POS-Enabled Billing System &mdash; Modern point-of-sale technology for
                seamless billing, inventory tracking, and sales reporting.
              </li>
              <li>
                Supply Chain and Inventory Management &mdash; Opening stock recommendations,
                replenishment systems, procurement coordination, and pricing strategy tailored
                to Lucknow&apos;s local consumer preferences.
              </li>
              <li>
                Staff Training and SOP Compliance &mdash; Comprehensive training for the
                franchisee and store staff on daily operations, billing systems, customer
                engagement, and brand standards.
              </li>
              <li>
                Hyper-Local Marketing Campaigns &mdash; Customized marketing strategies for
                each Lucknow franchise location, including digital marketing, store launch
                promotions, and customer acquisition support.
              </li>
              <li>
                CRM and Customer Loyalty Programs &mdash; Tools to build lasting
                relationships with your neighborhood customers.
              </li>
              <li>
                Regular Audits and Performance Reviews &mdash; Ongoing operational reviews,
                performance dashboards, and improvement plans to keep your store on track.
              </li>
              <li>
                Return of Expired and Damaged Products &mdash; Industry-leading inventory
                protection that minimizes financial risk for the franchisee.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Buyzaar Mart Franchise Models Available in Lucknow
            </h2>

            <p>
              The Buyzaar Mart offers multiple store formats to suit different investment
              capacities and location opportunities in Lucknow.
            </p>

            <h3 className="font-medium text-gray-900">1. Mini Mart</h3>
            <p>
              This is the entry-level format, ideal for smaller localities, residential
              lanes, or investors beginning with limited capital. The Mini Mart is a compact
              convenience store covering essential daily-need categories.
            </p>

            <h3 className="font-medium text-gray-900">2. Super Mart</h3>
            <p>
              The Super Mart format is designed for mid-sized high-footfall locations such as
              market areas, busy roads, or larger residential colonies in Lucknow. It carries
              a broader product range across FMCG, groceries, personal care, household items,
              and more.
            </p>

            <h3 className="font-medium text-gray-900">3. Hyper Mart</h3>
            <p>
              The Hyper Mart is the flagship format, built for high-density commercial
              areas, large residential clusters, or township projects in Lucknow. It offers
              the widest product assortment, the largest retail floor space, and the highest
              revenue potential.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment Breakdown: Super Mart Franchise in Lucknow
            </h2>

            <p>
              The Super Mart model is the most popular format for franchise investors in
              cities like Lucknow where medium-sized retail spaces are widely available
              across colonies and market streets.
            </p>

            <div className="overflow-x-auto">
              <table className="mt-4 min-w-full border border-gray-200 text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Investment Component
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Estimated Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Franchise Fee (one-time, inclusive of GST)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">₹ 2,95,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Interior Setup Cost (approx. ₹1,200/sq ft)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">₹ 10,01,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      POS Software (per login)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">₹ 1,00,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Opening Stock / Product Stocking
                    </td>
                    <td className="border border-gray-200 px-4 py-3">₹ 11,01,100</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Security Deposit
                    </td>
                    <td className="border border-gray-200 px-4 py-3">₹ 1,66,307</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Total Estimated Investment
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      ₹ 26,63,407
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Rent, electricity, and staff salaries are operational expenses borne by the
              franchisee on a monthly basis. All figures are indicative and may vary based
              on specific location and store size in Lucknow.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment Breakdown: Hyper Mart Franchise in Lucknow
            </h2>

            <p>
              The Hyper Mart format requires a larger floor area &mdash; typically starting
              at 3,001 sq ft and above &mdash; and is suitable for high-visibility,
              high-footfall zones in Lucknow such as Gomti Nagar Extension, Shaheed Path
              commercial zones, Indira Nagar main roads, or township retail anchors.
            </p>

            <div className="overflow-x-auto">
              <table className="mt-4 min-w-full border border-gray-200 text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Investment Component
                    </th>
                    <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Estimated Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Franchise Fee (one-time, inclusive of GST)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">₹ 2,95,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Interior Setup Cost
                    </td>
                    <td className="border border-gray-200 px-4 py-3">₹ 33,01,100</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      POS Software (per login)
                    </td>
                    <td className="border border-gray-200 px-4 py-3">₹ 2,00,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Opening Stock / Product Stocking
                    </td>
                    <td className="border border-gray-200 px-4 py-3">₹ 36,01,200</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">
                      Security Deposit
                    </td>
                    <td className="border border-gray-200 px-4 py-3">₹ 4,92,660</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      Total Estimated Investment
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">
                      ₹ 78,89,960
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For the Hyper Mart and FOCO model stores, operational costs including rent,
              electricity, and salaries are borne by the franchisee. The franchise
              agreement for the company-operated format spans 10 years, providing long-term
              business security. Figures are indicative.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step Investment Process for Starting a Franchise in Lucknow
            </h2>

            <div className="space-y-3">
              <p>
                <span className="font-semibold text-gray-900">
                  Step 1 &mdash; Submit an Inquiry:
                </span>{" "}
                Visit{" "}
                <a
                  href="https://www.thebuyzaarmart.com"
                  className="text-green-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.thebuyzaarmart.com
                </a>
                , fill out the inquiry form, and receive an instant response from the
                franchise team.
              </p>

              <p>
                <span className="font-semibold text-gray-900">
                  Step 2 &mdash; Location Finalization:
                </span>{" "}
                The Buyzaar Mart team conducts a survey and approves your chosen location in
                Lucknow based on catchment analysis and brand fit.
              </p>

              <p>
                <span className="font-semibold text-gray-900">
                  Step 3 &mdash; Documentation and Agreement:
                </span>{" "}
                Complete KYC formalities, review the franchise agreement, and sign with full
                compliance support from the brand&apos;s team.
              </p>

              <p>
                <span className="font-semibold text-gray-900">
                  Step 4 &mdash; Store Setup:
                </span>{" "}
                Interior design, branding, shelving, POS installation, and product stocking
                are executed by The Buyzaar Mart&apos;s setup team.
              </p>

              <p>
                <span className="font-semibold text-gray-900">
                  Step 5 &mdash; Staff Training:
                </span>{" "}
                You and your team are trained on SOPs, billing systems, customer service,
                and inventory management.
              </p>

              <p>
                <span className="font-semibold text-gray-900">
                  Step 6 &mdash; Store Launch:
                </span>{" "}
                A grand opening campaign is executed with hyper-local marketing, promotions,
                and customer acquisition initiatives.
              </p>

              <p>
                <span className="font-semibold text-gray-900">
                  Step 7 &mdash; Ongoing Support:
                </span>{" "}
                Regular operational audits, performance reviews, marketing campaigns, and
                replenishment support continue throughout the franchise term.
              </p>
            </div>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart Over Other Convenience Store Franchises in Lucknow
            </h2>

            <p>
              There are several retail franchise options available in India today, but The
              Buyzaar Mart specifically stands out for Lucknow investors for the following
              reasons:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                The FOCM model means you do not need prior retail experience &mdash; the
                company manages operations professionally while you own the asset.
              </li>
              <li>
                The brand&apos;s inventory protection policy, including the return of expired
                and damaged goods, removes a major financial risk unique to grocery retail.
              </li>
              <li>
                Localized product flexibility means your Lucknow store stocks products tuned
                to local taste, preference, and cultural context instead of a one-size-fits-all
                national catalog.
              </li>
              <li>
                Starting investment from ₹15 lakh for a Mini Mart makes it accessible for
                first-time franchise investors.
              </li>
              <li>
                Uniform branding and store design builds customer trust rapidly in any new
                neighborhood.
              </li>
              <li>
                Technology-first approach with POS billing, CRM, and sales dashboards
                ensures your store operates at par with organized retail chains.
              </li>
              <li>
                A 5-year renewable franchise agreement under FOCM provides a stable,
                long-term business structure.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the minimum investment to start a The Buyzaar Mart franchise
                  in Lucknow?
                </h3>
                <p className="mt-2">
                  The minimum investment starts from approximately ₹15 lakh for a Mini Mart
                  format. The Super Mart and Hyper Mart formats require higher investment
                  depending on store size and location.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. What is the FOCM model offered by The Buyzaar Mart?
                </h3>
                <p className="mt-2">
                  FOCM stands for Franchise Owned Company Managed. You invest in and own the
                  store, while The Buyzaar Mart&apos;s team handles all operations,
                  branding, supply chain, staff training, and technology management.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. Do I need retail experience to open a The Buyzaar Mart franchise in
                  Lucknow?
                </h3>
                <p className="mt-2">
                  No prior retail experience is required. The Buyzaar Mart provides complete
                  training, operational SOPs, and ongoing support so that any motivated
                  investor can run a successful store.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. What areas in Lucknow are suitable for a The Buyzaar Mart franchise?
                </h3>
                <p className="mt-2">
                  High-footfall residential areas such as Gomti Nagar, Indira Nagar,
                  Aliganj, Vikas Nagar, Hazratganj surroundings, Faizabad Road, and new
                  township developments along Shaheed Path are ideal locations.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. Does The Buyzaar Mart take back expired or damaged stock?
                </h3>
                <p className="mt-2">
                  Yes. One of the brand&apos;s key investor benefits is its policy of taking
                  back expired and damaged goods from franchise partners, significantly
                  reducing inventory risk.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. How long is the franchise agreement?
                </h3>
                <p className="mt-2">
                  The FOCM model franchise agreement is for a period of 5 years, renewable
                  upon mutual evaluation. The FOCO company-operated model agreement is
                  structured for 10 years.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. How do I apply for a The Buyzaar Mart franchise in Lucknow?
                </h3>
                <p className="mt-2">
                  Simply visit{" "}
                  <a
                    href="https://www.thebuyzaarmart.com"
                    className="text-green-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.thebuyzaarmart.com
                  </a>
                  , fill out the online inquiry form, and the franchise team will connect
                  with you to guide you through the process step by step.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Convenience Store Franchise in Lucknow Today
              </h2>

              <p className="mb-4 text-gray-800">
                Lucknow&apos;s retail market is at an inflection point. Organized, branded
                convenience stores are replacing unstructured kirana shops across the
                city&apos;s growing neighborhoods. The window to establish your presence,
                build customer loyalty, and generate consistent returns is open right now
                &mdash; and The Buyzaar Mart is the partner designed to help you do exactly
                that.
              </p>

              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart family and bring your neighborhood the retail
                experience it deserves: affordable prices, quality products, transparent
                service, and the pride of owning a professionally managed store.
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
                or walk into the nearest The Buyzaar Mart outlet to begin your journey.
              </p>

              <p className="mb-4 text-gray-800">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
              </p>

              <p className="mb-4 text-gray-800">
                <span className="font-semibold">Phone / WhatsApp:</span>{" "}
                <a
                  href="tel:+919217991727"
                  className="font-semibold text-green-600 hover:underline"
                >
                  9217991727
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Business Hours:</span> Monday to Saturday,
                09:00 AM &ndash; 7:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="lucknow"
            currentSlug="/lucknow/convenience-store-franchise-in-lucknow"
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