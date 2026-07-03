import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grocery Franchise with Supply Chain Support in Prayagraj | The Buyzaar Mart",
  description:
    "The Buyzaar Mart offers grocery franchise opportunities in Prayagraj with Mini Mart, Super Mart, and Hyper Mart formats, FOCO and FOCM models, centralized procurement, supply chain support, technology-enabled operations, and full franchise partner support.",
  url: "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-with-supply-chain-support-prayagraj",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Prayagraj",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Prayagraj",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Grocery Franchise Formats in Prayagraj",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Compact grocery franchise format designed for residential colonies, housing societies, and neighbourhood pockets in Prayagraj.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Mid-size grocery franchise format for market-facing and semi-commercial locations with broader product range in Prayagraj.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Large-format grocery franchise for high-footfall commercial locations designed as a one-stop grocery destination in Prayagraj.",
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
      name: "What franchise models are available in Prayagraj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCO and FOCM — both available with all three store formats.",
      },
    },
    {
      "@type": "Question",
      name: "What store formats can I choose from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mini Mart, Super Mart, and Hyper Mart — selected based on your location, budget, and target footfall.",
      },
    },
    {
      "@type": "Question",
      name: "Is supply chain support included in the franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — centralized procurement, vendor network, inventory management, replenishment planning, and logistics coordination are all part of the franchise package.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior experience in grocery retail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Buyzaar Mart provides complete training and operational onboarding before your store launches.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas in Prayagraj are best for a Buyzaar Mart store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Civil Lines, Naini, George Town, Jhusi, Phaphamau, Tagore Town, and other growing residential or commercial zones across the city.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum investment required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Investment varies by store format. Contact the Buyzaar Mart franchise team for a format-wise investment breakdown and ROI estimate.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a franchise in Prayagraj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reach out through The Buyzaar Mart official website or franchise inquiry form to start the consultation process.",
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
              Grocery Franchise with Supply Chain Support in Prayagraj — The Buyzaar Mart
            </h1>

            <p>
              Prayagraj is emerging as one of the most promising retail markets in Uttar Pradesh. With rapid urban expansion, a large and diverse consumer base, and growing demand for organized grocery retail, the city offers genuine business opportunity for investors who want to enter the FMCG and grocery sector. The Buyzaar Mart — a fast-growing grocery franchise brand operating across UP and NCR — is now offering franchise partnerships in Prayagraj with complete supply chain backing, operational support, and a proven business model.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Prayagraj is an Ideal Market for Grocery Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Prayagraj has a population of over 12 lakh residents spread across dense urban neighborhoods and rapidly developing outskirts.</li>
              <li>The city is a major educational hub — home to Allahabad University, MNNIT, and dozens of coaching institutes — creating a large student and hostel population with consistent grocery demand.</li>
              <li>As a religious and pilgrimage city, Prayagraj draws significant floating population throughout the year, especially during Magh Mela, Kumbh, and other religious events.</li>
              <li>The city is an important administrative and judicial center with a well-established middle-class and salaried population that actively prefers organized, hygienic retail.</li>
              <li>Areas like Naini, Civil Lines, Jhusi, Phaphamau, George Town, and Allahpur are witnessing rapid residential development — creating fresh demand zones for grocery retail.</li>
              <li>Organized retail penetration in Prayagraj is still relatively low compared to metros, meaning early franchise investors have a strong first-mover advantage.</li>
              <li>Real estate and rental costs in Prayagraj are significantly lower than Lucknow, Kanpur, or NCR — making store setup more affordable and improving return on investment.</li>
              <li>Daily grocery is a non-discretionary spend — customers buy regardless of season, festivals, or economic conditions, making it a recession-resistant business category.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Models Available in Prayagraj
            </h2>

            <h3 className="font-medium text-gray-900">FOCO — Franchise Owned, Company Operated</h3>
            <p>
              The franchisee invests in the store setup and infrastructure. Day-to-day operations, staffing, and store management are handled entirely by The Buyzaar Mart company team. This model is ideal for investors who want passive income from a grocery business without being present in operations daily. Returns are generated through revenue share or fixed return structures as per the agreement.
            </p>

            <h3 className="font-medium text-gray-900">FOCM — Franchise Owned, Company Managed</h3>
            <p>
              Similar to FOCO in terms of company involvement but with additional management flexibility for the franchisee. Suitable for investors who want some level of visibility and involvement without full operational responsibility. The company manages procurement, supply chain, and backend operations — the franchisee can oversee store-level activities as preferred.
            </p>

            <p>
              Both models are available across all three store formats in Prayagraj. The Buyzaar Mart team helps you choose the right model based on your investment capacity, time availability, and business goals.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats — Choose What Fits Your Location
            </h2>

            <h3 className="font-medium text-gray-900">Mini Mart (600-1000 sqft):</h3>
            <p>
              Compact store format designed for residential colonies, housing societies, and neighborhood pockets. Lower setup investment and smaller space requirement with a focused SKU range covering daily essentials — staples, packaged foods, personal care, and dairy. Faster breakeven due to lower operational costs. Best suited for areas like Tagore Town, Colonyganj, Mumfordganj, and similar residential pockets in Prayagraj.
            </p>

            <h3 className="font-medium text-gray-900">Super Mart (1000-3000 sqft): </h3>
            <p>
              Mid-size format for market-facing and semi-commercial locations. Broader product range including FMCG, beverages, snacks, household items, and more. Suitable for locations with moderate daily footfall such as main roads, market areas, and mixed residential-commercial zones. A good balance between investment size and revenue potential.
            </p>

            <h3 className="font-medium text-gray-900">Hyper Mart (3000-8000 sqft):</h3>
            <p>
              Large-format store for high-footfall commercial locations. Maximum product width — covers everything from staples and fresh produce to personal care, home care, and packaged foods. Designed to serve as a one-stop grocery destination for an entire neighborhood or market area. Suitable for prime locations like Civil Lines, George Town, Naini industrial belt, or major arterial roads in Prayagraj. Higher investment but also significantly higher revenue potential and brand visibility.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Supply Chain Support — What You Actually Get
            </h2>

            <p>
              One of the biggest challenges in running a grocery store independently is building and managing a reliable supply chain. The Buyzaar Mart solves this completely for its franchisees in Prayagraj.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li><span className="font-medium">Centralized Procurement System:</span> All products are sourced through a central procurement desk. Franchisees benefit from bulk purchasing rates negotiated at a chain level — pricing that no independent kirana or small supermarket can match. This reduces your cost of goods and directly improves store margins.</li>
              <li><span className="font-medium">Pre-Established Vendor Network:</span> Access to Buyzaar Mart&apos;s existing supplier relationships across all major FMCG categories — covering national brands as well as regional and private label products. No time wasted hunting for distributors, negotiating margins, or chasing deliveries from multiple vendors.</li>
              <li><span className="font-medium">Planned Inventory Replenishment:</span> Stock replenishment is scheduled and managed based on your store&apos;s sales data. Fast-moving products are restocked proactively — reducing the risk of stockouts. Slow-moving SKUs are identified and managed to avoid dead inventory.</li>
              <li><span className="font-medium">Centralized POS and Inventory Software:</span> Every Buyzaar Mart store operates on a unified billing and inventory management system with real-time visibility into stock levels, sales trends, and product movement. Reduces manual errors, theft, and wastage.</li>
              <li><span className="font-medium">Quality Assurance:</span> Since all sourcing flows through central procurement, every product on your shelf meets Buyzaar Mart&apos;s quality standards. No risk of fake, expired, or substandard products from unreliable local vendors.</li>
              <li><span className="font-medium">Logistics Coordination:</span> Inbound logistics from central warehouse or regional distribution points to your Prayagraj store is coordinated by the company — reducing the burden of managing transport, loading, and delivery timelines on the franchisee.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Location Opportunities Across Prayagraj
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li><span className="font-medium">Civil Lines &amp; Allahpur</span> — High-income residential and commercial zone; customers expect organized, well-stocked grocery retail; ideal for Super Mart or Hyper Mart format.</li>
              <li><span className="font-medium">Naini</span> — Large industrial and residential area; dense working-class and middle-class population with strong daily grocery demand; good for Mini Mart or Super Mart.</li>
              <li><span className="font-medium">George Town &amp; Chowk</span> — Historically dense commercial zones with very high daily footfall; suitable for high-visibility Super Mart or Hyper Mart.</li>
              <li><span className="font-medium">Jhusi</span> — Rapidly developing area across the Ganga; new residential colonies, limited organized retail; strong early-mover opportunity.</li>
              <li><span className="font-medium">Phaphamau</span> — Growing residential zone with minimal organized grocery options; compact Mini Mart or Super Mart format would perform well.</li>
              <li><span className="font-medium">Tagore Town, Colonyganj, Mumfordganj</span> — Established middle-class residential areas; steady daily demand; ideal for neighborhood Mini Mart format.</li>
              <li><span className="font-medium">Kareli, Bahadurganj, Lukerganj</span> — Dense urban pockets with kirana-dominated retail; an organized alternative with supply chain backing would draw customers quickly.</li>
            </ul>

            <p>
              The Buyzaar Mart franchise team conducts a location feasibility assessment before finalizing your store site — evaluating footfall, nearby competition, catchment area, and format suitability.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Training and Onboarding Support
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Complete store design, interior layout, and branding done as per Buyzaar Mart brand standards.</li>
              <li>Pre-launch staff hiring guidance and training on store operations, billing, and customer handling.</li>
              <li>Full onboarding on the POS and inventory management system before the store opens.</li>
              <li>Marketing and promotional support for the store launch — including local digital marketing, pamphlets, and in-store promotions.</li>
              <li>Dedicated relationship manager assigned for ongoing support post-launch.</li>
              <li>Regular performance reviews and business optimization inputs from the central team.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why The Buyzaar Mart vs Starting Independently
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Building a grocery store from scratch in Prayagraj means sourcing vendors yourself, negotiating margins, managing logistics, building brand awareness, and handling operations — all simultaneously.</li>
              <li>With Buyzaar Mart, the vendor network, supply chain, brand, and operating systems are already built — you plug in and start.</li>
              <li>Independent stores compete against both unorganized kirana and established organized retail with no differentiation; Buyzaar Mart gives you a recognized brand identity.</li>
              <li>Operational errors, stockouts, and vendor issues are far more frequent and costly for independent stores.</li>
              <li>Buyzaar Mart&apos;s proven model across multiple UP cities means the business risks are already tested and minimized before you invest.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What franchise models are available in Prayagraj?
                </h3>
                <p className="mt-2">
                  FOCO and FOCM — both available with all three store formats.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What store formats can I choose from?
                </h3>
                <p className="mt-2">
                  Mini Mart, Super Mart, and Hyper Mart — selected based on your location, budget, and target footfall.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Is supply chain support included in the franchise?
                </h3>
                <p className="mt-2">
                  Yes — centralized procurement, vendor network, inventory management, replenishment planning, and logistics coordination are all part of the franchise package.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need prior experience in grocery retail?
                </h3>
                <p className="mt-2">
                  No. The Buyzaar Mart provides complete training and operational onboarding before your store launches.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Which areas in Prayagraj are best for a Buyzaar Mart store?
                </h3>
                <p className="mt-2">
                  Civil Lines, Naini, George Town, Jhusi, Phaphamau, Tagore Town, and other growing residential or commercial zones across the city.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the minimum investment required?
                </h3>
                <p className="mt-2">
                  Investment varies by store format. Contact the Buyzaar Mart franchise team for a format-wise investment breakdown and ROI estimate.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How do I apply for a franchise in Prayagraj?
                </h3>
                <p className="mt-2">
                  Reach out through The Buyzaar Mart official website or franchise inquiry form to start the consultation process.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Grocery Franchise Journey in Prayagraj
              </h2>

              <p className="mb-4 text-gray-800">
                Prayagraj&apos;s growing consumer economy offers one of the most reliable opportunities for a branded grocery retail store with full supply chain backing.
              </p>

              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart franchise network and bring your neighborhood a modern daily needs store built on trust, convenience, and professional retail systems.
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
                <span className="font-semibold">Business Hours:</span> Monday to Saturday, 09:00 AM – 07:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="prayagraj"
            currentSlug="/prayagraj/grocery-franchise-with-supply-chain-support-in-prayagraj"
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