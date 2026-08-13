import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Online Grocery Store Noida | The Buyzaar Mart",
    description:
        "The Buyzaar Mart is an online grocery store in Noida offering easy online ordering, fresh essentials, groceries, fruits, vegetables, dairy products, household items, and fast delivery across Noida sectors.",
    url: "https://www.thebuyzaarmart.com/cities/noida/online-grocery-store-noida",
    telephone: "+919217991727",
    email: "info@thebuyzaarmart.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "D-43, Third Floor, Sector-6",
        addressLocality: "Noida",
        postalCode: "201301",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
    },
    areaServed: {
        "@type": "City",
        name: "Noida",
    },
    priceRange: "₹₹",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Does The Buyzaar Mart operate as an online grocery store in Noida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, groceries can be ordered through the website or app for delivery.",
            },
        },
        {
            "@type": "Question",
            name: "How fast is online order delivery?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Typically within about 90 minutes in serviceable Noida zones.",
            },
        },
        {
            "@type": "Question",
            name: "What products are available to order online?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Staples, personal care, beverages, homecare items, snacks, dairy, and fresh produce, depending on the store format.",
            },
        },
        {
            "@type": "Question",
            name: "Is online ordering available across all Noida sectors?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Coverage depends on the nearest store location; customers should contact the team to confirm their sector.",
            },
        },
        {
            "@type": "Question",
            name: "Can I shop in-store instead of online?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Buyzaar Mart offers a full omni-channel experience across in-store, online, and delivery.",
            },
        },
        {
            "@type": "Question",
            name: "Are online prices different from in-store prices?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No, the same value-conscious pricing applies across both channels.",
            },
        },
        {
            "@type": "Question",
            name: "How much investment is needed to open a Buyzaar Mart store in Noida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It varies by format and area, broadly starting around ₹10–15 lakh and scaling with store size.",
            },
        },
        {
            "@type": "Question",
            name: "Does the franchise support setting up an online ordering system?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, software and delivery-integration support are included in the franchise package.",
            },
        },
    ],
};

const lifestyleFactors = [
    {
        title: "Dense vertical living –",
        text: "High-rise apartment complexes across sectors concentrate demand, making localized online delivery efficient and practical.",
    },
    {
        title: "Heavy commute times –",
        text: "Long travel on expressways and sector roads leaves limited time for physical shopping trips.",
    },
    {
        title: "Dual-income households –",
        text: "Many Noida families have both partners working, increasing reliance on quick online reordering for daily essentials.",
    },
    {
        title: "Digital-first shopping habits –",
        text: "Smartphone and UPI penetration have made browsing and paying for groceries online second nature for most residents.",
    },
    {
        title: "Growing preference for planned shopping –",
        text: "Online carts make it easier to plan a full week's essentials in one sitting, rather than making repeated small purchases.",
    },
    {
        title: "Expectation of speed and reliability –",
        text: "Modern shoppers expect predictable delivery windows, not vague “sometime today” promises.",
    },
];

const coreFeatures = [
    {
        title: "Broad product catalog –",
        text: "Staples, fresh produce, dairy, personal care, beverages, and household items should all be available in one place.",
    },
    {
        title: "Simple browsing and search –",
        text: "An intuitive app or website interface makes it easy to find and reorder items quickly.",
    },
    {
        title: "Transparent pricing –",
        text: "Prices should be clearly listed and consistent, without last-minute surprises at checkout.",
    },
    {
        title: "Reliable delivery windows –",
        text: "Clear, realistic delivery timeframes help customers plan their day around order arrival.",
    },
    {
        title: "Secure payment options –",
        text: "Multiple trusted payment methods, including UPI, cards, and cash on delivery where available.",
    },
    {
        title: "Responsive customer support –",
        text: "Easy access to help for order changes, replacements, or delivery issues.",
    },
    {
        title: "Local accountability –",
        text: "A store with a real physical presence in the city tends to offer more reliable service than a purely app-based, faceless platform.",
    },
];

const buyzaarFeatures = [
    {
        title: "Full grocery catalog online –",
        text: "Staples, fresh produce, dairy, personal care, homecare, beverages, and snacks, all available through a single online order.",
    },
    {
        title: "Delivery within roughly 90 minutes –",
        text: "Orders placed online are typically fulfilled quickly from the nearest serviceable store.",
    },
    {
        title: "Omni-channel flexibility –",
        text: "Customers can shop online, visit a physical outlet, or combine both depending on what suits their day.",
    },
    {
        title: "Store-linked online fulfillment –",
        text: "Online orders are served directly from nearby Buyzaar Mart outlets, keeping stock fresh and locally sourced.",
    },
    {
        title: "Consistent online and in-store pricing –",
        text: "The same value-conscious pricing applies whether shopping online or in person.",
    },
    {
        title: "Loyalty and repeat-order benefits –",
        text: "CRM-backed offers reward regular online shoppers with better long-term value.",
    },
    {
        title: "FSSAI-compliant sourcing –",
        text: "Products are sourced and stored in line with food safety standards, supporting trust in online orders.",
    },
];

