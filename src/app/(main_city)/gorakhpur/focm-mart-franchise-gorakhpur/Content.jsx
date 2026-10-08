import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const seoMeta = {
  title: "FOCM Mart Franchise Gorakhpur | The Buyzaar Mart",
  description:
    "Open a FOCM mart franchise in Gorakhpur with The Buyzaar Mart. You own the store, the company manages it. Start from ₹15 Lakh. Apply today!",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FOCM Mart Franchise Gorakhpur | The Buyzaar Mart",
  description: seoMeta.description,
  url: "https://www.thebuyzaarmart.com/gorakhpur/focm-mart-franchise-gorakhpur",
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
    name: "The Buyzaar Mart FOCM Franchise Formats in Gorakhpur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600–1000 sq ft FOCM grocery franchise format for residential colonies and smaller commercial areas.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1000–3000 sq ft FOCM grocery franchise format for main markets and busy community zones.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3000–8000 sq ft FOCM supermarket franchise format for high-traffic commercial zones.",
      },
    ],
  },
};

const faqItems = [
  {
    question: "What is a FOCM mart franchise in Gorakhpur?",
    answer:
      "FOCM means Franchise Owned, Company Managed. You own the store and The Buyzaar Mart runs daily operations.",
  },
  {
    question: "What is the minimum investment?",
    answer:
      "A single unit starts from ₹15 Lakh. The final amount depends on format, area, stock and interiors.",
  },
  {
    question: "Do I need retail experience?",
    answer:
      "No. The company manages staffing, inventory, billing and marketing for you.",
  },
  {
    question: "How much space do I need?",
    answer:
      "A Mini Mart needs 600–1000 sq ft. Super Mart needs 1000–3000 sq ft and Hyper Mart needs 3000–8000 sq ft.",
  },
  {
    question: "What if products expire or get damaged?",
    answer:
      "The company takes back expired and damaged goods under its inventory guarantee.",
  },
  {
    question: "What margin can I expect?",
    answer:
      "The brand indicates an effective gross margin of 18–20%. Actual results vary and are not guaranteed.",
  },
  {
    question: "How long is the franchise term?",
    answer: "The franchise term is 5 years, with renewal support.",
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
    title: "Start a FOCM Mart Franchise in Gorakhpur with The Buyzaar Mart",
    items: [
      "Looking for a FOCM mart franchise in Gorakhpur? The Buyzaar Mart lets you invest in a modern neighbourhood grocery and supermarket while the company handles the daily operations.",
      "FOCM means Franchise Owned, Company Managed. The ownership and returns stay with you, and the management stays with our experienced retail team.",
      "Investment starts from ₹15 Lakh, with an effective gross margin of 18–20% on sales.",
      "This opportunity suits first-time entrepreneurs, salaried professionals, local business owners and families who want a steady retail income in eastern Uttar Pradesh.",
      "The Buyzaar Mart is FSSAI licensed, GST registered and MSME certified, so you partner with a legally compliant and transparent brand.",
    ],
  },
  {
    title: "What Is the FOCM Model?",
    subsections: [
      {
        title: "FOCM Full Form and Meaning",
        items: [
          "FOCM stands for Franchise Owned, Company Managed.",
          "You invest in the store and own the business, while The Buyzaar Mart manages staffing, inventory, billing, marketing and performance tracking.",
          "It removes the biggest barrier to retail ownership, which is the need to be present in the shop every single day.",
        ],
      },
      {
        title: "How FOCM Is Different from a Regular Franchise",
        items: [
          "In a regular franchise, the owner hires staff, orders stock and solves daily problems alone.",
          "In the FOCM model, the company&apos;s retail team runs these tasks using tested standard operating procedures, so you are not experimenting with an unknown system.",
          "Owners receive regular performance dashboards showing sales, stock status and customer feedback.",
        ],
      },
      {
        title: "Who Handles What",
        items: [
          "Franchise partner: investment, store premises owned or rented, rent and legal documentation.",
          "The Buyzaar Mart: store setup, supply chain, POS software, staff training, local marketing and ongoing operational support.",
        ],
      },
    ],
  },
  {
    title: "Why Gorakhpur Is Ready for a Mart Franchise",
    subsections: [
      {
        title: "A Growing City with Daily Retail Demand",
        items: [
          "Gorakhpur is a major city of eastern Uttar Pradesh and the administrative headquarters of the Gorakhpur division.",
          "It is also the headquarters of the North Eastern Railway zone, which keeps a steady flow of employees, travellers and families through the city.",
          "Households buy groceries, FMCG products and home essentials every day, which creates stable and repeat demand for a well-run mart.",
        ],
      },
      {
        title: "The Shift from Kirana to Organised Retail",
        items: [
          "Many local shops still lack digital billing, inventory tracking, wide product ranges and consistent pricing.",
          "Customers increasingly prefer clean, well-stocked stores with fair prices and all essentials under one roof.",
          "Cities across Uttar Pradesh, including Gorakhpur, are showing strong acceptance of organised retail formats.",
          "A branded mart fills this gap and builds customer loyalty faster than a standalone neighbourhood shop.",
        ],
      },
    ],
  },
  {
    title: "Why Choose The Buyzaar Mart FOCM Franchise in Gorakhpur",
    subsections: [
      {
        title: "Company-Managed Operations",
        items: [
          "Daily management is handled by the company, so you can continue your job or existing business.",
          "You own the store, and our team runs it with the same care as its own.",
        ],
      },
      {
        title: "Hassle-Free Inventory Assurance",
        items: [
          "Expired and damaged goods are taken back by the company under its inventory guarantee.",
          "This lowers the risk of stock loss, which is one of the biggest worries in grocery retail.",
        ],
      },
      {
        title: "Technology-First Store",
        items: [
          "POS-enabled billing, real-time sales tracking and inventory dashboards are available from day one.",
          "Customer relationship management (CRM) tools help the store build repeat customers.",
        ],
      },
      {
        title: "Wide Product Range at Affordable Prices",
        items: [
          "Core categories include grocery and staples, personal care, beverages, snacks, biscuits, homecare, hygiene and stationery.",
          "Larger formats add dairy items, fruits and vegetables, gifts, toys and frozen ready-to-eat products.",
          "Value-focused pricing keeps local families coming back to the store.",
        ],
      },
      {
        title: "Local Marketing Support",
        items: [
          "Launch campaigns, hyper-local promotions, digital marketing and customer acquisition support are part of the franchise model.",
          "Uniform branding and store design give your Gorakhpur store a professional and recognisable identity.",
        ],
      },
      {
        title: "Transparent and Compliant Business",
        items: [
          "A standard franchise agreement, clear documentation and regular reporting keep the partnership transparent.",
          "The parent company, Markview Fabrication Pvt Ltd, is a registered private limited company.",
        ],
      },
    ],
  },
  {
    title: "Store Formats Available in Gorakhpur",
    subsections: [
      {
        title: "Mini Mart (600–1000 sq ft)",
        items: [
          "Best for residential colonies and smaller commercial areas with steady footfall.",
          "Categories include personal care, beverages, grocery and staples, homecare and hygiene, stationery, snacks and biscuits.",
        ],
      },
      {
        title: "Super Mart (1000–3000 sq ft)",
        items: [
          "Suited to main market areas and busy community zones.",
          "Adds dairy items and fruits and vegetables to the Mini Mart range.",
        ],
      },
      {
        title: "Hyper Mart (3000–8000 sq ft)",
        items: [
          "Designed for high-traffic commercial zones and larger properties.",
          "Adds gifts, toys and frozen ready-to-eat products for the widest selection and a premium shopping experience.",
        ],
      },
      {
        title: "How to Choose the Right Format",
        items: [
          "Match the format to your available space, your budget and the local customer base.",
          "Our team assesses your Gorakhpur location and recommends the most suitable format.",
        ],
      },
    ],
  },
  {
    title: "FOCM Franchise Investment and Returns",
    subsections: [
      {
        title: "Investment Required",
        items: [
          "The investment for a single unit starts from ₹15 Lakh.",
          "The final amount depends on the store format and area, and it includes stock, interior, software fee, franchise fee including 18% GST and security deposit.",
          "Use the investment calculator on the franchise page to get an estimate for your chosen format and size.",
          "Rent for the store premises is paid by the franchise partner.",
        ],
      },
      {
        title: "Expected Returns",
        items: [
          "The Buyzaar Mart indicates an effective gross margin of 18–20%.",
          "Gross margin is calculated before store expenses such as rent, electricity and other running costs.",
          "Actual earnings vary by location, footfall and store format, and returns are not guaranteed.",
          "Controlled stock, reduced wastage and professional management help protect your margins.",
        ],
      },
    ],
  },
  {
    title: "What You Get as a Franchise Partner",
    items: [
      "Site selection guidance to help you finalise the right location.",
      "Complete store setup, including interior design, branding and shelf layout.",
      "Managed supply chain with regular stock replenishment and quality products sourced directly from manufacturers.",
      "POS billing software with sales and inventory dashboards.",
      "Staff training and field assistance from the head office team.",
      "Marketing support covering launch campaigns, social media and local area brand building.",
      "A dedicated support team for technical and operational queries.",
      "A 5-year franchise term with renewal support.",
    ],
  },
  {
    title: "Ideal Location and Space Requirements",
    items: [
      "Minimum floor area of 600 sq ft for a Mini Mart.",
      "Preferred locations are commercial areas or high-density residential areas.",
      "The property can be owned or rented.",
      "A computer system and a stable internet connection are needed for POS billing.",
      "Look for areas with strong daily footfall, such as housing colonies, main markets, and roads near schools and offices.",
    ],
  },
  {
    title: "Who Can Apply for a FOCM Mart Franchise in Gorakhpur?",
    items: [
      "Local investors who want a professionally managed, income-generating business.",
      "Salaried professionals who want a second income stream without leaving their jobs.",
      "Business owners who want to diversify into daily-need retail.",
      "Property owners in Gorakhpur who have a suitable commercial space.",
      "Families who want to build a long-term business for the next generation.",
      "No prior retail experience is required, because the company manages operations.",
    ],
  },
  {
    title: "Documents Required",
    items: [
      "ID proof: Aadhaar, PAN or Voter ID.",
      "Educational certificate of your highest qualification (10th, 12th, graduation or post-graduation).",
      "Bank details: cancelled cheque or a copy of the passbook.",
      "Property documents for the proposed store: ownership proof or rental agreement.",
    ],
  },
  {
    title: "How to Get Started – 3 Simple Steps",
    items: [
      "Step 1 – Submit an inquiry: Fill in the inquiry form on thebuyzaarmart.com or call 9217991727.",
      "Step 2 – Complete documentation: Submit your KYC, review the franchise agreement and finish the legal formalities with our team&apos;s guidance.",
      "Step 3 – Launch your store: The company completes setup, staff training and local marketing, and supports your grand opening.",
      "Our team is available Monday to Saturday, 9 AM to 7 PM, and responds within 24 hours.",
    ],
  },
  {
    title: "FOCM Mart vs Running Your Own Kirana Store",
    items: [
      "Operations: a kirana depends on you every day, while a FOCM mart is managed by a professional team.",
      "Technology: a kirana often uses manual billing, while a Buyzaar Mart uses POS and inventory dashboards.",
      "Stock risk: a kirana bears expiry losses alone, while Buyzaar takes back expired and damaged goods.",
      "Branding: a kirana builds a name slowly, while a Buyzaar Mart starts with an established brand identity.",
      "Support: a kirana has none, while a franchise partner gets training, audits and a dedicated support team.",
    ],
  },
  {
    title: "Multi-Unit Growth Potential",
    items: [
      "Once your first store is stable, you can expand to more stores across Gorakhpur and nearby cities.",
      "The Buyzaar Mart supports multi-unit growth with structured expansion planning.",
      "The brand is expanding across Uttar Pradesh, Haryana and Delhi NCR, so your partnership has room to grow.",
    ],
  },
  {
    title: "Tips to Get the Best Results from Your Gorakhpur Store",
    items: [
      "Choose a location with visible frontage and easy parking or walking access.",
      "Review the investment calculator before you commit to a format.",
      "Keep your documents ready to speed up onboarding.",
      "Follow the company&apos;s SOPs and review dashboard reports regularly.",
      "Stay in touch with the support team to adapt the product range to local preferences.",
    ],
  },
  {
    title: "Why The Buyzaar Mart Is a Trusted Retail Partner",
    items: [
      "The Buyzaar Mart is headquartered in Noida and is growing its franchise network across Uttar Pradesh, Haryana and Delhi NCR.",
      "The brand mission is to empower communities through retail ownership, with fairness, affordability and convenience for every customer.",
      "Its tagline, Apna Bazaar – Bachat Ka Saath, Quality Ki Baat, reflects a focus on savings and product quality.",
      "The company brings experience in retail operations, POS technology, supply chain management, store design and franchise compliance.",
      "Every partner store follows the same systems, so customers in Gorakhpur get a consistent shopping experience.",
    ],
  },
  {
    title: "Common Concerns Answered",
    subsections: [
      {
        title: "Will I have to manage staff and stock myself?",
        items: [
          "No. Under FOCM, the company&apos;s team handles staffing, ordering, replenishment and billing, so you stay focused on the investment.",
        ],
      },
      {
        title: "What if I have never run a business?",
        items: [
          "That is not a problem. Standard procedures, training and a dedicated support team guide every stage of the franchise.",
        ],
      },
      {
        title: "How will I track my store&apos;s performance?",
        items: [
          "You receive dashboards and regular reports on sales, inventory status and customer satisfaction, so you always know how your money is working.",
        ],
      },
      {
        title: "Is the franchise agreement clear and legal?",
        items: [
          "Yes. The franchise runs on a standard agreement, and the brand holds FSSAI, GST and MSME credentials for full compliance.",
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
              FOCM Mart Franchise in Gorakhpur – You Own the Store, We Run It
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
                Take the First Step Towards Your Gorakhpur Mart Franchise
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Gorakhpur is growing, and its families deserve a modern,
                  trustworthy neighbourhood mart.
                </li>
                <li>
                  The FOCM model gives you ownership without the daily
                  operational burden.
                </li>
                <li>
                  Apply today at thebuyzaarmart.com or call 9217991727.
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
            currentSlug="/gorakhpur/focm-mart-franchise-gorakhpur"
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