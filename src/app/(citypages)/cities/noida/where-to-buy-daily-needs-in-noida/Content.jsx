import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GroceryStore",
    name: "The Buyzaar Mart",
    description:
        "The Buyzaar Mart is a trusted daily needs and grocery store in Noida offering fresh fruits and vegetables, dairy products, groceries, household essentials, personal care items, and packaged foods under one roof.",
    url: "https://www.thebuyzaarmart.com/cities/noida/where-to-buy-daily-needs-in-noida",
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
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Daily Needs and Grocery Products in Noida",
        itemListElement: [
            {
                "@type": "Offer",
                name: "Fresh Fruits and Vegetables",
                description:
                    "Fresh fruits and vegetables sourced to maintain quality and freshness for Noida households.",
            },
            {
                "@type": "Offer",
                name: "Dairy Products",
                description:
                    "Milk, curd, paneer, butter, eggs, and other everyday dairy products.",
            },
            {
                "@type": "Offer",
                name: "Household Essentials",
                description:
                    "Cleaning supplies, detergents, personal care products, packaged foods, and everyday household items.",
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
            name: "What is the best place to buy daily needs in Noida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Organized grocery marts like The Buyzaar Mart are a reliable choice, offering fresh produce, groceries, and household essentials under one roof.",
            },
        },
        {
            "@type": "Question",
            name: "Which sectors in Noida have good access to daily needs stores?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sectors like 18, 44, 62, and Noida Extension have a strong mix of organized grocery stores and local markets.",
            },
        },
        {
            "@type": "Question",
            name: "Is it better to shop from a supermarket or a local kirana store?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Supermarkets usually offer more variety, better hygiene, and transparent pricing, while kirana stores are handy for quick, small purchases.",
            },
        },
        {
            "@type": "Question",
            name: "Are quick-commerce apps a good option for daily groceries in Noida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "They work well for urgent, small orders but may not be the most cost-effective choice for regular bulk shopping.",
            },
        },
        {
            "@type": "Question",
            name: "What products are usually available at a daily needs store?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Fresh fruits and vegetables, dairy, groceries, packaged foods, personal care items, and household essentials are typically available.",
            },
        },
        {
            "@type": "Question",
            name: "Does The Buyzaar Mart deliver fresh produce daily?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, The Buyzaar Mart focuses on maintaining fresh stock through direct sourcing links to ensure quality for customers.",
            },
        },
        {
            "@type": "Question",
            name: "How can I save money on daily needs shopping in Noida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Planning a shopping list, buying perishables in smaller batches, and comparing prices across nearby stores can help reduce costs.",
            },
        },
        {
            "@type": "Question",
            name: "Should I do weekly or monthly grocery shopping in Noida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A mix works best — buy staples like grains and oils monthly, and pick up fresh produce and dairy on a weekly basis for better quality.",
            },
        },
        {
            "@type": "Question",
            name: "Are organized grocery marts more expensive than local kirana stores?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Not necessarily. Organized marts like The Buyzaar Mart often run combo offers and maintain transparent pricing, which can make them just as affordable, if not more, than local stores.",
            },
        },
    ],
};

