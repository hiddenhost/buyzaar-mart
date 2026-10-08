import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Supermarket Franchise Opportunity in Mathura | The Buyzaar Mart",
  description:
    "Start a supermarket franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with POS, supply chain, training and full support.",
  url: "https://www.thebuyzaarmart.com/mathura/supermarket-franchise-opportunity-mathura",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mathura",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Mathura",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Supermarket Formats in Mathura",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600-1000 sq ft starting supermarket format for colonies and neighbourhood markets in Mathura.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1000-3000 sq ft supermarket format for busy markets and larger residential catchments in Mathura.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3000-8000 sq ft supermarket format for main roads and areas with a large customer base in Mathura.",
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
      name: "How much does a supermarket franchise in Mathura cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart of 600-1000 sq ft typically needs ₹15-20 lakh. Larger formats cost more based on size and layout.",
      },
    },
    {
      "@type": "Question",
      name: "Which store sizes are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mini Mart is 600-1000 sq ft, Super Mart is 1000-3000 sq ft, and Hyper Mart is 3000-8000 sq ft.",
      },
    },
    {
      "@type": "Question",
      name: "What margin can I expect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An effective gross margin of 18-20% can be earned, depending on location, size and sales volume.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Buyzaar Mart provides training, billing software and ongoing operational support.",
      },
    },
    {
      "@type": "Question",
      name: "What is the FOCO model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You provide capital and space, and the company runs operations. It needs at least 2,000 sq ft.",
      },
    },
    {
      "@type": "Question",
      name: "Can I suggest my own location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Buyzaar Mart team checks population, purchasing capacity and local demand before approval.",
      },
    },
    {
      "@type": "Question",
      name: "What about expired or damaged stock?",
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
        text: "Submit the inquiry, complete the application, get site approval, sign the agreement and launch.",
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
          __html: JSON.stringify(localBusinessSchema).replace(
            /</g,
            "\\u003c",
          ),
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
              Supermarket Franchise Opportunity in Mathura with The Buyzaar
              Mart
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Open a Supermarket in Mathura
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Looking for a supermarket franchise opportunity in Mathura? The
                Buyzaar Mart helps you open a branded supermarket with ready
                systems for design, stock, billing and marketing.
              </li>
              <li>
                You can begin with a Mini Mart or go bigger with a Super Mart or
                Hyper Mart, depending on your space and budget.
              </li>
              <li>
                Investment starts from ₹15 lakh for a Mini Mart, with an
                effective gross margin of 18-20% depending on location, size and
                sales volume.
              </li>
              <li>
                You do not need retail experience. Training, POS software and
                ongoing support are included.
              </li>
              <li>
                Your store becomes &quot;Your Friendly Neighborhood Store&quot;
                for families in your area.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why a Supermarket Business Works in Mathura
            </h2>

            <h3 className="font-medium text-gray-900">
              Daily Household Demand
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Families buy staples, snacks, beverages, dairy, personal care
                and cleaning items every week.
              </li>
              <li>
                Repeat purchases keep a supermarket busy through the year and
                support regular customer visits.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Visitors Add Footfall
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Travellers visiting Mathura and nearby Vrindavan look for
                packaged food, drinks and essentials.
              </li>
              <li>
                A supermarket on a busy route can serve both locals and
                visitors.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Customers Want One-Stop Shopping
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Shoppers like to buy groceries, household items and snacks under
                one roof.
              </li>
              <li>
                A wider range saves them time and encourages bigger shopping
                baskets.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Expanding Neighbourhoods
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                New colonies need stores with better range, hygiene and clear
                pricing.
              </li>
              <li>
                A branded supermarket stands out against unplanned shops and
                offers a more dependable experience.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              About The Buyzaar Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart is a supermarket and grocery franchise network
                built on value, trust and day-to-day demand.
              </li>
              <li>
                Brand line: &quot;अपना बाजार - बचत का साथ, Quality की बात.&quot;
              </li>
              <li>
                Running stores include Kanpur, Noida, Gangoh, Saharanpur and
                Haridwar, with Ghaziabad opening soon.
              </li>
              <li>
                We are FSSAI licensed, GST registered and MSME certified.
              </li>
              <li>
                Our brand associations include HUL, ITC, Nestle, Parle, Dabur,
                Tata Consumer and Britannia.
              </li>
              <li>
                Our pillars are Simplicity, Reliability, Affordability &amp;
                Quality, and Ownership &amp; Legacy.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Supermarket Formats You Can Choose
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart: 600-1000 sq ft
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A starting supermarket format for colonies and neighbourhood
                markets.
              </li>
              <li>
                Categories: personal care, beverages, grocery and staples,
                homecare and hygiene, stationery, snacks and biscuits.
              </li>
              <li>
                Total investment usually ranges from ₹15 lakh to ₹20 lakh,
                depending on size, layout and site work.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart: 1000-3000 sq ft
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Suits busy markets and larger residential catchments.
              </li>
              <li>
                Adds dairy items and fruits and vegetables to the Mini Mart
                range.
              </li>
              <li>
                Offers a fuller shopping experience for weekly and monthly
                purchases.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart: 3000-8000 sq ft
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Suits main roads and areas with a large customer base.
              </li>
              <li>
                Adds gifts and toys and frozen ready-to-eat items to the Super
                Mart range.
              </li>
              <li>
                Delivers a complete one-stop supermarket experience.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing the Right Size
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Every format needs a minimum of 600 sq ft carpet area.
              </li>
              <li>
                Match the size to your premises, budget and the population
                around the site.
              </li>
              <li>
                Use our investment calculator to compare formats before you
                decide.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment for a Supermarket Franchise
            </h2>

            <h3 className="font-medium text-gray-900">
              What the Investment Covers
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Stock, interior, software fee, franchise fee including 18% GST
                and security deposit.
              </li>
              <li>
                The calculator on our franchise page gives an estimate for your
                chosen store type and area.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Ongoing Costs
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Under FOCM, rent, staff salaries, electricity and other
                expenses are paid by the franchisee.
              </li>
              <li>
                Keep working capital ready for the first few months.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Earning Potential
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Effective gross margin of 18-20% is possible.
              </li>
              <li>
                Actual results depend on location, size, footfall and monthly
                sales.
              </li>
              <li>
                A wide range of daily-need products supports steady billing.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Supermarket Franchise Models
            </h2>

            <h3 className="font-medium text-gray-900">
              FOCM: Franchise Owned Company Managed
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>You own the outlet and invest in the setup.</li>
              <li>
                Buyzaar Mart manages branding, technology, training, SOPs and
                performance systems.
              </li>
              <li>
                Our team handles the site survey, store layout, interior design
                and launch planning.
              </li>
              <li>
                Renewal is evaluated at the end of the 5-year term.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              FOCO: Franchise Owned, Company Operated
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Designed for investors who want a hands-off supermarket, with a
                minimum store size of 2,000 sq ft.
              </li>
              <li>
                You provide the capital and the space. The company manages
                staff, electricity, marketing, merchandising and daily
                operations.
              </li>
              <li>
                The agreement is typically for 10 years.
              </li>
              <li>
                The investor earns about 10% revenue share on total monthly
                sales.
              </li>
            </ul>

            

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Product Range in a Buyzaar Supermarket
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Grocery and staples for everyday cooking and regular household
                requirements.
              </li>
              <li>
                Snacks, biscuits and beverages for quick purchases and daily
                refreshment needs.
              </li>
              <li>
                Personal care, homecare and hygiene products for complete
                household shopping.
              </li>
              <li>
                Stationery for school and home needs.
              </li>
              <li>
                Dairy items and fruits and vegetables in Super Mart and Hyper
                Mart formats.
              </li>
              <li>
                Gifts, toys and frozen ready-to-eat items in Hyper Mart.
              </li>
              <li>
                Pricing and product mix are tuned to local needs and customer
                buying patterns.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How Your Supermarket Runs Smoothly
            </h2>

            <h3 className="font-medium text-gray-900">
              POS-Enabled Billing
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Modern point-of-sale technology speeds up billing and improves
                the checkout experience.
              </li>
              <li>
                Sales and inventory are tracked in one system for better daily
                control.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Smart Stocking</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Predict demand, keep shelves organised and stock what matters.
              </li>
              <li>
                Replenishment guidelines reduce stock-outs and wastage.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              CRM for Repeat Customers
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Customer data helps you plan offers and understand buying
                habits.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Uniform Branding
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Store design, signage and uniforms follow one brand identity.
              </li>
              <li>
                Regular audits and KPI dashboards keep standards high.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Support from Day One
            </h2>

            <h3 className="font-medium text-gray-900">Pre-Launch</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Site selection assistance and location survey.</li>
              <li>KYC, legal documentation and agreement support.</li>
              <li>
                Interior design, branding and store assets setup.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Supply Chain</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Opening stock recommendations and procurement systems.
              </li>
              <li>Quality products sourced directly from manufacturers.</li>
              <li>
                Automated supply chain management for timely delivery.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Marketing</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Launch strategy and hyper-local campaigns.
              </li>
              <li>
                Digital marketing, brand materials and local promotions.
              </li>
              <li>Customer acquisition support.</li>
            </ul>

            <h3 className="font-medium text-gray-900">Training</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Initial training for you and your staff on operations, POS and
                customer service.
              </li>
              <li>
                A dedicated support team for technical help.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Hassle-Free Inventory Assurance
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                We take back expired and damaged goods under our inventory
                assurance.
              </li>
              <li>
                This protects your margin and keeps shelves fresh.
              </li>
              <li>
                You can focus on selling and customer service.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">
                  Trust and transparency:
                </span>{" "}
                attractive pricing, assured quality and constant support.
              </li>
              <li>
                <span className="font-semibold">Franchise ready:</span> a
                tested model that makes entrepreneurship simpler and less
                risky.
              </li>
              <li>
                <span className="font-semibold">One-stop retail:</span>{" "}
                groceries, FMCG and daily essentials under one roof.
              </li>
              <li>
                <span className="font-semibold">Smart operations:</span> tried
                and tested, tech-enabled systems.
              </li>
              <li>
                <span className="font-semibold">Profitable returns:</span>{" "}
                effective gross margin of 18-20%.
              </li>
              <li>
                <span className="font-semibold">End-to-end ecosystem:</span>{" "}
                from operations to marketing, we handle it all.
              </li>
              <li>
                <span className="font-semibold">Family legacy:</span> a
                business you can build, grow and pass on.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Location Guide for Mathura
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You can suggest your own site. Our team checks population,
                purchasing capacity and local demand before approval.
              </li>
              <li>
                Larger formats do well on main roads and busy market areas with
                parking.
              </li>
              <li>
                Mini Mart formats suit residential colonies and neighbourhood
                lanes.
              </li>
              <li>
                Owned and rented premises are both accepted with ownership or
                rental agreement proof.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents Required
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>ID proof: Aadhaar, PAN or Voter ID.</li>
              <li>
                Certificate of highest education: 10th, 12th, graduate or
                post-graduate.
              </li>
              <li>Bank details: cancelled cheque or passbook copy.</li>
              <li>
                Proposed store property documents: ownership or rental
                agreement.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Get Started
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Step 1, Inquiry:</span> fill
                the inquiry form on thebuyzaarmart.com and get a quick response.
              </li>
              <li>
                <span className="font-semibold">
                  Step 2, Application and site survey:
                </span>{" "}
                submit the application. Our team surveys and approves the site.
              </li>
              <li>
                <span className="font-semibold">Step 3, Agreement:</span>{" "}
                review and sign the franchise agreement with compliance support.
              </li>
              <li>
                <span className="font-semibold">Step 4, Launch:</span> store
                setup, franchise kit handover, launch strategy and local
                marketing.
              </li>
            </ul>

            
            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FAQs
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  1. How much does a supermarket franchise in Mathura cost?
                </h3>
                <p className="mt-2">
                  A Mini Mart (600-1000 sq ft) typically needs ₹15-20 lakh.
                  Larger formats cost more based on size and layout.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  2. Which store sizes are available?
                </h3>
                <p className="mt-2">
                  Mini Mart is 600-1000 sq ft, Super Mart is 1000-3000 sq ft,
                  and Hyper Mart is 3000-8000 sq ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  3. What margin can I expect?
                </h3>
                <p className="mt-2">
                  An effective gross margin of 18-20%, depending on location,
                  size and sales volume.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  4. Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No. We provide training, billing software and ongoing
                  operational support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  5. What is the FOCO model?
                </h3>
                <p className="mt-2">
                  You provide capital and space, and the company runs
                  operations. It needs at least 2,000 sq ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  6. Can I suggest my own location?
                </h3>
                <p className="mt-2">
                  Yes. Our team checks population, purchasing capacity and local
                  demand before approval.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  7. What about expired or damaged stock?
                </h3>
                <p className="mt-2">
                  We take back expired and damaged goods under our inventory
                  assurance.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  8. How do I apply?
                </h3>
                <p className="mt-2">
                  Submit the inquiry, complete the application, get site
                  approval, sign the agreement and launch.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Apply for Your Supermarket Franchise Today
              </h2>

              <p className="mb-4 text-gray-800">
                Start a supermarket franchise in Mathura with The Buyzaar Mart
                and receive complete support with setup, POS, stock, training,
                marketing and operations.
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
                  +91 9217991727
                </a>
              </p>

              <p className="mb-4 text-gray-800">
                <span className="font-semibold">Business Hours:</span>{" "}
                Monday to Saturday, 09:00 AM-07:00 PM
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Corporate Office:</span>{" "}
                D-43, Third Floor, Sector-6, Noida-201301.
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="mathura"
            currentSlug="/mathura/supermarket-franchise-opportunity-mathura"
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