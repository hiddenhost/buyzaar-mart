import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

export const seoMetadata = {
  title: "Best Grocery Shopping Mall in Kanpur | The Buyzaar Mart",
  description:
    "Discover The Buyzaar Mart, the best grocery shopping mall in Kanpur, offering fresh produce, daily essentials & branded products under one roof at great prices.",
  keywords:
    "best grocery shopping mall in Kanpur, grocery mall Kanpur, The Buyzaar Mart Kanpur, best supermarket mall Kanpur, family grocery shopping Kanpur, one stop grocery mall Kanpur, best shopping mall for groceries Kanpur, grocery shopping experience Kanpur, low investment supermarket franchise in Lucknow, supermarket franchise Lucknow",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GroceryStore",
  name: "The Buyzaar Mart – Best Grocery Shopping Mall in Kanpur",
  description:
    "The Buyzaar Mart is a grocery shopping mall in Kanpur offering fresh produce, dairy, daily essentials, branded products, household items, organized sections, affordable pricing, and a family-friendly shopping experience.",
  url: "https://www.thebuyzaarmart.com/kanpur/best-grocery-shopping-mall-in-kanpur",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Kanpur",
  },
  priceRange: "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes The Buyzaar Mart the best grocery shopping mall in Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Its wide product range, organized mall-style layout, and affordable pricing make it a preferred choice for families.",
      },
    },
    {
      "@type": "Question",
      name: "Does The Buyzaar Mart offer home delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, select outlets provide online ordering with home delivery services.",
      },
    },
    {
      "@type": "Question",
      name: "Is parking available at The Buyzaar Mart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, dedicated parking space is available for a hassle-free shopping visit.",
      },
    },
    {
      "@type": "Question",
      name: "Are fresh produce and dairy items available daily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, these sections are restocked regularly to ensure freshness.",
      },
    },
    {
      "@type": "Question",
      name: "Does The Buyzaar Mart have a loyalty or membership program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, regular customers can enjoy cashback, points, and exclusive discounts.",
      },
    },
    {
      "@type": "Question",
      name: "How can I open a The Buyzaar Mart franchise in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interested entrepreneurs can contact the brand to learn about the low investment franchise model and onboarding process.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods are accepted in-store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cash, UPI, debit/credit cards, and digital wallets are all accepted.",
      },
    },
  ],
};

