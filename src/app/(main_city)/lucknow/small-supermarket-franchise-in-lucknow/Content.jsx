import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Small Supermarket Franchise in Lucknow | The Buyzaar Mart",
    description:
        "Start a small supermarket franchise in Lucknow with The Buyzaar Mart. Compact Mini Mart and Super Mart formats, FOCO and FOCM options, low investment and full support.",
    url: "https://www.thebuyzaarmart.com/lucknow/small-supermarket-franchise-in-lucknow",
    telephone: "+919217991727",
    email: "info@thebuyzaarmart.com",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
    },
    areaServed: {
        "@type": "City",
        name: "Lucknow",
    },
    openingHours: "Mo-Sa 09:00-19:00",
    priceRange: "₹₹",
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "The Buyzaar Mart Franchise Formats in Lucknow",
        itemListElement: [
            {
                "@type": "Offer",
                name: "Mini Mart",
                description:
                    "Compact retail format suited for residential colony markets and smaller commercial pockets in Lucknow.",
            },
            {
                "@type": "Offer",
                name: "Super Mart",
                description:
                    "Neighbourhood supermarket format suited for busier residential and semi-commercial areas in Lucknow.",
            },
            {
                "@type": "Offer",
                name: "Hyper Mart",
                description:
                    "Large-format retail store suited for high-footfall commercial zones in Lucknow.",
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
            name: "Which Buyzaar Mart format qualifies as a small supermarket?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Mini Mart and Super Mart are the formats best suited to a small supermarket setup.",
            },
        },
        {
            "@type": "Question",
            name: "What is the investment difference between a small supermarket and a Hyper Mart?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A small supermarket requires significantly lower investment due to its compact size and reduced inventory needs.",
            },
        },
        {
            "@type": "Question",
            name: "Can an existing kirana store be converted into a Buyzaar Mart small supermarket?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, many franchise partners are existing kirana owners upgrading to an organized format.",
            },
        },
        {
            "@type": "Question",
            name: "Is FOCO or FOCM better for a small supermarket?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "FOCO suits passive investors, while FOCM suits those wanting active, hands-on involvement.",
            },
        },
        {
            "@type": "Question",
            name: "How long does it take to break even on a small supermarket franchise?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It varies by location, but smaller formats generally stabilize faster than larger stores.",
            },
        },
        {
            "@type": "Question",
            name: "Does The Buyzaar Mart help choose the right location for a small format store?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, the franchise team evaluates footfall and demand before recommending a location.",
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
                            Small Supermarket Franchise in Lucknow with The Buyzaar Mart
                        </h1>

                        <p>
                            Not every entrepreneur wants to invest in the space, capital, and operational complexity required to establish a large-format supermarket. Setting up a full-scale retail store often demands significant investment in commercial property, infrastructure, inventory, staffing, technology, and day-to-day management, making it a challenging option for many first-time business owners.

                            For many entrepreneurs, investors, and existing retailers in Lucknow, a small supermarket franchise offers the ideal balance between affordability, profitability, and operational simplicity. It provides enough product variety to meet the everyday shopping needs of a local neighbourhood while requiring a comparatively lower investment and a more manageable store size. This makes it an attractive opportunity for individuals looking to enter the organized retail sector with reduced financial risk.
                        </p>
                        <p>
                            The Buyzaar Mart's compact supermarket formats are specifically designed for residential neighbourhoods and growing semi-commercial locations across Lucknow. These stores offer a carefully selected assortment of groceries, packaged foods, beverages, dairy products, personal care items, home care products, household essentials, snacks, and other fast-moving consumer goods (FMCG), allowing customers to complete their daily shopping conveniently under one roof.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Why a Small Supermarket Format Works Well in Lucknow
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>Lucknow has a large number of dense residential colonies and mid-sized commercial lanes where a large-format hypermarket is not practical or necessary.</li>
                            <li>Consumers increasingly prefer the convenience of a nearby organized store over travelling to a large mall-based supermarket for daily needs.</li>
                            <li>Smaller footprint stores require lower rental costs, making them accessible in a wider range of localities across the city.</li>
                            <li>A small supermarket format allows faster setup and quicker breakeven compared to larger stores.</li>
                            <li>Many Lucknow neighbourhoods, such as Aliganj, Jankipuram, and parts of Indira Nagar, are well suited to a small supermarket serving a tight, walkable catchment.</li>
                            <li>The format also works well for existing kirana store owners looking to upgrade to an organized setup without a large jump in investment or space requirement.</li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            About The Buyzaar Mart's Small Supermarket Offering
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>The Buyzaar Mart offers dedicated compact formats designed to function as full-fledged small supermarkets rather than basic convenience stores.</li>
                            <li>Product range includes daily essentials, packaged foods, dairy, personal care, household items, and select fresh produce.</li>
                            <li>Backed by the same centralized supply chain used across all Buyzaar Mart formats, ensuring pricing competitiveness and stock consistency.</li>
                            <li>Store layout and merchandising are optimized for smaller spaces without compromising the shopping experience.</li>
                            <li>Brand consistency across formats means a small supermarket franchise still carries the same customer trust as larger outlets.</li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Franchise Models Offered
                        </h2>

                        <h3 className="font-medium text-gray-900">1. FOCO (Franchise Owned, Company Operated)</h3>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>You invest in the property and store setup.</li>
                            <li>The Buyzaar Mart's team manages daily operations, staffing, and store management.</li>
                            <li>Ideal for investors who want a passive income stream from a smaller-format store without daily involvement.</li>
                            <li>Well suited to those who own or can lease a compact commercial space in a good Lucknow locality.</li>
                        </ul>

                        <h3 className="font-medium text-gray-900">2. FOCM (Franchise Owned, Company Managed)</h3>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>You own the store and are actively involved in daily operations.</li>
                            <li>The Buyzaar Mart provides training, systems, and managerial support.</li>
                            <li>Offers better long-term margins since you retain a larger share of profits.</li>
                            <li>A natural fit for existing kirana owners or first-time entrepreneurs who want to run a manageable store themselves.</li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Recommended Store Formats for a Small Supermarket
                        </h2>


                        <h4>Mini Mart Format</h4>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>
                                Requires a store area of approximately <strong>600 to 1,000 sq. ft.</strong>, making it ideal for residential neighbourhoods, apartment complexes, and local commercial markets.
                            </li>
                            <li>
                                Initial investment starts from approximately <strong>₹15.25 lakh</strong>.
                            </li>
                            <li>
                                The investment generally includes the franchise fee, initial inventory, interior fit-out, POS software, and security deposit.
                            </li>
                        </ul>

                        <h4>Super Mart Format</h4>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>
                                Requires a store area of approximately <strong>1,001 to 3,000 sq. ft.</strong>, suitable for full-service neighbourhood supermarkets.
                            </li>
                            <li>
                                Investment starts from approximately <strong>₹26.63 lakh</strong> and may vary based on location, store size, and interior specifications.
                            </li>
                            <li>
                                Offers a wider product assortment, including fresh produce, dairy, frozen foods, bakery items, personal care products, and household essentials.
                            </li>
                        </ul>

                        <h4>Hyper Mart Format</h4>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>
                                Requires the largest commercial space among all Buyzaar Mart formats and is best suited for high-footfall retail locations.
                            </li>
                            <li>
                                Investment is higher due to the larger store size, expanded product range, additional infrastructure, and staffing requirements.
                            </li>
                            <li>
                                Ideal for high-net-worth investors, business groups, and experienced retail entrepreneurs seeking maximum revenue potential under the FOCO franchise model.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Step-by-Step Process to Open
                        </h2>

                        <ol className="list-decimal space-y-2 pl-6">
                            <li>Initial Inquiry — Contact The Buyzaar Mart's franchise team specifying interest in a small-format store in Lucknow.</li>
                            <li>Location Evaluation — The team evaluates your proposed space or helps identify a suitable small commercial property.</li>
                            <li>Format Selection — Choose between Mini Mart and Super Mart depending on available space and budget.</li>
                            <li>Business Model Selection — Decide between FOCO and FOCM based on your desired day-to-day involvement.</li>
                            <li>Agreement & Documentation — Sign the franchise agreement covering investment, revenue sharing, and operational responsibilities.</li>
                            <li>Store Setup — Compact-format interiors, shelving, refrigeration, branding, and POS systems are installed to brand standards.</li>
                            <li>Inventory & Staffing — Initial stock is sourced through the centralized supply chain, and staff are hired and trained, or provided directly under FOCO.</li>
                            <li>Launch & Local Marketing — Store opening is supported with signage and local promotional activities suited to the neighbourhood.</li>
                            <li>Ongoing Review — Regular audits and sales tracking help fine-tune the product mix for the specific catchment over time.</li>
                        </ol>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Investment Considerations for a Small Supermarket
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>Because the format is compact, overall investment is significantly lower than a Hyper Mart.</li>
                            <li>Investment covers rental deposit, interior fit-out, shelving, refrigeration, initial inventory, and branding.</li>
                            <li>Under FOCO, day-to-day operational costs are handled by the company.</li>
                            <li>Under FOCM, you manage operational costs directly but retain a larger share of profits over the store's life.</li>
                            <li>Smaller stores typically have a shorter stabilization period than large-format stores.</li>
                            <li>Working capital planning should still account for the first few months of operations before footfall and sales stabilize.</li>
                            <li>Precise investment figures and revenue-sharing terms are shared by the franchise team once your specific location and format are confirmed.</li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            What The Buyzaar Mart Provides
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>An established brand name that builds customer trust quickly, even in a compact store format.</li>
                            <li>Centralized procurement ensuring price competitiveness and consistent stock availability.</li>
                            <li>Store design and merchandising guidelines optimized specifically for smaller spaces.</li>
                            <li>POS and inventory management technology to simplify daily billing and stock tracking.</li>
                            <li>Staff training programs, especially useful for FOCM partners managing their own small team.</li>
                            <li>Ongoing operational support, audits, and periodic performance reviews.</li>
                            <li>Local marketing support tailored to a neighbourhood-level customer base.</li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Ideal Localities in Lucknow
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>Aliganj and Jankipuram — growing middle-class residential belt well suited to a compact Mini Mart or Super Mart.</li>
                            <li>Indira Nagar — dense residential population offering consistent daily footfall for a small-format store.</li>
                            <li>Rajajipuram and Aashiyana — established residential zones with steady, repeat grocery demand.</li>
                            <li>Vrindavan Yojna and Vibhuti Khand — newer residential developments where a small supermarket can serve an underserved catchment.</li>
                            <li>Smaller lanes within Gomti Nagar and Hazratganj — where a compact format fits better than a larger store given space and rental constraints.</li>
                            <li>Areas near schools, hospitals, and local markets — where consistent footfall supports a small supermarket.</li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Who Should Consider a Small Supermarket Franchise
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>First-time entrepreneurs looking for a manageable entry point into organized retail without a large capital commitment.</li>
                            <li>Existing kirana store owners wanting to modernize and rebrand without significantly expanding their current store size.</li>
                            <li>Investors with access to compact commercial spaces in good residential localities across Lucknow.</li>
                            <li>Individuals who want a business that can be run part-time or with a small team rather than a large-format store requiring more staff and management.</li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Common Mistakes to Avoid
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>Choosing a location with insufficient residential density to support even a small-format store.</li>
                            <li>Underestimating the importance of a well-curated product mix suited to a smaller shelf footprint.</li>
                            <li>Assuming a smaller store means minimal setup investment.</li>
                            <li>Not planning working capital for the initial stabilization period.</li>
                            <li>Skipping staff training, which affects customer experience regardless of store size.</li>
                            <li>Underinvesting in local marketing during launch.</li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Frequently Asked Questions
                        </h2>

                        <div className="mt-4 space-y-4">
                            <div>
                                <h3 className="font-medium text-gray-900">Which Buyzaar Mart format qualifies as a small supermarket?</h3>
                                <p className="mt-2">Mini Mart and Super Mart are the formats best suited to a small supermarket setup.</p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">What is the investment difference between a small supermarket and a Hyper Mart?</h3>
                                <p className="mt-2">A small supermarket requires significantly lower investment due to its compact size and reduced inventory needs.</p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">Can an existing kirana store be converted into a Buyzaar Mart small supermarket?</h3>
                                <p className="mt-2">Yes, many franchise partners are existing kirana owners upgrading to an organized format.</p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">Is FOCO or FOCM better for a small supermarket?</h3>
                                <p className="mt-2">FOCO suits passive investors, while FOCM suits those wanting active, hands-on involvement.</p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">How long does it take to break even on a small supermarket franchise?</h3>
                                <p className="mt-2">It varies by location, but smaller formats generally stabilize faster than larger stores.</p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">Does The Buyzaar Mart help choose the right location for a small format store?</h3>
                                <p className="mt-2">Yes, the franchise team evaluates footfall and demand before recommending a location.</p>
                            </div>
                        </div>

                        <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
                            <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                                Start Your Small Supermarket Journey
                            </h2>

                            <p className="mb-4 text-gray-800">
                                The Buyzaar Mart offers a practical entry into organized retail with compact formats designed for residential and semi-commercial neighbourhoods.
                            </p>

                            <p className="mb-4 text-gray-800">
                                With the right location and store size, a small supermarket can become a steady and manageable business in Lucknow.
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
                                <span className="font-semibold">Business Hours:</span> Monday to Saturday, 09:00 AM - 07:00 PM
                            </p>
                        </div>
                    </div>

                    <CityInternalLinks
                        city="lucknow"
                        currentSlug="/lucknow/small-supermarket-franchise-in-lucknow"
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