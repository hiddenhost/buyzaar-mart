import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const pageSeo = {
    title:
        "Best Online Grocery Store in Noida for Fruits and Vegetables | The Buyzaar Mart",
    description:
        "Discover why The Buyzaar Mart is the best online grocery store in Noida for fresh fruits and vegetables, offering quality produce, fast delivery, and easy ordering.",
    keywords:
        "best online grocery store in Noida, online fruits and vegetables Noida, fresh vegetables delivery Noida, online grocery shopping Noida, The Buyzaar Mart Noida, buy fruits online Noida, vegetable delivery app Noida",
    slug: "best-online-grocery-store-noida-fruits-vegetables",
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: "The Buyzaar Mart - Best Online Grocery Store in Noida",
    description:
        "The Buyzaar Mart offers fresh fruits, vegetables, groceries, dairy, packaged foods, and household essentials through online grocery delivery across Noida, Greater Noida, and Greater Noida West.",
    url: "https://www.thebuyzaarmart.com/cities/noida/best-online-grocery-store-in-noida-for-fruits-and-vegetables",
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
        name: "Online Fruits, Vegetables, and Grocery Products",
        itemListElement: [
            {
                "@type": "Offer",
                name: "Fresh Fruits",
                description:
                    "Everyday, seasonal, exotic, and premium fruits available for online grocery delivery.",
            },
            {
                "@type": "Offer",
                name: "Fresh Vegetables",
                description:
                    "Leafy greens, root vegetables, everyday vegetables, seasonal produce, and curated vegetable baskets.",
            },
            {
                "@type": "Offer",
                name: "Dairy and Grocery Essentials",
                description:
                    "Dairy products, dry fruits, nuts, pantry staples, frozen foods, and other daily grocery items.",
            },
            {
                "@type": "Offer",
                name: "Combo Packs",
                description:
                    "Curated fruit and vegetable combo packs designed for families, bachelors, and regular weekly shoppers.",
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
            name: "Is The Buyzaar Mart a good option for buying fresh fruits and vegetables online in Noida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, it focuses on fresh sourcing, quality checks, and reliable delivery, making it a suitable option for daily grocery needs.",
            },
        },
        {
            "@type": "Question",
            name: "Which areas in Noida are covered for online grocery delivery?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Coverage includes major sectors such as 18, 62, 50, 76, 137, and nearby areas, along with parts of Greater Noida.",
            },
        },
        {
            "@type": "Question",
            name: "Can I choose specific quantities while ordering fruits and vegetables?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, customers can select quantities based on pack sizes available for each product listed.",
            },
        },
        {
            "@type": "Question",
            name: "What if I receive damaged or poor-quality produce?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Replacement or resolution options are available in case of quality issues upon delivery.",
            },
        },
        {
            "@type": "Question",
            name: "Is same-day delivery available for grocery orders?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Same-day delivery is offered in several serviceable areas, depending on order timing and location.",
            },
        },
        {
            "@type": "Question",
            name: "Are seasonal and exotic fruits also available?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, the platform stocks both everyday essentials and seasonal or exotic produce based on availability.",
            },
        },
        {
            "@type": "Question",
            name: "What payment methods are accepted?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Customers can pay through cash on delivery, UPI, or card payments as per convenience.",
            },
        },
        {
            "@type": "Question",
            name: "Can I set up recurring or repeat grocery orders?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, saved lists and repeat-order features make it easy to reorder regular items quickly.",
            },
        },
    ],
};

const onlineShoppingBenefits = [
    "Saves time for working professionals, students, and families who cannot visit physical markets daily.",
    "Avoids traffic congestion and parking hassles common in busy Noida sectors like 18, 62, and 137.",
    "Offers doorstep convenience, especially useful during extreme weather, festivals, or family emergencies.",
    "Reduces impulse purchases and helps in better budgeting through organised online carts.",
    "Provides access to a wider variety of seasonal and exotic produce than local vendors typically stock.",
    "Allows customers to compare quality, freshness, and quantity before finalising an order.",
    "Supports contactless and hygienic shopping, a preference that has grown significantly among urban households.",
    "Helps elderly residents and people with limited mobility access fresh groceries without stepping out.",
    "Frees up weekends and evenings that would otherwise go into market visits and queue waiting.",
    "Reduces the stress of last-minute grocery runs during unexpected guests or gatherings.",
    "Makes it easier to stick to planned meals rather than settling for whatever is available nearby.",
];

