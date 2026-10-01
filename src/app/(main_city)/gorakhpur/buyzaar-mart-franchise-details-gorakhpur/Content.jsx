import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Franchise in Gorakhpur | The Buyzaar Mart",
  description:
    "The Buyzaar Mart offers franchise opportunities in Gorakhpur with Mini Mart, Super Mart, and Hyper Mart formats, FOCM and FOCO models, centralized procurement, technology-enabled operations, and full franchise partner support.",
  url: "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-franchise-details-gorakhpur",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gorakhpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Gorakhpur",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Franchise Formats in Gorakhpur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Compact franchise format for residential colonies and compact market corners in Gorakhpur (600 to 1,000 sq ft).",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Mid-sized franchise format for busy roads and larger neighborhoods in Gorakhpur (1,001 to 3,000 sq ft).",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Large-format franchise for high-footfall locations with large catchments in Gorakhpur (3,001 to 8,000 sq ft).",
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
      name: "What are the main Buyzaar Mart franchise details for Gorakhpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Investment from ₹15 lakh, FOCM and FOCO models, and Mini, Super and Hyper Mart formats with full brand support.",
      },
    },
    {
      "@type": "Question",
      name: "Which models are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM (Franchise Owned, Company Managed) and FOCO (Franchise Owned, Company Operated).",
      },
    },
    {
      "@type": "Question",
      name: "What store sizes can I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mini Mart from 600 to 1,000 sq ft, Super Mart from 1,001 to 3,000 sq ft and Hyper Mart from 3,001 to 8,000 sq ft.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The company provides systems, training and support.",
      },
    },
    {
      "@type": "Question",
      name: "What margin is mentioned by the brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An effective gross margin of 18 to 20 percent, though actual results vary.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill the inquiry form on thebuyzaarmart.com or call 9217991727.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the head office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "D-43, Third Floor, Sector 6, Noida.",
      },
    },
    {
      "@type": "Question",
      name: "Can I visit a running store first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ask the team about running stores such as those in Kanpur and Noida.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will the team reply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The company states a reply within 24 hours, and the team is available Monday to Saturday, 9 AM to 7 PM.",
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
              Buyzaar Mart Franchise Details Gorakhpur: Investment, Models, Support and Process
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Details at a Glance
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>If you are searching for Buyzaar Mart franchise details in Gorakhpur, this page gives you the key facts in one place, from investment and models to support, compliance and contact information.</li>
              <li>The Buyzaar Mart is a grocery and supermarket franchise brand built on the promise &quot;Your Friendly Neighborhood Store&quot;.</li>
              <li>Investment starts from ₹15 lakh, and the final amount depends on the store format and area you choose.</li>
              <li>The brand offers two ownership models, FOCM and FOCO, along with three store formats: Mini Mart, Super Mart and Hyper Mart.</li>
              <li>Use this page as a fact sheet before you speak with the franchise team, so your questions are clear and focused.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Quick Facts Summary
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Brand: The Buyzaar Mart, a grocery and supermarket franchise network.</li>
              <li>Business type: Grocery, FMCG and daily-need retail under one roof.</li>
              <li>Starting investment: from ₹15 lakh.</li>
              <li>Franchise models: FOCM (Franchise Owned, Company Managed) and FOCO (Franchise Owned, Company Operated).</li>
              <li>Store formats: Mini Mart (600 to 1,000 sq ft), Super Mart (1,001 to 3,000 sq ft) and Hyper Mart (3,001 to 8,000 sq ft).</li>
              <li>Stated gross margin: an effective gross margin of 18 to 20 percent.</li>
              <li>Compliance: FSSAI licensed, GST registered and MSME certified.</li>
              <li>Contact: 9217991727 and info@thebuyzaarmart.com.</li>
              <li>Team availability: Monday to Saturday, 9 AM to 7 PM, with a reply stated within 24 hours.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              About The Buyzaar Mart
            </h2>

            <h3 className="font-medium text-gray-900">Mission</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>To empower communities through retail ownership, so individuals can build dignified livelihoods by running neighborhood stores.</li>
              <li>To deliver fairness, affordability and convenience to everyday shoppers.</li>
            </ul>

            <h3 className="font-medium text-gray-900">Vision</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>To open multiple stores across India with a focus on transparency, accessibility and care.</li>
            </ul>

            <h3 className="font-medium text-gray-900">Brand Pillars</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Simplicity: the company handles the complexity of purchasing, handling, inventory and supply chain.</li>
              <li>Reliability: timely supply, transparent processes and a partner you can trust.</li>
              <li>Affordability and Quality: a curated range, fair pricing and consistent availability.</li>
              <li>Ownership and Legacy: a store is a family business to build, grow and pass on.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Gorakhpur for This Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Gorakhpur is a leading city of eastern Uttar Pradesh and a centre for surrounding districts.</li>
              <li>Households, students, hospital visitors, railway travellers and traders create regular daily demand.</li>
              <li>New residential colonies need convenient, well-organised supermarkets.</li>
              <li>Branded grocery retail is still developing, so early franchise owners can build recognition faster.</li>
              <li>Daily-need products sell in every season, which supports stable footfall.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Model Details
            </h2>

            <h3 className="font-medium text-gray-900">FOCM: Franchise Owned, Company Managed</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>You own the store and provide the investment.</li>
              <li>The company manages operations, supply chain and systems, with full setup and ongoing support.</li>
              <li>Suits professionals, NRIs, business owners and first-time entrepreneurs who want guided management.</li>
            </ul>

            <h3 className="font-medium text-gray-900">FOCO: Franchise Owned, Company Operated</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>You own the store, and the company operates it as per brand standards.</li>
              <li>Suits investors who want ownership with minimal day-to-day involvement.</li>
            </ul>

            <h3 className="font-medium text-gray-900">Model Selection Tips</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Decide how much time you can give to the business each week.</li>
              <li>Both models bring the brand, technology and supply chain of The Buyzaar Mart.</li>
              <li>Ask the franchise team to explain the exact responsibilities and reporting under each model.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Format Details
            </h2>

            <h3 className="font-medium text-gray-900">Mini Mart: 600 to 1,000 sq ft</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Suited to residential colonies, lanes and compact market corners.</li>
              <li>Lower setup effort and easier daily control.</li>
            </ul>

            <h3 className="font-medium text-gray-900">Super Mart: 1,001 to 3,000 sq ft</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Suited to busy roads and larger neighborhoods.</li>
              <li>A wider range with better display and shopping space.</li>
            </ul>

            <h3 className="font-medium text-gray-900">Hyper Mart: 3,001 to 8,000 sq ft</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Suited to high-footfall locations with large catchments.</li>
              <li>The widest assortment and a complete one-stop shopping experience.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment Details
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>The franchise investment starts from ₹15 lakh.</li>
              <li>The investment calculator on thebuyzaarmart.com lets you choose a store type, enter your area between 600 and 8,000 sq ft and view an estimate.</li>
              <li>The estimate covers stock, interior, software fee, franchise fee (including 18% GST) and security deposit.</li>
              <li>The exact figure changes with store size, so always confirm a written quote for your Gorakhpur location.</li>
              <li>Keep working capital ready for the early months, so cash flow stays comfortable while the store builds momentum.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Support Details
            </h2>

            <h3 className="font-medium text-gray-900">Store Setup</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Uniform branding and store design.</li>
              <li>Layout guidance for organised shelves and easy navigation.</li>
            </ul>

            <h3 className="font-medium text-gray-900">Technology</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>POS-enabled billing for fast and accurate checkout.</li>
              <li>CRM to understand customers and build lasting relationships.</li>
            </ul>

            <h3 className="font-medium text-gray-900">Supply Chain</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Purchasing and supply chain support for consistent stock availability.</li>
              <li>Demand-based stocking that helps reduce dead stock.</li>
              <li>Localized product flexibility to match Gorakhpur&apos;s preferences and festivals.</li>
            </ul>

            <h3 className="font-medium text-gray-900">Marketing</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>A store launch strategy for your location.</li>
              <li>Local marketing campaigns and customer acquisition support.</li>
            </ul>

            <h3 className="font-medium text-gray-900">Operations</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Operational backend support and ongoing guidance from setup to daily running.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Product Range Details
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Staples: atta, rice, pulses, edible oil, sugar and spices.</li>
              <li>Packaged foods: biscuits, snacks, beverages and confectionery.</li>
              <li>Personal care, beauty, baby care and home care products.</li>
              <li>Daily household essentials that families buy every week.</li>
              <li>Trusted brands in the network, such as HUL, ITC, Nestle, Tata Consumer, Dabur, Britannia, Parle, Marico and Patanjali.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Compliance and Legal Details
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>The Buyzaar Mart is FSSAI licensed, GST registered and MSME certified.</li>
              <li>The company provides compliance support during KYC and documentation.</li>
              <li>You review and sign a franchise agreement before starting.</li>
              <li>Read every clause on fees, deposits, support terms and responsibilities, and ask questions before signing.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Application Process Details
            </h2>

            <h3 className="font-medium text-gray-900">Step 1: Inquiry</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Visit thebuyzaarmart.com and fill the inquiry form with your name, email, phone number, state and city.</li>
              <li>Choose Uttar Pradesh as the state and enter Gorakhpur as the city.</li>
              <li>Add an optional message with your preferred model, store size and budget.</li>
            </ul>

            <h3 className="font-medium text-gray-900">Step 2: Documentation</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Complete KYC and legal paperwork with guidance from the team.</li>
              <li>Review the agreement and sign once everything is clear.</li>
            </ul>

            <h3 className="font-medium text-gray-900">Step 3: Store Launch</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Prepare launch strategy, local marketing and operational backend with the team.</li>
              <li>Open the store with customer acquisition support in place.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents Checklist
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Identity proof and address proof of the applicant.</li>
              <li>PAN card and other KYC details.</li>
              <li>Property ownership papers or a rent agreement for the store space.</li>
              <li>Business bank details for transactions.</li>
              <li>Recent photographs and any forms shared by the franchise team.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Earning Details to Understand Clearly
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>The brand states an effective gross margin of 18 to 20 percent.</li>
              <li>Gross margin is not net profit, since rent, salaries, electricity and other costs must be deducted.</li>
              <li>Actual results depend on location, footfall, store size, service quality and competition.</li>
              <li>Ask the team how reports and earnings are tracked under your chosen model.</li>
              <li>Prepare a monthly budget and review it regularly.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Location Details: What to Look For in Gorakhpur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Dense residential areas, busy markets and roads with regular traffic.</li>
              <li>Good visibility, parking and easy customer access.</li>
              <li>Nearby hospitals, colleges, railway routes and growing housing projects.</li>
              <li>Limited quality competition, or clear gaps in cleanliness, range or service.</li>
              <li>Clear property paperwork and suitable commercial use.</li>
              <li>A short review by the franchise team before you finalise the space.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Network Details
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Running stores: Shyam Nagar in Kanpur, Sector 44 Chalera in Noida, Gangoh near the bus stand, Behat in Saharanpur and Bahadrabad in Haridwar.</li>
              <li>Upcoming store: LV Plaza, Laxmi Villas, Rajnagar Extension, Ghaziabad.</li>
              <li>Head office: D-43, Third Floor, Sector 6, Noida.</li>
              <li>Ask the team about visiting a running store to see the layout and customer flow in person.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Benefits of the Buyzaar Mart Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Ownership of a branded retail asset in a growing city.</li>
              <li>A recognised store identity with uniform branding and design.</li>
              <li>POS billing, CRM and supply chain support that reduce daily complexity.</li>
              <li>Steady demand from groceries and daily essentials.</li>
              <li>Marketing and launch support to attract your first customers.</li>
              <li>A business that can be built, grown and passed on within the family.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise vs Independent Kirana Store
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>An independent owner must arrange suppliers, pricing, billing and branding alone.</li>
              <li>A franchise owner starts with a ready brand, tested systems and structured supply support.</li>
              <li>Customers often trust a branded supermarket faster than a new unnamed shop.</li>
              <li>Uniform standards give shoppers a consistent experience and encourage repeat visits.</li>
              <li>You still keep local ownership, personal service and community relationships.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Questions to Ask the Franchise Team
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>What exactly is included in the franchise fee, software fee and security deposit?</li>
              <li>Which tasks does the company handle under FOCM, and which under FOCO?</li>
              <li>How often is stock replenished, and how are slow-moving items handled?</li>
              <li>What training and launch marketing will be provided for my Gorakhpur store?</li>
              <li>What are the agreement duration, renewal and exit terms?</li>
              <li>Can I visit a running store such as those in Kanpur or Noida before deciding?</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips to Run a Successful Store
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Keep shelves clean, well lit and stocked with fast-moving daily items.</li>
              <li>Train staff to greet customers, bill quickly and answer questions politely.</li>
              <li>Use CRM data to recognise regular shoppers and reward loyalty.</li>
              <li>Review weekly sales to learn which categories perform best.</li>
              <li>Follow brand pricing and display standards consistently.</li>
              <li>Stay in regular contact with the franchise team and seek help early.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Buyzaar Mart Stands Out
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>The brand promise is retail without pain, with trust, transparency and constant support.</li>
              <li>Smart operations use tried and tested, technology-enabled systems and models.</li>
              <li>An end-to-end ecosystem covers operations and marketing, so owners are not left to manage everything alone.</li>
              <li>The store format is designed for urban and semi-urban households, which suits Gorakhpur and nearby areas.</li>
              <li>Affordable pricing and a wide product range encourage customers to return again and again.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Should Consider This Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>First-time entrepreneurs looking for a proven retail system.</li>
              <li>Working professionals seeking a business asset with company support.</li>
              <li>Existing kirana owners who want to upgrade to a branded supermarket.</li>
              <li>NRIs and investors interested in a stable retail investment at home.</li>
              <li>Families building a long-term business for the next generation.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Mistakes to Avoid
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Choosing a location only because the rent is low.</li>
              <li>Picking a model without thinking about your available time.</li>
              <li>Signing without reading fees and support terms carefully.</li>
              <li>Forgetting working capital for the early months.</li>
              <li>Expecting instant profits instead of steady growth.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What are the main Buyzaar Mart franchise details for Gorakhpur?
                </h3>
                <p className="mt-2">
                  Investment from ₹15 lakh, FOCM and FOCO models, and Mini, Super and Hyper Mart formats with full brand support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Which models are available?
                </h3>
                <p className="mt-2">
                  FOCM (Franchise Owned, Company Managed) and FOCO (Franchise Owned, Company Operated).
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What store sizes can I choose?
                </h3>
                <p className="mt-2">
                  Mini Mart from 600 to 1,000 sq ft, Super Mart from 1,001 to 3,000 sq ft and Hyper Mart from 3,001 to 8,000 sq ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No. The company provides systems, training and support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What margin is mentioned by the brand?
                </h3>
                <p className="mt-2">
                  An effective gross margin of 18 to 20 percent, though actual results vary.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How do I apply?
                </h3>
                <p className="mt-2">
                  Fill the inquiry form on thebuyzaarmart.com or call 9217991727.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Where is the head office?
                </h3>
                <p className="mt-2">
                  D-43, Third Floor, Sector 6, Noida.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Can I visit a running store first?
                </h3>
                <p className="mt-2">
                  Yes, ask the team about running stores such as those in Kanpur and Noida.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How quickly will the team reply?
                </h3>
                <p className="mt-2">
                  The company states a reply within 24 hours, and the team is available Monday to Saturday, 9 AM to 7 PM.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Get Complete Buyzaar Mart Franchise Details for Gorakhpur
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Gorakhpur&apos;s growing commercial centre status and rising demand for organised retail make it an ideal market for a Buyzaar Mart franchise.</li>
                <li>Join The Buyzaar Mart franchise network and bring your neighborhood a modern daily needs store built on trust, convenience, and professional retail systems.</li>
                <li>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:info@thebuyzaarmart.com"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    info@thebuyzaarmart.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Phone / WhatsApp:</span>{" "}
                  <a
                    href="tel:+919217991727"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    9217991727
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Business Hours:</span> Monday to Saturday, 09:00 AM – 07:00 PM
                </li>
              </ul>
            </div>
          </div>

          <CityInternalLinks
            city="gorakhpur"
            currentSlug="/gorakhpur/buyzaar-mart-franchise-details-gorakhpur"
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