import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const pageSeo = {
    title: "Supermarket Near Me in Noida | The Buyzaar Mart",
    description:
        "Find a reliable supermarket near you in Noida with The Buyzaar Mart, offering fresh produce, groceries, and daily essentials across multiple sectors.",
    keywords:
        "supermarket near me in Noida, Noida supermarket, grocery store near me Noida, The Buyzaar Mart Noida, best supermarket Noida, local supermarket Noida, grocery shopping Noida",
    slug: "supermarket-near-me-in-noida",
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Buyzaar Mart - Supermarket Near Me in Noida",
    description:
        "The Buyzaar Mart is a reliable neighbourhood supermarket in Noida offering fresh produce, groceries, dairy, packaged foods, household essentials, and daily-use products across multiple sectors.",
    url: "https://www.thebuyzaarmart.com/cities/noida/supermarket-near-me-in-noida",
    areaServed: [
        {
            "@type": "City",
            name: "Noida",
        },
        {
            "@type": "City",
            name: "Greater Noida",
        },
        {
            "@type": "Place",
            name: "Greater Noida West",
        },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Supermarket Products at The Buyzaar Mart",
        itemListElement: [
            {
                "@type": "Offer",
                name: "Fresh Fruits and Vegetables",
                description:
                    "Fresh fruits and vegetables sourced regularly to maintain quality and variety.",
            },
            {
                "@type": "Offer",
                name: "Staple Groceries",
                description:
                    "Rice, pulses, flour, oil, spices, and other everyday cooking essentials.",
            },
            {
                "@type": "Offer",
                name: "Dairy Products",
                description:
                    "Milk, curd, paneer, butter, and cheese sourced from trusted suppliers.",
            },
            {
                "@type": "Offer",
                name: "Packaged and Processed Foods",
                description:
                    "Snacks, ready-to-eat items, instant meals, beverages, and bakery products.",
            },
            {
                "@type": "Offer",
                name: "Personal Care and Household Essentials",
                description:
                    "Cleaning supplies, toiletries, hygiene products, baby care items, stationery, and utility products.",
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
            name: "Does The Buyzaar Mart have supermarket locations across Noida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, stores are available across several Noida sectors, making it accessible to a wide range of residents.",
            },
        },
        {
            "@type": "Question",
            name: "What kind of products are available at The Buyzaar Mart?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It offers groceries, fresh produce, dairy, packaged foods, and household essentials under one roof.",
            },
        },
        {
            "@type": "Question",
            name: "Is fresh produce available at the supermarket?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, fruits and vegetables are sourced and restocked regularly to maintain freshness.",
            },
        },
        {
            "@type": "Question",
            name: "Are both branded and local products available in-store?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, the store stocks a mix of branded and local products to suit different preferences.",
            },
        },
        {
            "@type": "Question",
            name: "Is the store suitable for daily and weekly shopping needs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, it is designed to support both quick daily purchases and larger weekly shopping trips.",
            },
        },
        {
            "@type": "Question",
            name: "Does the supermarket maintain hygiene and cleanliness standards?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, cleanliness and hygiene are maintained as a standard part of store operations.",
            },
        },
        {
            "@type": "Question",
            name: "Are new store locations being added in Noida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, expansion into new sectors continues based on customer demand and accessibility needs.",
            },
        },
        {
            "@type": "Question",
            name: "Does the store offer support for festive or bulk shopping needs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, special stock and combo packs are made available during festivals and high-demand periods.",
            },
        },
        {
            "@type": "Question",
            name: "Are digital payment options available at the store?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, customers can pay through digital modes as well as cash at checkout.",
            },
        },
    ],
};

const supermarketSearchReasons = [
    "Saves travel time by allowing customers to shop for daily essentials close to home.",
    "Reduces dependency on multiple small shops for different categories of household items.",
    "Offers a one-stop solution for groceries, fresh produce, packaged food, and household essentials.",
    "Helps in quick, unplanned purchases without needing to travel across the city.",
    "Supports busy schedules where visiting distant markets is not practical.",
    "Builds a sense of familiarity and trust through regular visits to the same store.",
    "Makes it easier to compare products, brands, and quantities in person before buying.",
    "Useful for elderly residents who prefer shopping within their immediate neighbourhood.",
    "Helps working parents fit grocery shopping into short breaks between daily responsibilities.",
    "Reduces overall monthly shopping effort by allowing frequent, smaller, convenient visits.",
    "Supports quick decision-making when planning meals on short notice.",
];

