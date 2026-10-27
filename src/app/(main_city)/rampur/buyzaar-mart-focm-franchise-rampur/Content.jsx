import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart FOCM Franchise Rampur | Company Managed",
  description:
    "Start a Buyzaar Mart FOCM franchise in Rampur: you own the store, the company manages operations. Total investment from ₹15 Lakh. Call +91 9217991727.",
  url: "https://www.thebuyzaarmart.com/rampur/c",
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
    name: "The Buyzaar Mart FOCM Franchise Formats in Rampur",
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
        text: "FOCM means Franchise Owned, Company Managed, where you own the store and the company manages operations and systems.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The total investment starts from ₹15 Lakh and varies with store size, so confirm the exact figure for your space.",
      },
    },
    {
      "@type": "Question",
      name: "What store sizes are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mini Mart of 600–1000 sq ft, Super Mart of 1000–3000 sq ft and Hyper Mart of 3000–8000 sq ft.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the FOCM agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The website lists a typical term of 5 years, with renewal based on criteria evaluated at the end.",
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
      name: "Who pays rent and salaries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The franchisee pays rent, staff salaries, electricity and other operating costs.",
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
              Buyzaar Mart FOCM Franchise Rampur – Franchise Owned, Company Managed Supermarket Model
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Buyzaar Mart FOCM Franchise in Rampur
            </h2>

            <h3 className="font-medium text-gray-900">
              FOCM Franchise at a Glance
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                FOCM stands for Franchise Owned, Company Managed, the main model of The Buyzaar Mart where you own the store in Rampur and the company manages operations, branding, technology, training and performance systems.
              </li>
              <li>
                The brand’s promise, “अपना बाजार – बचत का साथ, Quality की बात,” reflects its focus on savings, quality and everyday trust for Indian families.
              </li>
              <li>
                The Buyzaar Mart franchise starts from a total investment of ₹15 Lakh, and the final amount depends on your store format, layout and location.
              </li>
              <li>
                The website mentions an effective gross margin of 18–20%, which is a gross figure and not a promise of net profit.
              </li>
              <li>
                The typical FOCM agreement term shown on the website is 5 years, with renewal based on criteria evaluated at the end of the term.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              What FOCM Means for a Franchise Owner
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Ownership</span> – The franchisee owns the outlet, which makes the Rampur store a business you build, grow and can pass on, in line with the brand’s family business idea.
              </li>
              <li>
                You remain the local owner who builds relationships with customers, staff and neighbours.
              </li>
              <li>
                <span className="font-semibold">Management Support</span> – The company manages the heavy operational layers such as branding, technology, training, supply chain and performance systems.
              </li>
              <li>
                This allows first-time entrepreneurs in Rampur to run a modern supermarket without building every system from zero.
              </li>
              <li>
                <span className="font-semibold">Who Handles What</span> – The franchisee provides the initial capital and handles fixed costs such as rent and staff salaries, along with variable costs such as electricity and miscellaneous expenses.
              </li>
              <li>
                Buyzaar Mart provides the franchise system, support and standards that keep every outlet consistent across the network.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats Under FOCM
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600–1000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A compact format with personal care, beverages, grocery and staples, homecare and hygiene, stationery, snacks and biscuits.
              </li>
              <li>
                The FAQ page mentions a minimum of 600 sq ft carpet area, so smaller shops may not qualify.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart (1000–3000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Adds dairy items and fruits and vegetables for a fuller weekly shopping basket in one visit.
              </li>
              <li>
                Works well on main roads and larger residential pockets in Rampur.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3000–8000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Adds gifts and toys and frozen ready-to-eat items for destination shopping on large premises.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Choosing Your Format
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Measure your carpet area first and match it with the correct range, because store type and size shape your investment.
              </li>
              <li>
                Talk to the franchise team if your space is close to the boundary of two formats.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment for a FOCM Store
            </h2>

            <h3 className="font-medium text-gray-900">
              Investment Overview
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The franchise starts from a total investment of ₹15 Lakh, and the FAQ page mentions roughly ₹15–20 lakh for a Mini Mart of 600–1000 sq ft.
              </li>
              <li>
                The final figure depends on store size, layout, location and the work required at the premises.
              </li>
              <li>
                The Franchise page has an investment calculator where you select the store type and enter your area in square feet to see an estimate.
              </li>
              <li>
                Ask the franchise team to confirm the exact total for your Rampur location in writing before you commit.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Planning Your Funds
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep working capital aside for the early months, because rent, salaries and electricity continue while the store builds footfall.
              </li>
              <li>
                Track daily sales and costs from the first week to identify problems early.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Pre-Launch Support from the Company
            </h2>

            <h3 className="font-medium text-gray-900">
              Location Survey and Approval
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You can propose your own site in Rampur, and the team surveys it for population, purchasing capacity and local demand before final approval.
              </li>
              <li>
                Work begins only after the site is approved, so share property details early.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Store Setup
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company supports store layout, interior design and branding so that every outlet looks uniform and professional.
              </li>
              <li>
                Interior and asset setup and the final launch are part of the pre-launch support listed on the website.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Agreement and Onboarding
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company handles franchise agreement execution and legal onboarding, with compliance support for KYC and documentation.
              </li>
              <li>
                Read every clause before signing and ask the team to explain anything that is unclear.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Daily Operations Support
            </h2>

            <h3 className="font-medium text-gray-900">
              Systems and Procedures
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Standard operating procedures guide daily operations, POS billing, inventory control and customer service.
              </li>
              <li>
                A POS system supports billing and sales tracking, so records stay clean and easy to review.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Inventory and Procurement
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company gives opening stock recommendations, replenishment guidelines, procurement support, pricing and product-mix strategy, and logistics coordination.
              </li>
              <li>
                Products are sourced directly from manufacturers, and the brand works with 50+ FMCG partners such as Dabur, HUL, ITC, Nestle, Parle, Tata Consumer and Patanjali.
              </li>
              <li>
                Buyzaar Mart takes back expired and damaged goods, which reduces the worry of dead stock.
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
                The FAQ page says no retail experience is needed, because training, billing software and ongoing operational assistance are provided.
              </li>
              <li>
                Regular operational and quality audits, KPI dashboards and corrective-action plans help keep every store on track.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Marketing and Brand Support
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Local marketing, digital marketing and brand materials help your Rampur store gain visibility quickly.
              </li>
              <li>
                Support also includes TV advertisements, radio campaigns, social media marketing and promotional materials, along with hyper-local campaigns for each location.
              </li>
              <li>
                Brand consistency across signage, uniforms and store design builds trust among shoppers.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Responsibilities of the FOCM Franchisee
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Provide the initial capital investment and arrange the store premises, since the franchisee secures and pays rent for the location.
              </li>
              <li>
                Pay staff salaries, electricity and other operating costs, and manage the store with discipline.
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
              Why Rampur Suits a FOCM Store
            </h2>

            <h3 className="font-medium text-gray-900">
              Steady Everyday Demand
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Rampur families buy staples, snacks, beverages, personal care and cleaning products every week, so a well-managed store earns repeat footfall.
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
                Shoppers increasingly prefer clean aisles, printed prices, fair billing and a wide branded range, which a Buyzaar Mart store provides.
              </li>
              <li>
                The brand shows how unorganised inventory leads to losses, while smart stocking helps shops sell more.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Catchment Beyond the City
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Families from nearby towns and villages visit Rampur for weekly shopping, which widens your customer base.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Start a FOCM Franchise in Rampur
            </h2>

            <h3 className="font-medium text-gray-900">
              Step 1: Submit an Inquiry
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Visit thebuyzaarmart.com and fill the “I want to become an entrepreneur” form with your name, email, phone number, state and city.
              </li>
              <li>
                Select Uttar Pradesh as the state, write Rampur as the city and mention that you are interested in the FOCM model.
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
              Step 2: Application and Site Survey
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Complete the franchise application form, and the proposed site is surveyed before approval.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 3: Agreement and Payment
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Sign the franchise agreement and make the payment as agreed with the team.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 4: Store Setup and Launch
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Store setup is completed and the franchise kit is handed over, followed by launch strategy, local marketing and customer acquisition support.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Documents to Keep Ready
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
              Brand Strength Behind the FOCM Model
            </h2>

            <h3 className="font-medium text-gray-900">
              Mission and Vision
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The mission is to empower communities through retail ownership, helping individuals build dignified livelihoods through neighbourhood stores that offer fairness, affordability and convenience.
              </li>
              <li>
                The vision is to open multiple stores across India with a focus on transparency, accessibility and care.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Network Presence
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Running stores are listed in Shyam Nagar Kanpur, Sector 44 Chalera Noida, Gangoh near Bus Stand, Behat Saharanpur and Bahadrabad Haridwar, and a new store in Ghaziabad is listed as upcoming.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips to Run a Successful FOCM Store in Rampur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Choose a visible location near housing colonies, schools, markets or main roads, and check footfall at morning and evening hours before finalising the shop.
              </li>
              <li>
                Keep shelves tidy, prices visible and billing accurate, because these basics build trust faster than advertising.
              </li>
              <li>
                Plan stock early for Navratri, Eid, Diwali and wedding-season demand, and review slow-moving items every week.
              </li>
              <li>
                Use CRM tools and friendly service to bring regular customers back for their weekly shopping.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Things to Plan for Honestly
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A new store needs time to build footfall, so budget for slower sales in the early months.
              </li>
              <li>
                Rent, salaries and electricity are your costs under FOCM, and they affect your final profit even when the gross margin looks strong.
              </li>
              <li>
                Audits, KPI reviews and monthly reporting are part of the model, so be ready to follow the process consistently.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FOCM vs FOCO at a Glance
            </h2>

            <h3 className="font-medium text-gray-900">
              When FOCM Fits
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                FOCM suits people who want to own the store, stay involved and run a Mini, Super or Hyper Mart with company management and support.
              </li>
              <li>
                It also fits smaller spaces, since the format starts from 600 sq ft.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              When FOCO Fits
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                FOCO is a company-operated model for larger supermarkets of at least 2,000 sq ft, where the investor provides capital and space.
              </li>
              <li>
                If you want the company to run everything, ask the team about FOCO instead.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Questions to Ask Before You Sign
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ask for the exact total investment for your store type and area, and request it in writing.
              </li>
              <li>
                Ask what the site visitation fee covers, what reports are required each month and what training is included.
              </li>
              <li>
                Ask what happens at the end of the 5-year term and what renewal criteria will apply.
              </li>
              <li>
                Ask for the full agreement and read each clause carefully before signing.
              </li>
            </ul>

            

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What does FOCM mean?
                </h3>
                <p className="mt-2">
                  FOCM means Franchise Owned, Company Managed, where you own the store and the company manages operations and systems.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. What is the total investment?
                </h3>
                <p className="mt-2">
                  The total investment starts from ₹15 Lakh and varies with store size, so confirm the exact figure for your space.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. What store sizes are available?
                </h3>
                <p className="mt-2">
                  Mini Mart of 600–1000 sq ft, Super Mart of 1000–3000 sq ft and Hyper Mart of 3000–8000 sq ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. How long is the FOCM agreement?
                </h3>
                <p className="mt-2">
                  The website lists a typical term of 5 years, with renewal based on criteria evaluated at the end.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No, training, billing software and ongoing operational assistance are provided.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. Who pays rent and salaries?
                </h3>
                <p className="mt-2">
                  The franchisee pays rent, staff salaries, electricity and other operating costs.
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
                Start Your Buyzaar Mart FOCM Franchise in Rampur
              </h2>

              <p className="mb-4 text-gray-800">
                Rampur offers a strong opportunity to own a structured, branded neighbourhood supermarket.
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
            currentSlug="/rampur/buyzaar-mart-focm-franchise-rampur"
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