import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const seoMeta = {
  title: "Branded Grocery Franchise in Gorakhpur | The Buyzaar Mart",
  description:
    "Start a branded grocery franchise in Gorakhpur with The Buyzaar Mart. Trusted brand, POS billing and stock take-back, from ₹15 Lakh. Apply today!",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Branded Grocery Franchise in Gorakhpur | The Buyzaar Mart",
  description: seoMeta.description,
  url: "https://www.thebuyzaarmart.com/gorakhpur/branded-grocery-franchise-gorakhpur",
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
    name: "The Buyzaar Mart Branded Grocery Franchise Formats in Gorakhpur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600–1000 sq ft branded grocery franchise format for residential colonies and smaller commercial areas.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1000–3000 sq ft branded grocery franchise format for main markets and busy community zones.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3000–8000 sq ft branded supermarket franchise format for high-traffic commercial zones.",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is a branded grocery franchise?",
    answer:
      "It is a grocery store run under an established brand name, with set standards and support from the franchisor.",
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
    title: "What Is a Branded Grocery Franchise?",
    items: [
      "A branded grocery franchise is a store that operates under an established brand name, with set standards for products, pricing, store look and customer service.",
      "The brand gives you a ready identity, so customers can recognise and trust your store from the first day.",
      "The Buyzaar Mart offers this model in Gorakhpur through Mini Mart, Super Mart and Hyper Mart formats.",
      "Investment starts from ₹15 Lakh, and the brand indicates an effective gross margin of 18–20% on sales.",
      "This page explains what a brand adds to a grocery business and how The Buyzaar Mart supports you in building local trust.",
    ],
  },
  {
    title: "Why Brand Matters in Grocery Retail",
    subsections: [
      {
        title: "Customers Buy Trust Along with Products",
        items: [
          "Families choose stores where they feel sure about quality, pricing and freshness.",
          "A known brand reduces doubt, especially for new customers who have not visited the store before.",
        ],
      },
      {
        title: "Brand Shortens the Time to Build Loyalty",
        items: [
          "An independent shop may take a long time to earn customer confidence.",
          "A branded store starts with an identity, a standard look and a promise that customers can understand.",
        ],
      },
      {
        title: "Brand Brings Consistency",
        items: [
          "Customers expect the same cleanliness, billing and service on every visit.",
          "Standard procedures help the store deliver this experience each day.",
        ],
      },
    ],
  },
  {
    title: "Why Gorakhpur Is Ready for Branded Grocery Stores",
    subsections: [
      {
        title: "A Large and Active City",
        items: [
          "Gorakhpur is the administrative headquarters of the Gorakhpur division and a leading city of eastern Uttar Pradesh.",
          "It is also the headquarters of the North Eastern Railway zone, which keeps a steady movement of employees, students and families.",
          "Daily grocery needs create regular demand for stores that people can rely on.",
        ],
      },
      {
        title: "Shopping Preferences Are Changing",
        items: [
          "Cities across Uttar Pradesh, including Gorakhpur, are showing strong acceptance of organised retail formats.",
          "Shoppers want clean stores, clear pricing, wide choice and digital billing.",
          "Branded stores can meet these expectations more consistently than many standalone shops.",
        ],
      },
      {
        title: "Cost Advantages",
        items: [
          "Rent and staffing in tier-2 cities are generally lower than in large metros.",
          "Lower running costs help a new branded store manage its early months.",
        ],
      },
    ],
  },
  {
    title: "Why Branded Grocery Is a Dependable Franchise Category",
    items: [
      "Daily need: groceries and household essentials are bought in every season.",
      "Repeat visits: families return often to stores they trust.",
      "Wide basket: one visit can include food, personal care, beverages and cleaning products.",
      "Clear systems: stock, billing and pricing follow standard procedures.",
      "Scalable model: a stable store can be repeated in nearby areas using the same brand standards.",
    ],
  },
  {
    title: "About The Buyzaar Mart Brand",
    subsections: [
      {
        title: "Who We Are",
        items: [
          "The Buyzaar Mart is a supermarket and grocery franchise brand headquartered in Noida.",
          "It has operational stores in Noida, Gangoh, Saharanpur (Behat) and Haridwar (Bahadrabad).",
          "It is expanding across Uttar Pradesh, Haryana and Delhi NCR.",
          "The parent company, Markview Fabrication Pvt Ltd, is a registered private limited company.",
        ],
      },
      {
        title: "Brand Promise",
        items: [
          "Our tagline, Apna Bazaar – Bachat Ka Saath, Quality Ki Baat, reflects our focus on savings and quality.",
          "Our mission is to empower communities through retail ownership, with fairness, affordability and convenience.",
          "Stores are designed around the neighbourhood shopping habits of North India.",
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
    title: "What You Gain from the Buyzaar Mart Brand",
    subsections: [
      {
        title: "A Ready Identity",
        items: [
          "Uniform branding and store design give your outlet a professional and recognisable look.",
          "You do not need to design a store identity from zero.",
        ],
      },
      {
        title: "Trusted Product Range",
        items: [
          "Direct sourcing partnerships with 50+ FMCG companies support authentic stock and competitive pricing.",
          "Customers find familiar national brands in groceries, personal care, beverages, snacks and homecare.",
        ],
      },
      {
        title: "Quality Protection",
        items: [
          "Expired and damaged goods are taken back by the company.",
          "Fresh, in-date stock helps protect the brand&apos;s reputation and your own.",
        ],
      },
      {
        title: "Modern Store Operations",
        items: [
          "POS-enabled billing for fast and accurate checkout.",
          "CRM tools to understand customer buying patterns.",
          "Real-time inventory tracking and sales dashboards.",
        ],
      },
      {
        title: "Marketing Support",
        items: [
          "Launch campaigns, social media promotion and local brand building help your store become known in the neighbourhood.",
          "Marketing is designed to bring customers to your specific store.",
        ],
      },
    ],
  },
  {
    title: "Branded Grocery Store vs Unbranded Local Shop",
    items: [
      "Identity: a branded store has a recognised name and look, while an unbranded shop builds its name slowly.",
      "Trust: customers see a branded store as more dependable, while trust in an unbranded shop depends on personal acquaintance.",
      "Sourcing: a branded franchise uses managed supply, while an unbranded shop often buys alone.",
      "Billing: a branded store uses POS and digital records, while many unbranded shops bill manually.",
      "Stock risk: a branded franchise has take-back support, while an unbranded owner absorbs expiry loss.",
      "Support: a franchise partner gets training and a support team, while an unbranded owner works alone.",
    ],
  },
  {
    title: "Store Formats",
    subsections: [
      {
        title: "Mini Mart (600–1000 sq ft)",
        items: [
          "Suited to residential colonies and smaller commercial areas.",
          "Categories include grocery and staples, personal care, beverages, homecare and hygiene, stationery, snacks and biscuits.",
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
        title: "Choosing the Right Format",
        items: [
          "Match the format to your space, budget and the shoppers around the location.",
          "Our team reviews your site and recommends the most suitable option.",
        ],
      },
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
          "You run the store yourself with the brand&apos;s systems, training and supply chain support.",
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
          "The investment calculator on the franchise page gives an estimate for your size.",
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
    title: "How to Build Your Local Brand Reputation",
    subsections: [
      {
        title: "Keep Shelves Full and Fresh",
        items: [
          "Use dashboard data to restock fast-moving products on time.",
          "Remove near-expiry items early and use the company&apos;s take-back support.",
        ],
      },
      {
        title: "Offer a Clean and Friendly Store",
        items: [
          "Keep aisles clear, displays tidy and billing counters quick.",
          "Train staff to greet customers and answer questions politely.",
        ],
      },
      {
        title: "Stay Consistent",
        items: [
          "Follow the brand&apos;s standard procedures for ordering, billing and display.",
          "Consistency is what turns first-time visitors into regular customers.",
        ],
      },
      {
        title: "Listen to Local Customers",
        items: [
          "Share customer feedback with the support team so the product mix suits local preferences.",
          "Use CRM data to understand repeat buyers.",
        ],
      },
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
    title: "Location and Space Requirements",
    items: [
      "Choose a commercial area or a high-density residential area.",
      "The minimum floor area is 600 sq ft, and the property can be owned or rented.",
      "Visit the site on a weekday morning, a weekday evening and a weekend to judge footfall.",
      "Check road visibility, parking and ease of access.",
      "Look at nearby competition before you decide.",
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
        title: "Is a brand name enough to guarantee success?",
        items: [
          "No. A brand helps, but location, footfall, stock control and daily management also decide results.",
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
      "Each store adds to the brand&apos;s local presence and creates local jobs.",
    ],
  },
  {
    title: "Mistakes to Avoid",
    items: [
      "Choosing a brand only because the investment is low.",
      "Skipping the agreement review and company registration details.",
      "Picking a location only because rent is low.",
      "Ignoring the expired and damaged stock policy.",
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
              Branded Grocery Franchise in Gorakhpur – Open a Buyzaar Mart and
              Start with a Brand Customers Can Trust
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
                Start Your Branded Grocery Franchise in Gorakhpur
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
            currentSlug="/gorakhpur/branded-grocery-franchise-gorakhpur"
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