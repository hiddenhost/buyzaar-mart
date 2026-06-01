import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Buyzaar Mart – Buyzaar Mart Franchise in Bareilly",
  description:
    "The Buyzaar Mart offers an affordable supermarket franchise in Bareilly with structured setup support, hyper-local marketing, POS billing, CRM tools, backend operational support, and hassle-free inventory assurance.",
  url: "https://www.thebuyzaarmart.com/bareilly/buyzaar-mart-franchise-in-bareilly",
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
    name: "Buyzaar Mart Franchise Support",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Store Setup and Branding",
        description:
          "Interior setup, signage, fixtures, shelving, and professional branded store design for Bareilly franchise partners",
      },
      {
        "@type": "Offer",
        name: "Retail Technology and Operations",
        description:
          "POS billing system, CRM support, backend inventory operations, and customer acquisition support",
      },
      {
        "@type": "Offer",
        name: "Hyper-Local Marketing",
        description:
          "Local area marketing campaigns and launch promotions tailored to the franchisee’s neighbourhood in Bareilly",
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
      name: "What is the minimum investment to open a Buyzaar Mart franchise in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The starting investment for a Buyzaar Mart franchise is ₹15 Lakh, which covers franchise fees, store setup, branding, POS installation, initial inventory, and the grand launch campaign.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior retail or business experience to apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Buyzaar Mart franchise package includes complete training and ongoing operational support, making it suitable even for first-time entrepreneurs with no retail background.",
      },
    },
    {
      "@type": "Question",
      name: "What is the ideal store size for a Buyzaar Mart in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stores typically operate in spaces ranging from 400 to 1200 square feet, ideally located in high-footfall residential or semi-commercial areas in Bareilly.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of support does Buyzaar Mart provide after the store opens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Post-launch support includes supply chain management, inventory replenishment, CRM tools, hyper-local marketing, POS technical support, and the expired and damaged goods buyback programme.",
      },
    },
    {
      "@type": "Question",
      name: "What does the expired and damaged goods policy mean for franchisees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyzaar Mart takes back expired or damaged stock from franchise stores, protecting margins and reducing the financial risk typically associated with perishable and FMCG inventory.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to set up and launch a Buyzaar Mart store in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline varies based on location readiness and documentation, but the Buyzaar Mart team works to get stores set up and launched as efficiently as possible, with full support at every step.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a Buyzaar Mart franchise in Bareilly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit www.thebuyzaarmart.com, go to the Franchise section, and fill out the inquiry form. The team will contact you promptly to guide you through the application and onboarding process.",
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
              Buyzaar Mart Franchise in Bareilly &mdash; Your Smartest Business
              Move in 2025
            </h1>

            <p>
              Bareilly is growing. Fast. The city&apos;s expanding middle class,
              rising disposable incomes, and a strong culture of neighbourhood
              shopping make it one of the most promising retail markets in Uttar
              Pradesh. If you have been looking for a proven, low-investment
              business opportunity in Bareilly, the Buyzaar Mart franchise could
              be exactly what you need.
            </p>

            <p>
              The Buyzaar Mart is a rapidly expanding supermarket franchise
              chain offering entrepreneurs a structured, supported path to
              owning a profitable neighbourhood grocery and FMCG store. With an
              entry investment starting from just ₹15 Lakh, it is one of the
              most affordable supermarket franchise opportunities available in
              North India today.
            </p>

            <p>
              This article covers everything you need to know about the Buyzaar
              Mart franchise in Bareilly &mdash; who it is for, what you get,
              how much it costs, how the model works, and how to apply.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Bareilly Is the Right City for a Grocery Franchise Right Now
            </h2>

            <p>
              Bareilly is the fourth-largest city in Uttar Pradesh with a
              population of over 10 lakh. The city sits at the heart of the
              Rohilkhand region and serves as a commercial hub for surrounding
              districts like Pilibhit, Shahjahanpur, and Rampur. Retail trade is
              deeply woven into the social fabric of Bareilly &mdash; from
              Subhash Nagar to Civil Lines, from Cantt to Nawabganj,
              neighbourhood stores are where families shop every single day.
            </p>

            <p>
              Despite this strong retail culture, most grocery shopping in
              Bareilly still happens at unorganised, small kirana stores that
              lack modern billing systems, consistent product quality, or
              customer-friendly return policies. This is precisely the gap that
              The Buyzaar Mart is designed to fill.
            </p>

            <p>
              As a Buyzaar Mart franchise owner in Bareilly, you occupy the
              sweet spot between the big-box supermarkets that require crores of
              investment and the small kirana that offers no scalability. You
              get a branded, organised neighbourhood supermarket &mdash; a
              modern shopping experience &mdash; at a fraction of the cost of
              setting up one independently.
            </p>

            <p>
              Key reasons Bareilly makes commercial sense for a Buyzaar Mart
              franchise:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Rapidly urbanising population with changing shopping habits</li>
              <li>Strong demand for organised retail with transparent pricing</li>
              <li>
                Limited presence of branded neighbourhood supermarket chains
              </li>
              <li>
                Rising middle-class awareness of product quality and hygiene
              </li>
              <li>
                Growing tier-2 city economy with increasing purchasing power
              </li>
              <li>
                Large residential localities with high daily footfall potential
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Buyzaar Mart Franchise Model &mdash; How It Works
            </h2>

            <p>
              The Buyzaar Mart franchise is designed to be hassle-free from day
              one. Here is how the process unfolds:
            </p>

            <h3 className="font-medium text-gray-900">
              Step 1 &mdash; Submit an Inquiry
            </h3>

            <p>
              The journey begins at thebuyzaarmart.com. You fill out an inquiry
              form, and the franchise team gets back to you promptly with
              details relevant to your city and locality. For Bareilly
              applicants, the team assesses your proposed store location and its
              commercial potential.
            </p>

            <h3 className="font-medium text-gray-900">
              Step 2 &mdash; Documentation and Agreement
            </h3>

            <p>
              Once the preliminary discussion is done and the location is
              approved, the legal and documentation process begins. This covers
              KYC verification, legal documentation review, franchise agreement
              signing, and compliance formalities. The Buyzaar Mart team
              provides complete support throughout this stage so you are never
              left navigating paperwork alone.
            </p>

            <h3 className="font-medium text-gray-900">
              Step 3 &mdash; Store Setup and Launch
            </h3>

            <p>
              The third stage is where things get exciting. The Buyzaar Mart
              team manages your store&apos;s complete setup &mdash; from
              interior design and branding to POS system installation and
              inventory stocking. The store launch is backed by a dedicated
              strategy, including hyper-local marketing campaigns designed
              specifically for your neighbourhood in Bareilly. The goal is to
              drive customer footfall from the very first day.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Get as a Buyzaar Mart Franchise Partner in Bareilly
            </h2>

            <p>
              Choosing the Buyzaar Mart franchise means you are not starting
              from scratch. Here is what the brand brings to your store:
            </p>

            <h3 className="font-medium text-gray-900">
              1. Rapid Local Visibility
            </h3>
            <p>
              The Buyzaar Mart has a distinctive store launch strategy
              engineered for rapid recognition in your local area. Eye-catching
              branding, launch promotions, and targeted outreach ensure that
              your store becomes the go-to shopping destination in your
              neighbourhood quickly.
            </p>

            <h3 className="font-medium text-gray-900">
              2. Hyper-Local Marketing Campaigns
            </h3>
            <p>
              No two localities in Bareilly are the same. The marketing approach
              is not generic &mdash; it is tailored for your specific area,
              whether you are operating in a densely populated residential
              colony, a busy market lane, or near a school and hospital cluster.
              The Buyzaar Mart creates localised campaigns that speak directly
              to your customers.
            </p>

            <h3 className="font-medium text-gray-900">
              3. Complete Backend Operational Support
            </h3>
            <p>
              End-to-end backend support is one of the biggest advantages of
              joining Buyzaar Mart. Supply chain management, inventory
              replenishment, vendor coordination, and compliance &mdash; all of
              this runs smoothly in the background so you can focus on running
              the store.
            </p>

            <h3 className="font-medium text-gray-900">
              4. POS-Enabled Billing System
            </h3>
            <p>
              Every Buyzaar Mart store is equipped with a modern point-of-sale
              (POS) billing system. This gives your customers fast, accurate
              billing while giving you clean, real-time sales data to manage
              inventory and understand buying patterns.
            </p>

            <h3 className="font-medium text-gray-900">
              5. Customer Relationship Management (CRM)
            </h3>
            <p>
              The franchise package includes a CRM system that helps you build
              lasting relationships with your customers. Loyalty programmes,
              purchase history, and targeted offers keep customers coming back
              to your store over and over again.
            </p>

            <h3 className="font-medium text-gray-900">
              6. Uniform Branding and Store Design
            </h3>
            <p>
              Every Buyzaar Mart store carries a consistent, professional look
              and feel. Uniform signage, store layout guidelines, and branded
              merchandising ensure that your store looks credible, trustworthy,
              and welcoming from the moment a customer walks in.
            </p>

            <h3 className="font-medium text-gray-900">
              7. Wide Product Range Under One Roof
            </h3>
            <p>
              Your store stocks a comprehensive range of daily-need products
              &mdash; grocery staples, FMCG brands, packaged foods, personal
              care, household essentials, dairy, and more. The product
              selection is broad enough to serve as a complete shopping
              destination while remaining focused on everyday essentials.
            </p>

            <h3 className="font-medium text-gray-900">
              8. Localized Product Flexibility
            </h3>
            <p>
              Bareilly has its own tastes and preferences. The Buyzaar Mart
              franchise model allows for product flexibility at the local level
              &mdash; so your store can stock items that resonate specifically
              with Bareilly&apos;s customers and local food culture, giving you
              a meaningful edge over generic chain stores.
            </p>

            <h3 className="font-medium text-gray-900">
              9. Hassle-Free Inventory Assurance
            </h3>
            <p>
              One of the most unique and franchisee-friendly features of The
              Buyzaar Mart is its expired and damaged goods buyback policy. The
              brand takes back expired and damaged stock &mdash; relieving you
              of one of the most stressful aspects of running a retail store and
              protecting your margins.
            </p>

            <h3 className="font-medium text-gray-900">
              10. Customer Acquisition Support
            </h3>
            <p>
              Getting the first 500 loyal customers is often the hardest part of
              building any retail business. Buyzaar Mart provides dedicated
              customer acquisition support to help you build a steady customer
              base from the very beginning, giving your Bareilly store a flying
              start.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Buyzaar Mart Franchise Investment in Bareilly &mdash; What to
              Expect
            </h2>

            <p>
              The Buyzaar Mart franchise is one of the most accessible
              supermarket franchise opportunities in India. The starting
              investment is ₹15 Lakh, which makes it viable for first-time
              entrepreneurs, salaried professionals looking for a second income
              stream, retired individuals seeking a stable business, and
              existing kirana owners looking to upgrade and formalise their
              operations.
            </p>

            <p>For Bareilly specifically, the investment covers:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Franchise fee and brand onboarding</li>
              <li>
                Store interior setup and branding, including signage, fixtures,
                and shelving
              </li>
              <li>POS system installation</li>
              <li>Initial inventory stocking</li>
              <li>Staff training</li>
              <li>Grand launch marketing campaign for your locality</li>
            </ul>

            <p>
              The Buyzaar Mart franchise is positioned for the neighbourhood
              grocery segment &mdash; stores typically operate from spaces of
              600 to 1200 square feet in high-footfall residential and
              semi-commercial locations. Bareilly has no shortage of such
              locations, from Rajendra Nagar and Shastri Nagar to Subhash Nagar,
              Pilibhit Road, and beyond.
            </p>

            <p>
              For exact investment details, area requirements, and ROI
              projections specific to your target location in Bareilly, it is
              recommended that you get in touch with the Buyzaar Mart franchise
              team directly at thebuyzaarmart.com.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Should Apply for a Buyzaar Mart Franchise in Bareilly?
            </h2>

            <p>
              The Buyzaar Mart franchise is open to a wide range of applicants.
              You do not need prior retail experience to apply &mdash; the
              brand&apos;s training and support system is built to bring anyone
              up to speed. Ideal franchise candidates include:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Working professionals in Bareilly looking to build a passive or
                semi-active income source
              </li>
              <li>
                Businessmen and traders seeking to diversify into organised
                retail
              </li>
              <li>
                Homemakers or family entrepreneurs who want a manageable
                neighbourhood business
              </li>
              <li>
                Ex-servicemen or retired individuals seeking a stable, dignified
                livelihood
              </li>
              <li>
                Existing grocery or kirana store owners who want to scale with a
                proven brand
              </li>
              <li>
                Investors looking for a low-risk, high-footfall retail business
                in a growing city
              </li>
            </ul>

            <p>
              The key requirements are commitment to quality service, a suitable
              store space in a high-footfall Bareilly locality, and the
              financial readiness to invest in a long-term business. Everything
              else &mdash; the systems, the support, the supply chain &mdash;
              The Buyzaar Mart provides.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart Over Other Franchise Options in
              Bareilly?
            </h2>

            <p>
              There are several grocery and supermarket franchise brands
              operating across India. Here is why The Buyzaar Mart stands out,
              especially for a city like Bareilly:
            </p>

            <h3 className="font-medium text-gray-900">
              Low Investment Entry Point
            </h3>
            <p>
              At ₹15 Lakh, this is among the most affordable branded
              supermarket franchise opportunities in North India. Most
              comparable concepts require ₹25&ndash;50 Lakh or more.
            </p>

            <h3 className="font-medium text-gray-900">
              Localisation Built into the Model
            </h3>
            <p>
              Unlike larger national chains that operate with rigid,
              one-size-fits-all systems, Buyzaar Mart&apos;s localised product
              flexibility means your Bareilly store reflects what Bareilly
              customers actually want to buy.
            </p>

            <h3 className="font-medium text-gray-900">
              Expired and Damaged Goods Protection
            </h3>
            <p>
              This is a game-changer. No other franchise in this investment
              range offers a buyback guarantee on damaged or expired stock. Your
              investment is protected.
            </p>

            <h3 className="font-medium text-gray-900">
              People-First Mission
            </h3>
            <p>
              The brand is built around empowering communities, not just
              maximising corporate profits. This people-first philosophy builds
              genuine customer trust at the neighbourhood level.
            </p>

            <h3 className="font-medium text-gray-900">
              City-Ready Support Team
            </h3>
            <p>
              The Buyzaar Mart franchise team has experience setting up stores
              in North India and understands the specific dynamics of Uttar
              Pradesh&apos;s retail market.
            </p>

            <h3 className="font-medium text-gray-900">
              Transparent Operations
            </h3>
            <p>
              From documentation to billing to inventory, the Buyzaar Mart
              system is designed around full transparency &mdash; which builds
              trust with both franchisees and their customers.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Apply for a Buyzaar Mart Franchise in Bareilly
            </h2>

            <ol className="ml-4 list-inside list-decimal space-y-2">
              <li>
                Visit{" "}
                <a
                  href="https://www.thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.thebuyzaarmart.com
                </a>
              </li>
              <li>Navigate to the Franchise section</li>
              <li>
                Fill out the franchise inquiry form with your details &mdash;
                name, city (Bareilly), contact number, and your proposed store
                location
              </li>
              <li>
                The Buyzaar Mart team will reach out to you to discuss your
                application, location suitability, and next steps
              </li>
              <li>
                You can also download the franchise brochure from the website
                for a detailed overview of the model, investment, and support
                structure
              </li>
            </ol>

            <p>
              The team responds promptly and the onboarding process is designed
              to be smooth and transparent from the very first conversation.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions &mdash; Buyzaar Mart Franchise Bareilly
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the minimum investment to open a Buyzaar Mart
                  franchise in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  The starting investment for a Buyzaar Mart franchise is ₹15
                  Lakh, which covers franchise fees, store setup, branding, POS
                  installation, initial inventory, and the grand launch
                  campaign.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. Do I need prior retail or business experience to apply?
                </h3>
                <p className="mt-2 text-gray-700">
                  No. The Buyzaar Mart franchise package includes complete
                  training and ongoing operational support, making it suitable
                  even for first-time entrepreneurs with no retail background.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. What is the ideal store size for a Buyzaar Mart in
                  Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  Stores typically operate in spaces ranging from 400 to 1200
                  square feet, ideally located in high-footfall residential or
                  semi-commercial areas in Bareilly.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. What kind of support does Buyzaar Mart provide after the
                  store opens?
                </h3>
                <p className="mt-2 text-gray-700">
                  Post-launch support includes supply chain management,
                  inventory replenishment, CRM tools, hyper-local marketing, POS
                  technical support, and the expired and damaged goods buyback
                  programme.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. What does the expired and damaged goods policy mean for
                  franchisees?
                </h3>
                <p className="mt-2 text-gray-700">
                  Buyzaar Mart takes back expired or damaged stock from
                  franchise stores, protecting your margins and reducing the
                  financial risk typically associated with perishable and FMCG
                  inventory.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. How long does it take to set up and launch a Buyzaar Mart
                  store in Bareilly?
                </h3>
                <p className="mt-2 text-gray-700">
                  The timeline varies based on location readiness and
                  documentation, but the Buyzaar Mart team works to get stores
                  set up and launched as efficiently as possible, with full
                  support at every step.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. How do I apply for a Buyzaar Mart franchise in Bareilly?
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
                  , go to the Franchise section, and fill out the inquiry form.
                  The team will contact you promptly to guide you through the
                  application and onboarding process.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Bareilly&apos;s Retail Future &mdash; And Your Place in It
            </h2>

            <p>
              Starting a Buyzaar Mart franchise in Bareilly today is not just a
              business decision &mdash; it is a long-term investment in one of
              UP&apos;s most promising urban markets. The neighbourhood
              supermarket format has extraordinary staying power. People do not
              stop needing groceries. They do not stop buying daily essentials.
              What they do is gravitate towards stores that offer them quality,
              transparency, and convenience &mdash; consistently, reliably, and
              close to home.
            </p>

            <p>
              That is exactly what a Buyzaar Mart store delivers. And in
              Bareilly, there is enormous room to be among the first to deliver
              it well.
            </p>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Buyzaar Mart Franchise in Bareilly Today
              </h2>

              <p className="mb-4 text-gray-800">
                Bareilly is one of Uttar Pradesh&apos;s most promising retail
                markets, and the neighbourhood supermarket model is built for
                long-term demand. With low entry investment, structured setup
                support, hyper-local marketing, and backend operational systems,
                Buyzaar Mart gives you a practical path into organised retail.
              </p>

              <p className="mb-4 text-gray-800">
                Whether you are a first-time entrepreneur, a working
                professional, a retailer upgrading from a kirana format, or an
                investor looking for a steady opportunity, this franchise model
                is designed to help you launch with confidence.
              </p>

              <p className="mb-4 font-semibold text-gray-800">
                Build a modern neighbourhood supermarket in Bareilly with the
                support of a proven retail brand.
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">📞Phone / WhatsApp:</span>{" "}
                <a
                  href="tel:+919217991727"
                  className="font-semibold text-green-600 hover:underline"
                >
                  9217991727
                </a>
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
                <span className="font-semibold">Business Hours:</span> Monday to
                Saturday, 10:00 AM &ndash; 6:00 PM
              </p>

              <p className="mt-4 text-gray-800">
                <span className="font-semibold">Apply online:</span>{" "}
                <a
                  href="https://www.thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.thebuyzaarmart.com
                </a>
              </p>

              <p className="mt-4 text-gray-800">
                Fill out the inquiry form on the website and the franchise team
                will connect with you to discuss location suitability,
                investment details, and the next steps for your Bareilly store.
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="bareilly"
            currentSlug="/bareilly/buyzaar-mart-franchise-in-bareilly"
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