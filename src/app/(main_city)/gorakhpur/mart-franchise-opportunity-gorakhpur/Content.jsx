import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const seoMeta = {
  title: "Mart Franchise Opportunity in Gorakhpur | The Buyzaar Mart",
  description:
    "Explore a mart franchise opportunity in Gorakhpur with The Buyzaar Mart. Choose a Mini, Super or Hyper Mart from ₹15 Lakh with full support. Apply today!",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mart Franchise Opportunity in Gorakhpur | The Buyzaar Mart",
  description: seoMeta.description,
  url: "https://www.thebuyzaarmart.com/gorakhpur/mart-franchise-opportunity-gorakhpur",
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
    name: "The Buyzaar Mart Franchise Formats in Gorakhpur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600–1000 sq ft mart franchise format for residential colonies and smaller commercial areas.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1000–3000 sq ft mart franchise format for main markets and busy community zones.",
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
    question: "What is the mart franchise opportunity in Gorakhpur?",
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
    title: "A Mart Franchise Opportunity Built Around Local Shoppers",
    items: [
      "A mart franchise opportunity in Gorakhpur lets you open a modern store where families can buy groceries, FMCG items and household essentials in one visit.",
      "The Buyzaar Mart offers three formats, Mini Mart, Super Mart and Hyper Mart, so the store can match your space and the needs of the area.",
      "Investment starts from ₹15 Lakh, and the brand indicates an effective gross margin of 18–20% on sales.",
      "The company supports you with setup, supply chain, POS technology, training and marketing.",
      "This page looks at the opportunity from the shopper&apos;s side, so you can see who your customers will be and how a mart earns their trust.",
    ],
  },
  {
    title: "Why Gorakhpur Is a Good Place for a Mart",
    subsections: [
      {
        title: "A Busy City with Regular Shopping Needs",
        items: [
          "Gorakhpur is the administrative headquarters of the Gorakhpur division and a leading city of eastern Uttar Pradesh.",
          "It is also the headquarters of the North Eastern Railway zone, which keeps a steady movement of employees, students and families.",
          "Daily purchases of groceries and household goods keep neighbourhood stores busy throughout the year.",
        ],
      },
      {
        title: "Shoppers Are Ready for Organised Stores",
        items: [
          "Cities across Uttar Pradesh, including Gorakhpur, are showing strong acceptance of organised retail formats.",
          "Customers prefer clean stores, clear pricing, wide choice and digital billing.",
          "A branded mart can offer these features more consistently than many traditional shops.",
        ],
      },
      {
        title: "Cost Advantages of a Tier-2 City",
        items: [
          "Rent and staffing in tier-2 cities are generally lower than in large metros.",
          "Lower running costs help a new mart manage its early months.",
        ],
      },
    ],
  },
  {
    title: "Know Your Customers: Who Will Shop at Your Mart?",
    subsections: [
      {
        title: "Families Buying Monthly and Weekly Needs",
        items: [
          "Families look for staples, packaged foods, personal care and cleaning products at fair prices.",
          "A wide range under one roof saves them from visiting several shops.",
        ],
      },
      {
        title: "Working Professionals and Employees",
        items: [
          "Busy customers value quick billing, easy parking and dependable stock.",
          "POS billing and well-organised shelves help serve them faster.",
        ],
      },
      {
        title: "Students and Young Shoppers",
        items: [
          "Snacks, beverages, stationery and personal care items are frequent purchases.",
          "Mini Mart and Super Mart formats cover these categories well.",
        ],
      },
      {
        title: "Everyday Neighbourhood Visitors",
        items: [
          "Many customers walk in for small, urgent purchases.",
          "Consistent availability builds the habit of coming back to your store.",
        ],
      },
    ],
  },
  {
    title: "Why a Mart Franchise Works",
    items: [
      "Daily need: groceries and household items are bought in every season.",
      "Festival and seasonal lift: festival and wedding seasons can raise demand for packaged foods, gifts and household items on top of everyday sales.",
      "Repeat visits: customers return often when a store is clean, fairly priced and well stocked.",
      "Wide basket: one visit can include food, personal care, beverages and cleaning products.",
      "Clear systems: stock, billing and pricing follow standard procedures.",
      "Brand trust: a branded mart earns confidence faster than a new unknown shop.",
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
    title: "What Makes a Buyzaar Mart Attractive to Shoppers",
    subsections: [
      {
        title: "Wide Choice at Affordable Prices",
        items: [
          "Groceries and staples, personal care, beverages, snacks, biscuits, homecare, hygiene and stationery are available in every format.",
          "Value-focused pricing keeps families coming back.",
        ],
      },
      {
        title: "Trusted Brands",
        items: [
          "Direct sourcing partnerships with 50+ FMCG companies support authentic stock and competitive pricing.",
          "Customers see familiar brands and feel confident buying.",
        ],
      },
      {
        title: "Fresh, In-Date Stock",
        items: [
          "Expired and damaged goods are taken back by the company.",
          "This helps the store keep shelves fresh and protects customer trust.",
        ],
      },
      {
        title: "Fast and Modern Billing",
        items: [
          "POS-enabled billing reduces waiting time and billing errors.",
          "CRM tools help the store understand repeat customers.",
        ],
      },
      {
        title: "Clean and Consistent Look",
        items: [
          "Uniform branding and store design give every outlet a professional identity.",
          "Customers know what to expect when they enter a Buyzaar Mart.",
        ],
      },
    ],
  },
  {
    title: "Store Formats and Who They Serve",
    subsections: [
      {
        title: "Mini Mart (600–1000 sq ft)",
        items: [
          "Best for residential colonies and smaller commercial areas.",
          "Serves families and walk-in customers who want quick, everyday shopping.",
          "Categories include grocery and staples, personal care, beverages, homecare and hygiene, stationery, snacks and biscuits.",
        ],
      },
      {
        title: "Super Mart (1000–3000 sq ft)",
        items: [
          "Best for main market areas and busy community zones.",
          "Adds dairy items and fruits and vegetables for a fuller daily-needs offer.",
          "Serves customers who want to complete most of their household shopping in one trip.",
        ],
      },
      {
        title: "Hyper Mart (3000–8000 sq ft)",
        items: [
          "Best for high-traffic commercial zones.",
          "Adds gifts, toys and frozen ready-to-eat products.",
          "Serves a wider catchment with the widest selection and a premium shopping experience.",
        ],
      },
      {
        title: "Choosing Your Format",
        items: [
          "Match the format to your space, budget and the shoppers in your area.",
          "Our team reviews your location and recommends the most suitable option.",
        ],
      },
    ],
  },
  {
    title: "A Day in the Life of Your Mart",
    subsections: [
      {
        title: "Morning",
        items: [
          "Shelves are stocked and displays are cleaned before opening.",
          "Early customers buy staples, dairy items and daily essentials.",
        ],
      },
      {
        title: "Afternoon",
        items: [
          "Footfall is steady with home-makers and walk-in customers.",
          "Staff handle billing, restocking and customer questions.",
        ],
      },
      {
        title: "Evening",
        items: [
          "Working customers visit after work for quick shopping.",
          "POS billing helps reduce queues during busy hours.",
        ],
      },
      {
        title: "Closing and Review",
        items: [
          "Sales and stock are checked on the dashboard.",
          "Reorder needs are planned so shelves are ready for the next day.",
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
      "A dedicated support team throughout the 5-year franchise term.",
    ],
  },
  {
    title: "Choosing the Right Location in Gorakhpur",
    items: [
      "Look for dense residential areas or active commercial streets with steady daily footfall.",
      "Visit the site on a weekday morning, a weekday evening and a weekend to judge footfall.",
      "Check road visibility, parking and ease of access.",
      "Look at nearby competition and the type of customers around.",
      "Confirm the space is at least 600 sq ft, owned or rented.",
      "Keep a computer system and stable internet ready for POS billing.",
      "Share the site with our team for a location review.",
    ],
  },
  {
    title: "Mart Franchise vs a Traditional Kirana Store",
    items: [
      "Range: a kirana carries limited products, while a mart offers wide categories under one roof.",
      "Billing: a kirana often bills manually, while a Buyzaar Mart uses POS and dashboards.",
      "Stock risk: a kirana owner bears expiry loss alone, while Buyzaar takes back expired and damaged goods.",
      "Brand: a kirana builds its name slowly, while a Buyzaar Mart starts with brand identity.",
      "Support: a kirana owner works alone, while franchise partners get training and a support team.",
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
        title: "Will I need to manage staff and stock myself?",
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
      {
        title: "Is it suitable for a first-time business owner?",
        items: [
          "Training, standard procedures and a support team guide you at each stage, but results are not guaranteed.",
        ],
      },
    ],
  },
  {
    title: "Growth Potential",
    items: [
      "Once your first mart is stable, you can plan more stores in Gorakhpur and nearby cities.",
      "The Buyzaar Mart supports multi-unit growth through structured expansion planning.",
      "Each mart creates local jobs and supports nearby suppliers.",
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
              Mart Franchise Opportunity in Gorakhpur – Open a Neighbourhood
              Buyzaar Mart That Families Trust
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
                Open Your Mart in Gorakhpur Today
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
            currentSlug="/gorakhpur/mart-franchise-opportunity-gorakhpur"
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