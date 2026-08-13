import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes a store a one stop grocery store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It stocks groceries, fresh produce, dairy, and household essentials together in a single location.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find a one stop grocery store in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Buyzaar Mart operates as a one stop grocery store across several residential sectors in Noida.",
      },
    },
    {
      "@type": "Question",
      name: "Does The Buyzaar Mart offer home delivery for groceries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, online ordering with doorstep delivery is available for added convenience.",
      },
    },
    {
      "@type": "Question",
      name: "Are fresh fruits and vegetables available at The Buyzaar Mart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, fresh produce is stocked and restocked regularly alongside other grocery categories.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy household and personal care items along with groceries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, household essentials and personal care products are available in the same store.",
      },
    },
    {
      "@type": "Question",
      name: "What payment options are accepted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cash, UPI, debit cards, credit cards, and other digital payment methods are accepted.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas in Noida does The Buyzaar Mart serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Buyzaar Mart serves multiple sectors, including Sector 18, Sector 62, and Noida Extension.",
      },
    },
    {
      "@type": "Question",
      name: "Is online ordering available along with in-store shopping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, customers can shop in-store or order online for doorstep delivery.",
      },
    },
  ],
};

const sections = [
  {
    title: 'What Does "One Stop Grocery Store" Really Mean',
    items: [
      "A one stop grocery store combines multiple shopping categories into a single retail space",
      "It eliminates the need to visit separate vendors for fruits, vegetables, dairy, and packaged goods",
      "The format is built around convenience, time-saving, and predictable product availability",
      "It reflects a shift from traditional, fragmented shopping toward organized, all-in-one retail",
      "For busy households, it turns grocery shopping into a single, efficient trip",
    ],
  },
  {
    title: "Why Noida Residents Are Choosing One Stop Grocery Shopping",
    items: [
      "Noida's expanding residential sectors and IT hubs have created time-constrained lifestyles",
      "Traffic and distance make visiting multiple markets inconvenient for daily needs",
      "Working professionals prefer single, efficient shopping trips over scattered errands",
      "Families managing busy schedules value predictability in stock and store experience",
      "Rising hygiene expectations have shifted preference toward organized, all-in-one stores",
    ],
  },
  {
    title: "Everything Under One Roof at The Buyzaar Mart",
    items: [
      "Fresh fruits and vegetables sourced and restocked regularly",
      "Dairy products including milk, curd, paneer, and butter",
      "Grocery staples such as rice, pulses, flour, and cooking oils",
      "Packaged foods, snacks, and ready-to-cook items",
      "Beverages for everyday household consumption",
      "Spices and everyday cooking essentials",
      "Household cleaning products and personal care items",
      "Basic stationery and other miscellaneous daily-use items",
    ],
  },
  {
    title: "Fresh Produce as Part of the One Stop Experience",
    items: [
      "Fruits and vegetables are sourced through structured supply networks for consistent freshness",
      "Stock is rotated regularly to ensure customers get access to the freshest produce",
      "Seasonal fruits and vegetables are prioritized based on availability and demand",
      "Quality checks are carried out before produce reaches store shelves",
      "Dedicated storage areas help maintain freshness for longer periods",
    ],
  },
  {
    title: "Dairy, Breakfast, and Everyday Essentials",
    items: [
      "Milk, curd, paneer, and butter are stocked consistently for daily household use",
      "Bread and eggs are commonly available for quick breakfast requirements",
      "Reliable stock reduces last-minute trips to smaller, separate shops",
      "Storage conditions are maintained to preserve freshness and quality",
    ],
  },
  {
    title: "Household and Personal Care in the Same Aisle",
    items: [
      "Cleaning essentials such as detergents, dishwashing liquids, and floor cleaners",
      "Personal care items including soaps, shampoos, and oral care products",
      "A dedicated section for household essentials makes weekly shopping simpler",
      "Regularly used items are prioritized to reduce the chances of stockouts",
    ],
  },
  {
    title: "The Convenience of Shopping in a Single Trip",
    items: [
      "Combines grocery, produce, dairy, and household shopping into one visit",
      "Reduces the time spent travelling between multiple small shops",
      "Suitable for both quick top-up purchases and complete weekly shopping",
      "Saves significant time for working professionals and busy families",
    ],
  },
  {
    title: "Organized Store Layout for Faster Navigation",
    items: [
      "Clear category-wise sections for groceries, produce, dairy, and essentials",
      "Well-labelled shelves that make locating specific products quick and simple",
      "Wide aisles designed for comfortable browsing, even during peak hours",
      "Layout planning based on commonly purchased product combinations",
    ],
  },
  {
    title: "Modern Billing for a Smoother Checkout",
    items: [
      "Point-of-sale technology ensures fast and accurate billing",
      "Reduced waiting time at checkout, even during busy periods",
      "Multiple digital payment options, including UPI and cards",
      "Transparent billing that avoids confusion or hidden charges",
    ],
  },
  {
    title: "Convenient Locations Across Noida",
    items: [
      "Store locations chosen based on residential density and daily footfall",
      "Focus on high-demand sectors including Sector 18, Sector 62, and Noida Extension",
      "Easy accessibility for professionals, families, and senior citizens",
      "Store presence designed to minimize travel time for everyday shopping",
    ],
  },
  {
    title: "Online Ordering Adds Another Layer of Convenience",
    items: [
      "Online ordering available for groceries and daily essentials",
      "Doorstep delivery designed for busy households and working professionals",
      "Especially useful for elderly residents or those with limited mobility",
      "Delivery processes designed to maintain product freshness and quality",
    ],
  },
  {
    title: "Why a One Stop Grocery Store Saves More Than Just Time",
    items: [
      "Reduces decision fatigue by consolidating shopping into a single visit",
      "Minimizes the risk of forgetting items across multiple shopping stops",
      "Supports better budgeting through a single, consolidated shopping trip",
      "Encourages more consistent household planning around one trusted store",
    ],
  },
  {
    title: "Value for Money in a Consolidated Shopping Format",
    items: [
      "Competitive and transparent pricing across all product categories",
      "Regular offers and discounts on select items",
      "No hidden charges or unclear billing practices",
      "Bulk-buying friendly approach for larger households",
    ],
  },
  {
    title: "One Stop Shopping Versus Multiple Small Vendors",
    items: [
      "Wider product range compared to single-category local shops",
      "More organized and hygienic shopping environment overall",
      "Modern billing and digital payment options not always available at smaller stores",
      "Consistent stock availability compared to scattered, unpredictable small shops",
      "Trained staff support instead of informal, inconsistent service",
    ],
  },
  {
    title: "Serving Different Types of Noida Households",
    items: [
      "Working professionals looking for quick, efficient shopping trips",
      "Families managing regular weekly or monthly household needs",
      "Senior citizens who prefer a single, dependable nearby store",
      "Joint households requiring bulk quantities across multiple categories",
      "Single-person households needing smaller, more frequent purchases",
    ],
  },
  {
    title: "Technology's Role in the One Stop Shopping Experience",
    items: [
      "Real-time stock visibility helps minimize unavailable items",
      "Online platforms simplify remote ordering for busy customers",
      "Digital payment integration adds convenience and transaction safety",
      "Technology use reflects a broader shift toward organized, modern retail",
    ],
  },
  {
    title: "Seasonal Adjustments Within a One Stop Format",
    items: [
      "Product selection adapts to seasonal fruit and vegetable availability",
      "Seasonal beverages and essentials are stocked as demand shifts",
      "Festive-season items are added based on local buying patterns",
      "Seasonal planning ensures relevant products remain available year-round",
    ],
  },
  {
    title: "Quality Assurance Across Every Category",
    items: [
      "Products across all sections undergo basic quality checks before stocking",
      "Expiry dates and packaging integrity are monitored regularly",
      "Damaged or expired items are removed promptly from shelves",
      "Quality checks apply consistently across groceries, produce, and household items",
    ],
  },
  {
    title: "Customer Service Within a One Stop Store",
    items: [
      "Staff are trained to help with product location and general queries",
      "Store cleanliness and organization are maintained consistently",
      "Checkout processes are designed to minimize waiting time",
      "Customer feedback is used to refine stock and service over time",
    ],
  },
  {
    title: "The Growing Preference for Consolidated Grocery Shopping",
    items: [
      "More Noida residents are moving away from fragmented, multi-stop shopping habits",
      "Convenience, consistency, and hygiene are increasingly prioritized over visiting multiple vendors",
      "Younger shoppers favour app-based ordering for consolidated daily purchases",
      "Older residents continue to value in-person browsing with staff assistance",
      "A one stop grocery format is designed to serve both shopping preferences",
    ],
  },
  {
    title: "Supporting Noida's Growing Residential Communities",
    items: [
      "Continued housing development is expected to increase demand for one stop retail formats",
      "Store expansion plans are guided by tracking neighbourhood growth patterns",
      "Scalable store formats allow adaptation to different sector sizes and demand levels",
      "Long-term planning ensures the format remains relevant as Noida continues to expand",
    ],
  },
  {
    title: "Reducing the Mental Load of Everyday Shopping",
    items: [
      "A single organized store reduces the planning required for routine shopping",
      "Predictable stock supports easier weekly and monthly household planning",
      "Fewer separate trips are needed compared to shopping across multiple small vendors",
      "Reduced shopping effort contributes to better time management for busy households",
    ],
  },
  {
    title: "Bringing the One Stop Grocery Experience Together",
    items: [
      "A wide product range, organized layout, and dependable service define the format",
      "Both in-store and online options are available depending on shopper preference",
      "Transparent pricing and consistent stock make routine shopping simpler",
      "The Buyzaar Mart continues to focus on strengthening its role as a one stop grocery store for Noida's residential communities",
    ],
  },
  {
    title: "Why This Format Matters for Noida's Retail Future",
    items: [
      "As the city grows, demand for consolidated, dependable retail formats will continue rising",
      "A one stop grocery format supports both convenience and consistency at scale",
      "Continued investment in store quality and service helps meet evolving shopper expectations",
      "The format is positioned to remain relevant as Noida's residential and commercial growth continues",
    ],
  },
  {
    title: "Everyday Habits Shaped by Consolidated Shopping",
    items: [
      "Predictable shopping experiences encourage households to build routines around one trusted store",
      "Reduced uncertainty in stock and pricing makes weekly planning simpler for families",
      "Repeat visits become more convenient once a store proves consistently reliable",
      "Over time, a one stop grocery store becomes part of a household's regular routine",
    ],
  },
  {
    title: "Practical Tips for Making the Most of One Stop Grocery Shopping",
    items: [
      "Plan a weekly list covering grocery, produce, and household purchases together",
      "Use online ordering for routine restocking to save time on repeat purchases",
      "Check for seasonal produce to get better freshness and value",
      "Keep an eye on regular offers to plan bulk purchases for non-perishable items",
    ],
  },
  {
    title: "The Long-Term Outlook for One Stop Grocery Stores in Noida",
    items: [
      "As more residential sectors develop, demand for consolidated retail is expected to grow further",
      "Stores that maintain consistency, hygiene, and convenience are likely to become preferred choices",
      "The shift toward one stop shopping reflects broader changes in urban shopping behaviour",
      "The Buyzaar Mart continues to adapt its store format to match Noida's evolving retail expectations",
    ],
  },
  {
    title: "Final Thoughts on Choosing a One Stop Grocery Store in Noida",
    items: [
      "A dependable one stop grocery store saves time, reduces shopping stress, and supports better planning",
      "Consolidated formats offer clear advantages over fragmented shopping across multiple vendors",
      "Consistency in stock, pricing, and service builds long-term trust with regular shoppers",
      "The Buyzaar Mart aims to remain a dependable, everyday choice for households across Noida's growing neighbourhoods",
    ],
  },
  {
    title: "How Store Format Affects the One Stop Experience",
    items: [
      "Compact Mini Mart formats work well for smaller residential pockets with focused daily-need stock",
      "Larger Super Mart and Hyper Mart formats suit busier areas with wider product variety needs",
      "Matching store size to neighbourhood demand improves both convenience and product availability",
      "Flexible formats allow the one stop concept to work across different types of Noida neighbourhoods",
    ],
  },
  {
    title: "Balancing Product Variety With Shopping Speed",
    items: [
      "A well-planned one stop store avoids overwhelming shoppers with unnecessary variety",
      "Core grocery and household categories are prioritized over less frequently purchased items",
      "This balance keeps shopping trips quick while still covering essential household requirements",
      "Regular review of purchase patterns helps refine the product mix over time",
    ],
  },
  {
    title: "Why Families Prefer a Single Trusted Grocery Destination",
    items: [
      "Reduces the coordination needed to plan shopping across multiple vendors",
      "Builds familiarity with store layout, making repeat visits faster and easier",
      "Creates a consistent shopping experience that children and elderly family members can also navigate easily",
      "Supports simpler budgeting when most purchases happen in a single, predictable location",
    ],
  },
];

