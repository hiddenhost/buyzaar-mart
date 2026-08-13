import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Buyzaar Mart - Best Place to Buy Fruits and Vegetables in Noida",
  description:
    "The Buyzaar Mart offers fresh, hygienically sourced fruits and vegetables, a wide variety of produce, value pricing, and doorstep delivery across Noida.",
  url: "https://www.thebuyzaarmart.com/noida/best-place-to-buy-fruits-and-vegetables-in-noida",
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

const faqItems = [
  {
    question:
      "Where can I find the best place to buy fruits and vegetables in Noida?",
    answer:
      "The Buyzaar Mart offers fresh, hygienically sourced fruits and vegetables at multiple locations across Noida.",
  },
  {
    question: "Is the produce at The Buyzaar Mart fresh daily?",
    answer:
      "Yes, produce is regularly restocked through a structured supply process to ensure freshness for customers.",
  },
  {
    question:
      "Does The Buyzaar Mart offer home delivery for fruits and vegetables?",
    answer:
      "Yes, online ordering with doorstep delivery is available for added convenience across Noida.",
  },
  {
    question:
      "Are seasonal fruits and vegetables available at The Buyzaar Mart?",
    answer:
      "Yes, seasonal produce is stocked regularly based on availability and local demand patterns.",
  },
  {
    question:
      "Can I buy both fruits and daily groceries at the same store?",
    answer:
      "Yes, The Buyzaar Mart offers fruits, vegetables, groceries, and household essentials together under one roof.",
  },
  {
    question:
      "Are the fruits and vegetables at The Buyzaar Mart quality-checked?",
    answer:
      "Yes, produce goes through multiple hygiene and quality checks before being placed on shelves.",
  },
  {
    question: "Which areas in Noida does The Buyzaar Mart serve?",
    answer:
      "The Buyzaar Mart serves multiple residential sectors, including areas like Sector 18, Sector 62, and Noida Extension.",
  },
  {
    question: "What payment options are available at The Buyzaar Mart?",
    answer:
      "Cash, UPI, debit cards, credit cards, and other digital payment methods are accepted for smooth checkout.",
  },
  {
    question:
      "Does The Buyzaar Mart offer both online and in-store shopping options?",
    answer:
      "Yes, customers can choose between visiting the store directly or ordering online for doorstep delivery.",
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

const contentSections = [
  {
    title: "Why Noida Needs a Reliable Fruits and Vegetable Destination",
    items: [
      "Noida's population is growing rapidly across high-rise societies, IT hubs, and residential sectors, increasing daily demand for fresh produce",
      "Working professionals and dual-income families have limited time to visit distant markets every day",
      "Traditional roadside vegetable markets often lack consistent quality checks or hygiene standards",
      "Heavy traffic and congestion make visiting distant wholesale mandis inconvenient for regular shoppers",
      "Rising awareness around food safety and cleanliness has increased demand for organized retail formats",
      "Busy households increasingly prefer one-stop shopping instead of visiting multiple vendors for different items",
      "Unpredictable stock and pricing at open markets make planning weekly meals difficult for many families",
    ],
  },
  {
    title:
      "What Makes The Buyzaar Mart the Best Place to Buy Fruits and Vegetables in Noida",
    items: [
      "Daily-fresh stock sourced through a structured and reliable supply chain",
      "Wide variety of seasonal and everyday fruits and vegetables available under one roof",
      "Clean, organized store layout that makes browsing and selection quick and easy",
      "Strict quality and hygiene checks before produce reaches the shelves",
      "Trained staff available to assist with freshness selection and general queries",
      "Consistent stock availability, reducing the need to visit multiple shops in a day",
      "Modern billing systems that ensure a quick and hassle-free checkout experience",
      "A community-focused approach that treats every neighbourhood's shopping needs as a priority",
    ],
  },
  {
    title: "Fresh Produce Sourcing Process",
    items: [
      "Produce is sourced through reliable supply networks designed to minimize delays between harvest and shelf",
      "Reduced dependency on multiple middlemen helps maintain freshness and overall quality",
      "Regular stock rotation ensures customers always get access to the freshest available batch",
      "Seasonal fruits and vegetables are prioritized in sourcing to match local demand patterns",
      "Quality checks are conducted at multiple stages, from intake to display, to filter out substandard produce",
      "Sourcing decisions take into account both freshness and the specific preferences of Noida shoppers",
    ],
  },
  {
    title: "Wide Variety of Fruits Available",
    items: [
      "Everyday fruits such as bananas, apples, oranges, and papayas for daily household consumption",
      "Seasonal favourites like mangoes, litchis, and watermelons during their respective seasons",
      "Pomegranates, grapes, and guavas for regular, health-conscious households",
      "Citrus fruits such as sweet lime and lemons, useful for both cooking and daily nutrition",
      "Dry fruits and fresh fruit combinations suitable for gifting or health-focused buyers",
      "Exotic and imported fruit options for customers looking to diversify their fruit basket",
    ],
  },
  {
    title: "Wide Variety of Vegetables Available",
    items: [
      "Everyday essentials like potatoes, onions, and tomatoes that form the base of most Indian kitchens",
      "Leafy greens including spinach, fenugreek, and coriander, sourced and restocked frequently",
      "Root vegetables such as carrots, radish, and beetroot for regular home cooking",
      "Gourds and seasonal vegetables like bottle gourd, ridge gourd, and pumpkin",
      "Exotic vegetables such as broccoli, zucchini, and bell peppers for health-focused and experimental cooking",
      "Herbs and seasoning vegetables like green chillies, ginger, and garlic kept in constant stock",
    ],
  },
  {
    title: "Hygiene and Quality Standards",
    items: [
      "Produce is stored in clean, well-maintained sections specifically designed to prevent spoilage",
      "Regular cleaning schedules and stock checks help maintain shelf and storage hygiene",
      "Damaged, overripe, or substandard items are identified and removed promptly from display",
      "Staff are trained to follow proper handling practices that reduce the risk of contamination",
      "Store layout is designed to keep fruits and vegetables separate from other grocery sections for better freshness control",
      "Temperature and storage conditions are monitored to extend the shelf life of perishable produce",
    ],
  },
  {
    title: "Convenient Locations Across Noida",
    items: [
      "Stores are strategically positioned in high-demand residential sectors across the city",
      "Easy accessibility has been prioritized for busy professionals, families, and senior citizens alike",
      "Location decisions are based on footfall patterns and neighbourhood-specific demand",
      "Special focus on high-density areas including Sector 18, Sector 62, and Noida Extension",
      "Store presence is designed to reduce overall travel time for everyday shopping needs",
      "Ongoing expansion plans aim to bring fresh produce closer to more Noida neighbourhoods",
    ],
  },
  {
    title: "Home Delivery for Fresh Produce",
    items: [
      "Convenient online ordering option available for fruits and vegetables",
      "Doorstep delivery service designed for busy households and working professionals",
      "Especially useful for elderly residents or anyone unable to visit the store in person",
      "Helps customers avoid traffic-related delays that are common across Noida",
      "Delivery processes are designed to maintain produce freshness from store to doorstep",
      "Flexible ordering options make it easy to plan both daily and weekly produce needs",
    ],
  },
  {
    title: "Value for Money Shopping",
    items: [
      "Competitive and transparent pricing strategy across the fruits and vegetables section",
      "Regular offers and seasonal discounts on select produce items",
      "No hidden charges or unclear billing practices at checkout",
      "Bulk-buying friendly approach suited to larger households and joint families",
      "Overall better value compared to the inconsistent pricing often seen at local vendors",
      "Transparent billing builds long-term trust with repeat customers",
    ],
  },
  {
    title: "Seasonal and Local Produce Focus",
    items: [
      "Seasonal fruits and vegetables are stocked in line with their natural availability",
      "Local sourcing supports fresher stock through shorter supply chains",
      "Seasonal rotation helps customers enjoy variety throughout the year rather than relying on the same items",
      "Encourages healthier eating habits by making in-season produce easily accessible",
      "Supports better taste and nutritional value compared to out-of-season alternatives",
    ],
  },
  {
    title: "One-Stop Shopping Convenience",
    items: [
      "Fruits and vegetables are available alongside groceries, dairy, and household essentials",
      "Saves valuable time by eliminating the need for multiple store visits in a single day",
      "Ideal for both weekly and monthly household shopping routines",
      "Equally suitable for small daily top-up purchases and larger bulk buying",
      "Reduces the overall effort involved in planning and managing household shopping",
    ],
  },
  {
    title: "Why Choose The Buyzaar Mart Over Local Vendors and Other Stores",
    items: [
      "Consistent quality compared to the unpredictable stock found at street vendors",
      "A clean, organized shopping environment compared to crowded open-air markets",
      "Reliable stock availability maintained throughout the week, not just on select days",
      "Higher hygiene standards compared to many traditional vegetable markets",
      "Trained staff support instead of rushed, informal roadside transactions",
      "A combination of online and offline shopping convenience that adapts to different customer needs",
    ],
  },
  {
    title: "Technology-Enabled Shopping Experience",
    items: [
      "Modern point-of-sale systems ensure fast and accurate billing",
      "Online ordering platforms make remote shopping simple and convenient",
      "Real-time stock visibility helps reduce instances of unavailable items",
      "Digital payment options add an extra layer of convenience and safety",
      "Technology integration reflects the brand's focus on modern, organized retail",
    ],
  },
  {
    title: "Tips for Choosing Fresh Fruits and Vegetables",
    items: [
      "Check for firmness and natural colour rather than being drawn to artificial shine",
      "Avoid produce with visible bruises, cuts, or soft spots that may indicate early spoilage",
      "Choose seasonal items for better taste, nutritional value, and overall freshness",
      "Smell can be a helpful indicator of ripeness, especially for fruits like mangoes and melons",
      "Buy leafy greens in smaller quantities more frequently to maintain freshness",
      "Store different produce items appropriately at home to extend their usable life",
    ],
  },
  {
    title: "Health Benefits of Buying Fresh Produce Regularly",
    items: [
      "Supports better nutrition for growing children and the whole family",
      "Encourages balanced meals built around seasonal variety",
      "Reduces reliance on processed or packaged food alternatives",
      "Helps maintain a consistent, healthy eating routine across the household",
      "Fresh produce generally retains more vitamins and minerals compared to stored or aged stock",
      "Regular access to fresh fruits and vegetables supports long-term wellness goals",
    ],
  },
  {
    title: "Serving Every Corner of Noida",
    items: [
      "Catering to families, working professionals, and senior citizens across different sectors",
      "Meeting the needs of both nuclear households and larger joint families",
      "Supporting Noida's growing residential and commercial population with reliable retail access",
      "Adapting store offerings based on neighbourhood-specific preferences and demand",
      "Continuously working to expand presence and cover more sectors and residential pockets",
    ],
  },
  {
    title: "Customer-Friendly Shopping Experience",
    items: [
      "Well-labelled sections that make navigation quick and simple",
      "Helpful staff available to answer product-related queries as needed",
      "Quick billing processes designed to avoid long waiting times",
      "Clean, spacious aisles that make for a comfortable shopping experience",
      "Options for both quick top-up purchases and complete grocery runs in a single visit",
    ],
  },
  {
    title: "Building Long-Term Trust With Noida Shoppers",
    items: [
      "Consistency in quality and service builds repeat, long-term customers",
      "Transparent business practices reinforce trust across every visit",
      "A community-first approach helps the brand understand local shopping habits better",
      "Ongoing feedback from shoppers helps refine stock selection and store experience",
      "A growing presence across Noida reflects sustained customer confidence in the brand",
    ],
  },
  {
    title: "Reducing Wastage Through Better Retail Practices",
    items: [
      "Organized inventory management helps minimize spoilage compared to open-market stalls",
      "Regular stock rotation ensures older produce is used or discounted before it spoils",
      "Better storage conditions directly reduce the amount of produce wasted before sale",
      "Efficient supply chain planning helps match stock levels with actual customer demand",
      "Lower wastage indirectly supports more consistent pricing for customers over time",
    ],
  },
  {
    title: "Understanding Noida's Evolving Grocery Shopping Habits",
    items: [
      "More residents are shifting from unorganized markets to organized retail formats",
      "Convenience, hygiene, and time-saving have become key factors in shopping decisions",
      "Younger, working-age residents increasingly prefer app-based ordering for daily essentials",
      "Older residents continue to value in-store browsing combined with personalized assistance",
      "The Buyzaar Mart is designed to serve both shopping preferences under one brand",
    ],
  },
  {
    title: "A Store Designed Around Everyday Convenience",
    items: [
      "Store formats are planned to suit different neighbourhood sizes and footfall levels",
      "Layouts prioritize easy access to frequently purchased fruits and vegetables",
      "Checkout processes are streamlined to reduce waiting time during peak hours",
      "Store design reflects a balance between functionality and a pleasant shopping experience",
      "Every element, from shelving to staff training, is aimed at making daily shopping easier",
    ],
  },
  {
    title: "Making Fresh Produce Shopping Simple for Every Noida Household",
    items: [
      "Whether shopping for a small family or a large joint household, stock variety is planned to suit different needs",
      "Regular visitors benefit from consistent quality that removes the guesswork from daily shopping",
      "New customers can expect the same standards of freshness and hygiene at every visit",
      "The overall shopping experience is designed to save time without compromising on quality",
      "As Noida continues to grow, The Buyzaar Mart aims to remain a dependable, everyday choice for fresh fruits and vegetables",
    ],
  },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <title>
        Best Place to Buy Fruits and Vegetables in Noida | The Buyzaar Mart
      </title>

      <meta
        name="description"
        content="Looking for the best place to buy fruits and vegetables in Noida? The Buyzaar Mart offers fresh, hygienically sourced produce, wide variety, and doorstep delivery."
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
              Best Place to Buy Fruits and Vegetables in Noida
            </h1>

            <p>
              Finding fresh, clean, and reasonably priced fruits and vegetables
              in a fast-growing city like Noida can be a genuine daily
              challenge. Between crowded local markets, inconsistent quality,
              unreliable stock, and long travel distances to wholesale mandis,
              residents often struggle to find one dependable source for their
              everyday produce needs. The Buyzaar Mart solves this problem by
              offering a trusted, organized, and hygienic destination for fruits
              and vegetables across Noida&apos;s residential sectors, making it
              the best place to buy fruits and vegetables in Noida for busy
              households.
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
                Best Place to Buy Fruits and Vegetables in Noida
              </h2>

              <p className="mb-4 text-gray-800">
                Looking for the best place to buy fruits and vegetables in
                Noida? The Buyzaar Mart offers fresh, hygienically sourced
                produce, wide variety, and doorstep delivery.
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
            currentSlug="/cities/noida/best-place-to-buy-fruits-and-vegetables-in-noida"
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