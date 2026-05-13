import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "How to Start a Retail Franchise in Gurgaon \u2013 Buyzaar Mart",
  description:
    "Step-by-step guide to starting a retail franchise in Gurgaon with Buyzaar Mart. FOCM and FOCO models, Hassle-Free Inventory Assurance, FSSAI licensing, and complete store management.",
  url: "https://www.thebuyzaarmart.com/gurgaon/how-to-start-retail-franchise-gurgaon",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Gurugram",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "\u20b9\u20b9",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Buyzaar Mart Retail Franchise Formats in Gurgaon",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart Franchise",
        description:
          "Compact neighbourhood daily needs store for residential societies, colony shops, and walking-distance locations in Gurgaon",
      },
      {
        "@type": "Offer",
        name: "Super Mart Franchise",
        description:
          "Mid-sized full-range daily needs store for township commercial areas and main market locations in Gurgaon",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart Franchise",
        description:
          "Large-format destination store for high-traffic commercial corridors in Gurgaon",
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
      name: "What is the difference between FOCM and FOCO in a Buyzaar Mart franchise in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both models mean you own the franchise and Buyzaar Mart handles operations. Under FOCM (Franchise Owned, Company Managed), you retain periodic oversight and participate in key decisions. Under FOCO (Franchise Owned, Company Operated), Buyzaar Mart takes complete operational responsibility \u2014 you are a fully passive investor with zero day-to-day involvement required. Both models include Hassle-Free Inventory Assurance, full store setup, supply chain access, staff training, and marketing support under a 5-year formal agreement.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to start a retail franchise in Gurgaon with Buyzaar Mart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "From initial enquiry to grand opening takes 8 to 12 weeks \u2014 covering location survey, franchise agreement, complete store setup, staff training, and launch marketing.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum investment to start a retail franchise in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Investment varies by format and location. The Mini Mart format has the most accessible entry point. Buyzaar Mart provides a personalised, itemised investment breakdown specific to your Gurgaon site after the location evaluation. Call 9217991727 to receive yours.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Gurgaon are best for starting a retail franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dwarka Expressway Sectors 82\u2013115, Palam Vihar, South City, Sushant Lok inner lanes, DLF Phase society markets, Sector 56\u201358, and Bajghera currently offer the strongest combination of residential catchment quality, commercial rent accessibility, and organized retail gap.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Hassle-Free Inventory Assurance in a Buyzaar Mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is a contractual commitment in every Buyzaar Mart franchise agreement that expired and damaged goods are taken back by the company. This protects the retail franchise investor from the most common source of unexpected financial loss in organized retail.",
      },
    },
    {
      "@type": "Question",
      name: "What certifications does Buyzaar Mart carry for operating retail franchises in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyzaar Mart is FSSAI Licensed by the Food Safety and Standards Authority of India, GST Registered, and MSME Certified by the Ministry of MSME, Government of India.",
      },
    },
    {
      "@type": "Question",
      name: "How many store formats are available for a retail franchise in Gurgaon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three \u2014 Mini Mart (600\u20131000 sq ft), Super Mart (1001\u20133000 sq ft), and Hyper Mart (3001\u20138000 sq ft). The right format is recommended by Buyzaar Mart\u2019s team based on your specific Gurgaon site evaluation.",
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
              How to Start a Retail Franchise in Gurgaon &#8211; Step-by-Step Guide
            </h1>

            <p>
              Starting a retail franchise in Gurgaon requires seven clearly defined steps &#8212; from choosing the right category to launching your store with professional marketing support. This guide covers each step specifically for Gurgaon&#39;s market and investor profile.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Is the First Step to Starting a Retail Franchise in Gurgaon?
            </h2>

            <p>
              The first step is choosing the right retail category &#8212; before evaluating any brand or location.
            </p>

            <p>
              In Gurgaon, the most viable retail franchise category for consistent, long-term profitability is daily needs &#8212; groceries, FMCG, dairy, personal care, and household essentials. Here is why this category leads:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Every Gurgaon household purchases daily essentials every week without exception &#8212; demand is non-discretionary and non-seasonal
              </li>
              <li>
                Gurgaon&#39;s corporate and professional population has above-average household spending on daily needs &#8212; higher basket values per visit
              </li>
              <li>
                Organized daily needs retail is significantly underpenetrated in Gurgaon&#39;s fastest-growing residential corridors &#8212; Sectors 82&#8211;115 along Dwarka Expressway, Southern Peripheral Road townships, and New Gurgaon areas
              </li>
              <li>
                No delivery app or weekend supermarket trip replaces the daily top-up purchase from a store within walking distance of home
              </li>
            </ul>

            <p>
              <strong>Bottom line:</strong> Choose daily needs retail before choosing a brand. The category determines your demand floor. In Gurgaon, that floor is exceptionally high.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Choose the Right Retail Franchise Model in Gurgaon
            </h2>

            <p>
              Buyzaar Mart offers two investor-friendly franchise models in Gurgaon &#8212; FOCM and FOCO. Both put ownership in your hands. The difference is the degree of company involvement in operations.
            </p>

            <h3 className="text-lg font-medium text-gray-900">
              FOCM &#8212; Franchise Owned, Company Managed
            </h3>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>You own the franchise outlet and invest in its setup</li>
              <li>
                Buyzaar Mart manages daily operations &#8212; store setup, inventory, supply chain, staff, marketing, and performance monitoring &#8212; under a tested Standard Operating Process
              </li>
              <li>You retain oversight and receive live KPI data and regular audit reports</li>
              <li>
                <strong>Best for:</strong> Investors who want ownership with professional management support and periodic involvement in their franchise&#39;s progress
              </li>
              <li>
                <strong>Involvement level:</strong> Low-to-moderate &#8212; you stay informed and participate in key decisions without running the store floor daily
              </li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900">
              FOCO &#8212; Franchise Owned, Company Operated
            </h3>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>You own the franchise outlet and invest in its setup</li>
              <li>
                Buyzaar Mart fully operates the store &#8212; taking complete end-to-end operational responsibility with no requirement for franchisee involvement in daily or weekly store activities
              </li>
              <li>
                You are a completely passive investor &#8212; your role is ownership and capital; all operations are entirely in Buyzaar Mart&#39;s hands
              </li>
              <li>
                <strong>Best for:</strong> Investors who want a fully passive retail business investment in Gurgaon &#8212; corporate professionals, NRIs, or HNIs who want zero operational involvement
              </li>
              <li>
                <strong>Involvement level:</strong> None &#8212; Buyzaar Mart operates the store completely on your behalf
              </li>
            </ul>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left"></th>
                    <th className="border border-gray-300 px-4 py-2 text-left">FOCM</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">FOCO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">You own the store</td>
                    <td className="border border-gray-300 px-4 py-2">&#10003; Yes</td>
                    <td className="border border-gray-300 px-4 py-2">&#10003; Yes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Company manages operations</td>
                    <td className="border border-gray-300 px-4 py-2">&#10003; Yes</td>
                    <td className="border border-gray-300 px-4 py-2">&#10003; Yes &#8212; fully</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Your daily involvement</td>
                    <td className="border border-gray-300 px-4 py-2">Low-to-moderate</td>
                    <td className="border border-gray-300 px-4 py-2">Zero</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Oversight and reporting</td>
                    <td className="border border-gray-300 px-4 py-2">Regular KPIs and audits</td>
                    <td className="border border-gray-300 px-4 py-2">Full reporting to you</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Best investor profile</td>
                    <td className="border border-gray-300 px-4 py-2">Professional wanting periodic involvement</td>
                    <td className="border border-gray-300 px-4 py-2">Fully passive investor</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Both models include: Hassle-Free Inventory Assurance, FSSAI-licensed brand, complete store setup, supply chain access, staff training, and marketing support &#8212; under a formal 5-year franchise agreement.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step: How to Start a Retail Franchise in Gurgaon
            </h2>

            <h3 className="text-lg font-medium text-gray-900">
              Step 1 &#8212; Identify Your Target Area in Gurgaon
            </h3>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Shortlist two to three localities based on your available commercial space type and familiarity with the area
              </li>
              <li>
                Prioritise residential society ground floors, colony market shops, and inner residential lane locations &#8212; these offer the highest proximity-driven footfall with the most accessible commercial rents
              </li>
              <li>
                <strong>High-opportunity zones right now:</strong> Dwarka Expressway Sectors 82&#8211;115, Palam Vihar, South City, Sushant Lok, DLF Phase society markets, Sector 56&#8211;58, Bajghera
              </li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900">
              Step 2 &#8212; Submit Your Franchise Enquiry
            </h3>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Call 9217991727 or fill in the franchise enquiry form on this page</li>
              <li>A Buyzaar Mart Gurgaon franchise advisor responds within 24 hours</li>
              <li>No deposit or commitment required at this stage &#8212; the consultation is free</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900">
              Step 3 &#8212; Location Survey and Site Approval
            </h3>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Buyzaar Mart&#39;s team conducts an on-ground evaluation of your proposed Gurgaon site
              </li>
              <li>
                The survey covers: residential catchment size, daily footfall patterns, competition mapping, and physical site suitability
              </li>
              <li>
                Three outcomes: Approved / Conditionally approved / Not recommended with an alternative suggested
              </li>
              <li>
                <strong>Critical:</strong> Do not sign a commercial lease before site approval &#8212; a premature lease on the wrong Gurgaon location is the costliest mistake in starting a retail franchise
              </li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900">
              Step 4 &#8212; Receive Your Personalised Investment Breakdown
            </h3>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Based on the approved site, Buyzaar Mart recommends the right store format &#8212; Mini Mart, Super Mart, or Hyper Mart
              </li>
              <li>
                A complete, itemised investment breakdown specific to your Gurgaon location is provided &#8212; covering store setup, fixtures, initial inventory, technology, and security deposit
              </li>
              <li>No generic ranges &#8212; every figure is site-specific</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900">
              Step 5 &#8212; Sign the Franchise Agreement
            </h3>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>The Buyzaar Mart franchise agreement runs for 5 years</li>
              <li>
                At signing, you confirm which model applies to your franchise &#8212; FOCM (Franchise Owned, Company Managed) or FOCO (Franchise Owned, Company Operated)
              </li>
              <li>
                <strong>Key terms documented in the agreement:</strong>
                <ul className="ml-4 mt-2 list-inside list-disc space-y-1">
                  <li>Licensed use of The Buyzaar Mart brand, trademark, and logos</li>
                  <li>
                    Your chosen model &#8212; FOCM or FOCO &#8212; and the operational responsibilities of each party
                  </li>
                  <li>
                    Hassle-Free Inventory Assurance &#8212; expired and damaged goods contractually taken back by Buyzaar Mart
                  </li>
                  <li>
                    Performance monitoring &#8212; KPI dashboards, audit schedules, quality reviews
                  </li>
                  <li>
                    Marketing support scope &#8212; grand opening and ongoing campaigns
                  </li>
                  <li>Renewal criteria at end of term</li>
                </ul>
              </li>
              <li>Have the agreement reviewed by a qualified legal professional before signing</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900">
              Step 6 &#8212; Complete Store Setup
            </h3>

            <p>
              Buyzaar Mart&#39;s setup team transforms your Gurgaon commercial space into a fully operational retail franchise store:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Interior layout design optimised for daily-needs retail flow</li>
              <li>Complete shelving and fixture installation</li>
              <li>Refrigeration units for dairy and chilled products</li>
              <li>
                Full Buyzaar Mart branding &#8212; external signage, internal brand elements, category labels
              </li>
              <li>POS billing system, barcode scanner, and inventory tracking software deployed and tested</li>
              <li>
                <strong>Timeline:</strong> 3 to 5 weeks depending on store size and site condition
              </li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900">
              Step 7 &#8212; Staff Training and Grand Opening
            </h3>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Buyzaar Mart conducts complete staff training before your store opens &#8212; POS billing, daily operations, inventory management, customer service, and hygiene compliance
              </li>
              <li>
                Grand opening campaign run by Buyzaar Mart: hyperlocal digital ads targeting your Gurgaon catchment, social media activation, opening-week promotional offers, and loyalty programme onboarding
              </li>
              <li>
                <strong>Total timeline from enquiry to grand opening:</strong> 8 to 12 weeks
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Registrations Are Needed to Start a Retail Franchise in Gurgaon?
            </h2>

            <p>
              Four registrations are required before a retail franchise store in Gurgaon can legally operate:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <strong>FSSAI License</strong> &#8212; Mandatory for selling food products, packaged goods, and dairy. State FSSAI License is the applicable category for most Buyzaar Mart formats in Gurgaon. Allow 30 to 60 days for processing.
              </li>
              <li>
                <strong>GST Registration</strong> &#8212; Required for retail businesses exceeding the GST threshold. Typically completes within 7 to 10 working days.
              </li>
              <li>
                <strong>Gurugram Municipal Corporation Trade License</strong> &#8212; Issued by the Municipal Corporation of Gurugram, authorizing commercial operations at your specific location.
              </li>
              <li>
                <strong>Haryana Shops and Commercial Establishments Act Registration</strong> &#8212; Mandatory for any commercial establishment in Haryana employing staff.
              </li>
            </ul>

            <p>
              Buyzaar Mart provides a complete registration checklist and guidance for each application as part of franchise onboarding.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Do the Buyzaar Mart FOCM and FOCO Models Include for a Gurgaon Retail Franchise?
            </h2>

            <p>
              Both the FOCM and FOCO models include the following for every retail franchise in Gurgaon:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Complete store design, interior setup, branding, and POS technology installation</li>
              <li>Daily operations management under a tested Standard Operating Process (SOP)</li>
              <li>
                Inventory management and supply chain coordination through Buyzaar Mart&#39;s procurement network
              </li>
              <li>
                Hassle-Free Inventory Assurance &#8212; expired and damaged goods taken back contractually
              </li>
              <li>Staff training before opening and ongoing performance management</li>
              <li>Grand opening marketing campaign and ongoing hyperlocal digital advertising</li>
              <li>Real-time KPI dashboards and scheduled operational and quality audits</li>
            </ul>

            <p>
              <strong>The key difference:</strong> Under FOCM, the franchisee has periodic oversight involvement and participates in key operational decisions. Under FOCO, Buyzaar Mart takes complete end-to-end operational responsibility &#8212; the franchisee is fully passive with zero required involvement in store operations.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Is Retail Experience Required to Start a Franchise in Gurgaon?
            </h2>

            <p>
              No. Both the FOCM and FOCO models are specifically designed for investors without retail operations experience.
            </p>

            <p>
              Under FOCM, Buyzaar Mart manages all daily store operations and trains your staff fully before the store opens &#8212; you participate in oversight without needing operational expertise. Under FOCO, Buyzaar Mart operates the store completely &#8212; zero retail knowledge or involvement is required from you at any stage. Many of the most successful franchise partners in the Buyzaar Mart network had no prior retail background before opening their first store.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions &#8212; How to Start a Retail Franchise in Gurgaon
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What is the difference between FOCM and FOCO in a Buyzaar Mart franchise in Gurgaon?
                </h3>
                <p className="mt-2">
                  Both models mean you own the franchise and Buyzaar Mart handles operations. Under FOCM (Franchise Owned, Company Managed), you retain periodic oversight and participate in key decisions. Under FOCO (Franchise Owned, Company Operated), Buyzaar Mart takes complete operational responsibility &#8212; you are a fully passive investor with zero day-to-day involvement required. Both models include Hassle-Free Inventory Assurance, full store setup, supply chain access, staff training, and marketing support under a 5-year formal agreement.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How long does it take to start a retail franchise in Gurgaon with Buyzaar Mart?
                </h3>
                <p className="mt-2">
                  From initial enquiry to grand opening takes 8 to 12 weeks &#8212; covering location survey, franchise agreement, complete store setup, staff training, and launch marketing.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the minimum investment to start a retail franchise in Gurgaon?
                </h3>
                <p className="mt-2">
                  Investment varies by format and location. The Mini Mart format has the most accessible entry point. Buyzaar Mart provides a personalised, itemised investment breakdown specific to your Gurgaon site after the location evaluation. Call 9217991727 to receive yours.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Which areas of Gurgaon are best for starting a retail franchise?
                </h3>
                <p className="mt-2">
                  Dwarka Expressway Sectors 82&#8211;115, Palam Vihar, South City, Sushant Lok inner lanes, DLF Phase society markets, Sector 56&#8211;58, and Bajghera currently offer the strongest combination of residential catchment quality, commercial rent accessibility, and organized retail gap.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the Hassle-Free Inventory Assurance in a Buyzaar Mart franchise?
                </h3>
                <p className="mt-2">
                  It is a contractual commitment in every Buyzaar Mart franchise agreement that expired and damaged goods are taken back by the company. This protects the retail franchise investor from the most common source of unexpected financial loss in organized retail.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What certifications does Buyzaar Mart carry for operating retail franchises in Gurgaon?
                </h3>
                <p className="mt-2">
                  Buyzaar Mart is FSSAI Licensed by the Food Safety and Standards Authority of India, GST Registered, and MSME Certified by the Ministry of MSME, Government of India.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How many store formats are available for a retail franchise in Gurgaon?
                </h3>
                <p className="mt-2">
                  Three &#8212; Mini Mart (600&#8211;1000 sq ft), Super Mart (1001&#8211;3000 sq ft), and Hyper Mart (3001&#8211;8000 sq ft). The right format is recommended by Buyzaar Mart&#39;s team based on your specific Gurgaon site evaluation.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Retail Franchise in Gurgaon &#8212; One Call Begins Everything
              </h2>

              <p className="mb-4 text-gray-800">
                Gurgaon&#39;s daily needs retail market is large, consistently active, and underpenetrated in its fastest-growing residential corridors. The step-by-step process to start a retail franchise here is structured, guided, and supported end-to-end by The Buyzaar Mart team.
              </p>

              <p className="mb-4 font-semibold text-gray-800">
                You invest. We manage or operate &#8212; your choice. Your Gurgaon retail franchise earns &#8212; every day.
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Call / WhatsApp:</span> 9217991727
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:info@thebuyzaarmart.com" className="hover:underline">
                  info@thebuyzaarmart.com
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Business Hours:</span> Monday &#8211; Saturday, 9:00 AM &#8211; 7:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="gurgaon"
            currentSlug="/gurgaon/how-to-start-retail-franchise-gurgaon"
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