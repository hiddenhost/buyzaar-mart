import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Buyzaar Mart Noida",
    description:
        "The Buyzaar Mart is an organized grocery store in Noida offering groceries, fresh fruits and vegetables, dairy products, household essentials, personal care products, online ordering, and fast delivery.",
    url: "https://www.thebuyzaarmart.com/cities/noida/how-to-choose-a-good-grocery-store-in-noida",
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
            name: "What&apos;s the most important factor when choosing a grocery store?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A combination of consistent quality, fair pricing, and reliable stock availability.",
            },
        },
        {
            "@type": "Question",
            name: "Should I prioritize online delivery or in-store shopping?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Choose based on your routine — the best stores support both equally well.",
            },
        },
        {
            "@type": "Question",
            name: "Do all grocery store formats carry fresh produce?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No, smaller formats like Mini Mart typically skip fresh produce; larger formats like Super Mart and Hyper Mart include it.",
            },
        },
        {
            "@type": "Question",
            name: "How can I check if a store&apos;s pricing is fair?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Compare a few common staple items across two or three stores over a few visits.",
            },
        },
        {
            "@type": "Question",
            name: "Is certification like FSSAI licensing important?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, it indicates the store follows basic food safety and compliance standards.",
            },
        },
        {
            "@type": "Question",
            name: "Does The Buyzaar Mart meet these selection criteria?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, across product range, pricing, quality checks, and omni-channel convenience.",
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
            name: "Where can I find more details on choosing the right format?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Contact The Buyzaar Mart team or use the investment calculator on the official website.",
            },
        },
    ],
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
                            Why Choosing the Right Grocery Store Matters
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                A grocery store isn&apos;t a one-time purchase decision — it&apos;s
                                a weekly or even daily relationship that directly affects
                                household budgets, food quality, and time spent shopping.
                            </li>

                            <li>
                                Noida&apos;s fast-growing sectors now offer multiple options, from
                                traditional kirana shops to organized supermarkets and
                                online-only delivery apps, making the choice less obvious than it
                                used to be.
                            </li>

                            <li>
                                Picking the wrong store can mean inconsistent quality,
                                unpredictable pricing, or unreliable delivery — small
                                frustrations that add up over months of regular shopping.
                            </li>

                            <li>
                                This guide walks through the key factors to evaluate before
                                settling on a regular grocery store in Noida, and shows how The
                                Buyzaar Mart measures up against each one.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Step 1: Check the Product Range
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">
                                    Look for a full basket, not a partial one –
                                </span>{" "}
                                A good grocery store should cover staples, fresh produce,
                                dairy, personal care, beverages, and household items together.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Avoid stores with frequent gaps –
                                </span>{" "}
                                If a store often runs out of common items, it forces extra
                                trips elsewhere, defeating the purpose of a one-stop shop.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Check for format-specific range –
                                </span>{" "}
                                Smaller neighborhood stores may not stock fresh produce or
                                dairy, so confirm what&apos;s actually available before assuming
                                full coverage.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    The Buyzaar Mart&apos;s approach –
                                </span>{" "}
                                Mini Mart, Super Mart, and Hyper Mart formats offer increasing
                                depth, with Super Mart and Hyper Mart locations adding fresh
                                fruits, vegetables, and dairy alongside staples and household
                                items.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Step 2: Evaluate Pricing Transparency
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">
                                    Compare a few common items across stores –
                                </span>{" "}
                                Prices for staples like rice, oil, or milk should stay
                                consistent and clearly marked, not vary unpredictably.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Watch for hidden delivery charges –
                                </span>{" "}
                                Some stores add unclear service fees only visible at checkout.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Prefer stores with fixed, visible pricing –
                                </span>{" "}
                                Transparent pricing builds trust and makes monthly budgeting
                                easier.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    The Buyzaar Mart&apos;s approach –
                                </span>{" "}
                                The brand follows a value-conscious pricing strategy that stays
                                consistent whether shopping in-store or ordering online,
                                without unpredictable markups.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Step 3: Assess Freshness and Quality Standards
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">
                                    Ask about restocking frequency –
                                </span>{" "}
                                Frequently replenished shelves, especially for perishables,
                                indicate a well-managed supply chain.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Check for visible quality checks –
                                </span>{" "}
                                Stores that inspect produce and packaged goods before shelving
                                tend to offer more reliable quality.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Look for food safety certifications –
                                </span>{" "}
                                Licensing such as FSSAI registration signals compliance with
                                basic safety standards.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    The Buyzaar Mart&apos;s approach –
                                </span>{" "}
                                The brand sources fruits and vegetables from trusted regional
                                suppliers, follows regular restocking cycles, and is FSSAI
                                licensed, GST registered, and MSME certified.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Step 4: Test the Billing and Checkout Experience
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Notice checkout speed –</span>{" "}
                                A slow, error-prone billing process wastes time, especially
                                during peak shopping hours.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Prefer POS-enabled systems –
                                </span>{" "}
                                Modern point-of-sale technology reduces manual calculation
                                errors and speeds up transactions.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Check for digital receipts or order tracking –
                                </span>{" "}
                                Stores offering clear, itemized receipts make it easier to
                                track spending and catch errors.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    The Buyzaar Mart&apos;s approach –
                                </span>{" "}
                                Every store format uses POS-enabled billing, supported by CRM
                                tools that help track customer purchase history and offers.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Step 5: Confirm Delivery Reliability (If Needed)
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">
                                    Ask about delivery time commitments –
                                </span>{" "}
                                A good store should offer a realistic, consistent delivery
                                window rather than vague promises.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Check sector-specific coverage –
                                </span>{" "}
                                Not every store delivers to every part of Noida, so confirm
                                your exact sector is covered.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Look for order accuracy and support –
                                </span>{" "}
                                A dependable store minimizes substitutions and offers easy
                                resolution for missing or incorrect items.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    The Buyzaar Mart&apos;s approach –
                                </span>{" "}
                                Online orders are typically delivered within about 90 minutes
                                in serviceable zones, fulfilled directly from nearby store
                                stock for freshness and accuracy.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Step 6: Look for Omni-Channel Flexibility
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">
                                    Avoid stores locked into a single channel –
                                </span>{" "}
                                The best grocery stores let you shop in-store, order online, or
                                switch between both depending on your day.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Check for consistent experience across channels –
                                </span>{" "}
                                Pricing, product range, and quality should remain the same
                                whether shopping online or walking into a store.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Value convenience without losing control –
                                </span>{" "}
                                Flexibility to choose how you shop each day is more practical
                                than being forced into one method.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    The Buyzaar Mart&apos;s approach –
                                </span>{" "}
                                The brand offers a genuine omni-channel experience, with
                                matching pricing and product availability across in-store
                                visits and online orders.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Step 7: Consider Store Cleanliness and Layout
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">
                                    Visit in person if possible –
                                </span>{" "}
                                A clean, well-organized store layout is often a strong
                                indicator of overall management quality.
                            </li>
                            <li>
                                <span className="font-semibold">Check shelf organization –</span>{" "}
                                Logical categorization makes shopping faster and reduces the
                                chance of missing items on your list.
                            </li>
                            <li>
                                <span className="font-semibold">Notice staff behavior –</span>{" "}
                                Helpful, well-trained staff often reflect a store&apos;s broader
                                commitment to customer experience.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    The Buyzaar Mart&apos;s approach –
                                </span>{" "}
                                Stores follow uniform branding and store design standards,
                                maintaining a consistent, professional layout across every
                                format and location.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Step 8: Review Customer Engagement and Loyalty Benefits
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">
                                    Ask about repeat-customer offers –
                                </span>{" "}
                                Stores with loyalty programs or personalized deals often
                                provide better long-term value.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Check for responsive customer support –
                                </span>{" "}
                                Easy access to help for order issues, replacements, or
                                questions builds trust over time.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Look for local accountability –
                                </span>{" "}
                                A store with a real, local office or team tends to resolve
                                issues faster than a purely app-based, anonymous platform.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    The Buyzaar Mart&apos;s approach –
                                </span>{" "}
                                CRM-backed engagement tools support personalized offers, and
                                the brand maintains a local Noida office for direct customer
                                accountability.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            About The Buyzaar Mart
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                The Buyzaar Mart is a fast-growing, organized retail brand
                                focused on value, trust, and everyday convenience for urban and
                                semi-urban households.
                            </li>

                            <li>
                                The brand&apos;s guiding philosophy,{" "}
                                <span className="font-semibold">
                                    &quot;अपना बाज़ार – बचत का साथ Quality की बात&quot;
                                </span>
                                , reflects its commitment to affordability paired with
                                consistent quality.
                            </li>

                            <li>
                                It is FSSAI licensed, GST registered, and MSME certified, giving
                                shoppers added assurance around compliance and reliability.
                            </li>

                            <li>
                                The Noida head office is located at D-43, Third Floor, Sector-6,
                                Noida-201301.
                            </li>

                            <li>
                                The Buyzaar Mart continues to expand across Uttar Pradesh and
                                neighboring states, strengthening its retail and delivery network
                                along the way.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Store Formats to Know Before You Choose
                        </h2>

                        <p>
                            Understanding format differences helps you set the right
                            expectations when choosing a nearby Buyzaar Mart outlet:
                        </p>

                        <h3 className="font-medium text-gray-900">
                            1. Mini Mart (600–1000 sq. ft.)
                        </h3>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Grocery &amp; Staples –</span>{" "}
                                Core kitchen essentials such as rice, pulses, flour, cooking
                                oil, and spices covering everyday cooking needs.
                            </li>
                            <li>
                                <span className="font-semibold">Personal Care –</span> A
                                curated range of daily grooming and hygiene essentials,
                                including soaps, shampoos, oral care, and skincare basics.
                            </li>
                            <li>
                                <span className="font-semibold">Beverages –</span> Soft drinks,
                                packaged juices, bottled water, and other everyday drink
                                options.
                            </li>
                            <li>
                                <span className="font-semibold">Homecare &amp; Hygiene –</span>{" "}
                                Cleaning agents, detergents, disinfectants, and household
                                maintenance products.
                            </li>
                            <li>
                                <span className="font-semibold">Stationery –</span> Basic
                                school and office supplies for everyday convenience.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Snacks &amp; Biscuits –
                                </span>{" "}
                                A rotating mix of packaged snacks and biscuits.
                            </li>
                        </ul>

                        <p>
                            Best suited for quick, frequent top-up shopping in compact
                            neighborhood locations, though it typically does not carry fresh
                            produce or dairy.
                        </p>

                        <h3 className="font-medium text-gray-900">
                            2. Super Mart (1000–3000 sq. ft.)
                        </h3>

                        <p>
                            Everything available in the Mini Mart format, offered at a
                            larger scale, plus:
                        </p>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Dairy Items –</span> Milk,
                                curd, paneer, butter, and other daily dairy essentials.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Fruits &amp; Vegetables (F&amp;V) –
                                </span>{" "}
                                A wider selection of seasonal fruits and vegetables from
                                trusted regional suppliers.
                            </li>
                        </ul>

                        <p>
                            A strong choice for households wanting a genuine one-stop weekly
                            shopping experience, including fresh produce.
                        </p>

                        <h3 className="font-medium text-gray-900">
                            3. Hyper Mart (3000–8000 sq. ft.)
                        </h3>

                        <p>
                            Everything available in the Super Mart format, expanded further,
                            plus:
                        </p>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                <span className="font-semibold">Gifts &amp; Toys –</span> A
                                dedicated section for gifting items, toys, and occasion-based
                                products.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Frozen Ready-to-Eat Items –
                                </span>{" "}
                                Frozen foods and ready-to-eat meals for convenient, quick meal
                                solutions.
                            </li>
                        </ul>

                        <p>
                            Ideal for bulk or family-sized shopping trips, offering the
                            widest variety and volume across every product category.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Investment Overview for Buyzaar Mart Formats
                        </h2>

                        <p>
                            For those evaluating a grocery store franchise opportunity in
                            Noida rather than just shopping, the investment is calculated
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

                        

                        <p>
                            <span className="font-semibold">Note:</span> Final figures vary
                            by exact location, negotiated rent, and store customization —
                            applicants are advised to use the official calculator or contact
                            the franchise team for a personalized estimate.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Quick Checklist: Choosing a Good Grocery Store in Noida
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Does it stock a full range — staples, produce, dairy, personal
                                care, and household items?
                            </li>
                            <li>
                                Are prices clear, consistent, and free of hidden charges?
                            </li>
                            <li>
                                Is stock restocked frequently, with visible quality checks?
                            </li>
                            <li>
                                Is checkout fast, accurate, and technology-supported?
                            </li>
                            <li>
                                Does it offer reliable delivery with realistic time windows,
                                if needed?
                            </li>
                            <li>
                                Can you shop both online and in-store with the same pricing and
                                range?
                            </li>
                            <li>
                                Is the store clean, well-organized, and staffed by helpful team
                                members?
                            </li>
                            <li>
                                Does it offer loyalty benefits and responsive customer support?
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Frequently Asked Questions (FAQs)
                        </h2>

                        <div className="mt-4 space-y-4">
                            <div>
                                <h3 className="font-medium text-gray-900">
                                    1. What&apos;s the most important factor when choosing a
                                    grocery store?
                                </h3>
                                <p className="mt-2">
                                    A combination of consistent quality, fair pricing, and
                                    reliable stock availability.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    2. Should I prioritize online delivery or in-store shopping?
                                </h3>
                                <p className="mt-2">
                                    Choose based on your routine — the best stores support both
                                    equally well.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    3. Do all grocery store formats carry fresh produce?
                                </h3>
                                <p className="mt-2">
                                    No, smaller formats like Mini Mart typically skip fresh
                                    produce; larger formats like Super Mart and Hyper Mart include
                                    it.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    4. How can I check if a store&apos;s pricing is fair?
                                </h3>
                                <p className="mt-2">
                                    Compare a few common staple items across two or three stores
                                    over a few visits.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    5. Is certification like FSSAI licensing important?
                                </h3>
                                <p className="mt-2">
                                    Yes, it indicates the store follows basic food safety and
                                    compliance standards.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    6. Does The Buyzaar Mart meet these selection criteria?
                                </h3>
                                <p className="mt-2">
                                    Yes, across product range, pricing, quality checks, and
                                    omni-channel convenience.
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
                                    8. Where can I find more details on choosing the right
                                    format?
                                </h3>
                                <p className="mt-2">
                                    Contact The Buyzaar Mart team or use the investment calculator
                                    on the official website.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
                            <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                                Choose The Buyzaar Mart for Quality, Value, and Convenience
                            </h2>

                            <p className="mb-4 text-gray-800">
                                Whether you prefer shopping in-store or ordering online, The
                                Buyzaar Mart provides a reliable grocery shopping experience in
                                Noida with quality products, transparent pricing, fresh
                                produce, organized stores, and convenient delivery.
                            </p>

                            <p className="mb-4 text-gray-800">
                                For more information, visit The Buyzaar Mart or contact the
                                local Noida team directly.
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
                                <span className="font-semibold">Noida Office:</span> D-43,
                                Third Floor, Sector-6, Noida-201301
                            </p>
                        </div>
                    </div>

                    <CityInternalLinks
                        city="noida"
                        currentSlug="/cities/noida/how-to-choose-a-good-grocery-store-in-noida"
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