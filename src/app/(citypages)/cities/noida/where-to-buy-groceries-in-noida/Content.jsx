import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const pageSeo = {
    title: "Where to Buy Groceries in Noida | The Buyzaar Mart",
    description:
        "Find out where to buy groceries in Noida with The Buyzaar Mart, offering fresh produce, daily essentials, and household items across multiple sectors.",
    keywords:
        "where to buy groceries in Noida, grocery store Noida, Noida grocery shopping, The Buyzaar Mart Noida, best grocery store Noida, daily essentials Noida, grocery shopping near me Noida",
    slug: "where-to-buy-groceries-in-noida",
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Buyzaar Mart - Where to Buy Groceries in Noida",
    description:
        "The Buyzaar Mart offers fresh produce, groceries, dairy, packaged foods, household essentials, and daily-use products across multiple sectors of Noida, Greater Noida, and Greater Noida West.",
    url: "https://www.thebuyzaarmart.com/cities/noida/where-to-buy-groceries-in-noida",
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
        name: "Grocery Products at The Buyzaar Mart in Noida",
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
                    "Rice, pulses, flour, oil, sugar, spices, and other daily-use grocery essentials.",
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
                    "Snacks, ready-to-eat items, breakfast essentials, beverages, and bakery products.",
            },
            {
                "@type": "Offer",
                name: "Household and Personal Care Products",
                description:
                    "Cleaning supplies, toiletries, baby care products, stationery, and household utility items.",
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
            name: "Where can I buy groceries in Noida conveniently?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The Buyzaar Mart offers a wide range of groceries across multiple Noida sectors for convenient access.",
            },
        },
        {
            "@type": "Question",
            name: "Does The Buyzaar Mart stock both fresh produce and packaged goods?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, it offers fresh fruits, vegetables, dairy, packaged foods, and household essentials together.",
            },
        },
        {
            "@type": "Question",
            name: "Is The Buyzaar Mart accessible across different Noida sectors?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, stores are located across several sectors, including Greater Noida and Greater Noida West.",
            },
        },
        {
            "@type": "Question",
            name: "Are both branded and local grocery products available?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, the store stocks a mix of branded and local products to suit different preferences.",
            },
        },
        {
            "@type": "Question",
            name: "Does the store maintain quality checks for perishable items?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, fresh produce and dairy items undergo regular quality checks before being stocked.",
            },
        },
        {
            "@type": "Question",
            name: "Is the store suitable for both daily and bulk grocery shopping?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, it supports quick daily purchases as well as larger weekly or bulk shopping needs.",
            },
        },
        {
            "@type": "Question",
            name: "Are digital payment options available for grocery purchases?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, customers can pay through UPI, card, or cash as per convenience.",
            },
        },
        {
            "@type": "Question",
            name: "Does the store offer support during festive grocery shopping?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, special stock and combo packs are made available during festivals and peak seasons.",
            },
        },
        {
            "@type": "Question",
            name: "Does the store cater to bulk or large household shopping needs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, bulk pack sizes are available across most staple and daily-use product categories.",
            },
        },
    ],
};

const reasonsForChoosing = [
    "Directly affects the quality and freshness of food consumed by the household daily.",
    "Impacts overall convenience, especially for working professionals with limited free time.",
    "Influences monthly budgeting through consistent pricing and product availability.",
    "Determines how quickly emergency or last-minute grocery needs can be fulfilled.",
    "Affects the variety of products accessible, from staples to specialty items.",
    "Shapes the overall shopping experience through store layout, service, and hygiene.",
    "Plays a role in building long-term trust between a household and a local store.",
    "Helps families maintain a consistent routine around meal planning and cooking.",
    "Reduces the mental load of deciding where to shop for different product categories.",
    "Influences how well a household can plan ahead for weekly and monthly needs.",
];

const groceryOptions = [
    "Traditional local markets and vendor stalls spread across various sectors.",
    "Small neighbourhood kirana stores offering limited but familiar product ranges.",
    "Large-format retail chains located mostly in commercial and mall areas.",
    "Online grocery delivery platforms offering doorstep convenience for busy households.",
    "Organised neighbourhood supermarkets like The Buyzaar Mart combining variety with accessibility.",
    "Wholesale markets suited for bulk buyers rather than regular household shopping.",
    "Specialty stores focused on specific categories such as dairy, bakery, or organic produce.",
    "Weekly local haats offering fresh but inconsistent seasonal produce.",
];

