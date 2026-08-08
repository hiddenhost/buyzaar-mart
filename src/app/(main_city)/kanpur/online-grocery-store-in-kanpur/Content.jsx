import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Online Grocery Store in Kanpur | The Buyzaar Mart",
    description:
        "The Buyzaar Mart offers an online-enabled grocery store franchise opportunity in Kanpur with Mini Mart, Super Mart, and Hyper Mart formats, FOCM and FOCO models, POS-enabled billing, CRM technology, organised procurement, and complete franchise partner support.",
    url: "https://www.thebuyzaarmart.com/kanpur/online-grocery-store-in-kanpur",
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
    openingHours: "Mo-Sa 09:00-19:00",
    priceRange: "₹₹",
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "The Buyzaar Mart Online-Enabled Grocery Store Formats in Kanpur",
        itemListElement: [
            {
                "@type": "Offer",
                name: "Mini Mart",
                description:
                    "An entry-level online-enabled grocery store format for smaller residential lanes, colony interiors, and compact neighbourhood spaces in Kanpur.",
            },
            {
                "@type": "Offer",
                name: "Super Mart",
                description:
                    "A full-service neighbourhood supermarket format for residential colonies and semi-commercial areas across Kanpur.",
            },
            {
                "@type": "Offer",
                name: "Hyper Mart",
                description:
                    "A large-format supermarket for high-traffic, high-visibility locations and major commercial corridors in Kanpur.",
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
            name: "What is the minimum investment to open a Buyzaar Mart store in Kanpur?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Investment starts from approximately fifteen lakh rupees under the FOCM model, depending on the selected format and location.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between FOCM and FOCO models?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "FOCM means the franchise partner owns the store while The Buyzaar Mart manages daily operations. FOCO means The Buyzaar Mart also handles staffing and full operations while the franchise partner earns a structured share of revenue.",
            },
        },
        {
            "@type": "Question",
            name: "Which store format is best for a small residential area in Kanpur?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The Mini Mart format is designed for smaller colony-interior spaces and lower-investment entry points.",
            },
        },
        {
            "@type": "Question",
            name: "Does The Buyzaar Mart support online-style customer engagement?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The POS and CRM technology used in every store supports stock tracking, loyalty activity, and localized digital promotions.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need prior retail experience to open a store?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Comprehensive training on POS systems, store operations, and customer service is provided before launch.",
            },
        },
        {
            "@type": "Question",
            name: "How long does the franchise agreement last?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The FOCM agreement runs for five years with renewal support, while the FOCO agreement is structured for ten years.",
            },
        },
        {
            "@type": "Question",
            name: "Which areas in Kanpur are best suited for a Super Mart or Hyper Mart?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Super Mart suits areas like Govind Nagar, Kidwai Nagar, and Kalyanpur, while Hyper Mart suits high-footfall zones like Civil Lines, Mall Road, and Kakadeo.",
            },
        },
    ],
};