const buyzaarOnlineFeatures = [
    "Sources fruits and vegetables directly from trusted farms and mandis to ensure freshness.",
    "Maintains strict quality checks before produce is listed and packed for delivery.",
    "Offers a wide assortment ranging from daily essentials like onions, tomatoes, and potatoes to exotic items like broccoli, zucchini, and dragon fruit.",
    "Provides transparent product descriptions including weight, freshness indicators, and origin details.",
    "Focuses on minimal handling of produce to retain nutritional value and taste.",
    "Continuously updates inventory based on seasonal availability for better freshness guarantees.",
    "Built specifically keeping local Noida households and their daily grocery habits in mind.",
    "Combines the reliability of a supermarket with the personal touch of a neighbourhood grocer.",
    "Designed to serve both small daily-need buyers and larger weekly or monthly shoppers.",
    "Understands regional preferences, stocking items commonly used in North Indian households alongside modern staples.",
    "Maintains a consistent supply chain so customers rarely face out-of-stock situations for essential items.",
];

const freshProduceRange = [
    "Leafy vegetables such as spinach, fenugreek, coriander, and mint sourced fresh for daily cooking needs.",
    "Root vegetables including carrots, radish, beetroot, and sweet potatoes available in various pack sizes.",
    "Seasonal fruits like mangoes, litchis, watermelons, and guavas depending on the time of year.",
    "Everyday staples such as bananas, apples, oranges, and papayas stocked consistently throughout the year.",
    "Exotic and premium options including avocados, bell peppers, cherry tomatoes, and berries for health-conscious buyers.",
    "Combo packs and curated vegetable baskets designed for small families, bachelors, and bulk buyers alike.",
    "Organic and pesticide-conscious produce options for customers who prioritise healthier eating choices.",
    "Dry fruits and nuts often bundled alongside fresh produce for one-stop grocery shopping.",
    "Herbs and specialty items used in regional and international cuisines, catering to Noida&apos;s diverse population.",
    "Frozen and pre-cut vegetable options for customers looking to save preparation time.",
    "Special festival packs featuring fruits and vegetables commonly used during Indian celebrations.",
];

const qualityStandards = [
    "Every batch of fruits and vegetables undergoes visual and quality inspection before packing.",
    "Damaged, overripe, or substandard produce is filtered out at the sourcing stage itself.",
    "Cold-chain handling practices are followed wherever applicable to preserve freshness during transit.",
    "Packaging is designed to prevent bruising, crushing, or spoilage during delivery.",
    "Replacement or refund options are available in case of quality issues upon delivery.",
    "Regular vendor audits help maintain consistency in produce quality across seasons.",
    "Customer feedback is actively used to improve sourcing and quality control processes.",
    "Freshness checks are repeated at multiple stages, from procurement to final dispatch.",
    "Grading systems help separate premium quality produce from standard batches for accurate listings.",
];

const deliveryFeatures = [
    "Delivery slots designed around the daily routines of working professionals and families.",
    "Same-day and next-day delivery options available depending on the customer&apos;s location and order time.",
    "Real-time order tracking allows customers to monitor their delivery status conveniently.",
    "Trained delivery personnel ensure safe handling of perishable items like fruits and vegetables.",
    "Multiple delivery attempts and flexible rescheduling options reduce missed deliveries.",
    "Insulated packaging used for temperature-sensitive produce to maintain freshness till doorstep arrival.",
    "Delivery network structured to minimise transit time between sourcing points and customer locations.",
    "Priority delivery windows offered during festivals and high-demand periods.",
    "Route optimisation helps reduce delays during peak traffic hours common in Noida.",
];

const orderingFeatures = [
    "Simple browsing categories separating fruits, vegetables, leafy greens, and combo packs for quick navigation.",
    "Search and filter options help customers find specific items without scrolling through long lists.",
    "Saved lists and repeat-order features make weekly grocery shopping faster for regular customers.",
    "Multiple payment options including cash on delivery, UPI, and card payments for convenience.",
    "Order modification and cancellation options available within a defined time window before dispatch.",
    "Clear order summaries and confirmations sent to avoid confusion regarding quantity or items.",
    "Mobile-friendly browsing experience suited for on-the-go grocery shopping.",
    "Guest checkout and quick registration options reduce friction for first-time buyers.",
    "Wishlist and favourites feature makes reordering preferred items simple and quick.",
];

