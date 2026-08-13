import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Grocery Store in Noida with Home Delivery | The Buyzaar Mart",
    description:
        "The Buyzaar Mart is a grocery store in Noida offering fresh groceries, daily essentials, online ordering, and dependable home delivery across Noida sectors.",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-store-in-noida-with-home-delivery",
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
            name: "Does The Buyzaar Mart deliver groceries to homes in Noida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, orders can be placed online or by phone for doorstep delivery.",
            },
        },
        {
            "@type": "Question",
            name: "How long does delivery typically take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Usually under 90 minutes in serviceable Noida zones.",
            },
        },
        {
            "@type": "Question",
            name: "What items are available for delivery?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Staples, personal care, beverages, homecare items, snacks, dairy, and fresh produce, depending on the store format.",
            },
        },
        {
            "@type": "Question",
            name: "Is delivery available in every Noida sector?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Coverage depends on the nearest store location; customers should contact the team to confirm their sector.",
            },
        },
        {
            "@type": "Question",
            name: "Can I place an order without the app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, orders can also be placed by calling the nearest outlet directly.",
            },
        },
        {
            "@type": "Question",
            name: "Does delivery cost more than in-store shopping?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No, the same value-conscious pricing applies across both channels.",
            },
        },
        {
            "@type": "Question",
            name: "How much investment is needed to open a Buyzaar Mart store with delivery in Noida?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It varies by format and area, broadly starting around ₹10–15 lakh and scaling with store size.",
            },
        },
        {
            "@type": "Question",
            name: "Does the franchise include support for setting up delivery operations?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, software and delivery-integration support are part of the franchise package.",
            },
        },
    ],
};

const deliveryFeatures = [
    {
        title: "Product range –",
        text: "A capable grocery store should offer staples, fresh produce, dairy, personal care, and household items together, not just a narrow snack or beverage selection.",
    },
    {
        title: "Delivery speed –",
        text: "Faster fulfillment matters most for perishables like dairy and produce, where freshness can decline quickly.",
    },
    {
        title: "Service area coverage –",
        text: "Not every store delivers to every sector, so confirming coverage for your specific location is important before relying on it regularly.",
    },
    {
        title: "Pricing consistency –",
        text: "Delivery pricing should mirror in-store rates, without hidden fees or unpredictable markups.",
    },
    {
        title: "Order accuracy –",
        text: "A reliable store minimizes substitutions, missing items, or packaging issues on delivered orders.",
    },
    {
        title: "Payment flexibility –",
        text: "Support for multiple secure payment methods makes the ordering process smoother for different customer preferences.",
    },
    {
        title: "Customer support access –",
        text: "Easy access to help for order issues, replacements, or delivery delays builds long-term trust.",
    },
];

const buyzaarDeliveryFeatures = [
    {
        title: "Doorstep delivery in under 90 minutes –",
        text: "Orders are typically fulfilled quickly, which matters most for daily essentials and perishables.",
    },
    {
        title: "Full grocery store range –",
        text: "Staples, personal care, beverages, homecare, snacks, dairy, and fresh produce are available for delivery, not just a limited selection.",
    },
    {
        title: "Store-linked fulfillment –",
        text: "Delivery is powered directly by nearby Buyzaar Mart outlets, so orders come from local, store-level stock rather than a distant warehouse.",
    },
    {
        title: "Consistent pricing across channels –",
        text: "The same value-conscious pricing applies whether customers shop in-store or order for delivery.",
    },
    {
        title: "Easy ordering options –",
        text: "Customers can order via the website, the app, or by calling their nearest outlet directly.",
    },
    {
        title: "Reliable customer support –",
        text: "A local Noida office and dedicated contact channels make resolving order issues straightforward.",
    },
    {
        title: "Loyalty benefits for regular customers –",
        text: "CRM-backed offers and personalized deals reward repeat home-delivery shoppers.",
    },
];

const deliveredProducts = [
    {
        title: "Grocery & Staples –",
        text: "Rice, pulses, flour, cooking oil, and everyday kitchen essentials for regular household cooking.",
    },
    {
        title: "Fresh Produce –",
        text: "Fruits and vegetables sourced from trusted regional suppliers, available through Super Mart and Hyper Mart-serviced sectors.",
    },
    {
        title: "Dairy Items –",
        text: "Milk, curd, paneer, and other daily dairy needs restocked regularly to maintain freshness.",
    },
    {
        title: "Beverages –",
        text: "Soft drinks, juices, bottled water, and everyday drinks available for quick delivery.",
    },
    {
        title: "Personal Care –",
        text: "Skincare, haircare, hygiene, and grooming essentials for daily use.",
    },
    {
        title: "Homecare & Hygiene –",
        text: "Cleaning supplies, detergents, and household maintenance products delivered alongside groceries.",
    },
    {
        title: "Snacks & Biscuits –",
        text: "Packaged snacks and quick-bite items suited for households and small gatherings.",
    },
    {
        title: "Stationery –",
        text: "Everyday stationery and basic school or office supplies available on request.",
    },
];