const faqs = [
  [
    "What makes a store a one stop grocery store?",
    "It stocks groceries, fresh produce, dairy, and household essentials together in a single location.",
  ],
  [
    "Where can I find a one stop grocery store in Noida?",
    "The Buyzaar Mart operates as a one stop grocery store across several residential sectors in Noida.",
  ],
  [
    "Does The Buyzaar Mart offer home delivery for groceries?",
    "Yes, online ordering with doorstep delivery is available for added convenience.",
  ],
  [
    "Are fresh fruits and vegetables available at The Buyzaar Mart?",
    "Yes, fresh produce is stocked and restocked regularly alongside other grocery categories.",
  ],
  [
    "Can I buy household and personal care items along with groceries?",
    "Yes, household essentials and personal care products are available in the same store.",
  ],
  [
    "What payment options are accepted?",
    "Cash, UPI, debit cards, credit cards, and other digital payment methods are accepted.",
  ],
  [
    "Which areas in Noida does The Buyzaar Mart serve?",
    "The Buyzaar Mart serves multiple sectors, including Sector 18, Sector 62, and Noida Extension.",
  ],
  [
    "Is online ordering available along with in-store shopping?",
    "Yes, customers can shop in-store or order online for doorstep delivery.",
  ],
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <title>One Stop Grocery Store in Noida | The Buyzaar Mart</title>

      <meta
        name="description"
        content="Looking for a one stop grocery store in Noida? The Buyzaar Mart brings fresh produce, groceries, dairy, and household essentials together under one roof."
      />

      <meta
        name="keywords"
        content="one stop grocery store noida, grocery store noida, buyzaar mart noida, one stop shop noida, daily essentials noida, fresh produce noida, household essentials noida, online grocery noida, neighbourhood grocery store noida, all in one grocery store noida"
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
              One Stop Grocery Store in Noida
            </h1>

            <p>
              Shopping for groceries in Noida often means juggling multiple
              stops: one shop for vegetables, another for dairy, a third for
              packaged foods, and yet another for household items. This
              fragmented routine wastes time and adds unnecessary effort to
              daily life. A one stop grocery store in Noida removes this hassle
              by bringing every essential category together under a single roof.
              The Buyzaar Mart has built its store experience around exactly
              this idea, giving Noida residents a single, reliable destination
              for all their grocery and household needs.
            </p>

            {sections.map((section) => (
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
              {faqs.map(([question, answer]) => (
                <div key={question}>
                  <h3 className="font-medium text-gray-900">{question}</h3>
                  <p className="mt-2">{answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Discover a Complete One Stop Grocery Experience in Noida
              </h2>

              <p className="mb-4 text-gray-800">
                A reliable one stop grocery store can make everyday shopping
                faster, simpler, and more organized by bringing groceries,
                fresh produce, dairy, household essentials, and personal care
                products together under one roof.
              </p>

              <p className="mb-4 text-gray-800">
                The Buyzaar Mart combines a wide product range, organized
                stores, modern billing, online ordering, and dependable service
                for households across Noida.
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
                <span className="font-semibold">Business Hours:</span> Monday
                to Saturday, 09:00 AM – 07:00 PM
              </p>
            </div>

            <div className="sr-only">
              <p>
                Meta Title: One Stop Grocery Store in Noida | The Buyzaar Mart
              </p>
              <p>
                Meta Description: Looking for a one stop grocery store in
                Noida? The Buyzaar Mart brings fresh produce, groceries, dairy,
                and household essentials together under one roof.
              </p>
              <p>
                Meta Keywords: one stop grocery store noida, grocery store
                noida, buyzaar mart noida, one stop shop noida, daily
                essentials noida, fresh produce noida, household essentials
                noida, online grocery noida, neighbourhood grocery store noida,
                all in one grocery store noida
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="noida"
            currentSlug="/cities/noida/one-stop-grocery-store-in-noida"
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