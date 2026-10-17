import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Franchise Opportunity in Aligarh | The Buyzaar Mart",
  description:
    "Explore franchise opportunity in Aligarh with The Buyzaar Mart. FOCM and FOCO models, Mini to Hyper Mart formats, 18–20% margin, full support. Apply today.",
  url: "https://www.thebuyzaarmart.com/aligarh/franchise-opportunity-in-aligarh",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aligarh",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Aligarh",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Franchise Models and Formats in Aligarh",
    itemListElement: [
      {
        "@type": "Offer",
        name: "FOCM Franchise",
        description:
          "Franchise Owned, Company Managed supermarket franchise in Aligarh with owner involvement, company-managed systems and an indicated 18–20% gross margin.",
      },
      {
        "@type": "Offer",
        name: "FOCO Franchise",
        description:
          "Franchise Owned, Company Operated supermarket franchise in Aligarh for investors with 2,000 sq ft or larger retail space and approximately 10% revenue share.",
      },
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Entry-level supermarket franchise format for residential lanes, colonies and compact shops, requiring at least 600 sq ft of carpet area.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Mid-size supermarket franchise format for main roads and busy markets in Aligarh, covering 1,000–3,000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Large flagship supermarket franchise format for high-footfall Aligarh locations, covering 3,000–8,000 sq ft.",
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
      name: "What franchise opportunity does The Buyzaar Mart offer in Aligarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A supermarket franchise in Mini, Super or Hyper Mart formats under the FOCM or FOCO model.",
      },
    },
    {
      "@type": "Question",
      name: "How much investment is needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart indicates about ₹15 lakh to ₹20 lakh. Larger formats and FOCO cost more.",
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
      name: "What is the difference between FOCM and FOCO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In FOCM you own and usually run the store. In FOCO the company operates it and you earn revenue share.",
      },
    },
    {
      "@type": "Question",
      name: "Is profit guaranteed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Results depend on location, sales and management.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the inquiry form on thebuyzaarmart.com or call +91 9217991727.",
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
              Franchise Opportunity in Aligarh – Open a Buyzaar Mart Supermarket in Your City
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Opportunity at a Glance
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart offers Aligarh entrepreneurs a neighbourhood supermarket franchise built around everyday household needs. Stores combine modern billing and layouts with the warmth of a local shop.
              </li>
              <li>
                Two ownership models and three store formats let you match the franchise to your capital, space and involvement. The brand indicates investment from about ₹15 lakh for a Mini Mart.
              </li>
              <li>
                The brand&apos;s own franchise inquiry form lists Aligarh among its cities. This signals active interest in expanding here.
              </li>
              <li>
                Support covers store setup, supply chain, POS billing, training, marketing and a buyback on expired and damaged goods. First-time owners can start without prior retail experience.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Aligarh Is Worth Considering
            </h2>

            <h3 className="font-medium text-gray-900">
              Constant Household Demand
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Families in Aligarh buy staples, snacks, beverages and home care items several times a month. This repeat buying gives grocery retail steady footfall.
              </li>
              <li>
                Festivals such as Diwali, Eid and Holi and the wedding season lift bills. A well-planned store turns these months into peak sales.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              A Varied Customer Base
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The university and coaching culture brings students and young professionals who buy packaged food and personal care. Family colonies add monthly stocking and traders add quick daily purchases.
              </li>
              <li>
                A wide range under one roof serves all these groups. It also spreads your dependence across several customer types.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Gap Between Kirana and Organised Retail
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Many local shops rely on manual billing, limited variety and basic shelving. An organised store with POS billing, planned layout and a wider range offers a clear step up.
              </li>
              <li>
                Shoppers increasingly want transparent pricing and tidy, easy-to-navigate stores. A branded format meets these expectations.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Room Outside the Metros
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Tier-2 cities often have lower rent and less competition than saturated metros. Local demand and residential growth matter more than city size.
              </li>
              <li>
                This can help a well-located store keep more of its margin. Location choice still decides results.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              About The Buyzaar Mart
            </h2>

            <h3 className="font-medium text-gray-900">
              Brand and Promise
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart is a neighbourhood supermarket franchise brand headquartered in Noida. Its tagline, &quot;अपना बाजार – बचत का साथ, Quality की बात,&quot; reflects savings and consistent quality.
              </li>
              <li>
                Brand pillars include simplicity, reliability, affordability and quality, and ownership and legacy. They shape store design and support.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Compliance and Network
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand is FSSAI licensed, GST registered and MSME certified. These matter for a food retailer and for franchise trust.
              </li>
              <li>
                Running stores include Kanpur, Noida, Gangoh, Saharanpur and Haridwar, with a Ghaziabad store coming soon. The website offers 3D renders and a virtual tour of the store format.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choose Your Ownership Model
            </h2>

            <h3 className="font-medium text-gray-900">
              FOCM – Franchise Owned, Company Managed
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You own the outlet and invest in its setup, while the company manages systems, branding, technology, training and performance standards. You usually run the store or appoint a manager.
              </li>
              <li>
                The franchisee bears rent, staff salaries, electricity and other costs. The agreement term is five years with renewal evaluation, and the brand indicates 18–20% gross margin.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              FOCO – Franchise Owned, Company Operated
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You provide capital and the store space, while the company operates the store, staff, marketing and supply chain. This suits investors who prefer low day-to-day involvement.
              </li>
              <li>
                The minimum store size is 2,000 sq ft, with a typical 10-year agreement. The investor earns about 10% revenue share on monthly sales and pays the rent.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choose Your Store Format
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600–1,000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The entry format for residential lanes, colonies and compact shops, with at least 600 sq ft of carpet area. It stocks personal care, beverages, grocery and staples, home care and hygiene, stationery, and snacks and biscuits.
              </li>
              <li>
                The brand indicates about ₹15 lakh to ₹20 lakh in total investment, depending on size, arrangement and location.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart (1,000–3,000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A mid-size format for main roads and busy markets. It adds dairy items and fruits and vegetables to the Mini Mart range.
              </li>
              <li>
                The brand describes it as its most popular format. Investment rises with area, stock and interiors.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3,000–8,000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The large flagship format for high-footfall locations. It adds gifts and toys and frozen ready-to-eat items for complete family shopping.
              </li>
              <li>
                It needs the highest capital and a larger team. Check with the franchise team whether your site can support it.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment Snapshot
            </h2>

            <h3 className="font-medium text-gray-900">
              What the Cost Covers
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The estimate includes opening stock, store interiors, software fee, franchise fee including 18% GST and security deposit. The calculator on the franchise page shows each part by area.
              </li>
              <li>
                Costs for rent, staff salaries and electricity are separate for FOCM franchisees. Keep working capital ready for the first few months.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              FOCO Cost Components
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Published rates include a ₹3,00,000 franchise fee and ₹50,000 per POS login. Interiors are estimated at ₹1,200 per sq ft plus GST, and stock at about ₹1,700 per sq ft.
              </li>
              <li>
                For a 2,000 sq ft store, this works out to roughly ₹62 lakh to ₹66 lakh before rent. Confirm every figure with the team in writing.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Margins and Returns
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                FOCM stores indicate an average gross margin of 18% to 20%, depending on location, size and sales volume. Net income is what remains after rent, salaries, electricity and other costs.
              </li>
              <li>
                FOCO investors typically earn about 10% revenue share on monthly sales. The brand&apos;s example shows ₹3,00,000 on ₹30,00,000 of sales, before rent.
              </li>
              <li>
                These are indications, not guarantees. Ask for a store-level projection for your Aligarh site.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Organised Mart or Traditional Kirana
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A kirana store is usually run by the owner with manual tracking and limited shelf space. An organised mart uses structured systems, planned layouts and POS billing.
              </li>
              <li>
                A mart can carry a wider range and is designed for expansion across locations. A kirana store depends heavily on the owner&apos;s presence.
              </li>
              <li>
                Profit depends on location, efficiency and demand in either case. A franchise adds brand recognition, supply support and technology.
              </li>
              <li>
                Both formats serve local communities, so the choice depends on your capital, goals and appetite for structure.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Support You Receive
            </h2>

            <h3 className="font-medium text-gray-900">
              Setup and Supply
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The team surveys and approves your site, then handles layout, interiors and branding to brand standards. A franchise kit handover follows the setup.
              </li>
              <li>
                Opening stock recommendations, replenishment guidance and logistics coordination keep shelves balanced. The brand works with 50+ FMCG partners.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Technology and Standards
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                POS billing tracks sales and stock, and CRM tools help you recognise repeat customers. Performance dashboards cover sales, inventory and customer satisfaction.
              </li>
              <li>
                Standard operating processes cover hygiene, merchandising and customer service. Regular audits help maintain consistency.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Training and Marketing
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Training covers product categories, inventory, POS use, customer service, returns and hygiene for you and your staff. A dedicated support team assists after launch.
              </li>
              <li>
                Launch strategy, hyper-local marketing, digital promotions and customer acquisition support build early footfall.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Inventory Assurance
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand takes back expired and damaged goods, which reduces the financial risk common to standalone grocery stores.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Eligibility and Documents
            </h2>

            <h3 className="font-medium text-gray-900">
              Who Can Apply
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You need a suitable retail space in a residential locality, market area or busy neighbourhood, and enough capital for setup and working costs.
              </li>
              <li>
                FOCM owners should be ready for hands-on involvement or appoint a dedicated store manager. Prior retail experience is not required.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Documents to Keep Ready
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                ID proof such as Aadhaar, PAN or Voter ID, and a certificate of your highest education.
              </li>
              <li>
                Bank details through a cancelled cheque or passbook copy, plus property documents such as ownership proof or a rental agreement.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step Process to Start
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Step 1:</span> Submit an inquiry on thebuyzaarmart.com or call +91 9217991727. Share your city, space and store type, and expect a reply within 24 hours.
              </li>
              <li>
                <span className="font-semibold">Step 2:</span> Join a briefing with the franchise team to review the model, support and your location&apos;s potential. Download the brochure if you wish.
              </li>
              <li>
                <span className="font-semibold">Step 3:</span> Complete the application and documents. Your site is surveyed for population, purchasing capacity and local demand, and a site visitation fee becomes non-refundable once the visit is made.
              </li>
              <li>
                <span className="font-semibold">Step 4:</span> Review the agreement carefully, including term, renewal, fees and returns policy, then sign and make the payment.
              </li>
              <li>
                <span className="font-semibold">Step 5:</span> Complete store setup, staff training and opening stocking.
              </li>
              <li>
                <span className="font-semibold">Step 6:</span> Launch with local marketing and backend support. When all requirements are ready, the process can take a few weeks from inquiry to launch.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Questions to Ask Before You Commit
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                What is the total cost in writing, and who pays rent, salaries and electricity? Compare this with your capital and working funds.
              </li>
              <li>
                What are the term, renewal and exit conditions of the agreement? Ask whether a legal advisor should review it.
              </li>
              <li>
                Can I visit a running store or speak with an existing franchisee? Real experience tells you more than a brochure.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What franchise opportunity does The Buyzaar Mart offer in Aligarh?
                </h3>
                <p className="mt-2">
                  A supermarket franchise in Mini, Super or Hyper Mart formats under the FOCM or FOCO model.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How much investment is needed?
                </h3>
                <p className="mt-2">
                  A Mini Mart indicates about ₹15 lakh to ₹20 lakh. Larger formats and FOCO cost more.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No. Training, billing software and ongoing support are provided.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the difference between FOCM and FOCO?
                </h3>
                <p className="mt-2">
                  In FOCM you own and usually run the store. In FOCO the company operates it and you earn revenue share.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Is profit guaranteed?
                </h3>
                <p className="mt-2">
                  No. Results depend on location, sales and management.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How do I apply?
                </h3>
                <p className="mt-2">
                  Use the inquiry form on thebuyzaarmart.com or call +91 9217991727.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Franchise Journey in Aligarh
              </h2>

              <p className="mb-4 text-gray-800">
                Aligarh offers a strong opportunity for a structured neighbourhood supermarket franchise.
              </p>

              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart network and choose the ownership model and store format that match your goals.
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
            city="aligarh"
            currentSlug="/aligarh/franchise-opportunity-in-aligarh"
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