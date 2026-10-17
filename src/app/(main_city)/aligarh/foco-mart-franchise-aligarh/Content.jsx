import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FOCO Mart Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Open a FOCO mart franchise in Aligarh with The Buyzaar Mart. Earn about 10% revenue share while the company runs your store. 10-year term. Apply now.",
  url: "https://www.thebuyzaarmart.com/aligarh/foco-mart-franchise-aligarh",
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
    name: "The Buyzaar Mart FOCO Supermarket Franchise in Aligarh",
    itemListElement: [
      {
        "@type": "Offer",
        name: "FOCO Mart Franchise",
        description:
          "Franchise Owned, Company Operated supermarket franchise in Aligarh starting from 2,000 sq ft, with approximately 10% revenue share and a 10-year agreement term.",
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
        text: "FOCO means Franchise Owned, Company Operated. You invest and provide the space, and Buyzaar Mart runs the store.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum store size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum is 2,000 sq ft. Larger stores can carry more products and raise revenue.",
      },
    },
    {
      "@type": "Question",
      name: "How much will I earn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Investors typically earn about 10% revenue share on monthly sales. Actual income depends on store sales and your rent.",
      },
    },
    {
      "@type": "Question",
      name: "Who pays rent and staff salaries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You pay the store rent. The company pays staff salaries, electricity and daily operating costs.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The FOCO agreement is typically 10 years.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill the inquiry form on thebuyzaarmart.com or call +91 9217991727. You can also email info@thebuyzaarmart.com.",
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
              FOCO Mart Franchise in Aligarh – Earn Revenue Share While Buyzaar Mart Runs Your Supermarket
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Is the FOCO Franchise Model?
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                FOCO stands for Franchise Owned, Company Operated. You provide the capital and the retail space, while The Buyzaar Mart operates the store day to day.
              </li>
              <li>
                It suits investors who want to enter organised retail without managing staff, stock or billing themselves. Your role stays at the ownership and investment level.
              </li>
              <li>
                The company handles daily operations, procurement, supply chain and marketing under one professional system. This gives a standardised supermarket experience from opening day.
              </li>
              <li>
                It differs from the FOCM model, where the franchisee owns the outlet and also bears running costs such as salaries. FOCO shifts those operating responsibilities to the company.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Aligarh Suits a FOCO Supermarket
            </h2>

            <h3 className="font-medium text-gray-900">
              Strong Daily Household Demand
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Aligarh is a large city with dense residential colonies, and families buy staples, snacks and home care items every week. This keeps supermarket footfall steady all year.
              </li>
              <li>
                Festival seasons around Diwali, Eid, Holi and wedding months raise basket sizes. A full-range supermarket captures this seasonal spending better than small shops.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              A Varied Customer Base
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The university and coaching ecosystem brings students and young professionals who value packaged food, personal care and convenient one-stop shopping.
              </li>
              <li>
                Established family neighbourhoods prefer a reliable store for monthly stocking. A clean, billed and well-organised supermarket earns repeat visits quickly.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Room for Organised Retail
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Many localities still depend on small kirana stores with inconsistent pricing and limited choice. A branded supermarket with POS billing and wide variety stands out.
              </li>
              <li>
                Shoppers now expect clear MRP billing, hygiene and a broad product range. A standard format helps meet these expectations from the start.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who This Franchise Is Best For
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Property owners in Aligarh with a commercial space of 2,000 sq ft or more can turn an idle or low-yield property into a branded retail business.
              </li>
              <li>
                Working professionals, NRIs and business families who want retail exposure without daily involvement are a natural fit for this model.
              </li>
              <li>
                Investors seeking performance-linked income rather than shop-floor work find the revenue-share structure easier to plan around.
              </li>
              <li>
                Existing traders who already run other businesses can add a managed supermarket without stretching their time.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Requirements for FOCO in Aligarh
            </h2>

            <h3 className="font-medium text-gray-900">
              Minimum Store Size
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The FOCO model starts at 2,000 sq ft, which supports a full-scale supermarket format. This space allows a comprehensive product range and comfortable shopping aisles.
              </li>
              <li>
                Larger stores can carry a wider assortment and raise revenue potential. Higher sales also lift your monthly revenue share.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Location Preferences
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Prefer busy residential catchments, main roads and areas near markets, schools, hospitals or colleges. Visibility and easy access matter more than frontage alone.
              </li>
              <li>
                Check parking, signage space and nearby competitors before finalising the premises. Good footfall at the site reduces the marketing effort needed later.
              </li>
            </ul>

            

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Pay and What the Company Pays
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                As the franchisee, you provide the retail space and bear the store rent, along with the capital investment. You also maintain the premises.
              </li>
              <li>
                The company manages electricity expenses, employee recruitment and salaries, and daily operating costs. Your involvement in running costs stays minimal.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Revenue Share and Returns
            </h2>

            <h3 className="font-medium text-gray-900">
              How the Revenue Share Works
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The investor typically earns about 10% revenue sharing on total monthly sales generated by the store. The share is linked to sales, not to store profit.
              </li>
              <li>
                The site&apos;s own example shows monthly sales of ₹30,00,000 giving a revenue share of around ₹3,00,000. Actual results depend on how the store performs.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Reading the Numbers Carefully
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Because you pay rent, your net income is the revenue share minus rent and any related property costs. Compare this against your investment before deciding.
              </li>
              <li>
                Higher sales benefit both you and the company, which keeps interests aligned. Strong sales also depend on location, footfall and product mix.
              </li>
              <li>
                Ask the team for a store-level projection for your Aligarh site. Never rely only on example figures when planning your investment.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Agreement Term and Stability
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The FOCO agreement is typically structured for 10 years. This long term gives both investor and company stability and continuity.
              </li>
              <li>
                A decade-long term suits investors who want a steady retail asset instead of a short-term venture. Read the agreement terms closely before signing.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What The Buyzaar Mart Handles for You
            </h2>

            <h3 className="font-medium text-gray-900">
              Store Operations and Staffing
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company recruits and pays staff and runs daily operations under its brand standard operating processes. This removes the burden of hiring and supervising a team.
              </li>
              <li>
                Product display, store layout and merchandising follow brand standards so every outlet looks and feels consistent.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Inventory, Procurement and Supply Chain
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Inventory control, procurement and supply chain logistics are managed centrally. This keeps shelves stocked and reduces the risk of empty racks or excess stock.
              </li>
              <li>
                The brand works with 50+ FMCG partners, giving access to household names across staples, snacks, beverages and personal care.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Buyback on Expired and Damaged Goods
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand&apos;s inventory assurance takes back expired and damaged goods. This protects your stock investment from avoidable losses.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Technology and Marketing
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                POS-enabled billing and CRM tools track sales, stock and customer behaviour. They support accurate reporting and repeat-customer building.
              </li>
              <li>
                The company runs marketing and promotional campaigns, including launch activity and local promotions. These help a new Aligarh store gain visibility fast.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Product Categories in the Store
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The supermarket covers grocery and staples, bakery and dairy, personal care, beverages, fresh fruits and vegetables, and frozen foods.
              </li>
              <li>
                It also carries stationery, toys, snacks, devotional items, pet care and household essentials. This wide mix draws families who want everything under one roof.
              </li>
              <li>
                Localised product flexibility lets the range match Aligarh tastes, from regional staples to festival items. This keeps the store relevant to nearby shoppers.
              </li>
              <li>
                Affordable pricing and consistent availability encourage customers to complete their full shopping in one place.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents Required
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                ID proof such as Aadhaar, PAN or Voter ID, plus a certificate of the highest education completed.
              </li>
              <li>
                Bank details through a cancelled cheque or passbook copy.
              </li>
              <li>
                Property documents for the proposed store, either an ownership proof or a rental agreement.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Start Your FOCO Franchise in Aligarh
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Step 1:</span> Submit an inquiry through the website form or call +91 9217991727. The team responds within 24 hours.
              </li>
              <li>
                <span className="font-semibold">Step 2:</span> Share your property details so the team can review location and size suitability for a 2,000 sq ft or larger format.
              </li>
              <li>
                <span className="font-semibold">Step 3:</span> Complete KYC and legal documentation, review the franchise agreement and sign it with full compliance support.
              </li>
              <li>
                <span className="font-semibold">Step 4:</span> Finalise interiors, stock and POS setup, then open with launch marketing led by the company.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                FSSAI licensing, GST registration and MSME certification support compliance and trust. You invest in a documented, legitimate business structure.
              </li>
              <li>
                Running stores include Kanpur, Noida, Gangoh, Saharanpur and Haridwar, with a new store coming soon in Ghaziabad. This shows an expanding Uttar Pradesh and NCR network.
              </li>
              <li>
                The brand focuses on transparent pricing and fair terms. Always review the agreement and investment details carefully before paying any amount.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What does FOCO mean?
                </h3>
                <p className="mt-2">
                  FOCO means Franchise Owned, Company Operated. You invest and provide the space, and Buyzaar Mart runs the store.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the minimum store size?
                </h3>
                <p className="mt-2">
                  The minimum is 2,000 sq ft. Larger stores can carry more products and raise revenue.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How much will I earn?
                </h3>
                <p className="mt-2">
                  Investors typically earn about 10% revenue share on monthly sales. Actual income depends on store sales and your rent.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Who pays rent and staff salaries?
                </h3>
                <p className="mt-2">
                  You pay the store rent. The company pays staff salaries, electricity and daily operating costs.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How long is the agreement?
                </h3>
                <p className="mt-2">
                  The FOCO agreement is typically 10 years.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How do I apply?
                </h3>
                <p className="mt-2">
                  Fill the inquiry form on thebuyzaarmart.com or call +91 9217991727. You can also email{" "}
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
                Start Your FOCO Franchise Journey in Aligarh
              </h2>

              <p className="mb-4 text-gray-800">
                Aligarh offers a strong opportunity for investors looking for a professionally operated supermarket franchise.
              </p>

              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart FOCO network and earn revenue share while the company manages daily store operations.
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
            currentSlug="/aligarh/foco-mart-franchise-aligarh"
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