const Content = () => {
    return (
        <div className="min-h-screen bg-white pt-0">
            <title>
                Online Grocery Store in Kanpur | The Buyzaar Mart Franchise Opportunity
            </title>

            <meta
                name="description"
                content="Discover The Buyzaar Mart&apos;s online-enabled grocery store opportunity in Kanpur. Explore Mini Mart, Super Mart, Hyper Mart formats, investment, and technology support."
            />

            <meta
                name="keywords"
                content="online grocery store Kanpur, Buyzaar Mart Kanpur, grocery franchise Kanpur, POS enabled grocery store, Mini Mart Super Mart Hyper Mart Kanpur, FOCM FOCO franchise Kanpur, grocery store investment Kanpur, online grocery store in Kanpur, online grocery shopping in Kanpur, online grocery delivery in Kanpur, grocery delivery in Kanpur, grocery home delivery in Kanpur, buy grocery online in Kanpur, grocery shopping online Kanpur, online supermarket in Kanpur, online grocery shop in Kanpur, best online grocery store in Kanpur, best online grocery shopping in Kanpur, best grocery delivery in Kanpur, grocery delivery near me Kanpur, online grocery near me Kanpur, order groceries online Kanpur, grocery products online Kanpur, buy groceries online Kanpur, online daily needs store Kanpur, daily essentials online Kanpur, daily needs online Kanpur, fresh grocery delivery Kanpur, online fruits and vegetables Kanpur, monthly grocery shopping online Kanpur, doorstep grocery delivery Kanpur, same day grocery delivery Kanpur"
            />

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
                            Online Grocery Store in Kanpur — The Buyzaar Mart Franchise
                            Opportunity
                        </h1>

                        <p>
                            Most grocery retail in Kanpur still happens through fragmented,
                            unbranded kirana stores that lack technology, consistent pricing,
                            and a reliable online ordering option. Rising smartphone usage and digital payment adoption across
                            Kanpur&apos;s neighbourhoods have created growing consumer
                            expectations for online browsing, ordering, and doorstep
                            convenience alongside in-store shopping.
                        </p>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Why Kanpur Is Ready for an Organised Online-Enabled Grocery Store
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Most grocery retail in Kanpur still happens through fragmented,
                                unbranded kirana stores that lack technology, consistent
                                pricing, and a reliable online ordering option.
                            </li>
                            <li>
                                Rising smartphone usage and digital payment adoption across
                                Kanpur&apos;s neighbourhoods have created growing consumer
                                expectations for online browsing, ordering, and doorstep
                                convenience alongside in-store shopping.
                            </li>
                            <li>
                                Working professionals, dual-income households, and students in
                                Kanpur increasingly prefer stores that combine a physical
                                neighbourhood presence with the option to check stock, place
                                orders, or reach out online before visiting.
                            </li>
                            <li>
                                Organised retail penetration in Kanpur remains relatively low
                                compared to its true potential, creating a strong first-mover
                                advantage for a branded, technology-enabled grocery store
                                entering the market now.
                            </li>
                            <li>
                                An online-enabled grocery store model bridges the trust of a
                                physical neighbourhood outlet with the convenience modern
                                Kanpur shoppers are beginning to expect from daily essentials
                                retail.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            About The Buyzaar Mart&apos;s Store and Technology Model
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                The Buyzaar Mart is one of India&apos;s fastest-growing
                                supermarket franchise networks, built on value, trust, and
                                everyday demand across urban and semi-urban households.
                            </li>
                            <li>
                                Every Buyzaar Mart store operates with a modern POS-enabled
                                billing system that manages billing, inventory, and sales
                                visibility in real time, reducing dependence on manual
                                processes.
                            </li>
                            <li>
                                A built-in CRM layer helps store owners understand local buying
                                behaviour, run loyalty activity, and build repeat customer
                                relationships over time.
                            </li>
                            <li>
                                This technology backbone allows a Buyzaar Mart outlet in Kanpur
                                to function as more than a traditional shop, supporting
                                organised inventory tracking, customer data, and localized
                                promotional outreach.
                            </li>
                            <li>
                                The brand&apos;s product range spans grocery and staples, dairy
                                and bakery, personal care, beverages, snacks, household
                                essentials, fresh produce, frozen foods, and stationery, giving
                                customers a genuine one-stop shopping destination.
                            </li>
                            <li>
                                Wide product range, affordable and value-conscious pricing,
                                POS-enabled billing, CRM-driven customer relationships, uniform
                                branding, and localized product flexibility together define the
                                Buyzaar Mart store experience.
                            </li>
                            <li>
                                The brand is FSSAI licensed, GST registered, and MSME certified,
                                giving Kanpur customers and franchise partners institutional
                                credibility from day one.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Franchise Models Behind Every Buyzaar Mart Store in Kanpur
                        </h2>

                        <h3 className="font-medium text-gray-900">
                            FOCM – Franchise Owned, Company Managed
                        </h3>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                The franchise partner invests in the store setup and owns the
                                outlet, while The Buyzaar Mart&apos;s team manages daily
                                operations, technology, and standard operating procedures.
                            </li>
                            <li>
                                This model includes complete pre-launch support, licensed use of
                                the brand&apos;s trademark and identity, POS technology
                                deployment, staff training, and hyper-local marketing campaigns
                                for the Kanpur location.
                            </li>
                            <li>
                                The FOCM agreement runs for a term of five years, with renewal
                                support available at the end of the period.
                            </li>
                            <li>
                                Investment for this model starts from approximately fifteen
                                lakh rupees, depending on the chosen store format and location.
                            </li>
                        </ul>

                        <h3 className="font-medium text-gray-900">
                            FOCO – Franchise Owned, Company Operated
                        </h3>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                The franchise partner provides the retail space and capital,
                                while The Buyzaar Mart manages staffing, salaries, marketing,
                                daily operations, supply chain, and merchandising entirely.
                            </li>
                            <li>
                                This model is best suited to investors with commercial property
                                in Kanpur, salaried professionals, retired individuals, NRIs, or
                                anyone seeking a more hands-off retail business structure.
                            </li>
                            <li>
                                Under FOCO, the franchise partner earns a structured share of
                                the store&apos;s monthly revenue rather than being involved in
                                daily management.
                            </li>
                            <li>
                                The FOCO agreement is structured for a longer ten-year term,
                                offering extended continuity for investors.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Store Formats Available for a Buyzaar Mart Outlet in Kanpur
                        </h2>

                        <h3 className="font-medium text-gray-900">Mini Mart</h3>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                The entry-level format, covering 600 to 1,000 square feet, is
                                suited to smaller residential lanes, colony interiors, and
                                lower-investment entry points.
                            </li>
                            <li>
                                It functions as a convenient daily top-up store for immediate
                                neighbourhood needs and is ideal for compact spaces within
                                dense residential pockets.
                            </li>
                            <li>
                                Mini Mart represents the lowest-investment way to bring an
                                organised, technology-enabled grocery store into a Kanpur
                                neighbourhood.
                            </li>
                        </ul>

                        <h3 className="font-medium text-gray-900">Super Mart</h3>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Super Mart is a full-service neighbourhood supermarket,
                                typically requiring 1,001 to 3,000 square feet of carpet area.
                            </li>
                            <li>
                                It offers a broad range of products across grocery and staples,
                                dairy and bakery, personal care, beverages, snacks, household
                                essentials, fresh produce, frozen foods, and stationery.
                            </li>
                            <li>
                                This format is best suited to urban families, working
                                households, and daily shoppers in residential colonies and
                                semi-commercial zones.
                            </li>
                            <li>
                                Strong locations for this format in Kanpur include Govind
                                Nagar, Kidwai Nagar, Kalyanpur, Armapur Estate, Shyam Nagar,
                                Rama Devi, Rawatpur, and Vikas Nagar.
                            </li>
                            <li>
                                Super Mart supports a high-repeat customer base, helping
                                generate consistent daily revenue from a loyal local community.
                            </li>
                        </ul>

                        <h3 className="font-medium text-gray-900">Hyper Mart</h3>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Hyper Mart is the largest and most comprehensive format,
                                generally spanning 3,000 to 8,000 square feet of carpet area.
                            </li>
                            <li>
                                It is designed for high-traffic, high-visibility locations,
                                offering everything in the Super Mart range plus expanded fresh
                                produce, frozen foods, personal care, home care, toys,
                                devotional items, pet care, and specialty categories.
                            </li>
                            <li>
                                This format is best suited to large families, bulk shoppers,
                                monthly grocery buyers, and customers seeking a true one-stop
                                shopping destination.
                            </li>
                            <li>
                                Strong locations for this format in Kanpur include Civil Lines,
                                Mall Road, Kakadeo, Swaroop Nagar, areas near educational
                                institutions, major residential townships, and high-footfall
                                commercial corridors.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Investment and Area Requirements Across All Formats
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Total investment for a Buyzaar Mart store in Kanpur depends on
                                the format selected, its carpet area, and the specific location
                                within the city.
                            </li>
                            <li>
                                The Mini Mart format offers the most accessible entry point
                                among all three formats, suited to smaller colony-interior
                                spaces and modest investment budgets.
                            </li>
                            <li>
                                The Super Mart format, requiring 1,001 to 3,000 square feet,
                                sits at the mid-tier investment level, balancing store size
                                with strong revenue potential in dense residential zones.
                            </li>
                            <li>
                                The Hyper Mart format, requiring 3,000 to 8,000 square feet,
                                involves the highest investment among the three, reflecting its
                                larger footprint and expanded product assortment.
                            </li>
                            <li>
                                Across all formats, investment starts from approximately fifteen
                                lakh rupees under the FOCM model, covering store setup,
                                branding, technology, opening stock, and franchise fees.
                            </li>
                            <li>
                                The brand notes an effective gross margin of 18 to 20 percent as
                                part of its proposition, supported by organised procurement and
                                category planning across the grocery and FMCG business.
                            </li>
                            <li>
                                Prospective franchise partners are encouraged to request a
                                detailed, location-specific investment breakdown from The
                                Buyzaar Mart team based on their preferred Kanpur neighbourhood
                                and store format.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            How Technology Powers the Online-Enabled Shopping Experience
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                The POS-enabled billing system used in every Buyzaar Mart store
                                tracks sales, stock levels, and transactions in real time,
                                giving store owners accurate, up-to-date business visibility.
                            </li>
                            <li>
                                The CRM layer captures customer buying behaviour, enabling
                                loyalty activity, repeat-purchase tracking, and personalized
                                local promotions rather than generic, one-size-fits-all
                                marketing.
                            </li>
                            <li>
                                Performance dashboards and KPI reporting give franchise
                                partners a clear, technology-driven view of how their Kanpur
                                store is performing at any given time.
                            </li>
                            <li>
                                This technology foundation positions a Buyzaar Mart outlet to
                                support online-style customer engagement, including order
                                inquiries, stock checks, and digital promotions, alongside its
                                physical, walk-in retail presence.
                            </li>
                            <li>
                                Hyper-local digital and offline marketing campaigns are designed
                                specifically for each Kanpur store location, helping build
                                awareness and repeat footfall from the surrounding catchment.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Product Range Customers Can Expect In-Store and Online
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Grocery and staples, including atta, rice, dal, cooking oil,
                                sugar, salt, and spices, form the daily-repeat foundation of
                                the product range.
                            </li>
                            <li>
                                Dairy and bakery items, including milk, curd, butter, paneer,
                                bread, and baked goods, drive frequent, high-footfall visits
                                throughout the week.
                            </li>
                            <li>
                                Personal care and household essentials, including soaps,
                                shampoos, detergents, and cleaning products, support consistent
                                basket-building on every visit.
                            </li>
                            <li>
                                Beverages, snacks, and packaged foods add strong margins and
                                fast-moving sales volume to the overall product mix.
                            </li>
                            <li>
                                Larger-format stores extend this range further with fresh
                                produce, frozen foods, stationery, toys, devotional items, and
                                pet care essentials for a genuine one-stop shopping experience.
                            </li>
                            <li>
                                Product mix and pricing strategy are adapted to Kanpur&apos;s
                                local shopping patterns and seasonal preferences, since the
                                franchise model allows flexibility within the overall brand
                                structure.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Support Provided to Franchise Partners in Kanpur
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                Pre-launch support includes a site survey, location feasibility
                                assessment, store format recommendation, complete interior and
                                branding setup, and franchise agreement execution with
                                compliance support.
                            </li>
                            <li>
                                Technology support includes POS billing system deployment,
                                performance dashboards, KPI monitoring tools, and full Standard
                                Operating Procedure documentation.
                            </li>
                            <li>
                                Supply chain support includes opening stock recommendations
                                tailored to the local Kanpur neighbourhood, replenishment
                                guidelines, procurement coordination, and hassle-free handling
                                of expired or damaged goods.
                            </li>
                            <li>
                                Marketing support includes grand store launch campaigns,
                                hyper-local digital and offline promotions, ongoing brand
                                assets, and customer acquisition strategies to build consistent
                                footfall.
                            </li>
                            <li>
                                Training and ongoing support include comprehensive initial
                                training for the franchise partner and staff, covering POS
                                systems, store operations, and customer service, along with
                                periodic operational audits and dedicated technical support.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            How to Start a Buyzaar Mart Franchise in Kanpur
                        </h2>

                        <ul className="list-disc space-y-2 pl-6">
                            <li>
                                The process begins by visiting the official Buyzaar Mart
                                website and submitting a franchise inquiry form with contact
                                details and preferred Kanpur location.
                            </li>
                            <li>
                                The brand team follows up to discuss investment goals,
                                preferred location, and recommends the most suitable model and
                                store format for the applicant&apos;s situation.
                            </li>
                            <li>
                                Applicants then proceed with KYC verification, legal
                                documentation, and franchise agreement signing, with full
                                compliance support provided throughout.
                            </li>
                            <li>
                                The brand handles store setup, including interior work,
                                branding, POS installation, inventory stocking, and staff
                                training.
                            </li>
                            <li>
                                The store is then launched with a dedicated local marketing
                                campaign designed to maximise visibility and customer
                                acquisition from day one.
                            </li>
                        </ul>

                        <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
                            Frequently Asked Questions
                        </h2>

                        <div className="mt-4 space-y-4">
                            <div>
                                <h3 className="font-medium text-gray-900">
                                    What is the minimum investment to open a Buyzaar Mart store
                                    in Kanpur?
                                </h3>
                                <p className="mt-2">
                                    Investment starts from approximately fifteen lakh rupees
                                    under the FOCM model, depending on format and location.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    What is the difference between FOCM and FOCO models?
                                </h3>
                                <p className="mt-2">
                                    FOCM means the franchise partner owns the store while the
                                    brand manages daily operations. FOCO means the brand also
                                    handles staffing and full operations while the partner earns
                                    a revenue share.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    Which store format is best for a small residential area in
                                    Kanpur?
                                </h3>
                                <p className="mt-2">
                                    The Mini Mart format is designed for smaller colony-interior
                                    spaces and lower-investment entry points.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    Does The Buyzaar Mart support online-style customer
                                    engagement?
                                </h3>
                                <p className="mt-2">
                                    Yes. The POS and CRM technology used in every store supports
                                    stock tracking, loyalty activity, and localized digital
                                    promotions.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    Do I need prior retail experience to open a store?
                                </h3>
                                <p className="mt-2">
                                    No. Comprehensive training on POS systems, operations, and
                                    customer service is provided before launch.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    How long does the franchise agreement last?
                                </h3>
                                <p className="mt-2">
                                    The FOCM agreement runs for five years with renewal support,
                                    while the FOCO agreement is structured for ten years.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-900">
                                    Which areas in Kanpur are best suited for a Super Mart or
                                    Hyper Mart?
                                </h3>
                                <p className="mt-2">
                                    Super Mart suits areas like Govind Nagar, Kidwai Nagar, and
                                    Kalyanpur, while Hyper Mart suits high-footfall zones like
                                    Civil Lines, Mall Road, and Kakadeo.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
                            <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                                Start Your Online-Enabled Grocery Store Franchise in Kanpur
                            </h2>

                            <ul className="list-disc space-y-2 pl-6 text-gray-800">
                                <li>
                                    Kanpur&apos;s growing urban population, strong daily grocery
                                    demand, and increasing preference for digital convenience
                                    create a promising opportunity for a technology-enabled
                                    Buyzaar Mart store.
                                </li>
                                <li>
                                    Join The Buyzaar Mart franchise network and bring Kanpur
                                    customers a modern grocery shopping experience supported by
                                    reliable products, organised operations, online-style
                                    engagement, and professional retail systems.
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
                                    <span className="font-semibold">Business Hours:</span>{" "}
                                    Monday to Saturday, 09:00 AM – 07:00 PM
                                </li>
                            </ul>
                        </div>
                    </div>

                    <CityInternalLinks
                        city="kanpur"
                        currentSlug="/kanpur/online-grocery-store-in-kanpur"
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