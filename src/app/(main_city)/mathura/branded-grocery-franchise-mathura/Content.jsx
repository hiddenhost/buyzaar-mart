import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Branded Grocery Franchise in Mathura | The Buyzaar Mart",
  description:
    "Start a branded grocery franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with brand support, POS and training.",
  url: "https://www.thebuyzaarmart.com/mathura/branded-grocery-franchise-mathura",
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
    name: "The Buyzaar Mart Branded Grocery Formats in Mathura",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600-1000 sq ft branded grocery franchise format for residential colonies and neighbourhood markets in Mathura.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1000-3000 sq ft branded grocery franchise format for busy markets and larger residential catchments in Mathura.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3000-8000 sq ft branded grocery franchise format for main roads and areas with a large customer base in Mathura.",
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
      name: "What is a branded grocery franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A grocery store run under an established brand name, with standard design, systems and support.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost in Mathura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart of 600-1000 sq ft typically needs ₹15-20 lakh, depending on size, layout and location.",
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
      name: "What brand support do I get?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Support includes store design, branding setup, launch strategy, local marketing and regular brand reviews.",
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
              Branded Grocery Franchise in Mathura with The Buyzaar Mart
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Start a Branded Grocery Store in Mathura
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Looking for a branded grocery franchise in Mathura? The
                Buyzaar Mart lets you open a store under a recognised brand name
                instead of building trust from zero.
              </li>
              <li>
                A brand brings a ready identity, a clear promise, standard
                quality and marketing support from the start, helping you begin
                with a more professional retail presence.
              </li>
              <li>
                Investment starts from ₹15 lakh for a Mini Mart, with an
                effective gross margin of 18-20% depending on location, size and
                sales volume.
              </li>
              <li>
                No retail experience is needed. Training, POS billing and
                ongoing support come with your franchise.
              </li>
              <li>
                Customers know us as &quot;Your Friendly Neighborhood Store,&quot;
                a brand focused on fair pricing, convenience and dependable
                daily shopping.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why a Branded Grocery Franchise Beats Going Alone
            </h2>

            <h3 className="font-medium text-gray-900">
              Instant Customer Trust
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Shoppers prefer stores with a known name, visible signage and
                consistent standards across products, billing and customer
                service.
              </li>
              <li>
                A brand reduces the time it takes to win a new customer&apos;s
                confidence because the store already presents a familiar and
                organised identity.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Less Risk for First-Time Owners
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You follow a tested model instead of experimenting with layouts,
                pricing, suppliers and product categories on your own.
              </li>
              <li>
                Support from our team helps you avoid common early mistakes in
                store setup, inventory planning and everyday operations.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Stronger Local Visibility
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Our store launch strategy aims for rapid local visibility and
                helps introduce your new outlet to nearby households.
              </li>
              <li>
                Hyper-local marketing campaigns are tailored for every
                franchise location so your store can connect with its specific
                neighbourhood.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Better Supplier Access
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Quality products are sourced directly from manufacturers,
                helping maintain dependable quality and competitive pricing.
              </li>
              <li>
                Brand partnerships help keep popular products available on your
                shelves and reduce avoidable stock gaps.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Mathura Is a Good Fit for Branded Grocery
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Households in Mathura buy groceries, snacks, beverages and
                cleaning products every week, creating regular demand for daily
                essentials.
              </li>
              <li>
                Visitors to Mathura and nearby Vrindavan throughout the year add
                demand for packaged food, drinks and other convenient products.
              </li>
              <li>
                Customers increasingly look for clean stores, clear pricing and
                trusted brands when they shop for household requirements.
              </li>
              <li>
                New colonies and growing neighbourhoods need convenient stores
                close to home for both small top-up purchases and monthly
                shopping.
              </li>
              <li>
                A branded mart gives families the confidence to shop for
                monthly needs in one place with a wider and more reliable
                product range.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              About The Buyzaar Mart Brand
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart is a supermarket and grocery franchise network
                built on value, trust and day-to-day demand.
              </li>
              <li>
                Our brand line is &quot;अपना बाजार - बचत का साथ, Quality की बात.&quot;
              </li>
              <li>
                Running stores include Kanpur, Noida, Gangoh, Saharanpur and
                Haridwar, with Ghaziabad opening soon.
              </li>
              <li>
                We are FSSAI licensed, GST registered and MSME certified.
              </li>
              <li>
                Our mission is to empower communities through retail ownership,
                with fairness, affordability and convenience.
              </li>
              <li>
                Our vision is to open multiple stores across India with
                transparency, accessibility and care.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Our Brand Pillars
            </h2>

            <h3 className="font-medium text-gray-900">Simplicity</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                We take the complexity out of handling, purchasing, inventory
                and supply chain so franchise partners can follow a clear
                operating process.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Reliability</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Timely supply, transparent processes and dependable assistance
                give you a partner you can trust while building your store.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Affordability and Quality
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A curated range, fair pricing and consistent availability help
                your store serve everyday household needs effectively.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Ownership and Legacy
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A store is a family business that you can build, grow and pass
                on to the next generation as a lasting business asset.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Trusted Brands on Your Shelves
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Our brand associations include Adani Wilmar, Britannia, Cadbury,
                Coca Cola, Dabur, Godrej, HUL, ITC and Marico.
              </li>
              <li>
                You will also find Mondelez India, Nestle, Parle, Patanjali,
                Saffola, Tata Consumer, Wipro and Yoga Bar in our partner list.
              </li>
              <li>
                Familiar names bring customers into the store and encourage
                repeat purchases by giving shoppers confidence in product
                quality.
              </li>
              <li>
                A wide range of daily-need items sits under one roof at
                affordable pricing, making the store convenient for regular
                household shopping.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Branded Grocery Formats
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart: 600-1000 sq ft
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ideal for residential colonies and neighbourhood markets where
                customers need a convenient nearby grocery store.
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
                Suits busy markets and larger residential catchments with
                stronger daily customer movement.
              </li>
              <li>
                Adds dairy items and fruits and vegetables to the Mini Mart
                range, supporting larger and more frequent shopping baskets.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart: 3000-8000 sq ft
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Suits main roads and areas with a large customer base and high
                potential for one-stop shopping.
              </li>
              <li>
                Adds gifts, toys and frozen ready-to-eat items for a complete
                one-stop experience.
              </li>
            </ul>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Every format needs a minimum of 600 sq ft carpet area.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How We Keep the Brand Consistent
            </h2>

            <h3 className="font-medium text-gray-900">
              Uniform Store Design
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Store layout, interior design and branding setup are handled by
                our team to create a professional shopping environment.
              </li>
              <li>
                Every outlet carries the same look, so customers recognise it
                instantly across different locations.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Brand Standards</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Signage, uniforms and merchandising follow clear brand
                guidelines for a consistent customer experience.
              </li>
              <li>
                Periodic reviews maintain brand identity and help ensure that
                store presentation remains professional.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Licensed Brand Use
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Franchisees receive licensed use of The Buyzaar Mart
                trademarks, logos and brand identity according to the franchise
                terms.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Audits and KPIs</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Regular operational and quality audits are carried out at
                franchise locations.
              </li>
              <li>
                Performance dashboards track sales, inventory and customer
                satisfaction.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Marketing and Brand Promotion Support
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Launch strategy and local campaigns build early awareness in
                your area and introduce the store to nearby customers.
              </li>
              <li>
                Social media marketing, promotional materials and local brand
                building support your store&apos;s visibility.
              </li>
              <li>
                Digital marketing strategies support your store throughout the
                year, not only during the opening period.
              </li>
              <li>
                Our team helps you plan and run local promotions and launch
                events suited to your neighbourhood.
              </li>
              <li>
                Customer acquisition support and CRM tools help you win and
                retain shoppers through repeat visits.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Models
            </h2>

            <h3 className="font-medium text-gray-900">
              FOCM: Franchise Owned Company Managed
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>You own the outlet and invest in the setup.</li>
              <li>
                Buyzaar Mart manages operations, branding, technology, training
                and performance systems.
              </li>
              <li>
                The company provides structured support so you can operate
                under a recognised brand system.
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
                Built for investors who want a hands-off business, with a
                minimum store size of 2,000 sq ft.
              </li>
              <li>
                You provide the capital and space. The company manages staff,
                electricity, marketing and operations.
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
              Investment and Returns
            </h2>

            <h3 className="font-medium text-gray-900">
              What You Invest In
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Stock, interior, software fee, franchise fee including 18% GST
                and security deposit.
              </li>
              <li>
                The calculator on our franchise page helps you estimate the
                cost for your store type and area.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Ongoing Costs</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Under FOCM, rent, staff salaries, electricity and other expenses
                are paid by the franchisee.
              </li>
              <li>
                Keep working capital ready for the first few months of
                operation so the store can run smoothly during its early stage.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Earning Potential</h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Effective gross margin of 18-20% is possible.
              </li>
              <li>
                Actual results depend on location, size, footfall and monthly
                sales.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Operations and Supply Chain Support
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Opening stock recommendations and replenishment guidelines help
                you begin with a suitable product mix.
              </li>
              <li>
                Procurement systems and logistics coordination support timely
                delivery and regular shelf availability.
              </li>
              <li>
                POS-enabled billing supports sales tracking and inventory
                control from the beginning.
              </li>
              <li>
                Pricing and product mix strategies are suited to local customer
                needs and buying patterns.
              </li>
              <li>
                Initial training is provided for you and your staff, along with
                ongoing technical help.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Hassle-Free Inventory Assurance
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                We take back expired and damaged goods under the inventory
                assurance process.
              </li>
              <li>
                This protects your margin and keeps shelves fresh for your
                customers.
              </li>
              <li>
                You can focus on selling and serving your customers instead of
                spending time managing stock-related concerns.
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
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Location and Documents
            </h2>

            <h3 className="font-medium text-gray-900">
              Choosing Your Location
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You can suggest your own site. Our team checks population,
                purchasing capacity and local demand before approval.
              </li>
              <li>
                Residential colonies, school and hospital roads and busy market
                streets are strong options.
              </li>
              <li>
                Owned and rented premises are both accepted with proof.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Documents Required
            </h3>

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
                the inquiry form on thebuyzaarmart.com.
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
                  1. What is a branded grocery franchise?
                </h3>
                <p className="mt-2">
                  A grocery store run under an established brand name, with
                  standard design, systems and support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  2. How much does it cost in Mathura?
                </h3>
                <p className="mt-2">
                  A Mini Mart (600-1000 sq ft) typically needs ₹15-20 lakh,
                  depending on size, layout and location.
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
                  5. What brand support do I get?
                </h3>
                <p className="mt-2">
                  Store design, branding setup, launch strategy, local
                  marketing and regular brand reviews.
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
                Apply for Your Mathura Franchise Today
              </h2>

              <p className="mb-4 text-gray-800">
                Start a branded grocery franchise in Mathura with The Buyzaar
                Mart and receive brand support, POS technology, training,
                marketing and operational assistance.
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
            currentSlug="/mathura/branded-grocery-franchise-mathura"
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
