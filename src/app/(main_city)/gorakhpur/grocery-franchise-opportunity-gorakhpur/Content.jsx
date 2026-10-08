import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const seoMeta = {
  title: "Grocery Franchise Opportunity Gorakhpur | The Buyzaar Mart",
  description:
    "Explore a grocery franchise opportunity in Gorakhpur with The Buyzaar Mart. Start from ₹15 Lakh with 18–20% gross margin, full setup & support. Apply now!",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grocery Franchise Opportunity Gorakhpur | The Buyzaar Mart",
  description: seoMeta.description,
  url: "https://www.thebuyzaarmart.com/gorakhpur/grocery-franchise-opportunity-gorakhpur",
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
          "A 600–1000 sq ft grocery franchise format for residential colonies and smaller commercial pockets.",
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
          "A 3000–8000 sq ft grocery franchise format for high-footfall commercial zones.",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is the grocery franchise opportunity in Gorakhpur?",
    answer:
      "It is a chance to open a branded Buyzaar Mart grocery store with company support for setup, supply chain, technology and marketing.",
  },
  {
    question: "What is the minimum investment?",
    answer:
      "A single unit starts from ₹15 Lakh, depending on format, area, stock and interiors.",
  },
  {
    question: "Do I need grocery retail experience?",
    answer:
      "No. Training and support are provided, and company-managed models handle daily operations.",
  },
  {
    question: "How much space do I need?",
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
    answer:
      "The company takes back expired and damaged goods under its inventory assurance.",
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
    title: "A Promising Grocery Franchise Opportunity in Gorakhpur",
    items: [
      "A grocery franchise opportunity in Gorakhpur lets you enter a daily-demand business with a ready system, instead of building a store brand from zero.",
      "The Buyzaar Mart offers a complete grocery and supermarket franchise with Mini Mart, Super Mart and Hyper Mart formats.",
      "Partners get store setup, supply chain, POS technology, training and marketing support under one franchise agreement.",
      "The investment starts from ₹15 Lakh, and the brand indicates an effective gross margin of 18–20% on sales.",
      "No retail experience is needed, which makes this opportunity open to first-time business owners, professionals and investors.",
    ],
  },
  {
    title: "Why Gorakhpur Offers a Strong Grocery Retail Opportunity",
    subsections: [
      {
        title: "A Large and Active City Market",
        items: [
          "Gorakhpur is the administrative headquarters of the Gorakhpur division and a leading city of eastern Uttar Pradesh.",
          "It is also the headquarters of the North Eastern Railway zone, so many railway employees, students, traders and travelling families live and shop in the city.",
          "A large daily-living population keeps demand for groceries and household goods steady.",
        ],
      },
      {
        title: "Households Want Modern, Trusted Stores",
        items: [
          "Cities across Uttar Pradesh, including Gorakhpur, are showing strong acceptance of organised retail formats.",
          "Shoppers now look for product variety under one roof, clear pricing, clean stores, digital billing and reliable availability.",
          "Many traditional shops cannot offer all of these, and this gap creates room for a professionally managed mart.",
        ],
      },
      {
        title: "Growing Neighbourhoods Need Local Stores",
        items: [
          "New residential colonies and expanding market areas need convenient stores close to home.",
          "A neighbourhood mart saves families the trip to a distant market and builds regular customers quickly.",
          "Lower rent and staffing costs than metro cities help new stores manage their running expenses.",
        ],
      },
    ],
  },
  {
    title: "Why Grocery Is a Reliable Franchise Category",
    items: [
      "Food, staples and household essentials are bought in every season, so sales do not depend on festivals or fashion trends.",
      "Customers return weekly or even daily, which creates repeat sales and strong local loyalty.",
      "Packaged foods, personal care and home hygiene products give a wide basket from one customer visit.",
      "Branded FMCG products have recognised names, which makes it easier to win customer trust.",
      "A well-planned category mix balances fast-moving staples with higher-value packaged items.",
      "Grocery stores can be repeated across nearby areas, so a strong first outlet can become the base for expansion.",
    ],
  },
  {
    title: "What Is the Buyzaar Mart Grocery Franchise?",
    subsections: [
      {
        title: "Brand Background",
        items: [
          "The Buyzaar Mart is a supermarket and grocery franchise brand headquartered in Noida.",
          "The brand has operational stores in Noida, Gangoh, Saharanpur (Behat) and Haridwar (Bahadrabad).",
          "It is expanding across Uttar Pradesh, Haryana and Delhi NCR.",
          "The parent company, Markview Fabrication Pvt Ltd, is a registered private limited company.",
        ],
      },
      {
        title: "Mission and Approach",
        items: [
          "Our mission is to empower communities through retail ownership, offering fairness, affordability and convenience.",
          "Our tagline, Apna Bazaar – Bachat Ka Saath, Quality Ki Baat, reflects our focus on savings and quality.",
          "Stores are designed around North India&apos;s neighbourhood shopping habits and not around metro-only formats.",
        ],
      },
      {
        title: "Compliance You Can Verify",
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
    title: "Key Features of This Grocery Franchise Opportunity",
    subsections: [
      {
        title: "Wide Product Range from Trusted Brands",
        items: [
          "Direct sourcing partnerships with 50+ leading FMCG companies give stores authentic stock and competitive pricing.",
          "Customers find popular national brands in groceries, personal care, beverages, snacks and homecare under one roof.",
          "Centrally managed supply terms give franchise partners the buying strength of a larger chain.",
        ],
      },
      {
        title: "Hassle-Free Inventory Assurance",
        items: [
          "Expired and damaged goods are taken back by the company.",
          "This protects your capital from one of the most common losses in grocery retail.",
          "Fresh, in-date stock also keeps customer trust high.",
        ],
      },
      {
        title: "Technology-Driven Operations",
        items: [
          "POS-enabled billing automates checkout and reduces billing errors.",
          "CRM tools track customer buying patterns and help build repeat business.",
          "Real-time inventory tracking helps reduce stockouts and overstocking.",
          "Sales dashboards give you regular visibility into store performance.",
        ],
      },
      {
        title: "Hyper-Local Marketing",
        items: [
          "Launch campaigns, social media promotions and local area brand building are handled by the company.",
          "Marketing is designed to bring customers to your specific store from the opening period.",
          "Uniform branding and store design give your outlet a professional look.",
        ],
      },
    ],
  },
  {
    title: "What Your Store Will Sell: Category Mix",
    items: [
      "Grocery and staples: daily-use items that drive regular footfall and basket size.",
      "Packaged foods, snacks and biscuits: popular branded products that add to every bill.",
      "Beverages: a steady category for families and quick-stop customers.",
      "Personal care and homecare: repeat-purchase items that keep customers returning monthly.",
      "Stationery: useful add-on products for households with school-going children.",
      "Dairy, fruits and vegetables: added in Super Mart and Hyper Mart formats for a fuller daily-needs store.",
      "Gifts, toys and frozen ready-to-eat: added in the Hyper Mart format for a premium shopping experience.",
    ],
  },
  {
    title: "Store Formats for Gorakhpur",
    subsections: [
      {
        title: "Mini Mart (600–1000 sq ft)",
        items: [
          "Ideal for residential colonies and smaller commercial pockets.",
          "Covers grocery and staples, personal care, beverages, homecare and hygiene, stationery, snacks and biscuits.",
        ],
      },
      {
        title: "Super Mart (1000–3000 sq ft)",
        items: [
          "Suited to main markets and busy community zones.",
          "Adds dairy items and fruits and vegetables for a fuller daily-needs offer.",
        ],
      },
      {
        title: "Hyper Mart (3000–8000 sq ft)",
        items: [
          "Built for high-footfall commercial zones.",
          "Adds gifts, toys and frozen ready-to-eat products for the widest range.",
        ],
      },
      {
        title: "Choosing the Right Format",
        items: [
          "Match the format to your property size, budget and the type of customers nearby.",
          "Our team reviews your location and recommends the most suitable option.",
        ],
      },
    ],
  },
  {
    title: "Business Models for Investors and Owner-Operators",
    subsections: [
      {
        title: "Company-Managed Option (FOCM)",
        items: [
          "You invest and own the store, while the company manages staffing, inventory, billing and customer service.",
          "Suitable for salaried professionals, business owners and property owners with limited time.",
        ],
      },
      {
        title: "Owner-Operated Option (FOCO)",
        items: [
          "You run the store yourself with the brand systems, training and supply chain support.",
          "Suitable for entrepreneurs who want full control over daily decisions.",
        ],
      },
    ],
  },
  {
    title: "Investment, Margin and Earning Potential",
    subsections: [
      {
        title: "Investment Structure",
        items: [
          "The investment starts from ₹15 Lakh for a single unit and depends on the format and area.",
          "It includes stock, interior, software fee, franchise fee including 18% GST and security deposit.",
          "An investment calculator on the franchise page shows the estimate for your chosen size.",
          "Rent for the premises is paid by the franchise partner.",
        ],
      },
      {
        title: "Margin Details",
        items: [
          "The brand indicates an effective gross margin of 18–20% on sales.",
          "The margin is built into the sourcing and supply chain model and does not depend on uncertain bonus slabs.",
          "Gross margin is before store expenses such as rent and power, so net earnings will vary.",
          "Actual results depend on location, footfall and format, and returns are not guaranteed.",
        ],
      },
    ],
  },
  {
    title: "What the Company Provides After You Join",
    items: [
      "Site selection assistance to evaluate footfall, demographics and feasibility.",
      "Store interior, branding and shelf layout guidance.",
      "Managed supply chain with regular stock replenishment.",
      "Staff training on POS, CRM, customer service and inventory handling.",
      "Marketing support through social media, local promotions and brand building.",
      "Field assistance and a dedicated support team for operational queries.",
      "Regular reporting so you can track your investment clearly.",
    ],
  },
  {
    title: "Location and Space Requirements",
    items: [
      "Minimum floor area of 600 sq ft.",
      "Preferred locations are commercial areas or high-density residential areas.",
      "The property can be owned or rented.",
      "A computer system and stable internet connection are needed for POS billing.",
      "Choose a spot near housing colonies, markets, schools or offices for strong daily footfall.",
      "Check nearby competition and easy customer access before finalising the site.",
    ],
  },
  {
    title: "Who Can Take This Opportunity?",
    items: [
      "First-time entrepreneurs who want a tested retail system.",
      "Salaried professionals looking for an additional income source.",
      "Local business owners wanting to diversify into daily-need retail.",
      "Property owners with a suitable commercial space in Gorakhpur.",
      "Families planning a long-term business for the next generation.",
    ],
  },
  {
    title: "Documents Required",
    items: [
      "ID proof: Aadhaar, PAN or Voter ID.",
      "Educational certificate of your highest qualification.",
      "Bank details: cancelled cheque or passbook copy.",
      "Property documents: ownership proof or rental agreement.",
    ],
  },
  {
    title: "How to Start Your Grocery Franchise in Gorakhpur",
    items: [
      "Step 1 – Inquiry: Fill the form on thebuyzaarmart.com or call 9217991727 to get franchise details.",
      "Step 2 – Review and agreement: The team reviews your location and background, then you complete KYC and sign the franchise agreement.",
      "Step 3 – Store development: Interior, branding, POS setup, staff training and inventory planning are completed.",
      "Step 4 – Launch: Your store opens with marketing support and ongoing guidance.",
      "Our team is available Monday to Saturday, 9 AM to 7 PM, and responds within 24 hours.",
    ],
  },
  {
    title: "Buyzaar Mart vs Starting Your Own Grocery Shop",
    items: [
      "Brand: an independent shop must build trust from zero, while a Buyzaar Mart starts with an established identity.",
      "Sourcing: independent owners negotiate alone, while franchise partners use centrally managed brand partnerships.",
      "Technology: independent shops often bill manually, while Buyzaar uses POS, CRM and dashboards.",
      "Stock risk: independent owners absorb expiry losses, while Buyzaar takes back expired and damaged goods.",
      "Support: an independent owner gets no training or audits, while franchise partners get structured support.",
    ],
  },
  {
    title: "Tips to Succeed with Your Gorakhpur Grocery Franchise",
    items: [
      "Pick a location with strong daily footfall and easy access.",
      "Follow the company&apos;s standard procedures for stock, billing and display.",
      "Review dashboard reports regularly to spot fast-moving and slow-moving products.",
      "Keep a healthy mix of staples and packaged foods to protect margins.",
      "Build local relationships through good service, fair pricing and consistent availability.",
    ],
  },
  {
    title: "Common Questions Before You Invest",
    subsections: [
      {
        title: "Is this opportunity safe for beginners?",
        items: [
          "Yes, because training, standard procedures and a support team guide you at each stage, and company-managed models reduce daily workload.",
        ],
      },
      {
        title: "Can I expand later?",
        items: [
          "Yes. Successful partners can plan more stores in Gorakhpur and nearby cities.",
        ],
      },
      {
        title: "What should I check first?",
        items: [
          "Confirm the investment details, agreement terms, compliance certificates and the support promised in writing.",
        ],
      },
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
              Grocery Franchise Opportunity in Gorakhpur – Build a Steady Retail
              Business with The Buyzaar Mart
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
                Apply for a Grocery Franchise in Gorakhpur Today
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Gorakhpur families are moving towards organised, trusted
                  neighbourhood stores, and early partners can build local loyalty
                  first.
                </li>
                <li>
                  The Buyzaar Mart gives you a brand, a system and support from
                  setup to daily operations.
                </li>
                <li>Apply at thebuyzaarmart.com or call 9217991727.</li>
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
            currentSlug="/gorakhpur/grocery-franchise-opportunity-gorakhpur"
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