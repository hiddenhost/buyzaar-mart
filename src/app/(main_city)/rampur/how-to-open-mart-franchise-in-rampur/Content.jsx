import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "How to Open a Mart Franchise in Rampur | Buyzaar Mart",
  description:
    "Learn how to open a mart franchise in Rampur with Buyzaar Mart: models, space, steps, documents and total investment from ₹15 Lakh. Call +91 9217991727.",
  url: "https://www.thebuyzaarmart.com/rampur/how-to-open-mart-franchise-in-rampur",
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
          "Compact mart franchise format for Rampur, covering 600–1000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Full weekly shopping mart franchise format for Rampur, covering 1000–3000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Destination mart franchise format for large premises in Rampur, covering 3000–8000 sq ft.",
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
      name: "How do I open a Buyzaar Mart franchise in Rampur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Submit an inquiry, complete the application and site survey, sign the agreement and then complete store setup and launch.",
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
      name: "What is the minimum space?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The FAQ page mentions a minimum of 600 sq ft carpet area, and FOCO needs at least 2,000 sq ft.",
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
      name: "Can I propose my own site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the team surveys your proposed site before approval.",
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
              How to Open a Mart Franchise in Rampur – Step-by-Step Guide with Buyzaar Mart
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Open a Mart Franchise in Rampur
            </h2>

            <h3 className="font-medium text-gray-900">
              Overview of Opening a Mart Franchise
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Opening a mart franchise in Rampur with The Buyzaar Mart means choosing a franchise model, arranging a suitable space, getting your site approved, signing the agreement and launching a branded neighbourhood supermarket with company support.
              </li>
              <li>
                The Buyzaar Mart is a neighbourhood supermarket franchise brand with the promise “अपना बाजार – बचत का साथ, Quality की बात,” and its process is built to make retail ownership simple and less risky.
              </li>
              <li>
                This guide walks you through every stage in plain language, from the first decision to your opening day and the first few months of running the store.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 1: Decide Your Franchise Model
            </h2>

            <h3 className="font-medium text-gray-900">
              FOCM: Franchise Owned, Company Managed
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You own the store and fund the setup, while the company manages operations, branding, technology, training and performance systems.
              </li>
              <li>
                You bear fixed costs such as rent and staff salaries and variable costs such as electricity, and the website lists a typical term of 5 years.
              </li>
              <li>
                This suits entrepreneurs who want to be present in the store and build their own customer relationships.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              FOCO: Franchise Owned, Company Operated
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The investor provides capital and the retail space, while the company runs the store, including staffing, marketing, inventory and supply chain.
              </li>
              <li>
                The format is a full supermarket of at least 2,000 sq ft, with a typical term of 10 years.
              </li>
              <li>
                About 10% of total monthly sales is shared with the investor as an example, which is performance-linked and not guaranteed.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              How to Decide
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Choose FOCM if you want to manage the store yourself and your space fits a Mini, Super or Hyper Mart.
              </li>
              <li>
                Choose FOCO if you own a large space and prefer the company to operate the store.
              </li>
              <li>
                Speak to the franchise team before deciding, because the right model depends on your space, funds and the time you can give.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 2: Choose Your Store Format
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600–1000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Covers personal care, beverages, grocery and staples, homecare and hygiene, stationery, snacks and biscuits.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart (1000–3000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Adds dairy items and fruits and vegetables for a fuller weekly shopping basket.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3000–8000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Adds gifts and toys and frozen ready-to-eat items for destination shopping.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Space Check
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The FAQ page mentions a minimum of 600 sq ft carpet area, so measure your Rampur space honestly before you begin.
              </li>
              <li>
                Match your area to the right format, because store type and size shape your total investment.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 3: Plan Your Total Investment
            </h2>

            <h3 className="font-medium text-gray-900">
              FOCM Total
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart FOCM franchise starts from a total investment of ₹15 Lakh, and the FAQ page mentions roughly ₹15–20 lakh for a Mini Mart of 600–1000 sq ft.
              </li>
              <li>
                The final figure depends on store size, layout, location and the work required at the premises.
              </li>
              <li>
                The Franchise page has an investment calculator where you select the store type and enter your area in square feet to see an estimate.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              FOCO Total
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                For an illustrative 2,000 sq ft FOCO supermarket, the website points to a total of about ₹61.5 lakh, calculated for one POS login and excluding applicable GST and rent.
              </li>
              <li>
                This is approximate, and the actual total depends on store size, POS logins, GST and rent.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Money Planning Tips
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ask the team to confirm the exact total for your Rampur space in writing before you commit.
              </li>
              <li>
                Keep working capital aside for the early months, since rent, salaries and electricity continue while the store builds footfall.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 4: Find and Arrange Your Space
            </h2>

            <h3 className="font-medium text-gray-900">
              What to Look For
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Choose a visible shop near housing colonies, schools, markets or main roads where families pass every day.
              </li>
              <li>
                Check footfall at morning and evening hours, parking, easy entry and the distance from competing stores.
              </li>
              <li>
                Make sure the space has proper access for stock deliveries and enough room for shelves and billing counters.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Your Responsibility and the Company’s Help
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The franchisee secures and pays rent for the store location, while the company provides location selection guidance and site selection assistance.
              </li>
              <li>
                You can propose your own site in Rampur, and the team surveys it for population, purchasing capacity and local demand.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 5: Contact the Franchise Team
            </h2>

            <h3 className="font-medium text-gray-900">
              Submit Your Inquiry
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Visit thebuyzaarmart.com and fill the “I want to become an entrepreneur” form with your name, email, phone number, state and city.
              </li>
              <li>
                Select Uttar Pradesh as the state, write Rampur as the city and add your store size and model interest in the message box.
              </li>
              <li>
                You can also call{" "}
                <a
                  href="tel:+919217991727"
                  className="font-semibold text-green-600 hover:underline"
                >
                  +91 9217991727
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>{" "}
                to attend a call or meeting with the team.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Response Time
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Email inquiries receive a response within 24 hours, and the team works Monday to Saturday from 9:00 AM to 7:00 PM.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 6: Complete the Application and Site Survey
            </h2>

            <h3 className="font-medium text-gray-900">
              Application Form
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The form collects personal details, identity proof, address proof, banking details and the proposed store location along with a signed declaration in PDF format.
              </li>
              <li>
                Submit only genuine papers, because false declarations or forged documents can lead to disqualification or termination of franchise rights.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Site Survey and Approval
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The proposed site is surveyed, and work begins only after approval.
              </li>
              <li>
                The declaration mentions a site visitation fee, which is non-refundable once the visit is made, so ask the team to explain it early.
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
              Step 7: Sign the Agreement
            </h2>

            <h3 className="font-medium text-gray-900">
              Review Carefully
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company handles franchise agreement execution and legal onboarding, with compliance support for KYC and documentation.
              </li>
              <li>
                Read every clause, ask the team to explain anything unclear and sign only when you are fully comfortable.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Questions to Ask
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ask what the agreement term is, how renewal works and what reports you must submit each month.
              </li>
              <li>
                Ask what the site visitation fee covers and what training is included before you make any payment.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 8: Store Setup and Franchise Kit
            </h2>

            <h3 className="font-medium text-gray-900">
              Layout and Branding
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company supports store layout, interior design and branding so that every outlet looks uniform and professional.
              </li>
              <li>
                Brand consistency across signage, uniforms and store design builds trust among Rampur shoppers.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Systems
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A POS-enabled billing system and CRM tools are set up for billing, sales tracking and customer relationships.
              </li>
              <li>
                Standard operating procedures guide daily operations, inventory control and customer service.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Franchise Kit Handover
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                After the agreement and payment, store setup is completed and the franchise kit is handed over for launch.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 9: Stock Your Store
            </h2>

            <h3 className="font-medium text-gray-900">
              Opening Stock
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company gives opening stock recommendations, replenishment guidelines, procurement support and pricing and product-mix strategy.
              </li>
              <li>
                Products are sourced directly from manufacturers, and the brand works with 50+ FMCG partners such as Dabur, HUL, ITC, Nestle, Parle, Tata Consumer and Patanjali.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Inventory Safety
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Buyzaar Mart takes back expired and damaged goods, so you worry less about unsold or spoiled stock.
              </li>
              <li>
                Localised product flexibility lets you adapt the range to Rampur preferences while keeping the brand look.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 10: Train Your Team and Launch
            </h2>

            <h3 className="font-medium text-gray-900">
              Training
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Initial training for the franchisee and staff is provided, followed by ongoing support, audits and performance reviews.
              </li>
              <li>
                The FAQ page says no retail experience is needed, because training, billing software and operational assistance are provided.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Launch Support
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company designs a distinctive store launch strategy for rapid local visibility, with hyper-local marketing campaigns tailored to your location.
              </li>
              <li>
                Support includes local marketing, digital marketing, TV advertisements, radio campaigns, social media marketing and promotional materials.
              </li>
              <li>
                Backend operational support and customer acquisition support help the store open with a clear plan.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              After Launch: Running the Store Well
            </h2>

            <h3 className="font-medium text-gray-900">
              Daily Habits
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep shelves tidy, prices visible and billing accurate, because these basics build trust faster than advertising.
              </li>
              <li>
                Review sales and slow-moving items every week, and plan stock early for Navratri, Eid, Diwali and wedding-season demand.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Performance Support
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                KPI dashboards, quality audits and corrective-action plans help keep the store on track.
              </li>
              <li>
                Follow monthly reporting procedures, and talk to the franchise team early when you notice problems.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Franchisee Responsibilities
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Follow operational rules, training mandates and monthly reporting procedures communicated by the company.
              </li>
              <li>
                Maintain transparent transactions and good customer experience, because they affect the continuity of the franchise.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Rampur Is Ready for a Mart Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Rampur families buy staples, snacks, beverages, personal care and cleaning products every week, so grocery demand stays steady through the year.
              </li>
              <li>
                Shoppers increasingly prefer clean aisles, printed prices and fair billing, which an organised mart delivers better than a loose-sale shop.
              </li>
              <li>
                Families from nearby towns and villages visit Rampur for weekly and festival shopping, which widens the customer base.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Should Open a Mart Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Aspiring entrepreneurs in Rampur who want a daily-needs business with steady demand and company-managed systems behind the counter.
              </li>
              <li>
                Property owners with a suitable commercial space who want to turn it into an organised, branded retail store.
              </li>
              <li>
                Families who want a business they can build over time and pass on, as the brand describes each store as a family business.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Brand Strength Behind the Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The mission is to empower communities through retail ownership, helping individuals build dignified livelihoods through neighbourhood stores that offer fairness, affordability and convenience.
              </li>
              <li>
                Running stores are listed in Shyam Nagar Kanpur, Sector 44 Chalera Noida, Gangoh near Bus Stand, Behat Saharanpur and Bahadrabad Haridwar, and a new store in Ghaziabad is listed as upcoming.
              </li>
              <li>
                The brand highlights an effective gross margin of 18–20%, which is a gross figure and not a promise of net profit after rent, staff and electricity.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Common Mistakes to Avoid
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Choosing a store format that does not match your actual space or budget instead of measuring first.
              </li>
              <li>
                Paying anyone outside the official franchise team or paying without written confirmation of what the amount covers.
              </li>
              <li>
                Skipping the agreement review, since the operational and compliance terms will guide your store for years.
              </li>
              <li>
                Ignoring working capital, which leaves the store short of funds in the early months.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Brand Credentials and Contact
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart is FSSAI licensed, GST registered and MSME certified, and the head office is at D-43, Third Floor, Sector-6, Noida-201301.
              </li>
              <li>
                Call{" "}
                <a
                  href="tel:+919217991727"
                  className="font-semibold text-green-600 hover:underline"
                >
                  +91 9217991727
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>{" "}
                to start your mart franchise journey in Rampur.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. How do I open a Buyzaar Mart franchise in Rampur?
                </h3>
                <p className="mt-2">
                  Submit an inquiry, complete the application and site survey, sign the agreement and then complete store setup and launch.
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
                  Q3. What is the minimum space?
                </h3>
                <p className="mt-2">
                  The FAQ page mentions a minimum of 600 sq ft carpet area, and FOCO needs at least 2,000 sq ft.
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
                  Q6. Can I propose my own site?
                </h3>
                <p className="mt-2">
                  Yes, the team surveys your proposed site before approval.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. What happens to expired or damaged stock?
                </h3>
                <p className="mt-2">
                  Buyzaar Mart takes back expired and damaged goods under its inventory guarantee.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Open Your Mart Franchise in Rampur with Buyzaar Mart
              </h2>

              <p className="mb-4 text-gray-800">
                Rampur offers a strong opportunity to own a structured, branded neighbourhood supermarket.
              </p>

              <p className="mb-4 text-gray-800">
                Contact the team today to discuss your space, preferred model and next steps.
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
            currentSlug="/rampur/how-to-open-mart-franchise-in-rampur"
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