const hygieneStandards = [
    "Produce handling follows strict hygiene protocols from sourcing to final packaging.",
    "Packaging materials are chosen to minimise contamination and maintain freshness.",
    "Delivery staff follow basic hygiene practices to ensure safe handling during doorstep delivery.",
    "Storage facilities are maintained at appropriate conditions to slow down spoilage.",
    "Regular cleaning and sanitisation practices followed at sorting and packing units.",
    "Focus on reducing unnecessary human contact with produce during processing stages.",
    "Emphasis on food safety builds trust among health-conscious households in Noida.",
];

const coveragePoints = [
    "Coverage is designed to include both high-density residential societies and independent housing areas.",
    "Expansion plans continue to add more sectors based on customer demand and order volume.",
    "Localised delivery hubs help reduce delivery time within covered zones.",
    "Coverage area is periodically reviewed to include emerging residential and commercial pockets of Noida.",
    "Newly developed sectors and upcoming housing projects are gradually added to the delivery map.",
];

const localOnlineBenefits = [
    "Faster response to local demand patterns compared to large chain supermarkets.",
    "Greater flexibility in sourcing region-specific and seasonal produce preferred by local households.",
    "Personalised customer service that adapts quickly to feedback and complaints.",
    "Lower overheads often translate into more competitive value for everyday essentials.",
    "Stronger focus on freshness since sourcing cycles are shorter and localised.",
    "Easier communication channels for resolving order-related issues promptly.",
    "Community-oriented approach that builds long-term trust with regular customers.",
    "Better adaptability to local festivals, events, and seasonal buying patterns.",
    "Greater accountability since local operations are closely monitored end to end.",
];

const healthBenefits = [
    "Fresh fruits and vegetables retain more vitamins and minerals compared to stored or processed alternatives.",
    "Regular access to fresh produce supports better dietary habits across all age groups.",
    "Encourages home cooking, which typically involves less oil, salt, and preservatives than outside food.",
    "Seasonal produce often aligns naturally with the body&apos;s nutritional needs through the year.",
    "Easy availability reduces the temptation to skip vegetables due to inconvenience.",
    "Supports children&apos;s growth and immunity through consistent inclusion of fresh produce in meals.",
];

const householdBenefits = [
    "Helps families plan weekly meals without last-minute market runs.",
    "Reduces dependency on eating out by making fresh produce readily available at home.",
    "Supports busy professionals who have limited time for physical grocery shopping.",
    "Assists in maintaining a balanced, home-cooked diet through easy access to fresh ingredients.",
    "Useful for students and working individuals living independently in Noida.",
    "Helps working parents manage household planning more efficiently alongside professional commitments.",
];

const shoppingTips = [
    "Check product images and descriptions carefully before finalising quantities.",
    "Prefer sellers who mention sourcing details and freshness indicators clearly.",
    "Read recent customer reviews to gauge consistency in quality and delivery experience.",
    "Opt for smaller trial orders first when trying a new online grocery platform.",
    "Choose combo packs or curated baskets for balanced weekly grocery planning.",
    "Track seasonal availability to get the freshest and most affordable produce.",
    "Provide accurate delivery instructions to avoid delays or handling issues.",
    "Plan orders a day in advance during festive seasons to avoid last-minute unavailability.",
];

const customerSupportFeatures = [
    "Dedicated support channels available for order-related queries and complaints.",
    "Quick resolution process for damaged, missing, or incorrect items in an order.",
    "Feedback mechanisms integrated into the ordering process for continuous improvement.",
    "Support extended across chat, call, and app-based communication for convenience.",
    "Focus on building long-term customer relationships through consistent service quality.",
    "Regular engagement with customers to understand evolving grocery preferences.",
    "Strong emphasis on resolving issues within short turnaround times.",
];

const sustainabilityBenefits = [
    "Demand-based sourcing helps minimise overstocking and produce wastage.",
    "Encourages customers to order in quantities suited to actual consumption needs.",
    "Supports local farmers and vendors through consistent and organised procurement.",
    "Reduces the need for multiple physical market visits, indirectly cutting down fuel usage.",
    "Packaging practices are periodically reviewed to reduce unnecessary plastic usage.",
];

