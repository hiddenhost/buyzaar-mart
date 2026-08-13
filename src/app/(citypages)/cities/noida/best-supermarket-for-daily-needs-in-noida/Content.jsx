import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const faqItems = [
  {
    question: "Which is the best supermarket for daily needs in Noida?",
    answer:
      "The Buyzaar Mart is a reliable supermarket offering groceries, fresh produce, dairy, and household essentials across Noida.",
  },
  {
    question: "Does The Buyzaar Mart stock all daily-need categories?",
    answer:
      "Yes, groceries, fresh produce, dairy, packaged foods, and household essentials are all available under one roof.",
  },
  {
    question: "Is home delivery available for daily needs items?",
    answer:
      "Yes, online ordering with doorstep delivery is available for added convenience.",
  },
  {
    question: "Are the products at The Buyzaar Mart regularly restocked?",
    answer:
      "Yes, stock is refreshed regularly to ensure consistent availability of daily-need items.",
  },
  {
    question:
      "Can I buy household and personal care items along with groceries?",
    answer:
      "Yes, household essentials and personal care products are available alongside groceries.",
  },
  {
    question: "What payment options are accepted at The Buyzaar Mart?",
    answer:
      "Cash, UPI, debit cards, credit cards, and other digital payment methods are accepted.",
  },
  {
    question: "Which areas in Noida does The Buyzaar Mart serve?",
    answer:
      "The Buyzaar Mart serves multiple residential sectors, including Sector 18, Sector 62, and Noida Extension.",
  },
  {
    question: "Does The Buyzaar Mart offer both online and offline shopping?",
    answer:
      "Yes, customers can shop in-store or order online for doorstep delivery.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Best Supermarket for Daily Needs in Noida | The Buyzaar Mart",
  description:
    "The Buyzaar Mart offers groceries, fresh produce, dairy, and household essentials under one roof for Noida households.",
  url: "https://www.thebuyzaarmart.com/noida/best-supermarket-for-daily-needs-in-noida",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Noida",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
};

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

const contentSections = [
  {
    title: "Why Noida Residents Need a Dependable Daily Needs Supermarket",
    items: [
      "Noida's population is expanding rapidly across sectors, townships, and IT hubs, increasing demand for organized retail",
      "Working professionals often have limited time to visit multiple shops for different daily items",
      "Small local kirana stores frequently lack variety, consistent stock, and modern billing systems",
      "Traffic and distance make it inconvenient to travel far for routine household shopping",
      "Families increasingly prefer a single, trusted store for groceries, produce, and essentials",
      "Rising expectations around hygiene, packaging, and product quality have shifted preference toward organized supermarkets",
    ],
  },
  {
    title:
      "What Makes The Buyzaar Mart the Best Supermarket for Daily Needs in Noida",
    items: [
      "Wide range of daily-need products available under one roof",
      "Fresh fruits, vegetables, dairy, and packaged foods stocked and restocked regularly",
      "Household essentials and personal care items available alongside groceries",
      "Organized store layout that makes locating everyday items quick and simple",
      "Modern point-of-sale billing systems for fast, accurate checkout",
      "Trained staff available to guide customers and answer product queries",
      "Consistent stock availability that reduces the need for multiple shopping trips",
      "A community-focused brand identity built around trust and everyday reliability",
    ],
  },
  {
    title: "Complete Range of Daily-Need Categories",
    items: [
      "Groceries and staples such as rice, pulses, flour, and cooking oils",
      "Fresh fruits and vegetables sourced and rotated regularly for freshness",
      "Dairy products including milk, curd, paneer, and butter",
      "Packaged foods, snacks, and ready-to-cook items for busy households",
      "Beverages, including everyday drinks and health-focused options",
      "Spices, condiments, and everyday cooking essentials",
      "Household cleaning products and personal care items",
      "Basic stationery and miscellaneous daily-use items",
    ],
  },
  {
    title: "Fresh Produce as a Core Daily-Need Category",
    items: [
      "Fruits and vegetables are sourced through structured supply networks to maintain freshness",
      "Regular stock rotation ensures customers get access to the freshest available produce",
      "Seasonal fruits and vegetables are prioritized to match local household demand",
      "Quality checks are conducted before produce is placed on display",
      "Fresh produce is kept in dedicated, well-maintained sections for better shelf life",
    ],
  },
  {
    title: "Dairy and Everyday Essentials",
    items: [
      "Daily-use dairy items like milk, curd, and paneer kept in consistent stock",
      "Packaged bread, eggs, and breakfast essentials available for quick household needs",
      "Reliable stock levels reduce the chances of running out of frequently used items",
      "Dairy storage is maintained to preserve freshness and quality",
    ],
  },
  {
    title: "Household and Personal Care Essentials",
    items: [
      "Cleaning supplies such as detergents, dishwashing liquids, and floor cleaners",
      "Personal care items including soaps, shampoos, and oral care products",
      "Everyday hygiene products stocked to meet regular household requirements",
      "A dedicated section for household essentials makes shopping more organized",
    ],
  },
  {
    title: "Organized Store Layout for Faster Shopping",
    items: [
      "Clear category-wise sectioning for groceries, produce, dairy, and essentials",
      "Well-labelled shelves that make locating specific products easier",
      "Wide aisles designed for comfortable browsing, even during busy hours",
      "Layout planning based on commonly purchased daily-need combinations",
    ],
  },
  {
    title: "Modern Billing and Checkout Experience",
    items: [
      "Point-of-sale technology ensures quick and accurate billing",
      "Reduced waiting time at checkout, even during peak shopping hours",
      "Digital payment options, including UPI, cards, and other methods",
      "Transparent billing that avoids confusion or hidden charges",
    ],
  },
  {
    title: "Convenient Locations Across Noida's Residential Sectors",
    items: [
      "Store locations chosen based on residential density and daily footfall",
      "Focus on high-demand areas including Sector 18, Sector 62, and Noida Extension",
      "Easy accessibility for professionals, families, and senior citizens",
      "Store presence designed to minimize travel time for routine shopping",
    ],
  },
  {
    title: "Online Ordering and Home Delivery for Daily Needs",
    items: [
      "Convenient online ordering option for groceries and daily essentials",
      "Doorstep delivery service designed for busy households",
      "Useful for elderly residents or those with limited mobility",
      "Helps customers avoid traffic delays common across Noida",
      "Delivery processes designed to maintain product freshness and quality",
    ],
  },
  {
    title: "One-Stop Shopping That Saves Time",
    items: [
      "Eliminates the need to visit multiple stores for different daily-need categories",
      "Suitable for both quick top-up purchases and complete weekly shopping",
      "Saves time for working professionals and busy families",
      "Reduces overall shopping effort by combining categories under one roof",
    ],
  },
  {
    title: "Value for Money on Everyday Purchases",
    items: [
      "Competitive and transparent pricing strategy across daily-need categories",
      "Regular offers and discounts on select products",
      "No hidden charges or unclear billing practices",
      "Bulk-buying friendly approach for larger households",
      "Better overall value compared to fragmented shopping across multiple small stores",
    ],
  },
  {
    title: "Consistency and Reliability Customers Can Count On",
    items: [
      "Stock levels are maintained consistently throughout the week",
      "Reduced instances of unavailable everyday items compared to smaller local shops",
      "Reliable service standards maintained across every visit",
      "Consistency builds long-term trust with regular shoppers",
    ],
  },
  {
    title: "Why Choose The Buyzaar Mart Over Local Kirana Stores",
    items: [
      "Wider product range compared to small, single-category shops",
      "More organized and hygienic shopping environment",
      "Modern billing and digital payment options not always available at local stores",
      "Combination of in-store and online shopping convenience",
      "Trained staff support instead of informal, inconsistent service",
    ],
  },
  {
    title: "Serving the Everyday Needs of Noida's Diverse Population",
    items: [
      "Catering to working professionals with limited shopping time",
      "Meeting the needs of families managing regular household requirements",
      "Supporting senior citizens who prefer nearby, reliable stores",
      "Adapting product selection based on neighbourhood-specific preferences",
      "Continuously expanding presence to serve more residential pockets across Noida",
    ],
  },
  {
    title: "Technology-Enabled Convenience",
    items: [
      "Real-time stock visibility helps reduce unavailable items",
      "Online ordering platforms simplify remote shopping for daily needs",
      "Digital payment integration adds convenience and transaction safety",
      "Technology use reflects the brand's focus on modern, organized retail",
    ],
  },
  {
    title: "Building a Trusted Daily Shopping Habit",
    items: [
      "Regular customers benefit from predictable stock and consistent service",
      "Transparent business practices build long-term shopper confidence",
      "Community-focused approach helps understand local shopping patterns",
      "Ongoing feedback from shoppers helps refine product selection over time",
    ],
  },
  {
    title: "A Store Designed Around Everyday Convenience",
    items: [
      "Store formats are planned according to neighbourhood size and footfall",
      "Layouts prioritize easy access to the most frequently purchased items",
      "Checkout processes are streamlined to reduce waiting during busy hours",
      "Every aspect of store design supports faster, easier daily shopping",
    ],
  },
  {
    title: "Supporting Noida's Shift Toward Organized Retail",
    items: [
      "More residents are moving away from fragmented, unorganized shopping habits",
      "Hygiene, convenience, and reliability are becoming key shopping priorities",
      "Younger residents increasingly prefer app-based ordering for daily essentials",
      "Older residents continue to value in-store browsing with personal assistance",
      "The Buyzaar Mart is designed to serve both shopping preferences under one brand",
    ],
  },
  {
    title: "Making Daily Shopping Simple for Every Household",
    items: [
      "Product variety is planned to suit both small families and larger households",
      "Regular shoppers benefit from consistency that removes guesswork from daily purchases",
      "New customers can expect the same standards of quality and service at every visit",
      "The overall experience is designed to save time without compromising on product quality",
      "As Noida continues to grow, The Buyzaar Mart aims to remain a dependable daily-need supermarket for local residents",
    ],
  },
  {
    title: "Reducing Shopping Stress for Busy Households",
    items: [
      "A single organized store reduces the mental load of planning multiple shopping trips",
      "Predictable stock availability makes weekly meal and household planning easier",
      "Families can rely on one destination instead of coordinating visits to several small shops",
      "Reduced shopping stress contributes to better time management for working households",
    ],
  },
  {
    title: "Seasonal Adjustments to Daily-Need Stock",
    items: [
      "Product selection is adjusted seasonally to match changing household requirements",
      "Seasonal fruits, vegetables, and beverages are prioritized as availability changes",
      "Festive and seasonal essentials are stocked in line with local demand patterns",
      "Seasonal adjustments help ensure relevant products are always available on shelves",
    ],
  },
  {
    title: "Supporting Different Household Sizes and Shopping Patterns",
    items: [
      "Smaller packaging options suit single professionals and small families",
      "Bulk options are available for larger households and joint families",
      "Flexible shopping patterns are supported through both quick visits and full shopping trips",
      "Product range is planned to accommodate a wide variety of household sizes",
    ],
  },
  {
    title: "Quality Assurance Across Daily-Need Categories",
    items: [
      "Products across all categories undergo basic quality checks before being stocked",
      "Expiry dates and packaging integrity are monitored regularly",
      "Damaged or expired stock is removed promptly from shelves",
      "Quality assurance practices apply consistently across groceries, produce, and essentials",
    ],
  },
  {
    title: "Customer-Friendly Service Standards",
    items: [
      "Staff are available to assist with product location and general queries",
      "Store environment is maintained to be clean, organized, and easy to navigate",
      "Checkout processes are designed to minimize waiting time",
      "Customer feedback is used to continually improve service and stock selection",
    ],
  },
  {
    title: "A Long-Term, Dependable Shopping Partner",
    items: [
      "Consistency across visits builds confidence for regular Noida shoppers",
      "Transparent pricing and billing practices support long-term customer trust",
      "Ongoing store expansion reflects sustained demand for organized daily-need retail",
      "The Buyzaar Mart continues to focus on becoming a dependable, everyday shopping destination for Noida households",
    ],
  },
  {
    title: "Everyday Convenience Backed by Consistent Standards",
    items: [
      "Every store visit is designed to reflect the same standards of cleanliness, stock, and service",
      "Consistent pricing and product availability remove uncertainty from routine shopping",
      "A dependable daily-need supermarket helps households stick to simpler, more predictable routines",
      "The Buyzaar Mart's approach centers on making everyday shopping easier, not more complicated",
    ],
  },
  {
    title: "Why Daily-Need Shopping Deserves an Organized Approach",
    items: [
      "Time saved on daily shopping can be redirected toward work, family, or personal priorities",
      "Organized retail formats reduce the small frustrations common with fragmented shopping",
      "A single trusted supermarket simplifies routine decision-making for households",
      "As more Noida residents adopt organized shopping habits, dependable supermarkets play a growing role in daily life",
    ],
  },
  {
    title: "Planning for Noida's Growing Retail Needs",
    items: [
      "Continued residential development across Noida is expected to increase demand for organized daily-need stores",
      "Store expansion plans are shaped by tracking neighbourhood growth and shopping patterns",
      "A scalable store format allows the brand to adapt to different sector sizes and demand levels",
      "Long-term planning ensures the supermarket format remains relevant as Noida continues to expand",
    ],
  },
  {
    title: "Bringing It All Together for Noida Shoppers",
    items: [
      "A wide daily-need product range, organized layout, and reliable service combine to support everyday households",
      "Both in-store and online options are available depending on shopper preference",
      "Consistent quality, transparent pricing, and dependable stock make routine shopping simpler",
      "The Buyzaar Mart continues to focus on meeting the everyday retail needs of Noida's growing residential communities",
      "Regular reviews of store performance and customer feedback help keep the daily-need offering aligned with what Noida households actually use most.",
    ],
  },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <title>Best Supermarket for Daily Needs in Noida | The Buyzaar Mart</title>

      <meta
        name="description"
        content="Looking for the best supermarket for daily needs in Noida? The Buyzaar Mart offers groceries, fresh produce, dairy, and household essentials under one roof."
      />

      <script
        key="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(
            /</g,
            "\\u003c",
          ),
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
              Best Supermarket for Daily Needs in Noida
            </h1>

            <p>
              Noida&apos;s fast-growing residential sectors, high-rise
              societies, and IT corridors have created strong daily demand for a
              supermarket that can reliably meet everyday household needs.
              Between unorganized local shops, limited stock variety, and
              inconsistent service, many residents struggle to find one
              dependable store for groceries, fresh produce, dairy, and
              household essentials. The Buyzaar Mart is built to solve exactly
              this problem, positioning itself as the best supermarket for daily
              needs in Noida.
            </p>

            {contentSections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                  {section.title}
                </h2>

                <ul className="list-disc space-y-2 pl-6">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="mt-4 space-y-4">
              {faqItems.map((item, index) => (
                <div key={item.question}>
                  <h3 className="font-medium text-gray-900">
                    {index + 1}. {item.question}
                  </h3>

                  <p className="mt-2">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Best Supermarket for Daily Needs in Noida
              </h2>

              <p className="mb-4 text-gray-800">
                Looking for the best supermarket for daily needs in Noida? The
                Buyzaar Mart offers groceries, fresh produce, dairy, and
                household essentials under one roof.
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
                <span className="font-semibold">Business Hours:</span>{" "}
                Monday to Saturday, 09:00 AM – 07:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="noida"
            currentSlug="/cities/noida/best-supermarket-for-daily-needs-in-noida"
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