const deliveryQuestions = [
    {
        title: "Is there a minimum order value? –",
        text: "Minimum order requirements can vary by location and are best confirmed through the app or website.",
    },
    {
        title: "What if an item is out of stock? –",
        text: "Stores generally offer substitutions or refunds for unavailable items, depending on store policy.",
    },
    {
        title: "Can delivery times be scheduled in advance? –",
        text: "Some locations may support scheduled delivery windows in addition to standard fulfillment.",
    },
    {
        title: "Is cash on delivery available? –",
        text: "Payment options, including cash on delivery, may vary by outlet and should be confirmed at checkout.",
    },
    {
        title: "How are damaged or incorrect items handled? –",
        text: "A dependable grocery store should offer straightforward replacement or refund support for such cases.",
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
                            Finding a Grocery Store in Noida with Home Delivery
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Households across Noida are increasingly searching for a grocery
                                store that combines quality products with dependable doorstep
                                delivery, rather than choosing between the two.
                            </li>

                            <li>
                                Between long commutes, packed work schedules, and heavy sector
                                traffic, stepping out for daily essentials isn&apos;t always
                                practical — which is why delivery has moved from a nice-to-have to
                                a baseline expectation.
                            </li>

                            <li>
                                The Buyzaar Mart operates as a grocery store built for exactly
                                this need, running physical outlets across Noida while also
                                offering online ordering with delivery straight to the
                                customer&apos;s door.
                            </li>

                            <li>
                                This article covers what to look for in a grocery store with home
                                delivery, how The Buyzaar Mart&apos;s delivery service works, its
                                store formats, franchise investment details, and short answers to
                                common shopper questions.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            What to Look For in a Grocery Store with Home Delivery
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            {deliveryFeatures.map((item) => (
                                <li key={item.title}>
                                    <span className="font-semibold">{item.title}</span>{" "}
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            The Buyzaar Mart as a Grocery Store with Home Delivery in Noida
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            {buyzaarDeliveryFeatures.map((item) => (
                                <li key={item.title}>
                                    <span className="font-semibold">{item.title}</span>{" "}
                                    {item.text}
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            How to Order from The Buyzaar Mart for Home Delivery
                        </h2>

                        <ol className="list-decimal space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">
                                    Step 1: Choose Your Ordering Method –
                                </span>{" "}
                                Use thebuyzaarmart.com, the mobile app, or call your nearest
                                outlet directly.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Step 2: Select Your Essentials –
                                </span>{" "}
                                Add groceries, fresh produce, dairy, personal care, and
                                household items based on availability in your sector.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Step 3: Confirm Your Order –
                                </span>{" "}
                                Complete checkout using a secure, supported payment option.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Step 4: Track Delivery –
                                </span>{" "}
                                Receive your order at home, typically within about 90 minutes in
                                serviceable Noida zones.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Step 5: Reorder Quickly –
                                </span>{" "}
                                Save frequently purchased items to speed up future orders.
                            </li>
                        </ol>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            What You Can Get Delivered
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            {deliveredProducts.map((item) => (
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
                                quality.
                            </li>

                            <li>
                                It is FSSAI licensed, GST registered, and MSME certified, offering
                                added assurance to customers using both in-store and delivery
                                services.
                            </li>

                            <li>
                                The Noida head office is located at D-43, Third Floor, Sector-6,
                                Noida-201301.
                            </li>

                            <li>
                                The Buyzaar Mart continues to expand across Uttar Pradesh and
                                neighboring states, strengthening its delivery network along the
                                way.
                            </li>
                        </ul>
                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Store Formats Supporting Home Delivery in Noida
                        </h2>

                        <p>
                            The Buyzaar Mart&apos;s home delivery catalog is powered by three
                            physical store formats, with product range varying by store size:
                        </p>

                        <h3 className="font-medium text-gray-900">
                            1. Mini Mart (600–1000 sq. ft.)
                        </h3>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Grocery &amp; Staples –</span>{" "}
                                Core kitchen essentials such as rice, pulses, flour, cooking
                                oil, and spices, forming the base of most delivery orders from
                                this format.
                            </li>
                            <li>
                                <span className="font-semibold">Personal Care –</span> A
                                curated range of daily grooming and hygiene essentials,
                                including soaps, shampoos, oral care, and skincare basics
                                suited for quick delivery top-ups.
                            </li>
                            <li>
                                <span className="font-semibold">Beverages –</span> Soft drinks,
                                packaged juices, bottled water, and other everyday drink
                                options kept well-stocked for immediate delivery.
                            </li>
                            <li>
                                <span className="font-semibold">Homecare &amp; Hygiene –</span>{" "}
                                Cleaning agents, detergents, disinfectants, and household
                                maintenance products chosen for reliability and everyday use.
                            </li>
                            <li>
                                <span className="font-semibold">Stationery –</span> Basic
                                school and office supplies kept on hand for last-minute
                                delivery requests.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Snacks &amp; Biscuits –
                                </span>{" "}
                                A rotating mix of packaged snacks and biscuits ideal for quick,
                                frequent delivery orders.
                            </li>
                        </ul>

                        <p>
                            Mini Mart formats are well suited to fast, frequent delivery
                            orders in space-constrained neighborhoods, focusing on
                            fast-moving daily essentials.
                        </p>

                        <h3 className="font-medium text-gray-900">
                            2. Super Mart (1000–3000 sq. ft.)
                        </h3>

                        <p>
                            Everything available in the Mini Mart format, offered at a larger
                            scale with deeper stock levels, plus:
                        </p>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Dairy Items –</span> Milk,
                                curd, paneer, butter, and other daily dairy essentials sourced
                                regularly to ensure freshness for delivery customers.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Fruits &amp; Vegetables (F&amp;V) –
                                </span>{" "}
                                A wider selection of seasonal fruits and vegetables procured
                                through trusted regional suppliers, expanding the delivery
                                basket for larger households.
                            </li>
                        </ul>

                        <p>
                            Super Mart locations typically support a broader delivery
                            catalog, making them a strong choice for weekly or family-sized
                            grocery orders.
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
                                dedicated section for gifting items, toys, and occasion-based
                                products, available for delivery during festive seasons.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Frozen Ready-to-Eat Items –
                                </span>{" "}
                                A growing category of frozen foods and ready-to-eat meals
                                available for delivery, designed for busy households seeking
                                convenient meal solutions.
                            </li>
                        </ul>

                        <p>
                            Hyper Mart locations generally offer the widest delivery catalog,
                            given their larger footprint and deeper inventory across every
                            category.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Investment Overview for Buyzaar Mart Formats
                        </h2>

                        <p>
                            For entrepreneurs exploring a grocery store with home delivery
                            capability in Noida, the investment is calculated across these
                            components:
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
                                POS, CRM, and delivery-integration technology that powers
                                online ordering.
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
                            Noida Sectors Covered for Home Delivery
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Sector 44 –</span> High-density
                                residential zone with consistent daily delivery demand.
                            </li>
                            <li>
                                <span className="font-semibold">Sector 62 –</span> A mix of
                                residential towers and working professionals relying on quick
                                delivery service.
                            </li>
                            <li>
                                <span className="font-semibold">Greater Noida –</span> Growing
                                residential development creating fresh demand for reliable
                                delivery coverage.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Metro-adjacent high-rises –
                                </span>{" "}
                                Commuters often place delivery orders timed around their return
                                home from work.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Traffic-heavy commercial belts –
                                </span>{" "}
                                Areas where in-person shopping is inconvenient benefit most from
                                doorstep delivery.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Common Delivery Questions Households Ask Before Choosing a Store
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            {deliveryQuestions.map((item) => (
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
                                    1. Does The Buyzaar Mart deliver groceries to homes in Noida?
                                </h3>
                                <p className="mt-2">
                                    Yes, orders can be placed online or by phone for doorstep
                                    delivery.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    2. How long does delivery typically take?
                                </h3>
                                <p className="mt-2">
                                    Usually under 90 minutes in serviceable Noida zones.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    3. What items are available for delivery?
                                </h3>
                                <p className="mt-2">
                                    Staples, personal care, beverages, homecare items, snacks,
                                    dairy, and fresh produce, depending on the store format.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    4. Is delivery available in every Noida sector?
                                </h3>
                                <p className="mt-2">
                                    Coverage depends on the nearest store location; contact the
                                    team to confirm your sector.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    5. Can I place an order without the app?
                                </h3>
                                <p className="mt-2">
                                    Yes, orders can also be placed by calling your nearest outlet
                                    directly.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    6. Does delivery cost more than in-store shopping?
                                </h3>
                                <p className="mt-2">
                                    No, the same value-conscious pricing applies across both
                                    channels.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    7. How much investment is needed to open a Buyzaar Mart store
                                    with delivery in Noida?
                                </h3>
                                <p className="mt-2">
                                    It varies by format and area, broadly starting around ₹10–15
                                    lakh and scaling with store size.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    8. Does the franchise include support for setting up delivery
                                    operations?
                                </h3>
                                <p className="mt-2">
                                    Yes, software and delivery-integration support are part of the
                                    franchise package.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* CTA Section */}
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

                    <CityInternalLinks
                        city="noida"
                        currentSlug="/cities/noida/grocery-store-in-noida-with-home-delivery"
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