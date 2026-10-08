import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Retail Franchise Opportunity in Gorakhpur | The Buyzaar Mart",
  description:
    "Explore a retail franchise opportunity in Gorakhpur with The Buyzaar Mart. Open a Mini, Super or Hyper Mart from ₹15 Lakh with full support. Apply today!",
  url: "https://www.thebuyzaarmart.com/gorakhpur/retail-franchise-opportunity-gorakhpur",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gorakhpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Gorakhpur",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Retail Franchise Formats in Gorakhpur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600 to 1,000 sq. ft. retail store format for residential colonies and smaller commercial areas in Gorakhpur.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1,000 to 3,000 sq. ft. supermarket format for main markets and busy community zones in Gorakhpur.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3,000 to 8,000 sq. ft. large-format retail store for high-traffic commercial zones in Gorakhpur.",
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
      name: "What is the retail franchise opportunity in Gorakhpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is a chance to open a Buyzaar Mart grocery and supermarket store with company support for setup, supply chain, technology and marketing.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A single unit starts from ₹15 Lakh, depending on format, area, stock and interiors.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Training is provided, and the company-managed model handles daily operations.",
      },
    },
    {
      "@type": "Question",
      name: "How much space is needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart needs 600 to 1,000 sq. ft., a Super Mart 1,000 to 3,000 sq. ft. and a Hyper Mart 3,000 to 8,000 sq. ft.",
      },
    },
    {
      "@type": "Question",
      name: "What margin does the brand indicate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An effective gross margin of 18% to 20% on sales, which is not guaranteed.",
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
    {
      "@type": "Question",
      name: "How long is the franchise term?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The term is 5 years, with renewal support.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit https://www.thebuyzaarmart.com or call 9217991727, Monday to Saturday, 9 AM to 7 PM.",
      },
    },
  ],
};

