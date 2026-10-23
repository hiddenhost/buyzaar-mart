import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FOCO Mart Franchise in Hapur | The Buyzaar Mart",
  description:
    "Open a FOCO mart franchise in Hapur with The Buyzaar Mart. You provide capital and space; the company operates the mart and shares revenue. Apply today.",
  url: "https://www.thebuyzaarmart.com/hapur/foco-mart-franchise-hapur",
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
  priceRange: "₹₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart FOCO Mart Franchise in Hapur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "FOCO Mart Franchise",
        description:
          "A company-operated mart model starting from 2,000 sq ft, with the investor providing capital and space and typically earning approximately 10% revenue sharing on monthly sales.",
      },
      {
        "@type": "Offer",
        name: "10-Year FOCO Agreement",
        description:
          "A long-term FOCO arrangement typically structured for 10 years, with the company managing staffing, operations, marketing, merchandising and supply chain.",
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
        text: "Franchise Owned, Company Operated: you provide capital and space, and the company runs the mart.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum mart size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCO marts start from 2,000 sq ft.",
      },
    },
    {
      "@type": "Question",
      name: "Who pays staff salaries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The company manages staff salaries, electricity and daily operating costs.",
      },
    },
    {
      "@type": "Question",
      name: "How do I earn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically about 10% revenue sharing on total monthly sales.",
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
      name: "What is the total investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on mart size; contact the team for one clear total for your property.",
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
              FOCO Mart Franchise in Hapur: Provide the Space, We Operate the Mart
            </h1>

            <ul className="list-disc space-y-2 pl-6">
              <li>The Buyzaar Mart, &quot;Your Friendly Neighborhood Store&quot;, offers a FOCO (Franchise Owned, Company Operated) mart franchise in Hapur for investors who want a supermarket business without running it day to day.</li>
              <li>The mart is yours; the operations are ours. You provide the capital and the retail premises, while The Buyzaar Mart runs the store, manages the team and handles the backend.</li>
              <li>Hapur is a strong fit for an organised mart. Its position on the Delhi–Meerut corridor in the NCR belt means shoppers are already moving toward branded, fixed-price, well-stocked supermarkets.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Understanding the FOCO Mart Model
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>FOCO means Franchise Owned, Company Operated. It is a modern retail structure designed for investors who want to enter organised retail without the complexity of managing a store every day.</li>
              <li>The investor&apos;s main role is capital and space. The investor provides the required capital investment and rent (if any), while the company takes complete ownership of store operations.</li>
              <li>It delivers a professionally managed retail experience. Customers see a standardised, well-run Buyzaar Mart, while the investor benefits from a structured business with less operational stress.</li>
              <li>It suits stable, relatively passive income goals. The model is meant for people who want returns linked to store sales without being present on the shop floor.</li>
              <li>It is built for the long term. The agreement is typically structured for 10 years, giving both the investor and the company continuity and stability.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why a Mart in Hapur Makes Business Sense
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Grocery demand never pauses. Staples, oil, pulses, spices, snacks, dairy, personal care and cleaning products are bought every week, which supports steady footfall for a supermarket.</li>
              <li>Hapur is a connected trading town. Being close to Ghaziabad and Meerut, local shoppers know organised retail and increasingly expect clean stores and consistent prices.</li>
              <li>New neighbourhoods need a reliable store. Expanding colonies often lack a well-stocked, branded supermarket nearby, which creates an opening for a professionally operated mart.</li>
              <li>Neighbouring areas add customers. Shoppers from Pilkhuwa, Garhmukteshwar and Dhaulana often travel to Hapur for shopping, so a main-road mart can draw wider footfall.</li>
              <li>Local competition is largely unorganised. Many shops lack POS billing, uniform pricing and planned stock, so a structured mart has room to stand out.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Invest With The Buyzaar Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Trust and transparency. The brand stands for attractive pricing, assured quality and constantly ongoing support, which builds confidence with both customers and investors.</li>
              <li>Simplicity in retail. The company removes the complexity of handling, purchasing, inventory and supply chain, so the investor is not pulled into daily operational problems.</li>
              <li>A reliable partner. Timely supply, transparent processes and a trustworthy operating partner form the backbone of the Buyzaar promise.</li>
              <li>Proven, tech-enabled systems. The Buyzaar Mart runs tried-and-tested systems across stores in Uttar Pradesh, NCR and Uttarakhand.</li>
              <li>Compliance-ready credentials. The business is FSSAI licensed, GST registered and MSME certified, supporting trust with customers, suppliers and partners.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Mart Size Requirement
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Minimum mart size starts from 2,000 sq ft. This supports a full-scale supermarket format with a comprehensive range of categories and a comfortable shopping experience.</li>
              <li>Larger marts can raise revenue potential. More space allows wider assortment, bigger baskets and stronger destination appeal.</li>
              <li>Site quality matters. Road access, visibility, parking and nearby households all influence performance, so the proposed Hapur site is reviewed for suitability.</li>
              <li>Own or rent the property. If you own a suitable commercial space in Hapur, the model can convert it into a productive long-term retail asset.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment for a FOCO Mart in Hapur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Investment is shared as one total figure. The exact total depends on the size of your mart, so the franchise team confirms it after reviewing your Hapur property.</li>
              <li>The model covers a fully equipped launch. Store setup, branding, systems and opening stock are planned so the mart opens ready to serve customers.</li>
              <li>Use the brochure and calculator. You can download the brochure from the Franchise page and discuss your budget before deciding.</li>
              <li>Request a single total quote. Call or submit an inquiry with your property size and location to receive one clear total for your proposed mart.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Handle as the Investor
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Provide the retail space. You arrange the premises that meet the minimum size requirement and keep them available for the long-term agreement.</li>
              <li>Bear the store rent. Rent remains the investor&apos;s responsibility, which secures the property for the mart&apos;s operations.</li>
              <li>Provide the capital investment. The investor funds the mart setup so the store can open as a full-scale supermarket.</li>
              <li>Stay informed, not involved daily. You do not need to manage staff, suppliers or billing, but you can follow the store&apos;s progress through the partnership.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What The Buyzaar Mart Handles as Operator
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Electricity expenses. The company manages these running costs, easing the monthly burden on the investor.</li>
              <li>Staff recruitment and salaries. The company hires, trains and pays the team that runs the mart.</li>
              <li>Daily operational costs. Routine operating expenses are managed by the company as part of full operational ownership.</li>
              <li>Marketing and promotions. Local campaigns and promotional activity are executed by the company to drive footfall.</li>
              <li>Display and layout. Product placement and store layout are managed to support sales and customer comfort.</li>
              <li>Backend operations. Inventory control, procurement, supply chain logistics and performance optimisation all sit with the company.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How the Investor Earns: Revenue Sharing
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>About 10% revenue share. The investor typically earns approximately 10% of the total monthly sales generated by the store.</li>
              <li>A simple example from the model. If monthly sales reach ₹30,00,000, the revenue share would be around ₹3,00,000, shown only to explain how the structure works.</li>
              <li>Aligned interests. Higher sales mean higher earnings for both the company and the investor, which motivates the operator to grow the mart.</li>
              <li>Returns vary by store. Actual earnings depend on location, footfall and market conditions, so each mart performs differently.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Product Categories Inside the Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Grocery and staples that anchor daily household shopping.</li>
              <li>Bakery and dairy products that encourage frequent visits.</li>
              <li>Fresh fruits and vegetables that add everyday footfall and a complete shopping experience.</li>
              <li>Personal care, beverages and snacks that build basket size and margins.</li>
              <li>Frozen foods, stationery and toys that widen the range for families.</li>
              <li>Devotional items, pet care and household essentials that make the mart a true one-stop destination.</li>
              <li>Trusted brand partners such as HUL, ITC, Nestle, Parle, Britannia, Dabur, Tata Consumer, Marico, Patanjali and Godrej give shoppers familiar products.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Technology and Store Standards
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>POS-enabled billing. Modern point-of-sale technology speeds checkout and tracks sales and inventory accurately.</li>
              <li>Customer Relationship Management (CRM). Purchase tracking supports loyalty, offers and repeat visits.</li>
              <li>Organised stock planning. The &quot;From Chaos to Smart Retail&quot; approach predicts demand and keeps shelves organised, reducing dead stock.</li>
              <li>Uniform branding. Consistent store design and branding build a recognisable, professional identity in Hapur.</li>
              <li>Localised product flexibility. The range can be adapted to local preferences, which matters for regional tastes and festivals.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Hassle-Free Inventory Assurance
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Expired and damaged goods are taken back. The Buyzaar guarantee reduces worry about unsold, expired or damaged stock.</li>
              <li>Better stock health. Company-managed procurement and replenishment help keep shelves fresh and well stocked.</li>
              <li>Stronger customer trust. Reliable, quality products encourage shoppers to return week after week.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Is a FOCO Mart Right for You?
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Choose FOCO if you want a hands-off model. It fits investors who prefer the company to operate the mart while they earn a revenue share.</li>
              <li>Choose FOCM if you want more involvement. In the FOCM model you own and are involved in the outlet while the company manages systems and standards.</li>
              <li>Check your property first. FOCO needs at least 2,000 sq ft, so confirm your space meets the requirement.</li>
              <li>Speak to the team. They can compare both models for your Hapur site and recommend the better fit.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Should Consider This Franchise?
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Property owners in Hapur with suitable commercial space who want a professionally run retail business on it.</li>
              <li>Working professionals and business owners who want a retail investment without leaving their current work.</li>
              <li>NRIs and out-of-town investors who want a structured, company-operated asset in their home region.</li>
              <li>Families seeking a long-term asset, supported by a 10-year agreement and managed operations.</li>
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
              How to Begin in Hapur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Step 1: Submit an inquiry. Fill out the form at thebuyzaarmart.com or call the team.</li>
              <li>Step 2: Documentation. Complete KYC, agreement review and signing with full compliance support.</li>
              <li>Step 3: Store launch. The mart opens with launch strategy, local marketing and backend operations in place.</li>
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
                  What is a FOCO mart franchise?
                </h3>
                <p className="mt-2">
                  Franchise Owned, Company Operated: you provide capital and space, and the company runs the mart.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the minimum mart size?
                </h3>
                <p className="mt-2">
                  FOCO marts start from 2,000 sq ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Who pays staff salaries?
                </h3>
                <p className="mt-2">
                  The company manages staff salaries, electricity and daily operating costs.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How do I earn?
                </h3>
                <p className="mt-2">
                  Typically about 10% revenue sharing on total monthly sales.
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
                  What is the total investment?
                </h3>
                <p className="mt-2">
                  It depends on mart size; contact the team for one clear total for your property.
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
                Start Your FOCO Mart Franchise Journey in Hapur
              </h2>

              <p className="mb-4 text-gray-800">
                Hapur offers a strong opportunity for a company-operated mart built on daily household demand.
              </p>

              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart franchise network and turn your commercial space into a professionally managed retail asset.
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
            currentSlug="/hapur/foco-mart-franchise-hapur"
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