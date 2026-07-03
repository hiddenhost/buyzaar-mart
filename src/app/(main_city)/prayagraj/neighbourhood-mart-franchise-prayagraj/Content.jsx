import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Neighbourhood Mart Franchise in Prayagraj",
  description:
    "The Buyzaar Mart neighbourhood mart franchise in Prayagraj is designed for residential localities with a focused product range, centralized supply chain support, and company-managed operations.",
  url: "https://www.thebuyzaarmart.com/prayagraj/neighbourhood-mart-franchise-prayagraj",
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
    name: "Buyzaar Mart Neighbourhood Mart Franchise Formats in Prayagraj",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Neighbourhood-focused format designed for compact residential colony locations and daily-use grocery demand.",
      },
      {
        "@type": "Offer",
        name: "FOCO Model",
        description:
          "Franchise Owned, Company Operated model for passive, locally rooted ownership.",
      },
      {
        "@type": "Offer",
        name: "FOCM Model",
        description:
          "Franchise Owned, Company Managed model with company-led operations and franchisee visibility.",
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
      name: "What is a neighbourhood mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A grocery store format designed to serve a residential colony's daily shopping needs, offering proximity, reliability, and a focused product range.",
      },
    },
    {
      "@type": "Question",
      name: "Which Buyzaar Mart format suits a neighbourhood mart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Mini Mart format is specifically suited for neighbourhood and colony-level locations.",
      },
    },
    {
      "@type": "Question",
      name: "What is the investment required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Mini Mart format starts at ₹15,25,000, covering setup, inventory, technology, and marketing.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to manage the store daily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Under FOCO or FOCM, The Buyzaar Mart's team manages daily operations.",
      },
    },
    {
      "@type": "Question",
      name: "Which Prayagraj neighborhoods suit this format best?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tagore Town, Colonyganj, Allahpur, Mumfordganj, Jhusi, and Phaphamau are strong options.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a neighbourhood mart franchise in Prayagraj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact The Buyzaar Mart through their website or call to begin the consultation process.",
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
              Neighbourhood Mart Franchise in Prayagraj — The Buyzaar Mart
            </h1>

            <p>
              Every locality in Prayagraj has a daily rhythm built around its nearest grocery shop — the place residents walk to for milk in the morning, snacks in the evening, and forgotten essentials in between. Most of these neighbourhood touchpoints today are unorganized kirana shops with inconsistent stock and no standardized pricing. The Buyzaar Mart&apos;s neighbourhood mart franchise model is designed to take over exactly this role in a Prayagraj locality — but as an organized, branded, supply-chain-backed store that residents can rely on every single day. Here is a complete look at what a neighbourhood mart franchise means, why it works in Prayagraj, and how to start one, explained in points.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Makes a Neighbourhood Mart Different
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>A neighbourhood mart is a grocery store specifically positioned to serve the daily, walkable catchment of a residential colony, society, or close-knit locality — not a destination store that customers travel across the city to visit.</li>
              <li>Its core value proposition is proximity and reliability — residents shop there because it is close, consistently stocked, and trustworthy, not because of occasional promotions.</li>
              <li>Unlike a market-facing Super Mart or Hyper Mart, a neighbourhood mart focuses on a tighter, more frequently purchased product range — daily essentials that get bought multiple times a week rather than the full breadth of a large-format store.</li>
              <li>The business model depends on repeat, high-frequency visits from a relatively small, defined catchment area rather than high one-time transaction volumes from passing footfall.</li>
              <li>This format suits Prayagraj&apos;s residential character extremely well, given how many of its neighborhoods — from Tagore Town to Phaphamau — are built around close, walkable community structures.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why the Format Suits Prayagraj
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Prayagraj&apos;s residential areas — Civil Lines, Allahpur, Naini, Tagore Town, Colonyganj, Mumfordganj, and the developing colonies in Jhusi and Phaphamau — are largely structured around close-knit neighborhoods rather than sprawling commercial corridors.</li>
              <li>Most of these localities currently depend on one or two small kirana shops for daily needs, with no organized alternative offering consistent pricing, hygiene, or product range.</li>
              <li>The city&apos;s residents — families, working professionals, students in hostels and PGs — all generate consistent daily demand for a nearby grocery store rather than occasional bulk shopping trips to distant supermarkets.</li>
              <li>Prayagraj&apos;s growing outer colonies, particularly around the ring road and expressway belt, are expanding faster than organized retail is following, leaving a visible gap for a neighbourhood-focused format to fill early.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Buyzaar Mart&apos;s Model
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>The Buyzaar Mart&apos;s Mini Mart format is specifically built as the neighbourhood mart option within its franchise system — sized and stocked for residential colony locations rather than large commercial zones.</li>
              <li>It is designed to fit smaller commercial spaces typically available in colony markets, housing society commercial units, or ground-floor shops within residential lanes.</li>
              <li>The product range is curated around what a typical household actually buys multiple times a week — staples, dairy, packaged foods, personal care, and household essentials — rather than the wider, less frequently purchased categories found in larger formats.</li>
              <li>Despite the smaller footprint, the store still operates on Buyzaar Mart&apos;s full centralized supply chain and technology systems, meaning a neighbourhood mart customer gets the same quality assurance and pricing consistency as a customer at a larger Buyzaar Mart store elsewhere in the city.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why It Builds Loyalty
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Proximity-driven shopping habits are sticky — once a household adopts a nearby store as their default grocery destination, switching away requires real inconvenience, giving neighbourhood marts a natural retention advantage.</li>
              <li>Daily or near-daily visits create more touchpoints between the store and the customer than a destination-style supermarket visited occasionally, building familiarity and trust faster.</li>
              <li>Store staff in a neighbourhood mart often recognize regular customers, creating a more personal shopping experience that mirrors the relationship customers historically had with trusted local kirana shop owners — but backed by organized, consistent service.</li>
              <li>Word-of-mouth spreads quickly within a residential community, meaning a well-run neighbourhood mart often grows its customer base organically through neighbours recommending it to each other.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Models for a Neighbourhood Mart
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>FOCO stands for Franchise Owned, Company Operated: The investor owns the neighbourhood store and franchise rights, while The Buyzaar Mart&apos;s team manages all daily operations — ideal for those who want a passive, locally-rooted income asset without active involvement.</li>
              <li>FOCM stands for Franchise Owned, Company Managed: A similar ownership structure with added flexibility for the franchisee to stay periodically involved in store-level decisions while the company still manages the operational backbone.</li>
              <li>Both models suit neighbourhood mart franchisees in Prayagraj, since the smaller format does not require the franchisee to be more hands-on than they would be with a larger store — operational support scales appropriately to the format.</li>
              <li>The franchise agreement runs for a 5-year term with clearly defined revenue sharing and responsibilities, giving local investors a structured, predictable business relationship.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What a Buyzaar Mart Store Stocks
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Staple groceries — rice, wheat, flour, pulses, sugar, salt, edible oils, and spices that form the backbone of daily household cooking needs.</li>
              <li>Dairy products — milk, curd, butter, paneer, and other items that residents typically buy fresh and frequently from the nearest store.</li>
              <li>Packaged foods and snacks — biscuits, namkeen, instant foods, and other items suited to quick, frequent purchases.</li>
              <li>Personal care and hygiene essentials — soaps, shampoos, toothpaste, and similar daily-use items.</li>
              <li>Household basics — detergents, cleaning supplies, and other home essentials residents prefer to pick up locally rather than plan a separate shopping trip for.</li>
              <li>The exact product mix is calibrated to the specific neighbourhood&apos;s purchasing patterns, since a colony with more families will skew differently from one with a higher concentration of students or working professionals.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment Required
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>The Mini Mart format — Buyzaar Mart&apos;s neighbourhood mart option — starts at ₹15,25,000, covering franchise rights, store interior and setup, opening inventory, technology infrastructure, and launch marketing.</li>
              <li>This is the lowest investment tier across Buyzaar Mart&apos;s formats, reflecting the smaller commercial space and more focused product range typical of a neighbourhood store.</li>
              <li>Prayagraj&apos;s relatively affordable real estate, particularly in residential colony markets compared to main commercial roads, keeps the overall setup cost manageable.</li>
              <li>Franchisees who already own or have access to a small commercial unit within their own residential colony can reduce upfront investment further by eliminating lease costs.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Best Neighbourhoods in Prayagraj
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Tagore Town and Colonyganj are established residential pockets with a steady, defined local population ideal for a recurring-visit neighbourhood mart.</li>
              <li>Allahpur is a mixed residential zone with consistent local demand and a manageable, walkable catchment.</li>
              <li>Mumfordganj is a mid-segment residential area where a dependable local grocery store is currently underserved.</li>
              <li>Jhusi and Phaphamau are rapidly growing residential colonies where new households are actively forming their default shopping habits, making early entry particularly valuable.</li>
              <li>Kareli and Bahadurganj are dense urban residential pockets where strong local footfall supports a compact neighbourhood format efficiently.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step: Starting a Franchise
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Step 1 — Inquiry: Reach out to The Buyzaar Mart with your investment budget and interest in opening a neighbourhood mart in a specific Prayagraj locality.</li>
              <li>Step 2 — Consultation: Discuss your preferred neighbourhood, available commercial space, and whether FOCO or FOCM suits your involvement preference.</li>
              <li>Step 3 — Catchment Assessment: The Buyzaar Mart team evaluates the residential density, existing competition, and footfall pattern of your chosen locality.</li>
              <li>Step 4 — Agreement: Sign the franchise agreement covering investment terms, revenue sharing, and a 5-year tenure.</li>
              <li>Step 5 — Store Setup: Interior design, shelving, signage, and branding are completed by the company, suited to the smaller neighbourhood format.</li>
              <li>Step 6 — Staffing: Store staff are recruited and trained before launch, ensuring familiarity with local customer needs.</li>
              <li>Step 7 — Supply Chain Activation: Your store connects to centralized procurement, giving immediate access to bulk pricing and reliable restocking.</li>
              <li>Step 8 — Launch: Hyperlocal marketing specifically targeted at your residential catchment builds initial footfall among nearby households.</li>
              <li>Step 9 — Ongoing Growth: As the store becomes a recognized local fixture, performance reviews help refine stock and identify whether expansion to a second neighbourhood location makes sense.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose This Format
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Lower investment requirement makes it accessible to a wider range of first-time investors compared to Super Mart or Hyper Mart formats.</li>
              <li>Smaller, more predictable catchment means demand forecasting and inventory management are simpler, reducing the operational complexity for a new franchisee.</li>
              <li>Strong customer loyalty built through daily proximity reduces dependence on constant marketing spend to maintain footfall, unlike larger destination-style stores.</li>
              <li>Faster breakeven timeline due to lower setup costs and a more focused, efficiently managed product range.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What is a neighbourhood mart franchise?
                </h3>
                <p className="mt-2">
                  A grocery store format designed to serve a residential colony&apos;s daily shopping needs, offering proximity, reliability, and a focused product range.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Which Buyzaar Mart format suits a neighbourhood mart?
                </h3>
                <p className="mt-2">
                  The Mini Mart format is specifically suited for neighbourhood and colony-level locations.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the investment required?
                </h3>
                <p className="mt-2">
                  The Mini Mart format starts at ₹15,25,000, covering setup, inventory, technology, and marketing.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need to manage the store daily?
                </h3>
                <p className="mt-2">
                  No. Under FOCO or FOCM, The Buyzaar Mart&apos;s team manages daily operations.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Which Prayagraj neighborhoods suit this format best?
                </h3>
                <p className="mt-2">
                  Tagore Town, Colonyganj, Allahpur, Mumfordganj, Jhusi, and Phaphamau are strong options.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How do I apply for a neighbourhood mart franchise in Prayagraj?
                </h3>
                <p className="mt-2">
                  Contact The Buyzaar Mart through their website or call to begin the consultation process.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Neighbourhood Mart Journey in Prayagraj
              </h2>

              <ul className="list-disc pl-5 space-y-2">
                <li>A neighbourhood mart is built for everyday relevance in the communities it serves.</li>
                <li>Join The Buyzaar Mart franchise network and build a trusted, residential-catchment store in Prayagraj.</li>
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
                  <span className="font-semibold">Business Hours:</span> Monday to Saturday, 09:00 AM - 07:00 PM
                </li>
              </ul>
            </div>
          </div>

          <CityInternalLinks
            city="prayagraj"
            currentSlug="/prayagraj/neighbourhood-mart-franchise-in-prayagraj"
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