const contentSections = [
  {
    title: "A Practical Retail Franchise Opportunity in Gorakhpur",
    points: [
      "A retail franchise opportunity in Gorakhpur lets you run a branded store that sells products customers need every day, with a tested system behind you.",
      "The Buyzaar Mart offers a grocery and supermarket retail franchise in three formats: Mini Mart, Super Mart and Hyper Mart.",
      "Investment starts from ₹15 Lakh, and the brand indicates an effective gross margin of 18–20% on sales.",
      "Partners receive store setup, supply chain, POS technology, training and marketing support.",
      "The opportunity is open to first-time entrepreneurs, salaried professionals, business owners, property owners and families.",
    ],
  },
  {
    title: "Why Retail Is a Strong Franchise Sector",
    subSections: [
      {
        title: "Retail Meets Daily Needs",
        points: [
          "People buy food, personal care items and household goods in every season.",
          "Daily-need retail is less dependent on festivals, fashion or trends than many other store types.",
          "Repeat purchases help a store build steady sales over time.",
        ],
      },
      {
        title: "Retail Systems Can Be Copied",
        points: [
          "Stock planning, billing, pricing and display follow clear steps that a brand can standardise.",
          "Standard procedures make it easier for new owners to start without prior retail experience.",
          "A successful store model can be repeated in nearby areas.",
        ],
      },
      {
        title: "Retail Is Moving Towards Organisation",
        points: [
          "Cities across Uttar Pradesh, including Gorakhpur, are showing strong acceptance of organised retail formats.",
          "Customers want wider choice, clear pricing, clean stores and digital billing.",
          "Branded marts can offer these features more consistently than many traditional shops.",
        ],
      },
    ],
  },
  {
    title: "Why Gorakhpur Suits a Retail Franchise",
    subSections: [
      {
        title: "A Large Daily-Living Market",
        points: [
          "Gorakhpur is the administrative headquarters of the Gorakhpur division and a leading city of eastern Uttar Pradesh.",
          "It is also the headquarters of the North Eastern Railway zone, which keeps a steady movement of employees, students and families.",
          "Households here shop for groceries and daily goods regularly, which supports retail footfall.",
        ],
      },
      {
        title: "Room for Modern Stores",
        points: [
          "Many local shops still lack digital billing, inventory tracking and wide product range.",
          "A professionally managed mart can fill this gap in residential and commercial areas.",
        ],
      },
      {
        title: "Cost Advantages",
        points: [
          "Rent and staffing in tier-2 cities are generally lower than in large metros.",
          "Lower fixed costs help a new store manage its early months.",
        ],
      },
    ],
  },
  {
    title: "Understanding the Retail Franchise Model",
    points: [
      "The franchise partner invests in the store and uses the brand name, systems and support.",
      "The franchisor provides sourcing, setup guidance, technology, training and marketing.",
      "The franchise agreement sets out the terms, the duration and the responsibilities of both sides.",
      "The Buyzaar Mart franchise runs on a standard agreement with a 5-year term and renewal support.",
      "Results depend on location, footfall, store format and how well the store is managed.",
    ],
  },
  {
    title: "Buyzaar Mart: Brand Snapshot",
    subSections: [
      {
        title: "Background",
        points: [
          "The Buyzaar Mart is a supermarket and grocery franchise brand headquartered in Noida.",
          "It has operational stores in Noida, Gangoh, Saharanpur (Behat) and Haridwar (Bahadrabad).",
          "It is expanding across Uttar Pradesh, Haryana and Delhi NCR.",
          "The parent company, Markview Fabrication Pvt Ltd, is a registered private limited company.",
        ],
      },
      {
        title: "Mission",
        points: [
          "Our mission is to empower communities through retail ownership, with fairness, affordability and convenience.",
          'Our tagline, "Apna Bazaar – Bachat Ka Saath, Quality Ki Baat", reflects our focus on savings and quality.',
        ],
      },
      {
        title: "Compliance",
        points: [
          "FSSAI licensed.",
          "GST registered.",
          "MSME certified under the Ministry of MSME, Government of India.",
        ],
      },
    ],
  },
  {
    title: "Retail Strengths of the Buyzaar Mart Franchise",
    subSections: [
      {
        title: "Product Range and Sourcing",
        points: [
          "Groceries and staples, personal care, beverages, snacks, biscuits, homecare, hygiene and stationery are available across formats.",
          "Direct sourcing partnerships with 50+ FMCG companies support authentic stock and competitive pricing.",
          "The product mix can be adapted to local preferences.",
        ],
      },
      {
        title: "Inventory Assurance",
        points: [
          "Expired and damaged goods are taken back by the company.",
          "This reduces one of the biggest risks in retail and protects your capital.",
        ],
      },
      {
        title: "Retail Technology",
        points: [
          "POS-enabled billing for fast and accurate checkout.",
          "CRM tools to understand customer buying patterns.",
          "Real-time inventory tracking and sales dashboards.",
        ],
      },
      {
        title: "Brand and Marketing",
        points: [
          "Uniform branding and store design give every outlet a professional identity.",
          "Launch campaigns, social media promotion and local brand building support new stores.",
        ],
      },
    ],
  },
  {
    title: "Category Mix: What Your Retail Store Will Sell",
    points: [
      "Grocery and staples: daily-use items that drive regular footfall.",
      "Packaged foods, snacks and biscuits: branded products that add value to each bill.",
      "Beverages: a steady category for families and quick-stop customers.",
      "Personal care, homecare and hygiene: repeat-purchase items that bring customers back each month.",
      "Stationery: useful add-on products for households with school-going children.",
      "Dairy, fruits and vegetables: added in Super Mart and Hyper Mart formats for a fuller daily-needs store.",
      "Gifts, toys and frozen ready-to-eat: added in the Hyper Mart format for a wider selection.",
    ],
  },
  {
    title: "Store Formats for Retail Entrepreneurs",
    subSections: [
      {
        title: "Mini Mart (600–1000 sq ft)",
        points: [
          "Suited to residential colonies and smaller commercial areas.",
          "Core categories: grocery and staples, personal care, beverages, homecare and hygiene, stationery, snacks and biscuits.",
        ],
      },
      {
        title: "Super Mart (1000–3000 sq ft)",
        points: [
          "Suited to main markets and busy community zones.",
          "Adds dairy items and fruits and vegetables.",
        ],
      },
      {
        title: "Hyper Mart (3000–8000 sq ft)",
        points: [
          "Suited to high-traffic commercial zones.",
          "Adds gifts, toys and frozen ready-to-eat products.",
        ],
      },
      {
        title: "How to Choose",
        points: [
          "Match the format to your space, budget and the buying habits of local customers.",
          "Our team reviews your location and recommends the most suitable format.",
        ],
      },
    ],
  },
  {
    title: "Retail Basics That Drive Store Success",
    subSections: [
      {
        title: "Footfall",
        points: [
          "Footfall is the number of people who enter your store each day.",
          "Good location, visible frontage and easy access help increase it.",
        ],
      },
      {
        title: "Basket Size",
        points: [
          "Basket size is the value of products a customer buys in one visit.",
          "A wide range under one roof encourages customers to add more items.",
        ],
      },
      {
        title: "Stock Turnover",
        points: [
          "Stock turnover shows how quickly products sell and are replaced.",
          "Dashboards help you spot fast-moving and slow-moving items.",
        ],
      },
      {
        title: "Customer Loyalty",
        points: [
          "Clean displays, fair pricing and steady availability bring customers back.",
          "CRM tools help you understand repeat buyers.",
        ],
      },
    ],
  },
  {
    title: "Choose Your Business Model",
    subSections: [
      {
        title: "Company-Managed Retail (FOCM)",
        points: [
          "FOCM means Franchise Owned, Company Managed.",
          "You invest and own the store, while the company manages staffing, inventory, billing and customer service.",
          "Best for salaried professionals, business owners and property owners with limited time.",
        ],
      },
      {
        title: "Owner-Operated Retail (FOCO)",
        points: [
          "FOCO means Franchise Owned, Company Operated.",
          "You run the store yourself with the brand systems, training and supply chain support.",
          "Best for entrepreneurs who want to lead daily operations.",
        ],
      },
    ],
  },
  {
    title: "Investment and Margin",
    subSections: [
      {
        title: "Investment Details",
        points: [
          "The investment starts from ₹15 Lakh for a single unit and depends on format and area.",
          "It covers stock, interior, software fee, franchise fee (including 18% GST) and security deposit.",
          "The investment calculator on the franchise page gives an estimate for your size.",
          "Rent for the premises is paid by the franchise partner.",
        ],
      },
      {
        title: "Margin Details",
        points: [
          "The brand indicates an effective gross margin of 18–20% on sales.",
          "Gross margin is before rent, electricity, staff and other store expenses.",
          "Net earnings vary by location, footfall and management, and returns are not guaranteed.",
        ],
      },
    ],
  },
  {
    title: "Retail Franchise vs Independent Retail Shop",
    points: [
      "Brand: an independent shop must build trust from zero, while a Buyzaar Mart starts with brand identity.",
      "Sourcing: an independent owner negotiates alone, while franchise partners use centrally managed brand partnerships.",
      "Technology: independent shops often bill manually, while Buyzaar uses POS, CRM and dashboards.",
      "Stock risk: an independent owner absorbs expiry losses, while Buyzaar takes back expired and damaged goods.",
      "Support: an independent owner works alone, while franchise partners get training and a support team.",
    ],
  },
  {
    title: "What the Company Provides",
    points: [
      "Site selection assistance based on footfall, demographics and competition.",
      "Store interior, branding and shelf layout guidance.",
      "Managed supply chain with regular stock replenishment.",
      "Staff training and field assistance.",
      "Marketing and brand-building support.",
      "A dedicated support team for operational and technical queries.",
      "A 5-year franchise term with renewal support.",
    ],
  },
  {
    title: "Location and Space Requirements",
    points: [
      "Minimum floor area of 600 sq ft.",
      "Preferred locations are commercial areas or high-density residential areas.",
      "The property can be owned or rented.",
      "A computer system and stable internet connection are needed for POS billing.",
      "Visit the site on a weekday morning, a weekday evening and a weekend to judge footfall.",
      "Check parking, road visibility and nearby competition before you decide.",
    ],
  },
  {
    title: "Who Can Apply?",
    points: [
      "First-time entrepreneurs who want a tested retail system.",
      "Salaried professionals looking for an additional income source.",
      "Local business owners wanting to diversify into daily-need retail.",
      "Property owners with a suitable commercial space in Gorakhpur.",
      "Families planning a long-term business for the next generation.",
      "No prior retail experience is required under the company-managed model.",
    ],
  },
  {
    title: "Documents Required",
    points: [
      "ID proof: Aadhaar, PAN or Voter ID.",
      "Educational certificate of your highest qualification.",
      "Bank details: cancelled cheque or passbook copy.",
      "Property documents: ownership proof or rental agreement.",
    ],
  },
  {
    title: "How to Start in 4 Steps",
    points: [
      "Step 1 – Inquiry: Submit the form on thebuyzaarmart.com or call 9217991727.",
      "Step 2 – Review: Our team studies your location, space and budget, then recommends a format and model.",
      "Step 3 – Agreement and documents: Complete KYC and review the franchise agreement.",
      "Step 4 – Setup and launch: Interior, POS, staff training and marketing are completed before your grand opening.",
      "Our team is available Monday to Saturday, 9 AM to 7 PM, and responds within 24 hours.",
    ],
  },
  {
    title: "Common Concerns Answered",
    subSections: [
      {
        title: "Is a retail franchise suitable if I have never run a shop?",
        points: [
          "Yes. Standard procedures, training and a support team guide you at each stage.",
        ],
      },
      {
        title: "Will I need to manage staff and stock myself?",
        points: [
          "Not under the company-managed model, where the team handles staffing, ordering and billing.",
        ],
      },
      {
        title: "Can I visit a working store first?",
        points: [
          "Yes. Visiting an operating store and speaking with the team is a smart step before you invest.",
        ],
      },
    ],
  },
  {
    title: "Growth Potential",
    points: [
      "Once your first store is stable, you can plan more stores in Gorakhpur and nearby cities.",
      "The Buyzaar Mart supports multi-unit growth through structured expansion planning.",
      "Each store creates local jobs and supports nearby suppliers.",
    ],
  },
  {
    title: "Mistakes to Avoid",
    points: [
      "Choosing a retail franchise only because the investment is low.",
      "Skipping the agreement review and company registration details.",
      "Picking a location only because rent is low.",
      "Ignoring the expired and damaged stock policy.",
      "Expecting guaranteed profit, because no genuine franchise can promise it.",
    ],
  },
];

