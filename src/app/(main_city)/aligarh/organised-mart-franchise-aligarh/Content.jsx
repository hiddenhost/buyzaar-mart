import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Organised Mart Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Start an organised mart franchise in Aligarh with The Buyzaar Mart. Mini, Super and Hyper Mart formats from ₹15 lakh with FOCM model, POS billing and support.",
  url: "https://www.thebuyzaarmart.com/aligarh/organised-mart-franchise-aligarh",
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
    name: "The Buyzaar Mart Organised Mart Formats in Aligarh",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Entry-level organised mart franchise format for colony lanes, society shops and neighbourhood units in Aligarh, covering 600–1000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Mid-size organised mart franchise format for main market roads and busy residential stretches in Aligarh, covering 1000–3000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Full supermarket organised mart franchise format for high-traffic roads and premium residential zones in Aligarh, covering 3000–8000 sq ft.",
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
      name: "What is an organised mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is a store run under a branded system with set standards for design, billing, stock and service. You get the brand, setup and support.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost in Aligarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mini Mart typically costs ₹15–20 lakh. Super Mart and Hyper Mart cost more, depending on size.",
      },
    },
    {
      "@type": "Question",
      name: "What margin can I expect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Franchise partners can expect an average margin of 18–20%. It varies with location, size and sales volume.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Training, billing software and ongoing support are provided. Under FOCM, the company team manages the store.",
      },
    },
    {
      "@type": "Question",
      name: "How much space do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mini Mart needs 600–1000 sq ft, Super Mart 1000–3000 sq ft and Hyper Mart 3000–8000 sq ft. The minimum carpet area is 600 sq ft.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my own shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It must meet the space requirement and pass the team’s site survey.",
      },
    },
    {
      "@type": "Question",
      name: "What about expired stock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Buyzaar Mart takes back expired and damaged goods under its inventory assurance.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill the enquiry form on thebuyzaarmart.com or call 9217991727. The team will guide you through the next steps.",
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
              Organised Mart Franchise in Aligarh with The Buyzaar Mart
            </h1>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart brings a structured, system-led retail model to Aligarh. Store design, purchasing, billing, inventory and staff training all follow set standards instead of individual habits.
              </li>
              <li>
                Three formats are available: Mini Mart, Super Mart and Hyper Mart. Investment starts from ₹15 lakh for Mini Mart, so you can enter organised retail at a manageable level.
              </li>
              <li>
                The FOCM model lets you own the store while the company team manages operations. You gain a professional business without handling daily shop-floor work.
              </li>
              <li>
                Households buy daily needs again and again, so an organised mart benefits from steady repeat demand. Good systems turn that demand into dependable sales.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Organised Mart vs Unorganised Kirana
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A kirana usually depends on the owner’s memory and personal judgement for ordering and pricing. An organised mart uses recorded data and fixed processes, so decisions are consistent.
              </li>
              <li>
                Billing in many small shops is informal and manual. A POS system gives every customer a clear, accurate bill and gives the owner a reliable record of sales.
              </li>
              <li>
                Stock in unorganised shops is often disorganised, with slow items sitting beside fast ones. The brand’s retail model keeps shelves planned, labelled and easy to browse.
              </li>
              <li>
                Pricing in informal shops can vary from customer to customer. An organised mart offers fair, visible pricing, which builds trust over time.
              </li>
              <li>
                Expired or damaged goods are a constant worry for small shops. Here, the brand takes back expired and damaged goods under its inventory assurance.
              </li>
              <li>
                A kirana rarely has a recognised name beyond its lane. A branded mart carries a name and a look that customers recognise and trust.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Aligarh Is Ready for Organised Retail
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Aligarh is a large district city with dense residential colonies. Families shop for daily needs close to home, which suits neighbourhood-level marts.
              </li>
              <li>
                Most shopping is still done at small unorganised shops. This leaves room for a clean, well-managed mart that offers more choice and clearer billing.
              </li>
              <li>
                Aligarh Muslim University brings students, faculty and staff who prefer convenient, dependable stores. Campus-facing areas generate regular footfall.
              </li>
              <li>
                Business families in the lock and hardware trade have regular incomes and steady household budgets. This supports stable monthly sales.
              </li>
              <li>
                The city lies on the Delhi–Kanpur rail and road belt, near Delhi-NCR. Stock movement and replenishment are practical and cost-effective.
              </li>
              <li>
                Eid, Diwali, Holi and wedding seasons create strong sales peaks. A well-organised mart can plan for these and capture the extra demand.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Standards That Make a Mart Organised
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Uniform store design is installed by the Buyzaar Mart team, including shelving, display units, signage and lighting. Every outlet looks professional and recognisable.
              </li>
              <li>
                Products are grouped by category so customers can find items quickly. Clear sections and signage reduce confusion and save shoppers’ time.
              </li>
              <li>
                A curated product range focuses on what the neighbourhood actually buys. Fast-moving daily needs get the best space and the most attention.
              </li>
              <li>
                Prices are fair and consistent. Value-conscious pricing keeps everyday shopping within reach of middle-class households.
              </li>
              <li>
                Trained staff follow the same billing, stocking and service routines. Customers get the same quality of experience on every visit.
              </li>
              <li>
                Reporting is built into the system. Monthly reporting and transparency of transactions are part of the franchise agreement.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats for Organised Retail in Aligarh
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600–1000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                This is the entry level, built for colony lanes, society shops and neighbourhood units. Typical investment is ₹15 lakh to ₹20 lakh.
              </li>
              <li>
                It covers grocery and staples, snacks and biscuits, beverages, personal care, homecare and hygiene, and stationery. These are the items families buy most often.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart (1000–3000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                This mid-size format suits main market roads and busy residential stretches. It serves a wider catchment than a Mini Mart.
              </li>
              <li>
                Dairy items and fruits and vegetables are added to the range. Fresh categories bring daily visits and larger bill values.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3000–8000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                This is the full supermarket for high-traffic roads and premium residential zones. It offers the highest revenue potential.
              </li>
              <li>
                Gifts and toys and frozen ready-to-eat items complete the range. Shoppers can finish a full household shop in one visit.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Organised Inventory and Supply Chain
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Stock is sourced from manufacturer-linked supply, with regular replenishment. This keeps shelves full and purchase costs competitive.
              </li>
              <li>
                Supply chain management is automated and handled by the company team. You do not need to negotiate with many suppliers yourself.
              </li>
              <li>
                Inventory is planned around local demand. Your opening stock reflects what households in your Aligarh catchment buy most.
              </li>
              <li>
                Real-time stock tracking shows which products sell quickly and which move slowly. This helps reduce overstocking and lost sales.
              </li>
              <li>
                The brand’s inventory assurance covers expired and damaged goods. This protects your margin and keeps shelves fresh.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Technology Behind the Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A POS-enabled billing system is installed before launch. Bills are fast, accurate and recorded for every sale.
              </li>
              <li>
                Inventory management gives real-time stock visibility. You can see what is selling without counting items by hand.
              </li>
              <li>
                A CRM tool helps build lasting customer relationships. Regular shoppers can be recognised, rewarded and invited back with offers.
              </li>
              <li>
                Daily business reports are built into the system. This gives you a clear view of store performance.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The FOCM Ownership Model
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                FOCM stands for Franchise Owned, Company Managed. You invest in the store and hold the franchise rights, and the company team runs it.
              </li>
              <li>
                The team manages staff, inventory, supply chain, billing and store standards. You do not need to oversee daily shifts.
              </li>
              <li>
                The franchise agreement runs for 5 years with defined responsibilities. Both sides know their roles from the start.
              </li>
              <li>
                You arrange the premises and pay the rent. The team supports you with site selection so the location fits the format.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment and Margin Details
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Mini Mart investment typically ranges from ₹15 lakh to ₹20 lakh. Store size, interior needs and location decide the final amount.
              </li>
              <li>
                The total includes stock, interior, software fee, franchise fee (including 18% GST) and security deposit. The calculator on the franchise page estimates the figure for your format and area.
              </li>
              <li>
                Franchise partners can expect an average margin of 18% to 20%. Actual results depend on location, store size and sales volume.
              </li>
              <li>
                A minimum of 600 sq ft of carpet area is required. Aligarh rents are generally lower than in Delhi-NCR, so your budget can stretch further.
              </li>
              <li>
                Owning the property lowers recurring costs. Many investors choose a shop they already own to improve returns.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Customer Experience and Store Ambience
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Clean floors, tidy shelves and good lighting build trust. Shoppers return to stores where they feel comfortable and confident.
              </li>
              <li>
                Hygiene is part of the staff training. Clean stores support both packaged and fresh food categories.
              </li>
              <li>
                Good ambience encourages repeat visits and word of mouth. In neighbourhood retail, recommendations from nearby families drive much of the growth.
              </li>
              <li>
                Layout is planned by format, from aisle width to checkout flow. A smooth shopping path increases basket size.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Launch and Marketing Support
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A distinctive launch strategy gives your store quick local visibility. Residents learn about the new mart in the first week.
              </li>
              <li>
                Hyperlocal campaigns are planned for your catchment. Social media activity, promotional material and local brand building support the opening.
              </li>
              <li>
                Staff are recruited and trained before launch in billing, stocking and customer service. Your team is ready on opening day.
              </li>
              <li>
                Customer acquisition support continues after launch. The aim is steady growth in footfall and repeat buyers.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Areas in Aligarh Suited to an Organised Mart
            </h2>

            <h3 className="font-medium text-gray-900">
              Residential Neighbourhoods
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Sir Syed Nagar, Civil Lines, Dodhpur and Jamalpur have dense housing and regular daily demand. Mini Mart fits colony lanes in these areas.
              </li>
              <li>
                Streets near the university and student housing suit quick-purchase categories. Snacks, drinks and personal care sell steadily.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Market Roads and Highway Belts
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ramghat Road, Marris Road, Medical Road and Agra Road carry heavy traffic and offer visibility. Super Mart works well here.
              </li>
              <li>
                Larger plots with parking can support a Hyper Mart. A big organised store can draw customers from across the city.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Growing Colonies
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Newer colonies on the outskirts often lack an organised store. An early mart can become the default neighbourhood choice.
              </li>
              <li>
                You can propose your own location. The team reviews population, purchasing capacity and local demand before approval.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Eligibility and Application Process
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Business owners, property holders, professionals and retired individuals can apply. The FOCM model reduces the need for daily presence.
              </li>
              <li>
                Prior retail experience is not required. Training, billing software and operational support are included.
              </li>
              <li>
                Documents needed are an ID proof (Aadhaar, PAN or Voter ID), a highest education certificate, cancelled cheque or passbook copy, and property documents. A rent agreement is accepted.
              </li>
              <li>
                Submit an enquiry, attend a call or meeting, and complete the application form. Your proposed site is then surveyed.
              </li>
              <li>
                After approval, you sign the franchise agreement and make the payment. Store setup and franchise kit handover follow, with launch in 60 to 90 days.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Brand Credibility
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart runs stores in Kanpur, Noida, Gangoh, Saharanpur and Haridwar. A new store in Ghaziabad is opening soon.
              </li>
              <li>
                The business is FSSAI licensed, GST registered and MSME certified. These support trust with both partners and shoppers.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What is an organised mart franchise?
                </h3>
                <p className="mt-2">
                  It is a store run under a branded system with set standards for design, billing, stock and service. You get the brand, setup and support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How much does it cost in Aligarh?
                </h3>
                <p className="mt-2">
                  Mini Mart typically costs ₹15–20 lakh. Super Mart and Hyper Mart cost more, depending on size.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What margin can I expect?
                </h3>
                <p className="mt-2">
                  Franchise partners can expect an average margin of 18–20%. It varies with location, size and sales volume.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No. Training, billing software and ongoing support are provided. Under FOCM, the company team manages the store.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How much space do I need?
                </h3>
                <p className="mt-2">
                  Mini Mart needs 600–1000 sq ft, Super Mart 1000–3000 sq ft and Hyper Mart 3000–8000 sq ft. The minimum carpet area is 600 sq ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Can I use my own shop?
                </h3>
                <p className="mt-2">
                  Yes. It must meet the space requirement and pass the team’s site survey.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What about expired stock?
                </h3>
                <p className="mt-2">
                  The Buyzaar Mart takes back expired and damaged goods under its inventory assurance.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How do I apply?
                </h3>
                <p className="mt-2">
                  Fill the enquiry form on thebuyzaarmart.com or call 9217991727. The team will guide you through the next steps.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Organised Mart Franchise in Aligarh
              </h2>

              <p className="mb-4 text-gray-800">
                Aligarh offers a strong opportunity for a structured, professionally supported organised mart.
              </p>

              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart network and choose the Mini, Super or Hyper Mart format that matches your space, budget and goals.
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
            currentSlug="/aligarh/organised-mart-franchise-aligarh"
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