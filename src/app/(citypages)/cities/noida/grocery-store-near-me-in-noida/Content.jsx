import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const pageSeo = {
    title: "Grocery Store Near Me in Noida | The Buyzaar Mart",
    description:
        "Looking for a grocery store near you in Noida? The Buyzaar Mart offers fresh produce, daily essentials, and household items across multiple sectors.",
    keywords:
        "grocery store near me in Noida, Noida grocery store, grocery shopping near me, The Buyzaar Mart Noida, best grocery store Noida, local grocery store Noida, daily essentials Noida",
    slug: "grocery-store-near-me-in-noida",
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Buyzaar Mart - Grocery Store Near Me in Noida",
    description:
        "The Buyzaar Mart offers fresh produce, groceries, dairy, packaged foods, and household essentials across multiple sectors of Noida, Greater Noida, and Greater Noida West.",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-store-near-me-in-noida",
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
        name: "Grocery and Daily Essentials at The Buyzaar Mart",
        itemListElement: [
            {
                "@type": "Offer",
                name: "Fresh Fruits and Vegetables",
                description:
                    "Fresh produce sourced and restocked regularly for consistent quality.",
            },
            {
                "@type": "Offer",
                name: "Staple Groceries",
                description:
                    "Rice, pulses, flour, oil, sugar, spices, and other everyday grocery essentials.",
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
                    "Snacks, ready-to-eat meals, breakfast items, bakery products, and other packaged foods.",
            },
            {
                "@type": "Offer",
                name: "Household Essentials",
                description:
                    "Personal care products, cleaning supplies, baby care products, and household utility items.",
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
            name: "Is there a Buyzaar Mart grocery store near me in Noida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The Buyzaar Mart operates across multiple Noida sectors, making it accessible to most residents nearby.",
            },
        },
        {
            "@type": "Question",
            name: "What products are available at a nearby Buyzaar Mart store?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It offers fresh produce, groceries, dairy, packaged foods, and household essentials together.",
            },
        },
        {
            "@type": "Question",
            name: "Is fresh produce restocked regularly at the store?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, fruits and vegetables are sourced and restocked regularly to maintain freshness.",
            },
        },
        {
            "@type": "Question",
            name: "Are both branded and local products available nearby?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, stores stock a mix of branded and local products to suit different preferences.",
            },
        },
        {
            "@type": "Question",
            name: "Is the store suitable for quick, everyday shopping needs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, it is designed for both quick daily purchases and larger weekly shopping trips.",
            },
        },
        {
            "@type": "Question",
            name: "Does the store maintain hygiene and cleanliness standards?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, cleanliness and hygiene are maintained as a standard part of store operations.",
            },
        },
        {
            "@type": "Question",
            name: "Are new grocery store locations being added across Noida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, expansion into new sectors continues based on demand and accessibility needs.",
            },
        },
        {
            "@type": "Question",
            name: "Does the store support festive or bulk grocery shopping?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, special stock and combo packs are made available during festivals and peak seasons.",
            },
        },
        {
            "@type": "Question",
            name: "Are digital payment options accepted at nearby stores?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, customers can pay through UPI, card, or cash at checkout.",
            },
        },
    ],
};

const nearMeBenefits = [
    "Saves valuable time that would otherwise go into travelling to distant markets.",
    "Reduces fuel costs and travel-related inconvenience for regular shopping trips.",
    "Makes it easier to handle last-minute or emergency grocery requirements quickly.",
    "Supports frequent, smaller shopping trips instead of infrequent, large bulk purchases.",
    "Helps working professionals fit grocery shopping into short breaks or commute routes.",
    "Encourages consistent shopping habits since the store becomes part of a daily routine.",
    "Reduces reliance on planning ahead for every single grocery requirement.",
    "Makes it convenient for elderly family members to shop independently and comfortably.",
    "Supports spontaneous cooking or hosting decisions without major logistical planning.",
    "Builds long-term familiarity with store layout, staff, and product placement.",
    "Helps residents save time during weekdays when schedules are already tightly packed.",
];