const faqs = [
  {
    question: "What is the retail franchise opportunity in Gorakhpur?",
    answer:
      "It is a chance to open a Buyzaar Mart grocery and supermarket store with company support for setup, supply chain, technology and marketing.",
  },
  {
    question: "What is the minimum investment?",
    answer:
      "A single unit starts from ₹15 Lakh, depending on format, area, stock and interiors.",
  },
  {
    question: "Do I need retail experience?",
    answer:
      "No. Training is provided, and the company-managed model handles daily operations.",
  },
  {
    question: "How much space is needed?",
    answer:
      "A Mini Mart needs 600–1000 sq ft, a Super Mart 1000–3000 sq ft and a Hyper Mart 3000–8000 sq ft.",
  },
  {
    question: "What margin does the brand indicate?",
    answer:
      "An effective gross margin of 18–20% on sales, which is not guaranteed.",
  },
  {
    question: "What happens to expired stock?",
    answer: "The company takes back expired and damaged goods.",
  },
  {
    question: "How long is the franchise term?",
    answer: "The term is 5 years, with renewal support.",
  },
  {
    question: "How do I apply?",
    answer:
      "Visit thebuyzaarmart.com or call 9217991727, Monday to Saturday, 9 AM to 7 PM.",
  },
];

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
              Retail Franchise Opportunity in Gorakhpur – Open a Buyzaar Mart and
              Enter Organised Retail
            </h1>

            {contentSections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                  {section.title}
                </h2>

                {section.points ? (
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}

                {section.subSections
                  ? section.subSections.map((subSection) => (
                      <div className="mt-4" key={subSection.title}>
                        <h3 className="font-medium text-gray-900">
                          {subSection.title}
                        </h3>

                        <ul className="mt-2 list-disc space-y-2 pl-6">
                          {subSection.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  : null}
              </section>
            ))}

            

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-medium text-gray-900">{faq.question}</h3>
                  <p className="mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Retail Franchise Journey in Gorakhpur
              </h2>

              <ul className="list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Open a Mini Mart, Super Mart or Hyper Mart with a branded retail
                  system, supply chain, POS billing, training and marketing
                  support.
                </li>
                <li>
                  Choose between FOCM company-managed retail and FOFO
                  owner-operated retail based on your time, experience and
                  involvement preference.
                </li>
                <li>
                  Retail franchise investment starts from ₹15 Lakh, subject to
                  selected format, store area, site assessment and final agreement
                  terms.
                </li>
              </ul>

              <p className="mb-4 mt-6 text-gray-800">
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
                <span className="font-semibold">Business Hours:</span> Monday to
                Saturday, 09:00 AM – 07:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="gorakhpur"
            currentSlug="/gorakhpur/retail-franchise-opportunity-gorakhpur"
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