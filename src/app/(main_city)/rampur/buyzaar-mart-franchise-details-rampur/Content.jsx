import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Franchise Details Rampur | Models & Cost",
  description:
    "Get Buyzaar Mart franchise details for Rampur: FOCM and FOCO models, store sizes, total investment, support and documents. Call +91 9217991727.",
  url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-details-rampur",
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
          "Compact FOCM supermarket franchise format for Rampur, covering 600–1000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Full weekly shopping FOCM supermarket franchise format for Rampur, covering 1000–3000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Destination FOCM supermarket franchise format for large premises in Rampur, covering 3000–8000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "FOCO Supermarket",
        description:
          "Company-operated supermarket format for Rampur, requiring a minimum of 2,000 sq ft.",
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
      name: "What are the franchise models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM means Franchise Owned, Company Managed, and FOCO means Franchise Owned, Company Operated.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM starts from ₹15 Lakh, and an illustrative 2,000 sq ft FOCO store is about ₹61.5 lakh, so confirm your exact figure.",
      },
    },
    {
      "@type": "Question",
      name: "Which store sizes are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mini Mart of 600–1000 sq ft, Super Mart of 1000–3000 sq ft and Hyper Mart of 3000–8000 sq ft.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, training, billing software and ongoing operational assistance are provided.",
      },
    },
    {
      "@type": "Question",
      name: "Which documents are needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ID proof, education certificate, cancelled cheque or passbook copy and ownership or rental papers.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to expired or damaged stock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyzaar Mart takes back expired and damaged goods under its inventory guarantee.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact the team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 9217991727, email info@thebuyzaarmart.com or fill the inquiry form on thebuyzaarmart.com.",
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
              Buyzaar Mart Franchise Details Rampur – Models, Formats, Investment and Support
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Buyzaar Mart Franchise Details for Rampur
            </h2>

            <h3 className="font-medium text-gray-900">
              Quick Fact Sheet
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Brand:</span> The Buyzaar Mart, a neighbourhood supermarket franchise brand with the promise “अपना बाजार – बचत का साथ, Quality की बात,” headquartered in Noida, Uttar Pradesh.
              </li>
              <li>
                <span className="font-semibold">Franchise models:</span> FOCM (Franchise Owned, Company Managed) and FOCO (Franchise Owned, Company Operated).
              </li>
              <li>
                <span className="font-semibold">Store formats under FOCM:</span> Mini Mart (600–1000 sq ft), Super Mart (1000–3000 sq ft) and Hyper Mart (3000–8000 sq ft).
              </li>
              
              <li>
                <span className="font-semibold">Margin:</span> an effective gross margin of 18–20% is mentioned for the franchise, which is not a guarantee of net profit.
              </li>
              <li>
                <span className="font-semibold">Contact:</span>{" "}
                <a
                  href="tel:+919217991727"
                  className="font-semibold text-green-600 hover:underline"
                >
                  +91 9217991727
                </a>{" "}
                and{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
                , Monday to Saturday from 9:00 AM to 7:00 PM.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              About The Buyzaar Mart
            </h2>

            <h3 className="font-medium text-gray-900">
              Brand Overview
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart describes itself as a transparent, high-quality retail brand that simplifies everyday shopping through clear communication and consistent service standards.
              </li>
              <li>
                It is positioned as one of India’s fastest-growing supermarket franchise networks, serving urban and semi-urban households.
              </li>
              <li>
                The head office is at D-43, Third Floor, Sector-6, Noida-201301.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Mission and Vision
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The mission is to empower communities through retail ownership, helping individuals build dignified livelihoods by running neighbourhood stores that offer fairness, affordability and convenience.
              </li>
              <li>
                The vision is to open multiple stores across India with a focus on transparency, accessibility and care.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Brand Pillars
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Simplicity removes complexity from handling, purchasing, inventory and supply chain, while reliability means timely supply and transparent processes.
              </li>
              <li>
                Affordability and quality come from a curated range, fair pricing and consistent availability, and ownership and legacy treat every store as a family business to build and pass on.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Credentials and Network
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand is FSSAI licensed, GST registered and MSME certified.
              </li>
              <li>
                Running stores are listed in Shyam Nagar Kanpur, Sector 44 Chalera Noida, Gangoh near Bus Stand, Behat Saharanpur and Bahadrabad Haridwar, and a new store in Ghaziabad is listed as upcoming.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Models Explained
            </h2>

            <h3 className="font-medium text-gray-900">
              FOCM: Franchise Owned, Company Managed
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The franchisee owns the outlet and funds the store setup, while the company manages operations, branding, technology, training and performance systems.
              </li>
              <li>
                The franchisee also bears fixed costs such as rent and staff salaries and variable costs such as electricity.
              </li>
              <li>
                The website lists a typical term of 5 years, with renewal based on criteria evaluated at the end of the term.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              FOCO: Franchise Owned, Company Operated
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The investor provides the capital and the retail space, while the company runs the store, including staffing, marketing, merchandising, inventory, procurement and supply chain.
              </li>
              <li>
                The FOCO format is a full supermarket of at least 2,000 sq ft, and larger formats are encouraged.
              </li>
              <li>
                About 10% of total monthly sales is shared with the investor as an example, which is performance-linked and not guaranteed, with a typical term of 10 years.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Choosing Between Models
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Pick FOCM if you want to own the store, stay involved and run a Mini, Super or Hyper Mart with company support.
              </li>
              <li>
                Pick FOCO if you have a large commercial space in Rampur and prefer the company to operate the store while you earn a sales-linked return.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats and Product Categories
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600–1000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Personal care, beverages, grocery and staples, homecare and hygiene, stationery, and snacks and biscuits.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart (1000–3000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Everything in the Mini Mart range, along with dairy items and fruits and vegetables.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3000–8000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Everything in the Super Mart range, along with gifts and toys and frozen ready-to-eat items.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              FOCO Supermarket Range
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Grocery and staples, bakery and dairy, personal care, beverages, fresh produce, frozen foods, stationery, toys, snacks, devotional items, pet care and household essentials.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Space Requirement
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The FAQ page mentions a minimum of 600 sq ft carpet area for the franchise, so measure your Rampur space before applying.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment Details
            </h2>

            <h3 className="font-medium text-gray-900">
              FOCM Investment
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart FOCM franchise starts from a total investment of ₹15 Lakh, and the FAQ page mentions roughly ₹15–20 lakh for a Mini Mart of 600–1000 sq ft.
              </li>
              <li>
                The final figure depends on store size, layout, location and the work required at the premises.
              </li>
              <li>
                The Franchise page has an investment calculator where you choose a store type and enter the area in square feet to see an estimate.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              FOCO Investment
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                For an illustrative 2,000 sq ft FOCO supermarket, the website points to a total of about ₹61.5 lakh, calculated for one POS login and excluding applicable GST and rent.
              </li>
              <li>
                This is approximate, and the actual total depends on store size, the number of POS logins, GST and rent.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Before You Commit
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ask the franchise team to confirm the exact total for your Rampur space in writing.
              </li>
              <li>
                Keep working capital aside for early months, since a new store takes time to build steady footfall.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What the Company Provides
            </h2>

            <h3 className="font-medium text-gray-900">
              Pre-Launch Support
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Location survey and approval, franchise agreement execution, legal onboarding, store layout, interior design, branding and launch support are part of the company’s role under FOCM.
              </li>
              <li>
                You can propose your own site, and the team surveys it for population, purchasing capacity and local demand before approval.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Inventory and Supply Chain
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Opening stock recommendations, replenishment guidelines, procurement support, pricing and product-mix strategy and logistics coordination help keep shelves full.
              </li>
              <li>
                Products are sourced directly from manufacturers, and the brand works with 50+ FMCG partners such as Dabur, HUL, ITC, Nestle, Parle, Tata Consumer and Patanjali.
              </li>
              <li>
                Buyzaar Mart takes back expired and damaged goods, which reduces dead stock risk.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Technology and Systems
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A POS-enabled billing system tracks billing and sales, while CRM tools help build lasting customer relationships.
              </li>
              <li>
                Standard operating procedures guide daily operations, inventory control and customer service.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Training and Performance
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Initial training for the franchisee and staff is followed by ongoing support, audits and performance reviews.
              </li>
              <li>
                The FAQ page says no retail experience is needed, because training, billing software and operational assistance are provided.
              </li>
              <li>
                KPI dashboards, quality audits and corrective-action plans help keep stores consistent.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Marketing
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Local marketing, digital marketing and brand materials are provided, along with TV advertisements, radio campaigns and social media marketing.
              </li>
              <li>
                Hyper-local campaigns are tailored for every franchise location to build quick local visibility.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Responsibilities of the Franchisee
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Provide the initial capital and secure the store premises, since the franchisee pays rent for the location under FOCM.
              </li>
              <li>
                Follow operational rules, training mandates and monthly reporting procedures communicated by the company.
              </li>
              <li>
                Maintain transparent transactions and good customer experience, because they affect the continuity of the franchise.
              </li>
              <li>
                Submit only genuine documents, since false declarations or forged papers can lead to disqualification or termination of franchise rights.
              </li>
              <li>
                Pay the site visitation fee mentioned in the declaration, which is non-refundable once the visit is made.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Application Process and Documents
            </h2>

            <h3 className="font-medium text-gray-900">
              Joining Steps
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Submit an inquiry and attend a call or meeting with the team.
              </li>
              <li>
                Complete the application form, and the proposed site is surveyed, with work beginning only after approval.
              </li>
              <li>
                Sign the franchise agreement and make the payment.
              </li>
              <li>
                Store setup is completed and the franchise kit is handed over for launch.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              How to Submit an Inquiry from Rampur
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Visit thebuyzaarmart.com and fill the “I want to become an entrepreneur” form with your name, email, phone number, state and city.
              </li>
              <li>
                Select Uttar Pradesh as the state and write Rampur as the city, then add your store size or model interest in the message box.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Documents Required
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                ID proof such as Aadhaar, PAN or Voter ID, and a certificate of your highest education from 10th to post-graduation.
              </li>
              <li>
                A cancelled cheque or passbook copy, and ownership or rental agreement for the proposed store.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Should Consider This Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Aspiring entrepreneurs in Rampur who want a daily-needs business with steady demand and company-managed systems behind the counter.
              </li>
              <li>
                Property owners with a suitable commercial space who want to convert it into an organised, branded retail store under FOCM or FOCO.
              </li>
              <li>
                Families who want a business they can build over time and pass on, as the brand describes each store as a family business.
              </li>
              <li>
                Investors with a large space of at least 2,000 sq ft who prefer the company to operate the store under the FOCO model.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Things to Plan for Honestly
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A new store needs time to build footfall, so budget for slower sales in the early months and keep a cash reserve.
              </li>
              <li>
                Under FOCM, rent, salaries and electricity are your costs, and they affect your final profit even when the gross margin looks strong.
              </li>
              <li>
                Under FOCO, the return is linked to monthly sales and is not guaranteed, so ask how the share is calculated, paid and reported.
              </li>
              <li>
                Audits, reviews and monthly reporting are part of the system, so be ready to follow the brand’s process consistently.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Rampur Is a Good Market
            </h2>

            <h3 className="font-medium text-gray-900">
              Everyday Demand
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Rampur families buy staples, snacks, beverages, personal care and cleaning products every week, so grocery demand stays steady through the year.
              </li>
              <li>
                Festival periods such as Navratri, Eid, Diwali and the wedding season add strong sales peaks.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Organised Retail Preference
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Shoppers increasingly prefer clean aisles, printed prices, fair billing and a wide branded range under one roof.
              </li>
              <li>
                The brand shows how unorganised inventory leads to losses, while smart stocking helps shops sell more.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Wide Catchment
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Families from nearby towns and villages visit Rampur for weekly and festival shopping, which widens your customer base.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing a Location in Rampur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Look for a visible shop near housing colonies, schools, markets or main roads, and check footfall at morning and evening hours.
              </li>
              <li>
                Consider parking, easy entry and nearby competing stores before you finalise the premises.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips Before You Apply
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Measure your space honestly and match it with the correct format, since store type and size shape your total investment.
              </li>
              <li>
                Keep your documents scanned clearly, and keep names and details consistent across all papers.
              </li>
              <li>
                Prepare a list of questions on investment, reporting, training, agreement term and renewal before speaking to the team.
              </li>
              <li>
                Read the application declaration carefully, including the non-refundable site visitation fee and the compliance duties.
              </li>
            </ul>

            

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What are the franchise models?
                </h3>
                <p className="mt-2">
                  FOCM means Franchise Owned, Company Managed, and FOCO means Franchise Owned, Company Operated.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. What is the total investment?
                </h3>
                <p className="mt-2">
                  FOCM starts from ₹15 Lakh, and an illustrative 2,000 sq ft FOCO store is about ₹61.5 lakh, so confirm your exact figure.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. Which store sizes are available?
                </h3>
                <p className="mt-2">
                  Mini Mart of 600–1000 sq ft, Super Mart of 1000–3000 sq ft and Hyper Mart of 3000–8000 sq ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No, training, billing software and ongoing operational assistance are provided.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. Which documents are needed?
                </h3>
                <p className="mt-2">
                  ID proof, education certificate, cancelled cheque or passbook copy and ownership or rental papers.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. What happens to expired or damaged stock?
                </h3>
                <p className="mt-2">
                  Buyzaar Mart takes back expired and damaged goods under its inventory guarantee.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. How do I contact the team?
                </h3>
                <p className="mt-2">
                  Call +91 9217991727, email{" "}
                  <a
                    href="mailto:info@thebuyzaarmart.com"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    info@thebuyzaarmart.com
                  </a>{" "}
                  or fill the inquiry form on thebuyzaarmart.com.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Get Complete Buyzaar Mart Franchise Details for Rampur
              </h2>

              <p className="mb-4 text-gray-800">
                Rampur offers a strong opportunity to own a structured, branded neighbourhood supermarket.
              </p>

              <p className="mb-4 text-gray-800">
                Contact the team today to discuss the FOCM or FOCO model, your space and the next steps.
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
            currentSlug="/rampur/buyzaar-mart-franchise-details-rampur"
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