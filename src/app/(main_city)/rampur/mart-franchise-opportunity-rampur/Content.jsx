import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mart Franchise Opportunity in Rampur | Buyzaar Mart",
  description:
    "Explore a mart franchise opportunity in Rampur. See store features, brand pillars, POS billing, the ₹15-20 lakh Mini Mart investment and how to apply.",
  url: "https://www.thebuyzaarmart.com/rampur/mart-franchise-opportunity-rampur",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rampur",
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
          "A 600-1000 sq ft mart franchise format for first-time owners and residential neighbourhoods in Rampur, with a total investment of about ₹15 lakh to ₹20 lakh.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1000-3000 sq ft mart franchise format for busy roads and larger markets, adding dairy items and fruits and vegetables.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3000-8000 sq ft mart franchise format for large premises in high-footfall locations, adding gifts, toys and frozen ready-to-eat items.",
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
      name: "What is the total investment for a mart franchise in Rampur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart of 600-1000 sq ft needs about ₹15 lakh to ₹20 lakh in total, and larger formats cost more.",
      },
    },
    {
      "@type": "Question",
      name: "What features does a Buyzaar Mart store have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A wide product range, affordable pricing, POS billing, CRM tools, uniform branding and local product flexibility.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, training, billing software and ongoing support are provided.",
      },
    },
    {
      "@type": "Question",
      name: "What space is needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A minimum carpet area of 600 sq ft is required.",
      },
    },
    {
      "@type": "Question",
      name: "What margin can I expect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The model offers an effective gross margin of about 18% to 20%, depending on location and sales.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to expired stock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The company takes back expired and damaged goods.",
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
              Mart Franchise Opportunity in Rampur: Inside a Buyzaar Mart Store
            </h1>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              A Mart Franchise Opportunity in Rampur
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                A mart franchise opportunity lets you open a self-service neighbourhood store under an established brand, with a ready model for layout, stock, billing, training and marketing.
              </li>
              <li>
                Families in Rampur buy staples, snacks, beverages, personal care and home care items every week, which gives a mart steady daily demand.
              </li>
              <li>
                The Buyzaar Mart offers this opportunity under the idea of &quot;Your Friendly Neighborhood Store&quot;, with features designed for urban and semi-urban households.
              </li>
              <li>
                This guide takes you inside a Buyzaar Mart store, explaining its features, brand pillars, smart-retail systems and the role you play as an owner.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Rampur Is Ready for a Mart
            </h2>


            <h3 className="font-medium text-gray-900">Steady Household Demand</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Atta, rice, dal, oil, spices, soaps and cleaning products are bought again and again, so footfall continues through the year.
              </li>
              <li>
                Festivals such as Navratri, Diwali and Eid and wedding season raise basket size.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Room for Organised Retail</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Many neighbourhoods still depend on small shops with limited range and uneven pricing, so a branded mart stands out.
              </li>
              <li>
                Customers value clean shelves, clear price tags and proper bills.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">A Wider Catchment</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Shoppers from nearby towns such as Swar, Bilaspur, Milak and Shahabad often visit Rampur for larger shopping.
              </li>
              <li>
                Road links with Moradabad and Bareilly support smooth movement of goods and customers.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment for a Mart Franchise
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                The total investment for a Buyzaar Mart Mini Mart franchise (600-1000 sq ft) is about ₹15 lakh to ₹20 lakh.
              </li>
              <li>
                The exact amount depends on store size, layout, location and the format you choose, and larger formats need a higher total.
              </li>
              <li>
                Use the investment calculator on the franchise page to estimate your cost, and confirm the final total with the franchise team before signing.
              </li>
              <li>
                Keep working capital ready for rent, staff salaries and electricity, because the franchise owner pays these running costs under the FOCM model.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Inside a Buyzaar Mart: Store Features
            </h2>


            <h3 className="font-medium text-gray-900">Wide Product Range</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Daily-need items are available under one roof, so families can complete their shopping in a single visit.
              </li>
              <li>
                Categories include grocery and staples, snacks and biscuits, beverages, personal care, home care and hygiene and stationery.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Affordable Pricing</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The store follows a value-conscious pricing approach, so customers see fair prices on everyday products.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">POS-Enabled Billing</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Modern point-of-sale technology gives quick, accurate bills and tracks sales and stock.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Customer Relationship Management</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                CRM tools help you remember regular customers and build lasting relationships.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Uniform Branding and Store Design</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Consistent signage, layout and interiors give every store a professional identity that customers recognise.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Localised Product Flexibility</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The product mix can be adapted to local preferences, including festival and fasting items in Rampur.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Four Brand Pillars
            </h2>


            <h3 className="font-medium text-gray-900">Simplicity</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand takes the complexity out of retail operations such as handling, purchasing, inventory and supply chain.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Reliability</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Timely supply and transparent processes make the company a partner you can trust.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Affordability and Quality</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A curated range, fair pricing and consistent availability keep customers coming back.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Ownership and Legacy</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A store is treated as a family business that you can build, grow and pass on.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              From Chaos to Smart Retail
            </h2>


            <h3 className="font-medium text-gray-900">The Problem with Unorganised Stock</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Messy shelves, forgotten stock and expired items cause losses that owners often notice too late.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">The Smart Retail Approach</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Predict what is in demand, keep shelves organised and stock what matters.
              </li>
              <li>
                POS data shows fast and slow products, so ordering becomes a decision based on facts.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Better Results from Better Systems</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Organised inventory, clear display and regular audits help you sell more of what customers want.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Customer Experience in a Mart
            </h2>


            <h3 className="font-medium text-gray-900">Easy Shopping</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Wide aisles, clear signage and organised shelves help customers find products without asking for help.
              </li>
              <li>
                Self-service lets families compare brands, sizes and prices at their own pace.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Fair and Transparent Billing</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Clear price tags and POS bills build trust, because customers can see exactly what they pay for.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Friendly Service</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Trained staff greet customers, suggest products and solve problems quickly, which turns a first visit into a habit.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Convenience for Busy Families</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Everyday needs under one roof save time, and services such as phone ordering and home delivery make shopping easier for regular families.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats You Can Choose
            </h2>


            <h3 className="font-medium text-gray-900">Mini Mart (600-1000 sq ft)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A practical start for first-time owners and residential neighbourhoods.
              </li>
              <li>
                Covers personal care, beverages, grocery and staples, home care and hygiene, stationery, snacks and biscuits.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Super Mart (1000-3000 sq ft)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Suited to busy roads and larger markets where families shop for the month.
              </li>
              <li>
                Adds dairy items and fruits and vegetables.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Hyper Mart (3000-8000 sq ft)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Built for large premises in high-footfall locations.
              </li>
              <li>
                Adds gifts, toys and frozen ready-to-eat items.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How the Mart Franchise Model Works
            </h2>


            <h3 className="font-medium text-gray-900">Franchise Owned Company Managed</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                You own the outlet and invest in the setup, while the company manages branding, technology, training and performance systems.
              </li>
              <li>
                The term is five years, with renewal support at the end.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">What the Company Provides</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Location survey and approval, layout, interior design and branding setup.
              </li>
              <li>
                Franchise agreement support, legal documentation and onboarding formalities.
              </li>
              <li>
                Operating standards, opening stock recommendations, replenishment guidelines and pricing and product mix guidance.
              </li>
              <li>
                Initial training, audits, performance dashboards and marketing support.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">What You Provide</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Initial capital and a suitable shop space, owned or rented.
              </li>
              <li>
                Staff, daily management and customer service.
              </li>
              <li>
                Rent, salaries, electricity and other running costs, along with brand standards and monthly reporting.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Inventory Assurance
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Expired, unsold or damaged stock is a common worry for retail owners.
              </li>
              <li>
                The company takes back expired and damaged goods, so that you can focus on stocking and selling what matters.
              </li>
              <li>
                Opening stock recommendations and replenishment guidelines reduce the risk of overstocking slow items.
              </li>
              <li>
                Products are sourced directly from manufacturers, with logistics coordinated for timely delivery.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Brand Associations Customers Recognise
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart lists associations with leading consumer brands across food, beverages, personal care and household products.
              </li>
              <li>
                A familiar brand mix helps customers trust the quality and availability of products on your shelves.
              </li>
              <li>
                Strong supplier relationships support consistent stock and fair pricing.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Earning Potential
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart model states an effective gross margin of around 18% to 20%, depending on location, store size and sales volume.
              </li>
              <li>
                Gross margin is not net profit, because rent, salaries, electricity and wastage are paid from it.
              </li>
              <li>
                Results depend on location, stock availability, service quality and cost control, so no income is guaranteed.
              </li>
              <li>
                Judge performance over several months, since regular customers build gradually.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Your Role as a Mart Owner
            </h2>


            <h3 className="font-medium text-gray-900">Run the Store Daily</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Open on time, keep shelves full and clean, and make sure billing is quick and accurate.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Manage Your Team</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Train staff in polite service, product knowledge and POS billing, and set clear daily duties.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Watch the Numbers</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Review POS reports weekly to see fast and slow products, and follow monthly reporting rules.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Know Your Customers</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Use CRM tools and regular conversations to learn what local families need.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step Process to Start
            </h2>


            <h3 className="font-medium text-gray-900">Step 1: Inquiry</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Fill the inquiry form on thebuyzaarmart.com or call +91 9217991727.
              </li>
              <li>
                The team responds within 24 hours on working days.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 2: Application</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Complete the franchise application with identity, address, bank and store details.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 3: Site Survey and Approval</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company checks population, purchasing capacity and local demand before approving your location.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 4: Agreement</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Review the agreement, complete KYC and make the payment as agreed.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 5: Setup, Training and Launch</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The team plans layout, interiors and branding, trains you and your staff, and supports your grand opening.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents Required
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                ID proof such as Aadhaar, PAN or Voter ID.
              </li>
              <li>
                Educational certificate showing your highest qualification.
              </li>
              <li>
                Cancelled cheque or bank passbook copy.
              </li>
              <li>
                Ownership paper or rental agreement for the proposed store.
              </li>
              <li>
                GST registration, FSSAI licence or registration and local shop registration as required.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing a Location in Rampur
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Look near dense housing colonies, busy chowks, schools, hospitals or market clusters.
              </li>
              <li>
                Prefer a ground-floor shop with wide frontage, signboard space and easy two-wheeler parking.
              </li>
              <li>
                Compare monthly rent with realistic sales so that your margin stays healthy.
              </li>
              <li>
                Study nearby grocery stores and note where they are weak in range, billing or display.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Mission and Vision Behind the Brand
            </h2>


            <h3 className="font-medium text-gray-900">Mission</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                To empower communities through retail ownership, so that individuals can build dignified livelihoods by running neighbourhood stores that offer fairness, affordability and convenience.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Vision</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                To grow to multiple stores across India with a focus on transparency, accessibility and care.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Visit a Running Store
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart lists running stores in Kanpur, Noida, Gangoh, Saharanpur and Haridwar, with an upcoming store in Ghaziabad.
              </li>
              <li>
                A store visit helps you judge layout, display, billing and customer flow in person.
              </li>
              <li>
                Talk to the owner about support, supply and daily operations before you decide.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Common Mistakes to Avoid
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Choosing a low-footfall shop only because rent is lower.
              </li>
              <li>
                Ignoring working capital for rent, salaries and electricity.
              </li>
              <li>
                Overstocking slow items while fast sellers run out.
              </li>
              <li>
                Skipping staff training and brand standards.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand is FSSAI licensed, GST registered and MSME certified.
              </li>
              <li>
                No retail experience is needed, since training and ongoing support are included.
              </li>
              <li>
                Smart systems, stock take-back and uniform branding make the business simpler to run.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>


            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What is the total investment for a mart franchise in Rampur?
                </h3>
                <p className="mt-2">
                  A Mini Mart of 600-1000 sq ft needs about ₹15 lakh to ₹20 lakh in total, and larger formats cost more.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  What features does a Buyzaar Mart store have?
                </h3>
                <p className="mt-2">
                  A wide product range, affordable pricing, POS billing, CRM tools, uniform branding and local product flexibility.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No, training, billing software and ongoing support are provided.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  What space is needed?
                </h3>
                <p className="mt-2">
                  A minimum carpet area of 600 sq ft is required.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  What margin can I expect?
                </h3>
                <p className="mt-2">
                  The model offers an effective gross margin of about 18% to 20%, depending on location and sales.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  What happens to expired stock?
                </h3>
                <p className="mt-2">
                  The company takes back expired and damaged goods.
                </p>
              </div>
            </div>


            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Mart Franchise Opportunity in Rampur
              </h2>


              <p className="mb-4 text-gray-800">
                Rampur’s steady daily-need demand offers a practical opportunity to open a branded neighbourhood mart.
              </p>


              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart franchise network and build a store supported by POS billing, training, inventory assurance and launch marketing.
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
            currentSlug="/rampur/mart-franchise-opportunity-rampur"
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