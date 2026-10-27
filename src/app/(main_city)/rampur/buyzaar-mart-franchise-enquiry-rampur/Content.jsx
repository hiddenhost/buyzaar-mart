import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Franchise Enquiry in Rampur | Send Enquiry",
  description:
    "Send your Buyzaar Mart franchise enquiry from Rampur. Know the steps, questions to ask and support. Total investment from ₹15 Lakh. Response within 24 hours.",
  url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-enquiry-rampur",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-43, Third Floor, Sector-6",
    addressLocality: "Noida",
    postalCode: "201301",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Rampur",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Franchise Formats in Rampur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Compact supermarket franchise format for residential lanes and compact commercial spaces in Rampur, covering 600–1000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Mid-size supermarket franchise format for main roads and larger colony markets in Rampur, covering 1000–3000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Large destination supermarket franchise format for busy, high-visibility locations in Rampur, covering 3000–8000 sq ft.",
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
      name: "How do I send a franchise enquiry for Rampur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill out the inquiry form at thebuyzaarmart.com, or call +91 9217991727.",
      },
    },
    {
      "@type": "Question",
      name: "How soon will the team respond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The website states a response within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Total investment starts from ₹15 Lakh, depending on store format and area.",
      },
    },
    {
      "@type": "Question",
      name: "Which store sizes are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mini Mart, Super Mart and Hyper Mart, from 600 to 8,000 sq ft.",
      },
    },
    {
      "@type": "Question",
      name: "Which models can I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM (company managed) and FOCO (company operated).",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Training, setup and ongoing support are part of the model.",
      },
    },
    {
      "@type": "Question",
      name: "Does an enquiry mean I must apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. An enquiry is only the first step to learn about the franchise.",
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
              Buyzaar Mart Franchise Enquiry in Rampur: Ask the Right Questions Before You Start
            </h1>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart, “Your Friendly Neighborhood Store”, welcomes franchise enquiries from Rampur for people who want to open a branded supermarket that serves local families with groceries, FMCG and household essentials.
              </li>
              <li>
                An enquiry is the first and simplest step. You share a few basic details, the franchise team responds, and you learn about the model, the store formats and the support before you take any decision.
              </li>
              <li>
                Total investment starts from ₹15 Lakh, and the exact total for your Rampur store is confirmed by the franchise team once they understand your chosen format and property.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Make a Franchise Enquiry in Rampur?
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Daily-need demand is steady. Families in Rampur buy staples, snacks, beverages, personal care and cleaning products every week, which gives a grocery-led store repeat footfall throughout the year.
              </li>
              <li>
                Organised retail still has room to grow. Many neighbourhood shops lack POS billing, uniform pricing, loyalty tracking and planned stock, so a branded and structured store can stand out.
              </li>
              <li>
                An enquiry costs you nothing but a few minutes. You can learn about the model, ask questions and compare it with other options before you commit to anything.
              </li>
              <li>
                You get answers from the franchise team directly. Instead of relying on guesswork or hearsay, you hear about the model, support and process from the people who run it.
              </li>
              <li>
                Early enquiry helps you plan better. Knowing the formats, the models and the documents in advance lets you check your property and budget with confidence.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Rampur Is a Good Place for a Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Rampur is a busy district town. Its position in western Uttar Pradesh, close to Moradabad and Bareilly, gives it steady local trade and regular movement of shoppers.
              </li>
              <li>
                Residential areas keep expanding. Growing colonies need convenient stores close to home, and many still lack a trusted, well-stocked, branded supermarket within walking distance.
              </li>
              <li>
                Surrounding areas add customers. Shoppers from places such as Bilaspur, Milak, Swar and Shahabad often come into Rampur for shopping, which helps a well-placed store draw wider footfall.
              </li>
              <li>
                Families value one-stop shopping. A single store covering weekly needs saves time and encourages larger baskets and more frequent visits.
              </li>
              <li>
                Shoppers are choosing organised stores. Clean, fixed-price stores with reliable availability are gaining preference over crowded, unplanned shops.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Send Your Buyzaar Mart Franchise Enquiry
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Use the inquiry form on the website. Visit thebuyzaarmart.com and fill out the “I want to become an entrepreneur” form to begin.
              </li>
              <li>
                Share your basic details. The form asks for your full name, email address, phone number, state and city, so keep these ready.
              </li>
              <li>
                Add a short message if you wish. The message field is optional, but it is a good place to mention your preferred store format, franchise model or property in Rampur.
              </li>
              <li>
                Call or email the team directly. You can reach the team on +91 9217991727 or at{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>{" "}
                if you prefer to speak or write.
              </li>
              <li>
                Expect a response within 24 hours. The website states that the team responds within 24 hours, so you will not be left waiting for long.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Information to Keep Ready Before You Enquire
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Your property details. Note whether you own or plan to rent the space, and approximate its size and location in Rampur.
              </li>
              <li>
                Your preferred store format. Think about whether a Mini Mart, Super Mart or Hyper Mart suits your space and budget.
              </li>
              <li>
                Your preferred franchise model. Decide whether you lean towards running the store yourself under FOCM or investing in a company-operated store under FOCO.
              </li>
              <li>
                Your budget range. Having a rough idea of the capital you can commit helps the team guide you to the right format.
              </li>
              <li>
                Your timeline. Mention when you hope to open, so the team can explain what is realistic.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Questions to Ask the Franchise Team
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                What is the total investment for my property? Ask the team to confirm one clear total based on your chosen format and area.
              </li>
              <li>
                Which model fits me better, FOCM or FOCO? Describe how much time you can give the business, and ask for a recommendation.
              </li>
              <li>
                What does the company handle, and what do I handle? Be clear about responsibilities for rent, salaries, electricity, setup and daily operations.
              </li>
              <li>
                What support will I receive? Ask about site review, setup, training, marketing, stock guidance and ongoing assistance.
              </li>
              <li>
                What happens to expired or damaged stock? The brand guarantees it takes back expired and damaged goods, so ask how the process works.
              </li>
              <li>
                Can I visit a running store? Seeing a live outlet helps you understand layout, range and customer flow.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment: What to Know Before You Enquire
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Total investment starts from ₹15 Lakh, which makes The Buyzaar Mart a low-investment supermarket franchise compared with many larger retail formats that demand far higher capital.
              </li>
              <li>
                The final total depends on your store format and area. A Mini Mart, Super Mart and Hyper Mart will each carry a different total, and the team confirms the figure for your Rampur property.
              </li>
              <li>
                Use the website investment calculator. You can select a store type and an area between 600 and 8,000 sq ft to see an estimate even before you enquire.
              </li>
              <li>
                Download the brochure. The Franchise page offers a brochure with details of the model, which you can read before or after you send your enquiry.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats to Discuss in Your Enquiry
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Mini Mart (600–1000 sq ft).</span> Ideal for residential lanes and compact commercial spaces, this format focuses on personal care, beverages, grocery and staples, homecare and hygiene, stationery, and snacks and biscuits.
              </li>
              <li>
                <span className="font-semibold">Super Mart (1000–3000 sq ft).</span> Suited to main roads and larger colony markets, this format adds dairy items and fruits and vegetables, which bring daily footfall and a more complete shopping experience.
              </li>
              <li>
                <span className="font-semibold">Hyper Mart (3000–8000 sq ft).</span> Built for busy, high-visibility locations, this format also includes gifts and toys and frozen ready-to-eat items, creating a destination store with larger baskets.
              </li>
              <li>
                Let your property guide the choice. The size of your space, its location, parking and nearby households should drive the format, and the team can advise you.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Models to Discuss in Your Enquiry
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">FOCM (Franchise Owned Company Managed).</span> You own the outlet and invest in the setup, while The Buyzaar Mart manages branding, technology, training and performance systems to keep every store consistent.
              </li>
              <li>
                <span className="font-semibold">FOCO (Franchise Owned, Company Operated).</span> You provide the capital and the space, while the company operates the store, manages staff and shares revenue with you, with a minimum store size from 2,000 sq ft.
              </li>
              <li>
                <span className="font-semibold">FOCM suits hands-on owners.</span> It works well for entrepreneurs who want to run their store daily while relying on a proven system.
              </li>
              <li>
                <span className="font-semibold">FOCO suits hands-off investors.</span> It is designed for people who want a professionally operated retail asset without managing daily store activity.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Happens After You Enquire
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The team contacts you. A franchise representative responds to your enquiry and begins with your property, location and preferred format.
              </li>
              <li>
                You receive guidance on the model. The team explains the franchise models, the store formats and the support that comes with the franchise.
              </li>
              <li>
                You can review the brochure. The brochure explains the model in detail, so you can read at your own pace and note any questions.
              </li>
              <li>
                You decide whether to move ahead. If you wish to proceed, the next step is the franchise application and documentation.
              </li>
              <li>
                There is no pressure to rush. Take the time you need to compare, ask questions and speak with your family or advisers.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents You Will Need When You Move to Application
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">ID proof:</span> Aadhaar, PAN or Voter ID.
              </li>
              <li>
                <span className="font-semibold">Education certificate:</span> your highest qualification certificate, such as 10th, 12th, graduate or post-graduate.
              </li>
              <li>
                <span className="font-semibold">Bank details:</span> a cancelled cheque or a copy of the passbook.
              </li>
              <li>
                <span className="font-semibold">Property documents:</span> ownership proof or a rental agreement for the proposed store location.
              </li>
              <li>
                <span className="font-semibold">Address proof and signed declaration:</span> a copy of your address proof, and a signed declaration in PDF format as part of the application.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Trust and transparency.</span> The brand promises attractive pricing, assured quality and constantly ongoing support, which helps a new store win customer confidence quickly.
              </li>
              <li>
                <span className="font-semibold">Retail without the pain.</span> The company takes the complexity out of handling, purchasing, inventory and supply chain, so owners can focus on customers and growth.
              </li>
              <li>
                <span className="font-semibold">Smart, tech-enabled operations.</span> Tried-and-tested systems run across stores in Uttar Pradesh, NCR and Uttarakhand, so new owners follow a model that already works in live outlets.
              </li>
              <li>
                <span className="font-semibold">An end-to-end ecosystem.</span> From operations to marketing, the company supports owners across the full franchise journey.
              </li>
              <li>
                <span className="font-semibold">Compliance-ready credentials.</span> The business is FSSAI licensed, GST registered and MSME certified, which supports trust among customers, suppliers and banking partners.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Support You Receive as a Franchise Partner
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Location survey and approval.</span> The company reviews your proposed Rampur site, so the store begins in a suitable location.
              </li>
              <li>
                <span className="font-semibold">Setup and launch.</span> Store layout, interior design and branding are handled by the company to maintain a uniform, professional look.
              </li>
              <li>
                <span className="font-semibold">Training for owner and staff.</span> Programs cover store operations, POS systems and customer engagement before the doors open.
              </li>
              <li>
                <span className="font-semibold">Local and digital marketing.</span> Campaigns, brand materials and launch promotions help a new Rampur store build awareness quickly.
              </li>
              <li>
                <span className="font-semibold">Opening stock and replenishment guidance.</span> Recommendations, procurement systems and logistics coordination help keep shelves right and reduce stock-outs.
              </li>
              <li>
                <span className="font-semibold">Audits and performance dashboards.</span> Regular reviews and key performance indicators help owners monitor sales, inventory and customer satisfaction.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Products, Brands and Margins
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">A wide daily-need range.</span> Grocery and staples, personal care, homecare, beverages, snacks and biscuits form the core of the store, with dairy, fruits and vegetables in larger formats.
              </li>
              <li>
                <span className="font-semibold">Trusted brand partners.</span> Names such as HUL, ITC, Nestle, Parle, Britannia, Dabur, Tata Consumer, Marico, Patanjali and Godrej give shoppers familiar products.
              </li>
              <li>
                <span className="font-semibold">Effective gross margin of 18–20%.</span> The Buyzaar Mart highlights this margin as part of its franchise model.
              </li>
              <li>
                <span className="font-semibold">Gross margin is not net profit.</span> Rent, salaries, electricity and other running costs are paid from the margin, so plan the complete budget carefully.
              </li>
              <li>
                <span className="font-semibold">Results vary by store.</span> Location, service quality, local marketing and daily discipline all affect performance.
              </li>
            </ul>

            
            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  1. How do I send a franchise enquiry for Rampur?
                </h3>
                <p className="mt-2">
                  Fill out the inquiry form at thebuyzaarmart.com, or call +91 9217991727.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  2. How soon will the team respond?
                </h3>
                <p className="mt-2">
                  The website states a response within 24 hours.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  3. What is the total investment?
                </h3>
                <p className="mt-2">
                  Total investment starts from ₹15 Lakh, depending on store format and area.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  4. Which store sizes are available?
                </h3>
                <p className="mt-2">
                  Mini Mart, Super Mart and Hyper Mart, from 600 to 8,000 sq ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  5. Which models can I choose?
                </h3>
                <p className="mt-2">
                  FOCM (company managed) and FOCO (company operated).
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  6. Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No. Training, setup and ongoing support are part of the model.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  7. Does an enquiry mean I must apply?
                </h3>
                <p className="mt-2">
                  No. An enquiry is only the first step to learn about the franchise.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Send Your Buyzaar Mart Franchise Enquiry from Rampur
              </h2>

              <p className="mb-4 text-gray-800">
                Rampur offers a strong opportunity to open a structured, branded supermarket franchise.
              </p>

              <p className="mb-4 text-gray-800">
                Share your details today and get guidance on the right format, model and next steps.
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
            city="rampur"
            currentSlug="/rampur/buyzaar-mart-franchise-enquiry-rampur"
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