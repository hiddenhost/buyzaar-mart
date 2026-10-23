import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FOCM Mart Franchise in Hapur | The Buyzaar Mart",
  description:
    "Start a FOCM mart franchise in Hapur with The Buyzaar Mart. Own your mart, company manages systems. Total investment from ₹15 Lakh. Apply now.",
  url: "https://www.thebuyzaarmart.com/hapur/focm-mart-franchise-hapur",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hapur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Hapur",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart FOCM Mart Franchise Formats in Hapur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600–1000 sq ft compact format for residential lanes, covering personal care, beverages, grocery and staples, homecare and hygiene, stationery, and snacks and biscuits.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1000–3000 sq ft mid-size format for main roads and larger colony markets, adding dairy items and fruits and vegetables.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3000–8000 sq ft destination format for high-traffic locations, also including gifts and toys and frozen ready-to-eat items.",
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
      name: "What does FOCM mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Franchise Owned Company Managed: you own the mart, and the company manages systems and standards.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Total investment starts from ₹15 Lakh, depending on mart format and area.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the franchise term?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Five years, with renewal procedures at the end.",
      },
    },
    {
      "@type": "Question",
      name: "Who pays rent and salaries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The franchisee bears rent, staff salaries and variable costs like electricity.",
      },
    },
    {
      "@type": "Question",
      name: "What support does the company give?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Site survey, setup, branding, POS, training, marketing, audits and supply chain guidance.",
      },
    },
    {
      "@type": "Question",
      name: "What margin is highlighted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An effective gross margin of 18–20%, though results vary.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Submit the inquiry form or call +91 9217991727.",
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
              FOCM Mart Franchise in Hapur: Your Mart, Our Management Systems
            </h1>

            <ul className="list-disc space-y-2 pl-6">
              <li>The Buyzaar Mart, &quot;Your Friendly Neighborhood Store&quot;, offers a FOCM (Franchise Owned Company Managed) mart franchise in Hapur for entrepreneurs who want to own a branded supermarket with professional systems behind them.</li>
              <li>You own the mart; the company manages the model. The franchisee invests and owns the outlet, while The Buyzaar Mart manages branding, technology, training and performance systems.</li>
              <li>Total investment starts from ₹15 Lakh, making this an accessible entry into organised mart retail in a growing NCR-belt town like Hapur.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Is a FOCM Mart Franchise?
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>FOCM stands for Franchise Owned Company Managed. The franchisee provides capital for the store setup and owns the outlet, while the company manages the systems that keep operations consistent.</li>
              <li>It combines ownership with expert guidance. You keep control of your business and customer relationships, while the company supplies standard processes, technology and training.</li>
              <li>A brand licence comes with the model. The franchisee gets licensed use of The Buyzaar Mart trademarks, logos and brand identity, which builds quick recognition in the local market.</li>
              <li>It reduces first-time retail risk. New owners follow a tested operating framework instead of learning purchasing, merchandising and billing through costly mistakes.</li>
              <li>The franchise runs for a five-year term. Renewal procedures and evaluation criteria are handled by the company at the end of the term.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Hapur Is a Good Place for a Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Grocery demand is constant. Staples, oil, pulses, spices, snacks, dairy items, personal care and cleaning products are bought every week, which supports steady footfall.</li>
              <li>Hapur is well connected. Its location between Ghaziabad and Meerut means households are already familiar with organised retail and expect clean stores and fair pricing.</li>
              <li>New colonies need trusted marts. Expanding residential pockets often lack a branded, well-stocked supermarket within walking distance, leaving room for a new mart.</li>
              <li>Nearby towns increase reach. Shoppers from Pilkhuwa, Garhmukteshwar and Dhaulana often come to Hapur for shopping, which widens the catchment of a main-road store.</li>
              <li>Unorganised competition leaves gaps. Many local shops lack POS billing, uniform prices and planned stock, so a structured mart can stand out.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Trust and transparency. The brand promises attractive pricing, assured quality and constantly ongoing support, helping a new mart earn customer confidence.</li>
              <li>Simplicity in retail. The company takes the complexity out of handling, purchasing, inventory and supply chain so owners can focus on growth.</li>
              <li>Reliable supply and processes. Timely supply and transparent processes make the brand a partner you can trust.</li>
              <li>Designed for neighbourhood households. The range and pricing fit urban and semi-urban families who want convenience, value and a one-stop store near home.</li>
              <li>Compliance credentials. The business is FSSAI licensed, GST registered and MSME certified.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment for a FOCM Mart in Hapur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Total investment starts from ₹15 Lakh, which makes The Buyzaar Mart a low-investment mart franchise compared with many larger supermarket formats.</li>
              <li>The final total depends on mart format and area. Mini Mart, Super Mart and Hyper Mart each carry a different total, and the franchise team confirms the exact figure for your Hapur site.</li>
              <li>Use the website calculator. Select a store type and an area between 600 and 8,000 sq ft to get an estimate before you speak with the team.</li>
              <li>Download the brochure. The Franchise page offers a brochure so you can review the model and discuss your budget openly.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Mart Formats Available
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Mini Mart (600–1000 sq ft). A compact format for residential lanes, covering personal care, beverages, grocery and staples, homecare and hygiene, stationery, and snacks and biscuits.</li>
              <li>Super Mart (1000–3000 sq ft). A mid-size format for main roads and larger colony markets that adds dairy items and fruits and vegetables.</li>
              <li>Hyper Mart (3000–8000 sq ft). A destination format for high-traffic locations that also includes gifts and toys and frozen ready-to-eat items.</li>
              <li>Choose by site, not just space. Footfall, rent, parking and nearby households should guide the format, and the team can help you decide.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Pre-Launch Support From the Company
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Location survey and approval. The company reviews and approves your proposed Hapur site so the mart starts in a suitable location.</li>
              <li>Timely setup and launch. The team plans setup according to brand elements and positioning, including interior and store assets.</li>
              <li>Layout, interior and branding. Store layout, interior design and branding setup are handled by the company for uniform brand identity.</li>
              <li>Legal documentation. The company facilitates the franchise agreement, legal paperwork and onboarding formalities.</li>
              <li>Module-based categorisation. Your mart is set up as a Mini Mart, Super Mart or Hyper Mart, with support matched to that format.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Day-to-Day Operations and Standards
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Standard Operating Processes (SOP). The company ensures adherence to defined processes for daily operations, inventory control and customer service.</li>
              <li>POS billing and sales tracking. A technology system supports billing and gives clear visibility into daily sales.</li>
              <li>Hygiene and merchandising standards. Operational standards for performance, cleanliness and display keep every mart consistent.</li>
              <li>Opening stock and replenishment guidance. Franchisees receive opening stock recommendations, replenishment guidelines and procurement systems.</li>
              <li>Pricing and product mix strategy. Pricing and product mix are suited to local consumer needs, which matters in a market with regional tastes.</li>
              <li>Logistics coordination. Delivery coordination and inventory optimisation support timely supply and reduce stock-outs.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Training and Marketing Support
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Initial training programs. The franchisee and staff are trained on store operations, POS systems and customer engagement.</li>
              <li>Dedicated support team. Ongoing technical assistance, audits and performance reviews help the mart grow steadily.</li>
              <li>Local and digital marketing. The company develops local campaigns, digital strategies and brand materials, and supports launch promotions.</li>
              <li>Hyper-local visibility. Campaigns are tailored to each location, giving a Hapur mart rapid local awareness.</li>
              <li>Consistent brand presence. Signage, uniforms and periodic reviews keep brand standards strong across stores.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Audits, Dashboards and KPIs
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Operational and quality audits. The company regularly reviews franchise locations to maintain standards in operations, hygiene and service.</li>
              <li>Performance dashboards. Owners can track sales, inventory and customer satisfaction through key performance indicators.</li>
              <li>Corrective action plans. Audit findings lead to recommended improvements so issues are addressed early.</li>
              <li>Data-driven decisions. Clear reporting helps owners decide what to stock, promote and improve.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Costs Borne by the Franchisee
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Fixed expenses, including store rent and staff salaries, remain with the franchisee, keeping day-to-day control in the owner&apos;s hands.</li>
              <li>Variable expenses, such as electricity and miscellaneous running costs, are also borne by the franchisee.</li>
              <li>Company-side responsibilities cover design, branding setup, technology, training, audits and supply chain guidance.</li>
              <li>Budget with clarity. Knowing who pays what helps you prepare a realistic working plan for your Hapur mart.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Products Your Mart Will Stock
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Grocery and staples for everyday household needs.</li>
              <li>Personal care, beverages and snacks that raise basket size and margins.</li>
              <li>Homecare, hygiene and stationery that add useful, regular-purchase categories.</li>
              <li>Dairy, fruits and vegetables in larger formats for daily footfall.</li>
              <li>Recognised brand partners such as HUL, ITC, Nestle, Parle, Britannia, Dabur, Tata Consumer, Marico, Patanjali and Godrej.</li>
              <li>Localised flexibility. The range can be adapted to Hapur&apos;s local preferences and festival demand.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Technology That Powers the Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>POS-enabled billing. Fast, accurate billing with clear sales and stock data.</li>
              <li>Customer Relationship Management (CRM). Tracking purchases to support loyalty and offers.</li>
              <li>Organised inventory. The &quot;From Chaos to Smart Retail&quot; approach predicts demand and reduces unsold stock.</li>
              <li>Uniform branding. A clean, consistent look that builds trust in a busy market.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Profit Potential and Margins
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Effective gross margin of 18–20%. The Buyzaar Mart highlights this margin as part of its franchise model.</li>
              <li>Category planning helps profits. Spices, dry fruits, personal care, dairy and bakery sections can lift margin when stocked and displayed well.</li>
              <li>Repeat footfall builds income. Grocery is habit-based, so a clean mart with fair prices can bring customers back weekly.</li>
              <li>Results vary. Location, service quality, local marketing and daily discipline affect performance, so actual returns differ from store to store.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Hassle-Free Inventory Assurance
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Expired and damaged goods are taken back. The Buyzaar guarantee reduces worry about unsold, expired or damaged stock.</li>
              <li>Lower stock risk. Procurement support and replenishment guidance keep the focus on products that sell.</li>
              <li>Fresher shelves. Well-managed stock improves the customer experience and repeat purchases.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Should Apply?
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>First-time entrepreneurs who want a ready system and brand backing.</li>
              <li>Working professionals and investors who want to own a mart supported by professional management systems.</li>
              <li>Existing kirana owners who want to upgrade to an organised, tech-enabled supermarket format.</li>
              <li>Property owners in Hapur with suitable commercial space.</li>
              <li>Families building a legacy business to grow and pass on.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents Required
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>ID proof: Aadhaar, PAN or Voter ID.</li>
              <li>Education certificate: highest qualification (10th, 12th, graduate or post-graduate).</li>
              <li>Bank details: cancelled cheque or passbook copy.</li>
              <li>Property documents: ownership proof or rental agreement for the proposed store.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Get Started in Hapur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Step 1: Submit an inquiry. Fill out the form at thebuyzaarmart.com or call the team.</li>
              <li>Step 2: Documentation. Complete KYC, agreement review and signing with full compliance support.</li>
              <li>Step 3: Store launch. Open your mart with launch strategy, local marketing and backend support.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              See Buyzaar Mart in Action
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Running stores: Shyam Nagar (Kanpur), Sector 44 Chalera (Noida), Gangoh near Bus Stand, Behat (Saharanpur) and Bahadrabad (Haridwar).</li>
              <li>Upcoming store: LV Plaza, Laxmi Villas, Rajnagar Extension, Ghaziabad, close to the Hapur belt.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What does FOCM mean?
                </h3>
                <p className="mt-2">
                  Franchise Owned Company Managed: you own the mart, and the company manages systems and standards.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the total investment?
                </h3>
                <p className="mt-2">
                  Total investment starts from ₹15 Lakh, depending on mart format and area.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How long is the franchise term?
                </h3>
                <p className="mt-2">
                  Five years, with renewal procedures at the end.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Who pays rent and salaries?
                </h3>
                <p className="mt-2">
                  The franchisee bears rent, staff salaries and variable costs like electricity.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What support does the company give?
                </h3>
                <p className="mt-2">
                  Site survey, setup, branding, POS, training, marketing, audits and supply chain guidance.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What margin is highlighted?
                </h3>
                <p className="mt-2">
                  An effective gross margin of 18–20%, though results vary.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How do I apply?
                </h3>
                <p className="mt-2">
                  Submit the inquiry form or call +91 9217991727.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your FOCM Mart Franchise Journey in Hapur
              </h2>

              <p className="mb-4 text-gray-800">
                Hapur offers a strong opportunity for a branded neighbourhood mart built on daily household demand.
              </p>

              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart franchise network and own a professionally managed mart in your city.
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
            city="hapur"
            currentSlug="/hapur/focm-mart-franchise-hapur"
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