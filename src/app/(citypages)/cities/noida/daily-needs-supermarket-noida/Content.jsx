import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const faqItems = [
  {
    question: "What is a daily needs supermarket?",
    answer:
      "It is a retail format that stocks groceries, fresh produce, dairy, and household essentials together in one store.",
  },
  {
    question: "Where can I find a daily needs supermarket in Noida?",
    answer:
      "The Buyzaar Mart operates as a daily needs supermarket across several residential sectors in Noida.",
  },
  {
    question: "Does The Buyzaar Mart offer home delivery for daily essentials?",
    answer:
      "Yes, online ordering with doorstep delivery is available for added convenience.",
  },
  {
    question:
      "Are fresh fruits and vegetables available at the daily needs supermarket?",
    answer:
      "Yes, fresh produce is stocked and restocked regularly alongside other daily-need categories.",
  },
  {
    question:
      "Can I buy household and personal care items at the same store?",
    answer:
      "Yes, household essentials and personal care products are available alongside groceries.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Cash, UPI, debit cards, credit cards, and other digital payment options are accepted.",
  },
  {
    question: "Which Noida areas does The Buyzaar Mart serve?",
    answer:
      "The Buyzaar Mart serves multiple sectors, including Sector 18, Sector 62, and Noida Extension.",
  },
  {
    question:
      "Is in-store shopping or online ordering better for daily needs?",
    answer:
      "Both options are available, allowing customers to choose based on convenience and preference.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Daily Needs Supermarket Noida | The Buyzaar Mart",
  description:
    "The Buyzaar Mart is a dependable daily needs supermarket in Noida offering groceries, fresh produce, dairy, and household essentials under one roof.",
  url: "https://www.thebuyzaarmart.com/noida/daily-needs-supermarket-noida",
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
    title: "Understanding the Role of a Daily Needs Supermarket",
    items: [
      "A daily needs supermarket is a retail format designed to stock the essential products a household requires on a regular basis",
      "Unlike specialty stores, it combines groceries, fresh produce, dairy, and household essentials in one place",
      "Its purpose is to reduce the time and effort involved in routine shopping",
      "It plays a growing role in urban areas like Noida, where time constraints make convenience a priority",
      "Organized daily needs supermarkets are gradually replacing fragmented shopping across multiple small vendors",
    ],
  },
  {
    title: "Why Noida Has Growing Demand for a Daily Needs Supermarket",
    items: [
      "Rapid residential development across sectors and townships has increased population density",
      "Working professionals commuting to IT hubs have limited time for daily shopping",
      "Traffic congestion makes travelling to distant markets impractical for routine purchases",
      "Rising awareness of hygiene and product quality has shifted preference toward organized retail",
      "Families increasingly value predictability and consistency over price comparisons at multiple small shops",
    ],
  },
  {
    title: "Core Categories Found in a Daily Needs Supermarket",
    items: [
      "Grocery staples such as rice, pulses, flour, and cooking oils",
      "Fresh fruits and vegetables restocked on a regular basis",
      "Dairy products including milk, curd, paneer, and butter",
      "Packaged foods, snacks, and ready-to-cook items",
      "Beverages for everyday consumption",
      "Spices and cooking essentials used in daily meal preparation",
      "Household cleaning products and personal care items",
      "Basic stationery and miscellaneous everyday-use items",
    ],
  },
  {
    title: "How The Buyzaar Mart Structures Its Daily Needs Supermarket Format",
    items: [
      "Store formats are designed in different sizes to suit different neighbourhood needs",
      "Mini Mart formats work well for smaller residential pockets with focused daily-need stock",
      "Super Mart formats offer a wider product range suited to higher footfall areas",
      "Hyper Mart formats provide the most extensive stock range for larger catchment areas",
      "Each format is designed to prioritize speed, organization, and easy navigation",
    ],
  },
  {
    title: "Fresh Produce Within the Daily Needs Format",
    items: [
      "Fruits and vegetables are sourced through structured supply chains to reduce delays",
      "Regular stock rotation ensures freshness for regular shoppers",
      "Seasonal produce is prioritized to match household demand through the year",
      "Quality checks are carried out before produce is placed on shelves",
      "Dedicated storage sections help maintain freshness for longer",
    ],
  },
  {
    title: "Dairy and Breakfast Essentials",
    items: [
      "Milk, curd, paneer, and butter are stocked consistently for daily household use",
      "Eggs and bread are commonly available for quick breakfast needs",
      "Dairy storage conditions are maintained to preserve freshness",
      "Reliable stock reduces the need for last-minute trips to smaller shops",
    ],
  },
  {
    title: "Household and Personal Care Products",
    items: [
      "Cleaning essentials such as detergents, floor cleaners, and dishwashing liquids",
      "Personal care items including soaps, shampoos, and oral hygiene products",
      "A dedicated section for household essentials simplifies weekly shopping",
      "Regularly used items are prioritized to avoid stockouts",
    ],
  },
  {
    title: "Store Layout Designed for Everyday Convenience",
    items: [
      "Clear category-wise sections make locating products faster",
      "Well-labelled shelves reduce time spent searching for specific items",
      "Wide aisles support comfortable browsing, even during busy hours",
      "Layout decisions are based on commonly purchased daily-need combinations",
    ],
  },
  {
    title: "Billing and Checkout Systems",
    items: [
      "Point-of-sale technology ensures accurate and fast billing",
      "Reduced waiting time, especially during peak shopping hours",
      "Multiple digital payment options, including UPI and cards",
      "Transparent billing that avoids confusion at checkout",
    ],
  },
  {
    title: "Where The Buyzaar Mart Operates as a Daily Needs Supermarket in Noida",
    items: [
      "Store presence is focused on high-density residential sectors",
      "Priority areas include Sector 18, Sector 62, and Noida Extension",
      "Locations are selected based on footfall patterns and neighbourhood demand",
      "Store expansion continues to bring the format closer to more residential pockets",
    ],
  },
  {
    title: "Home Delivery as Part of the Daily Needs Experience",
    items: [
      "Online ordering is available for groceries and daily essentials",
      "Doorstep delivery supports busy professionals and elderly residents",
      "Delivery processes are designed to preserve product freshness",
      "Flexible ordering supports both daily and weekly shopping needs",
    ],
  },
  {
    title: "One-Stop Shopping Advantage",
    items: [
      "Combines multiple categories under a single store visit",
      "Reduces the need to travel to different vendors for different items",
      "Suitable for both quick top-up purchases and full household shopping",
      "Saves time for working professionals and larger families alike",
    ],
  },
  {
    title: "Value for Money Across Daily-Need Categories",
    items: [
      "Transparent and competitive pricing across product categories",
      "Occasional offers and discounts on select items",
      "No hidden charges at billing",
      "Bulk-friendly options for larger households",
    ],
  },
  {
    title: "Comparing a Daily Needs Supermarket With Local Kirana Stores",
    items: [
      "Wider product range compared to single-category local shops",
      "More organized and hygienic shopping environment",
      "Modern billing systems not always available at smaller stores",
      "Combination of physical store visits and online ordering convenience",
      "Trained staff support instead of informal, inconsistent service",
    ],
  },
  {
    title: "Consistency as a Core Advantage",
    items: [
      "Stock levels are maintained regularly to avoid frequent shortages",
      "Reliable service standards are maintained across every visit",
      "Predictability in both pricing and availability builds customer trust",
      "Long-term consistency supports repeat, habitual shopping behaviour",
    ],
  },
  {
    title: "Serving Different Types of Noida Households",
    items: [
      "Working professionals seeking quick, time-saving shopping trips",
      "Families managing regular weekly or monthly household needs",
      "Senior citizens who prefer a nearby, dependable store",
      "Joint households requiring bulk quantities of daily-need items",
      "Single-person households needing smaller, more frequent purchases",
    ],
  },
  {
    title: "Technology's Role in a Modern Daily Needs Supermarket",
    items: [
      "Real-time stock visibility helps minimize unavailable items",
      "Online platforms simplify ordering for customers with limited time",
      "Digital payments add both convenience and transaction security",
      "Technology adoption reflects a shift toward organized, modern retail formats",
    ],
  },
  {
    title: "Seasonal Adaptation of Daily-Need Stock",
    items: [
      "Product selection adjusts to seasonal fruit and vegetable availability",
      "Seasonal beverages and essentials are stocked as demand shifts",
      "Festive-season essentials are added based on local buying patterns",
      "Seasonal planning helps ensure relevant products remain available",
    ],
  },
  {
    title: "Quality Assurance Practices",
    items: [
      "Products across categories undergo basic quality checks before stocking",
      "Expiry dates and packaging integrity are monitored regularly",
      "Damaged or expired items are removed promptly from shelves",
      "Quality checks apply consistently across groceries, produce, and household items",
    ],
  },
  {
    title: "Customer Service Standards Within the Format",
    items: [
      "Staff are trained to assist with product location and general queries",
      "Store cleanliness and organization are maintained consistently",
      "Checkout processes are designed to minimize customer waiting time",
      "Customer feedback is used to refine stock and service over time",
    ],
  },
  {
    title: "The Growing Shift Toward Organized Daily Needs Shopping",
    items: [
      "More Noida residents are moving away from fragmented, unorganized shopping habits",
      "Convenience, hygiene, and reliability are increasingly prioritized over price alone",
      "Younger residents favour app-based ordering for daily essentials",
      "Older residents continue to value in-person shopping with staff assistance",
      "A well-structured daily needs supermarket serves both preferences under one format",
    ],
  },
  {
    title: "Supporting Noida's Expanding Residential Landscape",
    items: [
      "Continued housing development is expected to increase demand for organized retail",
      "Store expansion plans are guided by tracking neighbourhood growth patterns",
      "Scalable store formats allow adaptation to different sector sizes",
      "Long-term planning ensures relevance as Noida's population continues to grow",
    ],
  },
  {
    title: "Reducing Everyday Shopping Effort",
    items: [
      "A single organized supermarket reduces the planning required for routine shopping",
      "Predictable stock supports easier weekly and monthly planning for households",
      "Fewer separate trips are needed compared to shopping across multiple small vendors",
      "Reduced shopping effort contributes to better time management for busy households",
    ],
  },
  {
    title: "Bringing the Daily Needs Supermarket Format Together",
    items: [
      "A broad product range, organized layout, and dependable service define the format",
      "Both in-store and online options are available depending on shopper preference",
      "Transparent pricing and consistent stock make routine shopping simpler",
      "The Buyzaar Mart continues to focus on strengthening its role as a daily needs supermarket for Noida's residential communities",
    ],
  },
  {
    title: "Why This Format Matters for the Future of Noida's Retail Landscape",
    items: [
      "As the city grows, demand for organized, dependable retail formats will continue rising",
      "A daily needs supermarket format supports both convenience and consistency at scale",
      "Continued investment in store quality and service helps meet evolving shopper expectations",
      "The format is positioned to remain relevant as Noida's residential and commercial growth continues",
    ],
  },
  {
    title: "Everyday Habits Shaped by a Reliable Supermarket",
    items: [
      "Predictable shopping experiences encourage households to build regular routines around one trusted store",
      "Reduced uncertainty in stock and pricing makes weekly planning simpler for families",
      "Repeat visits become more convenient once a store proves consistently reliable",
      "Over time, a dependable daily needs supermarket becomes part of a household's regular routine rather than an occasional choice",
    ],
  },
  {
    title: "How Store Format Choice Affects Shopping Experience",
    items: [
      "Smaller Mini Mart formats work well for compact neighbourhoods with focused daily-need requirements",
      "Larger Super Mart and Hyper Mart formats suit busier areas with higher product variety needs",
      "Matching store format to neighbourhood demand improves both convenience and product availability",
      "Flexible format planning allows the brand to serve a wide range of residential environments across Noida",
    ],
  },
  {
    title: "Balancing Convenience With Product Variety",
    items: [
      "A well-planned daily needs supermarket avoids overwhelming shoppers with excessive, unnecessary variety",
      "Core daily-need categories are prioritized over less frequently purchased specialty items",
      "This balance keeps shopping trips quick while still covering essential household requirements",
      "Regular review of purchase patterns helps fine-tune the product mix over time",
    ],
  },
  {
    title: "Practical Tips for Getting the Most Out of a Daily Needs Supermarket",
    items: [
      "Plan a weekly list to combine grocery, produce, and household purchases in a single visit",
      "Use online ordering for routine restocking to save time on repeat purchases",
      "Check for seasonal produce to get better freshness and value",
      "Keep an eye on regular offers to plan bulk purchases for non-perishable items",
    ],
  },
  {
    title: "The Long-Term Outlook for Daily Needs Supermarkets in Noida",
    items: [
      "As more residential sectors develop, demand for organized daily-need retail is expected to grow further",
      "Supermarkets that maintain consistency, hygiene, and convenience are likely to become preferred choices",
      "The shift toward organized retail reflects broader changes in urban shopping behaviour across India",
      "The Buyzaar Mart continues to adapt its daily needs supermarket format to match Noida's evolving retail expectations",
    ],
  },
  {
    title: "Final Thoughts on Choosing a Daily Needs Supermarket in Noida",
    items: [
      "A dependable daily needs supermarket saves time, reduces shopping stress, and supports better household planning",
      "Organized formats offer clear advantages over fragmented shopping across multiple small vendors",
      "Consistency in stock, pricing, and service builds long-term trust with regular shoppers",
      "The Buyzaar Mart aims to remain a dependable, everyday choice for households across Noida's growing neighbourhoods",
    ],
  },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <title>Daily Needs Supermarket Noida | The Buyzaar Mart</title>

      <meta
        name="description"
        content="Looking for a dependable daily needs supermarket in Noida? The Buyzaar Mart offers groceries, fresh produce, dairy, and household essentials under one roof."
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
              Daily Needs Supermarket Noida
            </h1>

            <p>
              A daily needs supermarket has become an essential part of urban
              living in Noida, where busy schedules, rising residential
              density, and growing expectations around convenience have changed
              how people shop for everyday essentials. Instead of visiting
              several small shops for groceries, fresh produce, dairy, and
              household items, more residents are turning to a single organized
              supermarket that can handle all of it. The Buyzaar Mart has built
              its store format specifically around this need, functioning as a
              dependable daily needs supermarket across Noida&apos;s
              neighbourhoods.
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
                Daily Needs Supermarket Noida
              </h2>

              <p className="mb-4 text-gray-800">
                Looking for a dependable daily needs supermarket in Noida? The
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
            currentSlug="/cities/noida/daily-needs-supermarket-noida"
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