const buyzaarBenefits = [
    "Combines the convenience of a nearby store with the variety of a full supermarket.",
    "Offers a wide product range under one roof, reducing the need for multiple stops.",
    "Maintains consistent stock availability across daily essentials and specialty items.",
    "Focuses on both quality and accessibility, keeping local household needs in mind.",
    "Provides a structured, organised shopping environment compared to scattered local markets.",
    "Built specifically to serve the day-to-day grocery habits of Noida residents.",
    "Balances affordability with product quality across most categories.",
    "Designed to reduce the time and effort typically spent on multi-store grocery runs.",
    "Continuously adapts inventory based on seasonal and local demand patterns.",
    "Aims to be the single, dependable destination households return to repeatedly.",
];

const productRange = [
    "Fresh fruits and vegetables sourced regularly to maintain quality and variety.",
    "Staple groceries including rice, pulses, flour, oil, sugar, and spices.",
    "Dairy products such as milk, curd, paneer, butter, and cheese.",
    "Packaged foods including snacks, ready-to-eat items, and breakfast essentials.",
    "Personal care and household items such as cleaning supplies and toiletries.",
    "Beverages including tea, coffee, juices, and soft drinks.",
    "Bakery items such as bread, biscuits, and other baked goods.",
    "Baby care products and essentials for households with young children.",
    "Seasonal and festive items introduced during major celebrations throughout the year.",
    "Dry fruits, nuts, and other pantry staples used regularly in Indian households.",
    "Frozen and semi-prepared items for households looking to save preparation time.",
    "Basic stationery and utility items often picked up alongside regular groceries.",
];

const convenienceFactors = [
    "Store locations spread across multiple sectors, reducing travel distance for most residents.",
    "Organised categories that make locating specific products faster and simpler.",
    "Availability of both small and bulk pack sizes to suit different household needs.",
    "Multiple payment options including cash, UPI, and card for smoother checkout.",
    "Consistent operating hours that align with typical daily routines of residents.",
    "Easy accessibility for walk-in shoppers as well as those planning quick top-up visits.",
    "Reduced need to visit multiple stores for different categories of household needs.",
    "Simplifies weekly planning by keeping most essentials available at a single location.",
];

const qualityAssurance = [
    "Fresh produce checked for quality before being placed on shelves.",
    "Packaged goods verified for proper labelling, expiry dates, and packaging condition.",
    "Dairy products sourced from trusted suppliers to maintain freshness standards.",
    "Regular vendor audits conducted to ensure consistency in product quality.",
    "Store hygiene maintained as a standard practice across all sections.",
    "Customer feedback actively used to refine product selection and quality control.",
    "Shelf rotation practices followed to ensure older stock is cleared before newer stock.",
    "Storage conditions monitored closely for temperature-sensitive product categories.",
];

const accessibilityPoints = [
    "Store placement decisions based on residential density and local accessibility.",
    "Continued expansion into new sectors based on demand and footfall trends.",
    "Locations chosen near residential societies and frequently used commute routes.",
    "Coverage periodically reviewed to include newly developed housing areas.",
    "Proximity to main roads and transit points considered while selecting store sites.",
    "Store planning also accounts for nearby schools, offices, and residential complexes.",
];

const comparisonPoints = [
    "Local markets often offer freshness but lack consistency and organised variety.",
    "Small kirana stores are convenient but usually have limited product range.",
    "Large retail chains offer variety but may involve longer travel distance.",
    "Online platforms offer convenience but lack the ability to physically check produce.",
    "Neighbourhood supermarkets like The Buyzaar Mart balance variety, freshness, and accessibility together.",
    "Choosing the right option often depends on household priorities such as time, budget, and variety.",
    "A combination of options is common, with supermarkets serving as the primary regular choice.",
    "Consistency in stock and pricing often makes organised supermarkets more dependable long-term.",
];

