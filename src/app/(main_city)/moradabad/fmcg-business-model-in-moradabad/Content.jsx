import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FMCG Business in Moradabad, Uttar Pradesh | The Buyzaar Mart",
  description:
    "The Buyzaar Mart provides an FMCG business opportunity in Moradabad with organized retail systems, flexible franchise formats, supply chain support, technology, training, and complete brand assistance.",
  url: "https://www.thebuyzaarmart.com/moradabad/fmcg-business-model-in-moradabad",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Moradabad",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Moradabad",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart FMCG Franchise Formats in Moradabad",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600 to 1,000 square feet FMCG franchise format for residential colonies and neighbourhood markets in Moradabad.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1,000 to 3,000 square feet FMCG franchise format for busy commercial-residential zones in Moradabad.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3,000 square feet and above FMCG franchise format for high-footfall commercial areas in Moradabad.",
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
      name: "Is Moradabad a good city to start an FMCG business in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Rising population, income levels, and low organised retail penetration make it a strong emerging market.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum investment for a Buyzaar Mart franchise in Moradabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart format typically starts from ₹15 lakh to ₹20 lakh, depending on store size and location.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior retail experience to start this business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Buyzaar Mart provides full training, POS software, and ongoing operational support for first-time entrepreneurs.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the FOCM and FOCO models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM means the company manages daily operations, while FOCO suits investors who prefer a more passive, capital-driven role.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Moradabad are best suited for a new FMCG store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Growing residential zones like Kanth Road, Delhi Road, Majhola, and Ramganga Vihar currently offer strong, underserved demand.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to launch a franchise store after applying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Store setup and launch typically take a few weeks after documentation, depending on site readiness and format chosen.",
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
            <h1 className="mt-8 text-2xl font-medium text-gray-900 sm:text-3xl">
              FMCG Business in Moradabad, Uttar Pradesh: A Complete Opportunity
              Guide
            </h1>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Moradabad, popularly known as Peetal Nagri or the Brass City,
                has long been recognized as one of India&apos;s biggest
                handicraft export hubs.
              </li>
              <li>
                Beyond its brassware factories and international trade links,
                the city is becoming one of western Uttar Pradesh&apos;s
                promising markets for the FMCG business.
              </li>
              <li>
                Rising incomes, a growing middle class, and a shift away from
                unorganized kirana shopping are creating demand for structured
                and branded grocery retail.
              </li>
              <li>
                The Buyzaar Mart is positioned at the center of this organized
                retail shift.
              </li>
              <li>
                This guide explains why Moradabad is attracting FMCG
                entrepreneurs in 2026.
              </li>
              <li>
                It also covers the market&apos;s unique characteristics and how
                The Buyzaar Mart franchise model can support a long-term retail
                business.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Moradabad Is Emerging as a Strong FMCG Market
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Moradabad&apos;s urban population has crossed the 12 lakh mark.
              </li>
              <li>
                The wider district population is projected to reach nearly 58
                lakh by 2026.
              </li>
              <li>
                A well-placed store can access a large and steadily expanding
                customer base.
              </li>
              <li>
                The city&apos;s brass export economy generates employment and
                income across thousands of households.
              </li>
              <li>
                The economic network includes factory owners, artisans, and
                traders.
              </li>
              <li>
                This employment base directly supports household spending on
                groceries, packaged foods, and personal care products.
              </li>
              <li>
                Moradabad sits on National Highway 24 and is a major railway
                junction.
              </li>
              <li>
                Transport connections link the city with Delhi, Lucknow, and
                the wider Rohilkhand belt.
              </li>
              <li>
                Efficient connectivity supports bulk FMCG stocking and
                distribution.
              </li>
              <li>
                Rural and semi-urban buying patterns are shifting toward
                branded and hygienically packaged products.
              </li>
              <li>
                The shift is visible in packaged food, personal care, and home
                care categories.
              </li>
              <li>
                Digital payment adoption has grown across the city&apos;s
                markets.
              </li>
              <li>
                Organized retailers can operate transparent and cashless billing
                systems that build customer trust.
              </li>
              <li>
                Nearby towns such as Rampur, Amroha, Sambhal, Chandausi, and
                Bijnor contribute to Moradabad&apos;s commercial activity.
              </li>
              <li>
                These connected towns effectively widen the catchment area for
                an FMCG business based in Moradabad.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Understanding the FMCG Business Landscape in Moradabad
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The FMCG sector in India is projected to reach roughly ₹10.2
                lakh crore by 2026.
              </li>
              <li>
                The sector is growing at a compound annual rate of approximately
                9 to 11 percent.
              </li>
              <li>
                Tier-2 cities such as Moradabad are a major part of this
                expansion.
              </li>
              <li>
                Most daily grocery shopping in Moradabad still happens through
                small, unorganized kirana stores.
              </li>
              <li>
                Many of these stores lack consistent billing, standard pricing,
                and product freshness guarantees.
              </li>
              <li>
                This creates a clear gap for organized retail.
              </li>
              <li>
                Health and wellness products, OTC healthcare items, and
                functional beverages are among the fastest-growing FMCG
                categories in 2026.
              </li>
              <li>
                The same category trend is becoming visible in tier-2 markets as
                awareness of hygiene and nutrition increases.
              </li>
              <li>
                Packaged staples, snacks, dairy, and home care products remain
                the backbone of everyday FMCG demand.
              </li>
              <li>
                New stores need strong supplier relationships to remain
                competitively priced.
              </li>
              <li>
                Moradabad&apos;s export-driven economy has created a meaningful
                base of business families and working professionals.
              </li>
              <li>
                These customers often prefer the convenience, range, and billing
                transparency of a modern grocery store.
              </li>
              <li>
                Seasonal periods such as festivals and wedding season can
                increase local retail spending.
              </li>
              <li>
                Peak export months in the brass trade can also support higher
                retail activity.
              </li>
              <li>
                Organized FMCG stores can capture seasonal demand through
                planned inventory and promotional offers.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Key Localities in Moradabad Ideal for FMCG Retail
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Kanth Road and Delhi Road have high residential density and
                continuous new construction.
              </li>
              <li>
                These areas can suit a Mini Mart or Super Mart format targeting
                daily household needs.
              </li>
              <li>
                Civil Lines and Ramganga Vihar are established, higher-income
                residential pockets.
              </li>
              <li>
                Customers in these areas may actively seek branded and
                organized shopping experiences.
              </li>
              <li>
                Majhola and Pakbara are rapidly expanding residential colonies
                on the city&apos;s outskirts.
              </li>
              <li>
                These localities resemble the fresh, low-competition retail
                markets seen in new sectors of Faridabad and Lucknow.
              </li>
              <li>
                Thakurdwara and Chowk-area markets offer a dense commercial and
                residential mix.
              </li>
              <li>
                These markets can be suitable for a compact store format serving
                high daily footfall.
              </li>
              <li>
                Areas near industrial and brass-manufacturing units receive
                consistent worker and staff footfall.
              </li>
              <li>
                These locations can generate dependable demand for snacks,
                beverages, and daily essentials.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Challenges of Running an Independent FMCG Store in Moradabad
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Direct sourcing from FMCG brands and distributors requires
                strong negotiating relationships.
              </li>
              <li>
                Suppliers may also require volume commitments that are difficult
                for a single independent store to secure.
              </li>
              <li>
                Independent stores are responsible for inventory management,
                staff hiring, billing systems, pricing, and marketing.
              </li>
              <li>
                Managing all these functions at once makes independent retail a
                high-involvement business.
              </li>
              <li>
                Limited operational systems leave little room for error.
              </li>
              <li>
                Expired or damaged stock is a common loss point for independent
                grocery stores.
              </li>
              <li>
                Independent stores usually lack a structured buyback or return
                arrangement with suppliers.
              </li>
              <li>
                Marketing and customer acquisition are entirely the owner&apos;s
                responsibility.
              </li>
              <li>
                Building initial footfall and trust can take considerably
                longer without a recognized brand name.
              </li>
              <li>
                Scaling beyond one store is harder without established training,
                technology, and supply chain systems.
              </li>
              <li>
                These challenges limit the long-term growth potential of many
                independent grocery businesses.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why The Buyzaar Mart Franchise Model Works Better in Moradabad
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart addresses the common challenges of independent
                retail.
              </li>
              <li>
                The brand offers a structured and supported franchise system.
              </li>
              <li>
                Entrepreneurs do not need to build every business function from
                scratch.
              </li>
              <li>
                The franchise model combines organized sourcing, technology,
                training, marketing, and store operations.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Two Flexible Ownership Models
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                FOCM means Franchise Owned Company Managed.
              </li>
              <li>
                Under FOCM, The Buyzaar Mart manages daily store operations.
              </li>
              <li>
                This model is suited to first-time entrepreneurs who want to
                own a retail business without personally handling every daily
                operation.
              </li>
              <li>
                FOCO means Franchise Owned Company Operated.
              </li>
              <li>
                FOCO is designed for investors who prefer a more passive role.
              </li>
              <li>
                The investor provides capital and commercial space.
              </li>
              <li>
                The Buyzaar Mart team manages daily operations under the managed
                investment structure.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Three Store Formats to Match Different Localities
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Mini Mart requires approximately 600 to 1,000 square feet.
              </li>
              <li>
                Mini Mart is the most accessible entry point.
              </li>
              <li>
                It is ideal for residential colonies and neighbourhood markets
                across Majhola, Pakbara, and Ramganga Vihar.
              </li>
              <li>
                Super Mart requires approximately 1,000 to 3,000 square feet.
              </li>
              <li>
                Super Mart is suited to busier commercial-residential zones
                such as Kanth Road and Delhi Road.
              </li>
              <li>
                It provides a wider product range than the Mini Mart format.
              </li>
              <li>
                Hyper Mart requires approximately 3,000 square feet and above.
              </li>
              <li>
                Hyper Mart is best suited for high-footfall commercial belts.
              </li>
              <li>
                It offers the broadest FMCG assortment and strongest revenue
                potential among the three formats.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Built-In Advantages for Franchise Owners
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Direct sourcing partnerships with more than 50 FMCG brands
                support competitive procurement.
              </li>
              <li>
                Partner categories include personal care, home care, packaged
                foods, staples, snacks, and dairy.
              </li>
              <li>
                Network sourcing provides pricing that independent stores may
                struggle to match.
              </li>
              <li>
                An expired and damaged goods buyback guarantee protects
                franchise owners from a common inventory loss.
              </li>
              <li>
                Hyper-local marketing campaigns are tailored to the specific
                colony or sector where each store is located.
              </li>
              <li>
                Localized marketing helps new stores build footfall faster than
                generic city-wide advertising.
              </li>
              <li>
                Complete training makes the model accessible to first-time
                entrepreneurs.
              </li>
              <li>
                User-friendly POS billing software supports organized store
                operations.
              </li>
              <li>
                The Friendly Neighbourhood Store identity resonates with
                residential catchment areas across tier-2 cities such as
                Moradabad.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment and Growth Potential for FMCG Business in Moradabad
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A Mini Mart franchise typically starts from ₹15 lakh to ₹20
                lakh.
              </li>
              <li>
                This range generally applies to a 600 to 1,000 square feet
                store.
              </li>
              <li>
                The Mini Mart format is an accessible entry point for salaried
                individuals and first-time business owners.
              </li>
              <li>
                Franchise owners can generally expect an average profit margin
                of 18 to 20 percent on sales.
              </li>
              <li>
                Actual margins depend on store size, location, and monthly sales
                volume.
              </li>
              <li>
                Once one store becomes stable, the same systems can support
                expansion into other Moradabad localities.
              </li>
              <li>
                Franchisees may also explore nearby towns such as Rampur,
                Amroha, and Sambhal.
              </li>
              <li>
                Organized retail penetration remains relatively low in
                Moradabad and similar tier-2 cities.
              </li>
              <li>
                Early movers have an opportunity to establish strong local
                presence before the market becomes saturated.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Categories Driving FMCG Demand in Moradabad
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Packaged staples and groceries include branded atta, rice,
                pulses, and cooking oils.
              </li>
              <li>
                These products continue to see steady conversion from loose and
                unbranded alternatives.
              </li>
              <li>
                Personal and home care products from brands such as HUL and
                P&amp;G remain consistent movers across income segments.
              </li>
              <li>
                Health and wellness and OTC products include glucose sachets,
                pain relief balms, and hygiene products.
              </li>
              <li>
                These products can drive store footfall and additional basket
                purchases.
              </li>
              <li>
                Packaged foods and beverages include snacks, biscuits, and dairy
                products.
              </li>
              <li>
                Brands such as Britannia, Parle, Nestlé, and Amul remain
                everyday essentials across Moradabad households.
              </li>
              <li>
                Festive and seasonal demand rises during wedding seasons and
                local festivals.
              </li>
              <li>
                The brass trade calendar can also influence bulk grocery and
                gifting-related FMCG purchases.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Independent Kirana Store vs. Buyzaar Mart Franchise in Moradabad
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Sourcing at an independent kirana store requires negotiating
                with local distributors one product at a time.
              </li>
              <li>
                A Buyzaar Mart franchise connects directly with partnerships
                involving more than 50 national FMCG brands.
              </li>
              <li>
                This network can provide better margins and more consistent
                stock availability.
              </li>
              <li>
                A new independent store must build customer recognition from
                zero.
              </li>
              <li>
                A franchise store benefits from an established brand identity
                from day one.
              </li>
              <li>
                Brand recognition can shorten the time needed to reach stable
                daily footfall.
              </li>
              <li>
                Independent stores absorb the full cost of expired or damaged
                goods.
              </li>
              <li>
                The franchise buyback guarantee removes a large part of this
                recurring inventory risk.
              </li>
              <li>
                Independent store owners manage billing systems, staff, pricing,
                and promotions personally.
              </li>
              <li>
                The FOCM model shifts much of this daily operational burden to
                The Buyzaar Mart team.
              </li>
              <li>
                Scaling an independent store into additional outlets requires
                rebuilding processes each time.
              </li>
              <li>
                Franchise owners can replicate a proven system across Moradabad
                localities and nearby towns.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Future Outlook for FMCG Retail in Moradabad
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Moradabad&apos;s brass export economy continues to generate
                steady household income.
              </li>
              <li>
                Demand for convenient and trustworthy daily-needs shopping is
                expected to grow.
              </li>
              <li>
                Younger and working-age residents are likely to support this
                shift toward organized retail.
              </li>
              <li>
                New residential development on the city&apos;s outskirts is
                creating fresh retail catchments.
              </li>
              <li>
                Areas such as Majhola and Pakbara may open low-competition
                retail markets over the next few years.
              </li>
              <li>
                Similar residential expansion patterns have appeared in
                Lucknow and Faridabad.
              </li>
              <li>
                UPI and digital payments are becoming common across
                Moradabad&apos;s markets.
              </li>
              <li>
                Stores with organized and technology-enabled billing systems can
                better serve convenience-focused customers.
              </li>
              <li>
                The district&apos;s projected population growth toward nearly
                58 lakh by 2026 supports long-term demand.
              </li>
              <li>
                Early entrants can build stronger locality-level brand recall
                before competition increases.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Start Your FMCG Business in Moradabad with The Buyzaar Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Step 1: Visit{" "}
                <a
                  href="https://www.thebuyzaarmart.com"
                  className="text-green-600 hover:underline"
                >
                  www.thebuyzaarmart.com
                </a>{" "}
                and fill out the franchise inquiry form.
              </li>
              <li>
                Provide your name, contact details, preferred Moradabad
                locality, and available investment range.
              </li>
              <li>
                Step 2: The franchise team reviews your inquiry and discusses
                investment readiness.
              </li>
              <li>
                The proposed location is evaluated according to population
                density, purchasing capacity, and local demand.
              </li>
              <li>
                Step 3: Complete KYC verification and review the franchise
                agreement.
              </li>
              <li>
                The agreement outlines the chosen ownership model, investment
                structure, and revenue-sharing terms.
              </li>
              <li>
                Step 4: The Buyzaar Mart handles store design, opening
                inventory, staff training, and POS system setup.
              </li>
              <li>
                The store launch is supported with hyper-local marketing to
                build opening footfall.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Is Moradabad a good city to start an FMCG business in 2026?
                </h3>
                <p className="mt-2">
                  Yes. Rising population, income levels, and low organised
                  retail penetration make it a strong emerging market.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the minimum investment for a Buyzaar Mart franchise
                  in Moradabad?
                </h3>
                <p className="mt-2">
                  A Mini Mart format typically starts from ₹15 lakh to ₹20
                  lakh, depending on store size and location.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need prior retail experience to start this business?
                </h3>
                <p className="mt-2">
                  No. The Buyzaar Mart provides full training, POS software,
                  and ongoing operational support for first-time entrepreneurs.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the difference between the FOCM and FOCO models?
                </h3>
                <p className="mt-2">
                  FOCM means the company manages daily operations, while FOCO
                  suits investors who prefer a more passive, capital-driven
                  role.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Which areas of Moradabad are best suited for a new FMCG
                  store?
                </h3>
                <p className="mt-2">
                  Growing residential zones like Kanth Road, Delhi Road,
                  Majhola, and Ramganga Vihar currently offer strong,
                  underserved demand.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How long does it take to launch a franchise store after
                  applying?
                </h3>
                <p className="mt-2">
                  Store setup and launch typically take a few weeks after
                  documentation, depending on site readiness and format chosen.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your FMCG Business in Moradabad
              </h2>

              <p className="mb-4 text-gray-800">
                Explore the Buyzaar Mart franchise model and choose a store
                format suited to your investment capacity, preferred locality,
                and business goals.
              </p>

              <p className="mb-4 text-gray-800">
                Contact the franchise team for location evaluation, investment
                guidance, ownership model details, store setup support, and
                launch assistance.
              </p>

              <p className="mb-4 text-gray-800">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://www.thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                >
                  thebuyzaarmart.com
                </a>
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
          </div>

          <CityInternalLinks
            city="moradabad"
            currentSlug="/moradabad/fmcg-business-model-in-moradabad"
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