const reliableSupermarketFeatures = [
    "Strategically located across various Noida sectors to ensure easy accessibility for residents.",
    "Stocks a wide range of daily essentials including groceries, fruits, vegetables, dairy, and packaged goods.",
    "Maintains consistent stock availability to avoid frequent out-of-stock situations for common items.",
    "Designed with a customer-first layout that makes navigation and product discovery simple.",
    "Focuses on offering both branded and local products to suit different customer preferences.",
    "Combines the convenience of a modern supermarket with the personal touch of a local store.",
    "Regularly updates inventory based on seasonal demand and customer buying patterns.",
    "Built to serve families, working professionals, students, and senior citizens alike.",
    "Designed to function as a dependable daily-needs destination rather than an occasional stop.",
    "Focused on consistency, so customers know what to expect on every visit.",
    "Operates with a community-first mindset, prioritising the needs of nearby residents.",
];

const productCategories = [
    "Fresh fruits and vegetables sourced regularly to maintain quality and variety.",
    "Staple groceries including rice, pulses, flour, oil, and spices for everyday cooking needs.",
    "Dairy products such as milk, curd, paneer, butter, and cheese from trusted suppliers.",
    "Packaged and processed foods including snacks, ready-to-eat items, and instant meals.",
    "Personal care and household essentials such as cleaning supplies, toiletries, and hygiene products.",
    "Beverages including tea, coffee, juices, and soft drinks for daily consumption.",
    "Bakery items such as bread, biscuits, and other baked goods for regular household use.",
    "Seasonal and festive products introduced during festivals and special occasions throughout the year.",
    "Baby care and kids' essentials stocked for households with young children.",
    "Stationery and small household utility items often needed alongside regular groceries.",
    "Pet care basics for households managing pets alongside regular grocery needs.",
];

const nearbyShoppingBenefits = [
    "Reduces travel time and effort, especially during busy weekdays or emergencies.",
    "Allows for quick top-up shopping without planning a full grocery trip.",
    "Helps avoid last-minute inconvenience when ingredients or essentials run out unexpectedly.",
    "Makes it easier to shop frequently in smaller quantities rather than bulk monthly purchases.",
    "Supports spontaneous decisions like hosting guests or preparing unplanned meals.",
    "Encourages walk-in visits, which many customers find quicker than online ordering for small needs.",
    "Builds familiarity with store layout, making repeat visits faster and more efficient.",
    "Reduces fuel and commute costs associated with travelling to distant markets or malls.",
    "Makes evening or weekend shopping simple without disrupting other plans.",
];

const accessibilityPoints = [
    "Store locations are chosen based on residential density and accessibility for local communities.",
    "Expansion into new sectors continues based on customer demand and footfall patterns.",
    "Stores are positioned near residential societies, markets, and commonly used commute routes.",
    "Accessibility is planned to minimise travel distance for regular grocery shopping needs.",
    "Locations are periodically reassessed to keep pace with new housing developments in Noida.",
    "Proximity to metro stations and main roads considered while identifying new store sites.",
];

const qualityStandards = [
    "Fresh produce is sourced regularly to maintain quality across fruits, vegetables, and dairy items.",
    "Quality checks are conducted before products are placed on store shelves.",
    "Perishable items are monitored closely to ensure timely rotation and reduced spoilage.",
    "Packaged goods are checked for proper labelling, expiry dates, and packaging integrity.",
    "Vendor partnerships are reviewed periodically to maintain consistent product quality.",
    "Store hygiene and cleanliness are maintained as a standard operating practice.",
    "Customer feedback is used to continuously improve product selection and quality control.",
    "Shelf rotation practices help ensure older stock is sold before newer stock is displayed.",
    "Temperature-sensitive items stored under appropriate conditions to preserve freshness.",
];

const affordabilityBenefits = [
    "Focuses on offering a good balance of quality and value across product categories.",
    "Stocks both economical and premium options to suit different household budgets.",
    "Regularly introduces combo packs and bundled offers for everyday essentials.",
    "Helps customers save on both time and travel costs compared to distant supermarkets.",
    "Supports smart shopping through organised categorisation that avoids unnecessary purchases.",
    "Encourages planned shopping through clear product arrangement and visible stock availability.",
    "Helps households manage recurring monthly expenses through predictable product availability.",
    "Assists budget-conscious shoppers through clearly organised product tiers.",
];

const shoppingExperience = [
    "Well-organised aisles make it easy to locate products across different categories.",
    "Clear signage helps customers navigate quickly, especially during busy shopping hours.",
    "Billing counters designed to reduce waiting time during peak hours.",
    "Store staff available to assist with product location and general shopping queries.",
    "Clean and well-maintained store environment enhances overall shopping comfort.",
    "Adequate space between aisles ensures a comfortable shopping experience for families.",
    "Regular restocking ensures shelves remain full and organised throughout the day.",
    "Designed layout minimises confusion, helping first-time visitors shop with ease.",
    "Checkout process kept simple to avoid unnecessary delays during busy hours.",
];