const affordabilityBenefits = [
    "Focuses on offering a balance between quality and everyday affordability.",
    "Provides both economical and premium options across major product categories.",
    "Introduces combo packs and bundled offers for frequently purchased items.",
    "Helps reduce overall shopping time and associated travel costs.",
    "Supports organised, planned shopping that avoids unnecessary or impulsive purchases.",
    "Assists households in managing recurring monthly grocery expenses more predictably.",
    "Helps budget-conscious families compare options easily within the same store.",
];

const shoppingExperience = [
    "Well-organised aisles that make navigation simple across all product categories.",
    "Clear signage that helps customers locate items quickly, even during busy hours.",
    "Billing counters designed to minimise waiting time during peak shopping periods.",
    "Store staff available to assist with product queries and general shopping guidance.",
    "Clean, well-maintained environment that enhances overall shopping comfort.",
    "Regular restocking practices that keep shelves organised and adequately filled.",
    "Comfortable spacing between aisles suited for family and group shopping visits.",
];

const householdBenefits = [
    "Families benefit from access to a wide range of daily and weekly essentials.",
    "Working professionals save time through quick, organised shopping trips.",
    "Students and bachelors find convenient access to smaller pack sizes and essentials.",
    "Elderly residents benefit from nearby accessibility and simplified store navigation.",
    "Large households benefit from bulk pack availability across staple categories.",
    "New residents in a locality can quickly establish a dependable shopping routine.",
    "Dual-income households benefit from faster, more predictable shopping trips.",
];

const seasonalBenefits = [
    "Special product ranges introduced ahead of major festivals and celebrations.",
    "Increased stock levels maintained during high-demand festive periods.",
    "Seasonal fruits and vegetables prioritised to match seasonal cooking needs.",
    "Festive combo packs designed to simplify bulk festive shopping.",
    "Store planning adjusted in advance to avoid shortages during peak seasons.",
    "Seasonal transitions reflected in stock changes across fruits, vegetables, and staples.",
];

const technologyFeatures = [
    "Point-of-sale systems used to speed up billing and reduce customer wait times.",
    "Inventory tracking helps maintain accurate stock visibility across categories.",
    "Digital payment options available alongside cash for faster, smoother checkout.",
    "Stock replenishment processes structured to minimise shelf gaps during the day.",
    "Store operations organised to reduce delays during high-footfall hours.",
];

const selectionTips = [
    "Evaluate product variety to ensure most household needs are covered in one place.",
    "Compare freshness and quality of perishable items before settling on a regular store.",
    "Consider proximity and travel convenience alongside product range and pricing.",
    "Check consistency of stock availability across essential daily-use categories.",
    "Observe store hygiene and cleanliness as an indicator of overall quality standards.",
    "Look for stores offering both branded and local product options.",
    "Prioritise stores that offer efficient billing and overall shopping convenience.",
    "Ask around locally to understand which stores maintain consistent service quality.",
];

const organisedSupermarketBenefits = [
    "Provide a structured alternative to scattered local markets and small vendors.",
    "Support consistent access to both fresh and packaged grocery items.",
    "Reduce the need for multiple stops across different types of stores.",
    "Help urban households maintain organised, planned grocery routines.",
    "Serve as a reliable option during emergencies requiring quick access to essentials.",
    "Contribute to better time management for busy urban lifestyles.",
    "Act as a stable, predictable option amid the city&apos;s fast-changing retail landscape.",
];

const customerSupportFeatures = [
    "Store staff trained to assist with product-related queries and shopping guidance.",
    "Feedback channels available for addressing customer concerns and suggestions.",
    "Focus on maintaining consistent service quality across all store locations.",
    "Quick resolution processes in place for billing or product-related issues.",
    "Ongoing staff training to ensure smooth and efficient customer interactions.",
    "Emphasis on building long-term trust through consistent, dependable service.",
    "Regular monitoring of customer satisfaction across all operating locations.",
];

