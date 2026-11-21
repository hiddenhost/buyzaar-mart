import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FOCO Mart Franchise in Amroha | The Buyzaar Mart",
  description:
    "Own a company-run Buyzaar Mart in Amroha under the FOCO model. About 10% revenue share, 10-year agreement, full operations support.",
  url: "https://www.thebuyzaarmart.com/amroha/foco-mart-franchise-amroha",
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
    name: "The Buyzaar Mart FOCO Mart Franchise in Amroha",
    itemListElement: [
      {
        "@type": "Offer",
        name: "FOCO Mart Franchise",
        description:
          "Franchise Owned, Company Operated mart franchise for Amroha investors, requiring a minimum of 2,000 sq ft and a 10-year agreement.",
      },
      {
        "@type": "Offer",
        name: "FOCM Mini Mart Franchise",
        description:
          "Franchise Owned, Company Managed supermarket franchise format for Amroha, starting from 600 sq ft with a total investment of 18.5 to ₹20 lakh.",
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
      name: "What is a FOCO mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Franchise Owned, Company Operated. You invest and provide the space, and the company runs the mart.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum mart size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2,000 square feet, suited to a full supermarket format.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I earn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically about 10% revenue sharing on total monthly sales, for example ₹3,00,000 on ₹30,00,000 in sales.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 10 years.",
      },
    },
    {
      "@type": "Question",
      name: "Who pays salaries and electricity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The company handles these costs, while you bear the store rent where applicable.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The company manages operations end to end.",
      },
    },
    {
      "@type": "Question",
      name: "What about expired stock?",
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
              FOCO Mart Franchise in Amroha – Own a Buyzaar Mart That the Company Runs for You
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Is the FOCO Mart Franchise in Amroha?
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>FOCO stands for Franchise Owned, Company Operated. You invest in a Buyzaar Mart in Amroha and own the outlet, while The Buyzaar Mart operates the store end to end, from the shop floor to the supply chain.</li>
              <li>The mart is a full-scale supermarket that brings groceries, FMCG, dairy, fresh produce, personal care and household items together in one organised, branded store.</li>
              <li>Your role is to provide the capital and the retail space. The company handles everything that happens once the doors open, so you benefit from a professionally managed mart without running it yourself.</li>
              <li>This makes the FOCO mart franchise a fit for investors who want exposure to organised retail with relatively passive, sales-linked income and no day-to-day management burden.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Amroha Is Ready for an Organised Mart
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Amroha is a busy district headquarters in western Uttar Pradesh, with households, traders, government employees and families from Hasanpur, Dhanaura and Naugawan Sadat who rely on the town for daily shopping.</li>
              <li>Local shoppers still depend heavily on small shops where prices vary and product choice is limited. A well-lit mart with fair pricing, transparent billing and trusted brands offers a clear upgrade.</li>
              <li>Better connectivity toward Gajraula, Moradabad and Delhi-NCR has raised expectations for hygiene, packaging, brand variety and a comfortable shopping environment.</li>
              <li>Groceries and daily essentials are repeat purchases, so a mart that gets the basics right enjoys steady traffic, with extra peaks around festivals, weddings and seasonal demand.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How the FOCO Mart Model Works
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>The investor provides the required capital and the premises, and bears the store rent where the space is not owned. This is the franchisee’s core responsibility under FOCO.</li>
              <li>The company takes complete ownership of store operations, delivering a standardised retail experience that matches every other Buyzaar Mart.</li>
              <li>Staff recruitment, salaries, electricity and other daily operating costs are handled by the company, so the investor does not manage the recurring expenses of the mart.</li>
              <li>The agreement is typically structured for a long term of 10 years, giving the mart time to build a loyal customer base in Amroha and giving the investor stability.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What a Shopper Sees Inside Your Mart
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>A clean, well-lit store with a clear layout, uniform branding and neatly displayed shelves, so customers find what they need quickly and enjoy the visit.</li>
              <li>A wide range of daily-need products under one roof, from grocery and staples to snacks, beverages, personal care and homecare, at value-conscious prices.</li>
              <li>A POS-enabled billing counter that keeps checkout fast and accurate, with CRM tools that help the team recognise and reward regular customers.</li>
              <li>Staff who follow brand SOPs for hygiene, service and merchandising, which keeps the shopping experience consistent from one visit to the next.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Size and Premises Requirements
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>The minimum mart size under FOCO starts from 2,000 square feet, which supports a full-scale supermarket with a comprehensive assortment and comfortable aisles.</li>
              <li>Larger premises can enhance the product assortment and revenue potential, since more space allows more categories, more brands and bigger customer baskets.</li>
              <li>Ground-floor locations with strong frontage, signage visibility, parking and a busy road or dense residential catchment are especially suitable.</li>
              <li>The Buyzaar team surveys every proposed site in Amroha for population, purchasing capacity and local demand before approval, so you know the location works before you commit.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Product Categories in Your FOCO Mart
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Grocery and staples, bakery and dairy products, beverages and snacks form the base of the range and bring customers in several times a month.</li>
              <li>Fresh fruits and vegetables, frozen foods, personal care and household essentials add variety and encourage one-stop shopping for the whole family.</li>
              <li>Stationery, toys, devotional items and pet care widen the mix and create additional reasons to visit, which supports higher bill values.</li>
              <li>Pricing and product mix are adjusted to local demand, so the Amroha mart reflects regional tastes and festive buying while holding the brand’s promise of affordability and quality.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What the Company Manages Every Day
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Hiring, training and paying the store team, along with shift planning and day-to-day supervision, so the mart always runs smoothly.</li>
              <li>Marketing and promotions, including launch events, hyper-local campaigns and digital marketing, which keep the mart visible in the neighbourhood.</li>
              <li>Product display, store layout, merchandising and hygiene standards, which keep the Amroha mart consistent with Buyzaar brand standards.</li>
              <li>Inventory control, procurement, supply chain logistics and performance optimisation, supported by POS data and regular audits on sales, stock and customer satisfaction.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How the Investor Earns
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>The revenue model is performance linked, and the investor typically earns approximately 10% revenue sharing on the total monthly sales generated by the mart.</li>
              <li>For example, if the mart achieves monthly sales of ₹30,00,000, the investor can expect around ₹3,00,000 as revenue share for that month.</li>
              <li>Higher sales mean higher earnings for both the company and the investor, which keeps interests aligned and motivates the company to grow footfall and basket size.</li>
              <li>Actual earnings depend on the mart’s sales performance, so discuss realistic sales expectations for your Amroha property with the franchise team before you decide.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment for a FOCO Mart
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>The total investment depends mainly on the area of your premises, since the model starts at 2,000 square feet and grows with the size of the mart, its fit-out and its opening stock.</li>
              <li>Ask the franchise team for one consolidated total for your exact Amroha property rather than rough estimates, so that you can judge the opportunity as a single commitment.</li>
              <li>Compare the total with the expected revenue share, the 10-year agreement term and your own capital availability, including the premises you will provide.</li>
              <li>Request the figure in writing and review it with a financial adviser if needed, so there are no surprises later.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Technology, Brands and Stock Protection
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>A POS-enabled billing system and CRM tools record every sale, highlight fast-moving items and support repeat business from regular shoppers.</li>
              <li>The brand has associations with leading FMCG names such as HUL, ITC, Nestle, Dabur, Parle, Britannia and Tata Consumer, which keeps popular brands on your shelves.</li>
              <li>Direct sourcing from manufacturers and automated supply chain management support quality, fair pricing and fewer stock-outs.</li>
              <li>The Buyzaar buyback policy takes back expired and damaged goods, which protects the mart from avoidable stock losses.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Launch and Marketing for Your Amroha Mart
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>A distinctive store launch strategy is designed to create rapid local visibility, so the mart gets noticed from the first week.</li>
              <li>Hyper-local marketing campaigns and digital marketing target Amroha households and nearby towns, with branded materials supporting the launch.</li>
              <li>Customer acquisition support and local promotions are managed by the company, including festive campaigns tuned to local buying patterns.</li>
              <li>Regular reviews of signage, uniforms and merchandising keep the mart looking sharp and consistent with the wider Buyzaar network.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Eligibility, Documents and Application Process
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Applicants need the capital and a suitable premises of 2,000 square feet or more, with clear ownership or a valid rental or lease agreement.</li>
              <li>Documents include an ID proof such as Aadhaar, PAN or Voter ID, address proof, highest educational certificate, a cancelled cheque or passbook copy, and property documents.</li>
              <li>Submit an inquiry on thebuyzaarmart.com or call +91 9217991727, attend a call or meeting, complete the application, and have your site surveyed and approved.</li>
              <li>Complete KYC and legal documentation and sign the franchise agreement. The company then handles setup, branding, staffing and stocking, followed by the launch. A site visitation fee applies and is non-refundable once the visit is made.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Points to Weigh Before You Invest
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>FOCO suits a hands-off investor, so make sure you are comfortable leaving day-to-day decisions to the company for the full 10-year term.</li>
              <li>Returns depend on the mart’s sales, so evaluate the location, competition and footfall in your part of Amroha with care.</li>
              <li>Read the franchise agreement closely, including revenue share, responsibilities, renewal and exit terms, and consider advice from a legal or financial professional.</li>
              <li>If you prefer to stay involved in operations and want a smaller space, compare FOCO with the FOCM model before choosing.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Running stores include Shyam Nagar Kanpur, Sector 44 Chalera Noida, Gangoh near Bus Stand, Behat Saharanpur and Bahadrabad Haridwar, with a Ghaziabad outlet opening soon.</li>
              <li>The brand is FSSAI licensed, GST registered and MSME certified, adding compliance and credibility to your investment.</li>
              <li>Its pillars of simplicity, reliability, affordability and quality, and ownership and legacy suit an asset you can hold and pass on.</li>
              <li>The tagline “अपना बाजार – बचत का साथ, Quality की बात” reflects a clear promise of savings and quality that Amroha customers can relate to.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FAQs
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What is a FOCO mart franchise?
                </h3>
                <p className="mt-2">
                  Franchise Owned, Company Operated. You invest and provide the space, and the company runs the mart.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the minimum mart size?
                </h3>
                <p className="mt-2">
                  2,000 square feet, suited to a full supermarket format.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">How much can I earn?</h3>
                <p className="mt-2">
                  Typically about 10% revenue sharing on total monthly sales, for example ₹3,00,000 on ₹30,00,000 in sales.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How long is the agreement?
                </h3>
                <p className="mt-2">
                  Typically 10 years.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Who pays salaries and electricity?
                </h3>
                <p className="mt-2">
                  The company handles these costs, while you bear the store rent where applicable.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No. The company manages operations end to end.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What about expired stock?
                </h3>
                <p className="mt-2">
                  Buyzaar takes back expired and damaged goods.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your FOCO Mart Franchise Journey in Amroha
              </h2>

              <p className="mb-4 text-gray-800">
                Amroha&apos;s daily consumer economy offers one of the most reliable opportunities for a professionally operated branded mart.
              </p>

              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart FOCO franchise network and bring your neighborhood a modern daily needs store built on trust, convenience, and professional retail systems.
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
            currentSlug="/amroha/foco-mart-franchise-amroha"
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