const storeBenefits = [
    "Multiple store locations spread across Noida to minimise travel distance for residents.",
    "Offers a comprehensive product range, reducing the need to visit several different stores.",
    "Maintains consistent stock levels across daily essentials and specialty categories.",
    "Designed with local household needs and shopping habits specifically in mind.",
    "Combines the accessibility of a small local shop with the variety of a full supermarket.",
    "Focuses on quality sourcing without compromising on convenience or accessibility.",
    "Regularly updates inventory to reflect seasonal availability and local demand patterns.",
    "Built to function as a dependable daily-needs destination for repeat shoppers.",
    "Prioritises predictable, consistent service that customers can rely on every visit.",
    "Structured to serve a wide demographic, from students to large families.",
    "Aims to be the first choice residents think of when planning nearby grocery shopping.",
];

const productCategories = [
    "Fresh fruits and vegetables sourced and restocked regularly for consistent quality.",
    "Staple groceries including rice, pulses, flour, oil, sugar, and everyday spices.",
    "Dairy items such as milk, curd, paneer, butter, and cheese from trusted suppliers.",
    "Packaged and processed foods including snacks, ready-to-eat meals, and breakfast items.",
    "Personal care and household essentials such as toiletries and cleaning supplies.",
    "Beverages including tea, coffee, juices, and soft drinks for daily consumption.",
    "Bakery products such as bread, biscuits, and other baked essentials.",
    "Baby care items and essentials for households with young children.",
    "Seasonal and festive products introduced during major celebrations and occasions.",
    "Dry fruits, nuts, and pantry staples commonly used in Indian households.",
    "Frozen and semi-prepared food options for time-conscious households.",
    "Basic stationery and household utility items often bought alongside groceries.",
];

const nearbyShoppingBenefits = [
    "Reduces the overall time commitment required for regular household shopping.",
    "Makes it easier to shop more frequently in smaller, manageable quantities.",
    "Helps avoid the inconvenience of running out of essential items unexpectedly.",
    "Supports quick decision-making when planning daily or weekly meals.",
    "Encourages walk-in visits that are often faster than planning an online order.",
    "Builds a sense of routine and familiarity that simplifies future shopping trips.",
    "Minimises disruption to daily schedules, especially for working individuals.",
    "Reduces dependency on transport for basic, recurring household needs.",
    "Makes it simpler to manage unplanned grocery needs during the week.",
];

const accessibilityPoints = [
    "Store locations selected based on residential density and local accessibility needs.",
    "Ongoing expansion into new sectors based on demand and footfall patterns.",
    "Stores positioned near residential societies and frequently used commute routes.",
    "Coverage periodically reviewed to include newer housing developments across the city.",
    "Accessibility planning also considers proximity to schools, offices, and transit points.",
    "New sector additions evaluated regularly to keep pace with Noida&apos;s expansion.",
];

const qualityStandards = [
    "Fresh produce checked for quality before being placed on store shelves.",
    "Packaged goods verified for correct labelling, expiry dates, and packaging integrity.",
    "Dairy products sourced from trusted, consistent suppliers to maintain freshness.",
    "Regular vendor audits help maintain consistency in product quality over time.",
    "Store hygiene maintained as a standard operating practice across all sections.",
    "Customer feedback used continuously to refine product quality and selection.",
    "Shelf rotation practices followed to ensure older stock is sold before newer stock.",
    "Temperature-sensitive items stored under appropriate conditions to preserve freshness.",
    "Quality checks repeated at multiple stages before produce reaches the shelf.",
];

const convenienceFeatures = [
    "Organised product categories that make locating specific items quick and simple.",
    "Availability of both small and bulk pack sizes to suit different household sizes.",
    "Multiple payment options including cash, UPI, and card for smoother checkout.",
    "Consistent store hours aligned with typical daily routines of local residents.",
    "Easy accessibility for both planned shopping trips and quick top-up visits.",
    "Reduced need to visit multiple stores for different categories of household needs.",
    "Efficient billing counters designed to minimise waiting time during busy hours.",
    "Simple in-store navigation that suits both quick visits and full shopping trips.",
];

const affordabilityBenefits = [
    "Focuses on balancing quality with everyday affordability across product categories.",
    "Offers both economical and premium options to suit different household budgets.",
    "Introduces combo packs and bundled offers for frequently purchased essentials.",
    "Helps reduce overall shopping-related time and travel expenses.",
    "Supports organised, planned shopping that minimises unnecessary purchases.",
    "Assists households in managing recurring monthly grocery expenses more predictably.",
    "Helps budget-conscious shoppers compare options within the same visit.",
];

