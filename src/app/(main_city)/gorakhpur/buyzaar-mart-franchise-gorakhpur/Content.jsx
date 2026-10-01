import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Franchise Gorakhpur | Grocery Franchise ₹15L",
  description:
    "Start a Buyzaar Mart franchise in Gorakhpur from ₹15 lakh. FOCM and FOCO models, POS billing, supply chain, and launch support included.",
  url: "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-franchise-gorakhpur",
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
          "A 600 to 1,000 sq ft grocery franchise format for residential neighborhoods and compact market spots.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1,001 to 3,000 sq ft grocery franchise format for busy roads, larger localities, and growing townships.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3,001 to 8,000 sq ft large-format store for high-footfall areas and one-stop shopping.",
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
      name: "What is the investment for a Buyzaar Mart franchise in Gorakhpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Investment starts from ₹15 lakh and depends on store format and area.",
      },
    },
    {
      "@type": "Question",
      name: "Which franchise models are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM (Franchise Owned, Company Managed) and FOCO (Franchise Owned, Company Operated).",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The company provides systems, training, and operational support.",
      },
    },
    {
      "@type": "Question",
      name: "What store sizes can I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mini Mart is available from 600 to 1,000 sq ft, Super Mart from 1,001 to 3,000 sq ft, and Hyper Mart from 3,001 to 8,000 sq ft.",
      },
    },
    {
      "@type": "Question",
      name: "What margin can I expect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The brand mentions an effective gross margin of 18 to 20 percent, though actual results vary.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Submit the inquiry form on thebuyzaarmart.com or call 9217991727.",
      },
    },
    {
      "@type": "Question",
      name: "Is the brand compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It is FSSAI licensed, GST registered, and MSME certified.",
      },
    },
    {
      "@type": "Question",
      name: "Can I visit a running store first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ask the team about running stores such as those in Kanpur and Noida, and see operations in person.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the head office and when can I call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The office is at D-43, Third Floor, Sector 6, Noida, and calls are answered Monday to Saturday, 9 AM to 7 PM.",
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
          __html: JSON.stringify(localBusinessSchema).replace(
            /</g,
            "\\u003c",
          ),
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
              The Buyzaar Mart Franchise Opportunity in Gorakhpur
            </h1>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart franchise in Gorakhpur lets you open a
                branded grocery and supermarket store with the support of a
                growing national franchise network.
              </li>
              <li>
                The Buyzaar Mart works on the idea of &quot;Your Friendly
                Neighborhood Store&quot;, offering groceries, FMCG products, and
                daily essentials at fair prices.
              </li>
              <li>
                Investment starts from ₹15 lakh, and the exact amount depends
                on the store format and area you choose.
              </li>
              <li>
                The brand looks after complex parts of retail such as
                purchasing, inventory, and supply chain, so partners can
                concentrate on customers.
              </li>
              <li>
                This page is a complete guide to the opportunity in Gorakhpur,
                covering the business model, formats, support, compliance,
                returns, and next steps.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              About The Buyzaar Mart Brand
            </h2>

            <h3 className="font-medium text-gray-900">Mission</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                To empower communities through retail ownership, so
                individuals can build dignified livelihoods by running
                neighborhood stores.
              </li>
              <li>
                To offer fairness, affordability, and convenience to everyday
                shoppers.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Vision</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                To open multiple stores across India with a strong focus on
                transparency, accessibility, and care.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Brand Pillars</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Simplicity: the company handles purchasing, inventory, and
                supply chain complexity.
              </li>
              <li>
                Reliability: timely supply, transparent processes, and a
                partner you can trust.
              </li>
              <li>
                Affordability and Quality: a curated range, fair pricing, and
                consistent availability.
              </li>
              <li>
                Ownership and Legacy: a store is a family business that can be
                built, grown, and passed on.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Gorakhpur Is a Good City for a Grocery Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Gorakhpur is one of the leading cities of eastern Uttar Pradesh
                and a hub for surrounding districts.
              </li>
              <li>
                The city has a large residential population, educational
                institutions, hospitals, government offices, and a busy railway
                junction.
              </li>
              <li>
                Every household needs groceries regularly, so demand does not
                depend on a single season or festival.
              </li>
              <li>
                Modern, organised supermarkets are still developing here, which
                gives early franchise owners a chance to build strong local
                recognition.
              </li>
              <li>
                Growing colonies and new housing areas need convenient stores
                close to home.
              </li>
              <li>
                Families now look for cleanliness, branded products, proper
                billing, and fair pricing, which a Buyzaar Mart store is
                designed to deliver.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How the Buyzaar Mart Business Model Works
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You invest in a franchise store of your chosen size in a
                suitable Gorakhpur location.
              </li>
              <li>
                The store carries a wide range of groceries, FMCG items, and
                household essentials under one roof.
              </li>
              <li>
                The brand provides uniform store design, POS billing, CRM, and
                supply chain support.
              </li>
              <li>
                Daily-need products create repeat purchases and steady
                customer traffic.
              </li>
              <li>
                The company states that partners can earn an effective gross
                margin of 18 to 20 percent.
              </li>
              <li>
                Demand-based stocking helps you keep the right products on the
                shelves and avoid dead stock.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Models Explained
            </h2>

            <h3 className="font-medium text-gray-900">
              FOCM: Franchise Owned, Company Managed
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You own the store and invest the capital, while the company
                manages operations, supply chain, and systems.
              </li>
              <li>
                Suitable for working professionals, NRIs, business owners, and
                investors who cannot give full-time attention.
              </li>
              <li>
                Consistent management helps maintain brand standards.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              FOCO: Franchise Owned, Company Operated
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You remain the franchise owner, while the company operates the
                store as per brand guidelines.
              </li>
              <li>
                Suitable for investors who want ownership and returns without
                daily involvement in staff, purchasing, or vendor coordination.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Which One Should You Choose?
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Think about how much time you can give to the store each day.
              </li>
              <li>
                Consider whether you want to stay involved in operations or
                simply own the asset.
              </li>
              <li>
                Discuss both models with the franchise team before finalising
                your decision.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats and Sizes
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart: 600 to 1,000 sq ft
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ideal for residential neighborhoods and compact market spots.
              </li>
              <li>Faster to set up and simpler to manage.</li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart: 1,001 to 3,000 sq ft
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Offers a wider assortment and better display space.</li>
              <li>
                Suitable for busy roads, larger localities, and growing
                townships.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart: 3,001 to 8,000 sq ft
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>A large-format store for high-footfall areas.</li>
              <li>
                Provides the widest range and a true one-stop shopping
                experience.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Understanding Your Investment
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>The franchise investment starts from ₹15 lakh.</li>
              <li>
                The total varies by store type and area, and includes stock,
                interior, software fee, franchise fee including 18% GST, and
                security deposit.
              </li>
              <li>
                The website has an investment calculator where you can select
                Mini Mart, Super Mart, or Hyper Mart and enter your area to see
                an estimate.
              </li>
              <li>
                Keep some extra working capital for the first few months, so
                operations run smoothly.
              </li>
              <li>
                Speak with the franchise team for an exact quote that fits
                your Gorakhpur location.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Support You Receive From The Buyzaar Mart
            </h2>

            <h3 className="font-medium text-gray-900">
              Setup and Branding
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Uniform branding and store design for a professional,
                recognisable look.
              </li>
              <li>
                Guidance on layout so that shelves stay organised and easy to
                shop.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Technology</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A POS-enabled billing system for quick, accurate checkout.
              </li>
              <li>
                A CRM system to build lasting relationships with regular
                customers.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Supply Chain</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Support for purchasing and inventory, so your store stays
                stocked.
              </li>
              <li>
                Localized product flexibility to match Gorakhpur&apos;s
                preferences and festive demand.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Marketing and Launch
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>A store launch strategy for your location.</li>
              <li>
                Local marketing campaigns and customer acquisition support
                during the opening phase.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Ongoing Guidance
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Operational backend support and continuous assistance from
                setup to daily running.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Products Your Store Will Offer
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Staples such as atta, rice, pulses, edible oil, sugar, and
                spices.
              </li>
              <li>
                Packaged foods, biscuits, snacks, beverages, and sweets.
              </li>
              <li>
                Personal care, beauty, baby care, and home care products.
              </li>
              <li>
                Daily-need household items that families buy every week.
              </li>
              <li>
                Products from recognised brands associated with the network,
                including HUL, ITC, Nestle, Tata Consumer, Dabur, Britannia,
                Parle, Marico, Patanjali, and more.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Compliance and Trust
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart is FSSAI licensed, GST registered, and MSME
                certified.
              </li>
              <li>
                The company provides compliance support during documentation
                and setup.
              </li>
              <li>
                Transparent processes and clear agreements help you understand
                your responsibilities before you begin.
              </li>
              <li>
                Clean, well-maintained stores build customer trust and
                encourage repeat visits.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Should Consider This Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                First-time entrepreneurs who want to start with a proven retail
                system.
              </li>
              <li>
                Working professionals looking for a business asset with
                company-managed operations.
              </li>
              <li>
                Existing kirana and general store owners planning to upgrade
                to a branded supermarket.
              </li>
              <li>
                NRIs and investors from Gorakhpur who want a reliable retail
                investment at home.
              </li>
              <li>
                Families who wish to build a long-term business for the next
                generation.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise vs Traditional Kirana Store
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A traditional store owner arranges suppliers, pricing, billing,
                and branding independently.
              </li>
              <li>
                A franchise owner starts with a recognised brand, tested
                systems, and structured supply support.
              </li>
              <li>
                A branded supermarket usually earns customer trust faster than
                a new unnamed shop.
              </li>
              <li>
                Franchise stores follow uniform standards, which improves
                consistency and confidence among shoppers.
              </li>
              <li>
                You still keep the personal touch and local relationships that
                make neighborhood stores special.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Buyzaar Mart Stands Out for Gorakhpur Investors
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand promise is simple: retail without pain, with trust,
                transparency, and constant support.
              </li>
              <li>
                Smart operations and technology-enabled systems reduce daily
                complexity.
              </li>
              <li>
                An end-to-end ecosystem covers operations and marketing, so you
                are not left to manage everything alone.
              </li>
              <li>
                The format is designed for urban and semi-urban households,
                which suits Gorakhpur and nearby areas well.
              </li>
              <li>
                Affordable pricing and a wide product range keep customers
                returning again and again.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing the Best Location in Gorakhpur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Prefer dense residential areas, busy markets, and roads with
                regular traffic.
              </li>
              <li>
                Visit the site at different times of day to understand real
                footfall.
              </li>
              <li>Check visibility, parking, and easy customer access.</li>
              <li>
                Study nearby competitors and look for gaps in service,
                cleanliness, or product range.
              </li>
              <li>
                Consider areas near hospitals, colleges, railway routes, and
                new housing projects.
              </li>
              <li>
                Share your shortlist with the franchise team for guidance
                before you sign any lease.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Get Started: 3 Simple Steps
            </h2>

            <h3 className="font-medium text-gray-900">
              Step 1: Submit an Inquiry
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Visit thebuyzaarmart.com and fill the inquiry form with your
                name, email, phone number, state, and city.
              </li>
              <li>
                You may also call 9217991727 or email{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
                .
              </li>
              <li>
                The company states that it replies within 24 hours.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 2: Documentation
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Complete KYC and legal paperwork with guidance from the team.
              </li>
              <li>
                Review the franchise agreement carefully and sign when
                everything is clear.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 3: Store Launch
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Plan your launch strategy, local marketing, and operational
                backend with the team.
              </li>
              <li>
                Open your store with customer acquisition support in place.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Buyzaar Mart Store Network
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart already runs stores in Kanpur, Noida, Gangoh,
                Behat in Saharanpur, and Bahadrabad in Haridwar.
              </li>
              <li>
                A new store is coming soon at Rajnagar Extension, Ghaziabad.
              </li>
              <li>
                Running stores show how the brand format works in real
                neighborhoods, so you can see the layout, range, and customer
                flow yourself.
              </li>
              <li>
                Ask the franchise team about visiting a store near you before
                you make your final decision.
              </li>
              <li>
                The head office is located in Sector 6, Noida, and the team is
                available Monday to Saturday, 9 AM to 7 PM.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents to Keep Ready
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Identity proof and address proof of the applicant.</li>
              <li>PAN card and other KYC details.</li>
              <li>
                Property ownership papers or a rent agreement for the proposed
                store.
              </li>
              <li>Business bank details for transactions.</li>
              <li>
                Recent photographs and any additional forms shared by the
                franchise team.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Mistakes to Avoid Before Investing
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Picking a location only because the rent is low, without
                checking real footfall.
              </li>
              <li>
                Choosing a model without considering how much time you can give
                to the business.
              </li>
              <li>
                Signing the agreement without reading fees, deposits, and
                support terms carefully.
              </li>
              <li>
                Forgetting to keep working capital for the early months of
                operation.
              </li>
              <li>
                Expecting instant profits when steady growth is the realistic
                path.
              </li>
              <li>
                Delaying paperwork, which can slow down the launch schedule.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Earning Expectations: Stay Realistic
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>The stated effective gross margin is 18 to 20 percent.</li>
              <li>
                Gross margin is not the same as net profit, since rent,
                salaries, power, and other costs must be deducted.
              </li>
              <li>
                Your results depend on location, store size, footfall, service
                quality, and local competition.
              </li>
              <li>
                Prepare a monthly budget and review it regularly to keep your
                business on track.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips for Long-Term Success
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep your store clean, bright, and fully stocked with
                fast-moving daily items.
              </li>
              <li>
                Train staff to be polite, quick at billing, and helpful with
                customer queries.
              </li>
              <li>
                Use CRM data to recognise regular shoppers and reward their
                loyalty.
              </li>
              <li>
                Track weekly sales to learn which categories perform best.
              </li>
              <li>
                Follow brand pricing and display standards consistently.
              </li>
              <li>
                Stay connected with the franchise team and ask for help early
                when needed.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  1. What is the investment for a Buyzaar Mart franchise in
                  Gorakhpur?
                </h3>
                <p className="mt-2">
                  Investment starts from ₹15 lakh and depends on store format
                  and area.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  2. Which franchise models are available?
                </h3>
                <p className="mt-2">
                  FOCM (Franchise Owned, Company Managed) and FOCO (Franchise
                  Owned, Company Operated).
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  3. Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No. The company provides systems, training, and operational
                  support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  4. What store sizes can I choose?
                </h3>
                <p className="mt-2">
                  Mini Mart is available from 600 to 1,000 sq ft, Super Mart
                  from 1,001 to 3,000 sq ft, and Hyper Mart from 3,001 to 8,000
                  sq ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  5. What margin can I expect?
                </h3>
                <p className="mt-2">
                  The brand mentions an effective gross margin of 18 to 20
                  percent, though actual results vary.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  6. How do I apply?
                </h3>
                <p className="mt-2">
                  Submit the inquiry form on thebuyzaarmart.com or call
                  9217991727.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  7. Is the brand compliant?
                </h3>
                <p className="mt-2">
                  Yes. It is FSSAI licensed, GST registered, and MSME
                  certified.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  8. Can I visit a running store first?
                </h3>
                <p className="mt-2">
                  Yes, ask the team about running stores such as those in
                  Kanpur and Noida, and see operations in person.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  9. Where is the head office and when can I call?
                </h3>
                <p className="mt-2">
                  The office is at D-43, Third Floor, Sector 6, Noida, and
                  calls are answered Monday to Saturday, 9 AM to 7 PM.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Buyzaar Mart Franchise in Gorakhpur
              </h2>

              <ul className="list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Start a Buyzaar Mart franchise in Gorakhpur from ₹15 lakh.
                </li>
                <li>
                  Choose between FOCM and FOCO franchise models based on your
                  preferred level of involvement.
                </li>
                <li>
                  Receive support with store setup, POS billing, inventory,
                  supply chain, marketing, and launch operations.
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:info@thebuyzaarmart.com"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    info@thebuyzaarmart.com
                  </a>
                </li>
                <li>
                  Phone / WhatsApp:{" "}
                  <a
                    href="tel:+919217991727"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    9217991727
                  </a>
                </li>
                <li>
                  Business Hours: Monday to Saturday, 09:00 AM – 07:00 PM.
                </li>
              </ul>
            </div>
          </div>

          <CityInternalLinks
            city="gorakhpur"
            currentSlug="/gorakhpur/buyzaar-mart-franchise-gorakhpur"
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