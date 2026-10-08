import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Franchise Opportunity in Gorakhpur | The Buyzaar Mart",
  description:
    "Explore a franchise opportunity in Gorakhpur with The Buyzaar Mart. Open a Mini, Super or Hyper Mart from ₹15 Lakh with full support. Apply today!",
  url: "https://www.thebuyzaarmart.com/gorakhpur/franchise-opportunity-in-gorakhpur",
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
    name: "The Buyzaar Mart Franchise Formats in Gorakhpur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600 to 1,000 sq. ft. neighbourhood grocery and retail franchise format for Gorakhpur.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1,000 to 3,000 sq. ft. supermarket franchise format for Gorakhpur markets and busy community zones.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3,000 to 8,000 sq. ft. large-format retail franchise for high-traffic commercial zones in Gorakhpur.",
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
      name: "What is the franchise opportunity in Gorakhpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is a chance to open a Buyzaar Mart grocery store with company support for setup, supply chain, technology and marketing.",
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

const sections = [
  {
    title: "Explore a Franchise Opportunity in Gorakhpur",
    points: [
      "A franchise opportunity in Gorakhpur lets you start a business under an established brand, using tested systems and ongoing support instead of building everything alone.",
      "The Buyzaar Mart offers a grocery and supermarket franchise in three formats: Mini Mart, Super Mart and Hyper Mart.",
      "Investment starts from ₹15 Lakh, and the brand indicates an effective gross margin of 18–20% on sales.",
      "The opportunity suits first-time entrepreneurs, salaried professionals, business owners, property owners and families.",
      "Daily-need retail is a practical category, because people buy groceries and household essentials throughout the year.",
    ],
  },
  {
    title: "Why Gorakhpur Is a Good City for Franchise Business",
    groups: [
      {
        title: "Strong Position in Eastern Uttar Pradesh",
        points: [
          "Gorakhpur is the administrative headquarters of the Gorakhpur division and a leading city of eastern Uttar Pradesh.",
          "It is also the headquarters of the North Eastern Railway zone, which keeps a steady movement of employees, students and families.",
          "A busy city with regular daily needs creates stable demand for retail.",
        ],
      },
      {
        title: "Shopping Habits Are Changing",
        points: [
          "Cities across Uttar Pradesh, including Gorakhpur, are showing strong acceptance of organised retail formats.",
          "Customers increasingly look for clean stores, clear pricing, wide product choice and digital billing.",
          "Branded stores can meet these expectations more consistently than many traditional shops.",
        ],
      },
      {
        title: "Practical Business Advantages",
        points: [
          "Rent and staffing costs in tier-2 cities are generally lower than in large metros.",
          "Local families value convenience, so a neighbourhood mart can build repeat customers quickly.",
        ],
      },
    ],
  },
  {
    title: "Franchise vs Starting Your Own Business",
    groups: [
      {
        title: "Benefits of a Franchise",
        points: [
          "You start with a recognised brand identity instead of building trust from zero.",
          "Standard procedures reduce trial and error in the first months.",
          "Training and support help you avoid common beginner mistakes.",
          "Central sourcing and supply systems can improve stock availability and pricing.",
        ],
      },
      {
        title: "Points to Keep in Mind",
        points: [
          "A franchise follows brand rules, so you must be ready to work within the system.",
          "You pay a franchise fee and follow the agreement terms.",
          "Results depend on location, footfall and store management, and returns are not guaranteed.",
        ],
      },
    ],
  },
  {
    title: "Why Retail Franchise Works Well",
    points: [
      "Groceries and essentials are bought in every season, not only during festivals or sales.",
      "Customers return often, which supports repeat sales.",
      "Clear systems for stock, billing and pricing make the model easier to learn.",
    ],
  },
  {
    title: "Why Daily-Need Retail Is a Practical Choice",
    points: [
      "Steady demand: groceries and household items are needed every week, in every season.",
      "Repeat customers: families return often when a store is clean, fairly priced and well stocked.",
      "Wide basket: one visit can include food, personal care, beverages and cleaning products.",
      "Branded products: well-known FMCG names help customers trust a new store faster.",
      "Repeatable model: a stable store can be copied in nearby areas using the same systems.",
    ],
  },
  {
    title: "The Buyzaar Mart Franchise at a Glance",
    groups: [
      {
        title: "About the Brand",
        points: [
          "The Buyzaar Mart is a supermarket and grocery franchise brand headquartered in Noida.",
          "It has operational stores in Noida, Gangoh, Saharanpur (Behat) and Haridwar (Bahadrabad).",
          "It is expanding across Uttar Pradesh, Haryana and Delhi NCR.",
          "The parent company, Markview Fabrication Pvt Ltd, is a registered private limited company.",
        ],
      },
      {
        title: "Mission and Identity",
        points: [
          "Our mission is to empower communities through retail ownership, with fairness, affordability and convenience.",
          'Our tagline, "Apna Bazaar – Bachat Ka Saath, Quality Ki Baat", reflects our focus on savings and quality.',
        ],
      },
      {
        title: "Credentials",
        points: [
          "FSSAI licensed.",
          "GST registered.",
          "MSME certified under the Ministry of MSME, Government of India.",
          "Standard franchise agreement with a 5-year term and renewal support.",
        ],
      },
    ],
  },
  {
    title: "Key Advantages of This Franchise Opportunity",
    groups: [
      {
        title: "Hassle-Free Inventory Assurance",
        points: [
          "Expired and damaged goods are taken back by the company.",
          "This protects your capital from one of the biggest risks in grocery retail.",
        ],
      },
      {
        title: "Wide Range from Trusted Brands",
        points: [
          "Direct sourcing partnerships with 50+ FMCG companies support authentic stock and competitive pricing.",
          "Customers find groceries, personal care, beverages, snacks and homecare under one roof.",
        ],
      },
      {
        title: "Technology-Enabled Operations",
        points: [
          "POS-enabled billing for fast and accurate checkout.",
          "CRM tools to understand customer buying patterns.",
          "Real-time inventory tracking and sales dashboards.",
        ],
      },
      {
        title: "Local Marketing Support",
        points: [
          "Launch campaigns, social media promotion and local brand building are part of the support.",
          "Uniform branding and store design give your store a professional look.",
        ],
      },
      {
        title: "Company-Managed Option",
        points: [
          "Under FOCM, you own the store and the company manages staffing, inventory, billing and customer service.",
          "This reduces your daily workload while you keep ownership of the business.",
        ],
      },
    ],
  },
  {
    title: "Choose Your Business Model",
    groups: [
      {
        title: "FOCM – Franchise Owned, Company Managed",
        points: [
          "You invest and own the store, while the company manages daily operations.",
          "Best for salaried professionals, business owners and property owners with limited time.",
        ],
      },
      {
        title: "FOCO – Franchise Owned, Company Operated",
        points: [
          "You run the store yourself with the brand's systems, training and supply chain support.",
          "Best for entrepreneurs who want to lead the store personally.",
        ],
      },
      {
        title: "Which Model Fits You?",
        points: [
          "Choose FOCM if you want ownership with less daily involvement.",
          "Choose FOCO if you want full control of daily decisions.",
          "Our team can help you decide after understanding your time, budget and location.",
        ],
      },
    ],
  },
  {
    title: "Store Formats Available",
    groups: [
      {
        title: "Mini Mart (600–1000 sq ft)",
        points: [
          "Suited to residential colonies and smaller commercial areas.",
          "Covers grocery and staples, personal care, beverages, homecare and hygiene, stationery, snacks and biscuits.",
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
        title: "Format Selection",
        points: [
          "Match the format to your space, budget and local customer base.",
          "Our team reviews your location and recommends the most suitable option.",
        ],
      },
    ],
  },
  {
    title: "Investment and Returns",
    groups: [
      {
        title: "What the Investment Covers",
        points: [
          "The investment starts from ₹15 Lakh for a single unit and depends on format and area.",
          "It covers stock, interior, software fee, franchise fee (including 18% GST) and security deposit.",
          "The investment calculator on the franchise page shows an estimate for your size.",
          "Rent for the premises is paid by the franchise partner.",
        ],
      },
      {
        title: "Understanding the Margin",
        points: [
          "The brand indicates an effective gross margin of 18–20% on sales.",
          "Gross margin is before rent, electricity, staff and other running costs.",
          "Net earnings vary by location, footfall, format and management, and returns are not guaranteed.",
        ],
      },
    ],
  },
  {
    title: "Are You Ready? Pre-Application Checklist",
    points: [
      "Budget: you have planned the investment and kept some money ready for rent and daily needs.",
      "Space: you have a property of at least 600 sq ft, owned or rented, in a commercial or high-density residential area.",
      "Time: you know whether you want a company-managed or owner-operated model.",
      "Documents: your ID, education, bank and property papers are ready.",
      "Technology: you can arrange a computer system and stable internet for POS billing.",
      "Expectations: you understand that results depend on effort, location and local demand.",
    ],
  },
  {
    title: "What the Company Provides",
    points: [
      "Site selection assistance based on footfall, demographics and competition.",
      "Store interior, branding and shelf layout guidance.",
      "Managed supply chain with regular stock replenishment.",
      "Staff training and field assistance.",
      "POS software and inventory dashboards.",
      "Marketing and brand-building support.",
      "A dedicated support team throughout the franchise term.",
    ],
  },
  {
    title: "Choosing a Location in Gorakhpur",
    points: [
      "Select dense residential areas or active commercial streets.",
      "Visit on a weekday morning, a weekday evening and a weekend to judge footfall.",
      "Check parking, road visibility and ease of access.",
      "Look at nearby competition and customer profile.",
      "Compare rent with expected sales so that fixed costs stay manageable.",
      "Share the site with our team for a review before you commit.",
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
    title: "How to Start Your Franchise in 4 Steps",
    points: [
      "Step 1 – Inquiry: Submit the form on thebuyzaarmart.com or call 9217991727.",
      "Step 2 – Review: Our team studies your location, space and budget, then recommends a format and model.",
      "Step 3 – Agreement and documentation: Complete KYC and review the franchise agreement.",
      "Step 4 – Setup and launch: Interior, POS, staff training and marketing are completed before your grand opening.",
      "Our team is available Monday to Saturday, 9 AM to 7 PM, and responds within 24 hours.",
    ],
  },
  {
    title: "What Happens After Your Store Opens?",
    points: [
      "The company continues stock replenishment so your shelves stay filled with in-date products.",
      "Dashboards and regular reports show sales, stock status and customer activity.",
      "Staff training and field assistance continue to help the store follow brand standards.",
      "Local promotions and brand building keep your store visible in the neighbourhood.",
      "The support team is available for technical and operational questions throughout the franchise term.",
    ],
  },
  {
    title: "Growth and Community Impact",
    points: [
      "Once your first store is stable, you can plan additional stores in Gorakhpur and nearby cities.",
      "The Buyzaar Mart supports multi-unit growth through structured expansion planning.",
      "Each store creates local jobs and supports nearby suppliers.",
      "A clean, fairly priced neighbourhood mart improves everyday shopping for local families.",
    ],
  },
  {
    title: "Who Should Consider This Opportunity?",
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
    title: "Common Concerns Answered",
    groups: [
      {
        title: "Is it risky to join a franchise?",
        points: [
          "Every business has risk, so check the agreement, the investment details, the compliance certificates and the support promised in writing.",
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
      {
        title: "Can I grow beyond one store?",
        points: [
          "Yes. Once your first store is stable, you can plan more stores through structured expansion planning.",
        ],
      },
    ],
  },
  {
    title: "Mistakes to Avoid",
    points: [
      "Choosing a franchise only for low investment.",
      "Skipping the agreement review and the company registration details.",
      "Picking a location only because rent is low.",
      "Ignoring the expired and damaged stock policy.",
      "Expecting guaranteed profit, because no genuine franchise can promise it.",
    ],
  },
];

const faqs = [
  {
    question: "What is the franchise opportunity in Gorakhpur?",
    answer:
      "It is a chance to open a Buyzaar Mart grocery store with company support for setup, supply chain, technology and marketing.",
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
              Franchise Opportunity in Gorakhpur – Own a Buyzaar Mart and Build a
              Trusted Local Retail Business
            </h1>

            {sections.map((section) => (
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

                {section.groups
                  ? section.groups.map((group) => (
                      <div className="mt-4" key={group.title}>
                        <h3 className="font-medium text-gray-900">
                          {group.title}
                        </h3>

                        <ul className="mt-2 list-disc space-y-2 pl-6">
                          {group.points.map((point) => (
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
                Start Your Franchise Journey in Gorakhpur
              </h2>

              <ul className="list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Open a Mini Mart, Super Mart or Hyper Mart with The Buyzaar Mart
                  and receive support for setup, supply chain, POS, training and
                  marketing.
                </li>
                <li>
                  Choose FOCM for company-managed operations or FOCO if you want
                  to run the store yourself with the brand&apos;s systems and
                  support.
                </li>
                <li>
                  Investment starts from ₹15 Lakh, subject to the selected format,
                  location, store area and final franchise agreement.
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
            currentSlug="/gorakhpur/franchise-opportunity-in-gorakhpur"
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