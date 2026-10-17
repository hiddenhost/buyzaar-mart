import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FOCM Mart Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Own a FOCM mart franchise in Aligarh with The Buyzaar Mart. Mini Mart from 600 sq ft, 18–20% margin, POS, training and company-managed systems. Apply today.",
  url: "https://www.thebuyzaarmart.com/aligarh/focm-mart-franchise-aligarh",
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
    name: "The Buyzaar Mart FOCM Mart Formats in Aligarh",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Entry-level FOCM mart franchise format for Aligarh, requiring a minimum of 600 sq ft carpet area.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Mid-size FOCM mart franchise format for main roads and busy markets in Aligarh, with 1,000–3,000 sq ft of space.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Large-format FOCM mart franchise for high-visibility Aligarh locations with 3,000–8,000 sq ft of space.",
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
      name: "What is a FOCM mart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM means Franchise Owned, Company Managed. You own the store, and the company provides systems, training and standards.",
      },
    },
    {
      "@type": "Question",
      name: "What is the smallest store size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart needs at least 600 sq ft of carpet area.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a Mini Mart cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The brand indicates about ₹15 lakh to ₹20 lakh, depending on size, arrangement and location.",
      },
    },
    {
      "@type": "Question",
      name: "Can I suggest my own location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The team surveys the site for population, purchasing capacity and local demand before approval.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the FOCM agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The term is five years, with renewal evaluation at the end.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Training, billing software and ongoing support help new owners.",
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
              FOCM Mart Franchise in Aligarh – Own, Run and Grow a Buyzaar Mart in Your Neighbourhood
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What a FOCM Mart Means for You
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                FOCM stands for Franchise Owned, Company Managed. You invest in the store and own the outlet, while The Buyzaar Mart provides the systems, branding and standards that keep it running well.
              </li>
              <li>
                The model suits owners who want to be present at the store and build local relationships. You lead the team and the customer experience, and the company supplies the structure.
              </li>
              <li>
                You do not need prior retail experience. Training, simple billing software and continuous operational assistance help first-time owners manage the store profitably.
              </li>
              <li>
                The brand promise, &quot;अपना बाजार – बचत का साथ, Quality की बात,&quot; reflects fair pricing and dependable quality. Your mart carries that identity from the first day.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why a Neighbourhood Mart Works in Aligarh
            </h2>

            <h3 className="font-medium text-gray-900">
              Everyday Needs Drive Footfall
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Aligarh households buy groceries, snacks, beverages and home care items several times a week. A mart close to home wins repeat visits through convenience and trust.
              </li>
              <li>
                Festival and wedding seasons lift purchases of staples, dry fruits, gifts and beverages. A well-stocked mart can capture this extra demand without major changes.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Strong Local Catchments
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Dense residential colonies, student areas and busy market roads give a mart a steady flow of walk-in customers. Location choice decides how quickly sales build.
              </li>
              <li>
                Customers near the university and coaching areas look for packaged foods, personal care and quick shopping. A clean, billed mart suits this routine well.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              A Clear Edge Over Unorganised Shops
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Many nearby stores lack consistent pricing, clear billing and hygiene standards. A branded mart with POS billing and organised shelves feels more reliable.
              </li>
              <li>
                Shoppers increasingly prefer transparent MRP billing and a wide choice under one roof. The Buyzaar Mart format delivers both.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing Your Mart Format
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600–1,000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The best entry point for owners starting in Aligarh. It covers personal care, beverages, grocery and staples, home care and hygiene, stationery, snacks and biscuits.
              </li>
              <li>
                A minimum of 600 sq ft of carpet area is required. The brand indicates a total investment of roughly ₹15 lakh to ₹20 lakh for a Mini Mart, depending on size, arrangement and location.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart (1,000–3,000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Suited to main roads and busy markets. It adds dairy items and fruits and vegetables, which increase daily footfall and basket value.
              </li>
              <li>
                Investment rises with floor area, stock depth and interiors. Use the calculator on the franchise page for an estimate before you decide.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3,000–8,000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Built for high-visibility sites with a large catchment. It adds gifts and toys and frozen ready-to-eat items for complete family shopping.
              </li>
              <li>
                It needs strong capital and careful site selection. The franchise team helps judge whether your Aligarh site can support this format.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment in a FOCM Mart
            </h2>

            <h3 className="font-medium text-gray-900">
              What the Investment Covers
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The estimate has five parts: opening stock, store interiors, software fee, franchise fee including 18% GST, and security deposit. The site&apos;s calculator shows each part by square footage.
              </li>
              <li>
                Stock and interiors form the largest share. Larger stores need proportionally more of both, so area is the main cost driver.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Costs You Handle Separately
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Under FOCM, the franchisee bears fixed expenses such as store rent and staff salaries. Variable costs such as electricity and miscellaneous expenses also fall on you.
              </li>
              <li>
                Keep working capital for the first few months of operation. A small buffer protects you while sales build up.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Transparency Before You Commit
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The application includes a site visitation fee that becomes non-refundable once the visit is made. Understand this clearly before you proceed.
              </li>
              <li>
                Exact costs depend on location, store size and franchise model. Ask the team to confirm every figure in writing before payment.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Margins and Earning Potential
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand indicates an average gross margin of 18% to 20%, depending on location, size and sales volume. Gross margin is not take-home profit.
              </li>
              <li>
                Your net earnings are what remains after rent, salaries, electricity and other costs. Track these numbers monthly to understand real performance.
              </li>
              <li>
                Fast-moving staples bring steady volume, while personal care and packaged foods can improve margins. A balanced mix protects overall profitability.
              </li>
              <li>
                Ask for a store-level projection for your Aligarh location. Local footfall and rent make a big difference to results.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What The Buyzaar Mart Does for You
            </h2>

            <h3 className="font-medium text-gray-900">
              Site Survey and Store Setup
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company surveys and approves your location before work begins, checking population, purchasing capacity and local demand. You may also propose your own site.
              </li>
              <li>
                It handles store layout, interior design and branding so the mart matches brand standards. This setup includes categorising your store as a Mini, Super or Hyper Mart.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Agreement and Onboarding
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The team facilitates the franchise agreement, legal documentation and onboarding formalities. This keeps the process simple for first-time owners.
              </li>
              <li>
                You receive a licence to use The Buyzaar Mart trademarks, logos and brand identity for your outlet.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Operating Standards and Technology
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand supplies standard operating processes for daily operations, inventory control, hygiene, merchandising and customer service. Your team follows a proven routine.
              </li>
              <li>
                A POS system handles billing and sales tracking. It gives you clear stock and sales visibility without manual registers.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Stock, Pricing and Supply
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You receive opening stock recommendations, replenishment guidelines and procurement systems. Pricing and product mix advice reflect local customer needs.
              </li>
              <li>
                The company coordinates logistics for timely delivery and inventory optimisation. This helps avoid empty shelves and slow-moving stock.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Training and Ongoing Support
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Initial training covers store operations, POS use and customer engagement for you and your staff. A dedicated support team provides technical help afterwards.
              </li>
              <li>
                The company runs regular operational and quality audits and shares performance dashboards. These cover sales, inventory and customer satisfaction, along with improvement plans.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Buyback and Marketing
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The inventory assurance takes back expired and damaged goods, which cuts the risk of losing money on unsold stock.
              </li>
              <li>
                Local marketing, digital campaigns and launch promotions build visibility for your mart. Consistent signage and uniforms keep the brand look uniform.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Agreement Term
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The FOCM agreement runs for five years. The company supports renewal procedures and evaluation at the end of the term.
              </li>
              <li>
                Read the agreement carefully, including renewal criteria and your reporting duties. Ask questions before you sign.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Products Your Aligarh Mart Will Stock
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Core categories include grocery and staples, beverages, snacks and biscuits, personal care, home care and hygiene, and stationery. These fill the regular shopping list of most families.
              </li>
              <li>
                Larger formats add dairy, fruits and vegetables, gifts and toys, and frozen ready-to-eat items. These widen your customer base and raise average bills.
              </li>
              <li>
                Localised product flexibility lets you adjust the range to Aligarh preferences. Regional staples and festival items help your mart feel local.
              </li>
              <li>
                The brand works with 50+ FMCG partners across staples, snacks, beverages and personal care, which supports a reliable and varied range.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Eligibility and Documents
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Anyone with the required investment and a suitable store location in Aligarh can apply. Retail experience is helpful but not required.
              </li>
              <li>
                Keep ID proof (Aadhaar, PAN or Voter ID), a highest-education certificate and bank details such as a cancelled cheque or passbook copy ready.
              </li>
              <li>
                Property documents for the proposed store are also needed, either an ownership proof or a rental agreement.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Steps to Open Your FOCM Mart in Aligarh
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Step 1:</span> Leave an inquiry on the website or call +91 9217991727, then join a call or meeting to learn about the brand. The team replies within 24 hours.
              </li>
              <li>
                <span className="font-semibold">Step 2:</span> Fill in the application form. Your proposed site is surveyed, and work begins only after the team approves it.
              </li>
              <li>
                <span className="font-semibold">Step 3:</span> Review and sign the franchise agreement, then make the payment as per the agreed terms.
              </li>
              <li>
                <span className="font-semibold">Step 4:</span> Receive store setup and the franchise kit handover, followed by training, stocking and your launch.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Owners Choose The Buyzaar Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                FSSAI licensing, GST registration and MSME certification support compliance and trust. You invest in a documented business structure.
              </li>
              <li>
                Running stores include Kanpur, Noida, Gangoh, Saharanpur and Haridwar, with a new store coming soon in Ghaziabad. This shows steady growth across Uttar Pradesh and the NCR.
              </li>
              <li>
                An affordable entry point and structured support make ownership realistic for first-time entrepreneurs in Aligarh.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What is a FOCM mart?
                </h3>
                <p className="mt-2">
                  FOCM means Franchise Owned, Company Managed. You own the store, and the company provides systems, training and standards.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the smallest store size?
                </h3>
                <p className="mt-2">
                  A Mini Mart needs at least 600 sq ft of carpet area.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How much does a Mini Mart cost?
                </h3>
                <p className="mt-2">
                  The brand indicates about ₹15 lakh to ₹20 lakh, depending on size, arrangement and location.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Can I suggest my own location?
                </h3>
                <p className="mt-2">
                  Yes. The team surveys the site for population, purchasing capacity and local demand before approval.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How long is the FOCM agreement?
                </h3>
                <p className="mt-2">
                  The term is five years, with renewal evaluation at the end.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No. Training, billing software and ongoing support help new owners.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your FOCM Mart Franchise in Aligarh
              </h2>

              <p className="mb-4 text-gray-800">
                Aligarh offers a strong opportunity to own and operate a professionally supported neighbourhood mart.
              </p>

              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart FOCM network and bring fair pricing, dependable quality and organised retail to your locality.
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
            currentSlug="/aligarh/focm-mart-franchise-aligarh"
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