const shoppingExperience = [
    "Well-organised aisles that make navigation simple across all product categories.",
    "Clear signage that helps customers locate items quickly, even during busy hours.",
    "Store staff available to assist with product location and general shopping queries.",
    "Clean, well-maintained environment that enhances overall shopping comfort.",
    "Adequate spacing between aisles for a comfortable family shopping experience.",
    "Regular restocking practices that keep shelves organised and adequately filled.",
    "Simple, efficient checkout process designed to avoid unnecessary delays.",
    "Store ambience designed to make even quick visits feel unhurried and easy.",
];

const nearbyStoreAdvantages = [
    "Significantly reduces travel time compared to larger stores located farther away.",
    "Makes frequent, smaller purchases more practical than infrequent bulk trips.",
    "Supports faster response to unplanned or emergency grocery requirements.",
    "Builds stronger familiarity with store layout, staff, and product placement.",
    "Encourages more sustainable shopping habits by reducing unnecessary travel.",
    "Offers a more predictable, low-effort shopping routine for busy households.",
    "Helps maintain consistency in weekly meal planning without logistical stress.",
    "Reduces the overall mental effort involved in deciding where to shop.",
];

const householdBenefits = [
    "Families benefit from access to a wide range of daily and weekly essentials nearby.",
    "Working professionals save time through quick, convenient shopping trips.",
    "Students and bachelors find it easy to access smaller pack sizes and essentials.",
    "Elderly residents benefit from proximity and simplified store navigation.",
    "Large households benefit from bulk pack availability across staple categories.",
    "New residents can quickly establish a dependable, nearby shopping routine.",
    "Dual-income households benefit from faster, more predictable shopping visits.",
    "Households with children benefit from easy access to baby care essentials nearby.",
];

const seasonalBenefits = [
    "Special product ranges introduced ahead of major festivals and celebrations.",
    "Increased stock levels maintained during high-demand festive periods.",
    "Seasonal fruits and vegetables prioritised to match seasonal cooking needs.",
    "Festive combo packs designed to simplify bulk festive shopping locally.",
    "Store planning adjusted in advance to avoid shortages during peak seasons.",
    "Seasonal transitions reflected clearly across fruit, vegetable, and staple sections.",
];

const technologyFeatures = [
    "Point-of-sale systems used to speed up billing and reduce customer wait times.",
    "Inventory tracking helps maintain accurate stock visibility across categories.",
    "Digital payment options available alongside cash for faster checkout.",
    "Stock replenishment processes structured to minimise shelf gaps during the day.",
    "Store operations organised to reduce delays during high-footfall hours.",
];

const urbanRoutineBenefits = [
    "Acts as a dependable, recurring stop within a household&apos;s weekly routine.",
    "Reduces reliance on scattered vendors for different categories of items.",
    "Supports organised, planned shopping rather than reactive, last-minute trips.",
    "Plays a key role in maintaining consistent access to fresh and packaged items.",
    "Helps busy urban households manage time more effectively across daily tasks.",
    "Serves as a reliable option during emergencies requiring quick grocery access.",
    "Functions as a familiar, trusted stop within a resident&apos;s daily or weekly routine.",
];

const selectionTips = [
    "Check product variety to ensure most regular household needs are covered.",
    "Visit during non-peak hours for a faster, more comfortable shopping experience.",
    "Compare freshness and quality of perishable items before making it a regular choice.",
    "Look for consistent stock availability across essential daily-use categories.",
    "Prefer stores with organised layouts that make navigation simple and quick.",
    "Consider proximity and accessibility alongside overall product range and pricing.",
    "Observe store hygiene and cleanliness as an indicator of overall quality standards.",
    "Evaluate billing speed and overall checkout convenience during a trial visit.",
    "Ask neighbours or local residents about their regular shopping preferences nearby.",
];

const customerSupportFeatures = [
    "Store staff trained to assist customers with product queries and shopping guidance.",
    "Feedback channels available for addressing customer concerns and suggestions.",
    "Focus on maintaining consistent service quality across all nearby store locations.",
    "Quick resolution processes in place for billing or product-related issues.",
    "Ongoing staff training to ensure smooth, efficient customer interactions.",
    "Strong emphasis on building long-term trust through dependable, repeat service.",
    "Regular monitoring of customer satisfaction across all store locations.",
];