const localSupermarketBenefits = [
    "Faster adaptability to local customer preferences and regional product demand.",
    "Shorter travel distance compared to large retail chains located farther from residential areas.",
    "More personalised customer service due to closer community connection.",
    "Quicker response to customer feedback and complaints at the store level.",
    "Better understanding of neighbourhood-specific shopping habits and seasonal needs.",
    "Stronger community trust built through consistent, familiar service over time.",
    "Flexibility to introduce region-specific products that larger chains may overlook.",
    "Easier for staff to recognise and cater to repeat, regular customers.",
    "Simpler, faster shopping experience without the scale-related delays of large chains.",
];

const householdBenefits = [
    "Helps families manage daily and weekly grocery needs without long shopping trips.",
    "Saves time for working professionals who prefer quick shopping before or after work hours.",
    "Useful for students and bachelors who need convenient access to essentials.",
    "Supports elderly residents who prefer shopping within a short distance from home.",
    "Assists in managing unplanned household needs without disrupting daily schedules.",
    "Reduces overall shopping stress by offering a predictable, familiar store experience.",
    "Makes it easier for dual-income households to divide shopping responsibilities efficiently.",
    "Helps new residents in a locality quickly settle into a dependable shopping routine.",
];

const urbanLivingBenefits = [
    "Act as a dependable source for daily and weekly household requirements.",
    "Reduce reliance on multiple small vendors for different product categories.",
    "Support organised, planned shopping rather than scattered purchases across locations.",
    "Play a key role in maintaining consistent access to fresh and packaged food items.",
    "Contribute to time management for busy urban households juggling multiple responsibilities.",
    "Serve as a reliable option during emergencies when quick access to essentials is needed.",
    "Help maintain a consistent household routine around meal planning and stocking essentials.",
    "Function as a community touchpoint where residents also exchange local information.",
];

const seasonalBenefits = [
    "Special product ranges introduced ahead of major festivals and celebrations.",
    "Festive combo packs designed to simplify bulk shopping during peak seasons.",
    "Increased stock levels maintained during high-demand periods to avoid shortages.",
    "Seasonal fruits and vegetables prioritised to match festive cooking requirements.",
    "Store layout adjusted during festive periods to highlight relevant seasonal products.",
    "Extended stock planning done in advance of major regional and national festivals.",
];

const technologyFeatures = [
    "Point-of-sale systems used to speed up billing and reduce customer wait times.",
    "Inventory tracking helps maintain accurate stock visibility across categories.",
    "Digital payment options available alongside cash for faster checkout.",
    "Store operations structured to minimise delays during high-footfall hours.",
    "Efficient stock replenishment processes help maintain shelf availability throughout the day.",
];

const selectionTips = [
    "Check product variety to ensure it covers most of your regular household needs.",
    "Visit during non-peak hours for a quicker and more comfortable shopping experience.",
    "Compare quality and freshness of perishable items before making them a regular choice.",
    "Look for stores that maintain consistent stock availability across essential categories.",
    "Prefer supermarkets with organised layouts that make navigation easier.",
    "Consider proximity and accessibility alongside product range and pricing.",
    "Observe store hygiene and cleanliness as an indicator of overall quality standards.",
    "Ask about staff assistance and support in case of product-related concerns.",
    "Evaluate billing speed and overall checkout convenience during a trial visit.",
];

const customerSupportFeatures = [
    "Store staff trained to assist customers with product queries and general shopping needs.",
    "Feedback channels available for addressing customer concerns and suggestions.",
    "Focus on maintaining consistent service quality across all store locations.",
    "Quick resolution processes for billing or product-related issues at the store level.",
    "Regular staff training to ensure smooth and efficient customer interactions.",
    "Emphasis on building long-term trust through consistent, reliable service.",
    "Store teams encouraged to proactively assist customers unfamiliar with the layout.",
    "Consistent service standards maintained across all supermarket locations in Noida.",
];

const faqs = [
    {
        question: "Does The Buyzaar Mart have supermarket locations across Noida?",
        answer:
            "Yes, stores are available across several Noida sectors, making it accessible to a wide range of residents.",
    },
    {
        question: "What kind of products are available at The Buyzaar Mart?",
        answer:
            "It offers groceries, fresh produce, dairy, packaged foods, and household essentials under one roof.",
    },
    {
        question: "Is fresh produce available at the supermarket?",
        answer:
            "Yes, fruits and vegetables are sourced and restocked regularly to maintain freshness.",
    },
    {
        question: "Are both branded and local products available in-store?",
        answer:
            "Yes, the store stocks a mix of branded and local products to suit different preferences.",
    },
    {
        question: "Is the store suitable for daily and weekly shopping needs?",
        answer:
            "Yes, it is designed to support both quick daily purchases and larger weekly shopping trips.",
    },
    {
        question: "Does the supermarket maintain hygiene and cleanliness standards?",
        answer:
            "Yes, cleanliness and hygiene are maintained as a standard part of store operations.",
    },
    {
        question: "Are new store locations being added in Noida?",
        answer:
            "Yes, expansion into new sectors continues based on customer demand and accessibility needs.",
    },
    {
        question: "Does the store offer support for festive or bulk shopping needs?",
        answer:
            "Yes, special stock and combo packs are made available during festivals and high-demand periods.",
    },
    {
        question: "Are digital payment options available at the store?",
        answer:
            "Yes, customers can pay through digital modes as well as cash at checkout.",
    },
];

