import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const seoMeta = {
  title: "Grocery Franchise Business Opportunity Gorakhpur | Buyzaar Mart",
  description:
    "Start a grocery franchise business in Gorakhpur with The Buyzaar Mart. Step-by-step plan, formats and support, with investment from ₹15 Lakh. Apply today!",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grocery Franchise Business Opportunity Gorakhpur | Buyzaar Mart",
  description: seoMeta.description,
  url: "https://www.thebuyzaarmart.com/gorakhpur/grocery-franchise-business-opportunity-gorakhpur",
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
    name: "Gorakhpur",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Grocery Franchise Formats in Gorakhpur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600–1000 sq ft grocery franchise format for residential colonies and smaller commercial areas.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1000–3000 sq ft grocery franchise format for main markets and busy community zones.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3000–8000 sq ft supermarket franchise format for high-traffic commercial zones.",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the grocery franchise business opportunity in Gorakhpur?",
    answer:
      "It is a chance to open a Buyzaar Mart grocery store with company support for setup, supply chain, technology and marketing.",
  },
  {
    question: "What is the minimum investment?",
    answer:
      "A single unit starts from ₹15 Lakh, depending on format, area, stock and interiors.",
  },
  {
    question: "Do I need grocery experience?",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const sections = [
  {
    title: "Grocery Franchise Business Opportunity in Gorakhpur: The Overview",
    items: [
      "A grocery franchise business lets you run a branded store for daily-need products, supported by a tested system, a supply chain and a trained team.",
      "The Buyzaar Mart offers this opportunity in Gorakhpur through Mini Mart, Super Mart and Hyper Mart formats.",
      "Investment starts from ₹15 Lakh, and the brand indicates an effective gross margin of 18–20% on sales.",
      "You can choose a company-managed model if you have limited time, or an owner-operated model if you want to run the store yourself.",
      "This page works like a simple business plan, so you can see the market, costs, daily operations and risks before you apply.",
    ],
  },
  {
    title: "Market Snapshot: Why Gorakhpur",
    subsections: [
      {
        title: "City Profile",
        items: [
          "Gorakhpur is the administrative headquarters of the Gorakhpur division and a leading city of eastern Uttar Pradesh.",
          "It is also the headquarters of the North Eastern Railway zone, which keeps a steady movement of employees, students and families.",
          "This daily-living population supports regular grocery and household purchases.",
        ],
      },
      {
        title: "Customer Expectations",
        items: [
          "Cities across Uttar Pradesh, including Gorakhpur, are showing strong acceptance of organised retail formats.",
          "Shoppers want variety under one roof, clear prices, clean stores and digital billing.",
          "Many traditional shops cannot offer all of these together.",
        ],
      },
      {
        title: "Business Environment",
        items: [
          "Rent and staffing in tier-2 cities are generally lower than in large metros.",
          "Lower fixed costs support a smoother start for a new business.",
        ],
      },
    ],
  },
  {
    title: "Why a Grocery Franchise Is a Sensible Business Choice",
    items: [
      "Daily need: groceries and household essentials are bought in every season.",
      "Repeat business: families return weekly or even daily to a store they trust.",
      "Clear systems: stock, billing and pricing follow standard procedures.",
      "Brand support: you start with a recognised identity and not from zero.",
      "Scalable model: a stable store can be repeated in nearby areas.",
      "Lower guesswork: training and support reduce common beginner mistakes.",
    ],
  },
  {
    title: "Business Profile: The Buyzaar Mart",
    subsections: [
      {
        title: "Company Background",
        items: [
          "The Buyzaar Mart is a supermarket and grocery franchise brand headquartered in Noida.",
          "It has operational stores in Noida, Gangoh, Saharanpur (Behat) and Haridwar (Bahadrabad).",
          "It is expanding across Uttar Pradesh, Haryana and Delhi NCR.",
          "The parent company, Markview Fabrication Pvt Ltd, is a registered private limited company.",
        ],
      },
      {
        title: "Mission",
        items: [
          "Our mission is to empower communities through retail ownership, with fairness, affordability and convenience.",
          "Our tagline, Apna Bazaar – Bachat Ka Saath, Quality Ki Baat, reflects our focus on savings and quality.",
        ],
      },
      {
        title: "Legal and Compliance",
        items: [
          "FSSAI licensed.",
          "GST registered.",
          "MSME certified under the Ministry of MSME, Government of India.",
          "Standard franchise agreement with a 5-year term and renewal support.",
        ],
      },
    ],
  },
  {
    title: "What Your Store Will Sell",
    items: [
      "Grocery and staples: daily-use items that bring regular footfall.",
      "Packaged foods, snacks and biscuits: branded products that add value to each bill.",
      "Beverages: a steady category for families and quick-stop customers.",
      "Personal care, homecare and hygiene: repeat-purchase items that bring customers back each month.",
      "Stationery: useful add-on products for households with school-going children.",
      "Dairy, fruits and vegetables: added in Super Mart and Hyper Mart formats.",
      "Gifts, toys and frozen ready-to-eat: added in the Hyper Mart format.",
    ],
  },
  {
    title: "Step 1: Choose Your Business Model",
    subsections: [
      {
        title: "FOCM – Franchise Owned, Company Managed",
        items: [
          "You invest and own the store, while the company manages staffing, inventory, billing, marketing and performance tracking.",
          "Best for salaried professionals, business owners and property owners with limited time.",
        ],
      },
      {
        title: "FOCO – Franchise Owned, Company Operated",
        items: [
          "You run the store yourself with the brand&apos;s systems, training and supply chain support.",
          "Best for entrepreneurs who want full control of daily decisions.",
        ],
      },
      {
        title: "Decision Guide",
        items: [
          "Pick FOCM if you want ownership without daily involvement.",
          "Pick FOCO if you want to lead the store personally.",
        ],
      },
    ],
  },
  {
    title: "Step 2: Choose Your Store Format",
    subsections: [
      {
        title: "Mini Mart (600–1000 sq ft)",
        items: [
          "Suited to residential colonies and smaller commercial areas.",
          "Offers grocery and staples, personal care, beverages, homecare and hygiene, stationery, snacks and biscuits.",
        ],
      },
      {
        title: "Super Mart (1000–3000 sq ft)",
        items: [
          "Suited to main markets and busy community zones.",
          "Adds dairy items and fruits and vegetables.",
        ],
      },
      {
        title: "Hyper Mart (3000–8000 sq ft)",
        items: [
          "Suited to high-traffic commercial zones.",
          "Adds gifts, toys and frozen ready-to-eat products.",
        ],
      },
      {
        title: "Format Decision",
        items: [
          "Match the format to your property size, budget and local customers.",
          "Our team reviews your site and recommends a suitable option.",
        ],
      },
    ],
  },
  {
    title: "Step 3: Plan Your Investment",
    subsections: [
      {
        title: "Cost Components",
        items: [
          "Stock.",
          "Interior.",
          "Software fee.",
          "Franchise fee including 18% GST.",
          "Security deposit.",
        ],
      },
      {
        title: "Budget Notes",
        items: [
          "The investment starts from ₹15 Lakh for a single unit and depends on format and area.",
          "The investment calculator on the franchise page gives an estimate for your size.",
          "Rent for the premises is paid by the franchise partner.",
          "Keep some extra funds ready for daily needs in the early months.",
        ],
      },
    ],
  },
  {
    title: "Step 4: Understand Margin and Expenses",
    subsections: [
      {
        title: "Margin",
        items: [
          "The brand indicates an effective gross margin of 18–20% on sales.",
          "The margin is built into the sourcing and supply model and does not depend on uncertain bonus slabs.",
        ],
      },
      {
        title: "Expenses",
        items: [
          "Rent, electricity, staff costs and other running costs are paid from the gross margin.",
          "What remains after expenses is your net profit.",
        ],
      },
      {
        title: "Reality Check",
        items: [
          "Net earnings vary by location, footfall, format and store management.",
          "Returns are not guaranteed, so plan your budget carefully.",
        ],
      },
    ],
  },
  {
    title: "Step 5: Select the Right Location",
    items: [
      "Choose a commercial area or a high-density residential area.",
      "Visit the site on a weekday morning, a weekday evening and a weekend to judge footfall.",
      "Check road visibility, parking and ease of access.",
      "Look at nearby competition and the customer profile.",
      "Compare rent with expected sales.",
      "Confirm the space is at least 600 sq ft and can support a computer system and stable internet for POS billing.",
      "Share the site with our team for a review before you commit.",
    ],
  },
  {
    title: "Step 6: Complete Documentation",
    items: [
      "ID proof: Aadhaar, PAN or Voter ID.",
      "Educational certificate of your highest qualification.",
      "Bank details: cancelled cheque or passbook copy.",
      "Property documents: ownership proof or rental agreement.",
      "Review and sign the franchise agreement after careful reading.",
    ],
  },
  {
    title: "Step 7: Setup and Launch",
    items: [
      "Store interior, branding and shelf layout are completed under the company&apos;s guidance.",
      "POS billing and inventory systems are installed.",
      "Staff training is completed before opening.",
      "Launch campaigns, social media promotion and local brand building support your opening.",
      "Stock arrives through the managed supply chain.",
    ],
  },
  {
    title: "How the Business Runs Day to Day",
    subsections: [
      {
        title: "Stock and Supply",
        items: [
          "The company&apos;s supply chain supports regular stock replenishment.",
          "Direct sourcing partnerships with 50+ FMCG companies support authentic stock and competitive pricing.",
          "Expired and damaged goods are taken back by the company.",
        ],
      },
      {
        title: "Billing and Customers",
        items: [
          "POS-enabled billing speeds up checkout and reduces errors.",
          "CRM tools help track customer purchase patterns.",
          "Real-time inventory tracking helps reduce stockouts and overstocking.",
        ],
      },
      {
        title: "Reporting",
        items: [
          "Sales dashboards and regular reports show sales, stock status and customer activity.",
          "You always know how your investment is performing.",
        ],
      },
    ],
  },
  {
    title: "Risk Management in a Grocery Business",
    subsections: [
      {
        title: "Stock Risk",
        items: [
          "Expiry and damage are common risks in grocery retail.",
          "The company&apos;s take-back policy reduces this risk for franchise partners.",
        ],
      },
      {
        title: "Location Risk",
        items: [
          "A poor location can reduce footfall.",
          "Site selection guidance and your own visits help you choose carefully.",
        ],
      },
      {
        title: "Operations Risk",
        items: [
          "Daily mistakes in ordering, billing or staffing can reduce profit.",
          "Standard procedures, training and technology help control these mistakes.",
        ],
      },
      {
        title: "Expectation Risk",
        items: [
          "No franchise can promise fixed profit.",
          "Plan for slower early months and review dashboards regularly.",
        ],
      },
    ],
  },
  {
    title: "Tips for the First 90 Days",
    items: [
      "Follow the company&apos;s standard procedures for ordering, billing and display.",
      "Check dashboard reports every week to see fast-moving and slow-moving products.",
      "Keep shelves clean, full and easy to browse.",
      "Listen to customer feedback and share local preferences with the support team.",
      "Track monthly expenses against sales so that costs stay under control.",
    ],
  },
  {
    title: "Common Concerns Answered",
    subsections: [
      {
        title: "Will I need to manage staff and stock myself?",
        items: [
          "Not under the company-managed model, where the team handles staffing, ordering and billing.",
        ],
      },
      {
        title: "Can I visit a working store first?",
        items: [
          "Yes. Visiting an operating store and speaking with the team is a smart step before you invest.",
        ],
      },
      {
        title: "Is it safe for a first-time business owner?",
        items: [
          "Training, standard procedures and a support team guide you at each stage, but results are not guaranteed.",
        ],
      },
    ],
  },
  {
    title: "Support from the Company",
    items: [
      "Site selection assistance.",
      "Store interior, branding and shelf layout guidance.",
      "Managed supply chain with regular stock replenishment.",
      "Staff training and field assistance.",
      "POS software and inventory dashboards.",
      "Marketing and brand-building support.",
      "A dedicated support team throughout the 5-year franchise term.",
    ],
  },
  {
    title: "Grocery Franchise vs Independent Grocery Business",
    items: [
      "Brand: an independent shop builds trust from zero, while a Buyzaar Mart starts with brand identity.",
      "Sourcing: independent owners negotiate alone, while franchise partners use centrally managed partnerships.",
      "Technology: independent shops often bill manually, while Buyzaar uses POS, CRM and dashboards.",
      "Stock risk: independent owners absorb expiry losses, while Buyzaar takes back expired and damaged goods.",
      "Support: independent owners work alone, while franchise partners get training and a support team.",
    ],
  },
  {
    title: "Who Can Start This Business?",
    items: [
      "First-time entrepreneurs who want a tested retail system.",
      "Salaried professionals looking for an additional income source.",
      "Local business owners wanting to diversify into daily-need retail.",
      "Property owners with a suitable commercial space in Gorakhpur.",
      "Families planning a long-term business for the next generation.",
      "No prior retail experience is required under the company-managed model.",
    ],
  },
  {
    title: "Growth Plan",
    items: [
      "Once your first store is stable, you can plan more stores in Gorakhpur and nearby cities.",
      "The Buyzaar Mart supports multi-unit growth through structured expansion planning.",
      "Each store creates local jobs and supports nearby suppliers.",
    ],
  },
  {
    title: "Mistakes to Avoid",
    items: [
      "Choosing a business only because the investment is low.",
      "Skipping a visit to a working store.",
      "Ignoring the agreement terms and company registration details.",
      "Picking a location only because rent is low.",
      "Not tracking sales and stock after launch.",
      "Expecting guaranteed profit.",
    ],
  },
];

const BulletList = ({ items, listId }) => (
  <ul className="list-disc space-y-2 pl-6">
    {items.map((item, index) => (
      <li key={`${listId}-${index}`}>{item}</li>
    ))}
  </ul>
);

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
              Grocery Franchise Business Opportunity in Gorakhpur – A Step-by-Step
              Plan to Start with The Buyzaar Mart
            </h1>

            {sections.map((section, sectionIndex) => (
              <div key={section.title} className="space-y-4">
                <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                  {section.title}
                </h2>

                {section.items ? (
                  <BulletList
                    items={section.items}
                    listId={`section-${sectionIndex}`}
                  />
                ) : null}

                {section.subsections
                  ? section.subsections.map((subsection, subsectionIndex) => (
                      <div key={subsection.title} className="space-y-3">
                        <h3 className="font-medium text-gray-900">
                          {subsection.title}
                        </h3>

                        <BulletList
                          items={subsection.items}
                          listId={`section-${sectionIndex}-subsection-${subsectionIndex}`}
                        />
                      </div>
                    ))
                  : null}
              </div>
            ))}

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              {faqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="font-medium text-gray-900">{item.question}</h3>
                  <p className="mt-2">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Apply for Your Grocery Franchise Business in Gorakhpur
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Gorakhpur families are moving towards organised and trusted
                  neighbourhood stores, and early partners can build local loyalty
                  first.
                </li>
                <li>
                  The Buyzaar Mart offers a clear investment plan, flexible
                  formats and a team that responds within 24 hours.
                </li>
                <li>
                  Submit the inquiry form on thebuyzaarmart.com or call
                  9217991727, Monday to Saturday, 9 AM to 7 PM.
                </li>
              </ul>

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

              <p className="mb-4 text-gray-800">
                <span className="font-semibold">Head office:</span> D-43, Third
                Floor, Sector-6, Noida-201301
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Business Hours:</span> Monday to
                Saturday, 09:00 AM – 07:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="gorakhpur"
            currentSlug="/gorakhpur/grocery-franchise-business-opportunity-gorakhpur"
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