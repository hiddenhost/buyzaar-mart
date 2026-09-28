import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Franchise Details in Mathura",
  description:
    "Complete Buyzaar Mart franchise details in Mathura, including investment, franchise fees, store formats, agreement terms, eligibility, operational support, compliance, and application process.",
  url: "https://www.thebuyzaarmart.com/mathura/buyzaar-mart-franchise-details-mathura",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mathura",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Mathura",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
  brand: {
    "@type": "Brand",
    name: "The Buyzaar Mart",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Franchise Formats in Mathura",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600–1,000 sq ft grocery and FMCG store format designed for residential neighborhoods in Mathura.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1,001–3,000 sq ft grocery and FMCG store format suited for market-facing and higher-footfall commercial locations in Mathura.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3,001–8,000 sq ft grocery and FMCG store format suited for highway-facing and high-density commercial zones in Mathura.",
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
      name: "What is included in the franchise fee for a Mathura outlet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The franchise fee, inclusive of 18% GST, covers brand licensing, training, and onboarding support from the central team.",
      },
    },
    {
      "@type": "Question",
      name: "Is the security deposit refundable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the security deposit is refundable and is separate from the one-time franchise fee.",
      },
    },
    {
      "@type": "Question",
      name: "What store formats can I choose from in Mathura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mini Mart with 600–1,000 sq ft, Super Mart with 1,001–3,000 sq ft, and Hyper Mart with 3,001–8,000 sq ft are available.",
      },
    },
    {
      "@type": "Question",
      name: "Which franchise model should I choose — FOCM or FOCO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The choice depends on how much daily involvement you want. FOCM offers balanced involvement, and FOCO is largely passive.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get complete franchise details?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basic details are shared during the initial call, typically within 24 to 48 hours of your inquiry, with full documentation following at later stages.",
      },
    },
    {
      "@type": "Question",
      name: "Does the brand assist with compliance and licensing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the franchise team assists with FSSAI licensing, GST registration, and other regulatory requirements needed to operate the store.",
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
              Buyzaar Mart Franchise Details in Mathura — Complete Fact Sheet
            </h1>

            <p>
              This page brings together all the key details of The Buyzaar Mart
              franchise specifically for entrepreneurs evaluating an outlet in
              Mathura — investment, fees, agreement terms, store
              specifications, and ongoing obligations — in one consolidated
              reference. Use this as a checklist before your franchise
              discussion with the brand&apos;s team.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Brand Details
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Brand Name:</span> The Buyzaar
                Mart, positioned as &quot;Your Friendly Neighborhood Store&quot;.
              </li>
              <li>
                <span className="font-semibold">Industry Category:</span>{" "}
                Grocery, FMCG, and daily-essentials retail.
              </li>
              <li>
                <span className="font-semibold">Headquarters:</span> D-43,
                Third Floor, Sector-6, Noida-201301.
              </li>
              <li>
                <span className="font-semibold">Regulatory Status:</span> FSSAI
                Licensed, GST Registered, MSME Certified.
              </li>
              <li>
                <span className="font-semibold">Contact:</span>{" "}
                +91 9217991727 |{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
                .
              </li>
              <li>
                <span className="font-semibold">Current Presence:</span>{" "}
                Operational and upcoming stores across cities including Kanpur,
                Noida, Gangoh, Saharanpur, Haridwar, and Ghaziabad, with
                Mathura being evaluated for new franchise partners.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Models Available in Mathura
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">
                  FOCM (Franchise Owned, Company Managed):
                </span>{" "}
                Partner invests and retains supervisory involvement, while the
                company manages daily execution.
              </li>
              
              
              <li>
                <span className="font-semibold">
                  FOCO (Franchise Owned, Company Operated):
                </span>{" "}
                Partner invests with minimal day-to-day involvement, as the
                company manages almost all operations.
              </li>
              <li>
                Model selection depends on how much time and operational
                involvement the applicant wants to commit.
              </li>
              <li>
                All three models follow the same branding, sourcing, and
                product display standards.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Format Specifications
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Mini Mart:</span> 600–1,000 sq
                ft carpet area, suited for residential neighborhoods in Mathura.
              </li>
              <li>
                <span className="font-semibold">Super Mart:</span> 1,001–3,000
                sq ft carpet area, suited for market-facing or higher-footfall
                commercial locations.
              </li>
              <li>
                <span className="font-semibold">Hyper Mart:</span> 3,001–8,000
                sq ft carpet area, suited for highway-facing or high-density
                commercial zones.
              </li>
              <li>
                Store height, shelving layout, and signage specifications
                follow the brand&apos;s standardized design across all formats.
              </li>
              <li>
                Format eligibility is confirmed only after the proposed property
                in Mathura is evaluated by the franchise team.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment Breakdown
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Minimum Investment:</span>{" "}
                Starts from ₹15 lakh onwards, scaling with store format and
                carpet area.
              </li>
              <li>
                <span className="font-semibold">Stock Investment:</span>{" "}
                Calculated based on store size and expected sales velocity for
                the specific Mathura location.
              </li>
              <li>
                <span className="font-semibold">Interior &amp; Setup Cost:</span>{" "}
                Covers shelving, branding elements, signage, and store fit-out
                based on format.
              </li>
              <li>
                <span className="font-semibold">Software/POS Fee:</span>{" "}
                One-time cost for billing system setup and integration.
              </li>
              <li>
                <span className="font-semibold">Franchise Fee:</span> Includes
                18% GST, covering brand licensing, training, and onboarding
                support.
              </li>
              <li>
                <span className="font-semibold">Security Deposit:</span>{" "}
                Refundable deposit, separate from the one-time franchise fee.
              </li>
              <li>
                An online investment calculator on thebuyzaarmart.com can
                generate a location- and format-specific estimate before formal
                application.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Expected Returns and Margins
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Franchise partners can expect an effective gross margin of
                around 18–20% on retail sales.
              </li>
              <li>
                Break-even timelines vary by store format, location within
                Mathura, and how quickly the outlet builds consistent local
                footfall.
              </li>
              <li>
                Seasonal demand spikes tied to Mathura&apos;s religious tourism
                calendar can meaningfully boost monthly sales during peak
                periods.
              </li>
              <li>
                Detailed financial projections specific to the chosen format
                and property are shared during the franchise discussion stage.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Agreement Details
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The agreement specifies the chosen operating model, including
                FOCM or FOCO, and the corresponding scope of
                responsibilities.
              </li>
              <li>
                It outlines the franchise fee, security deposit terms, and any
                ongoing cost-sharing arrangements between the partner and the
                company.
              </li>
              <li>
                Brand standards for pricing, product display, signage, and
                store operations are documented as binding requirements under
                the agreement.
              </li>
              <li>
                The agreement includes provisions for supply chain access,
                training support, and marketing assistance provided by the
                brand.
              </li>
              <li>
                Applicants are encouraged to review the agreement in detail with
                the franchise team before signing, and clarify any terms related
                to renewal or termination.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Eligibility Requirements
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Access to a suitable commercial or residential property in
                Mathura matching the required carpet area for the chosen format.
              </li>
              <li>
                Ability to meet the minimum investment requirement for the
                selected store format.
              </li>
              <li>
                No mandatory prior retail experience, as training is provided
                by the brand.
              </li>
              <li>
                Willingness to follow standardized branding, pricing, and
                product display guidelines across the store&apos;s operations.
              </li>
              <li>
                A basic understanding of the local Mathura market is helpful,
                though not a strict requirement for approval.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents Required for Franchise Application
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Identity proof, such as an Aadhaar card, PAN card, or
                equivalent government-issued ID.
              </li>
              <li>
                Address proof of both the applicant and the proposed store
                property.
              </li>
              <li>
                Property ownership documents or a signed lease agreement for the
                Mathura location.
              </li>
              <li>
                Bank statements or financial documents supporting the required
                investment.
              </li>
              <li>Passport-size photographs for KYC completion.</li>
              <li>
                GST and FSSAI registration details, with the brand assisting
                where these are not already in place.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Setup and Branding Standards
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Uniform store branding, including signage, shelving design, and
                product display layout consistent with all Buyzaar Mart
                outlets.
              </li>
              <li>
                POS-enabled billing system installed as part of the standard
                store setup process.
              </li>
              <li>
                CRM tools integrated for tracking customer relationships and
                repeat purchase behavior.
              </li>
              <li>
                Localized product flexibility permitted within brand guidelines,
                allowing Mathura stores to stock region-specific and festival
                items.
              </li>
              <li>
                Interior fit-out timelines depend on store format and property
                readiness, generally spanning a few weeks.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Training and Onboarding Details
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Franchise partners receive orientation on their chosen
                operating model, including FOCM or FOCO, and its
                respective responsibilities.
              </li>
              <li>
                Store staff are trained on billing procedures, inventory
                handling, and customer service standards.
              </li>
              <li>
                Inventory management training covers stock rotation, expiry
                tracking, and reorder planning.
              </li>
              <li>
                CRM tool training helps staff and partners track customer
                engagement and repeat business.
              </li>
              <li>
                Training is conducted ahead of the store launch to ensure
                operational readiness from day one.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Supply Chain and Product Sourcing
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Centralized supply chain access connects Mathura franchise
                stores to leading FMCG brands including HUL, ITC, Dabur, Nestlé,
                Britannia, Patanjali, and Godrej.
              </li>
              <li>
                Product sourcing is managed centrally, removing the need for
                individual franchise partners to negotiate with multiple
                vendors.
              </li>
              <li>
                Stock replenishment follows a predictive inventory system
                designed to reduce overstocking and stockouts.
              </li>
              <li>
                Region-specific product flexibility allows Mathura stores to
                adjust their range for local and seasonal demand, such as
                festival-related items.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Marketing and Launch Support Details
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Structured local area marketing campaigns are executed around
                the store&apos;s launch to drive initial footfall.
              </li>
              <li>
                The store is added to the brand&apos;s official store locator
                and online presence following launch.
              </li>
              <li>
                Festival-specific promotional guidance is provided given
                Mathura&apos;s high seasonal shopping patterns.
              </li>
              <li>
                Branding materials, signage, and uniform store aesthetics are
                supplied to ensure visual consistency with other outlets.
              </li>
              <li>
                Post-launch marketing support continues periodically based on
                store performance and seasonal opportunities.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Ongoing Operational Support Details
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Continuous supply chain coordination to maintain consistent
                product availability.
              </li>
              <li>
                Backend inventory prediction tools to help manage stock levels
                efficiently.
              </li>
              <li>
                Periodic performance reviews conducted with the franchise
                partner to track sales trends.
              </li>
              <li>
                Operational audits to identify issues such as stock wastage,
                pilferage, or slow-moving inventory.
              </li>
              <li>
                Support scope varies slightly depending on whether the store
                operates under FOCM or FOCO.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Compliance and Regulatory Details
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand is FSSAI Licensed, ensuring food safety and standards
                compliance across all outlets.
              </li>
              <li>
                GST Registered status applies to franchise fee structures and
                applicable retail transactions.
              </li>
              <li>
                MSME Certified status reflects the brand&apos;s registration
                under India&apos;s Ministry of MSME.
              </li>
              <li>
                Franchise partners are guided through local compliance
                requirements specific to operating a retail outlet in Mathura.
              </li>
              <li>
                Ongoing regulatory support is available as part of the brand&apos;s
                franchise assistance.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Application and Approval Timeline
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">
                  Initial inquiry to first response from the franchise team:
                </span>{" "}
                typically within 24 to 48 hours.
              </li>
              <li>
                <span className="font-semibold">
                  Site evaluation and documentation:
                </span>{" "}
                generally takes one to two weeks depending on document
                readiness.
              </li>
              <li>
                <span className="font-semibold">
                  Agreement signing to store setup completion:
                </span>{" "}
                spans a few weeks based on interior work and stock delivery.
              </li>
              <li>
                <span className="font-semibold">
                  Training and final launch preparation:
                </span>{" "}
                usually completed within the final week before store opening.
              </li>
              <li>
                <span className="font-semibold">
                  Total timeline from inquiry to launch:
                </span>{" "}
                generally ranges from a few weeks to a couple of months.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Growth and Expansion Details
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Franchise partners who stabilize their first Mathura outlet can
                apply to open additional stores within the city or in nearby
                towns.
              </li>
              <li>
                Multi-store partners benefit from shared operational learnings
                and more efficient stock planning across locations.
              </li>
              <li>
                The brand&apos;s scalable franchise structure supports partners
                moving from a single-store investment to a multi-unit portfolio
                over time.
              </li>
              <li>
                Expansion applications follow a similar evaluation process as
                the initial franchise application.
              </li>
            </ul>

            
            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is included in the franchise fee for a Mathura
                  outlet?
                </h3>
                <p className="mt-2">
                  The franchise fee, inclusive of 18% GST, covers brand
                  licensing, training, and onboarding support from the central
                  team.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. Is the security deposit refundable?
                </h3>
                <p className="mt-2">
                  Yes, the security deposit is refundable and is separate from
                  the one-time franchise fee.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. What store formats can I choose from in Mathura?
                </h3>
                <p className="mt-2">
                  Mini Mart with 600–1,000 sq ft, Super Mart with 1,001–3,000
                  sq ft, and Hyper Mart with 3,001–8,000 sq ft are available.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. Which franchise model should I choose — FOCM or
                  FOCO?
                </h3>
                <p className="mt-2">
                  The choice depends on how much daily involvement you want.
                  FOCM offers balanced involvement and
                  FOCO is largely passive.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. How long does it take to get complete franchise details?
                </h3>
                <p className="mt-2">
                  Basic details are shared during the initial call, typically
                  within 24 to 48 hours of your inquiry, with full
                  documentation following at later stages.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. Does the brand assist with compliance and licensing?
                </h3>
                <p className="mt-2">
                  Yes, the franchise team assists with FSSAI licensing, GST
                  registration, and other regulatory requirements needed to
                  operate the store.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Get Complete Buyzaar Mart Franchise Details in Mathura
              </h2>

              <p className="mb-4 text-gray-800">
                Review the investment, store formats, operating models,
                agreement terms, and support structure before starting your
                Mathura franchise application.
              </p>

              <p className="mb-4 text-gray-800">
                Contact The Buyzaar Mart team for location-specific guidance on
                investment, property eligibility, model selection, and store
                setup.
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
                  +91 9217991727
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://www.thebuyzaarmart.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-600 hover:underline"
                >
                  thebuyzaarmart.com
                </a>
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="mathura"
            currentSlug="/mathura/buyzaar-mart-franchise-details-mathura"
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