import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Partner in Gurugram | Grocery Franchise Opportunity",
  description:
    "Explore the Buyzaar Mart franchise partnership opportunity in Gurugram. Learn about the FOCM model, FSSAI-licensed daily-needs retail, store formats, investment starting from ₹15 lakh, location suitability, and company-managed store operations.",
  url: "https://www.thebuyzaarmart.com/gurgaon/buyzaar-mart-partner-gurugram",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Gurugram",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Buyzaar Mart Franchise Formats in Gurugram",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A neighbourhood grocery and daily-needs store of approximately 600 to 1,000 sq. ft., suitable for residential society ground floors, colony-facing shops, and local commercial units in Gurugram.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A larger daily-needs retail format of approximately 1,000 to 3,000 sq. ft., suitable for colony chowks, township commercial blocks, and main residential sector roads in Gurugram.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A large-format grocery and supermarket store of 3,000 sq. ft. and above, suitable for high-footfall main roads, established markets, and commercial locations in Gurugram.",
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
      name: "What does it mean to become a Buyzaar Mart partner in Gurugram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It means investing in and owning a Buyzaar Mart store under a formal franchise agreement, with access to the brand's operating systems, supply chain, technology, training, and partner support structure.",
      },
    },
    {
      "@type": "Question",
      name: "Does a Buyzaar Mart partner need to manage the store every day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Under the FOCM model, which means Franchise Owned, Company Managed, the brand's operations team manages the store's daily functioning while the partner retains ownership, financial interest, and business oversight.",
      },
    },
    {
      "@type": "Question",
      name: "What is the starting investment for a Buyzaar Mart Mini Mart in Gurugram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The starting investment for a Mini Mart is approximately ₹15.25 lakh. The estimated amount may include stock, interior setup, software fee, franchise fee, and security deposit, subject to the final location-specific proposal.",
      },
    },
    {
      "@type": "Question",
      name: "How much space is required for each Buyzaar Mart format?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart generally requires approximately 600–1,000 sq. ft., a Super Mart approximately 1,000–3,000 sq. ft., and a Hyper Mart approximately 3,000 sq. ft. and above.",
      },
    },
    {
      "@type": "Question",
      name: "Do Buyzaar Mart partners need previous retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Previous retail experience is not necessarily required. The brand provides staff training before opening, and store operations are conducted according to a defined Standard Operating Process.",
      },
    },
    {
      "@type": "Question",
      name: "Is Buyzaar Mart franchise partnership available outside Gurugram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Similar daily-needs retail and low-investment franchise formats may also be available in cities such as Lucknow and other locations across Uttar Pradesh, subject to availability and location approval.",
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
              Buyzaar Mart Partner in Gurugram: Complete Guide to the Grocery Franchise Opportunity
            </h1>


            <ul className="list-disc space-y-2 pl-6">
              <li>Becoming a Buyzaar Mart franchise partner in Gurugram is different from starting an independent grocery store. A partner invests in and owns a retail outlet supported by an established brand, operating system, supply chain, technology, and structured business guidance.</li>
              <li>Gurugram has a large working population, rapidly developing residential sectors, established housing societies, and strong demand for convenient access to groceries and daily household essentials. These factors make the city an important market for organised daily-needs retail.</li>
              <li>Buyzaar Mart offers a structured supermarket and grocery franchise partnership model for entrepreneurs, working professionals, and investors who want to enter organised retail without developing a brand, supplier network, store system, and operating process entirely from the beginning.</li>
              <li>This detailed guide explains what it means to become a Buyzaar Mart partner in Gurugram, how the FOCM model works, what investment and store format options may be available, what products the store can sell, and what support a partner should expect.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Does It Mean to Be a Buyzaar Mart Partner?
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>A Buyzaar Mart partner is an individual, entrepreneur, family business, or investor who invests in a store under the brand's franchise agreement and receives the right to operate under the Buyzaar Mart name, systems, and retail framework.</li>
              <li>The partnership is more than permission to use a brand name. It may include access to a defined Standard Operating Process, store planning, product assortment guidance, supplier relationships, billing technology, inventory systems, training, and ongoing operational support.</li>
              <li>Depending on the selected partnership model and agreement, a partner may participate directly in business decisions or take a more hands-off role while the company's operations team manages the store's day-to-day functioning.</li>
              <li>The partner retains ownership and financial interest in the business according to the terms of the formal franchise agreement. All commercial, legal, investment, renewal, and operational terms should be reviewed carefully before signing.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Partner with an Established Brand Instead of Starting Independently
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Brand recognition can help a new store begin with a clearer identity. Customers in Gurugram can more easily understand the store's product category and retail positioning than they may with an entirely unknown independent outlet.</li>
              <li>A defined operating system provides a starting framework for store layout, product display, billing, stock handling, staff routines, customer service, and daily reporting instead of requiring the owner to create every process independently.</li>
              <li>Reduced setup complexity can be valuable because creating an independent grocery brand requires supplier negotiations, category planning, staffing, training, technology selection, marketing, visual branding, compliance management, and continuous operational decision-making.</li>
              <li>A franchise model may help reduce some common operational uncertainties, but it does not remove business risk. Store performance can still depend on location, rent, competition, customer demand, pricing, execution, working capital, and the terms of the franchise agreement.</li>
              <li>Structured accountability comes from a written franchise agreement that defines the responsibilities of both the partner and the company. This can provide greater clarity than an independent venture in which the owner manages every business function alone.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The FOCM Model: The Core of the Buyzaar Mart Partnership
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>One of the most important questions for anyone researching a grocery franchise in Gurugram is who will be responsible for operating the store every day.</li>
              <li>In many franchise systems, the franchisee is expected to manage staffing, inventory, supplier coordination, billing, customer service, local marketing, and store maintenance personally in addition to making the initial investment.</li>
              <li>Buyzaar Mart's FOCM model, meaning Franchise Owned, Company Managed, is designed to separate store ownership from routine operational management.</li>
              <li>Under this model, the partner owns the business interest according to the agreed terms. The partner's investment and franchise rights are documented through a formal agreement, making the store a business asset that requires proper review, monitoring, and financial planning.</li>
              <li>Buyzaar Mart manages the agreed daily operations. The company's operations team may handle staffing, inventory coordination, billing systems, replenishment schedules, hygiene routines, merchandising, store processes, and marketing activities according to the defined Standard Operating Process.</li>
              <li>Partners receive business visibility without carrying the full burden of daily store management. Sales, inventory, transaction, and other agreed performance information may be shared through KPI dashboards, operational updates, and scheduled quality audits.</li>
              <li>This structure may suit working professionals, first-time entrepreneurs, and investors who want to own a daily-needs retail business in Gurugram while reducing their personal involvement in routine store operations. However, the exact scope of company management should always be confirmed in writing.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Buyzaar Mart Handles for Its Partners
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Complete store setup may include a customer-friendly interior layout, retail shelving and fixtures, refrigeration for dairy and chilled products, brand signage, product display planning, POS billing, and inventory tracking technology.</li>
              <li>Staff recruitment and training may be coordinated by the brand before the store opens. Training can cover POS operation, billing accuracy, customer interaction, store opening and closing routines, stock handling, product display, inventory management, and hygiene practices.</li>
              <li>Supply chain and procurement support can connect the partner store with FMCG distributor relationships, vendor access, product sourcing guidance, and regional supply networks. This support is intended to make replenishment more systematic and improve product availability.</li>
              <li>Marketing support from launch may include hyperlocal digital campaigns, social media promotion, opening-day activities, local awareness campaigns, customer loyalty programme onboarding, and promotional communication designed for the store's approved catchment area.</li>
              <li>Inventory protection may be available under the brand's contractual terms for certain expired, damaged, or unsold stock categories. Partners should request the complete written policy, including exclusions, claim procedures, eligibility conditions, and settlement timelines before making an investment decision.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats Available to a Buyzaar Mart Partner
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Buyzaar Mart offers three franchise formats so that a prospective partner can evaluate an option according to budget, available commercial space, local demand, expected customer catchment, and desired product range.</li>
              <li>Mini Mart: This format generally requires approximately 600 to 1,000 sq. ft. and is suitable for residential society ground floors, colony-facing shops, and neighbourhood commercial units. The indicative investment starting point is approximately ₹15.25 lakh, which may cover stock, interior setup, software fee, franchise fee, and security deposit. Potential Gurugram locations may include housing society retail units near Dwarka Expressway sectors, inner colony lanes in Palam Vihar and South City, DLF Phase society markets, Sushant Lok residential shops, and Sector 56–58 colony-facing commercial spaces.</li>
              <li>Super Mart: This format generally requires approximately 1,000 to 3,000 sq. ft. and can support a wider daily-needs assortment, larger displays, and a more spacious customer experience. Potential Gurugram locations may include Dwarka Expressway township commercial blocks in Sectors 82–102, Southern Peripheral Road commercial units, Golf Course Extension commercial areas, and the Palam Vihar main market.</li>
              <li>Hyper Mart: This format generally requires 3,000 sq. ft. and above and is designed for high-footfall main roads, established commercial markets, and larger retail destinations. Potential Gurugram locations may include NH-48 main-road frontages, the Sohna Road commercial corridor, Golf Course Road market areas, and Sector 14 or Sector 45 main markets.</li>
              <li>Before selecting a format, the proposed Gurugram site should be evaluated for catchment population, residential density, customer profile, visibility, accessibility, parking, daily footfall, nearby competitors, rent, frontage, and physical suitability. The final format and investment amount should be confirmed through a location-specific proposal from the brand.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What a Buyzaar Mart Partner's Store Sells
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Grocery and staple products may include atta, rice, dal, cooking oil, sugar, salt, spices, dry fruits, pulses, flour, grains, and other everyday kitchen essentials that encourage regular household visits.</li>
              <li>Dairy and beverages may include milk, curd, butter, paneer, juices, soft drinks, tea, coffee, and packaged drinking water. These frequently purchased products can help support repeat visits when storage, freshness, and replenishment are managed properly.</li>
              <li>Packaged and processed food products may include biscuits, chips, namkeen, noodles, breakfast cereals, chocolates, bakery products, instant foods, and ready-to-eat items.</li>
              <li>Personal care products may include soaps, shampoos, toothpaste, face wash, deodorants, skincare products, shaving products, sanitary-care items, and other regular household replenishment products.</li>
              <li>Household essentials may include detergents, dishwashing liquid, floor cleaners, toilet cleaners, disinfectants, tissues, garbage bags, kitchen accessories, and other home-care products.</li>
              <li>FMCG and impulse products may include small, frequently purchased items displayed near high-visibility areas and the billing counter. Product margins, assortment, pricing, and availability will depend on the approved category plan, suppliers, and store-level demand.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Gurugram Is a Strong City to Become a Partner In
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Gurugram has a large working population and several employment hubs, including Cyber City and Udyog Vihar. Residential communities near these areas can generate regular demand for convenient grocery shopping and household essentials.</li>
              <li>Developing residential corridors such as Dwarka Expressway continue to attract new housing projects, families, tenants, and commercial activity. A suitable early-stage location may benefit from increasing local awareness as the catchment develops.</li>
              <li>Premium areas near Southern Peripheral Road, Golf Course Extension, Golf Course Road, DLF Phase communities, and Sushant Lok may offer access to customers who value convenience, organised retail, product variety, and reliable shopping experiences.</li>
              <li>Established residential pockets such as South City 1 and South City 2 contain large family communities and recurring daily-needs demand. The level of organised retail competition must still be assessed carefully before approving a site.</li>
              <li>Sectors 56, 57, and 58 combine established residential demand with a range of local commercial locations. A Mini Mart may be suitable in selected colony-facing areas, but rent, visibility, competition, parking, and customer access should be evaluated before making any investment decision.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Certifications That Support Partner Confidence
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>FSSAI licensing is important for a food and grocery retail business because it supports compliance with applicable food-safety requirements for food, packaged products, and dairy items. Partners should verify the relevant licence details and the entity to which the licence applies.</li>
              <li>GST-registered billing can support tax-compliant invoicing and reflects a more formal retail operating process. The applicable GST responsibilities should be confirmed with a qualified tax professional.</li>
              <li>MSME registration or certification may provide additional business documentation and institutional credibility, subject to the exact registration details and eligibility of the operating entity.</li>
              <li>For a partner, documented licences, registrations, billing processes, and compliance systems may reduce the administrative complexity associated with setting up an independent grocery store. These details should be independently verified during due diligence.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What to Evaluate Before Becoming a Partner
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Franchise agreement term should be reviewed carefully, including the initial agreement period, renewal conditions, territory rights, exit provisions, transfer rules, dispute-resolution process, and responsibilities after the agreement ends.</li>
              <li>A complete investment breakdown should be requested so that stock, interior setup, equipment, software fee, franchise fee, security deposit, working capital, rent, licences, taxes, staffing, utilities, and marketing costs are clearly understood instead of relying only on the headline starting figure.</li>
              <li>Reporting and oversight arrangements should be confirmed, including the type of KPI dashboards, sales reports, stock reports, audit reports, loss reports, and operational updates that a partner will receive and how frequently they will be shared.</li>
              <li>The location approval process should include an objective assessment of catchment population, residential density, visibility, access, parking, daily footfall, rent, competition, nearby stores, delivery potential, and long-term development of the area.</li>
              <li>Support commitments should be documented in the franchise agreement or an attached schedule. These may include staff recruitment, training, supply chain access, store setup, launch marketing, technology support, replenishment, inventory protection, and operational management.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Realistic Expectations for a Franchise Partnership
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Even with company-managed operations and launch support, a new store may require time to build local awareness, attract first-time customers, establish repeat buying habits, and develop a stable sales pattern. Immediate profitability should never be assumed.</li>
              <li>Business performance can depend heavily on the selected catchment, store format, rent, competition, product availability, average bill value, customer retention, operating expenses, and how well the location serves an underserved daily-needs requirement.</li>
              <li>A franchise partnership should be treated as a serious business investment rather than a guaranteed or completely passive financial product. The partner should understand the risks, costs, responsibilities, expected timelines, and possible outcomes.</li>
              <li>Speaking with existing franchise partners, wherever possible, can provide practical information about setup, communication, stock availability, support quality, reporting, expenses, customer demand, and day-to-day business realities beyond promotional material.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Expanding Beyond Gurugram: Partnership Opportunities in Tier-2 Cities
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Buyzaar Mart's partnership model is not limited to Gurugram. The brand is also exploring expansion into growing tier-2 cities and residential markets across North India, subject to territory availability and site approval.</li>
              <li>Entrepreneurs researching a low-investment supermarket franchise in Lucknow may also explore Mini Mart and daily-needs retail formats in developing areas such as Gomti Nagar, Aliganj, Indira Nagar, and Sushant Golf City.</li>
              <li>Some tier-2 markets across Uttar Pradesh may offer different commercial rent, staffing, and operating-cost conditions compared with Gurugram. However, customer spending, competition, supply availability, local demand, and store-level sales must be assessed before comparing potential returns.</li>
              <li>This gives prospective partners the flexibility to compare a Gurugram franchise opportunity with a location outside the National Capital Region if the investment, operating expenses, catchment demand, and long-term business plan are more suitable elsewhere.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Steps to Become a Buyzaar Mart Partner in Gurugram
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Submit an enquiry through the brand's official franchise channel and share your proposed budget, preferred Gurugram locality, available property details, business goals, and desired level of operational involvement.</li>
              <li>Request a personalised investment breakdown and recommended store format—Mini Mart, Super Mart, or Hyper Mart—based on the proposed location, catchment profile, available space, expected product range, and commercial feasibility.</li>
              <li>Review the FOCM franchise agreement in detail, including ownership rights, company-managed responsibilities, partner responsibilities, fees, reporting, inventory policy, territory terms, renewal conditions, exit terms, and dispute-resolution provisions.</li>
              <li>Complete the location approval process so that the brand's team can assess catchment population, visibility, accessibility, footfall, nearby competition, rent, parking, and the long-term suitability of the site.</li>
              <li>Proceed with store setup, procurement, staff recruitment, staff training, technology installation, product placement, compliance checks, and launch marketing after the commercial and legal terms have been finalised.</li>
              <li>From initial enquiry to grand opening, the process may typically take approximately 8 to 12 weeks, depending on location approval, documentation, agreement completion, site readiness, store setup, staff availability, product stocking, and launch requirements.</li>
            </ul>


            <ul className="list-disc space-y-2 pl-6">
              <li>Becoming a Buyzaar Mart partner in Gurugram means entering organised daily-needs retail with an established brand, a defined operating system, a planned product assortment, and a formal structure that explains the responsibilities of both the partner and the company.</li>
              <li>The FOCM model addresses one of the biggest concerns for prospective franchise partners—the responsibility of managing store operations every day—by placing agreed operational duties with the brand's management team while the partner retains ownership according to the agreement.</li>
              <li>With three store formats covering different space requirements and investment levels, prospective partners can evaluate an entry point that matches their budget, proposed location, target catchment, risk tolerance, and preferred level of involvement.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FAQs
            </h2>


            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What does it mean to become a Buyzaar Mart partner in Gurugram?
                </h3>
                <p className="mt-2">
                  It means investing in and owning a Buyzaar Mart store under a formal franchise agreement, with access to the brand's operating systems, supply chain, technology, training, and partner support structure.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. Does a Buyzaar Mart partner need to manage the store every day?
                </h3>
                <p className="mt-2">
                  No. Under the FOCM model, which means Franchise Owned, Company Managed, the brand's operations team manages the store's daily functioning while the partner retains ownership, financial interest, and business oversight.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. What is the starting investment for a Buyzaar Mart Mini Mart in Gurugram?
                </h3>
                <p className="mt-2">
                  The starting investment for a Mini Mart is approximately ₹15.25 lakh. The estimated amount may include stock, interior setup, software fee, franchise fee, and security deposit, subject to the final location-specific proposal.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. How much space is required for each Buyzaar Mart format?
                </h3>
                <p className="mt-2">
                  A Mini Mart generally requires approximately 600–1,000 sq. ft., a Super Mart approximately 1,000–3,000 sq. ft., and a Hyper Mart approximately 3,000 sq. ft. and above.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. Do Buyzaar Mart partners need previous retail experience?
                </h3>
                <p className="mt-2">
                  Previous retail experience is not necessarily required. The brand provides staff training before opening, and store operations are conducted according to a defined Standard Operating Process.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. Is Buyzaar Mart franchise partnership available outside Gurugram?
                </h3>
                <p className="mt-2">
                  Yes. Similar daily-needs retail and low-investment franchise formats may also be available in cities such as Lucknow and other locations across Uttar Pradesh, subject to availability and location approval.
                </p>
              </div>
            </div>


            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Buyzaar Mart Partnership in Gurugram
              </h2>


              <ul className="list-disc space-y-2 pl-6">
                <li>Becoming a Buyzaar Mart partner in Gurugram means entering organised daily-needs retail with an established brand, a defined operating system, structured support, and a formal agreement that outlines partner and company responsibilities.</li>
                <li>Join The Buyzaar Mart franchise network and explore the opportunity to build a retail business asset in Gurugram with company-managed daily operations, location-based format selection, operational support, and a store model suited to your budget and schedule.</li>
                <li><span className="font-semibold">Email:</span> <a href="mailto:info@thebuyzaarmart.com" className="font-semibold text-green-600 hover:underline">info@thebuyzaarmart.com</a></li>
                <li><span className="font-semibold">Phone / WhatsApp:</span> <a href="tel:+919217991727" className="font-semibold text-green-600 hover:underline">9217991727</a></li>
                <li><span className="font-semibold">Business Hours:</span> Monday to Saturday, 09:00 AM – 07:00 PM</li>
              </ul>
            </div>
          </div>


          <CityInternalLinks
            city="gurgaon"
            currentSlug="/gurgaon/buyzaar-mart-partner-gurugram"
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