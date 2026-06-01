import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Buyzaar Mart – Neighbourhood Mart Franchise in Bareilly",
  description:
    "The Buyzaar Mart offers neighbourhood mart franchise opportunities in Bareilly with Mini Mart, Super Mart, and Hyper Mart formats, tech-enabled operations, FMCG brand partnerships, POS billing, CRM tools, and end-to-end business support.",
  url: "https://www.thebuyzaarmart.com/bareilly/neighbourhood-mart-franchise-in-bareilly",
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
          "Neighbourhood grocery franchise format for 600 to 1000 square feet starting from approximately ₹15 Lakh",
      },
      {
        "@type": "Offer",
        name: "Super Mart Franchise",
        description:
          "Retail franchise format for 1001 to 3000 square feet in busy Bareilly commercial and residential locations",
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
      name: "What is the minimum investment to open a Buyzaar Mart neighbourhood mart franchise in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum investment starts from approximately ₹15 Lakh for a Mini Mart covering stock, interior, software fee, franchise fee inclusive of GST, and security deposit.",
      },
    },
    {
      "@type": "Question",
      name: "What is the FOCM model and how does it benefit me as a franchisee in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM stands for Franchise Owned Company Managed. You own the store and investment, while Buyzaar Mart provides the operational systems, supply chain, tech support, and management framework, reducing risk for first-time entrepreneurs.",
      },
    },
    {
      "@type": "Question",
      name: "How much gross margin can I earn as a Buyzaar Mart franchise partner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Buyzaar Mart offers an effective gross margin of 18 to 20 percent on the product range, making it a strong neighbourhood mart franchise model in organised retail.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior retail or business experience to open a Buyzaar Mart franchise in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No prior retail experience is required. Buyzaar Mart provides comprehensive training and ongoing support covering store operations, billing, inventory management, and customer handling.",
      },
    },
    {
      "@type": "Question",
      name: "What FMCG brands will be available in my Buyzaar Mart store in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your store can carry products from 50 or more leading brands including HUL, ITC, Nestlé, Britannia, P and G, Dabur, Godrej, Tata Consumer, Patanjali, Parle, Coca-Cola, Marico, Emami, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to set up and launch a Buyzaar Mart franchise store in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After completing documentation and agreement signing, the typical timeline from store setup to grand opening is approximately 4 to 8 weeks, depending on location readiness and space availability.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a Buyzaar Mart neighbourhood mart franchise in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit www.thebuyzaarmart.com, fill in the franchise inquiry form, and the team will contact you. You can also call +91 9217991727 or email info@thebuyzaarmart.com directly.",
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
              The Rise of Neighbourhood Mart Franchises in Bareilly
            </h1>

            <p>
              Bareilly, one of the fastest-growing tier-2 cities in Uttar
              Pradesh, is witnessing a sharp shift in how residents shop for
              their daily needs. With a growing middle-class population,
              expanding residential colonies, and a strong demand for organized
              retail, Bareilly has become one of the most promising markets for
              neighbourhood mart franchises in North India.
            </p>

            <p>
              At the heart of this retail revolution stands The Buyzaar Mart
              &mdash; India&apos;s emerging supermarket franchise brand that
              brings the concept of a &quot;Friendly Neighbourhood Store&quot; to
              life. Whether you are a first-time entrepreneur, a retired
              professional, or a homemaker looking for a reliable business
              opportunity, The Buyzaar Mart offers a structured, tech-enabled,
              and low-risk franchise model to help you build a sustainable
              livelihood right in your own neighbourhood in Bareilly.
            </p>

            <p>
              This article is a complete guide to understanding what a
              neighbourhood mart franchise means, why Bareilly is the right city
              to invest in one, and why The Buyzaar Mart is the brand you should
              partner with to make it happen.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Is a Neighbourhood Mart Franchise?
            </h2>

            <p>
              A neighbourhood mart franchise is a locally operated retail store
              that is set up and run under the banner of an established brand.
              Unlike large hypermarkets or malls, neighbourhood mart franchises
              are designed to serve the immediate residential catchment area
              &mdash; typically within a 1 to 2 km radius. They stock daily
              essentials like groceries, FMCG products, packaged food, personal
              care, household items, and more.
            </p>

            <p>
              The key advantage of a neighbourhood mart franchise over an
              independent kirana store is that you get the power of a recognized
              brand, a structured supply chain, technology systems like POS
              billing, CRM tools, centralized marketing support, and ongoing
              operational guidance &mdash; all while running the store as your
              own business in your locality.
            </p>

            <p>
              The Buyzaar Mart operates under a FOCM (Franchise Owned Company
              Managed) model, which means the franchise is owned by the
              investor, but the operational systems, backend support, and
              management framework are provided and maintained by The Buyzaar
              Mart team. This dramatically reduces the risk for new
              entrepreneurs and helps them run a professional retail store from
              day one.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Bareilly Is the Perfect City for a Neighbourhood Mart
              Franchise
            </h2>

            <p>
              Bareilly is not just any tier-2 city. It is a commercial and
              administrative hub of the Rohilkhand region in Uttar Pradesh. With
              a population of over 10 lakh and rapidly developing
              infrastructure, Bareilly offers an enormous untapped opportunity
              for organized retail.
            </p>

            <p>
              Here is why Bareilly makes business sense for a neighbourhood mart
              franchise:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Growing Urban Population:</span>{" "}
                Bareilly&apos;s urban population is expanding rapidly due to
                migration from surrounding districts. New residential societies
                and colonies are emerging across areas like Civil Lines, Subhash
                Nagar, Pilibhit Bypass, Rampur Garden, and Faridpur Road
                &mdash; all of which represent high-demand catchment zones for
                neighbourhood stores.
              </li>
              <li>
                <span className="font-semibold">
                  Low Penetration of Organized Retail:
                </span>{" "}
                Despite being a large city, Bareilly still has a significant
                majority of its grocery retail happening through unorganized
                kirana stores. This means there is a massive first-mover
                advantage for organized neighbourhood mart franchises that bring
                quality, consistency, and branded retail experience to local
                residents.
              </li>
              <li>
                <span className="font-semibold">Strong FMCG Demand:</span>{" "}
                Bareilly consumers are aspirational. They want branded products,
                fair pricing, and a clean modern shopping environment. A
                neighbourhood mart like The Buyzaar Mart fulfils exactly this
                gap &mdash; offering leading FMCG brands at affordable prices
                in a well-organized store format.
              </li>
              <li>
                <span className="font-semibold">
                  Connectivity and Infrastructure:
                </span>{" "}
                Bareilly has good road connectivity through the National Highway
                network, making supply chain logistics smooth and cost-effective.
                This supports timely stock replenishment, which is critical for
                a successful grocery franchise.
              </li>
              <li>
                <span className="font-semibold">
                  Rising Entrepreneurial Spirit:
                </span>{" "}
                Bareilly has seen a consistent rise in first-generation
                entrepreneurs, especially among youth and semi-urban households
                looking to own businesses rather than depend on jobs. A
                neighbourhood mart franchise from The Buyzaar Mart gives this
                population the right platform to start a legitimate, scalable
                retail business.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              About The Buyzaar Mart &mdash; Your Friendly Neighbourhood Store
            </h2>

            <p>
              The Buyzaar Mart is an organized, tech-enabled supermarket
              franchise network based out of Noida, Uttar Pradesh. The
              brand&apos;s mission is to empower communities through retail
              ownership &mdash; enabling individuals to build dignified
              livelihoods by running neighbourhood stores that offer fairness,
              affordability, and convenience.
            </p>

            <p>
              The Buyzaar Mart is FSSAI Licensed, GST Registered, and MSME
              Certified &mdash; bringing full legal and regulatory compliance to
              its franchise partners from day one.
            </p>

            <p>
              The brand is already operational with stores running across Noida
              (Sector 44 Chalera), Gangoh (near Bus Stand), Behat (Saharanpur),
              and Bahadrabad (Haridwar), with new stores coming up in Ghaziabad
              and other cities across North India. Bareilly is an important
              target market as part of the brand&apos;s expansion into Uttar
              Pradesh&apos;s tier-2 cities.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Buyzaar Mart Franchise Model &mdash; Designed for Bareilly
              Entrepreneurs
            </h2>

            <p>
              The Buyzaar Mart offers three distinct store formats to suit
              different investment capacities and available spaces:
            </p>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600&ndash;1000 sq ft)
            </h3>
            <p>
              The Mini Mart is ideal for compact residential neighbourhoods and
              colony-level locations. It is the perfect entry point for
              first-time entrepreneurs in Bareilly who want to start with a
              manageable investment and build their footprint in the local
              market. The investment for a Mini Mart starts from approximately
              ₹15 Lakh, making it one of the most affordable organized grocery
              franchise opportunities in India.
            </p>

            <h3 className="font-medium text-gray-900">
              Super Mart (1001&ndash;3000 sq ft)
            </h3>
            <p>
              The Super Mart format is designed for busier commercial or
              semi-commercial locations in Bareilly &mdash; think main roads,
              market areas, or high-density residential zones. With a larger
              product range and higher footfall capacity, the Super Mart
              delivers stronger margins and faster return on investment.
            </p>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3001&ndash;8000 sq ft)
            </h3>
            <p>
              For investors with larger spaces and higher capital, the Hyper
              Mart format offers a full-scale supermarket experience with an
              even wider product range. This format is suited for high-traffic
              locations and is positioned as a destination retail store for
              entire neighbourhoods or residential townships.
            </p>

            <p>
              All three formats include a detailed investment breakdown covering
              stock, interior, software fee, franchise fee (inclusive of 18%
              GST), and security deposit &mdash; ensuring complete cost
              transparency before you sign any agreement.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Get as a Buyzaar Mart Franchise Partner in Bareilly
            </h2>

            <p>
              The Buyzaar Mart franchise is not just a license to use a brand
              name. It is a complete end-to-end business ecosystem designed to
              set you up for success. Here is what every franchise partner in
              Bareilly receives:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Wide Product Range:</span> Your
                store stocks a curated range of daily-need items including
                groceries, packaged foods, beverages, personal care, household
                essentials, and FMCG products under one roof. The product range
                is adapted to local preferences, ensuring your store meets the
                specific taste and demand profile of Bareilly consumers.
              </li>
              <li>
                <span className="font-semibold">
                  Partnerships with 50+ Leading FMCG Brands:
                </span>{" "}
                The Buyzaar Mart has direct partnerships with India&apos;s major
                FMCG brands including HUL, ITC, Nestlé, Britannia, P&amp;G,
                Dabur, Godrej, Tata Consumer, Patanjali, Parle, Cadbury,
                Coca-Cola, Marico, Reckitt, Emami, and more.
              </li>
              <li>
                <span className="font-semibold">
                  POS-Enabled Billing System:
                </span>{" "}
                Every Buyzaar Mart store operates on a modern Point-of-Sale
                (POS) billing system, making billing fast, accurate, and
                customer-friendly. This also enables inventory tracking, sales
                reports, and demand analysis in real time.
              </li>
              <li>
                <span className="font-semibold">
                  Customer Relationship Management (CRM):
                </span>{" "}
                The integrated CRM system helps you build lasting relationships
                with your local customers through loyalty programs, purchase
                history tracking, and personalized communication that keeps
                footfall high and customer retention strong.
              </li>
              <li>
                <span className="font-semibold">
                  Uniform Branding and Store Design:
                </span>{" "}
                Your store carries the professional Buyzaar Mart identity
                &mdash; from signage and shelf layouts to staff uniforms and
                packaging &mdash; giving customers in Bareilly the confidence
                and consistency of a trusted brand.
              </li>
              <li>
                <span className="font-semibold">Smart Inventory Management:</span>{" "}
                The Buyzaar Mart system helps you predict demand, manage stock
                efficiently, and avoid both overstocking and stockouts.
              </li>
              <li>
                <span className="font-semibold">
                  End-to-End Marketing Support:
                </span>{" "}
                From store launch campaigns and local area marketing to social
                media presence and customer acquisition strategies, The Buyzaar
                Mart handles your marketing so you can focus on operations.
              </li>
              <li>
                <span className="font-semibold">
                  Comprehensive Training and Ongoing Support:
                </span>{" "}
                Whether it is store operations, billing, inventory, customer
                handling, or financial management, Buyzaar Mart&apos;s team
                trains you and your staff thoroughly before launch and continues
                to provide support throughout the franchise journey.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Gross Margin and Financial Returns
            </h2>

            <p>
              One of the most important questions for any potential franchise
              investor in Bareilly is: What will I earn?
            </p>

            <p>
              The Buyzaar Mart promises an effective gross margin of 18&ndash;20%
              on the product range stocked in the store. For a well-run Mini
              Mart in a catchment area with steady daily footfall of even
              80&ndash;120 customers, the financial returns are highly attractive
              compared to a salaried job or a traditional kirana setup.
            </p>

            <p>
              The profitability is supported by direct FMCG brand partnerships,
              a demand-predicting inventory system, and a CRM-driven customer
              retention system that helps ensure repeat business.
            </p>

            <p>
              The Buyzaar Mart&apos;s investment calculator on the website
              allows you to calculate your exact investment requirement based on
              your store size, giving you full clarity before you commit a
              single rupee.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Apply for a Neighbourhood Mart Franchise in Bareilly
            </h2>

            <p>
              Getting started with The Buyzaar Mart is a simple 3-step process:
            </p>

            <h3 className="font-medium text-gray-900">
              Step 1 &mdash; Submit an Inquiry
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
              details, city (Bareilly), and message. The Buyzaar Mart team will
              respond within 24 hours.
            </p>

            <h3 className="font-medium text-gray-900">
              Step 2 &mdash; Documentation
            </h3>
            <p>
              Once your inquiry is acknowledged, the team guides you through the
              KYC process, legal documentation, franchise agreement review and
              signing, and compliance formalities. The process is designed to be
              simple and stress-free.
            </p>

            <h3 className="font-medium text-gray-900">
              Step 3 &mdash; Store Launch
            </h3>
            <p>
              After documentation, the focus moves to physical store setup
              &mdash; location finalization, interior design and branding, POS
              setup, initial stock loading, staff training, and finally a grand
              store opening with a full launch marketing campaign and customer
              acquisition support.
            </p>

            <p>
              You can also reach The Buyzaar Mart directly at{" "}
              <a
                href="tel:+919217991727"
                className="font-semibold text-green-600 hover:underline"
              >
                +91 9217991727
              </a>{" "}
              or email them at{" "}
              <a
                href="mailto:info@thebuyzaarmart.com"
                className="font-semibold text-green-600 hover:underline"
              >
                info@thebuyzaarmart.com
              </a>
              . Their team is available Monday to Saturday, 9:00 AM to 7:00 PM.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Buyzaar Mart vs Unorganized Kirana &mdash; Why Franchise Wins
              in Bareilly
            </h2>

            <p>
              Many entrepreneurs in Bareilly wonder whether it is better to open
              an independent kirana store or invest in a franchise like The
              Buyzaar Mart. The answer becomes clear when you compare the two
              models.
            </p>

            <p>
              An independent kirana store requires you to figure out suppliers,
              negotiate margins, manage billing manually, build brand trust from
              scratch, run your own marketing, and deal with inventory losses
              without any system to guide you. Most kirana stores in Bareilly
              struggle to grow beyond the first year because of these structural
              challenges.
            </p>

            <p>
              The Buyzaar Mart neighbourhood mart franchise, on the other hand,
              gives you a proven business model tested across multiple stores, a
              direct supply chain that eliminates middlemen, a tech-enabled POS
              and CRM system, trusted FMCG brand partnerships, full marketing
              and operational support, and a brand identity that attracts
              customers from day one. The result is a dramatically lower failure
              risk and a much higher probability of building a profitable,
              sustainable business.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Brand Pillars That Make The Buyzaar Mart Different
            </h2>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Simplicity:</span> Complex
                retail operations such as procurement, inventory, and supply
                chain are handled systematically, so the franchise partner can
                focus on serving customers rather than managing chaos.
              </li>
              <li>
                <span className="font-semibold">Reliability:</span> Timely
                supply, transparent processes, and a dependable support team
                make The Buyzaar Mart a partner you can trust for the long term.
              </li>
              <li>
                <span className="font-semibold">
                  Affordability and Quality:
                </span>{" "}
                A carefully curated product range with fair pricing ensures
                customers in Bareilly get value for money without compromising
                on quality.
              </li>
              <li>
                <span className="font-semibold">Ownership and Legacy:</span> The
                Buyzaar Mart views a franchise store as a family business
                &mdash; something you can build, grow, and even pass on to the
                next generation.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Community Impact: Neighbourhood Mart Franchises That Transform
              Localities
            </h2>

            <p>
              Beyond the financial returns, opening a Buyzaar Mart
              neighbourhood mart franchise in Bareilly means contributing
              meaningfully to your community. You are creating local employment,
              bringing organized retail to a neighbourhood that previously
              relied on unorganized stores, ensuring product availability and
              fair pricing for families, and building a landmark business that
              becomes a trusted part of daily life in your colony or locality.
            </p>

            <p>
              The Buyzaar Mart&apos;s vision is to open multiple stores across
              India with a focus on transparency, accessibility, and care
              &mdash; and Bareilly is a city central to that expansion vision.
              By joining the Buyzaar network in Bareilly, you are not just
              building a business &mdash; you are becoming part of India&apos;s
              retail revolution.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FAQs &mdash; Neighbourhood Mart Franchise in Bareilly by The
              Buyzaar Mart
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the minimum investment to open a Buyzaar Mart
                  neighbourhood mart franchise in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  The minimum investment starts from approximately ₹15 Lakh for
                  a Mini Mart (600&ndash;1000 sq ft), covering stock, interior,
                  software fee, franchise fee (inclusive of 18% GST), and
                  security deposit.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. What is the FOCM model and how does it benefit me as a
                  franchisee in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  FOCM stands for Franchise Owned Company Managed. You own the
                  store and the investment, while Buyzaar Mart provides the
                  operational systems, supply chain, tech support, and
                  management framework &mdash; significantly reducing the risk
                  for first-time entrepreneurs.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. How much gross margin can I earn as a Buyzaar Mart
                  franchise partner?
                </h3>
                <p className="mt-2 text-gray-700">
                  The Buyzaar Mart offers an effective gross margin of
                  18&ndash;20% on the product range, making it one of the more
                  profitable neighbourhood mart franchise models in the
                  organized retail space.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. Do I need prior retail or business experience to open a
                  Buyzaar Mart franchise in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  No prior retail experience is required. Buyzaar Mart provides
                  comprehensive training and ongoing support covering all
                  aspects of store operations, billing, inventory management,
                  and customer handling.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. What FMCG brands will be available in my Buyzaar Mart
                  store in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  Your store carries products from 50+ leading brands including
                  HUL, ITC, Nestlé, Britannia, P&amp;G, Dabur, Godrej, Tata
                  Consumer, Patanjali, Parle, Coca-Cola, Marico, Emami, and
                  many more.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. How long does it take to set up and launch a Buyzaar Mart
                  franchise store in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  After completing documentation and agreement signing, the
                  typical timeline from store setup to grand opening is
                  approximately 4&ndash;8 weeks, depending on location readiness
                  and space availability.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. How do I apply for a Buyzaar Mart neighbourhood mart
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
                  </a>
                  , fill in the franchise inquiry form, and the team will
                  contact you within 24 hours. You can also call{" "}
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

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Neighbourhood Mart Franchise in Bareilly with The
                Buyzaar Mart Today
              </h2>

              <p className="mb-4 text-gray-800">
                Whether you want to open a compact Mini Mart in a residential
                colony, a Super Mart on a busy road, or a full-scale Hyper Mart
                in a commercial zone, the right format exists for your space and
                budget. The Buyzaar Mart is not just a franchise &mdash; it is
                your gateway to owning a business that your neighbourhood
                trusts, your family is proud of, and that grows with your city.
              </p>

              <p className="mb-4 text-gray-800">
                Take the first step today. Visit{" "}
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
                to begin your Buyzaar Mart franchise journey in Bareilly.
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
                <span className="font-semibold">Business Hours:</span> Monday
                to Saturday, 10:00 AM &ndash; 6:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="bareilly"
            currentSlug="/bareilly/neighbourhood-mart-franchise-in-bareilly"
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