const Content = () => {
    return (
        <div className="min-h-screen bg-white pt-0">
            <title>Where to Buy Daily Needs in Noida | The Buyzaar Mart</title>
            <meta
                name="description"
                content="Looking for where to buy daily needs in Noida? Discover the best grocery marts, local markets & online options for fresh, affordable essentials with The Buyzaar Mart."
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
                            Where to Buy Daily Needs in Noida: Complete Shopping Guide 2026
                        </h1>

                        <p>
                            Noida has grown into one of the busiest residential and
                            commercial hubs of the NCR, and along with that growth comes a
                            simple everyday question for thousands of families: where to buy
                            daily needs in Noida without wasting time, money, or patience.
                            Whether you live in a high-rise society in Sector 62, a family
                            neighborhood in Sector 44, or a fast-developing pocket of Noida
                            Extension, having a dependable place for groceries and household
                            essentials makes daily life significantly easier. This guide
                            breaks down everything you need to know about daily needs
                            shopping in Noida — the options available, what to look for, and
                            why The Buyzaar Mart has become a preferred choice for residents
                            across the city.
                        </p>

                        <p>
                            As the city continues to expand with new residential towers,
                            gated societies, and commercial hubs, the everyday task of
                            restocking the kitchen and home has become more of a planned
                            activity than a casual errand. This makes it worth understanding
                            the full landscape of options before settling into a fixed
                            shopping routine.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Why Daily Needs Shopping Matters So Much in Noida
                        </h2>

                        <p>
                            Noida&apos;s population is a mix of working professionals, IT
                            employees, families, and students, all of whom need quick and
                            reliable access to groceries, fresh produce, and household items.
                        </p>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Long commutes and busy work schedules leave little time for
                                traditional market-hopping, so convenience has become a top
                                priority.
                            </li>
                            <li>
                                Rising awareness about food quality and freshness means people
                                are more selective about where they shop.
                            </li>
                            <li>
                                With so many housing societies and sectors, not every area has
                                equal access to well-stocked, hygienic stores — making the
                                choice of shop genuinely important.
                            </li>
                            <li>
                                Price sensitivity is high, so value-for-money matters as much
                                as convenience.
                            </li>
                            <li>
                                Nuclear family setups, common in Noida&apos;s high-rise
                                culture, mean less time is available for elaborate meal
                                planning or multiple shopping trips in a week.
                            </li>
                            <li>
                                The rise of work-from-home and hybrid schedules has also
                                changed shopping patterns, with many residents now preferring
                                stores within walking distance of home rather than relying
                                solely on weekend drives to distant markets.
                            </li>
                            <li>
                                As more IT parks and corporate offices come up along the
                                Noida-Greater Noida Expressway, the demand for stores near
                                office clusters has grown too, since many employees prefer to
                                shop on their way back from work.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            What Counts as &quot;Daily Needs&quot;
                        </h2>

                        <p>
                            Before choosing where to shop, it helps to know what actually
                            falls under daily essentials:
                        </p>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>Fresh fruits and vegetables.</li>
                            <li>Dairy products such as milk, curd, paneer, and butter.</li>
                            <li>
                                Grains, pulses, and cooking staples like atta, rice, and oil.
                            </li>
                            <li>Packaged foods, snacks, and beverages.</li>
                            <li>Spices and condiments.</li>
                            <li>
                                Personal care items including soaps, shampoos, and oral care.
                            </li>
                            <li>Household cleaning supplies and detergents.</li>
                            <li>Baby care and hygiene products.</li>
                            <li>Stationery and small utility items.</li>
                            <li>
                                Quick-need items like batteries, light bulbs, and basic
                                kitchenware.
                            </li>
                            <li>
                                Ready-to-cook and instant food items for busy weekdays.
                            </li>
                            <li>Bakery items such as bread, buns, and eggs.</li>
                            <li>Frozen foods and ice creams.</li>
                            <li>
                                Pet food and pet care basics for households with pets.
                            </li>
                            <li>
                                Festive and seasonal items during occasions like Diwali, Holi,
                                or Raksha Bandhan.
                            </li>
                        </ul>

                        <p>
                            A good daily needs store should ideally offer most of these under
                            one roof, saving multiple trips to different shops. The wider the
                            assortment, the fewer separate errands a household needs to plan
                            in a week, which is exactly why one-stop grocery marts have grown
                            so popular across Noida&apos;s residential sectors.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Popular Options for Buying Daily Needs in Noida
                        </h2>

                        <h3 className="font-medium text-gray-900">
                            1. Organized Supermarkets and Grocery Marts
                        </h3>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Offer a structured, hygienic, and air-conditioned shopping
                                environment.
                            </li>
                            <li>
                                Products are quality-checked and clearly priced, reducing
                                haggling and guesswork.
                            </li>
                            <li>
                                Wider variety compared to small kirana shops, from fresh
                                produce to packaged goods.
                            </li>
                            <li>
                                Often provide loyalty programs, digital payment options, and
                                app-based ordering.
                            </li>
                            <li>
                                The Buyzaar Mart is a strong example of this format, present
                                across sectors and known for fresh stock and organized layouts.
                            </li>
                        </ul>

                        <h3 className="font-medium text-gray-900">
                            2. Traditional Kirana Stores
                        </h3>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Found in almost every residential lane and society market.
                            </li>
                            <li>
                                Useful for quick, small purchases and last-minute needs.
                            </li>
                            <li>
                                Personal relationships with shopkeepers can mean informal
                                credit or home delivery for regular customers.
                            </li>
                            <li>
                                Limited variety and inconsistent quality control compared to
                                organized retail.
                            </li>
                        </ul>

                        <h3 className="font-medium text-gray-900">
                            3. Local Sabzi Mandis and Vegetable Markets
                        </h3>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>Best for bulk fresh produce at competitive rates.</li>
                            <li>
                                Popular mandis are found near Sector 18, Sector 51, and parts
                                of Greater Noida.
                            </li>
                            <li>
                                Timing matters — early morning visits usually get the freshest
                                stock.
                            </li>
                            <li>
                                Not ideal for packaged goods, dairy, or household items.
                            </li>
                        </ul>

                        <h3 className="font-medium text-gray-900">
                            4. Quick-Commerce and Online Grocery Apps
                        </h3>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Convenient for urgent, small-basket needs delivered within
                                minutes.
                            </li>
                            <li>Useful for late-night or emergency purchases.</li>
                            <li>
                                Pricing can be higher on certain items, and quality consistency
                                varies by vendor.
                            </li>
                            <li>Not always practical for bulk monthly shopping.</li>
                        </ul>

                        <h3 className="font-medium text-gray-900">
                            5. Shopping Malls with Hypermarket Chains
                        </h3>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Malls such as The Great India Place in Sector 38A house larger
                                retail formats.
                            </li>
                            <li>
                                Good for combining grocery shopping with other errands or
                                outings.
                            </li>
                            <li>
                                Better suited for occasional bulk shopping than daily quick
                                trips due to travel time and parking.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Sector-Wise Snapshot: Where Noida Residents Shop
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">
                                    Sector 18 and Sector 62:
                                </span>{" "}
                                A mix of busy professionals and families who prefer organized
                                grocery marts for fast, reliable shopping between work hours.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Sector 44 and nearby residential sectors:
                                </span>{" "}
                                Family-heavy neighborhoods where quality, freshness, and trust
                                in the store matter more than novelty.
                            </li>
                            <li>
                                <span className="font-semibold">Noida Extension:</span> A
                                fast-growing residential belt where demand for organized
                                retail is rising quickly as more housing societies come up.
                            </li>
                            <li>
                                <span className="font-semibold">Greater Noida:</span> A
                                combination of local mandis and newer organized stores
                                catering to an expanding population.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Organized Retail vs. Traditional Shopping: A Quick Comparison
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Consistency:</span> Organized
                                grocery marts maintain standard pricing and stock quality
                                across visits, while traditional shops can vary depending on
                                the day or vendor.
                            </li>
                            <li>
                                <span className="font-semibold">Time efficiency:</span> A
                                well-laid-out store lets shoppers pick up everything from
                                vegetables to cleaning supplies in one visit, whereas
                                traditional shopping often means moving between the mandi, the
                                kirana store, and a separate dairy booth.
                            </li>
                            <li>
                                <span className="font-semibold">Billing and receipts:</span>{" "}
                                Organized stores typically offer clear digital billing, which
                                is useful for households tracking monthly expenses.
                            </li>
                            <li>
                                <span className="font-semibold">Product information:</span>{" "}
                                Packaged items in organized stores usually carry clear labels
                                for expiry dates, ingredients, and pricing, reducing guesswork.
                            </li>
                            <li>
                                <span className="font-semibold">Community trust:</span>{" "}
                                Traditional kirana stores often win on personal familiarity
                                and flexible informal credit, something organized retail is now
                                trying to replicate through loyalty programs and membership
                                benefits.
                            </li>
                            <li>
                                <span className="font-semibold">Bulk and offers:</span>{" "}
                                Organized marts frequently run combo offers, discounts, and
                                seasonal deals that are harder to find at small, independent
                                shops.
                            </li>
                        </ul>

                        <p>
                            Both formats continue to coexist in Noida, but a growing number
                            of households are shifting a large share of their monthly
                            shopping to organized stores while keeping kirana visits for
                            last-minute top-ups.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            What to Look for When Choosing a Daily Needs Store
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Freshness of produce:</span>{" "}
                                Look for stores with visibly high turnover of fruits and
                                vegetables rather than stale, sitting stock.
                            </li>
                            <li>
                                <span className="font-semibold">Range of products:</span> A
                                store that covers groceries, dairy, household items, and
                                personal care saves multiple trips.
                            </li>
                            <li>
                                <span className="font-semibold">Pricing transparency:</span>{" "}
                                Clear, consistent pricing builds trust over time.
                            </li>
                            <li>
                                <span className="font-semibold">Store hygiene and layout:</span>{" "}
                                A clean, organized store makes shopping faster and more
                                pleasant.
                            </li>
                            <li>
                                <span className="font-semibold">Convenient location:</span>{" "}
                                Proximity to home or workplace reduces time spent on errands.
                            </li>
                            <li>
                                <span className="font-semibold">Technology support:</span>{" "}
                                Features like scan-and-pay, app-based ordering, and digital
                                receipts add real convenience.
                            </li>
                            <li>
                                <span className="font-semibold">Customer service:</span> Staff
                                who are helpful and responsive make a noticeable difference in
                                the overall experience.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Why The Buyzaar Mart Is a Trusted Choice for Daily Needs in Noida
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Offers a wide range of products — fresh fruits and vegetables,
                                dairy, groceries, household essentials, and personal care items
                                — all under one roof.
                            </li>
                            <li>
                                Maintains direct sourcing links that help keep produce fresh
                                and reduce dependency on multiple middlemen.
                            </li>
                            <li>
                                Follows an organized, value-conscious pricing approach so
                                customers know what to expect.
                            </li>
                            <li>
                                Supports modern point-of-sale technology, making billing and
                                payments quick and hassle-free.
                            </li>
                            <li>
                                Present across multiple sectors in Noida, from Sector 18 to
                                Noida Extension, making it accessible to a wide range of
                                residents.
                            </li>
                            <li>
                                Focuses on building long-term customer relationships through
                                consistent quality rather than one-time deals.
                            </li>
                            <li>
                                Operates as an FSSAI-licensed, GST-registered, and
                                MSME-certified retail brand, which adds an extra layer of trust
                                for everyday shopping.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Tips for Smarter Daily Needs Shopping in Noida
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Plan a weekly list to avoid frequent unplanned trips, which
                                often lead to overspending.
                            </li>
                            <li>
                                Buy perishable items like vegetables and dairy in smaller, more
                                frequent quantities to maintain freshness.
                            </li>
                            <li>
                                Stock non-perishables like grains, oils, and cleaning supplies
                                in slightly larger quantities to save time.
                            </li>
                            <li>
                                Compare a few nearby stores once to understand pricing and
                                quality before settling into a regular shopping routine.
                            </li>
                            <li>
                                Use store loyalty programs or apps if available, since they
                                often provide long-term savings.
                            </li>
                            <li>
                                Keep an eye on seasonal produce, which tends to be fresher and
                                more affordably priced.
                            </li>
                            <li>
                                Carry reusable bags to reduce dependency on plastic and make
                                the checkout process quicker.
                            </li>
                            <li>
                                Check for combo offers or bulk packs on regularly used items
                                like oil, atta, and detergents, as these often work out cheaper
                                in the long run.
                            </li>
                            <li>
                                Set a rough monthly budget for groceries so unplanned splurges
                                don&apos;t add up over time.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Weekly vs. Monthly Shopping: What Works Best
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Weekly shopping is a practical option for households that prioritize freshness, particularly for fruits, vegetables, and dairy products. It also works well for smaller families and single professionals who have limited storage space and prefer purchasing fresh items in smaller quantities throughout the week.
                            </li>

                            <li>
                                Monthly shopping can be more efficient for essential staples such as grains, pulses, cooking oils, and cleaning supplies. Purchasing these products in larger quantities can help reduce the per-unit cost while also minimizing the number of shopping trips required during the month.
                            </li>

                            <li>
                                A hybrid shopping approach often works best for most Noida households with busy schedules. Families can purchase staples and other non-perishable essentials during a monthly stock-up while making weekly or twice-weekly trips for fresh produce, dairy, and other frequently consumed items.
                            </li>

                            <li>
                                Storage space is another important factor when deciding how frequently to shop. Residents living in smaller apartments or high-rise societies may find weekly top-up shopping more convenient than storing large quantities of groceries purchased during a single monthly shopping trip.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Frequently Asked Questions (FAQs)
                        </h2>

                        <div className="mt-4 space-y-4">
                            <div>
                                <h3 className="font-medium text-gray-900">
                                    1. What is the best place to buy daily needs in Noida?
                                </h3>
                                <p className="mt-2">
                                    Organized grocery marts like The Buyzaar Mart are a reliable
                                    choice, offering fresh produce, groceries, and household
                                    essentials under one roof.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    2. Which sectors in Noida have good access to daily needs
                                    stores?
                                </h3>
                                <p className="mt-2">
                                    Sectors like 18, 44, 62, and Noida Extension have a strong
                                    mix of organized grocery stores and local markets.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    3. Is it better to shop from a supermarket or a local kirana
                                    store?
                                </h3>
                                <p className="mt-2">
                                    Supermarkets usually offer more variety, better hygiene, and
                                    transparent pricing, while kirana stores are handy for quick,
                                    small purchases.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    4. Are quick-commerce apps a good option for daily groceries
                                    in Noida?
                                </h3>
                                <p className="mt-2">
                                    They work well for urgent, small orders but may not be the
                                    most cost-effective choice for regular bulk shopping.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    5. What products are usually available at a daily needs
                                    store?
                                </h3>
                                <p className="mt-2">
                                    Fresh fruits and vegetables, dairy, groceries, packaged
                                    foods, personal care items, and household essentials are
                                    typically available.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    6. Does The Buyzaar Mart deliver fresh produce daily?
                                </h3>
                                <p className="mt-2">
                                    Yes, The Buyzaar Mart focuses on maintaining fresh stock
                                    through direct sourcing links to ensure quality for customers.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    7. How can I save money on daily needs shopping in Noida?
                                </h3>
                                <p className="mt-2">
                                    Planning a shopping list, buying perishables in smaller
                                    batches, and comparing prices across nearby stores can help
                                    reduce costs.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    8. Should I do weekly or monthly grocery shopping in Noida?
                                </h3>
                                <p className="mt-2">
                                    A mix works best — buy staples like grains and oils monthly,
                                    and pick up fresh produce and dairy on a weekly basis for
                                    better quality.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    9. Are organized grocery marts more expensive than local
                                    kirana stores?
                                </h3>
                                <p className="mt-2">
                                    Not necessarily. Organized marts like The Buyzaar Mart often
                                    run combo offers and maintain transparent pricing, which can
                                    make them just as affordable, if not more, than local stores.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
                            <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                                Find Your Daily Needs Store in Noida
                            </h2>

                            <p className="mb-4 text-gray-800">
                                Whether you live in Sector 18, Sector 44, Sector 62, Noida
                                Extension, or Greater Noida, choosing the right daily needs
                                store can make your weekly routine faster, easier, and more
                                economical.
                            </p>

                            <p className="mb-4 text-gray-800">
                                The Buyzaar Mart brings groceries, fresh produce, dairy,
                                personal care products, household essentials, and everyday
                                utility items together under one roof.
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
                                Meta Title: Where to Buy Daily Needs in Noida | The Buyzaar
                                Mart
                            </p>
                            <p>
                                Meta Description: Looking for where to buy daily needs in
                                Noida? Discover the best grocery marts, local markets &amp;
                                online options for fresh, affordable essentials with The
                                Buyzaar Mart.
                            </p>
                        </div>
                    </div>

                    <CityInternalLinks
                        city="noida"
                        currentSlug="/cities/noida/where-to-buy-daily-needs-in-noida"
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