const BulletList = ({ items }) => {
    return (
        <ul className="list-disc space-y-2 pl-6">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

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
                        <h1 className="mt-8 text-2xl font-medium text-gray-900 sm:text-3xl">
                            Supermarket Near Me in Noida – The Buyzaar Mart
                        </h1>

                        <p>
                            When people search for a &quot;supermarket near me in Noida,&quot;
                            they are usually looking for a store that offers convenience,
                            variety, fair value, and reliability, all within easy reach of
                            their home or workplace. The Buyzaar Mart is designed to meet
                            exactly this need, serving as a trusted neighbourhood supermarket
                            across multiple sectors of Noida. Below is a detailed,
                            point-wise overview of what makes The Buyzaar Mart a preferred
                            choice for local shoppers.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Why People Search for a Supermarket Near Me
                        </h2>
                        <BulletList items={supermarketSearchReasons} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            What Makes The Buyzaar Mart a Reliable Neighbourhood Supermarket
                        </h2>
                        <BulletList items={reliableSupermarketFeatures} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Product Categories Available at The Buyzaar Mart
                        </h2>
                        <BulletList items={productCategories} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Convenience of Shopping at a Nearby Supermarket
                        </h2>
                        <BulletList items={nearbyShoppingBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Store Accessibility Across Noida Sectors
                        </h2>

                        <p>
                            The Buyzaar Mart operates across several key locations in Noida,
                            including Sector 18, Sector 62, Sector 50, Sector 76, Sector 137,
                            Sector 78, Sector 12, Sector 15, Sector 100, Sector 110, and
                            Sector 168, along with select areas of Greater Noida and Greater
                            Noida West, ensuring that residents across the city have a
                            supermarket within reasonable reach.
                        </p>

                        <BulletList items={accessibilityPoints} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Quality and Freshness Standards
                        </h2>
                        <BulletList items={qualityStandards} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Affordability and Value for Everyday Shopping
                        </h2>
                        <BulletList items={affordabilityBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Customer Experience and Store Layout
                        </h2>
                        <BulletList items={shoppingExperience} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Why Choose a Local Supermarket Over Large Retail Chains
                        </h2>
                        <BulletList items={localSupermarketBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Benefits for Families and Working Professionals
                        </h2>
                        <BulletList items={householdBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Role of Supermarkets in Daily Urban Living
                        </h2>
                        <BulletList items={urbanLivingBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Seasonal and Festive Shopping Support
                        </h2>
                        <BulletList items={seasonalBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Technology and In-Store Efficiency
                        </h2>
                        <BulletList items={technologyFeatures} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Tips for Choosing the Right Supermarket Nearby
                        </h2>
                        <BulletList items={selectionTips} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Customer Support and Service Quality
                        </h2>
                        <BulletList items={customerSupportFeatures} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Frequently Asked Questions
                        </h2>

                        <div className="mt-4 space-y-4">
                            {faqs.map((faq) => (
                                <div key={faq.question}>
                                    <h3 className="font-medium text-gray-900">
                                        {faq.question}
                                    </h3>
                                    <p className="mt-2">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
                        <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                            Start Your Online Shopping Journey in Noida
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Noida&apos;s fast-paced urban lifestyle demands a reliable, accessible
                                online daily needs store that fits seamlessly into your routine.
                            </li>

                            <li>
                                Shop with The Buyzaar Mart and experience a modern digital grocery
                                destination built on freshness, convenience, and trust.
                            </li>

                            <li>
                                <span className="font-semibold">Email:</span>{" "}
                                <a
                                    href="mailto:info@thebuyzaarmart.com"
                                    className="font-semibold text-green-600 hover:underline"
                                >
                                    info@thebuyzaarmart.com
                                </a>
                            </li>

                            <li>
                                <span className="font-semibold">Phone / WhatsApp:</span>{" "}
                                <a
                                    href="tel:+919217991727"
                                    className="font-semibold text-green-600 hover:underline"
                                >
                                    9217991727
                                </a>
                            </li>

                            <li>
                                <span className="font-semibold">Business Hours:</span> Monday to
                                Saturday, 09:00 AM – 07:00 PM
                            </li>
                        </ul>
                    </div>

                    <CityInternalLinks
                        city="noida"
                        currentSlug="/cities/noida/supermarket-near-me-in-noida"
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