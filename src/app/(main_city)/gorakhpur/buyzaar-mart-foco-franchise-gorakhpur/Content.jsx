import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart FOCO Franchise Gorakhpur | Invest from ₹15L",
  description:
    "Own a Buyzaar Mart FOCO franchise in Gorakhpur. Franchise Owned, Company Operated model with POS billing, supply chain, launch support, and investment from ₹15 lakh.",
  url: "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-foco-franchise-gorakhpur",
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
    name: "The Buyzaar Mart FOCO Franchise Formats in Gorakhpur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600 to 1,000 sq ft FOCO franchise format for residential colonies and compact market corners.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1,001 to 3,000 sq ft FOCO franchise format for busy roads, larger neighborhoods, and growing localities.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3,001 to 8,000 sq ft large-format FOCO supermarket for high-footfall areas.",
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
      name: "What does FOCO mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCO means Franchise Owned, Company Operated. You own the store, and the company operates it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the starting investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Investment starts from ₹15 lakh, depending on store format and area.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The company provides systems, operations, and support.",
      },
    },
    {
      "@type": "Question",
      name: "How is FOCO different from FOCM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM means Franchise Owned, Company Managed. Both are ownership models, and the team can explain the difference in involvement.",
      },
    },
    {
      "@type": "Question",
      name: "What store sizes are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mini Mart is available from 600 to 1,000 sq ft, Super Mart from 1,001 to 3,000 sq ft, and Hyper Mart from 3,001 to 8,000 sq ft.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for FOCO in Gorakhpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill the inquiry form on thebuyzaarmart.com or call 9217991727.",
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
      name: "Which brands will my store stock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The network works with recognised FMCG brands such as HUL, ITC, Nestle, Dabur, and Britannia, along with a wide daily-need range.",
      },
    },
    {
      "@type": "Question",
      name: "When can I contact the team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The team is available Monday to Saturday, 9 AM to 7 PM, and the company states a reply within 24 hours.",
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
              What Is the FOCO Franchise in Gorakhpur?
            </h1>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart FOCO franchise in Gorakhpur is built for
                people who want to own a branded grocery and supermarket store
                while the company operates it as per brand standards.
              </li>
              <li>
                FOCO stands for Franchise Owned, Company Operated. You invest
                and own the franchise, and The Buyzaar Mart team runs the
                store.
              </li>
              <li>
                The Buyzaar Mart is a grocery and supermarket franchise brand
                with the promise &quot;Your Friendly Neighborhood Store&quot;,
                and investment starts from ₹15 lakh.
              </li>
              <li>
                Gorakhpur is a growing city of eastern Uttar Pradesh, where
                households buy groceries and daily essentials every day of the
                year.
              </li>
              <li>
                This page explains how the FOCO model works, who it suits, what
                you gain, what to ask, and how to begin.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Understanding the FOCO Model
            </h2>

            <h3 className="font-medium text-gray-900">Meaning of FOCO</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Franchise Owned means the store belongs to you, the franchise
                partner, and you provide the capital.
              </li>
              <li>
                Company Operated means the brand takes responsibility for
                running the store according to its standards.
              </li>
              <li>
                The model separates ownership from daily operations, so you can
                hold a retail asset without standing at the counter.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              How Ownership and Operations Are Divided
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Your role: invest the capital, provide a suitable Gorakhpur
                location, and stay informed about performance.
              </li>
              <li>
                Company role: operate the store using its systems, supply
                chain, technology, and brand standards.
              </li>
              <li>
                Ask the franchise team for the exact scope of responsibilities
                and reporting before you sign, because clarity avoids confusion
                later.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Why This Model Attracts Investors
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                It reduces the daily workload of staff handling, purchasing,
                and vendor coordination.
              </li>
              <li>
                It keeps the store aligned with uniform brand standards for
                pricing, display, and service.
              </li>
              <li>
                It allows you to build a family asset without giving up your
                job or existing business.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Should Choose the FOCO Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Working professionals in Gorakhpur who want a business asset
                alongside a full-time career.
              </li>
              <li>
                Doctors, teachers, government employees, and business owners
                with limited free time.
              </li>
              <li>
                NRIs and outstation investors who wish to invest in their home
                region.
              </li>
              <li>
                Families who want to build a long-term retail legacy without
                personal daily involvement.
              </li>
              <li>
                Investors who prefer a structured, brand-led operation over a
                self-managed shop.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FOCO vs FOCM: A Simple Comparison
            </h2>

            <h3 className="font-medium text-gray-900">
              FOCM: Franchise Owned, Company Managed
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You own the store, and the company manages operations, supply
                chain, and systems.
              </li>
              <li>
                Suitable for partners who want strong company management while
                staying informed about the business.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              FOCO: Franchise Owned, Company Operated
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You own the store, and the company operates it as per brand
                standards.
              </li>
              <li>
                Suitable for partners who want ownership with minimal daily
                involvement.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              How to Pick Between Them
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Both models are ownership models, and both bring the brand,
                technology, and supply chain of The Buyzaar Mart.
              </li>
              <li>
                Compare them on how much involvement, reporting, and
                decision-making you want.
              </li>
              <li>
                Speak with the franchise team, explain your schedule and goals,
                and let them guide your final choice.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Gorakhpur Suits a Grocery Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Gorakhpur is a leading city in eastern Uttar Pradesh and a
                centre for nearby districts.
              </li>
              <li>
                Families, students, hospital visitors, railway travellers, and
                traders create steady daily demand.
              </li>
              <li>
                New residential colonies need convenient supermarkets close to
                home.
              </li>
              <li>
                Branded, organised grocery retail is still developing, so early
                franchise owners can build strong local recognition.
              </li>
              <li>
                Groceries and daily essentials sell in every season, which
                supports stable footfall.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats Available Under FOCO
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart: 600 to 1,000 sq ft
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Best for residential colonies and compact market corners.</li>
              <li>Simple to set up and easier to control.</li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart: 1,001 to 3,000 sq ft
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Offers a wider range and better display space.</li>
              <li>
                Suits busy roads, larger neighborhoods, and growing localities.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart: 3,001 to 8,000 sq ft
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>A large-format supermarket for high-footfall areas.</li>
              <li>
                Delivers the widest range and a complete one-stop shopping
                experience.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment for the FOCO Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>The franchise investment starts from ₹15 lakh.</li>
              <li>
                The final amount depends on store type and area, and includes
                stock, interior, software fee, franchise fee including 18% GST,
                and security deposit.
              </li>
              <li>
                The investment calculator on thebuyzaarmart.com helps you
                select a store type and area to view an estimate.
              </li>
              <li>
                Keep some working capital ready for the early months to keep
                operations comfortable.
              </li>
              <li>
                Ask the franchise team for a written estimate that fits your
                chosen Gorakhpur location and confirm what is included.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What The Buyzaar Mart Brings to Your Store
            </h2>

            <h3 className="font-medium text-gray-900">
              Brand and Store Design
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Uniform branding and store design that customers can recognise
                easily.
              </li>
              <li>
                A clean, professional layout that encourages longer visits and
                repeat shopping.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Technology</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A POS-enabled billing system for quick and accurate checkout.
              </li>
              <li>
                A customer relationship management system to build lasting
                relationships with regular customers.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Supply Chain and Inventory
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Support for purchasing and supply chain, so shelves stay
                stocked.
              </li>
              <li>
                Demand-based stocking that helps avoid unorganised inventory
                and losses.
              </li>
              <li>
                Localized product flexibility for Gorakhpur&apos;s preferences
                and festive demand.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Marketing and Launch
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>A store launch strategy for your location.</li>
              <li>
                Local marketing campaigns and customer acquisition support
                during the opening period.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Compliance</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart is FSSAI licensed, GST registered, and MSME
                certified.
              </li>
              <li>
                The team offers compliance support during documentation and
                setup.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Products Your FOCO Store Will Stock
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
              <li>Daily household essentials for families.</li>
              <li>
                Products from trusted brands associated with the network, such
                as HUL, ITC, Nestle, Tata Consumer, Dabur, Britannia, Parle,
                Marico, and Patanjali.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Returns and Earning Potential
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand mentions an effective gross margin of 18 to 20
                percent for partners.
              </li>
              <li>
                Gross margin is not net profit, because rent, staff costs,
                electricity, and other expenses must be considered.
              </li>
              <li>
                Under an operated model, ask how earnings are calculated,
                reported, and shared, and get the details in writing.
              </li>
              <li>
                Location, footfall, store size, service quality, and
                competition all influence results.
              </li>
              <li>
                Prepare a simple budget and review store reports regularly.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Questions to Ask Before Choosing FOCO
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                What exactly does &quot;company operated&quot; include, from
                staffing to purchasing and daily management?
              </li>
              <li>
                How will I receive reports on sales, stock, and performance?
              </li>
              <li>How and when are earnings calculated and paid to me?</li>
              <li>
                What is covered by the franchise fee, software fee, and
                security deposit?
              </li>
              <li>
                What are the agreement duration, renewal, and exit terms?
              </li>
              <li>
                Can I visit a running store, such as those in Kanpur or Noida,
                before deciding?
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing a Good Location in Gorakhpur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Look for dense residential areas, busy markets, and roads with
                regular traffic.
              </li>
              <li>
                Visit at different times of day to observe real footfall.
              </li>
              <li>Check visibility, parking, and easy customer access.</li>
              <li>
                Study nearby competitors and identify gaps in range,
                cleanliness, or service.
              </li>
              <li>
                Consider areas near hospitals, colleges, railway routes, and
                new housing projects.
              </li>
              <li>
                Since you will not be at the store daily, location quality
                matters even more, so ask the team to review your shortlist.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Apply for the FOCO Franchise
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
                Mention FOCO and Gorakhpur in the message box so the team can
                direct your inquiry properly.
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
                Complete KYC and legal formalities with guidance from the team.
              </li>
              <li>
                Read the agreement carefully, clear your doubts, and sign only
                when satisfied.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 3: Store Launch
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Plan the launch strategy, local marketing, and operational
                backend with the team.
              </li>
              <li>
                Open the store with customer acquisition support in place.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Buyzaar Mart Brand Behind Your Store
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand mission is to empower communities through retail
                ownership and dignified livelihoods.
              </li>
              <li>
                The four pillars are Simplicity, Reliability, Affordability and
                Quality, and Ownership and Legacy.
              </li>
              <li>
                The company takes on the complexity of purchasing, handling,
                inventory, and supply chain.
              </li>
              <li>
                The retail promise is fair pricing, assured quality, and
                constant support for customers and partners alike.
              </li>
              <li>
                Running stores already operate in Kanpur, Noida, Gangoh, Behat
                in Saharanpur, and Bahadrabad in Haridwar, with a new store
                coming soon in Ghaziabad.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FOCO Franchise vs Traditional Kirana Store
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A traditional owner must arrange suppliers, staff, billing, and
                branding, and usually has to be present every day.
              </li>
              <li>
                A FOCO owner starts with a recognised brand, tested systems,
                and a company-run operation.
              </li>
              <li>
                Branded supermarkets usually earn customer trust faster than
                new unnamed shops.
              </li>
              <li>
                Uniform standards give shoppers a consistent experience, which
                encourages repeat visits.
              </li>
              <li>
                You still own a local business asset that can grow in value
                and be passed on within the family.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How an Owner Can Stay Involved Smartly
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Review sales, stock, and performance reports at regular
                intervals.
              </li>
              <li>
                Visit the store occasionally to observe cleanliness, display,
                and customer service.
              </li>
              <li>
                Share local feedback with the franchise team, such as festive
                demand or popular product categories.
              </li>
              <li>
                Keep records of agreements, invoices, and compliance documents
                in one safe place.
              </li>
              <li>
                Stay in touch with the team so that questions are solved early.
              </li>
              <li>
                Consider a nearby location, so a quick visit is always
                convenient.
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
              <li>Business bank details.</li>
              <li>
                Recent photographs and any forms shared by the franchise team.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Benefits of the FOCO Franchise at a Glance
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Ownership of a branded retail asset in a growing city.</li>
              <li>
                Minimal day-to-day involvement compared with a self-run store.
              </li>
              <li>
                Uniform standards for quality, pricing, and customer service.
              </li>
              <li>
                Technology, supply chain, and marketing support from the brand.
              </li>
              <li>Repeat demand from daily-need products.</li>
              <li>
                A business that can be passed on to the next generation.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Mistakes to Avoid With an Operated Model
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Assuming that no involvement at all is needed, when regular
                review of reports is still wise.
              </li>
              <li>
                Choosing a location only because rent is low.
              </li>
              <li>
                Skipping the agreement details on earnings, reporting, and exit
                terms.
              </li>
              <li>
                Underestimating working capital needs for the early months.
              </li>
              <li>Expecting instant profits instead of steady growth.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  1. What does FOCO mean?
                </h3>
                <p className="mt-2">
                  FOCO means Franchise Owned, Company Operated. You own the
                  store, and the company operates it.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  2. What is the starting investment?
                </h3>
                <p className="mt-2">
                  Investment starts from ₹15 lakh, depending on store format
                  and area.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  3. Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No. The company provides systems, operations, and support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  4. How is FOCO different from FOCM?
                </h3>
                <p className="mt-2">
                  FOCM means Franchise Owned, Company Managed. Both are
                  ownership models, and the team can explain the difference in
                  involvement.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  5. What store sizes are available?
                </h3>
                <p className="mt-2">
                  Mini Mart is available from 600 to 1,000 sq ft, Super Mart
                  from 1,001 to 3,000 sq ft, and Hyper Mart from 3,001 to 8,000
                  sq ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  6. How do I apply for FOCO in Gorakhpur?
                </h3>
                <p className="mt-2">
                  Fill the inquiry form on thebuyzaarmart.com or call
                  9217991727.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  7. Can I visit a running store first?
                </h3>
                <p className="mt-2">
                  Yes, ask the team about running stores such as those in
                  Kanpur and Noida.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  8. Which brands will my store stock?
                </h3>
                <p className="mt-2">
                  The network works with recognised FMCG brands such as HUL,
                  ITC, Nestle, Dabur, and Britannia, along with a wide
                  daily-need range.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  9. When can I contact the team?
                </h3>
                <p className="mt-2">
                  The team is available Monday to Saturday, 9 AM to 7 PM, and
                  the company states a reply within 24 hours.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Apply for a Buyzaar Mart FOCO Franchise in Gorakhpur
              </h2>

              <ul className="list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Own a branded Buyzaar Mart store while the company operates
                  it.
                </li>
                <li>
                  Start with an investment from ₹15 lakh, depending on the
                  format and location.
                </li>
                <li>
                  Receive POS billing, supply chain, inventory, marketing, and
                  launch support.
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
            currentSlug="/gorakhpur/buyzaar-mart-foco-franchise-gorakhpur"
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