const faqs = [
    {
        question: "Where can I buy groceries in Noida conveniently?",
        answer:
            "The Buyzaar Mart offers a wide range of groceries across multiple Noida sectors for convenient access.",
    },
    {
        question: "Does The Buyzaar Mart stock both fresh produce and packaged goods?",
        answer:
            "Yes, it offers fresh fruits, vegetables, dairy, packaged foods, and household essentials together.",
    },
    {
        question: "Is The Buyzaar Mart accessible across different Noida sectors?",
        answer:
            "Yes, stores are located across several sectors, including Greater Noida and Greater Noida West.",
    },
    {
        question: "Are both branded and local grocery products available?",
        answer:
            "Yes, the store stocks a mix of branded and local products to suit different preferences.",
    },
    {
        question: "Does the store maintain quality checks for perishable items?",
        answer:
            "Yes, fresh produce and dairy items undergo regular quality checks before being stocked.",
    },
    {
        question: "Is the store suitable for both daily and bulk grocery shopping?",
        answer:
            "Yes, it supports quick daily purchases as well as larger weekly or bulk shopping needs.",
    },
    {
        question: "Are digital payment options available for grocery purchases?",
        answer:
            "Yes, customers can pay through UPI, card, or cash as per convenience.",
    },
    {
        question: "Does the store offer support during festive grocery shopping?",
        answer:
            "Yes, special stock and combo packs are made available during festivals and peak seasons.",
    },
    {
        question: "Does the store cater to bulk or large household shopping needs?",
        answer:
            "Yes, bulk pack sizes are available across most staple and daily-use product categories.",
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
                            Where to Buy Groceries in Noida – The Buyzaar Mart
                        </h1>

                        <p>
                            Finding a dependable place to buy groceries is one of the most
                            common concerns for residents of Noida, given the city&apos;s
                            fast expansion and diverse population. Whether it is daily
                            essentials, fresh produce, or household items, choosing the right
                            grocery destination matters for convenience, quality, and
                            consistency. The Buyzaar Mart has positioned itself as a reliable
                            answer to the question of where to buy groceries in Noida. Below
                            is a detailed, point-wise guide covering everything residents
                            need to know.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Why Choosing the Right Grocery Store Matters
                        </h2>
                        <BulletList items={reasonsForChoosing} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Options Available for Buying Groceries in Noida
                        </h2>
                        <BulletList items={groceryOptions} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Why The Buyzaar Mart Is a Preferred Choice for Groceries in Noida
                        </h2>
                        <BulletList items={buyzaarBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Product Range Available at The Buyzaar Mart
                        </h2>
                        <BulletList items={productRange} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Convenience Factors for Grocery Shoppers
                        </h2>
                        <BulletList items={convenienceFactors} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Quality Assurance Across Grocery Categories
                        </h2>
                        <BulletList items={qualityAssurance} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Store Accessibility Across Noida Sectors
                        </h2>

                        <p>
                            The Buyzaar Mart operates across several key locations in Noida,
                            including Sector 18, Sector 62, Sector 50, Sector 76, Sector 137,
                            Sector 78, Sector 12, Sector 15, Sector 100, Sector 110, and
                            Sector 168, along with select areas of Greater Noida and Greater
                            Noida West, ensuring residents across the city have a grocery
                            destination within reasonable reach.
                        </p>

                        <BulletList items={accessibilityPoints} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Comparing Local Markets, Supermarkets, and Online Grocery Options
                        </h2>
                        <BulletList items={comparisonPoints} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Affordability and Everyday Value
                        </h2>
                        <BulletList items={affordabilityBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Shopping Experience and Store Environment
                        </h2>
                        <BulletList items={shoppingExperience} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Benefits for Different Types of Households
                        </h2>
                        <BulletList items={householdBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Seasonal and Festive Grocery Planning
                        </h2>
                        <BulletList items={seasonalBenefits} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Role of Technology in Everyday Grocery Shopping
                        </h2>
                        <BulletList items={technologyFeatures} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Tips for Choosing Where to Buy Groceries in Noida
                        </h2>
                        <BulletList items={selectionTips} />

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Role of Organised Supermarkets in Urban Grocery Shopping
                        </h2>
                        <BulletList items={organisedSupermarketBenefits} />

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
                                Find Your Grocery Destination in Noida
                            </h2>

                            <ul className="list-disc space-y-2 pl-6">
                                <li>
                                    Finding a reliable place to buy groceries in Noida makes daily shopping
                                    more convenient, organised, and stress-free.
                                </li>

                                <li>
                                    Choose The Buyzaar Mart for fresh produce, groceries, dairy, household
                                    essentials, and daily-use products in one convenient destination.
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
                        currentSlug="/cities/noida/where-to-buy-groceries-in-noida"
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