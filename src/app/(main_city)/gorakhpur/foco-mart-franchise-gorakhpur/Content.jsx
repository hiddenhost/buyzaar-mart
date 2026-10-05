import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FOCO Mart Franchise in Gorakhpur | The Buyzaar Mart",
  description:
    "FOCO mart franchise in Gorakhpur from ₹15 Lakh. Compare Mini, Super and Hyper Mart formats. The Buyzaar Mart operates the store while you own it.",
  url: "https://www.thebuyzaarmart.com/gorakhpur/foco-mart-franchise-gorakhpur",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gorakhpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Gorakhpur",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart FOCO Mart Franchise Formats in Gorakhpur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "FOCO Mini Mart",
        description:
          "A Franchise Owned, Company Operated Mini Mart format in Gorakhpur for dense residential areas and neighbourhood markets, with 600 to 1,000 sq. ft. of space.",
      },
      {
        "@type": "Offer",
        name: "FOCO Super Mart",
        description:
          "A Franchise Owned, Company Operated Super Mart format in Gorakhpur for market areas and mixed-use zones, with 1,000 to 3,000 sq. ft. of space.",
      },
      {
        "@type": "Offer",
        name: "FOCO Hyper Mart",
        description:
          "A Franchise Owned, Company Operated Hyper Mart format in Gorakhpur for high-footfall locations, with 3,000 sq. ft. and above of commercial space.",
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
      name: "What is a FOCO mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You invest in and own a Buyzaar Mart store, and the company operates it.",
      },
    },
    {
      "@type": "Question",
      name: "Which mart format should I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your shop size, budget and catchment. Mini Mart suits 600 to 1,000 sq. ft.",
      },
    },
    {
      "@type": "Question",
      name: "How much do I need to invest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It starts from ₹15 Lakh, and a Mini Mart generally goes up to ₹22 Lakh.",
      },
    },
    {
      "@type": "Question",
      name: "What return is stated under FOCO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 10% revenue sharing on monthly sales. It is not guaranteed, so confirm the terms in writing.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need my own shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with at least 600 sq. ft. of carpet area.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The company's team handles daily operations.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill out the form at https://www.thebuyzaarmart.com or call 9217991727.",
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
              FOCO Mart Franchise in Gorakhpur
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Two Decisions, Not One
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Anyone considering a mart franchise in Gorakhpur makes two
                decisions: which ownership model to choose, and which store format
                fits the shop. FOCO, Franchise Owned, Company Operated, answers
                the first. Mini Mart, Super Mart, and Hyper Mart answer the
                second.
              </li>
              <li>
                Under FOCO you provide the capital and the premises, and The
                Buyzaar Mart operates the store, including staff salaries,
                electricity, inventory, marketing, and daily running. Franchise
                investment starts from ₹15 Lakh, and the stated return is about
                10% revenue sharing on monthly sales.
              </li>
              <li>
                This guide connects the two decisions. It shows how each mart
                format fits a company-operated model, how to match your shop size
                to a format, and what to confirm before signing.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FOCO Mart Franchise in Brief
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Ownership:</span> You hold the
                franchise and fund the store set-up.
              </li>
              <li>
                <span className="font-semibold">Operations:</span> The company
                runs the store day to day, so you do not need to be involved in
                staffing, stock, or billing.
              </li>
              <li>
                <span className="font-semibold">Premises:</span> You provide a
                suitable shop with at least 600 sq. ft. of carpet area.
              </li>
              <li>
                <span className="font-semibold">Return:</span> The stated return
                is about 10% revenue sharing on monthly sales. It is not
                guaranteed.
              </li>
              <li>
                <span className="font-semibold">Support:</span> POS billing,
                supply chain, training, launch marketing, and quality audits come
                with the brand&apos;s system.
              </li>
              <li>
                <span className="font-semibold">Stock protection:</span> The
                inventory assurance policy takes back expired and damaged goods.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Mart Formats Under FOCO
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart: The Accessible Entry
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Space:</span> 600 to 1,000 sq.
                ft., suited to dense residential areas and neighbourhood markets.
              </li>
              <li>
                <span className="font-semibold">Range:</span> Groceries, FMCG,
                dairy, personal care, and household products chosen for the
                highest-frequency daily needs.
              </li>
              
              <li>
                <span className="font-semibold">Best for:</span> Shop owners with
                a compact space who want a lower capital commitment.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart: The Mid-Size Supermarket
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Space:</span> 1,000 to 3,000 sq.
                ft., with more SKUs per category and a richer in-store experience.
              </li>
              <li>
                <span className="font-semibold">Best for:</span> Market areas and
                mixed-use zones where customers expect more choice and larger
                baskets.
              </li>
              <li>
                <span className="font-semibold">Investment:</span> Higher than a
                Mini Mart, depending on area, so request a site-specific written
                estimate.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart: The One-Stop Destination
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Space:</span> 3,000 sq. ft. and
                above, for high-footfall locations and larger investors.
              </li>
              <li>
                <span className="font-semibold">Range:</span> Groceries, bakery,
                dairy, fresh produce, beverages, frozen foods, stationery, toys,
                pet care, household items, and devotional products.
              </li>
              
            </ul>

            

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Matching Your Shop Size to a Format
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">600–1,000 sq. ft.:</span> A Mini
                Mart is the natural fit, with focused daily-need ranges and lower
                set-up cost.
              </li>
              <li>
                <span className="font-semibold">1,000–3,000 sq. ft.:</span> A
                Super Mart can be considered if the location supports larger
                baskets and wider choice.
              </li>
              <li>
                <span className="font-semibold">
                  3,000 sq. ft. and above:
                </span>{" "}
                A Hyper Mart becomes possible, but needs strong footfall to
                justify its scale.
              </li>
              <li>
                <span className="font-semibold">Below 600 sq. ft.:</span> The
                minimum carpet area requirement means the shop would not qualify
                without more space.
              </li>
              <li>
                <span className="font-semibold">Between formats:</span> If your
                shop sits near a boundary, ask the team which format suits your
                catchment better.
              </li>
            </ul>

            

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Returns Under FOCO: What 10% Revenue Sharing Means
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The stated return is about 10% revenue sharing on monthly sales,
                so a busier store generally means a larger return.
              </li>
              
              <li>
                Revenue sharing is based on sales, not profit, so ask exactly what
                the percentage applies to, how it is calculated, and when it is
                paid.
              </li>
              <li>
                A larger format can generate higher sales, but it also needs more
                capital and stronger footfall, so a bigger mart is not
                automatically better.
              </li>
              <li>
                Ask whether the agreement includes minimum return terms,
                deductions, or adjustment clauses, and get the answers in writing.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What the Company Operates in Your Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Staff:</span> Recruitment,
                training, supervision, and salaries.
              </li>
              <li>
                <span className="font-semibold">Inventory:</span> Procurement,
                replenishment, and stock planning for the format&apos;s
                assortment.
              </li>
              <li>
                <span className="font-semibold">Billing and data:</span>{" "}
                POS-enabled billing with sales tracking and inventory visibility.
              </li>
              <li>
                <span className="font-semibold">Marketing:</span> Hyper-local
                launch campaigns and neighbourhood promotions.
              </li>
              <li>
                <span className="font-semibold">Standards:</span> KPI tracking,
                quality audits, and brand consistency.
              </li>
              <li>
                <span className="font-semibold">Utilities:</span> Electricity
                costs, as stated for the FOCO model.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Category Mix by Format
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Mini Mart priorities:</span>{" "}
                Staples, oils, dairy, snacks, beverages, personal care, and
                cleaning products, because fast-moving essentials earn the most
                from limited space.
              </li>
              <li>
                <span className="font-semibold">Super Mart additions:</span> More
                brand choices per category, baby care, packaged foods, frozen
                items, and fresh produce where the format supports it.
              </li>
              <li>
                <span className="font-semibold">Hyper Mart additions:</span>{" "}
                Bakery, stationery, toys, pet care, and devotional items that make
                the store a one-stop destination.
              </li>
              <li>
                The brand allows product flexibility, so the mix can reflect
                Gorakhpur tastes, including festival and seasonal items.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Gorakhpur Suits a Company-Operated Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Gorakhpur had about 6.73 lakh residents in the 2011 Census, and
                municipal expansion later took the reported population beyond 10
                lakh, which supports steady daily grocery demand.
              </li>
              <li>
                The 91.35 km Gorakhpur Link Expressway and industrial growth
                around GIDA are improving connectivity and employment, which can
                support household spending over time.
              </li>
              <li>
                AIIMS Gorakhpur, medical colleges, and universities bring
                students, patients, and visitors from nearby districts and western
                Bihar, adding everyday demand.
              </li>
              <li>
                Many households still depend on traditional kirana stores, so a
                clean, branded mart with clear billing can stand out.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing the Location by Format
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Mini Mart:</span> Dense colonies
                around Rapti Nagar, Betiahata, Shahpur, and Taramandal offer
                steady household demand.
              </li>
              <li>
                <span className="font-semibold">Super Mart:</span> Market roads
                and junctions such as Golghar, Asuran Chowk, and Pipraich Road
                offer visibility and mixed footfall.
              </li>
              <li>
                <span className="font-semibold">Hyper Mart:</span> Large,
                high-visibility sites with parking and heavy traffic suit the
                scale of a one-stop store.
              </li>
              <li>
                <span className="font-semibold">Hospital and campus belts:</span>{" "}
                Areas near AIIMS and Medical College Road can add non-resident
                footfall for several formats.
              </li>
              <li>
                Check parking, frontage, nearby competitors, and lease terms, and
                use the company&apos;s site survey as a second opinion.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FOCO Mart & FOCM Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Operations:</span> In FOCO the
                company operates the store fully, while in FOCM you own it and the
                company manages operations under a five-year agreement.
              </li>
              <li>
                <span className="font-semibold">Your involvement:</span> FOCO
                suits those who want a hands-off role, and FOCM suits owners who
                want a supervisory role.
              </li>
              <li>
                <span className="font-semibold">Premises:</span> FOCO expects you
                to provide the premises, while FOCM can work with owned or rented
                shops.
              </li>
              <li>
                <span className="font-semibold">Returns:</span> FOCO is described
                with revenue sharing of about 10% on monthly sales, while FOCM
                returns come from the store&apos;s performance.
              </li>
              <li>
                Ask for a written list of who pays for what under each model before
                you choose.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Risks and Limitations
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Variable returns:</span>{" "}
                Revenue-linked returns move with sales, and nothing is guaranteed.
              </li>
              <li>
                <span className="font-semibold">Less control:</span> Daily
                decisions sit with the operator, so you rely on reporting and the
                company&apos;s management.
              </li>
              <li>
                <span className="font-semibold">Capital commitment:</span>{" "}
                Interiors, stock, and the franchise fee are a real investment, and
                exit terms matter.
              </li>
              <li>
                <span className="font-semibold">Location dependence:</span> Even a
                strong operator cannot fully offset a weak site.
              </li>
              <li>
                <span className="font-semibold">Format mismatch:</span> A store
                too large for its catchment carries unsold stock and higher costs.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Questions to Ask Before Signing
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Which formats are available under FOCO for my shop, and what is
                the total investment for each?
              </li>
              <li>
                What exactly does the 10% apply to, and when is it paid?
              </li>
              <li>
                What are the term, renewal, exit, and termination conditions?
              </li>
              <li>
                What happens to the interiors, equipment, and stock if the
                agreement ends?
              </li>
              <li>
                How often and in what format will I receive sales reports?
              </li>
              <li>
                Can I speak with existing partners or visit an operating store?
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Apply
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Step 1:</span> Submit the inquiry
                form at{" "}
                <a
                  href="https://www.thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                >
                  www.thebuyzaarmart.com
                </a>
                , call{" "}
                <a
                  href="tel:+919217991727"
                  className="font-semibold text-green-600 hover:underline"
                >
                  9217991727
                </a>
                , or email{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
                .
              </li>
              <li>
                <span className="font-semibold">Step 2:</span> Mention the FOCO
                model and share your shop size, location, and budget.
              </li>
              <li>
                <span className="font-semibold">Step 3:</span> Complete KYC, site
                review, and agreement review with your advisor.
              </li>
              <li>
                <span className="font-semibold">Step 4:</span> The company arranges
                set-up, POS, stocking, and training before launch.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What is a FOCO mart franchise?
                </h3>
                <p className="mt-2">
                  You invest in and own a Buyzaar Mart store, and the company
                  operates it.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Which mart format should I choose?
                </h3>
                <p className="mt-2">
                  It depends on your shop size, budget, and catchment. Mini Mart
                  suits 600–1,000 sq. ft.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How much do I need to invest?
                </h3>
                <p className="mt-2">
                  It starts from ₹15 Lakh, and a Mini Mart generally goes up to
                  ₹22 Lakh.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What return is stated under FOCO?
                </h3>
                <p className="mt-2">
                  About 10% revenue sharing on monthly sales. It is not
                  guaranteed, so confirm the terms in writing.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need my own shop?
                </h3>
                <p className="mt-2">
                  Yes, with at least 600 sq. ft. of carpet area.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No. The company&apos;s team handles daily operations.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How do I apply?
                </h3>
                <p className="mt-2">
                  Fill out the form at{" "}
                  <a
                    href="https://www.thebuyzaarmart.com"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    www.thebuyzaarmart.com
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:+919217991727"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    9217991727
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Explore a FOCO Mart Franchise in Gorakhpur
              </h2>

              <ul className="list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Own a Mini Mart, Super Mart, or Hyper Mart format while The
                  Buyzaar Mart runs staffing, inventory, POS billing, marketing,
                  utilities, and day-to-day store operations under the FOCO model.
                </li>
                <li>
                  Share your available commercial space, exact Gorakhpur location,
                  budget, and preferred ownership model for a site review and
                  format recommendation.
                </li>
                <li>
                  Investment begins from approximately ₹15 Lakh, subject to the
                  selected mart format, premises condition, site assessment, and
                  final agreement terms.
                </li>
              </ul>

              <p className="mb-4 mt-6 text-gray-800">
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
                <span className="font-semibold">Business Hours:</span> Monday to
                Saturday, 09:00 AM – 07:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="gorakhpur"
            currentSlug="/gorakhpur/foco-mart-franchise-gorakhpur"
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