import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Franchise Contact Rampur | Apply Now",
  description:
    "Contact the Buyzaar Mart franchise team for Rampur. Call +91 9217991727, email or apply online. Total investment from ₹15 Lakh with full support.",
  url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-contact-rampur",
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
          "Compact neighbourhood supermarket franchise format for Rampur, covering 600–1000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Full-service supermarket franchise format for main roads and larger residential pockets in Rampur, covering 1000–3000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Destination supermarket franchise format for large, high-visibility commercial spaces in Rampur, covering 3000–8000 sq ft.",
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
      name: "How can I contact Buyzaar Mart for a franchise in Rampur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 9217991727, email info@thebuyzaarmart.com or submit the online inquiry form on thebuyzaarmart.com, mentioning Uttar Pradesh and Rampur.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total investment for a Buyzaar Mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The total investment starts from ₹15 Lakh and varies with store size, so use the website calculator or ask the team for an exact figure.",
      },
    },
    {
      "@type": "Question",
      name: "Which store size can I open in Rampur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can choose a Mini Mart of 600–1000 sq ft, a Super Mart of 1000–3000 sq ft or a Hyper Mart of 3000–8000 sq ft, depending on your space.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No prior retail experience is mentioned as a requirement, because the company supports operations, supply chain, training and systems.",
      },
    },
    {
      "@type": "Question",
      name: "What are the business hours of the franchise team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The team is available Monday to Saturday, 9:00 AM to 7:00 PM, and the office is closed on Sundays.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to expired or damaged stock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyzaar Mart takes back expired and damaged goods under its inventory assurance policy.",
      },
    },
    {
      "@type": "Question",
      name: "Is Buyzaar Mart FSSAI licensed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the website lists The Buyzaar Mart as FSSAI licensed, GST registered and MSME certified.",
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
              Buyzaar Mart Franchise Contact Rampur – Apply for Your Grocery &amp; Supermarket Franchise
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Buyzaar Mart Franchise Contact in Rampur
            </h2>

            <h3 className="font-medium text-gray-900">
              Who You Are Contacting
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart is a neighbourhood supermarket franchise brand built around the promise “अपना बाजार – बचत का साथ, Quality की बात,” and the franchise team is the direct point of contact for anyone in Rampur who wants to own a store.
              </li>
              <li>
                Every inquiry from Rampur goes to the same central team, so you get one consistent set of answers on models, store sizes, total investment, documentation and launch support instead of scattered local opinions.
              </li>
              <li>
                The brand is FSSAI licensed, GST registered and MSME certified, which means you are speaking with a compliant business and not an unregistered middleman.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Why Contact Before You Decide
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A short conversation helps you understand whether your shop, plot or rented space in Rampur suits a Mini Mart, Super Mart or Hyper Mart format before you spend money on interiors.
              </li>
              <li>
                The team can explain how the FOCM model works, who handles supply chain and software, and what stays under your control, so there are no surprises after signing.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Contact Buyzaar Mart Franchise Team
            </h2>

            <h3 className="font-medium text-gray-900">
              Phone and Email
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Call{" "}
                <a
                  href="tel:+919217991727"
                  className="font-semibold text-green-600 hover:underline"
                >
                  +91 9217991727
                </a>{" "}
                to speak with the franchise team about opening a store in Rampur, checking your area requirement and understanding the application steps in plain language.
              </li>
              <li>
                Write to{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>{" "}
                with your name, Rampur locality, available space in square feet and whether the property is owned or rented, so the reply can be specific to your case.
              </li>
              <li>
                The website states that email inquiries receive a response within 24 hours, so you can send details in the evening and expect a reply on the next working day.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Office Address
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart head office is located at D-43, Third Floor, Sector-6, Noida-201301, Uttar Pradesh, from where franchise onboarding, documentation and support are coordinated.
              </li>
              <li>
                Rampur applicants can complete most steps by phone, email and the online form, which saves a long trip before you are sure about the opportunity.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Business Hours
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The team is available Monday to Saturday from 9:00 AM to 7:00 PM, and the office is closed on Sundays, so plan your calls on weekdays for the quickest response.
              </li>
              <li>
                Keep your property details, preferred store size and budget range ready before calling, which makes the first conversation shorter and far more useful.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Online Inquiry Form
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Open thebuyzaarmart.com, go to the Contact or Franchise page and fill the “I want to become an entrepreneur” form with your name, email, phone number, state and city.
              </li>
              <li>
                Select Uttar Pradesh as the state and write Rampur as the city, and add your preferred location or store size in the optional message box.
              </li>
              <li>
                After submission, the team reaches out to explain the next steps, share the brochure and guide you through the franchise application.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Rampur Is a Strong Market for a Supermarket Franchise
            </h2>

            <h3 className="font-medium text-gray-900">
              Steady Daily Demand
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Rampur is a busy trading city in western Uttar Pradesh where families buy staples, snacks, beverages, personal care and cleaning products every week, which creates repeat footfall for a well-stocked store.
              </li>
              <li>
                Grocery is a need-based category, so sales do not depend on one season alone, and festival periods such as Navratri, Eid, Diwali and the wedding season add strong peaks on top of the daily base.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Shift from Loose Shopping to Branded Retail
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Many households in and around Rampur still depend on unorganised kirana shops, but shoppers increasingly want printed prices, clean aisles, fair billing and the freedom to choose from a wide branded range.
              </li>
              <li>
                A Buyzaar Mart store brings that organised experience to the neighbourhood, with uniform branding, POS-enabled billing and a curated range of daily-need items under one roof.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Catchment Areas Around the City
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Localities across Rampur city, along with nearby towns and tehsil areas such as Shahabad, Bilaspur, Milak and Suar, can support neighbourhood retail when the store is placed on a busy road or near a residential cluster.
              </li>
              <li>
                Families from surrounding villages visit the city for weekly purchases, which widens your customer base beyond the immediate colony.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Buyzaar Mart Franchise Models and Store Formats
            </h2>

            <h3 className="font-medium text-gray-900">
              Franchise Model
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Buyzaar Mart works on the FOCM model, meaning the franchise is owned by you while the company manages the heavy operational parts such as inventory planning, supply chain and systems.
              </li>
              <li>
                This structure suits first-time business owners in Rampur who want to run a retail store without building purchasing and vendor networks from zero.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600–1000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ideal for a compact neighbourhood location with a focused range covering personal care, beverages, grocery and staples, homecare and hygiene, stationery, snacks and biscuits.
              </li>
              <li>
                A good starting point for entrepreneurs who have a smaller shop and want a manageable first store.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart (1000–3000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Adds dairy items and fruits and vegetables to the Mini Mart range, giving shoppers a more complete weekly shopping basket in one visit.
              </li>
              <li>
                Works well on main roads and in larger residential pockets where families prefer a full-service supermarket.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3000–8000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The largest format, which also adds gifts and toys and frozen ready-to-eat products to the Super Mart range for a destination shopping experience.
              </li>
              <li>
                Suitable for investors with a large commercial space in a high-visibility Rampur location.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment for a Buyzaar Mart Franchise
            </h2>

            <h3 className="font-medium text-gray-900">
              What the Total Includes
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart franchise starts from a total investment of ₹15 Lakh, and the final figure depends on the store size you choose and the area of your space.
              </li>
              <li>
                The total covers stock, interior, software fee, franchise fee including 18% GST and security deposit, so you see the complete commitment in one number.
              </li>
              <li>
                The website offers an investment calculator on the Franchise page where you select the store type and area in square feet to view your own estimate.
              </li>
              <li>
                Ask the franchise team to confirm the exact total for your Rampur location before you make any commitment.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Buyzaar Mart Provides to Franchise Partners
            </h2>

            <h3 className="font-medium text-gray-900">
              Marketing and Brand Promotion
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Buyzaar Mart provides marketing support that includes TV advertisements, radio campaigns, social media marketing, promotional materials and hyper-local activities to build your brand in the Rampur area.
              </li>
              <li>
                A distinctive store launch strategy is designed to create quick local visibility, so the neighbourhood knows your store is open from the first week.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Inventory and Supply Chain
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Inventory is fully managed with regular stock replenishment, products sourced directly from manufacturers and automated supply chain management that reduces daily purchasing stress.
              </li>
              <li>
                The brand works with 50+ well-known FMCG companies, which helps you stock products customers already trust.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Technology and Customer Relationships
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A POS-enabled billing system keeps billing fast and accurate, while CRM tools help you build repeat relationships with regular customers.
              </li>
              <li>
                Uniform branding and store design give every outlet a professional identity, along with localised product flexibility that lets you adapt the range to Rampur preferences.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hassle-Free Inventory Assurance
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Buyzaar Mart takes back expired and damaged goods, so you worry less about unsold or spoiled stock and can focus on stocking and selling what customers need.
              </li>
              <li>
                This buyback policy lowers the stock risk that many new retailers fear.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Margin Potential
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand highlights an effective gross margin of 18–20%, which is a gross figure and not a promise of net profit.
              </li>
              <li>
                Actual results depend on location, footfall, rent, staff cost and how well you manage the store day to day.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents Required for the Application
            </h2>

            <h3 className="font-medium text-gray-900">
              Applicant Documents
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep a valid ID proof ready, such as an Aadhaar card, PAN card or Voter ID, as the starting identity document for your application.
              </li>
              <li>
                Add a certificate of your highest education, which can be 10th, 12th, graduation or post-graduation.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Bank and Property Documents
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Provide a cancelled cheque or a copy of your passbook so that your banking details can be verified.
              </li>
              <li>
                Share your property documents for the proposed store, which can be an ownership paper or a rental agreement for the Rampur premises.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step Process After You Contact
            </h2>

            <h3 className="font-medium text-gray-900">
              Step 1: Submit an Inquiry
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Call, email or fill the online form, and the team responds with details about the franchise, brochure and next steps.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 2: Documentation
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Complete KYC and legal documentation, review the agreement carefully and sign it with full compliance support from the team.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 3: Store Launch
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Work with the team on launch strategy, local marketing, backend operations and customer acquisition so the store opens with confidence.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing the Right Location in Rampur
            </h2>

            <h3 className="font-medium text-gray-900">
              Location Checklist
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Look for a visible shop on a busy road, near housing colonies, schools, markets or hospitals, where families pass by every day.
              </li>
              <li>
                Check parking, easy entry, the nearest competing stores and the footfall at morning and evening hours before finalising the premises.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Site Support
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The franchisee arranges and pays rent for the store location, while Buyzaar Mart offers site selection assistance and guidance.
              </li>
              <li>
                The franchise application mentions a site visitation fee that is non-refundable once the visit is made, so confirm this detail with the team in advance.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Smart Tips Before You Apply
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Compare the area of your space with the Mini, Super and Hyper Mart ranges and choose the format that matches both your space and your budget.
              </li>
              <li>
                Ask for the complete agreement terms in writing, understand reporting and compliance duties, and take time to read every declaration before signing.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Festival and Seasonal Sales Opportunities in Rampur
            </h2>

            <h3 className="font-medium text-gray-900">
              Festival Demand
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Navratri fasting items, Diwali gifting, Eid shopping and wedding-season purchases create strong demand peaks in Rampur, and a well-planned store can stock ahead of each occasion with guidance from the team.
              </li>
              <li>
                The Buyzaar Mart blog already shares practical guides such as a Navratri vrat items list for grocery stores, which franchise partners can use to plan stock, display and timing.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Everyday Footfall Builders
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Offer a wide range of branded daily-need products, keep prices clearly visible and maintain neat shelves, because families return to stores where shopping feels easy, fair and trustworthy.
              </li>
              <li>
                Use CRM tools and local marketing to turn first-time visitors into regular customers who come back every week for staples and household essentials.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. How can I contact Buyzaar Mart for a franchise in Rampur?
                </h3>
                <p className="mt-2">
                  Call +91 9217991727, email{" "}
                  <a
                    href="mailto:info@thebuyzaarmart.com"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    info@thebuyzaarmart.com
                  </a>{" "}
                  or submit the online inquiry form on thebuyzaarmart.com, mentioning Uttar Pradesh and Rampur.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. What is the total investment for a Buyzaar Mart franchise?
                </h3>
                <p className="mt-2">
                  The total investment starts from ₹15 Lakh and varies with store size, so use the website calculator or ask the team for an exact figure.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. Which store size can I open in Rampur?
                </h3>
                <p className="mt-2">
                  You can choose a Mini Mart of 600–1000 sq ft, a Super Mart of 1000–3000 sq ft or a Hyper Mart of 3000–8000 sq ft, depending on your space.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No prior retail experience is mentioned as a requirement, because the company supports operations, supply chain, training and systems.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. What are the business hours of the franchise team?
                </h3>
                <p className="mt-2">
                  The team is available Monday to Saturday, 9:00 AM to 7:00 PM, and the office is closed on Sundays.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. What happens to expired or damaged stock?
                </h3>
                <p className="mt-2">
                  Buyzaar Mart takes back expired and damaged goods under its inventory assurance policy.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. Is Buyzaar Mart FSSAI licensed?
                </h3>
                <p className="mt-2">
                  Yes, the website lists The Buyzaar Mart as FSSAI licensed, GST registered and MSME certified.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Contact Buyzaar Mart for Your Rampur Franchise
              </h2>

              <p className="mb-4 text-gray-800">
                Rampur offers a strong opportunity to open a structured, branded supermarket franchise.
              </p>

              <p className="mb-4 text-gray-800">
                Contact the team today to discuss your property, preferred format and next steps.
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
            currentSlug="/rampur/buyzaar-mart-franchise-contact-rampur"
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