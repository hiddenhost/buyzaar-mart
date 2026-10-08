import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const seoMeta = {
  title: "Organised Mart Franchise in Gorakhpur | The Buyzaar Mart",
  description:
    "Open an organised mart franchise in Gorakhpur with The Buyzaar Mart. POS billing, managed supply and stock take-back, from ₹15 Lakh. Apply today!",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Organised Mart Franchise in Gorakhpur | The Buyzaar Mart",
  description: seoMeta.description,
  url: "https://www.thebuyzaarmart.com/gorakhpur/organised-mart-franchise-gorakhpur",
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
    name: "The Buyzaar Mart Organised Mart Formats in Gorakhpur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600–1000 sq ft organised grocery franchise format for residential colonies and smaller commercial areas.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1000–3000 sq ft organised grocery franchise format for main markets and busy community zones.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3000–8000 sq ft organised supermarket franchise format for high-traffic commercial zones.",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is an organised mart franchise?",
    answer:
      "It is a branded store that runs on standard systems for sourcing, billing, display and service, supported by the franchisor.",
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
    title: "What Is an Organised Mart Franchise?",
    items: [
      "An organised mart is a branded store that runs on set systems for sourcing, pricing, billing, display, hygiene and customer service, instead of depending on one owner&apos;s habits.",
      "An organised mart franchise lets you own such a store under a recognised brand, with training and support from the franchisor.",
      "The Buyzaar Mart offers this model in Gorakhpur through Mini Mart, Super Mart and Hyper Mart formats.",
      "Investment starts from ₹15 Lakh, and the brand indicates an effective gross margin of 18–20% on sales.",
      "This page explains the pillars of organised retail, so you can see why customers prefer it and how it supports a stronger business.",
    ],
  },
  {
    title: "Why Gorakhpur Is Ready for Organised Retail",
    subsections: [
      {
        title: "A Large City with Daily Shopping Needs",
        items: [
          "Gorakhpur is the administrative headquarters of the Gorakhpur division and a leading city of eastern Uttar Pradesh.",
          "It is also the headquarters of the North Eastern Railway zone, which keeps a steady movement of employees, students and families.",
          "Daily grocery and household purchases create regular demand for well-run stores.",
        ],
      },
      {
        title: "Customer Expectations Are Rising",
        items: [
          "Cities across Uttar Pradesh, including Gorakhpur, are showing strong acceptance of organised retail formats.",
          "Shoppers now expect clean stores, clear pricing, wide choice, digital billing and dependable stock.",
          "Stores that meet these expectations can win loyal customers.",
        ],
      },
      {
        title: "Gaps in Traditional Retail",
        items: [
          "Many local shops still lack digital billing, inventory tracking and wide product range.",
          "Display, pricing and stock quality can vary from one shop to another.",
          "A branded organised mart can offer a more consistent experience.",
        ],
      },
    ],
  },
  {
    title: "The Pillars of an Organised Mart",
    subsections: [
      {
        title: "Pillar 1: Organised Sourcing",
        items: [
          "Products come through a managed supply chain and not through random purchases.",
          "Direct sourcing partnerships with 50+ FMCG companies support authentic stock and competitive pricing.",
          "Regular replenishment helps shelves stay full.",
        ],
      },
      {
        title: "Pillar 2: Clear Pricing and Digital Billing",
        items: [
          "POS-enabled billing gives accurate bills and faster checkout.",
          "Digital records reduce billing errors and help track sales.",
          "Customers see clear prices and trust the store more.",
        ],
      },
      {
        title: "Pillar 3: Quality and Stock Freshness",
        items: [
          "Expired and damaged goods are taken back by the company.",
          "Fresh, in-date stock protects customer trust and reduces loss for the owner.",
        ],
      },
      {
        title: "Pillar 4: Store Design and Hygiene",
        items: [
          "Uniform branding, clean displays and a planned shelf layout make shopping easy.",
          "Customers know what to expect when they enter any Buyzaar Mart.",
        ],
      },
      {
        title: "Pillar 5: Trained Staff and Standard Procedures",
        items: [
          "Staff follow the same steps for ordering, billing, display and customer service.",
          "Training and field assistance help maintain brand standards.",
        ],
      },
      {
        title: "Pillar 6: Data and Reporting",
        items: [
          "Real-time inventory tracking helps reduce stockouts and overstocking.",
          "CRM tools and dashboards show customer buying patterns and sales performance.",
        ],
      },
      {
        title: "Pillar 7: Compliance and Trust",
        items: [
          "The Buyzaar Mart is FSSAI licensed, GST registered and MSME certified.",
          "A standard franchise agreement keeps terms clear for both sides.",
        ],
      },
    ],
  },
  {
    title: "Why Customers Prefer Organised Stores",
    items: [
      "They find everything in one place, which saves time and effort.",
      "They see clear prices and receive accurate digital bills.",
      "They trust fresh, in-date products from known brands.",
      "They enjoy clean aisles, easy browsing and helpful staff.",
      "They return to stores that stay consistent from one visit to the next.",
    ],
  },
  {
    title: "Organised Mart vs Unorganised Shop",
    items: [
      "Sourcing: an organised mart uses managed supply, while an unorganised shop often buys on its own and in small lots.",
      "Billing: an organised mart uses POS, while many unorganised shops use manual billing.",
      "Stock risk: an organised mart gets take-back support for expired goods, while an unorganised shop bears the loss alone.",
      "Display: an organised mart follows planned shelf layouts, while display varies widely in unorganised shops.",
      "Brand trust: an organised mart carries brand identity, while an unorganised shop builds trust slowly.",
      "Data: an organised mart tracks sales and stock, while an unorganised shop often relies on memory and guesswork.",
      "Support: an organised mart franchise gets training and a support team, while an unorganised owner works alone.",
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
    ],
  },
  {
    title: "Benefits of Owning an Organised Mart Franchise",
    subsections: [
      {
        title: "For the Owner",
        items: [
          "You start with a recognised brand and tested systems.",
          "Inventory assurance reduces the risk of stock loss.",
          "Dashboards give clear visibility of sales and stock.",
          "The company-managed option reduces your daily workload.",
        ],
      },
      {
        title: "For the Customer",
        items: [
          "A wide range of groceries, personal care, beverages, snacks and homecare under one roof.",
          "Value-focused prices and trusted brands.",
          "Clean stores with fast billing.",
        ],
      },
      {
        title: "For the Neighbourhood",
        items: [
          "Each store creates local jobs and supports nearby suppliers.",
          "Families get a convenient, dependable store close to home.",
        ],
      },
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
          "Match the format to your space, budget and the customers around the location.",
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
    title: "What the Company Provides",
    items: [
      "Site selection assistance based on footfall, demographics and competition.",
      "Store interior, branding and shelf layout guidance.",
      "Managed supply chain with regular stock replenishment.",
      "Staff training and field assistance.",
      "POS software and inventory dashboards.",
      "Launch campaigns, social media promotion and local brand building.",
      "A dedicated support team throughout the 5-year franchise term, with renewal support.",
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
    title: "How to Keep Your Mart Organised After Launch",
    items: [
      "Follow the company&apos;s standard procedures for ordering, billing and display.",
      "Check dashboard reports every week to find fast-moving and slow-moving products.",
      "Keep shelves clean, full and easy to browse.",
      "Remove slow-moving or near-expiry items early and use the take-back support.",
      "Train new staff on the same standards as the existing team.",
      "Share customer feedback with the support team so the product mix suits local needs.",
    ],
  },
  {
    title: "Common Concerns Answered",
    subsections: [
      {
        title: "Does organised retail mean higher prices?",
        items: [
          "Not necessarily. Value-focused pricing and managed sourcing help keep prices affordable.",
        ],
      },
      {
        title: "Will I have to manage staff and stock myself?",
        items: [
          "Not under the company-managed model, where the team handles staffing, ordering and billing.",
        ],
      },
      {
        title: "Can I visit a working mart first?",
        items: [
          "Yes. Visiting an operating store and speaking with the team is a smart step before you invest.",
        ],
      },
    ],
  },
  {
    title: "Growth Potential",
    items: [
      "Once your first mart is stable, you can plan more stores in Gorakhpur and nearby cities.",
      "The Buyzaar Mart supports multi-unit growth through structured expansion planning.",
      "Every new store follows the same systems, so customers get a consistent experience.",
    ],
  },
  {
    title: "Mistakes to Avoid",
    items: [
      "Choosing a franchise only because the investment is low.",
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
              Organised Mart Franchise in Gorakhpur – Bring a Well-Run, Branded
              Store to Your Neighbourhood
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
                Start Your Organised Mart in Gorakhpur
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
            currentSlug="/gorakhpur/organised-mart-franchise-gorakhpur"
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