const faqs = [
    {
        question:
            "Is The Buyzaar Mart a good option for buying fresh fruits and vegetables online in Noida?",
        answer:
            "Yes, it focuses on fresh sourcing, quality checks, and reliable delivery, making it a suitable option for daily grocery needs.",
    },
    {
        question: "Which areas in Noida are covered for online grocery delivery?",
        answer:
            "Coverage includes major sectors such as 18, 62, 50, 76, 137, and nearby areas, along with parts of Greater Noida.",
    },
    {
        question: "Can I choose specific quantities while ordering fruits and vegetables?",
        answer:
            "Yes, customers can select quantities based on pack sizes available for each product listed.",
    },
    {
        question: "What if I receive damaged or poor-quality produce?",
        answer:
            "Replacement or resolution options are available in case of quality issues upon delivery.",
    },
    {
        question: "Is same-day delivery available for grocery orders?",
        answer:
            "Same-day delivery is offered in several serviceable areas, depending on order timing and location.",
    },
    {
        question: "Are seasonal and exotic fruits also available?",
        answer:
            "Yes, the platform stocks both everyday essentials and seasonal or exotic produce based on availability.",
    },
    {
        question: "What payment methods are accepted?",
        answer:
            "Customers can pay through cash on delivery, UPI, or card payments as per convenience.",
    },
    {
        question: "Can I set up recurring or repeat grocery orders?",
        answer:
            "Yes, saved lists and repeat-order features make it easy to reorder regular items quickly.",
    },
];

const BulletList = ({ items }) => (
    <ul className="list-disc space-y-2 pl-6">
        {items.map((item) => (
            <li key={item}>{item}</li>
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
                            Best Online Grocery Store in Noida for Fruits and Vegetables – The
                            Buyzaar Mart
                        </h1>

                        <p>
                            Noida has grown into one of the busiest urban hubs of the
                            National Capital Region, and with this fast-paced lifestyle,
                            residents are increasingly turning to online grocery shopping for
                            their daily needs. Among the many options available, The Buyzaar
                            Mart has emerged as a trusted name for people searching for the
                            best online grocery store in Noida for fruits and vegetables.
                            Below is a detailed, point-wise look at why The Buyzaar Mart
                            stands out, what it offers, and how it is redefining fresh
                            grocery shopping across the city.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Why Buy Fruits and Vegetables Online in Noida
                        </h2>
                        <BulletList items={onlineShoppingBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            What Makes The Buyzaar Mart the Best Online Grocery Store in Noida
                            for Fruits and Vegetables
                        </h2>
                        <BulletList items={buyzaarOnlineFeatures} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Fresh Fruits and Vegetables Range Available
                        </h2>
                        <BulletList items={freshProduceRange} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Quality Assurance and Freshness Guarantee
                        </h2>
                        <BulletList items={qualityStandards} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Fast and Reliable Delivery Across Noida
                        </h2>
                        <BulletList items={deliveryFeatures} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Easy Ordering Process
                        </h2>
                        <BulletList items={orderingFeatures} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Hygiene and Safety Standards
                        </h2>
                        <BulletList items={hygieneStandards} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Wide Coverage Across Noida Localities
                        </h2>

                        <p>
                            The Buyzaar Mart&apos;s online grocery delivery network extends
                            across several key areas of Noida, including Sector 18, Sector 62,
                            Sector 50, Sector 76, Sector 137, Sector 78, Sector 12, Sector 15,
                            Sector 100, Sector 110, Sector 168, and nearby residential
                            pockets, along with parts of Greater Noida and Greater Noida West,
                            making fresh fruits and vegetables accessible to a large section
                            of the city&apos;s population.
                        </p>

                        <BulletList items={coveragePoints} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Why Choose Local Online Grocery Over Big Supermarkets
                        </h2>
                        <BulletList items={localOnlineBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Health Benefits of Choosing Fresh Produce Regularly
                        </h2>
                        <BulletList items={healthBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Benefits for Families and Working Professionals
                        </h2>
                        <BulletList items={householdBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Tips for Choosing Fresh Fruits and Vegetables Online
                        </h2>
                        <BulletList items={shoppingTips} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Customer Support and Satisfaction
                        </h2>
                        <BulletList items={customerSupportFeatures} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Sustainability and Reduced Wastage
                        </h2>
                        <BulletList items={sustainabilityBenefits} />

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
                                Order Groceries with Home Delivery in Noida
                            </h2>

                            <ul className="list-disc space-y-2 pl-6">
                                <li>
                                    Looking for a reliable grocery store in Noida with home delivery? The
                                    Buyzaar Mart offers groceries, fresh produce, dairy, snacks, beverages,
                                    and household essentials.
                                </li>

                                <li>
                                    Place your order online or contact The Buyzaar Mart for convenient
                                    doorstep delivery across serviceable Noida sectors.
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
                    </div>

                    <CityInternalLinks
                        city="noida"
                        currentSlug="/cities/noida/best-online-grocery-store-in-noida-for-fruits-and-vegetables"
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