import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mart Franchise Opportunity in Mathura | The Buyzaar Mart",
  description:
    "Open a Mini, Super or Hyper Mart franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with POS, training and full support.",
  url: "https://www.thebuyzaarmart.com/mathura/mart-franchise-opportunity-mathura",
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
    name: "The Buyzaar Mart Formats in Mathura",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600-1000 sq ft mart franchise format for residential colonies and neighbourhood markets in Mathura.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1000-3000 sq ft mart franchise format for busy markets and larger residential catchments in Mathura.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3000-8000 sq ft mart franchise format for main roads and areas with a large customer base in Mathura.",
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
      name: "How much does a mart franchise in Mathura cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart of 600-1000 sq ft typically needs ₹15-20 lakh, depending on size, layout and location.",
      },
    },
    {
      "@type": "Question",
      name: "Which mart formats are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The available formats are Mini Mart of 600-1000 sq ft, Super Mart of 1000-3000 sq ft and Hyper Mart of 3000-8000 sq ft.",
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
      name: "Can I suggest my own location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Buyzaar Mart team checks population, purchasing capacity and local demand before approval.",
      },
    },
    {
      "@type": "Question",
      name: "What is the FOCM model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You own the outlet and invest in setup. Buyzaar Mart manages operations, branding, technology and training.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to expired or damaged stock?",
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
              Mart Franchise Opportunity in Mathura with The Buyzaar Mart
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Open Your Own Mart in Mathura
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Looking for a mart franchise opportunity in Mathura? The
                Buyzaar Mart lets you run a branded neighbourhood mart with a
                proven model behind you.
              </li>
              <li>
                Choose from three formats: Mini Mart, Super Mart and Hyper Mart,
                based on your space and budget.
              </li>
              <li>
                Investment starts from ₹15 lakh for a Mini Mart, with an
                effective gross margin of 18-20% depending on location, size and
                sales volume.
              </li>
              <li>
                You get store design, POS billing, supply chain, marketing and
                training support from day one.
              </li>
              <li>
                No retail experience is required. Our team guides you from
                inquiry to launch.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why a Mart Franchise Makes Sense in Mathura
            </h2>

            <h3 className="font-medium text-gray-900">
              Everyday Needs, Every Day
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Households in Mathura need groceries, snacks, beverages,
                personal care and cleaning products throughout the year.
              </li>
              <li>
                A mart sells products people buy repeatedly, so customers
                return again and again.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Local and Visitor Demand
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Mathura and nearby Vrindavan see visitors through the year,
                which adds demand for packaged food, drinks and travel
                essentials.
              </li>
              <li>
                A mart on a busy road can serve both residents and travellers.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Organised Retail Is Preferred
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Customers want clean aisles, clear pricing, branded products and
                digital billing.
              </li>
              <li>
                A branded mart meets these expectations better than an
                unplanned shop.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Room to Grow</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Expanding colonies need convenient stores within walking
                distance.
              </li>
              <li>
                You can start with a Mini Mart and later think about larger
                formats.
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
                The brand is FSSAI licensed, GST registered and MSME certified.
              </li>
              <li>
                We work with trusted brands such as HUL, ITC, Nestle, Parle,
                Dabur, Tata Consumer and Britannia.
              </li>
              <li>
                Our pillars are Simplicity, Reliability, Affordability &amp;
                Quality, and Ownership &amp; Legacy.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choose Your Mart Format
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart: 600-1000 sq ft
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ideal for residential colonies and neighbourhood markets.
              </li>
              <li>
                Categories: personal care, beverages, grocery and staples,
                homecare and hygiene, stationery, snacks and biscuits.
              </li>
              <li>
                Total investment typically ranges from ₹15 lakh to ₹20 lakh,
                depending on size, layout and site work.
              </li>
              <li>
                A good first step for first-time business owners.
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
                Includes all Mini Mart categories plus dairy items and fruits
                and vegetables.
              </li>
              <li>
                Offers a wider choice, so customers can complete more of their
                shopping in one visit.
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
                Creates a complete one-stop shopping experience for families.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Pick the Right Format
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Match the format to the space you own or can rent, with a
                minimum of 600 sq ft carpet area.
              </li>
              <li>
                Check the surrounding population and purchasing capacity of your
                area.
              </li>
              <li>
                Use our investment calculator to compare the cost of each
                format.
              </li>
              <li>
                Talk to our team to confirm the best fit for your budget.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment Breakdown
            </h2>

            <h3 className="font-medium text-gray-900">
              What the Investment Includes
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Stock, interior, software fee, franchise fee including 18% GST
                and security deposit.
              </li>
              <li>
                The calculator on our franchise page shows an estimate for your
                chosen store type and area.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Monthly Costs to Plan
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Under the FOCM model, rent, staff salaries, electricity and
                other store expenses are paid by the franchisee.
              </li>
              <li>Keep working capital ready for the first few months.</li>
              <li>
                Exact figures are confirmed after the site survey.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Returns You Can Aim For
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Effective gross margin of 18-20% across the mart range.
              </li>
              <li>
                Actual returns depend on location, size, footfall and monthly
                sales.
              </li>
              <li>
                Daily-need products keep billing steady through the year.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Two Ways to Own a Mart
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
                Designed for investors who want a hands-off mart, with a
                minimum store size of 2,000 sq ft.
              </li>
              <li>
                You provide the capital and the space. The company manages
                staff, electricity, marketing and operations.
              </li>
              <li>
                The investor earns about 10% revenue share on monthly sales
                under a 10-year agreement.
              </li>
              <li>
                Please confirm current terms with our team before deciding.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How a Buyzaar Mart Runs Smoothly
            </h2>

            <h3 className="font-medium text-gray-900">Smart Store Layout</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Aisles are planned for easy movement and quick product
                discovery.
              </li>
              <li>
                Uniform signage and design give every outlet the same trusted
                look.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              POS-Enabled Billing
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Modern point-of-sale technology speeds up billing at the
                counter.
              </li>
              <li>
                Sales and inventory data stay tracked in one place.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              CRM for Repeat Customers
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Customer data helps you understand buying habits.
              </li>
              <li>
                You can plan offers that bring regular shoppers back.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Localised Product Mix
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The range is adapted to local preferences and festivals.
              </li>
              <li>
                Our team suggests pricing and product mix suited to your
                neighbourhood.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Complete Franchise Support
            </h2>

            <h3 className="font-medium text-gray-900">Pre-Launch</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>Site selection assistance and location survey.</li>
              <li>KYC, legal documentation and agreement support.</li>
              <li>
                Interior design, branding and store assets setup.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Supply Chain and Stock
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Opening stock recommendations and replenishment guidelines.
              </li>
              <li>Quality products sourced directly from manufacturers.</li>
              <li>
                Automated supply chain management for timely delivery.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Marketing and Growth
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Store launch strategy and hyper-local campaigns.
              </li>
              <li>
                Digital marketing, brand materials and local promotions.
              </li>
              <li>Customer acquisition support.</li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Training and Audits
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Initial training for you and your staff on operations, POS and
                customer service.
              </li>
              <li>
                Regular operational and quality audits with performance
                dashboards and KPIs.
              </li>
              <li>A dedicated support team for technical help.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Hassle-Free Inventory Assurance
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                We take back expired and damaged goods, so unsold stock worries
                stay low.
              </li>
              <li>
                This protects your margin and keeps your shelves fresh.
              </li>
              <li>
                You can focus on selling and serving customers.
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
                <span className="font-semibold">Family legacy:</span> a store
                you can build, grow and pass on.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Location Guide for Your Mathura Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You can suggest your own site. Our team checks population,
                purchasing capacity and local demand before approval.
              </li>
              <li>
                Good options include residential colonies, roads near schools
                and hospitals, and busy market streets.
              </li>
              <li>
                Look for visibility, easy access and parking space.
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
              Steps to Open Your Mart
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
                review and sign the franchise agreement with complete compliance
                support.
              </li>
              <li>
                <span className="font-semibold">
                  Step 4, Setup and launch:
                </span>{" "}
                store setup, franchise kit handover, launch strategy and local
                marketing.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Can Apply
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                First-time entrepreneurs looking for a lower-risk business.
              </li>
              <li>
                Existing kirana or general store owners who want a branded
                format.
              </li>
              <li>
                Property owners who want regular income from their space.
              </li>
              <li>
                Investors who prefer professionally managed operations.
              </li>
              <li>Families who want a business to pass on.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips for a Successful Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Keep fast-moving products always in stock.</li>
              <li>
                Follow replenishment guidance to avoid overstocking.
              </li>
              <li>
                Train staff in polite service and clean merchandising.
              </li>
              <li>Use POS and CRM data to improve offers.</li>
              <li>
                Run local launch promotions to bring neighbours in.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Apply for Your Mathura Mart Franchise Today
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Call{" "}
                <a
                  href="tel:+919217991727"
                  className="text-green-600 hover:underline"
                >
                  +91 9217991727
                </a>{" "}
                (Mon-Sat, 9:00 AM-7:00 PM).
              </li>
              <li>
                Email{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
                . We reply within 24 hours.
              </li>
              <li>
                Visit thebuyzaarmart.com to fill the inquiry form or download
                the brochure.
              </li>
              <li>
                Corporate office: D-43, Third Floor, Sector-6, Noida-201301.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FAQs
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  1. How much does a mart franchise in Mathura cost?
                </h3>
                <p className="mt-2">
                  A Mini Mart (600-1000 sq ft) typically needs ₹15-20 lakh,
                  depending on size, layout and location.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  2. Which mart formats are available?
                </h3>
                <p className="mt-2">
                  Mini Mart (600-1000 sq ft), Super Mart (1000-3000 sq ft) and
                  Hyper Mart (3000-8000 sq ft).
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
                  5. Can I suggest my own location?
                </h3>
                <p className="mt-2">
                  Yes. Our team checks population, purchasing capacity and
                  local demand before approval.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  6. What is the FOCM model?
                </h3>
                <p className="mt-2">
                  You own the outlet and invest in setup. Buyzaar Mart manages
                  operations, branding, technology and training.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  7. What happens to expired or damaged stock?
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
                Apply for Your Mathura Mart Franchise Today
              </h2>

              <p className="mb-4 text-gray-800">
                Open a Mini, Super or Hyper Mart in Mathura with The Buyzaar
                Mart and receive complete setup, technology, training and
                operational support.
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
            currentSlug="/mathura/mart-franchise-opportunity-mathura"
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