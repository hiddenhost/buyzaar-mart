import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const seoMeta = {
  title: "Supermarket Franchise Opportunity in Gorakhpur | Buyzaar Mart",
  description:
    "Explore a supermarket franchise opportunity in Gorakhpur with The Buyzaar Mart. Super Mart and Hyper Mart formats from ₹15 Lakh with full support. Apply now!",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Supermarket Franchise Opportunity in Gorakhpur | Buyzaar Mart",
  description: seoMeta.description,
  url: "https://www.thebuyzaarmart.com/gorakhpur/supermarket-franchise-opportunity-gorakhpur",
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
    name: "The Buyzaar Mart Supermarket Franchise Formats in Gorakhpur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600–1000 sq ft grocery format for residential colonies and smaller commercial areas.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1000–3000 sq ft supermarket franchise format for main markets and busy community zones.",
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
    question: "What is the supermarket franchise opportunity in Gorakhpur?",
    answer:
      "It is a chance to open a Buyzaar Mart supermarket-style store with company support for setup, supply chain, technology and marketing.",
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
    title: "A Supermarket Franchise Opportunity for Gorakhpur",
    items: [
      "A supermarket franchise opportunity in Gorakhpur lets you open a self-service store where families can buy groceries, FMCG items, dairy and daily essentials under one roof.",
      "The Buyzaar Mart offers supermarket-style stores through its Super Mart and Hyper Mart formats, along with a compact Mini Mart format for smaller spaces.",
      "Investment starts from ₹15 Lakh, and the brand indicates an effective gross margin of 18–20% on sales.",
      "Partners get store setup, managed supply chain, POS technology, training and marketing support.",
      "This page focuses on how a supermarket store works, so you can plan space, range and customers before you apply.",
    ],
  },
  {
    title: "Why Gorakhpur Suits a Supermarket Franchise",
    subsections: [
      {
        title: "A Major City with Daily Household Demand",
        items: [
          "Gorakhpur is the administrative headquarters of the Gorakhpur division and a leading city of eastern Uttar Pradesh.",
          "It is also the headquarters of the North Eastern Railway zone, which keeps a steady movement of employees, students and families.",
          "Households buy groceries and daily goods regularly, which supports steady supermarket footfall.",
        ],
      },
      {
        title: "Shoppers Want Everything in One Trip",
        items: [
          "Cities across Uttar Pradesh, including Gorakhpur, are showing strong acceptance of organised retail formats.",
          "Families increasingly prefer one store for staples, packaged foods, dairy, personal care and cleaning products.",
          "A supermarket saves time and makes planned monthly shopping easier.",
        ],
      },
      {
        title: "Practical Cost Advantages",
        items: [
          "Rent and staffing in tier-2 cities are generally lower than in large metros.",
          "Lower fixed costs help a new supermarket manage its early months.",
        ],
      },
    ],
  },
  {
    title: "Why Supermarket Retail Is a Strong Franchise Category",
    items: [
      "Daily need: groceries and household items are bought in every season.",
      "Bigger baskets: a wider range encourages customers to add more items in one visit.",
      "Repeat visits: families return weekly or monthly to stores that are clean, fairly priced and well stocked.",
      "Clear systems: stock, billing and pricing follow standard procedures.",
      "Brand support: you start with an established identity and supply chain.",
      "Scalable model: a stable store can be repeated in nearby areas.",
    ],
  },
  {
    title: "About The Buyzaar Mart",
    subsections: [
      {
        title: "Brand Background",
        items: [
          "The Buyzaar Mart is a supermarket and grocery franchise brand headquartered in Noida.",
          "It has operational stores in Noida, Gangoh, Saharanpur (Behat) and Haridwar (Bahadrabad).",
          "It is expanding across Uttar Pradesh, Haryana and Delhi NCR.",
          "The parent company, Markview Fabrication Pvt Ltd, is a registered private limited company.",
        ],
      },
      {
        title: "Mission and Identity",
        items: [
          "Our mission is to empower communities through retail ownership, with fairness, affordability and convenience.",
          "Our tagline, Apna Bazaar – Bachat Ka Saath, Quality Ki Baat, reflects our focus on savings and quality.",
        ],
      },
      {
        title: "Credentials",
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
    title: "Supermarket Formats Available",
    subsections: [
      {
        title: "Super Mart (1000–3000 sq ft)",
        items: [
          "Suited to main market areas and busy community zones.",
          "Offers the core grocery range along with dairy items and fruits and vegetables.",
          "A good choice for owners with a mid-sized property who want a fuller daily-needs store.",
        ],
      },
      {
        title: "Hyper Mart (3000–8000 sq ft)",
        items: [
          "Suited to high-traffic commercial zones and large properties.",
          "Adds gifts, toys and frozen ready-to-eat products to the Super Mart range.",
          "Offers the widest selection and a premium shopping experience.",
        ],
      },
      {
        title: "Mini Mart (600–1000 sq ft)",
        items: [
          "Suited to residential colonies and smaller commercial areas.",
          "Offers essential grocery, personal care, beverages, homecare and hygiene, stationery, snacks and biscuits.",
          "A practical starting point if your property is smaller.",
        ],
      },
      {
        title: "Choosing the Right Format",
        items: [
          "Match the format to your property size, your budget and the customers around the location.",
          "Our team reviews your site and recommends the most suitable option.",
        ],
      },
    ],
  },
  {
    title: "Inside a Supermarket: Store Zones and Categories",
    subsections: [
      {
        title: "Grocery and Staples",
        items: [
          "Daily-use items that bring regular footfall and form the base of every basket.",
        ],
      },
      {
        title: "Packaged Foods, Snacks and Biscuits",
        items: [
          "Branded products that add value to each bill and encourage impulse buying.",
        ],
      },
      {
        title: "Beverages",
        items: ["A steady category for families and quick-stop customers."],
      },
      {
        title: "Personal Care, Homecare and Hygiene",
        items: [
          "Repeat-purchase items that bring customers back each month.",
        ],
      },
      {
        title: "Dairy, Fruits and Vegetables",
        items: [
          "Added in Super Mart and Hyper Mart formats to attract frequent visits.",
        ],
      },
      {
        title: "Stationery",
        items: [
          "Useful add-on products for households with school-going children.",
        ],
      },
      {
        title: "Gifts, Toys and Frozen Ready-to-Eat",
        items: [
          "Added in the Hyper Mart format for a wider and more premium selection.",
        ],
      },
    ],
  },
  {
    title: "What Makes a Buyzaar Mart Supermarket Strong",
    subsections: [
      {
        title: "Managed Supply Chain",
        items: [
          "Direct sourcing partnerships with 50+ FMCG companies support authentic stock and competitive pricing.",
          "Regular replenishment helps shelves stay full.",
        ],
      },
      {
        title: "Inventory Assurance",
        items: [
          "Expired and damaged goods are taken back by the company.",
          "This reduces one of the biggest risks in supermarket retail.",
        ],
      },
      {
        title: "Technology",
        items: [
          "POS-enabled billing for fast and accurate checkout.",
          "CRM tools to understand customer buying patterns.",
          "Real-time inventory tracking and sales dashboards.",
        ],
      },
      {
        title: "Store Design and Branding",
        items: [
          "Uniform branding and a planned shelf layout make shopping easy.",
          "Customers know what to expect when they enter a Buyzaar Mart.",
        ],
      },
      {
        title: "Marketing Support",
        items: [
          "Launch campaigns, social media promotion and local brand building help your supermarket become known in the neighbourhood.",
        ],
      },
    ],
  },
  {
    title: "Supermarket vs Small Kirana Store",
    items: [
      "Range: a supermarket carries wide categories, while a kirana carries limited products.",
      "Shopping style: a supermarket offers self-service browsing, while a kirana often serves from the counter.",
      "Billing: a supermarket uses POS, while many kiranas bill manually.",
      "Stock risk: a Buyzaar Mart has take-back support, while a kirana owner absorbs expiry loss.",
      "Brand: a supermarket franchise starts with brand identity, while a kirana builds its name slowly.",
      "Support: a franchise partner gets training and a support team, while a kirana owner works alone.",
    ],
  },
  {
    title: "Business Models",
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
          "You run the store yourself with the brand systems, training and supply chain support.",
          "Best for entrepreneurs who want to lead the store personally.",
        ],
      },
    ],
  },
  {
    title: "Investment and Margin",
    subsections: [
      {
        title: "Investment",
        items: [
          "The investment starts from ₹15 Lakh for a single unit and depends on format and area.",
          "It covers stock, interior, software fee, franchise fee including 18% GST and security deposit.",
          "The investment calculator on the franchise page gives an estimate for your chosen size.",
          "Rent for the premises is paid by the franchise partner.",
        ],
      },
      {
        title: "Margin",
        items: [
          "The brand indicates an effective gross margin of 18–20% on sales.",
          "Gross margin is before rent, electricity, staff and other running costs.",
          "Net earnings vary by location, footfall and format, and returns are not guaranteed.",
        ],
      },
    ],
  },
  {
    title: "Planning Your Supermarket Space",
    items: [
      "Keep daily-need items easy to find so customers can shop quickly.",
      "Place popular categories where customers walk through the store.",
      "Keep aisles wide enough for baskets and trolleys, where space allows.",
      "Use the company&apos;s shelf layout guidance for display and category placement.",
      "Keep the billing counter in a clear spot to avoid queues.",
      "Leave room for stock movement and safe storage.",
    ],
  },
  {
    title: "What the Company Provides",
    items: [
      "Site selection assistance based on footfall, demographics and competition.",
      "Store interior, branding and shelf layout guidance.",
      "Managed supply chain with regular stock replenishment.",
      "Staff training and field assistance.",
      "POS software and inventory dashboards.",
      "Launch campaigns and local brand building.",
      "A dedicated support team throughout the 5-year franchise term.",
    ],
  },
  {
    title: "Choosing a Supermarket Location in Gorakhpur",
    items: [
      "Choose a commercial area or a high-density residential area.",
      "The minimum floor area is 600 sq ft, and the property can be owned or rented.",
      "Visit the site on a weekday morning, a weekday evening and a weekend to judge footfall.",
      "Check road visibility, parking and ease of access, which matter more for larger stores.",
      "Look at nearby competition and the type of customers around.",
      "Keep a computer system and stable internet ready for POS billing.",
      "Share the site with our team for a location review.",
    ],
  },
  {
    title: "Who Can Apply?",
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
    title: "Documents Required",
    items: [
      "ID proof: Aadhaar, PAN or Voter ID.",
      "Educational certificate of your highest qualification.",
      "Bank details: cancelled cheque or passbook copy.",
      "Property documents: ownership proof or rental agreement.",
    ],
  },
  {
    title: "How to Start in 4 Steps",
    items: [
      "Step 1 – Inquiry: Submit the form on thebuyzaarmart.com or call 9217991727.",
      "Step 2 – Review: Our team studies your location, space and budget, then recommends a format and model.",
      "Step 3 – Agreement and documents: Complete KYC and review the franchise agreement.",
      "Step 4 – Setup and launch: Interior, POS, staff training and marketing are completed before your grand opening.",
      "Our team is available Monday to Saturday, 9 AM to 7 PM, and responds within 24 hours.",
    ],
  },
  {
    title: "Common Concerns Answered",
    subsections: [
      {
        title: "Is a supermarket too big for a first-time owner?",
        items: [
          "Start with the format that fits your space and budget. Our team recommends a suitable option and supports you through setup.",
        ],
      },
      {
        title: "Will I have to manage staff and stock myself?",
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
    ],
  },
  {
    title: "Growth Potential",
    items: [
      "Once your first store is stable, you can plan more stores in Gorakhpur and nearby cities.",
      "The Buyzaar Mart supports multi-unit growth through structured expansion planning.",
      "Each store creates local jobs and supports nearby suppliers.",
    ],
  },
  {
    title: "Mistakes to Avoid",
    items: [
      "Choosing a format that is too large for local demand.",
      "Picking a location only because rent is low.",
      "Ignoring the expired and damaged stock policy.",
      "Skipping a visit to a working store.",
      "Expecting guaranteed profit, because no genuine franchise can promise it.",
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
              Supermarket Franchise Opportunity in Gorakhpur – Open a Buyzaar
              Mart Supermarket for Everyday Family Shopping
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
                Apply for a Supermarket Franchise in Gorakhpur
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
            currentSlug="/gorakhpur/supermarket-franchise-opportunity-gorakhpur"
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