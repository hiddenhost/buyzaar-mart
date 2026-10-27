import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Retail Partner Rampur | Join the Network",
  description:
    "Become a Buyzaar Mart retail partner in Rampur. Get branding, managed supply chain and launch support. Total investment from ₹15 Lakh. Call +91 9217991727.",
  url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-retail-partner-rampur",
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
    name: "The Buyzaar Mart Retail Partner Formats in Rampur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Compact neighbourhood retail partner format for Rampur, covering 600–1000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Full weekly shopping retail partner format for Rampur, covering 1000–3000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Destination retail partner format for large premises in Rampur, covering 3000–8000 sq ft.",
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
      name: "Who is a Buyzaar Mart retail partner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A retail partner owns and runs a Buyzaar Mart store while the company supports branding, systems, supply chain and marketing.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The total investment starts from ₹15 Lakh and varies with store size, so confirm the exact figure for your Rampur space.",
      },
    },
    {
      "@type": "Question",
      name: "Which store formats are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mini Mart of 600–1000 sq ft, Super Mart of 1000–3000 sq ft and Hyper Mart of 3000–8000 sq ft.",
      },
    },
    {
      "@type": "Question",
      name: "What support does the company provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Marketing, managed inventory and supply chain, POS billing, CRM tools, uniform branding and launch support.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to expired or damaged goods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyzaar Mart takes back expired and damaged goods under its inventory assurance policy.",
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
    {
      "@type": "Question",
      name: "Is there a store already running in Rampur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The website lists running stores in other cities and does not show a Rampur store, so ask the team about your area directly.",
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
              Buyzaar Mart Retail Partner in Rampur – Become a Partner in India’s Growing Retail Network
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Become a Buyzaar Mart Retail Partner in Rampur
            </h2>

            <h3 className="font-medium text-gray-900">
              What a Retail Partner Means
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A Buyzaar Mart retail partner is a local entrepreneur who owns and runs a Buyzaar Mart store in their own neighbourhood, while the company supports the business with brand, systems, supply chain and marketing.
              </li>
              <li>
                The Buyzaar Mart is a neighbourhood supermarket franchise brand with the promise “अपना बाजार – बचत का साथ, Quality की बात,” and it invites people to join India’s growing entrepreneurial network.
              </li>
              <li>
                In Rampur, becoming a retail partner means bringing an organised, branded grocery and daily-needs store to families who want fair prices, clean shelves and dependable quality.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              The Buyzaar Mart Partnership Idea
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand’s mission is to empower communities through retail ownership, helping individuals build dignified livelihoods by running neighbourhood stores that offer fairness, affordability and convenience.
              </li>
              <li>
                Its vision is to open multiple stores across India with a focus on transparency, accessibility and care, so every partner becomes part of a larger, trusted network.
              </li>
              <li>
                The website describes each store as a family business that you build, grow and pass on, which makes partnership a long-term decision and not a short-term trade.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Brand Pillars That Guide Every Partner
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Simplicity</span> – The company takes the complexity out of retail operations such as handling, purchasing, inventory and supply chain, so partners can focus on customers and daily store management.
              </li>
              <li>
                <span className="font-semibold">Reliability</span> – Timely supply, transparent processes and a partner you can trust form the backbone of the relationship between the brand and each store owner.
              </li>
              <li>
                <span className="font-semibold">Affordability and Quality</span> – A curated range, fair pricing and consistent availability help partners earn repeat customers who return because the store feels dependable.
              </li>
              <li>
                <span className="font-semibold">Ownership and Legacy</span> – Retail partners own their stores and can grow them over time, which gives families a business they can proudly continue for years.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Rampur Needs Organised Retail Partners
            </h2>

            <h3 className="font-medium text-gray-900">
              Steady Everyday Demand
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Rampur families buy staples, snacks, beverages, personal care and cleaning products every week, so grocery demand stays steady across the year.
              </li>
              <li>
                Festival periods such as Navratri, Eid, Diwali and the wedding season add strong sales peaks, and the Buyzaar Mart blog shares practical stocking guides for such occasions.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              From Chaos to Smart Retail
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand shows how unorganised inventory leads to losses, while predicting demand and stocking smart helps shops sell more and keep shelves tidy.
              </li>
              <li>
                A partner store brings this smart retail approach to Rampur, where shoppers increasingly prefer clean aisles, printed prices and fair billing.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Wide Catchment
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Families from nearby towns and villages visit Rampur for weekly shopping, so a well-placed store can serve a wider area than its immediate colony.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats Available to Retail Partners
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600–1000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Covers personal care, beverages, grocery and staples, homecare and hygiene, stationery, snacks and biscuits for compact neighbourhood locations.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart (1000–3000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Adds dairy items and fruits and vegetables, giving families a more complete weekly shopping basket under one roof.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3000–8000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Includes gifts and toys and frozen ready-to-eat items on top of the Super Mart range, built for destination shopping on large premises.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Choosing Your Format
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Match your available Rampur space to the correct range first, because store type and area decide your total investment.
              </li>
              <li>
                Speak with the team if your space sits near the edge of two ranges, so you can pick the format that fits both layout and budget.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Buyzaar Mart Provides to Its Retail Partners
            </h2>

            <h3 className="font-medium text-gray-900">
              Marketing and Brand Promotion
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Support includes TV advertisements, radio campaigns, social media marketing, promotional materials and local area brand building.
              </li>
              <li>
                Hyper-local campaigns are tailored for every franchise location, and a distinctive launch strategy helps a new store gain local visibility quickly.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Inventory and Supply Chain
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Inventory is fully managed with regular stock replenishment, quality products sourced directly from manufacturers and automated supply chain management.
              </li>
              <li>
                The brand lists partnerships with many well-known FMCG companies, and the franchise network works with 50+ FMCG partners, so partners can stock trusted products.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Technology and Systems
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A POS-enabled billing system provides modern point-of-sale technology for quick and accurate billing at the counter.
              </li>
              <li>
                Customer relationship management tools help partners build lasting relationships and bring shoppers back again.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Uniform Branding and Local Flexibility
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Uniform branding and store design create a consistent professional identity across the network.
              </li>
              <li>
                Localised product flexibility lets partners adapt the range to Rampur preferences without losing the brand look.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Inventory Assurance
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Buyzaar Mart takes back expired and damaged goods, so partners worry less about unsold or spoiled stock and can focus on stocking and selling what matters.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Partner Responsibilities
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Franchisees secure and pay rent for their store location, while the company provides location selection guidance and site selection assistance.
              </li>
              <li>
                Partners agree to follow operational rules, training mandates and monthly reporting procedures, because store performance, transparency and customer experience affect the continuity of the franchise.
              </li>
              <li>
                Partners also pay a site visitation fee as stated in the application declaration, and the fee is non-refundable once the visit is made.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment for a Retail Partner
            </h2>

            <h3 className="font-medium text-gray-900">
              Total Investment Overview
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart franchise starts from a total investment of ₹15 Lakh, and the final figure depends on your store type and area.
              </li>
              <li>
                The total covers stock, interior, software fee, franchise fee including 18% GST and security deposit, so you can plan the whole commitment as one number.
              </li>
              <li>
                The Franchise page includes an investment calculator where you choose a store type and enter the area in square feet to see an estimate.
              </li>
              <li>
                Confirm the exact total for your Rampur location with the franchise team in writing before you commit.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Earning Potential
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand highlights an effective gross margin of 18–20%, which is a gross figure and not a promise of net profit.
              </li>
              <li>
                Rent, staff, electricity and day-to-day management affect final earnings, so plan costs carefully and track daily sales from the first week.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Become a Retail Partner in Rampur
            </h2>

            <h3 className="font-medium text-gray-900">
              Step 1: Submit an Inquiry
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Open thebuyzaarmart.com and fill the “I want to become an entrepreneur” form with your name, email, phone number, state and city.
              </li>
              <li>
                Choose Uttar Pradesh as the state, write Rampur as the city and mention your space size in the optional message box.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 2: Documentation
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Complete KYC and legal documentation, then review and sign the franchise agreement with compliance support from the team.
              </li>
              <li>
                Keep your ID proof, education certificate, cancelled cheque or passbook copy and ownership or rental papers ready.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 3: Store Launch
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Work with the team on launch strategy, local marketing campaigns, operational backend support and customer acquisition support.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Franchise Application Form
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The form collects personal details, identity proof, address proof, banking details and proposed store location, along with a signed declaration in PDF format.
              </li>
              <li>
                Submit only genuine papers, because false declarations or forged documents can lead to disqualification or termination of franchise rights.
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
                Cancelled cheque or passbook copy, and ownership or rental agreement for the proposed store.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Makes a Good Retail Partner
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                People who are ready to manage a store personally or through a reliable manager, since daily supervision shapes billing accuracy, stock discipline and customer service.
              </li>
              <li>
                Entrepreneurs who value transparent processes and are comfortable following brand standards, training instructions and monthly reporting.
              </li>
              <li>
                Families who want a business they can build over time and pass on to the next generation.
              </li>
              <li>
                Shop owners in Rampur with suitable space who want to upgrade to an organised, branded store, after discussing their space and format with the franchise team.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips to Succeed as a Retail Partner in Rampur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Choose a visible location near housing colonies, schools, markets or main roads, and check footfall at morning and evening hours before you finalise the shop.
              </li>
              <li>
                Keep shelves tidy, prices visible and billing accurate, because these simple habits build trust faster than any advertisement.
              </li>
              <li>
                Use CRM tools to remember regular customers, and plan stock early for Navratri, Eid, Diwali and wedding-season demand.
              </li>
              <li>
                Review sales every week and talk to the franchise team early when you notice slow-moving items or stock gaps.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Retail Partner vs Running an Independent Shop
            </h2>

            <h3 className="font-medium text-gray-900">
              Buying and Stock
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                An independent shop owner must find suppliers, negotiate rates and plan stock alone, while a partner store works with managed inventory, regular replenishment and direct manufacturer sourcing.
              </li>
              <li>
                This saves time every week and reduces the chance of empty shelves on busy festival days.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Brand and Customer Trust
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A branded store with uniform design, printed prices and POS billing feels more organised to shoppers than a loose-sale counter.
              </li>
              <li>
                Customers who see a familiar brand name in the neighbourhood often feel more confident about quality and fair pricing.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Marketing and Growth
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Independent shops usually depend on word of mouth, while a partner store receives launch strategy, hyper-local campaigns and wider brand promotion.
              </li>
              <li>
                Partners also stay connected to a larger network, so their store grows with the reputation of the entire brand.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Questions to Ask Before You Partner
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ask for the exact total investment for your store type and area, and request that the figure is explained in writing.
              </li>
              <li>
                Ask what the site visitation fee covers, what monthly reports are required and what training you must complete.
              </li>
              <li>
                Ask how replenishment, product selection and returns of expired goods work in daily practice.
              </li>
              <li>
                Ask for the full agreement copy and read it carefully before signing, since the operational and compliance terms will guide your store for years.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Brand Credentials and Contact
            </h2>

            <h3 className="font-medium text-gray-900">
              Trust Signals
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart is listed as FSSAI licensed, GST registered and MSME certified, which supports trust with customers and partners.
              </li>
              <li>
                The brand has running stores in Shyam Nagar Kanpur, Sector 44 Chalera Noida, Gangoh near Bus Stand, Behat Saharanpur and Bahadrabad Haridwar.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Contact Details
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
                or email{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
                , and the team replies within 24 hours on email, Monday to Saturday from 9:00 AM to 7:00 PM.
              </li>
              <li>
                The head office is at D-43, Third Floor, Sector-6, Noida-201301.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. Who is a Buyzaar Mart retail partner?
                </h3>
                <p className="mt-2">
                  A retail partner owns and runs a Buyzaar Mart store while the company supports branding, systems, supply chain and marketing.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. What is the total investment?
                </h3>
                <p className="mt-2">
                  The total investment starts from ₹15 Lakh and varies with store size, so confirm the exact figure for your Rampur space.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. Which store formats are available?
                </h3>
                <p className="mt-2">
                  Mini Mart of 600–1000 sq ft, Super Mart of 1000–3000 sq ft and Hyper Mart of 3000–8000 sq ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. What support does the company provide?
                </h3>
                <p className="mt-2">
                  Marketing, managed inventory and supply chain, POS billing, CRM tools, uniform branding and launch support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. What happens to expired or damaged goods?
                </h3>
                <p className="mt-2">
                  Buyzaar Mart takes back expired and damaged goods under its inventory assurance policy.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. How do I contact the team?
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

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. Is there a store already running in Rampur?
                </h3>
                <p className="mt-2">
                  The website lists running stores in other cities and does not show a Rampur store, so ask the team about your area directly.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Become a Buyzaar Mart Retail Partner in Rampur
              </h2>

              <p className="mb-4 text-gray-800">
                Rampur offers a strong opportunity to own a structured, branded neighbourhood supermarket.
              </p>

              <p className="mb-4 text-gray-800">
                Join the network today and bring organised retail to your locality.
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
            currentSlug="/rampur/buyzaar-mart-retail-partner-rampur"
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