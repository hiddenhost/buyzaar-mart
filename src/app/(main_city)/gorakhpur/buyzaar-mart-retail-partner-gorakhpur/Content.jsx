import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Retail Partner Gorakhpur | From ₹15 Lakh",
  description:
    "Become a Buyzaar Mart retail partner in Gorakhpur. Own a branded supermarket with FOCM and FOCO models, POS billing, supply chain, and launch support.",
  url: "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-retail-partner-gorakhpur",
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
    name: "The Buyzaar Mart Retail Partner Formats in Gorakhpur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600 to 1,000 sq ft format suited to residential colonies and compact market corners.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1,001 to 3,000 sq ft format suited to busy roads and larger neighborhoods.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3,001 to 8,000 sq ft format suited to high-footfall locations and large catchments.",
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
      name: "Who is a Buyzaar Mart retail partner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A retail partner is a franchise owner who runs a Buyzaar Mart store with the brand's systems and support.",
      },
    },
    {
      "@type": "Question",
      name: "Which models are available in Gorakhpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The two models are FOCM (Franchise Owned, Company Managed) and FOCO (Franchise Owned, Company Operated).",
      },
    },
    {
      "@type": "Question",
      name: "What is the starting investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Investment starts from ₹15 lakh, depending on store format and size.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Systems, training, and operational support are provided.",
      },
    },
    {
      "@type": "Question",
      name: "What store sizes are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sizes range from 600 sq ft for Mini Mart to 8,000 sq ft for Hyper Mart.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact the team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call 9217991727 or email info@thebuyzaarmart.com, Monday to Saturday, 9 AM to 7 PM.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see a running store before I decide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ask the team about running stores such as those in Kanpur and Noida, and visit to understand operations.",
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
              Buyzaar Mart Retail Partner Gorakhpur | From ₹15 Lakh
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Does It Mean to Be a Buyzaar Mart Retail Partner?
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A Buyzaar Mart retail partner in Gorakhpur is an entrepreneur
                or investor who owns a Buyzaar Mart store while the brand
                supplies its name, systems, supply chain, and continuous
                support.
              </li>
              <li>
                The Buyzaar Mart is a grocery and supermarket franchise network
                built around the promise &quot;Your Friendly Neighborhood
                Store&quot;, with investment starting from ₹15 lakh.
              </li>
              <li>
                Gorakhpur is a fast-growing city of eastern Uttar Pradesh,
                where families, students, hospital visitors, and traders need
                groceries and daily essentials every day.
              </li>
              <li>
                As a partner, you are not just opening a shop. You become part
                of India&apos;s growing entrepreneurial network and build a
                business you can pass on to your family.
              </li>
              <li>
                This page explains the partnership from a partner&apos;s point
                of view: who can join, what you receive, what you contribute,
                and how the relationship grows.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Partner With The Buyzaar Mart in Gorakhpur
            </h2>

            <h3 className="font-medium text-gray-900">
              A Brand That Simplifies Retail
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company takes away the complexity of purchasing, handling,
                inventory, and supply chain.
              </li>
              <li>
                You focus on customers and local relationships, while the
                brand focuses on systems and standards.
              </li>
              <li>
                The retail promise is simple: fair pricing, assured quality,
                and constant support.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Steady Everyday Demand
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Groceries, FMCG, and household products sell every day, in
                every season, and in every income group.
              </li>
              <li>
                New residential colonies in and around Gorakhpur create fresh
                demand for organised supermarkets close to home.
              </li>
              <li>
                Repeat purchases help build stable customer loyalty over time.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Ownership and Legacy
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand treats a store as a family business that you can
                build, grow, and pass on.
              </li>
              <li>
                Partners gain a lasting asset, not just a short-term income
                source.
              </li>
              <li>
                Local ownership also builds respect and trust in your own
                neighborhood.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Get as a Retail Partner
            </h2>

            <h3 className="font-medium text-gray-900">
              Brand and Store Identity
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Use of The Buyzaar Mart name, with uniform branding and store
                design that customers can recognise instantly.
              </li>
              <li>
                A professional look that builds trust from the first visit.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Technology and Billing
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A POS-enabled billing system for fast, accurate checkout.
              </li>
              <li>
                A customer relationship management system to track regular
                buyers and encourage repeat purchases.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Supply Chain and Inventory
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Support for purchasing and supply chain, so your shelves remain
                stocked with the right products.
              </li>
              <li>
                Demand-based stocking that helps avoid unorganised inventory
                and unnecessary losses.
              </li>
              <li>
                Localized product flexibility, so your range can match
                Gorakhpur&apos;s tastes and festivals.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Marketing and Launch
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A store launch strategy planned around your neighborhood.
              </li>
              <li>Local marketing campaigns for your grand opening.</li>
              <li>
                Customer acquisition support to attract your first regular
                shoppers.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Training and Guidance
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Guidance on store operations, billing, customer handling, and
                inventory basics.
              </li>
              <li>Continuous support from setup to daily operations.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Two Partnership Models to Choose From
            </h2>

            <h3 className="font-medium text-gray-900">
              FOCM: Franchise Owned, Company Managed
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You invest and own the store, while the company manages
                operations, supply chain, and systems.
              </li>
              <li>
                A strong choice for professionals, NRIs, business owners, and
                investors with limited time.
              </li>
              <li>
                Standardised management helps keep quality consistent.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              FOCO: Franchise Owned, Company Operated
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You remain the store owner, while the company operates the
                store as per brand standards.
              </li>
              <li>
                A good fit for partners who want ownership and returns without
                daily operational involvement.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">How to Decide</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Choose based on the time you can realistically give to the
                store.
              </li>
              <li>
                Both models come with the Buyzaar brand, technology, and supply
                chain.
              </li>
              <li>
                Speak with the franchise team to match the model with your
                goals.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats for Retail Partners
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Mini Mart, 600 to 1,000 sq ft: suited to residential colonies
                and compact market corners.
              </li>
              <li>
                Super Mart, 1,001 to 3,000 sq ft: suited to busy roads and
                larger neighborhoods with a wider range.
              </li>
              <li>
                Hyper Mart, 3,001 to 8,000 sq ft: suited to high-footfall
                locations and large catchments.
              </li>
              <li>
                Your investment depends on the format and area, and starts from
                ₹15 lakh.
              </li>
              <li>
                The calculator on thebuyzaarmart.com estimates stock, interior,
                software fee, franchise fee including 18% GST, and security
                deposit.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Can Become a Retail Partner in Gorakhpur
            </h2>

            <h3 className="font-medium text-gray-900">
              First-Time Entrepreneurs
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                People who want to start their own business with a proven
                system instead of building everything alone.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Working Professionals and Investors
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Individuals who prefer to invest in a retail business while the
                company handles day-to-day management.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Existing Shop Owners
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Kirana and general store owners who want to upgrade into a
                branded, technology-enabled supermarket.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Families and Groups</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Families and business partners who want to build a shared
                long-term asset.
              </li>
            </ul>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Anyone with a suitable commercial space and the required
                capital can begin the conversation.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Contribute as a Partner
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Capital investment as per your chosen format and model.
              </li>
              <li>
                A suitable commercial space in Gorakhpur with good visibility
                and access.
              </li>
              <li>
                Commitment to brand standards for pricing, display, hygiene,
                and customer service.
              </li>
              <li>
                Honest cooperation with the franchise team on stock planning,
                compliance, and reporting.
              </li>
              <li>
                Respectful, friendly service to customers, because the brand is
                built on trust.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How the Partnership Journey Works
            </h2>

            <h3 className="font-medium text-gray-900">Stage 1: Inquiry</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Visit thebuyzaarmart.com and fill the inquiry form with your
                name, email, phone number, state, and city.
              </li>
              <li>
                You can also call 9217991727 or write to{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
                .
              </li>
              <li>
                The company states that it responds within 24 hours.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Stage 2: Documentation
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Complete KYC and legal documentation with guidance from the
                team.
              </li>
              <li>
                Review the agreement, ask questions, and sign once everything
                is clear.
              </li>
              <li>
                Receive compliance support so the legal side remains simple.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Stage 3: Launch</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Plan your store launch, local marketing, and operational
                backend.
              </li>
              <li>
                Open your doors with customer acquisition support in place.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Stage 4: Growth</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Track sales, learn from customer behavior, and refine your
                product range.
              </li>
              <li>
                Stay connected with the team for ongoing support and
                improvement.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Wide Product Range Your Customers Will Find
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Staples such as atta, rice, dal, edible oil, sugar, and spices.
              </li>
              <li>
                Packaged foods, snacks, biscuits, beverages, and confectionery.
              </li>
              <li>
                Personal care, beauty, baby care, and home care items.
              </li>
              <li>
                Daily household essentials for every family member.
              </li>
              <li>
                Products from trusted brands associated with the network, such
                as HUL, ITC, Nestle, Tata Consumer, Dabur, Britannia, Parle,
                Marico, and Patanjali.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Trust, Compliance and Transparency
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart is FSSAI licensed, GST registered, and MSME
                certified.
              </li>
              <li>
                The brand emphasises transparent processes, timely supply, and
                a partner you can trust.
              </li>
              <li>
                Compliance support reduces confusion for first-time business
                owners.
              </li>
              <li>
                A clean, well-organised store builds customer confidence and
                repeat visits.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Earning Potential: A Realistic View
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand states that partners can earn an effective gross
                margin of 18 to 20 percent.
              </li>
              <li>
                Gross margin is different from net profit, because rent,
                salaries, electricity, and other expenses must be deducted.
              </li>
              <li>
                Location, footfall, store size, service quality, and local
                competition all influence results.
              </li>
              <li>
                Prepare a simple monthly budget and track it regularly after
                launch.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing the Right Location in Gorakhpur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Look for dense residential areas, popular markets, and roads
                with regular traffic.
              </li>
              <li>
                Visit at different times of day to see real footfall.
              </li>
              <li>Check parking, visibility, and easy customer access.</li>
              <li>
                Study nearby competitors and identify gaps in range, pricing,
                or cleanliness.
              </li>
              <li>
                Consider areas close to hospitals, educational institutions,
                railway routes, and new housing projects.
              </li>
              <li>
                Ask the franchise team to review your shortlisted spaces before
                you finalise.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Retail Partner vs Running an Independent Store
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                An independent store owner must build supplier contacts,
                pricing, layout, billing, and branding alone, which takes time
                and money.
              </li>
              <li>
                A Buyzaar Mart partner starts with a ready brand, tested
                systems, and a structured supply chain.
              </li>
              <li>
                Customers usually trust a branded supermarket faster than a
                new, unknown shop.
              </li>
              <li>
                Uniform store design and curated ranges reduce guesswork and
                help you look professional from day one.
              </li>
              <li>
                You still enjoy the strengths of local ownership: personal
                service, community relationships, and family pride.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Community Impact of Your Store
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand believes in empowering communities through retail
                ownership and dignified livelihoods.
              </li>
              <li>
                Your store offers fairness, affordability, and convenience to
                families in your own neighborhood.
              </li>
              <li>
                A well-run store creates local employment for staff, helpers,
                and delivery support.
              </li>
              <li>
                Neighborhood shoppers save time and travel by finding daily
                essentials close to home.
              </li>
              <li>
                Over time, your store becomes a trusted name that people
                recommend to friends and relatives.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents to Keep Ready
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Identity proof and address proof of the applicant.</li>
              <li>PAN card and other KYC details.</li>
              <li>
                Property ownership papers or a rent agreement for the store
                space.
              </li>
              <li>Business bank details for transactions.</li>
              <li>
                Recent photographs and any forms shared by the franchise team.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Common Mistakes Prospective Partners Make
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Choosing a location only because the rent is low, without
                checking real footfall.
              </li>
              <li>
                Selecting a model without thinking about how much time they can
                give.
              </li>
              <li>
                Skipping a careful reading of the agreement and support terms.
              </li>
              <li>Ignoring working capital needs for the early months.</li>
              <li>
                Expecting immediate profits instead of planning for steady
                growth.
              </li>
              <li>
                Delaying documentation, which slows down the launch timeline.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Gorakhpur Is a Strong Market for Modern Retail
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Gorakhpur is a key city of the Purvanchal region with expanding
                colonies and a large trading population.
              </li>
              <li>
                Branded, well-organised grocery retail is still developing, so
                early partners can build a loyal customer base.
              </li>
              <li>
                Daily-need products bring repeat sales, which supports stable
                business across seasons.
              </li>
              <li>
                Customers increasingly value clean stores, fair pricing, and
                reliable quality, which fit the brand pillars perfectly.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Partner Success Habits
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep shelves clean, well lit, and fully stocked with fast-moving
                items.
              </li>
              <li>
                Greet customers warmly and resolve complaints quickly.
              </li>
              <li>
                Use CRM data to recognise regular customers and reward loyalty.
              </li>
              <li>
                Review weekly sales to understand which categories perform
                best.
              </li>
              <li>
                Follow brand pricing and display standards consistently.
              </li>
              <li>
                Reach out to the franchise team early when you face any
                challenge.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Questions to Ask Before Becoming a Partner
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                What is included in the franchise fee, software fee, and
                security deposit?
              </li>
              <li>
                How often is stock replenished, and how are slow-moving
                products handled?
              </li>
              <li>What training will I and my staff receive?</li>
              <li>
                What launch marketing is planned for my Gorakhpur location?
              </li>
              <li>
                Can I visit a running Buyzaar Mart, such as the stores in
                Kanpur or Noida, before deciding?
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  1. Who is a Buyzaar Mart retail partner?
                </h3>
                <p className="mt-2">
                  A retail partner is a franchise owner who runs a Buyzaar Mart
                  store with the brand&apos;s systems and support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  2. Which models are available in Gorakhpur?
                </h3>
                <p className="mt-2">
                  The two models are FOCM (Franchise Owned, Company Managed) and
                  FOCO (Franchise Owned, Company Operated).
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  3. What is the starting investment?
                </h3>
                <p className="mt-2">
                  Investment starts from ₹15 lakh, depending on store format
                  and size.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  4. Do I need prior retail experience?
                </h3>
                <p className="mt-2">
                  No. Systems, training, and operational support are provided.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  5. What store sizes are available?
                </h3>
                <p className="mt-2">
                  Sizes range from 600 sq ft for Mini Mart to 8,000 sq ft for
                  Hyper Mart.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  6. How do I contact the team?
                </h3>
                <p className="mt-2">
                  Call 9217991727 or email{" "}
                  <a
                    href="mailto:info@thebuyzaarmart.com"
                    className="text-green-600 hover:underline"
                  >
                    info@thebuyzaarmart.com
                  </a>
                  , Monday to Saturday, 9 AM to 7 PM.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  7. Can I see a running store before I decide?
                </h3>
                <p className="mt-2">
                  Yes, ask the team about running stores such as those in
                  Kanpur and Noida, and visit to understand operations.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Become a Buyzaar Mart Retail Partner in Gorakhpur
              </h2>

              <ul className="list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Start your retail partnership from an investment of ₹15 lakh.
                </li>
                <li>
                  Choose the FOCM or FOCO model according to your involvement
                  and business goals.
                </li>
                <li>
                  Receive support with branding, POS billing, supply chain,
                  inventory, training, and launch marketing.
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
            currentSlug="/gorakhpur/buyzaar-mart-retail-partner-gorakhpur"
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