const productCategories = [
    {
        title: "Grocery & Staples –",
        text: "Rice, pulses, flour, cooking oil, and everyday kitchen essentials.",
    },
    {
        title: "Fresh Produce –",
        text: "Fruits and vegetables sourced through trusted regional suppliers, available where Super Mart or Hyper Mart stores serve the sector.",
    },
    {
        title: "Dairy Items –",
        text: "Milk, curd, paneer, and other daily dairy needs.",
    },
    {
        title: "Beverages –",
        text: "Soft drinks, juices, bottled water, and everyday drink options.",
    },
    {
        title: "Personal Care –",
        text: "Skincare, haircare, oral care, and grooming essentials.",
    },
    {
        title: "Homecare & Hygiene –",
        text: "Cleaning agents, detergents, and household maintenance products.",
    },
    {
        title: "Snacks & Biscuits –",
        text: "Packaged snacks and biscuits for everyday consumption.",
    },
    {
        title: "Stationery –",
        text: "Everyday stationery and basic school or office supplies.",
    },
];

const noidaSectors = [
    {
        title: "Sector 44 –",
        text: "High-density residential zone with consistent online order volume.",
    },
    {
        title: "Sector 62 –",
        text: "A mix of residential towers and working professionals relying on fast online fulfillment.",
    },
    {
        title: "Greater Noida –",
        text: "Expanding residential development creating fresh demand for online grocery coverage.",
    },
    {
        title: "Metro-adjacent high-rises –",
        text: "Commuters often place online orders timed around their return home from work.",
    },
    {
        title: "Traffic-heavy commercial belts –",
        text: "Areas where in-person shopping is inconvenient benefit most from online ordering.",
    },
];

const shoppingTips = [
    {
        title: "Create a saved list –",
        text: "Save frequently bought items to speed up repeat online orders.",
    },
    {
        title: "Order during off-peak hours –",
        text: "Placing orders outside high-demand periods can help ensure faster fulfillment.",
    },
    {
        title: "Double-check delivery address details –",
        text: "Accurate address and sector information reduces delivery delays.",
    },
    {
        title: "Review your cart before checkout –",
        text: "Confirm quantities and items to avoid unnecessary substitutions or reorders.",
    },
    {
        title: "Track order updates –",
        text: "Use in-app or website tracking to stay informed about delivery timing.",
    },
    {
        title: "Provide feedback after delivery –",
        text: "Sharing feedback on order accuracy and freshness helps maintain consistent service quality over time.",
    },
];

