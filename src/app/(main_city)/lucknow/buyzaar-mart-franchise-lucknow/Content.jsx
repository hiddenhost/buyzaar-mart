import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Buyzaar Mart - Grocery Franchise in Lucknow",
  description:
    "The Buyzaar Mart offers a grocery franchise opportunity in Lucknow with FOCM and FOCO models, complete setup support, technology-backed operations, training, marketing, and inventory assurance.",
  url: "https://www.thebuyzaarmart.com/lucknow/grocery-franchise-in-lucknow",
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
    name: "Buyzaar Mart Franchise Formats in Lucknow",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart Franchise",
        description:
          "Compact grocery franchise format for neighborhood and residential locations in Lucknow",
      },
      {
        "@type": "Offer",
        name: "Super Mart Franchise",
        description:
          "Mid-sized organized grocery store format for high-density and main market areas in Lucknow",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart Franchise",
        description:
          "Large-format grocery retail franchise for major commercial and high-footfall areas in Lucknow",
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
      name: "What is the total investment required to start a Buyzaar Mart franchise in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Buyzaar Mart franchise investment starts from ₹15 Lakh. The exact amount depends on your preferred store format — Mini Mart, Super Mart, or Hyper Mart — and your chosen location in Lucknow.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the FOCM and FOCO models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the FOCM (Franchise Owned, Company Managed) model, you own the store and the company manages all operations under a 5-year agreement. In the FOCO (Franchise Owned, Company Operated) model, you invest the capital and the company fully operates the store, making it a more passive income option under a 10-year agreement.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need any prior retail experience to open a Buyzaar Mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Buyzaar Mart provides complete training for you and your staff on store operations, POS systems, inventory management, and customer service. Prior retail experience is helpful but not required.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if stock in my store expires or gets damaged?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Buyzaar Mart offers a hassle-free inventory assurance policy — expired and damaged goods are taken back by the company, significantly reducing your financial risk and allowing you to focus on selling.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to set up and launch a Buyzaar Mart store in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After agreement signing, The Buyzaar Mart handles the complete store setup including interior design, branding, POS installation, and grand launch. Timelines vary by store format and location readiness, but the company provides full pre-launch support throughout the process.",
      },
    },
    {
      "@type": "Question",
      name: "What ongoing support does The Buyzaar Mart provide after the store launches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Post-launch support includes regular operational and quality audits, performance dashboards with sales and inventory KPIs, ongoing marketing campaigns, replenishment and procurement support, and a dedicated helpline for operational assistance.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for the Buyzaar Mart franchise in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit www.thebuyzaarmart.com, fill out the franchise inquiry form with your details and preferred location in Lucknow, and the team will connect with you promptly to guide you through the next steps including documentation and store setup.",
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
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        key="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1">
          <div className="max-w-4xl space-y-4 font-serif font-medium leading-relaxed text-gray-700">
            <h1 className="mt-8 text-2xl font-medium text-gray-900 sm:text-3xl">
              Why Lucknow Is the Right City for a Grocery Franchise
            </h1>

            <p>
              Lucknow, the capital of Uttar Pradesh, is one of the fastest-growing tier-1
              cities in India. With a rapidly expanding urban population, rising disposable
              incomes, and a culture deeply rooted in quality living and good food, Lucknow
              presents an exceptional opportunity for entrepreneurs looking to invest in the
              organized retail and grocery sector.
            </p>

            <p>
              The city&apos;s growing residential localities &mdash; from Gomti Nagar and
              Hazratganj to Alambagh, Indira Nagar, Aliganj, and Faizabad Road &mdash; are
              home to lakhs of households that demand a reliable, well-stocked neighborhood
              supermarket.
            </p>

            <p>
              Yet, despite the demand, most areas still depend on traditional kirana stores
              that lack standardization, technology, or brand consistency. This is precisely
              the gap that The Buyzaar Mart is here to fill.
            </p>

            <p>
              If you are a resident of Lucknow looking for a low-investment, high-return
              business opportunity with complete brand support, the Buyzaar Mart franchise
              in Lucknow could be the most rewarding decision of your entrepreneurial journey.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Buyzaar Mart Franchise Model Explained
            </h2>

            <p>
              One of the most attractive features of The Buyzaar Mart is its structured and
              investor-friendly franchise model. The brand operates two primary models:
            </p>

            <h3 className="font-medium text-gray-900">
              FOCM &mdash; Franchise Owned, Company Managed
            </h3>

            <p>
              The FOCM model is the flagship model offered by The Buyzaar Mart and is
              especially well-suited for entrepreneurs in Lucknow who want to own a business
              but rely on expert management to run it smoothly.
            </p>

            <p>Under the FOCM model:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                The franchisee owns the outlet and provides the initial capital investment
                for the store setup.
              </li>
              <li>
                The company, The Buyzaar Mart, takes responsibility for pre-launch support,
                including store location survey and approval, timely setup, and brand-aligned
                interior and store asset installation.
              </li>
              <li>
                All store categorization &mdash; Mini Mart, Super Mart, or Hyper Mart
                &mdash; is done in accordance with the company&apos;s established module and
                standards.
              </li>
              <li>
                The company handles store layout, interior design, and complete branding
                setup to maintain uniformity across all franchise locations.
              </li>
              <li>
                The franchisee receives licensed access to The Buyzaar Mart&apos;s trademarks,
                logos, and brand identity.
              </li>
              <li>
                A technology-backed POS (Point of Sale) billing and sales tracking system is
                deployed by the company.
              </li>
              <li>
                Comprehensive Standard Operating Procedures (SOPs) are provided for daily
                operations, inventory control, and customer service.
              </li>
              <li>
                The company offers opening stock recommendations, replenishment guidelines,
                procurement support, and pricing strategies tailored to local consumer needs.
              </li>
              <li>
                Initial and ongoing training programs are conducted for the franchisee and
                their staff covering store operations, POS usage, and customer engagement.
              </li>
              <li>
                Dedicated local marketing campaigns, digital marketing strategies, and
                promotional materials are developed and executed by the company.
              </li>
              <li>
                Regular operational and quality audits are conducted with performance
                dashboards tracking sales, inventory, and customer satisfaction KPIs.
              </li>
              <li>
                The franchise agreement is structured for a 5-year term, with renewal
                support provided at the end of the period.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              FOCO &mdash; Franchise Owned, Company Operated
            </h3>

            <p>
              The FOCO model is designed for investors who prefer a more passive investment
              approach. Under this model, the investor provides the capital and space while
              The Buyzaar Mart handles all day-to-day store operations completely.
            </p>

            <p>
              This model is ideal for salaried professionals, NRIs, or individuals in Lucknow
              who have available capital or commercial space and want to earn a reliable
              income from organized retail without managing day-to-day operations.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart Franchise in Lucknow Specifically?
            </h2>

            <p>
              Lucknow is not just any city &mdash; it is a marketplace with immense untapped
              potential for organized grocery retail. Here is why The Buyzaar Mart franchise
              in Lucknow makes business sense:
            </p>

            <h3 className="font-medium text-gray-900">
              Growing Urban Population and Spending Power
            </h3>

            <p>
              Lucknow&apos;s population has crossed 35 lakh and continues to grow with the
              development of new residential townships, IT corridors, and urban infrastructure
              under Smart City and AMRUT schemes. Rising incomes and changing consumer
              preferences mean Lucknow households increasingly prefer organized, branded
              grocery stores over unstructured kirana shops.
            </p>

            <h3 className="font-medium text-gray-900">
              Underserved Neighborhoods Ready for Organized Retail
            </h3>

            <p>
              Despite being a major city, many residential localities in Lucknow &mdash;
              including Sultanpur Road, Raebareli Road, Chinhat, Jankipuram, Sitapur Road,
              and Vrindavan Yojana &mdash; are still underserved by organized retail. A
              well-positioned Buyzaar Mart in any of these high-density areas can quickly
              build a loyal customer base.
            </p>

            <h3 className="font-medium text-gray-900">
              Strong Community Culture and Loyalty
            </h3>

            <p>
              Lucknow residents are known for their loyalty to trusted brands and local
              businesses. The Buyzaar Mart&apos;s positioning as a friendly neighborhood store
              aligns perfectly with Lucknow&apos;s community-driven culture, enabling faster
              customer trust-building and repeat footfall.
            </p>

            <h3 className="font-medium text-gray-900">
              Low Competition from Organized Players
            </h3>

            <p>
              Unlike metros such as Delhi or Mumbai, Lucknow has comparatively limited
              organized grocery retail competition at the neighborhood level. National chains
              are largely concentrated in select malls and premium zones. This creates a
              significant first-mover advantage for Buyzaar Mart franchisees in Lucknow&apos;s
              residential catchment areas.
            </p>

            <h3 className="font-medium text-gray-900">
              Proximity to Buyzaar&apos;s Core Market in UP
            </h3>

            <p>
              The Buyzaar Mart&apos;s primary operational market is Uttar Pradesh, meaning the
              brand&apos;s supply chain, vendor relationships, marketing strategies, and local
              market knowledge are tailor-made for cities like Lucknow. As a franchisee in
              Lucknow, you benefit from this hyper-localized infrastructure from day one.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Get as a Buyzaar Mart Franchisee in Lucknow
            </h2>

            <p>
              The Buyzaar Mart is designed to remove the biggest barriers that prevent
              entrepreneurs from entering organized retail. As a franchise partner in Lucknow,
              you receive a complete turnkey business package that includes:
            </p>

            <h3 className="font-medium text-gray-900">
              Complete Store Setup and Launch Support
            </h3>

            <p>
              From the moment you sign the franchise agreement, The Buyzaar Mart team gets
              to work on your store. This includes site survey and location approval, store
              layout and interior design, installation of fixtures, branding elements,
              signage, and all store assets. Your store is launched as per the brand&apos;s
              established standards with no guesswork on your part.
            </p>

            <p>
              A grand opening strategy is executed with local marketing campaigns to generate
              maximum footfall from day one, ensuring your store is visible and buzzing with
              customers right from launch.
            </p>

            <h3 className="font-medium text-gray-900">
              Technology-Backed Operations
            </h3>

            <p>
              Every Buyzaar Mart store operates on a sophisticated POS (Point of Sale)
              system that handles billing, inventory tracking, sales reporting, and
              performance monitoring. As a franchisee, you get access to this technology
              along with full training, enabling your store to operate at the efficiency
              level of a corporate retail chain from the very first day.
            </p>

            <h3 className="font-medium text-gray-900">
              Hassle-Free Inventory and Stock Management
            </h3>

            <p>
              One of the biggest concerns for grocery store owners is unsold, expired, or
              damaged stock. The Buyzaar Mart eliminates this anxiety with its hassle-free
              inventory assurance model. The company takes back expired and damaged goods,
              allowing you to focus on stocking and selling what matters. This is a rare and
              franchisee-friendly policy that directly protects your investment and margins.
            </p>

            <p>
              Ongoing replenishment guidelines, procurement systems, and product mix
              strategies are provided and updated regularly to keep your store stocked with
              the right products at competitive prices.
            </p>

            <h3 className="font-medium text-gray-900">
              Training and Human Resource Support
            </h3>

            <p>
              Before your store opens, The Buyzaar Mart conducts comprehensive training
              programs for you and your staff. This covers store operations, POS system usage,
              customer service standards, inventory management, and daily SOP compliance.
              Ongoing support is available through a dedicated team that assists with
              operational queries, audits, and performance improvement.
            </p>

            <h3 className="font-medium text-gray-900">
              Marketing and Brand Visibility
            </h3>

            <p>
              The Buyzaar Mart invests in building your local brand visibility. Hyper-local
              marketing campaigns are developed and executed specifically for your franchise
              location, covering digital marketing, local promotions, and customer acquisition
              activities. This ensures your Lucknow store reaches the right audience in your
              neighborhood quickly and cost-effectively.
            </p>

            <h3 className="font-medium text-gray-900">
              Regular Audits and Performance Monitoring
            </h3>

            <p>
              The company conducts periodic operational and quality audits at your store
              and provides you with access to performance dashboards showing key metrics
              including sales, inventory levels, and customer satisfaction scores.
              Recommendations for improvement are provided proactively, ensuring your
              Lucknow store continues to grow and perform.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment Overview for Buyzaar Mart Franchise in Lucknow
            </h2>

            <p>
              Starting a Buyzaar Mart franchise in Lucknow is accessible even for first-time
              entrepreneurs. The brand offers one of the most affordable entry points in the
              organized grocery franchise space in India:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Franchise investment starting from ₹15 Lakh</li>
              <li>Multiple store formats available: Mini Mart, Super Mart, and Hyper Mart</li>
              <li>Complete setup and launch support included</li>
              <li>
                Low-risk model with inventory return policy for expired or damaged goods
              </li>
              <li>Technology (POS) provided and managed by the company</li>
              <li>5-year FOCM agreement with renewal support</li>
              <li>Full training and operational management by the brand</li>
            </ul>

            <p>
              For investors interested in the FOCO (passive income) model, the investment is
              structured around store size starting from 2,000 sq. ft. with a 10-year
              agreement for long-term income stability.
            </p>

            <p>
              To get a precise investment estimate tailored to your preferred location and
              store format in Lucknow, it is recommended to fill out the franchise inquiry
              form at{" "}
              <a
                href="https://www.thebuyzaarmart.com"
                className="text-green-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.thebuyzaarmart.com
              </a>{" "}
              and speak directly with the Buyzaar Mart franchise team.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Apply for Buyzaar Mart Franchise in Lucknow &mdash; Step by Step
            </h2>

            <p>
              Getting started with your Buyzaar Mart franchise in Lucknow is a simple,
              transparent, and well-supported process:
            </p>

            <h3 className="font-medium text-gray-900">
              Step 1 &mdash; Submit Your Inquiry
            </h3>

            <p>
              Visit{" "}
              <a
                href="https://www.thebuyzaarmart.com"
                className="text-green-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.thebuyzaarmart.com
              </a>{" "}
              and navigate to the Franchise or Contact section. Fill out the online inquiry
              form with your basic details including your name, contact number, city
              (Lucknow), and your investment preference. The Buyzaar Mart team will respond
              promptly to acknowledge your inquiry and guide next steps.
            </p>

            <h3 className="font-medium text-gray-900">
              Step 2 &mdash; Documentation and Agreement
            </h3>

            <p>
              Once your inquiry is reviewed and your location is assessed as viable, the team
              will guide you through the KYC process, legal documentation, and franchise
              agreement review and signing. The company provides complete compliance support
              throughout this process, making legal formalities simple and transparent.
            </p>

            <h3 className="font-medium text-gray-900">
              Step 3 &mdash; Store Setup and Grand Launch
            </h3>

            <p>
              After documentation is complete, The Buyzaar Mart team takes charge of your
              store&apos;s setup, branding, and operational readiness. Your store is launched
              with a dedicated grand opening strategy including local marketing campaigns,
              customer acquisition support, and operational backend setup, ensuring a strong,
              confident start in the Lucknow market.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Buyzaar Mart&apos;s Products and Store Categories
            </h2>

            <p>
              A Buyzaar Mart franchise in Lucknow will stock a comprehensive range of everyday
              essential products across multiple categories, catering to the complete household
              shopping needs of Lucknow families:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Groceries and Staples: Atta, rice, dal, sugar, salt, cooking oils, spices,
                and all dry grocery essentials.
              </li>
              <li>
                Dairy and Chilled Products: Milk, paneer, butter, ghee, curd, and other
                fresh dairy items.
              </li>
              <li>
                Packaged and Ready-to-Eat Foods: Biscuits, chips, namkeen, noodles, pasta,
                ready meals, breakfast cereals, and health snacks.
              </li>
              <li>
                Personal Care and Hygiene: Soaps, shampoos, toothpaste, face wash, skincare
                products, and sanitary essentials.
              </li>
              <li>
                Home Care and Cleaning: Detergents, dishwashing liquids, floor cleaners,
                and household care products.
              </li>
              <li>
                Beverages: Cold drinks, juices, health drinks, tea, coffee, and flavored
                water.
              </li>
              <li>Baby Care Products: Diapers, baby food, and infant essentials.</li>
              <li>
                Stationery and Everyday Utilities: Notebooks, pens, batteries, and other
                daily-use miscellaneous items.
              </li>
            </ul>

            <p>
              The product mix is curated and updated by The Buyzaar Mart&apos;s team based on
              local demand patterns, ensuring your Lucknow store always carries the right
              products that your neighborhood&apos;s customers are looking for.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the total investment required to start a Buyzaar Mart franchise in Lucknow?
                </h3>
                <p className="mt-2">
                  The Buyzaar Mart franchise investment starts from ₹15 Lakh. The exact
                  amount depends on your preferred store format &mdash; Mini Mart,
                  Super Mart, or Hyper Mart &mdash; and your chosen location in Lucknow.
                  Visit{" "}
                  <a
                    href="https://www.thebuyzaarmart.com"
                    className="text-green-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.thebuyzaarmart.com
                  </a>{" "}
                  to fill in your inquiry and get a precise estimate.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. What is the difference between the FOCM and FOCO models?
                </h3>
                <p className="mt-2">
                  In the FOCM (Franchise Owned, Company Managed) model, you own the store
                  and the company manages all operations under a 5-year agreement. In the
                  FOCO (Franchise Owned, Company Operated) model, you invest the capital and
                  the company fully operates the store, making it a more passive income
                  option under a 10-year agreement.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. Do I need any prior retail experience to open a Buyzaar Mart franchise?
                </h3>
                <p className="mt-2">
                  No. The Buyzaar Mart provides complete training for you and your staff on
                  store operations, POS systems, inventory management, and customer service.
                  Prior retail experience is helpful but not required.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. What happens if stock in my store expires or gets damaged?
                </h3>
                <p className="mt-2">
                  The Buyzaar Mart offers a hassle-free inventory assurance policy &mdash;
                  expired and damaged goods are taken back by the company, significantly
                  reducing your financial risk and allowing you to focus on selling.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. How long does it take to set up and launch a Buyzaar Mart store in Lucknow?
                </h3>
                <p className="mt-2">
                  After agreement signing, The Buyzaar Mart handles the complete store setup
                  including interior design, branding, POS installation, and grand launch.
                  Timelines vary by store format and location readiness, but the company
                  provides full pre-launch support throughout the process.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. What ongoing support does The Buyzaar Mart provide after the store launches?
                </h3>
                <p className="mt-2">
                  Post-launch support includes regular operational and quality audits,
                  performance dashboards with sales and inventory KPIs, ongoing marketing
                  campaigns, replenishment and procurement support, and a dedicated helpline
                  for operational assistance.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. How do I apply for the Buyzaar Mart franchise in Lucknow?
                </h3>
                <p className="mt-2">
                  Visit{" "}
                  <a
                    href="https://www.thebuyzaarmart.com"
                    className="text-green-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.thebuyzaarmart.com
                  </a>
                  , fill out the franchise inquiry form with your details and preferred
                  location in Lucknow, and the team will connect with you promptly to guide
                  you through the next steps including documentation and store setup.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                The Buyzaar Mart: A Brand Built for India&apos;s Retail Future
              </h2>

              <p className="mb-4 text-gray-800">
                Lucknow, with its expanding population, growing middle class, and increasing
                preference for organized shopping, is one of the most promising franchise
                markets in Uttar Pradesh.
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
                </a>
                , fill in the inquiry form, and start your journey toward owning a Buyzaar
                Mart franchise in Lucknow.
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
                <span className="font-semibold">📞Phone / WhatsApp:</span>{" "}
                <a
                  href="tel:+919217991727"
                  className="font-semibold text-green-600 hover:underline"
                >
                  9217991727
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Business Hours:</span> Monday to Saturday,
                10:00 AM &ndash; 6:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="lucknow"
            currentSlug="/lucknow/grocery-franchise-in-lucknow"
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