const faqs = [
    {
        question: "Is there a Buyzaar Mart grocery store near me in Noida?",
        answer:
            "The Buyzaar Mart operates across multiple Noida sectors, making it accessible to most residents nearby.",
    },
    {
        question: "What products are available at a nearby Buyzaar Mart store?",
        answer:
            "It offers fresh produce, groceries, dairy, packaged foods, and household essentials together.",
    },
    {
        question: "Is fresh produce restocked regularly at the store?",
        answer:
            "Yes, fruits and vegetables are sourced and restocked regularly to maintain freshness.",
    },
    {
        question: "Are both branded and local products available nearby?",
        answer:
            "Yes, stores stock a mix of branded and local products to suit different preferences.",
    },
    {
        question: "Is the store suitable for quick, everyday shopping needs?",
        answer:
            "Yes, it is designed for both quick daily purchases and larger weekly shopping trips.",
    },
    {
        question: "Does the store maintain hygiene and cleanliness standards?",
        answer:
            "Yes, cleanliness and hygiene are maintained as a standard part of store operations.",
    },
    {
        question: "Are new grocery store locations being added across Noida?",
        answer:
            "Yes, expansion into new sectors continues based on demand and accessibility needs.",
    },
    {
        question: "Does the store support festive or bulk grocery shopping?",
        answer:
            "Yes, special stock and combo packs are made available during festivals and peak seasons.",
    },
    {
        question: "Are digital payment options accepted at nearby stores?",
        answer:
            "Yes, customers can pay through UPI, card, or cash at checkout.",
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
                            Grocery Store Near Me in Noida – The Buyzaar Mart
                        </h1>

                        <p>
                            When residents search for a &quot;grocery store near me in
                            Noida,&quot; they are looking for a dependable, easily accessible
                            place that covers daily essentials without long travel or
                            unnecessary hassle. The Buyzaar Mart has built its presence across
                            Noida with exactly this need in mind, offering a well-stocked,
                            conveniently located grocery destination for households across
                            the city. Below is a detailed, point-wise guide covering
                            everything worth knowing about finding and choosing the right
                            grocery store nearby.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Why &quot;Near Me&quot; Matters When Choosing a Grocery Store
                        </h2>
                        <BulletList items={nearMeBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Why The Buyzaar Mart Is a Strong Choice for a Nearby Grocery
                            Store
                        </h2>
                        <BulletList items={storeBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Product Categories Available Nearby
                        </h2>
                        <BulletList items={productCategories} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Benefits of Shopping at a Nearby Grocery Store
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
                            Noida West, ensuring that a grocery store remains within
                            reasonable reach for most residents.
                        </p>

                        <BulletList items={accessibilityPoints} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Quality and Freshness Assurance
                        </h2>
                        <BulletList items={qualityStandards} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Convenience Features That Matter to Local Shoppers
                        </h2>
                        <BulletList items={convenienceFeatures} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Affordability and Everyday Value
                        </h2>
                        <BulletList items={affordabilityBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Shopping Experience and Store Environment
                        </h2>
                        <BulletList items={shoppingExperience} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Why a Nearby Store Often Beats Distant Alternatives
                        </h2>
                        <BulletList items={nearbyStoreAdvantages} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Benefits for Different Types of Households
                        </h2>
                        <BulletList items={householdBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Seasonal and Festive Shopping Nearby
                        </h2>
                        <BulletList items={seasonalBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Technology and Everyday Store Efficiency
                        </h2>
                        <BulletList items={technologyFeatures} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Role of a Grocery Store in Daily Urban Routine
                        </h2>
                        <BulletList items={urbanRoutineBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Tips for Identifying the Right Grocery Store Nearby
                        </h2>
                        <BulletList items={selectionTips} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Customer Support and Long-Term Reliability
                        </h2>
                        <BulletList items={customerSupportFeatures} />

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
                                Find Your Nearby Grocery Store in Noida
                            </h2>

                            <ul className="list-disc space-y-2 pl-6">
                                <li>
                                    Looking for a grocery store near you in Noida? The Buyzaar Mart offers
                                    fresh produce, groceries, dairy, packaged foods, and household essentials
                                    across multiple sectors.
                                </li>

                                <li>
                                    Visit a nearby The Buyzaar Mart store for convenient daily shopping,
                                    weekly grocery purchases, festive products, and essential household
                                    items.
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
                        currentSlug="/cities/noida/grocery-store-near-me-in-noida"
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