const Content = () => {
    return (
        <div className="min-h-screen bg-white pt-0">
            <script
                key="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema).replace(
                        /</g,
                        "\\u003c"
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
                            The Rise of the Online Grocery Store in Noida
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Online grocery shopping has moved from an occasional convenience
                                to a regular part of how Noida households manage their daily and
                                weekly essentials.
                            </li>

                            <li>
                                As a rapidly developing NCR city with dense residential sectors,
                                active IT corridors, and heavy road traffic, Noida is exactly the
                                kind of urban market where online grocery stores thrive.
                            </li>

                            <li>
                                The Buyzaar Mart operates as an organized online grocery store in
                                Noida, pairing a physical retail network with app and
                                website-based ordering to serve residents across multiple sectors.
                            </li>

                            <li>
                                This article walks through how an online grocery store in Noida
                                typically works, what The Buyzaar Mart offers, its store formats,
                                franchise investment details, and short answers to frequently
                                asked questions.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            How Noida&apos;s Urban Lifestyle Is Driving Online Grocery
                            Adoption
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            {lifestyleFactors.map((item) => (
                                <li key={item.title}>
                                    <span className="font-semibold">{item.title}</span>{" "}
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Core Features of a Good Online Grocery Store
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            {coreFeatures.map((item) => (
                                <li key={item.title}>
                                    <span className="font-semibold">{item.title}</span>{" "}
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            What The Buyzaar Mart Offers as an Online Grocery Store in Noida
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            {buyzaarFeatures.map((item) => (
                                <li key={item.title}>
                                    <span className="font-semibold">{item.title}</span>{" "}
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            How Online Ordering Works at The Buyzaar Mart
                        </h2>

                        <ol className="list-decimal space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">
                                    Step 1: Visit the Website or App –
                                </span>{" "}
                                Go to thebuyzaarmart.com or open the app to browse available
                                products in your Noida sector.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Step 2: Build Your Cart –
                                </span>{" "}
                                Add groceries, fresh produce, dairy, personal care, and
                                household items based on your needs.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Step 3: Review and Checkout –
                                </span>{" "}
                                Confirm your order and complete payment through a secure,
                                supported method.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Step 4: Track Your Order –
                                </span>{" "}
                                Receive updates as your order is prepared and dispatched for
                                delivery.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Step 5: Receive and Reorder –
                                </span>{" "}
                                Get your order delivered to your doorstep, and save frequently
                                bought items for faster future orders.
                            </li>
                        </ol>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Product Categories Available Through the Online Store
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            {productCategories.map((item) => (
                                <li key={item.title}>
                                    <span className="font-semibold">{item.title}</span>{" "}
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            About The Buyzaar Mart
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                The Buyzaar Mart is a fast-growing, organized retail brand built
                                on the principles of value, trust, and everyday convenience for
                                urban and semi-urban households.
                            </li>

                            <li>
                                The brand&apos;s guiding philosophy,{" "}
                                <span className="font-semibold">
                                    &quot;अपना बाज़ार – बचत का साथ Quality की बात&quot;
                                </span>
                                , reflects its focus on affordability paired with consistent
                                quality — applied equally to online and offline shopping.
                            </li>

                            <li>
                                It is FSSAI licensed, GST registered, and MSME certified, giving
                                added assurance to customers ordering through the online store.
                            </li>

                            <li>
                                The Noida head office is located at D-43, Third Floor, Sector-6,
                                Noida-201301.
                            </li>

                            <li>
                                The Buyzaar Mart continues to expand across Uttar Pradesh and
                                neighboring states, strengthening both its physical and online
                                retail presence.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Store Formats Powering the Online Grocery Catalog
                        </h2>

                        <p>
                            The Buyzaar Mart&apos;s online product range is built on three
                            physical store formats, with catalog depth varying by format size:
                        </p>

                        <h3 className="font-medium text-gray-900">
                            1. Mini Mart (600–1000 sq. ft.)
                        </h3>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Grocery &amp; Staples –</span>{" "}
                                Core kitchen essentials such as rice, pulses, flour, cooking
                                oil, and spices, forming the base of most online orders from
                                this format.
                            </li>
                            <li>
                                <span className="font-semibold">Personal Care –</span> A
                                curated range of daily grooming and hygiene essentials,
                                including soaps, shampoos, oral care, and skincare basics
                                available for quick online reordering.
                            </li>
                            <li>
                                <span className="font-semibold">Beverages –</span> Soft drinks,
                                packaged juices, bottled water, and other everyday drink
                                options kept well-stocked for online purchase.
                            </li>
                            <li>
                                <span className="font-semibold">Homecare &amp; Hygiene –</span>{" "}
                                Cleaning agents, detergents, disinfectants, and household
                                maintenance products chosen for reliability and everyday use.
                            </li>
                            <li>
                                <span className="font-semibold">Stationery –</span> Basic
                                school and office supplies kept on hand for last-minute online
                                orders.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Snacks &amp; Biscuits –
                                </span>{" "}
                                A rotating mix of packaged snacks and biscuits ideal for quick,
                                frequent online reorders.
                            </li>
                        </ul>

                        <p>
                            Mini Mart formats support fast, focused online catalogs, ideal for
                            households making frequent, smaller top-up orders.
                        </p>

                        <h3 className="font-medium text-gray-900">
                            2. Super Mart (1000–3000 sq. ft.)
                        </h3>

                        <p>
                            Everything available in the Mini Mart format, offered at a larger
                            scale with deeper online stock levels, plus:
                        </p>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Dairy Items –</span> Milk,
                                curd, paneer, butter, and other daily dairy essentials sourced
                                regularly to ensure freshness for online customers.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Fruits &amp; Vegetables (F&amp;V) –
                                </span>{" "}
                                A wider selection of seasonal fruits and vegetables procured
                                through trusted regional suppliers, expanding the online basket
                                for larger households.
                            </li>
                        </ul>

                        <p>
                            Super Mart-linked online catalogs typically support fuller weekly
                            shopping needs, combining staples with fresh produce and dairy.
                        </p>

                        <h3 className="font-medium text-gray-900">
                            3. Hyper Mart (3000–8000 sq. ft.)
                        </h3>

                        <p>
                            Everything available in the Super Mart format, expanded further
                            with a broader assortment and higher inventory depth, plus:
                        </p>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Gifts &amp; Toys –</span> A
                                dedicated online section for gifting items, toys, and
                                occasion-based products.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Frozen Ready-to-Eat Items –
                                </span>{" "}
                                A growing category of frozen foods and ready-to-eat meals
                                available for online order, suited to busy households.
                            </li>
                        </ul>

                        <p>
                            Hyper Mart-linked online catalogs generally offer the widest
                            selection across every category, given the larger physical store
                            footprint behind them.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Investment Overview for Buyzaar Mart Formats
                        </h2>

                        <p>
                            For entrepreneurs interested in opening a store that also powers
                            online grocery ordering in Noida, the investment is calculated
                            across these components:
                        </p>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Stock –</span> Initial
                                inventory investment based on store size and category mix.
                            </li>
                            <li>
                                <span className="font-semibold">Interior –</span> Store
                                fit-out, fixtures, and branding elements.
                            </li>
                            <li>
                                <span className="font-semibold">Software Fee –</span> Cost of
                                POS, CRM, and online ordering/delivery-integration technology.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Franchise Fee (incl. 18% GST) –
                                </span>{" "}
                                One-time fee for brand rights and onboarding.
                            </li>
                            <li>
                                <span className="font-semibold">Security Deposit –</span>{" "}
                                Refundable deposit as part of the franchise agreement.
                            </li>
                        </ul>


                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Noida Sectors Served by the Online Grocery Store
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            {noidaSectors.map((item) => (
                                <li key={item.title}>
                                    <span className="font-semibold">{item.title}</span>{" "}
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                        <p>
                            Online delivery availability depends on the nearest store
                            location — customers are advised to confirm sector coverage
                            through the app, website, or by contacting the team directly.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Tips for a Smooth Online Grocery Shopping Experience
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            {shoppingTips.map((item) => (
                                <li key={item.title}>
                                    <span className="font-semibold">{item.title}</span>{" "}
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Frequently Asked Questions (FAQs)
                        </h2>

                        <div className="mt-4 space-y-4">
                            <div>
                                <h3 className="font-medium text-gray-900">
                                    1. Does The Buyzaar Mart operate as an online grocery store
                                    in Noida?
                                </h3>
                                <p className="mt-2">
                                    Yes, groceries can be ordered through the website or app for
                                    delivery.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    2. How fast is online order delivery?
                                </h3>
                                <p className="mt-2">
                                    Typically within about 90 minutes in serviceable Noida zones.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    3. What products are available to order online?
                                </h3>
                                <p className="mt-2">
                                    Staples, personal care, beverages, homecare items, snacks,
                                    dairy, and fresh produce, depending on the store format.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    4. Is online ordering available across all Noida sectors?
                                </h3>
                                <p className="mt-2">
                                    Coverage depends on the nearest store location; contact the
                                    team to confirm your sector.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    5. Can I shop in-store instead of online?
                                </h3>
                                <p className="mt-2">
                                    Yes, Buyzaar Mart offers a full omni-channel experience
                                    across in-store, online, and delivery.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    6. Are online prices different from in-store prices?
                                </h3>
                                <p className="mt-2">
                                    No, the same value-conscious pricing applies across both
                                    channels.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    7. How much investment is needed to open a Buyzaar Mart store
                                    in Noida?
                                </h3>
                                <p className="mt-2">
                                    It varies by format and area, broadly starting around ₹10–15
                                    lakh and scaling with store size.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    8. Does the franchise support setting up an online ordering
                                    system?
                                </h3>
                                <p className="mt-2">
                                    Yes, software and delivery-integration support are included
                                    in the franchise package.
                                </p>
                            </div>
                        </div>



                        <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
                            <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                                Order Groceries Online from The Buyzaar Mart
                            </h2>

                            <ul className="list-disc space-y-2 pl-6">
                                <li>
                                    Shop for groceries, fresh produce, dairy, personal care, beverages,
                                    household items, and daily essentials through The Buyzaar Mart&apos;s
                                    online grocery store in Noida.
                                </li>

                                <li>
                                    Customers can order online, visit a physical outlet, or contact the team
                                    to confirm delivery availability in their Noida sector.
                                </li>

                                <li>
                                    <span className="font-semibold">Call:</span>{" "}
                                    <a
                                        href="tel:+919217991727"
                                        className="font-semibold text-green-600 hover:underline"
                                    >
                                        9217991727
                                    </a>
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
                                    <span className="font-semibold">Website:</span>{" "}
                                    <a
                                        href="https://www.thebuyzaarmart.com"
                                        className="font-semibold text-green-600 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        www.thebuyzaarmart.com
                                    </a>
                                </li>

                                <li>
                                    <span className="font-semibold">Address:</span> D-43, Third Floor,
                                    Sector-6, Noida-201301
                                </li>
                            </ul>
                        </div>
                    </div>

                    <CityInternalLinks
                        city="noida"
                        currentSlug="/cities/noida/online-grocery-store-noida"
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