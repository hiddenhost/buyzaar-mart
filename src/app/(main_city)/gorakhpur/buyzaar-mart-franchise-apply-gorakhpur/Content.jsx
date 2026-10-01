import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Franchise Apply Gorakhpur | From ₹15 Lakh",
  description:
    "Apply for a Buyzaar Mart franchise in Gorakhpur. Investment from ₹15 lakh, FOCM and FOCO models, POS billing, and full launch support.",
  url: "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-franchise-apply-gorakhpur",
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
          "A 600 to 1,000 sq ft grocery franchise format for residential colonies, lanes, and compact market corners in Gorakhpur.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1,001 to 3,000 sq ft grocery franchise format for main roads, busy neighborhoods, and growing townships in Gorakhpur.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3,001 to 8,000 sq ft large-format supermarket franchise for high-footfall locations and bigger catchment areas in Gorakhpur.",
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
      name: "How can I apply for a Buyzaar Mart franchise in Gorakhpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill the inquiry form on thebuyzaarmart.com or call 9217991727. Then complete documentation and prepare for launch.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Investment starts from ₹15 lakh and varies with store format and size.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Training and operational support are provided, though basic business interest helps.",
      },
    },
    {
      "@type": "Question",
      name: "Which model should I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM or FOCO suits busy investors, while FOFO suits owners who want to run the store personally.",
      },
    },
    {
      "@type": "Question",
      name: "How much space is required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart needs 600 to 1,000 sq ft, and larger formats go up to 8,000 sq ft.",
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
      name: "How soon will the team reply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The company states responses within 24 hours, from Monday to Saturday, 9 AM to 7 PM.",
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
              Buyzaar Mart Franchise Apply Gorakhpur | From ₹15 Lakh
            </h1>

            <p>
              Looking to apply for a Buyzaar Mart franchise in Gorakhpur? You
              are exploring one of the most promising retail markets in eastern
              Uttar Pradesh, and this guide explains every step of the
              application.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart is a grocery and supermarket franchise network
                with the tagline &quot;Your Friendly Neighborhood Store&quot;.
              </li>
              <li>Investment starts from ₹15 lakh.</li>
              <li>
                Gorakhpur is a major city of the Purvanchal region.
              </li>
              <li>
                Its railway junction, university, hospitals, growing colonies,
                and steady trade with nearby districts create constant demand
                for daily-need products.
              </li>
              <li>
                Families here still prefer trusted neighborhood stores, but
                they now expect clean shelves, fair pricing, branded products,
                and proper billing.
              </li>
              <li>
                A modern franchise store meets exactly that expectation.
              </li>
              <li>
                This page walks you through eligibility, store formats,
                franchise models, documents, the application process, support,
                and expected returns, so you can apply with full confidence.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Gorakhpur Is Ready for a Grocery Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Gorakhpur has a strong demand for groceries, FMCG, and
                household essentials throughout the year.
              </li>
              <li>
                Residential clusters around Gorakhpur are expanding, creating
                demand for reliable supermarkets close to home.
              </li>
              <li>
                Students, hospital visitors, railway staff, government
                employees, and business families add to consistent footfall.
              </li>
              <li>
                Families increasingly expect clean shelves, fair pricing,
                branded products, and proper billing from neighborhood stores.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart in Gorakhpur
            </h2>

            <h3 className="font-medium text-gray-900">
              Strong Everyday Demand
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Groceries, FMCG, and household essentials are bought every day,
                in every season, and across every income group.
              </li>
              <li>
                Residential clusters around Gorakhpur are expanding, which
                means new households need a reliable supermarket close to home.
              </li>
              <li>
                Students, hospital visitors, railway staff, government
                employees, and business families all add to consistent
                footfall.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              A Brand Built on Trust and Simplicity
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart brand stands on four pillars: Simplicity,
                Reliability, Affordability and Quality, and Ownership and
                Legacy.
              </li>
              <li>
                The company takes the complexity out of purchasing, handling,
                inventory, and supply chain, so you can focus on customers.
              </li>
              <li>
                The store is treated as a family business that you can build,
                grow, and pass on to the next generation.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Recognised Compliance
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>The Buyzaar Mart is FSSAI licensed.</li>
              <li>The Buyzaar Mart is GST registered.</li>
              <li>The Buyzaar Mart is MSME certified.</li>
              <li>
                These credentials give franchise partners and local customers
                confidence in food safety, tax compliance, and business
                legitimacy.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Models Available When You Apply
            </h2>

            <h3 className="font-medium text-gray-900">
              FOCM Model (Franchise Owned, Company Managed)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You invest in the store, while the company manages daily
                operations, supply chain, and systems.
              </li>
              <li>
                This model suits working professionals, NRIs, and investors
                who cannot sit at the counter all day.
              </li>
              <li>
                Franchise-owned, company-managed stores keep operations
                standardised and risk lower.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              FOCO Model (Franchise Owned, Company Operated)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The franchise partner owns the store, and the company operates
                it as per brand standards.
              </li>
              <li>
                It is ideal for investors who want ownership and returns
                without handling staff, stock planning, or vendor coordination.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats: Mini Mart, Super Mart and Hyper Mart
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600 to 1,000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Best for residential colonies, lanes, and compact market
                corners in Gorakhpur.
              </li>
              <li>Lower investment and faster setup.</li>
              <li>Easy daily management.</li>
              <li>
                Suited to first-time franchise owners who want a controlled
                start.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart (1,001 to 3,000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Offers a wider range of groceries, FMCG, and household
                products.
              </li>
              <li>Provides space for better display and self-service.</li>
              <li>
                A good fit for main roads, busy neighborhoods, and growing
                townships.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3,001 to 8,000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A large-format supermarket for high-footfall locations and
                bigger catchment areas.
              </li>
              <li>Offers the widest product range.</li>
              <li>
                Provides the strongest one-stop shopping experience.
              </li>
              <li>Best for investors seeking a larger retail presence.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Note on Investment
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Total investment depends on your store size and format.
              </li>
              <li>Investment starts from ₹15 lakh.</li>
              <li>
                The website calculator estimates stock, interior, software
                fee, franchise fee including 18% GST, and security deposit for
                your chosen area.
              </li>
              <li>
                For an exact Gorakhpur quote, speak with the franchise team.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Eligibility: Who Can Apply for a Buyzaar Mart Franchise in
              Gorakhpur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Any individual, family, partner, or investor with the required
                capital can apply.
              </li>
              <li>
                Retail experience is helpful but not compulsory because the
                company provides systems, training, and support.
              </li>
              <li>
                You should have a suitable commercial space in Gorakhpur
                within the store size range of 600 to 8,000 sq ft.
              </li>
              <li>
                Your location should have good visibility, easy access, and a
                nearby residential population.
              </li>
              <li>
                You should be ready to follow brand standards for pricing,
                display, hygiene, and customer service.
              </li>
              <li>
                Basic KYC documents and legal compliance are required, and the
                team helps you complete them.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Apply: 3 Simple Steps
            </h2>

            <h3 className="font-medium text-gray-900">
              Step 1: Submit an Inquiry
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Visit thebuyzaarmart.com and open the franchise page.
              </li>
              <li>
                Fill in the inquiry form with your name, email, phone number,
                state as Uttar Pradesh, and city as Gorakhpur.
              </li>
              <li>
                Add a short message about your preferred model, budget, and
                location if you wish.
              </li>
              <li>
                Receive a response from the team, which the company states will
                come within 24 hours.
              </li>
              <li>Call 9217991727 for assistance.</li>
              <li>
                Write to{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
                .
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 2: Documentation
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Complete KYC and legal documentation with guidance from the
                franchise team.
              </li>
              <li>
                Review the franchise agreement carefully, ask questions, and
                then sign.
              </li>
              <li>
                Receive complete compliance support so the legal side stays
                simple and clear.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 3: Store Launch
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Get a store launch strategy planned around your Gorakhpur
                location.
              </li>
              <li>
                Run local marketing campaigns to announce your grand opening.
              </li>
              <li>
                Receive operational backend support for stock, billing, and
                daily processes.
              </li>
              <li>
                Get customer acquisition support in the early days to build
                regular buyers.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents Usually Needed
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Identity proof and address proof of the applicant.</li>
              <li>PAN card and other KYC details.</li>
              <li>
                Property ownership papers or a rent agreement for the store
                space.
              </li>
              <li>Bank details for business transactions.</li>
              <li>
                GST and food safety registrations, with compliance support from
                the team.
              </li>
              <li>
                Passport-size photographs and any additional forms shared by
                the franchise team.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Complete Support You Receive as a Franchise Partner
            </h2>

            <h3 className="font-medium text-gray-900">
              Store Setup and Branding
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Uniform branding and store design give your outlet a
                professional, recognisable identity.
              </li>
              <li>
                Layout planning helps shelves stay organised, so customers
                find products easily.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Technology and Billing
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A POS-enabled billing system keeps every sale quick and
                accurate.
              </li>
              <li>
                A CRM system helps you build lasting relationships with repeat
                customers.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Inventory and Supply Chain
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company handles purchasing and supply chain, so shelves
                remain stocked with the right products.
              </li>
              <li>
                Demand-based stocking helps you avoid dead stock and
                unorganised inventory, which usually lead to losses.
              </li>
              <li>
                Localized product flexibility lets the store adapt to
                Gorakhpur&apos;s preferences, festivals, and regional tastes.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Training and Ongoing Guidance
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Training covers store operations, customer handling, billing,
                and inventory basics.
              </li>
              <li>
                Continuous support from setup to daily operations means you are
                never left alone.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Wide Product Range Under One Roof
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Staples such as atta, rice, dal, edible oil, sugar, and spices.
              </li>
              <li>
                Packaged foods, biscuits, snacks, beverages, and confectionery.
              </li>
              <li>
                Personal care, beauty, baby care, and home care products.
              </li>
              <li>
                Household essentials and daily-need items for every family
                member.
              </li>
              <li>
                Trusted national brands from the network, including HUL, ITC,
                Nestle, Tata Consumer, Dabur, Britannia, Parle, Marico,
                Patanjali, and many more.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Profit Potential and Returns
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart states that partners can earn an effective
                gross margin of 18 to 20 percent.
              </li>
              <li>
                Daily-need products bring repeat purchases, which supports
                steady cash flow.
              </li>
              <li>
                Affordable pricing, wide range, and good service help increase
                customer loyalty over time.
              </li>
              <li>
                Actual returns depend on location, store size, footfall, rent,
                staff, and local competition, so plan your numbers carefully.
              </li>
              <li>
                Choosing the right locality in Gorakhpur is the single biggest
                factor for early success.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips to Choose the Best Location in Gorakhpur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Prefer dense residential areas, popular markets, and roads with
                regular traffic.
              </li>
              <li>
                Check parking space, road visibility, and ease of entry for
                customers.
              </li>
              <li>
                Study nearby competitors, but also look for gaps in service and
                product range.
              </li>
              <li>
                Look at areas near hospitals, educational institutions, railway
                routes, and new housing projects.
              </li>
              <li>
                Confirm that the property has clear paperwork and suitable
                commercial use.
              </li>
              <li>
                Ask the franchise team to review your shortlisted locations
                before you finalise.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise vs Independent Kirana Store in Gorakhpur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                An independent store owner must find suppliers, negotiate
                prices, design the layout, and solve billing problems alone.
              </li>
              <li>
                A Buyzaar Mart franchise gives you a ready brand, tested
                systems, and a structured supply chain from day one.
              </li>
              <li>
                Customers trust a branded supermarket faster than a new
                unnamed shop, so your opening weeks become easier.
              </li>
              <li>
                Uniform pricing strategy and curated ranges reduce guesswork
                about what to stock and how to price it.
              </li>
              <li>
                You still keep the benefits of a neighborhood business:
                personal service, local relationships, and family ownership.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Common Mistakes to Avoid Before You Apply
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Do not choose a location only because rent is low, because low
                footfall can hurt sales.
              </li>
              <li>
                Do not ignore the size of the catchment area around your shop.
              </li>
              <li>
                Do not skip reading the franchise agreement, and clarify every
                fee, deposit, and support term before signing.
              </li>
              <li>
                Do not compare only investment amounts, because support, supply
                chain, and brand strength matter equally.
              </li>
              <li>
                Do not delay compliance work, since food safety and tax
                registrations are essential for a grocery store.
              </li>
              <li>
                Do not plan without a working capital cushion for the first few
                months of operation.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Questions to Ask the Franchise Team Before Applying
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Which model, FOCM, FOCO, or FOFO, is right for my budget and
                time?
              </li>
              <li>
                Which store format suits my selected Gorakhpur location and
                size?
              </li>
              <li>
                What is included in the franchise fee, software fee, and
                security deposit?
              </li>
              <li>
                How does the supply chain work, and how often is stock
                replenished?
              </li>
              <li>
                What training and launch marketing will be provided?
              </li>
              <li>
                Can I visit a running store, such as those in Kanpur or Noida,
                before deciding?
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Apply Now
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Modern grocery retail in Gorakhpur is still growing, and early
                movers can build a loyal customer base.
              </li>
              <li>
                The Buyzaar Mart is expanding across Uttar Pradesh and NCR.
              </li>
              <li>
                Running stores already operate in cities such as Kanpur,
                Noida, Saharanpur, and Haridwar.
              </li>
              <li>
                A proven system reduces the risk that first-time entrepreneurs
                usually face.
              </li>
              <li>
                Starting early gives you time to select the best location
                before competition increases.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  1. How can I apply for a Buyzaar Mart franchise in Gorakhpur?
                </h3>
                <p className="mt-2">
                  Fill the inquiry form on thebuyzaarmart.com or call
                  9217991727. Then complete documentation and prepare for
                  launch.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  2. What is the minimum investment?
                </h3>
                <p className="mt-2">
                  Investment starts from ₹15 lakh and varies with store format
                  and size.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  3. Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No. Training and operational support are provided, though
                  basic business interest helps.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  4. Which model should I choose?
                </h3>
                <p className="mt-2">
                  FOCM or FOCO suits busy investors, while FOFO suits owners
                  who want to run the store personally.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  5. How much space is required?
                </h3>
                <p className="mt-2">
                  A Mini Mart needs 600 to 1,000 sq ft, and larger formats go
                  up to 8,000 sq ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  6. What margin can I expect?
                </h3>
                <p className="mt-2">
                  The brand mentions an effective gross margin of 18 to 20
                  percent, though actual results vary.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  7. How soon will the team reply?
                </h3>
                <p className="mt-2">
                  The company states responses within 24 hours, from Monday to
                  Saturday, 9 AM to 7 PM.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Apply for a Buyzaar Mart Franchise in Gorakhpur
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Apply for a Buyzaar Mart franchise in Gorakhpur starting from
                  ₹15 lakh.
                </li>
                <li>
                  Choose from FOCM, FOCO, or FOFO based on your budget and
                  involvement.
                </li>
                <li>
                  Get support with store setup, POS billing, inventory,
                  supply chain, training, and launch marketing.
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
            currentSlug="/gorakhpur/buyzaar-mart-franchise-apply-gorakhpur"
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