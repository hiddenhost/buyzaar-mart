import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mart Franchise Opportunity in Aligarh | The Buyzaar Mart",
  description:
    "Explore mart franchise opportunity in Aligarh with The Buyzaar Mart. Choose Mini, Super or Hyper Mart from ₹15 lakh with FOCM model and full support. Apply now.",
  url: "https://www.thebuyzaarmart.com/aligarh/mart-franchise-opportunity-aligarh",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aligarh",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Aligarh",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Formats in Aligarh",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Entry-level mart franchise format for colony lanes, society shops and ground-floor units in Aligarh, covering 600–1000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Mid-size mart franchise format for main market roads, colony chowks and busy residential stretches in Aligarh, covering 1000–3000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Large mart franchise format for high-traffic commercial roads and premium residential zones in Aligarh, covering 3000–8000 sq ft.",
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
      name: "What is a mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is a branded retail store run under an established supermarket system. You get the brand, setup, supply chain and software while operating under agreed standards.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a mart franchise cost in Aligarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart typically costs ₹15–20 lakh. Super Mart and Hyper Mart require more, depending on size and location.",
      },
    },
    {
      "@type": "Question",
      name: "Which mart format should I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pick by space: Mini Mart for 600–1000 sq ft, Super Mart for 1000–3000 sq ft, and Hyper Mart for 3000–8000 sq ft.",
      },
    },
    {
      "@type": "Question",
      name: "What margin can I expect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Franchise partners can expect an average margin of 18–20%. It varies with location, size and sales volume.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Training, billing software and ongoing operational support are provided. Under FOCM, the company team runs the store.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my own shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your shop must have at least 600 sq ft of carpet area and pass the team’s site survey.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to expired stock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Buyzaar Mart takes back expired and damaged goods under its inventory assurance, which protects your margins.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill the enquiry form on thebuyzaarmart.com or call 9217991727. The team will guide you through the next steps.",
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
              Mart Franchise Opportunity in Aligarh with The Buyzaar Mart
            </h1>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart gives Aligarh entrepreneurs a ready retail system for running a neighbourhood supermarket. You get the brand, store design, supply chain and software together instead of building them yourself.
              </li>
              <li>
                Three formats are available: Mini Mart, Super Mart and Hyper Mart. Each one is built for a different shop size, so you can start at a level that matches your space and budget.
              </li>
              <li>
                The Mini Mart starts from ₹15 lakh. The FOCM model lets you own the store while the company team manages daily operations.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Makes a Mart Franchise Work in Aligarh
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Aligarh has dense residential colonies where families shop for daily needs close to home. A well-run neighbourhood mart earns repeat visits from the same households every week.
              </li>
              <li>
                Students, faculty and staff linked to Aligarh Muslim University create steady demand around campus-facing areas. Snacks, beverages, personal care and household basics sell throughout the year.
              </li>
              <li>
                Many families in the city come from trading and hardware businesses with regular incomes. Their monthly grocery budgets are predictable, which helps stable store revenue.
              </li>
              <li>
                Most shopping still happens at small unorganised shops. A clean mart with fixed pricing, proper billing and full shelves offers a clear upgrade.
              </li>
              <li>
                Festival and wedding seasons add extra sales on top of daily demand. Eid, Diwali and Holi bring strong buying in beverages, packaged foods and gift items.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How the Buyzaar Mart Ownership Model Works
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                FOCM stands for Franchise Owned, Company Managed. You invest in the store and hold the franchise rights, and the operations team runs the business.
              </li>
              <li>
                The company handles staff hiring, inventory, supply chain, billing systems and store standards. You are not expected to manage shifts, orders or stock counts personally.
              </li>
              <li>
                The franchise agreement runs for 5 years with defined terms and responsibilities. Both sides know their roles, which keeps the partnership clear.
              </li>
              <li>
                You secure the premises and pay its rent. The Buyzaar Mart helps with site selection guidance so the location suits the format.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing the Right Mart Format
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600–1000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Best for colony lanes, society shops and ground-floor units with steady footfall. It is the lowest-cost entry, typically between ₹15 lakh and ₹20 lakh.
              </li>
              <li>
                The range covers grocery and staples, snacks and biscuits, beverages, personal care, homecare and hygiene, and stationery. These are the items families buy most often.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart (1000–3000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Suited to main market roads, colony chowks and busy residential stretches. It draws customers from a wider catchment than a Mini Mart.
              </li>
              <li>
                Dairy items and fruits and vegetables join the Mini Mart range. Fresh categories bring people in daily and increase the size of each bill.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3000–8000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Built for high-traffic commercial roads and premium residential zones. It delivers the highest revenue potential among the three formats.
              </li>
              <li>
                Gifts and toys and frozen ready-to-eat items complete the range. Families can finish a full shopping trip under one roof.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Space and Store Readiness Checklist
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A minimum of 600 sq ft of carpet area is required. Smaller spaces cannot support the product range and shelving that the brand standard needs.
              </li>
              <li>
                Ground-floor shops with a clear frontage and easy access work best. Visibility from the road helps new customers find the store quickly.
              </li>
              <li>
                Owned and rented premises are both accepted. A rent agreement or ownership paper must be submitted with the application as property proof.
              </li>
              <li>
                Final approval follows a site survey by the Buyzaar Mart team. Population, purchasing capacity and local demand are checked before work begins.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment Structure and Margin
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Total Mini Mart investment typically sits between ₹15 lakh and ₹20 lakh. Store size, interior work and location decide where your cost lands in that range.
              </li>
              <li>
                The investment covers stock, interior, software fee, franchise fee (including 18% GST) and security deposit. The calculator on the franchise page shows an estimate for your chosen format and area.
              </li>
              <li>
                Franchise partners can expect an average margin of 18% to 20%. The actual figure depends on location, store size and sales volume.
              </li>
              <li>
                Commercial rents in Aligarh are lower than in Delhi-NCR, which stretches your budget further. Owning the property reduces recurring costs even more.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Product Categories and Customer Needs
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Grocery and staples form the core, including rice, flour, pulses, sugar, oils and spices. These are bought regularly and anchor your monthly sales.
              </li>
              <li>
                Packaged snacks, biscuits and beverages come from established brands. Partners include HUL, ITC, Nestle, Parle, Britannia, Dabur, Tata Consumer and Marico.
              </li>
              <li>
                Personal care and homecare items such as soaps, shampoos and detergents bring repeat purchases. Customers return for these every few weeks.
              </li>
              <li>
                Product mix is adjusted for local preferences. Your first stock order reflects what Aligarh households in your catchment actually buy.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Technology and Daily Operations
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A POS-enabled billing system is installed before launch. It gives accurate bills, fast checkout and a clean record of every sale.
              </li>
              <li>
                Inventory is tracked in real time so you can see what is selling and what is slow. Smart stocking reduces dead stock and keeps shelves organised.
              </li>
              <li>
                A CRM tool helps the store build lasting customer relationships. Regular shoppers can be tracked, rewarded and brought back with offers.
              </li>
              <li>
                Supply chain is managed with regular replenishment from manufacturer-linked sources. Expired and damaged goods are taken back under the brand’s inventory assurance.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Launch and Marketing Support
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Store design, shelving, signage and lighting are set up to one uniform brand standard. Your Aligarh outlet looks like every other Buyzaar Mart from day one.
              </li>
              <li>
                Staff are recruited and trained before opening. Training covers billing, inventory handling, customer service and store cleanliness.
              </li>
              <li>
                A distinctive launch strategy builds local visibility quickly. Hyperlocal campaigns and promotions are planned for your specific neighbourhood.
              </li>
              <li>
                Customer acquisition support continues after launch. Marketing material, social media activity and local brand building help you grow footfall month by month.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Best Areas in Aligarh for a Mart Franchise
            </h2>

            <h3 className="font-medium text-gray-900">
              Residential Neighbourhoods
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Colonies such as Sir Syed Nagar, Civil Lines, Dodhpur and Jamalpur have dense housing and regular daily footfall. Mini Mart suits colony lanes in these areas.
              </li>
              <li>
                Streets near the university and student housing zones suit quick-purchase categories. Snacks, drinks and personal care sell well here.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Market Roads and Highway Belts
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Roads like Ramghat Road, Marris Road, Medical Road and Agra Road carry heavy traffic and visibility. Super Mart works well on these stretches.
              </li>
              <li>
                Larger plots with parking along main roads can support a Hyper Mart. Wide catchments and bigger baskets raise revenue potential.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Growing Colonies
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Newer colonies on the edges of the city often have no organised store nearby. Opening early lets you become the default neighbourhood supermarket.
              </li>
              <li>
                You can propose your own location. The team will assess it before giving final approval.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Application Process and Documents
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Submit an enquiry on thebuyzaarmart.com or call the team. A call or meeting explains the model, formats and investment in detail.
              </li>
              <li>
                Complete the franchise application form with personal, identity, bank and store location details. Your proposed site is then surveyed.
              </li>
              <li>
                Documents needed are an ID proof (Aadhaar, PAN or Voter ID), highest education certificate, cancelled cheque or passbook copy, and property documents.
              </li>
              <li>
                After site approval, you sign the franchise agreement and make the payment. KYC and compliance support is provided at each step.
              </li>
              <li>
                Store setup and franchise kit handover follow. Launch typically happens within 60 to 90 days of the agreement.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Brand Credibility
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart runs stores in Kanpur, Noida, Gangoh, Saharanpur and Haridwar. A new store in Ghaziabad is opening soon.
              </li>
              <li>
                The business is FSSAI licensed, GST registered and MSME certified. Fair pricing, transparency and reliable supply are the brand’s core pillars.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What is a mart franchise?
                </h3>
                <p className="mt-2">
                  It is a branded retail store run under an established supermarket system. You get the brand, setup, supply chain and software while operating under agreed standards.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How much does a mart franchise cost in Aligarh?
                </h3>
                <p className="mt-2">
                  A Mini Mart typically costs ₹15–20 lakh. Super Mart and Hyper Mart require more, depending on size and location.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Which mart format should I choose?
                </h3>
                <p className="mt-2">
                  Pick by space: Mini Mart for 600–1000 sq ft, Super Mart for 1000–3000 sq ft, and Hyper Mart for 3000–8000 sq ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What margin can I expect?
                </h3>
                <p className="mt-2">
                  Franchise partners can expect an average margin of 18–20%. It varies with location, size and sales volume.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No. Training, billing software and ongoing operational support are provided. Under FOCM, the company team runs the store.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Can I use my own shop?
                </h3>
                <p className="mt-2">
                  Yes. Your shop must have at least 600 sq ft of carpet area and pass the team’s site survey.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What happens to expired stock?
                </h3>
                <p className="mt-2">
                  The Buyzaar Mart takes back expired and damaged goods under its inventory assurance, which protects your margins.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How do I apply?
                </h3>
                <p className="mt-2">
                  Fill the enquiry form on thebuyzaarmart.com or call 9217991727. The team will guide you through the next steps.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Mart Franchise Journey in Aligarh
              </h2>

              <p className="mb-4 text-gray-800">
                Aligarh offers a strong opportunity for a structured neighbourhood mart franchise.
              </p>

              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart network and choose the Mini, Super or Hyper Mart format that matches your space, budget and goals.
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
            city="aligarh"
            currentSlug="/aligarh/mart-franchise-opportunity-aligarh"
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