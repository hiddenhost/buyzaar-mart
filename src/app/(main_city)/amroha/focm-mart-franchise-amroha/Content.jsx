import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FOCM Mart Franchise in Amroha | The Buyzaar Mart",
  description:
    "Own a Buyzaar Mart in Amroha under the FOCM model. Investment ₹15–20 lakh, 18–20% margin, POS, training and supply support.",
  url: "https://www.thebuyzaarmart.com/amroha/focm-mart-franchise-amroha",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Amroha",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Amroha",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart FOCM Mart Franchise Formats in Amroha",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Entry-level FOCM mart franchise format designed for residential colony shops, society-level commercial units, and neighbourhood-facing locations in Amroha.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Mid-tier FOCM mart franchise format suited for main market locations, colony chowks, and busy residential sector roads in Amroha.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Large-format supermarket franchise suited for high-traffic commercial locations, township market areas, and premium residential zones in Amroha.",
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
      name: "What is a FOCM mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Franchise Owned Company Managed. You own and fund the mart, and Buyzaar manages systems, branding, technology and training.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total investment in Amroha?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart of 600–1000 sq ft typically needs 18.5 to ₹20 lakh in total, depending on size, location and work required.",
      },
    },
    {
      "@type": "Question",
      name: "What margin can I expect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An average gross margin of 18% to 20%, depending on location, size and sales volume.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Training, billing software and ongoing support are provided.",
      },
    },
    {
      "@type": "Question",
      name: "Who pays rent, salaries and electricity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The franchisee bears these running costs under FOCM.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "5 years, with renewal support from the company.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to expired stock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyzaar takes back expired and damaged goods.",
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
              FOCM Mart Franchise in Amroha – Own and Manage a Buyzaar Mart with the Company Behind You
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Is the FOCM Mart Franchise in Amroha?
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>FOCM stands for Franchise Owned Company Managed. You own a Buyzaar Mart in Amroha and fund its setup, while The Buyzaar Mart manages the operating framework that keeps the mart consistent, efficient and profitable.</li>
              <li>The mart is a neighbourhood supermarket offering groceries, FMCG, personal care, household items and more, with the look, pricing approach and service standards of the Buyzaar brand.</li>
              <li>You remain the owner and the face of the store in your community, but you do not have to invent systems for billing, stocking, training or marketing, because the company supplies them.</li>
              <li>The FOCM agreement runs for 5 years, and the company assists with the renewal procedure and evaluation criteria when the term ends.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Amroha Is a Good Place for a Mart
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Amroha is a busy district headquarters in western Uttar Pradesh, with households, traders and government employees, plus families from Hasanpur, Dhanaura and Naugawan Sadat who regularly shop in town.</li>
              <li>Everyday buying of groceries and household products creates repeat footfall, which gives a well-run mart a steady base of customers across the week and the year.</li>
              <li>Many shops in the area are still unorganised, with limited range and uncertain pricing, so a clean and branded mart with fair prices and a wider choice quickly stands out.</li>
              <li>Road links toward Gajraula, Moradabad and Delhi-NCR have raised expectations for hygiene, packaging and brand variety, which supports acceptance of a modern mart format.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Do as the Mart Owner
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>You provide the capital for the store setup and own the outlet. You also arrange the premises and pay the rent for the Amroha location, with site guidance from the Buyzaar team.</li>
              <li>You bear fixed costs such as staff salaries and variable costs such as electricity and miscellaneous expenses, so you remain in charge of cost control and day-to-day supervision.</li>
              <li>You follow brand SOPs, attend training, and share monthly reporting as required, because transparency of transactions and customer experience directly affect continuity of the franchise.</li>
              <li>You represent the mart in the neighbourhood, building relationships with regular customers and keeping the team motivated and aligned with brand standards.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What The Buyzaar Mart Does for You
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Before launch, the company surveys and approves the location, designs the layout and interiors, and sets up branding and store assets according to the format you choose.</li>
              <li>It licenses the Buyzaar trademarks and brand identity, and deploys its POS system for billing, sales tracking and inventory control.</li>
              <li>It supports procurement, opening stock recommendations, replenishment guidelines and logistics coordination, and it provides pricing and product-mix strategies suited to local consumer needs.</li>
              <li>It runs audits and performance reviews, provides dashboards and KPIs, and recommends corrective actions so that problems are spotted early and fixed quickly.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing Your Mart Format
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Mini Mart (600–1000 sq ft):</strong> A compact mart for residential colonies, covering personal care, beverages, grocery and staples, homecare and hygiene, stationery, snacks and biscuits.</li>
              <li><strong>Super Mart (1000–3000 sq ft):</strong> Adds dairy items and fruits and vegetables, which increase visit frequency and suit main roads and busier markets.</li>
              <li><strong>Hyper Mart (3000–8000 sq ft):</strong> The widest range, including gifts and toys and frozen ready-to-eat items, built for large premises and destination shopping.</li>
              <li>A minimum of 600 sq ft carpet area is required, and the team recommends the best format after surveying your proposed site in Amroha.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment for a FOCM Mart
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>The total investment for a Buyzaar Mart Mini Store (600–1000 sq ft) typically ranges from 18.5 to ₹20 lakh, depending on store size, arrangement, location and the work needed at the premises.</li>
              <li>Larger Super Mart and Hyper Mart formats need a higher total, which the franchise team can calculate once your premises and format are confirmed.</li>
              <li>Rent, staff salaries and electricity are running costs separate from the franchise investment, so keep working capital ready for the first few months of operation.</li>
              <li>Ask for a written estimate tailored to your Amroha property so that you can evaluate the full commitment before signing.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Margins and How a Mart Earns
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Franchisees can anticipate an average gross margin of 18% to 20%, depending on the store’s location, size and sales volume.</li>
              <li>Earnings improve when footfall is steady, stock moves quickly and wastage is low, which is why the company’s replenishment guidance and buyback policy matter.</li>
              <li>Net profit depends on how well you manage rent, salaries and electricity against monthly sales, so reviewing the dashboard every month is a smart habit.</li>
              <li>Higher basket values, driven by wider ranges and well-placed impulse categories, help the mart grow sales without needing large increases in customer numbers.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Product Range in Your Mart
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>The core range covers grocery and staples, beverages, snacks and biscuits, personal care, homecare and hygiene, and stationery, which together serve most daily household needs.</li>
              <li>Super Mart and Hyper Mart formats add dairy, fruits and vegetables, gifts and toys and frozen ready-to-eat items for families who want a complete shopping trip.</li>
              <li>Localised product flexibility lets the Amroha mart adjust the assortment for regional tastes and festive demand while keeping brand quality consistent.</li>
              <li>Pricing is value-conscious, in line with the brand’s promise of savings, which helps the mart stay competitive against both small shops and larger chains.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Supply Chain, Brands and Buyback Protection
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>The company supports procurement and replenishment through automated supply chain management, so shelves stay stocked and you avoid expensive overstocking.</li>
              <li>Products are sourced directly from manufacturers through 50+ FMCG partnerships with names such as HUL, ITC, Nestle, Dabur, Parle, Britannia and Tata Consumer.</li>
              <li>Under the inventory assurance, Buyzaar takes back expired and damaged goods, so you worry less about unsold stock and focus on selling.</li>
              <li>Regular logistics coordination helps deliveries arrive on time, which keeps popular items available during festival and wedding seasons.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Technology That Powers the Mart
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>A POS-enabled billing system speeds up checkout, keeps clear sales records and tracks inventory movement every day.</li>
              <li>CRM tools help you identify regular customers, understand their buying habits and bring them back with offers and festive promotions.</li>
              <li>Dashboards and KPIs on sales, inventory and customer satisfaction help you compare performance month to month and act on weak points.</li>
              <li>Standardised systems reduce paperwork and mistakes, so you and your staff can spend more time on service and merchandising.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Training, Launch and Marketing Support
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Initial training covers store operations, POS systems and customer engagement for you and your team, followed by ongoing technical assistance from a dedicated support team.</li>
              <li>A distinctive launch strategy is designed to create rapid local visibility, with hyper-local campaigns, digital marketing and branded materials.</li>
              <li>Customer acquisition support and local promotions help the mart build a loyal base from the early weeks, with festive campaigns tuned to local buying.</li>
              <li>Periodic reviews of signage, uniforms and merchandising keep the mart consistent with the wider Buyzaar network.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              A Monthly Checklist for Mart Owners
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Review the dashboard for sales, stock movement and customer satisfaction, and list the slow-moving items that need promotions or reduced ordering.</li>
              <li>Compare rent, salaries and electricity against monthly sales to make sure cost ratios stay healthy, and adjust staffing schedules where needed.</li>
              <li>Check hygiene, shelf display and signage against brand standards, and brief the team on any audit feedback or corrective actions.</li>
              <li>Plan the next month’s stock around local events such as Ramadan and Eid, Holi, Diwali, weddings and school reopening, using replenishment guidance.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing the Right Location in Amroha
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>You can propose your own location, and the Buyzaar team will survey it, considering population, purchasing capacity and local demand before final approval.</li>
              <li>Residential colonies, main market roads, areas near schools, offices and hospitals, and roads with easy parking are all strong candidates.</li>
              <li>Ground-floor shops with wide frontage and clear signage visibility attract more walk-in customers and help the mart build recognition quickly.</li>
              <li>Keep property papers ready, whether ownership documents or a rental agreement, as they are mandatory for the application and speed up approval.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents and How to Apply
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Documents include an ID proof such as Aadhaar, PAN or Voter ID, address proof, your highest educational certificate, a cancelled cheque or passbook copy, and property documents.</li>
              <li>Submit an inquiry on thebuyzaarmart.com or call +91 9217991727, then attend a call or meeting to understand the FOCM model and the brand.</li>
              <li>Fill in the application, get the site surveyed and approved, complete KYC and legal documentation, and sign the franchise agreement with the company’s compliance support.</li>
              <li>After payment, store setup and the franchise kit handover follow, with launch support. A site visitation fee applies and is non-refundable once the visit is made.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Running stores include Shyam Nagar Kanpur, Sector 44 Chalera Noida, Gangoh near Bus Stand, Behat Saharanpur and Bahadrabad Haridwar, with a Ghaziabad outlet opening soon.</li>
              <li>The brand is FSSAI licensed, GST registered and MSME certified, adding compliance and trust to your business.</li>
              <li>Its pillars of simplicity, reliability, affordability and quality, and ownership and legacy match the long-term thinking of a family business.</li>
              <li>The tagline “अपना बाजार – बचत का साथ, Quality की बात” is easy for local customers to remember and reflects the brand’s savings and quality promise.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FAQs
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What is a FOCM mart franchise?
                </h3>
                <p className="mt-2">
                  Franchise Owned Company Managed. You own and fund the mart, and Buyzaar manages systems, branding, technology and training.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the total investment in Amroha?
                </h3>
                <p className="mt-2">
                  A Mini Mart of 600–1000 sq ft typically needs 18.5 to ₹20 lakh in total, depending on size, location and work required.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">What margin can I expect?</h3>
                <p className="mt-2">
                  An average gross margin of 18% to 20%, depending on location, size and sales volume.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Do I need retail experience?</h3>
                <p className="mt-2">
                  No. Training, billing software and ongoing support are provided.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Who pays rent, salaries and electricity?
                </h3>
                <p className="mt-2">
                  The franchisee bears these running costs under FOCM.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How long is the agreement?
                </h3>
                <p className="mt-2">
                  5 years, with renewal support from the company.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What happens to expired stock?
                </h3>
                <p className="mt-2">
                  Buyzaar takes back expired and damaged goods.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your FOCM Mart Franchise Journey in Amroha
              </h2>

              <p className="mb-4 text-gray-800">
                Amroha&apos;s daily consumer economy offers one of the most reliable opportunities for a branded mart retail store.
              </p>

              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart franchise network and bring your neighborhood a modern daily needs store built on trust, convenience, and professional retail systems.
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
                  9217991727
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Business Hours:</span> Monday to Saturday, 09:00 AM – 07:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="amroha"
            currentSlug="/amroha/focm-mart-franchise-amroha"
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