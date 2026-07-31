import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grocery Store Franchise Costs in Moradabad | The Buyzaar Mart",
  description:
    "The Buyzaar Mart offers a transparent grocery store franchise cost breakdown in Moradabad across Mini Mart, Super Mart, and Hyper Mart formats, covering franchise fee, interiors, technology, and opening inventory.",
  url: "https://www.thebuyzaarmart.com/moradabad/grocery-store-franchise-costs-in-moradabad",
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
    name: "The Buyzaar Mart Grocery Franchise Formats in Moradabad",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Lowest entry-cost grocery franchise format suited for residential colonies, housing societies, and neighbourhood markets in Moradabad.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Mid-level investment grocery franchise format suited for main market roads and mixed-use commercial zones in Moradabad.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Highest investment, highest footfall potential grocery franchise format suited for high-footfall main roads and destination-style retail locations in Moradabad.",
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
      name: "What is the minimum cost to start a grocery franchise in Moradabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart franchise starts from approximately ₹15 lakh, depending on location and store size.",
      },
    },
    {
      "@type": "Question",
      name: "What does the total franchise cost include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It includes the franchise fee, interior setup, POS technology, and opening inventory.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a Hyper Mart cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately ₹80,00,000, in which ₹1,200 per sq. ft. is for interiors and ₹1,700 per sq. ft. is for stock, plus a ₹3,00,000 franchise fee.",
      },
    },
    {
      "@type": "Question",
      name: "Does the cost vary by locality in Moradabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, rental rates, store condition, and locality significantly affect the final investment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference in cost between FOCM and FOCO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM means the franchisee bears full operational costs; FOCO shifts staffing and daily operating costs to the company via revenue sharing.",
      },
    },
    {
      "@type": "Question",
      name: "What profit margin can I expect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Franchise owners can generally expect a profit margin of around 18% to 20% on sales.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a minimum store size requirement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, a minimum carpet area of 600 sq. ft. is required for any format.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any ongoing costs after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, including staff salaries, electricity, restocking, and marketing, depending on the chosen model.",
      },
    },
    {
      "@type": "Question",
      name: "Does the company help reduce inventory-related costs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, a buyback guarantee on expired and damaged stock helps protect franchisee margins.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get an exact cost estimate for my Moradabad location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Submit an inquiry at thebuyzaarmart.com; the team surveys your location and shares a personalised cost breakdown.",
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
              Grocery Store Franchise Costs in Moradabad &ndash; Complete Cost Breakdown by The Buyzaar Mart
            </h1>

            <p>
              If you are exploring a grocery store franchise in Moradabad, the first question is almost always about cost &mdash; how much capital is needed, what it covers, and how quickly it can be recovered. Moradabad, known globally for its brassware exports, is now emerging as a strong retail market with rising disposable income and very limited organised grocery retail. The Buyzaar Mart offers a transparent, structured cost model across three store formats, making it easier for first-time investors to plan their budget with confidence. Here is a complete, point-wise breakdown of grocery store franchise costs in Moradabad with The Buyzaar Mart.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Cost Planning Matters Before Choosing a Franchise
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>A franchise fee is only one part of the total investment; interiors, technology, and opening stock usually form the bigger share of the budget.</li>
              <li>Moradabad&apos;s rental rates, store condition, and locality directly affect the final setup cost, so no two stores cost exactly the same.</li>
              <li>Understanding the complete cost structure upfront helps avoid mid-setup budget shocks.</li>
              <li>Choosing the right format for your budget &mdash; rather than overspending on a larger format &mdash; improves the chances of faster break-even.</li>
              <li>The Buyzaar Mart&apos;s transparent model splits cost into clear heads: franchise fee, interiors, technology, and inventory, so investors know exactly what they are paying for.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Does the Total Franchise Cost Include?
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li><span className="font-semibold">Franchise Fee:</span> A one-time fee for the brand licence, business systems, and ongoing operational support.</li>
              <li><span className="font-semibold">Interior Setup and Store Assets:</span> Shelving, display units, lighting, flooring, wall branding, graphics, and external signage &mdash; designed to match the standard Buyzaar Mart format.</li>
              <li><span className="font-semibold">POS and Billing Technology:</span> Digital billing, sales tracking, and inventory management systems deployed as part of the setup.</li>
              <li><span className="font-semibold">Opening Inventory:</span> Initial stock of groceries, FMCG, dairy, and household products based on the chosen format and local demand in Moradabad.</li>
              <li><span className="font-semibold">Staff Training Cost:</span> Training for billing, customer service, and daily store operations.</li>
              <li><span className="font-semibold">Marketing and Launch Support:</span> Local area marketing campaigns to build customer footfall during the store&apos;s opening phase.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Format-Wise Franchise Cost in Moradabad
            </h2>

            <h3 className="font-medium text-gray-900">1. Mini Mart &ndash; Lowest Entry Cost</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Store size: approximately 600 to 1,000 sq. ft.</li>
              <li>Approximate total investment: ₹15 lakh to ₹25 lakh, depending on locality, size, and store condition.</li>
              <li>Best suited for: residential colonies, housing societies, and neighbourhood markets in Moradabad.</li>
              <li>Lower inventory and interior cost compared to larger formats, making it the most accessible entry point for first-time investors.</li>
              <li>Ideal for homemakers, salaried professionals, or small business owners with limited starting capital.</li>
            </ul>

            <h3 className="font-medium text-gray-900">2. Super Mart &ndash; Mid-Level Investment</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Store size: approximately 1,000 to 3,000 sq. ft.</li>
              <li>Investment is higher than Mini Mart due to larger carpet area, wider product assortment, and additional shelving and display requirements.</li>
              <li>Best suited for: main market roads and mixed-use commercial zones with a larger catchment population.</li>
              <li>Offers a broader mix of packaged and fresh food categories, increasing average revenue per customer.</li>
              <li>Considered the &quot;sweet spot&quot; between investment size and revenue potential for many franchisees.</li>
            </ul>

            <h3 className="font-medium text-gray-900">3. Hyper Mart &ndash; Highest Investment, Highest Footfall Potential</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Store size: 3,000 sq. ft. and above.</li>
              <li>Best suited for: high-footfall main roads, busy commercial markets, and destination-style retail locations in Moradabad.</li>
              <li>Supports the widest product range and the largest catchment area among all three formats.</li>
            </ul>

            <p>
              <span className="font-semibold">Minimum store requirement:</span> A carpet area of at least 600 sq. ft. is mandatory for any Buyzaar Mart format, regardless of location within Moradabad.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Model Options and How They Affect Cost
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li><span className="font-semibold">FOCM (Franchise Owned, Company Managed):</span> The franchisee bears the full setup investment and owns the store, while The Buyzaar Mart provides operational systems and training. Suited for those who want full ownership of profits.</li>
              <li><span className="font-semibold">FOCO (Franchise Owned, Company Operated):</span> The franchisee provides capital and premises, while the company manages daily operations, staffing, electricity, and marketing &mdash; typically on a revenue-sharing basis of around 10% of monthly sales. This is a more passive cost and involvement structure.</li>
              <li>Both models include the same core setup &mdash; interiors, POS technology, and opening inventory &mdash; but differ in who bears ongoing operational costs.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Estimated Profit Margin and Return Potential
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Franchise owners can generally expect a profit margin in the range of 18% to 20% on sales.</li>
              <li>Actual returns depend on store format, exact locality in Moradabad, footfall, and monthly sales volume.</li>
              <li>A Mini Mart in a dense residential pocket with limited competition may achieve faster break-even than a larger format in an unproven location.</li>
              <li>The buyback guarantee on expired and damaged stock helps protect margins by reducing inventory loss &mdash; a common cost risk in grocery retail.</li>
              <li>Since grocery and FMCG retail serves daily household demand, revenue tends to be more stable and predictable compared to seasonal retail categories.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Ongoing Costs After Store Launch
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Staff salaries (in FOCM model, borne directly by the franchisee).</li>
              <li>Electricity and utility bills for the store.</li>
              <li>Restocking and inventory replenishment costs.</li>
              <li>Local marketing and promotional activities to sustain footfall.</li>
              <li>Any revenue-sharing percentage applicable under the FOCO model.</li>
              <li>Routine maintenance of store interiors, signage, and equipment.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Factors That Can Increase or Decrease Your Total Cost in Moradabad
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li><span className="font-semibold">Locality:</span> Prime main-market locations typically have higher rental costs than residential colony locations.</li>
              <li><span className="font-semibold">Store Condition:</span> A bare-shell space requires more interior investment than a semi-furnished commercial space.</li>
              <li><span className="font-semibold">Format Size:</span> Larger carpet area directly increases both interior and inventory costs.</li>
              <li><span className="font-semibold">Negotiated Rental Terms:</span> Lower rental agreements in emerging residential pockets can meaningfully reduce your monthly overheads.</li>
              <li><span className="font-semibold">Chosen Franchise Model:</span> FOCO shifts certain ongoing operational costs to the company, changing your effective cost exposure.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Best Localities in Moradabad to Optimise Cost vs Footfall
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Dense residential colonies with limited existing organised retail &mdash; lower rental cost with strong daily demand, well suited to a Mini Mart.</li>
              <li>Newly developed housing societies on the city&apos;s expanding outskirts, where commercial rents are still comparatively low.</li>
              <li>Main market roads and commercial stretches, suitable for Super Mart or Hyper Mart formats where higher rent is offset by higher footfall.</li>
              <li>Localities near educational institutions, hospitals, or industrial areas, which offer consistent daily footfall supporting faster cost recovery.</li>
              <li>The Buyzaar Mart&apos;s team conducts a formal survey of footfall, catchment population, and competition before confirming the final cost estimate for a proposed Moradabad location.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Grocery Franchise Cost vs. Starting an Independent Kirana Store
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>An independent kirana store may look cheaper on paper, but it typically comes without standardised interiors, digital billing, or a recognised brand identity.</li>
              <li>Setting up a professional look &mdash; proper shelving, signage, flooring, and billing software &mdash; independently often costs nearly as much as a franchise setup fee, but without brand backing or supply chain support.</li>
              <li>A franchise cost includes negotiated bulk sourcing through the brand&apos;s FMCG partnerships, which can lower per-unit stock cost compared to an independent store buying at retail rates.</li>
              <li>Independent stores bear 100% of the risk on expired or damaged stock; a Buyzaar Mart franchise cost already factors in a buyback guarantee that reduces this risk.</li>
              <li>Marketing and customer acquisition for a new independent store is an added, often underestimated cost; franchise launch support covers this within the overall investment.</li>
              <li>For a first-time investor in Moradabad, the slightly higher upfront franchise cost is generally offset by lower operational risk and faster customer trust due to brand recognition.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Financing and Funding Options for Your Franchise Cost
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Many aspiring franchisees fund the Mini Mart or Super Mart investment through a mix of personal savings and a business or MSME loan.</li>
              <li>Banks and NBFCs increasingly offer collateral-based or collateral-free business loans for retail and FMCG store setups, which can help cover interior and inventory costs.</li>
              <li>Government schemes such as Mudra loans (for smaller ticket sizes) may be relevant for entrepreneurs setting up a Mini Mart format in Moradabad.</li>
              <li>The FOCO model reduces the working-capital burden after launch, since the company manages ongoing operational costs, making it easier to plan financing purely around the upfront setup cost.</li>
              <li>It is advisable to keep a buffer of 10-15% above the estimated cost for unforeseen expenses such as extended lease negotiation, minor civil work, or initial slow-sales months before footfall stabilises.</li>
              <li>Discussing your financing plan with the franchise advisor early in the process helps align the recommended format with what you can realistically fund.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Comparing Cost Across Store Formats: A Quick Reference
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li><span className="font-semibold">Mini Mart:</span> Lowest total cost (₹15&ndash;25 lakh), fastest to set up, lowest ongoing overheads &mdash; best for tight budgets and residential catchments.</li>
              <li><span className="font-semibold">Super Mart:</span> Moderate-to-higher cost due to larger area and inventory, but wider revenue base per customer &mdash; best where budget allows some flexibility.</li>
              <li><span className="font-semibold">Hyper Mart:</span> Highest total cost, calculated on a per-sq.-ft. basis for interiors and stock, plus a separate franchise fee &mdash; best for investors targeting high-footfall commercial locations in Moradabad.</li>
              <li>As store size increases, the interior and stocking costs scale roughly in proportion to carpet area, while the franchise fee structure may differ by format.</li>
              <li>Larger formats generally need a larger team, which increases monthly salary costs &mdash; an important factor when comparing total cost of ownership, not just setup cost.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Hidden or Often-Overlooked Costs to Budget For
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Lease deposit and advance rent, which are separate from the franchise investment itself and vary by Moradabad locality.</li>
              <li>Local trade licence, GST registration, and other statutory compliance costs (support is typically provided, but government fees apply separately).</li>
              <li>Minor civil work or electrical upgrades if the chosen commercial space needs modification beyond standard interior fit-out.</li>
              <li>Insurance for store assets and inventory, which is a small but recurring cost worth including in your annual budget.</li>
              <li>Initial slow-ramp period costs &mdash; the first 1-2 months after launch may have lower sales than projected, so working capital should account for this gap.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step Process to Get an Exact Cost Estimate
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li><span className="font-semibold">Step 1:</span> Submit a franchise inquiry on www.thebuyzaarmart.com with your name, contact details, preferred Moradabad locality, and budget range.</li>
              <li><span className="font-semibold">Step 2:</span> A franchise advisor discusses your investment capacity and recommends the most suitable format.</li>
              <li><span className="font-semibold">Step 3:</span> The team evaluates your proposed location and shares a personalised, itemised cost breakdown.</li>
              <li><span className="font-semibold">Step 4:</span> Once terms are finalised, KYC and the franchise agreement are completed, clearly listing the investment structure.</li>
              <li><span className="font-semibold">Step 5:</span> Interior setup, POS installation, staff training, and stocking follow &mdash; completing the total cost cycle before launch.</li>
              <li>The full process, from inquiry to launch, generally takes about 4 to 8 weeks.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why The Buyzaar Mart&apos;s Cost Model Works for Moradabad Investors
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Transparent, itemised cost structure &mdash; no hidden charges beyond what is disclosed at the agreement stage.</li>
              <li>Multiple formats allow entry at different budget levels, from a compact Mini Mart to a larger Hyper Mart.</li>
              <li>End-to-end setup support means the disclosed investment already covers interiors, technology, and stock &mdash; not just a bare franchise fee.</li>
              <li>Buyback guarantee on expired/damaged stock protects against a major hidden cost in grocery retail.</li>
              <li>Direct sourcing partnerships with 50+ FMCG brands help keep ongoing stock costs competitive.</li>
              <li>A scalable model allows successful franchisees to reinvest profits into additional outlets across Moradabad and nearby towns.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What is the minimum cost to start a grocery franchise in Moradabad?
                </h3>
                <p className="mt-2">
                  A Mini Mart franchise starts from approximately ₹15 lakh, depending on location and store size.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What does the total franchise cost include?
                </h3>
                <p className="mt-2">
                  It includes the franchise fee, interior setup, POS technology, and opening inventory.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How much does a Hyper Mart cost?
                </h3>
                <p className="mt-2">
                  Approximately ₹80,00,000, in which ₹1,200 per sq. ft. is for interiors and ₹1,700 per sq. ft. is for stock, plus a ₹3,00,000 franchise fee.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Does the cost vary by locality in Moradabad?
                </h3>
                <p className="mt-2">
                  Yes, rental rates, store condition, and locality significantly affect the final investment.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the difference in cost between FOCM and FOCO?
                </h3>
                <p className="mt-2">
                  FOCM means the franchisee bears full operational costs; FOCO shifts staffing and daily operating costs to the company via revenue sharing.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What profit margin can I expect?
                </h3>
                <p className="mt-2">
                  Franchise owners can generally expect a profit margin of around 18% to 20% on sales.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Is there a minimum store size requirement?
                </h3>
                <p className="mt-2">
                  Yes, a minimum carpet area of 600 sq. ft. is required for any format.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Are there any ongoing costs after launch?
                </h3>
                <p className="mt-2">
                  Yes, including staff salaries, electricity, restocking, and marketing, depending on the chosen model.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Does the company help reduce inventory-related costs?
                </h3>
                <p className="mt-2">
                  Yes, a buyback guarantee on expired and damaged stock helps protect franchisee margins.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How can I get an exact cost estimate for my Moradabad location?
                </h3>
                <p className="mt-2">
                  Submit an inquiry at thebuyzaarmart.com; the team surveys your location and shares a personalised cost breakdown.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Get Your Personalised Franchise Cost Breakdown for Moradabad
              </h2>

              <p className="mb-4 text-gray-800">
                Moradabad&apos;s growing consumer base and limited organised grocery retail make it a strong market for a transparent, structured franchise investment.
              </p>

              <p className="mb-4 text-gray-800">
                Reach out to The Buyzaar Mart to get an itemised cost estimate for your preferred locality and format in Moradabad.
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
                <span className="font-semibold">Business Hours:</span> Monday to Saturday, 09:00 AM &ndash; 07:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="moradabad"
            currentSlug="/moradabad/grocery-store-franchise-costs-in-moradabad"
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