const BulletList = ({ items }) => (
  <ul className="list-disc space-y-2 pl-6">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const Paragraphs = ({ items }) => (
  <>
    {items.map((item) => (
      <p key={item}>{item}</p>
    ))}
  </>
);

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
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


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Kanpur&apos;s Shoppers Are Choosing One Address Over All
              Others
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Kanpur has grown into a bustling city where families juggle work,
                school runs, and household chores, leaving very little time for
                scattered, multi-stop grocery shopping.
              </li>

              <li>
                Traditional kirana shops, crowded wholesale markets, and scattered
                specialty stores often mean visiting three or four different places
                just to complete a single grocery list.
              </li>

              <li>
                The Buyzaar Mart has changed this experience by bringing together the
                comfort of a shopping mall with the practicality of a full-fledged
                grocery supermarket.
              </li>

              <li>
                Positioned as the best grocery shopping mall in Kanpur, it combines
                variety, freshness, affordability, and a pleasant shopping environment
                in a way that few other stores in the city manage to match.
              </li>

              <li>
                Unlike a traditional grocery store, a shopping mall format allows for
                wider aisles, better product display, dedicated sections for different
                categories, and a far more relaxed, enjoyable shopping experience for
                the entire family.
              </li>

              <li>
                This shift from &quot;just grocery shopping&quot; to a proper shopping
                outing has made The Buyzaar Mart a weekend favorite for many households
                across the city.
              </li>

              <li>
                As more families move toward organized retail over unorganized markets,
                the demand for a trustworthy, all-in-one grocery destination has grown
                significantly in Kanpur.
              </li>


            </ul>
            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Sets a Grocery Mall Apart From a Regular Store
            </h2>

            <BulletList
              items={[
                "Mall-Style Layout – Spacious walkways, well-lit sections, and clearly labeled zones make navigation easy even during peak shopping hours, unlike cramped local shops where finding a single item can take several minutes.",
                "All Categories Under One Roof – From fresh produce to packaged goods, dairy, personal care, and household items, everything is available without needing to step outside or travel to a second location.",
                "Family-Friendly Environment – Air-conditioned interiors, clean restrooms, and comfortable walking space make it suitable for shopping trips with children and elderly family members, turning a routine errand into a relaxed outing.",
                "Organized Billing System – Multiple billing counters and digital payment options help avoid the long queues often seen at traditional markets, especially during evenings and weekends.",
                "In-Store Offers Display – Clear signage for ongoing discounts and combo deals makes it easy to spot savings without asking staff repeatedly or missing out on limited-time promotions.",
                "Trolley and Basket Availability – Unlike small grocery shops, a mall-style store offers trolleys and baskets, making it convenient to shop for a full month's supply in one visit rather than several smaller trips.",
                "Dedicated Parking Space – Ample parking makes it convenient for families arriving by two-wheelers or cars, removing a common hassle of city-center shopping where parking is often scarce.",
              ]}
            />

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              A Look Inside The Buyzaar Mart&apos;s Grocery Sections
            </h2>

            <BulletList
              items={[
                "Fresh Fruits & Vegetables – A dedicated, well-maintained section with daily restocking to ensure freshness and quality.",
                "Dairy & Bakery – Milk, curd, paneer, bread, and bakery items sourced from trusted brands and stored under proper refrigeration.",
                "Grains, Pulses & Staples – Rice, atta, dal, sugar, and salt available in multiple pack sizes for different household needs.",
                "Spices & Cooking Oils – A wide range of masalas, cooking oils, and ghee to suit different regional cooking styles.",
                "Snacks & Packaged Foods – Biscuits, namkeen, chips, instant noodles, and ready-to-cook items from both popular and budget-friendly brands.",
                "Beverages Section – Tea, coffee, soft drinks, juices, and health drinks arranged for quick browsing.",
                "Personal Care & Hygiene – Soaps, shampoos, oral care, and skincare products from leading brands.",
                "Household & Cleaning Supplies – Detergents, floor cleaners, dishwashing liquids, and other daily cleaning essentials.",
              ]}
            />

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Families Prefer This Shopping Experience
            </h2>

            <BulletList
              items={[
                "Saves significant time by allowing an entire month's grocery list to be completed in a single visit, instead of hopping between multiple shops.",
                "Reduces the stress of navigating crowded, unorganized markets, especially during peak hours or festival seasons when local markets get overcrowded.",
                "Offers a comfortable, climate-controlled environment that makes shopping enjoyable rather than a chore, particularly during Kanpur's hot summer afternoons.",
                "Encourages better planning through clear pricing, organized categories, and visible offers, helping families stick to a monthly budget more easily.",
                "Provides a safe, hygienic shopping space, particularly important for perishable and packaged food items where cleanliness directly affects quality.",
                "Makes grocery shopping a family activity rather than a rushed errand, especially on weekends when parents can bring children along comfortably.",
                "Builds confidence in product quality through visible freshness checks and organized stock rotation, reducing the worry of buying expired or low-quality goods.",
              ]}
            />

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How The Buyzaar Mart Keeps the Mall Experience Affordable
            </h2>

            <BulletList
              items={[
                "Direct Supplier Relationships – Sourcing directly from manufacturers and wholesalers helps maintain competitive prices despite the premium mall-style setup.",
                "Smart Space Utilization – Efficient store layout and shelving reduce operational costs, which are reflected in lower product prices.",
                "Bulk Stock Management – Large-scale purchasing and inventory planning allow the store to offer big-format convenience without big-format prices.",
                "Regular Discount Cycles – Weekly and monthly offers ensure that shoppers get mall-level convenience along with local market-level pricing.",
                "Membership & Loyalty Programs – Returning customers benefit from cashback, points, and exclusive discounts that further reduce their overall grocery spend.",
                "Combo & Bundle Deals – Pairing frequently bought items together at a discounted rate encourages higher savings on regular purchases.",
              ]}
            />

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              A Shopping Destination Built Around Convenience
            </h2>

            <BulletList
              items={[
                "Extended Operating Hours – Longer working hours accommodate working professionals who prefer shopping in the evenings or on weekends.",
                "Online Ordering Support – Select locations offer online ordering with home delivery, extending the mall experience beyond in-store visits.",
                "Digital Payment Options – UPI, cards, and wallets are accepted, reducing the need to carry cash.",
                "Trained Staff Assistance – Store staff are available to help locate products, explain offers, and assist with billing queries.",
                "Easy Returns & Exchanges – A clear returns policy on eligible items builds customer confidence in every purchase.",
                "Regular Store Cleanliness Checks – Consistent hygiene standards are maintained across all product sections, particularly perishables.",
              ]}
            />

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Supporting Local Suppliers and the Kanpur Community
            </h2>

            <BulletList
              items={[
                "The Buyzaar Mart works closely with local farmers, dairy suppliers, and small manufacturers, helping strengthen the regional supply chain.",
                "By offering steady demand to local vendors, the store supports small business growth within and around Kanpur.",
                "Local sourcing also means fresher produce, shorter supply routes, and often better pricing for shoppers.",
                "The mall generates local employment opportunities across various roles, from store operations to logistics and customer service.",
                "Community-focused festive offers and seasonal promotions are designed keeping Kanpur's local shopping culture and preferences in mind.",
                "This close relationship with local suppliers also allows The Buyzaar Mart to react quickly to seasonal demand, ensuring shelves are stocked with the freshest available produce at the right time of year.",
              ]}
            />

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Beyond Kanpur – A Growing Retail Story
            </h2>

            <BulletList
              items={[
                "The success of The Buyzaar Mart's grocery mall format in Kanpur has paved the way for expansion into nearby cities, including Lucknow.",
                "For aspiring entrepreneurs, The Buyzaar Mart offers a low investment supermarket franchise in Lucknow, allowing individuals to launch their own store under an already trusted and recognized brand.",
                "The franchise model includes:",
              ]}
            />

            <BulletList
              items={[
                "Lower upfront investment compared to setting up an independent supermarket from scratch.",
                "Assistance with store design, layout planning, and category-wise product placement.",
                "Access to the brand's established supplier network for consistent stock availability.",
                "Marketing support to help generate footfall from the very first day of opening.",
                "Training programs for staff and store management to maintain consistent service quality.",
              ]}
            />

            <BulletList
              items={[
                "This opportunity suits entrepreneurs looking for a low-risk entry into the retail and grocery business with strong brand backing.",
                "As demand for organized grocery retail grows across Uttar Pradesh, this franchise model offers a timely opportunity for long-term business growth.",
              ]}
            />

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Making the Most of Your Visit
            </h2>

            <BulletList
              items={[
                "Plan your shopping list in advance to take full advantage of the wide product range without overspending.",
                "Check in-store and online notifications for ongoing weekly offers before starting your shopping trip.",
                "Use trolleys for bulk shopping trips to comfortably carry a full month's worth of groceries.",
                "Compare pack sizes across categories to identify the most economical options for your household.",
                "Visit during weekday hours for a quieter, more relaxed shopping experience with shorter billing queues.",
                "Take advantage of the loyalty program to accumulate points and unlock additional savings over time.",
                "Bring reusable bags where possible to make carrying your purchases easier, especially during larger monthly stock-up trips.",
                "Explore the festive and seasonal sections during major occasions, as these often carry limited-time offers on gifting items and bulk packs.",
              ]}
            />

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Final Word on Kanpur&apos;s Favorite Grocery Mall
            </h2>

            <BulletList
              items={[
                "The Buyzaar Mart has redefined what grocery shopping looks like in Kanpur by combining the scale and comfort of a shopping mall with the practicality and pricing of a neighborhood grocery store.",
                "Its wide product range, organized layout, and customer-first approach have made it a preferred destination for families across the city.",
                "For entrepreneurs, the brand's low investment supermarket franchise in Lucknow presents a promising opportunity to be part of this growing retail success story.",
                "Whether you're planning a weekly grocery run or a full month's stock-up, The Buyzaar Mart offers a shopping experience that saves time, money, and effort — all under one roof.",
              ]}
            />

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FAQs
            </h2>

            <div className="mt-4 space-y-4">
              {[
                [
                  "Q1. What makes The Buyzaar Mart the best grocery shopping mall in Kanpur?",
                  "Its wide product range, organized mall-style layout, and affordable pricing make it a preferred choice for families.",
                ],
                [
                  "Q2. Does The Buyzaar Mart offer home delivery?",
                  "Yes, select outlets provide online ordering with home delivery services.",
                ],
                [
                  "Q3. Is parking available at The Buyzaar Mart?",
                  "Yes, dedicated parking space is available for a hassle-free shopping visit.",
                ],
                [
                  "Q4. Are fresh produce and dairy items available daily?",
                  "Yes, these sections are restocked regularly to ensure freshness.",
                ],
                [
                  "Q5. Does The Buyzaar Mart have a loyalty or membership program?",
                  "Yes, regular customers can enjoy cashback, points, and exclusive discounts.",
                ],
                [
                  "Q6. How can I open a The Buyzaar Mart franchise in Lucknow?",
                  "Interested entrepreneurs can contact the brand to learn about the low investment franchise model and onboarding process.",
                ],
                [
                  "Q7. What payment methods are accepted in-store?",
                  "Cash, UPI, debit/credit cards, and digital wallets are all accepted.",
                ],
              ].map(([question, answer]) => (
                <div key={question}>
                  <h3 className="font-medium text-gray-900">{question}</h3>
                  <p className="mt-2">{answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Visit the Best Grocery Shopping Mall in Kanpur
              </h2>

              <p className="mb-4 text-gray-800">
                Discover fresh produce, daily essentials, branded products,
                family-friendly facilities, organized sections, and great
                prices at The Buyzaar Mart.
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
          </div>

          <CityInternalLinks
            city="kanpur"
            currentSlug="/kanpur/best-grocery-shopping-mall-in-kanpur"
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