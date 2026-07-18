import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Retail Store Franchise in Greater Noida - Own a Buyzaar Mart Neighbourhood Store",
  description:
    "Explore The Buyzaar Mart retail store franchise in Greater Noida. Start with practical investment, modern store systems, full support, and a scalable neighbourhood retail business model.",
  url: "https://www.thebuyzaarmart.com/greaternoida/retail-store-franchise-in-greater-noida",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Greater Noida",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum investment for a Buyzaar Mart retail franchise in Greater Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The total investment is approximately ₹13 Lakh to ₹18 Lakh for a Mini Mart covering franchise fee, setup, branding, POS, inventory, and working capital. Property rent is separate.",
      },
    },
    {
      "@type": "Question",
      name: "Is prior retail or business experience needed to apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Buyzaar Mart provides complete training before launch. No prior retail experience is required. The team trains you and your staff on everything needed to run the store well.",
      },
    },
    {
      "@type": "Question",
      name: "What exactly is the FOCM model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM stands for Franchise Owned, Company Managed. You own the investment and earn the returns while Buyzaar Mart manages operations, supply chain, billing systems, and marketing on your behalf.",
      },
    },
    {
      "@type": "Question",
      name: "What if products expire or get damaged in my store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyzaar Mart has a clear policy of taking back expired and damaged goods from franchise stores, helping protect your investment from stock losses.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to open the store after applying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 30 to 60 days from the date of signing the franchise agreement, depending on property condition and local permit requirements in Greater Noida.",
      },
    },
    {
      "@type": "Question",
      name: "What size of space do I need and where should it be located in Greater Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need 600 to 900 sq. ft. of commercial or semi-commercial space. Ideal locations are sector market strips, colony commercial shops, housing society ground floors, and neighbourhood market areas across Greater Noida sectors.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for the Buyzaar Mart franchise in Greater Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit https://www.thebuyzaarmart.com/franchise and fill in the inquiry form. The franchise team will contact you promptly. You can also reach out at https://www.thebuyzaarmart.com/contact.",
      },
    },
  ],
};

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1">
          <div className="max-w-4xl space-y-4 font-serif font-medium leading-relaxed text-gray-700">
            <h1 className="mt-8 text-2xl font-medium text-gray-900 sm:text-3xl">
              Retail Store Franchise in Greater Noida &ndash; Own a Buyzaar Mart
              Neighbourhood Store
            </h1>

            <p>
              Greater Noida is one of the fastest-developing cities in the
              entire NCR belt. New residential towers are being handed over
              every month, thousands of families are moving into organised
              sectors and gated communities, and the demand for reliable,
              nearby, and affordable retail stores is at an all-time high.
            </p>

            <p>
              Yet despite all this growth, organised retail in Greater Noida at
              the neighbourhood level remains largely underserved. Most residents
              are still depending on unorganised kirana stores or travelling
              long distances to reach a proper supermarket. That gap is your
              opportunity.
            </p>

            <p>
              The Buyzaar Mart is a growing retail franchise brand that is
              changing how India shops at the neighbourhood level. If you are
              looking for a retail store franchise in Greater Noida that comes
              with a proven model, full brand support, low investment, and a
              ready customer market, The Buyzaar Mart is exactly what you have
              been searching for.
            </p>

            <p>
              This page covers everything you need to know &mdash; the brand, the
              store formats, investment details, what support you receive, who
              can apply, and how to get started today.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Greater Noida Is an Ideal Market for a Retail Store Franchise
            </h2>

            <p>
              Before you invest in any franchise, you need to understand the
              market. Greater Noida is one of the strongest retail franchise
              markets in North India right now, and here is why.
            </p>

            <h3 className="font-medium text-gray-900">
              Massive Residential Growth
            </h3>

            <p>
              Greater Noida is home to some of the largest planned residential
              developments in NCR. Sectors like Alpha, Beta, Gamma, Delta,
              Zeta, Omega, Pi, Sigma, and Chi are densely populated with working
              families, professionals, and students. Large housing societies
              like Gaur City, Supertech Eco Village, ATS Greens, Ajnara Homes,
              and Lotus Panache have thousands of households that shop for
              groceries every single week.
            </p>

            <h3 className="font-medium text-gray-900">
              Untapped Organised Retail Space
            </h3>

            <p>
              Most grocery retail in Greater Noida at the colony and sector
              level is still unorganised. There are very few branded,
              professional neighbourhood stores in residential zones. This means
              the first well-run, well-branded retail store in many localities
              will quickly become the go-to shopping destination for hundreds of
              families.
            </p>

            <h3 className="font-medium text-gray-900">
              Young and Aspirational Consumer Base
            </h3>

            <p>
              Greater Noida attracts young IT professionals, engineers,
              corporate employees, and double-income households who have grown
              up expecting clean, organised, and trustworthy stores. They will
              choose a Buyzaar Mart over an unorganised kirana every single time
              given the choice.
            </p>

            <h3 className="font-medium text-gray-900">
              Strong Infrastructure and Connectivity
            </h3>

            <p>
              Wide roads, stable power supply, metro connectivity, and
              well-planned commercial areas make Greater Noida one of the easier
              cities to operate a retail business in. Setup is smoother and
              day-to-day operations are more reliable than in older, congested
              urban areas.
            </p>

            <h3 className="font-medium text-gray-900">
              Continuously Growing Demand
            </h3>

            <p>
              India&apos;s grocery retail market is worth over ₹60 lakh crore and
              growing at 10 to 12 percent every year. Greater Noida, with its
              expanding population and rising purchasing power, is growing
              faster than the national average. Every new family that moves in
              becomes a potential daily customer for your store.
            </p>

            <p>
              The opportunity in Greater Noida for a neighbourhood retail
              franchise is real, proven, and growing. The Buyzaar Mart is the
              right brand to help you capture it.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Your Friendly Neighbourhood Store
            </h2>

            <p>
              The Buyzaar Mart is a North India-based retail franchise brand
              built to bring the quality and consistency of organised retail to
              the neighbourhoods that need it most.
            </p>

            <p>
              Our brand promise is simple and powerful: every Buyzaar Mart store
              is designed to feel like it genuinely belongs to its neighbourhood
              &mdash; trusted, accessible, affordable, and community-first
              &mdash; while delivering the professional quality that only a
              well-managed retail brand can provide.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The FOCM Model &ndash; What It Means for You
            </h2>

            <p>
              Buyzaar Mart operates on a FOCM model, which stands for Franchise
              Owned, Company Managed.
            </p>

            <p>
              In simple terms: you own the franchise and the investment. You
              hold the asset and earn the returns. Buyzaar Mart manages the
              supply chain, inventory, billing systems, staff training, and
              marketing so that you do not have to manage every operational
              detail yourself.
            </p>

            <p>
              This is the ideal model for people who want the financial benefits
              of retail ownership without the operational stress of running
              everything alone. It is especially well-suited to professionals,
              homemakers, retired individuals, and first-time entrepreneurs who
              have capital to invest but need expert backing to succeed.
            </p>

            <h3 className="font-medium text-gray-900">Our Mission</h3>

            <p>
              Our mission is to empower communities through retail ownership,
              enabling individuals to build dignified livelihoods by running
              neighbourhood stores that offer fairness, affordability, and
              convenience.
            </p>

            <h3 className="font-medium text-gray-900">Our Vision</h3>

            <p>
              To open multiple Buyzaar Mart stores across India with a focus on
              transparency, accessibility, and genuine care for communities.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Retail Store Formats &ndash; The Buyzaar Mart Mini Mart
            </h2>

            <p>
              The Buyzaar Mart currently offers its flagship Mini Mart format,
              designed specifically for neighbourhood-level retail in
              residential areas, colony markets, and sector commercial zones
              &mdash; exactly the kind of locations that are abundant across
              Greater Noida.
            </p>

            <h3 className="font-medium text-gray-900">Mini Mart Format</h3>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <strong>Store Size:</strong> 600 to 1000 sq. ft.
              </li>
              <li>
                <strong>Ideal Locations:</strong> Residential colony markets,
                sector commercial strips, housing society ground-floor shops,
                neighbourhood markets.
              </li>
            </ul>

            <p>
              The Mini Mart format is designed to carry everything a household
              needs on a daily and weekly basis. A well-stocked Buyzaar Mart
              Mini Mart in Greater Noida will typically carry:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Grocery and daily staples such as rice, dal, atta, oil, sugar,
                salt, spices, and other kitchen essentials.
              </li>
              <li>
                Packaged and branded FMCG products from national and regional
                brands that customers already know and trust.
              </li>
              <li>
                Personal care and hygiene products such as soaps, shampoos, face
                wash, toothpaste, deodorants, sanitary products, and skincare
                basics.
              </li>
              <li>
                Dairy and refrigerated items like milk, paneer, curd, butter,
                cheese, and cold beverages.
              </li>
              <li>
                Beverages and drinks including packaged juices, cold drinks,
                packaged water, energy drinks, and tea or coffee.
              </li>
              <li>
                Snacks and confectionery such as biscuits, chips, chocolates,
                namkeen, instant noodles, and ready-to-eat products.
              </li>
              <li>
                Household and cleaning products like detergents, floor cleaners,
                dishwashing products, and home essentials.
              </li>
              <li>
                Localised products adapted to the specific preferences and habits
                of the neighbourhood your store serves.
              </li>
            </ul>

            <p>
              Every Mini Mart is fitted with uniform Buyzaar Mart branding,
              professional shelving and racks, proper lighting, a POS-enabled
              billing system, and a clean, organised store layout that makes
              shopping quick and pleasant.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment Overview &ndash; Retail Store Franchise in Greater
              Noida
            </h2>

            <p>
              The Buyzaar Mart is one of the most affordable organised retail
              franchise opportunities available in Greater Noida today. The
              investment is structured to be practical and accessible for
              everyday entrepreneurs, not just those with deep pockets.
            </p>

            <h3 className="font-medium text-gray-900">
              What the Investment Covers
            </h3>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <strong>Franchise Fee (One-Time):</strong> A one-time payment
                that grants you the right to operate a Buyzaar Mart store, use
                the brand identity, and access the full support system.
              </li>
              <li>
                <strong>Store Interior and Fit-Out:</strong> Complete store
                design, shelving, racks, flooring treatment, and counter setup
                following Buyzaar Mart&apos;s standardised store layout.
              </li>
              <li>
                <strong>Branding and Signage:</strong> All exterior and interior
                brand elements including fascia board, in-store branding,
                uniform store identity materials, and visual merchandising.
              </li>
              <li>
                <strong>POS System and Billing Setup:</strong> The complete
                point-of-sale billing system integrated with inventory
                management software for real-time stock tracking.
              </li>
              <li>
                <strong>Initial Inventory Loading:</strong> The first full stock
                of products needed to open your store fully loaded and ready for
                customers.
              </li>
              <li>
                <strong>Refrigeration Equipment:</strong> Display refrigerators
                and cooling units for dairy and chilled beverages.
              </li>
              <li>
                <strong>Marketing and Grand Launch Campaign:</strong> Dedicated
                launch marketing for your specific location in Greater Noida
                through digital ads, pamphlets, opening events, and local
                promotions.
              </li>
              <li>
                <strong>Working Capital Reserve:</strong> Buffer funds for the
                first 2 to 3 months of operations while your store builds its
                regular customer base.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Complete Support From The Buyzaar Mart &ndash; What You Receive
            </h2>

            <p>
              Becoming a Buyzaar Mart franchise partner means you get far more
              than a brand name and a logo. You get a complete end-to-end
              support system built to help your store succeed from day one. Here
              is exactly what every franchise partner in Greater Noida receives.
            </p>

            <h3 className="font-medium text-gray-900">
              Store Location Advisory
            </h3>

            <p>
              Our team evaluates your proposed location in Greater Noida
              &mdash; footfall patterns, catchment area, nearby competition, and
              commercial viability &mdash; before you make any commitment. We
              only approve locations where we are confident your store will
              thrive.
            </p>

            <h3 className="font-medium text-gray-900">
              Store Design and Fit-Out Guidance
            </h3>

            <p>
              Complete store layout plans, shelving arrangement maps, and
              branding installation guidelines are provided by our team. There
              is no need for a separate interior designer.
            </p>

            <h3 className="font-medium text-gray-900">
              Supply Chain and Inventory Management
            </h3>

            <p>
              We manage the backend supply chain so your store is always
              well-stocked with the right products. You do not need to
              individually negotiate with suppliers or chase distributors.
            </p>

            <h3 className="font-medium text-gray-900">
              Hassle-Free Expired and Damaged Goods Policy
            </h3>

            <p>
              Buyzaar Mart takes back expired and damaged goods from all
              franchise stores. This means you do not lose money on unsold
              stock. This policy is one of the rarest and most valuable
              protections in Indian retail franchising and it gives every
              franchise partner genuine financial security.
            </p>

            <h3 className="font-medium text-gray-900">
              POS-Enabled Billing System
            </h3>

            <p>
              A modern, fast, and accurate billing system tracks inventory in
              real time, eliminates manual errors, and makes checkout smooth for
              every customer.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Can Apply for a Buyzaar Mart Retail Franchise in Greater
              Noida?
            </h2>

            <p>
              The Buyzaar Mart franchise is open to anyone who is serious about
              building a real business and willing to commit to the brand&apos;s
              standards. Here are the profiles that are best suited for this
              opportunity.
            </p>

            <h3 className="font-medium text-gray-900">Working Professionals</h3>

            <p>
              Salaried employees in Greater Noida or nearby areas who want a
              steady secondary income or are planning to exit employment and
              start their own business.
            </p>

            <h3 className="font-medium text-gray-900">Homemakers</h3>

            <p>
              Individuals who want to start an independent business close to
              home with a manageable investment, flexible involvement, and
              genuine community relevance.
            </p>

            <h3 className="font-medium text-gray-900">
              Retired Individuals
            </h3>

            <p>
              Retired government or private sector employees who want a
              dignified business that generates regular monthly returns and
              keeps them productively engaged.
            </p>

            <h3 className="font-medium text-gray-900">
              Existing Kirana Store Owners
            </h3>

            <p>
              Unorganised shop owners who want to upgrade to a professional
              branded format with better systems, better product range, better
              margins, and better customer trust.
            </p>

            <h3 className="font-medium text-gray-900">
              Young Entrepreneurs
            </h3>

            <p>
              First-time business owners who want the security of an established
              brand and a complete support system rather than building
              everything from scratch.
            </p>

            <h3 className="font-medium text-gray-900">Investors</h3>

            <p>
              People with ₹15 to ₹22 Lakh available who want to deploy it in a
              tangible retail business with real assets and recurring monthly
              revenue.
            </p>

            <p>Basic eligibility:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Space of 600 to 1000 sq. ft. in a suitable location in Greater
                Noida, whether owned or on lease.
              </li>
              <li>Investment readiness of ₹15 Lakh to ₹22 Lakh.</li>
              <li>
                Willingness to maintain Buyzaar Mart brand and operational
                standards.
              </li>
              <li>
                Basic literacy in Hindi or English, with full training provided
                by Buyzaar Mart.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Buyzaar Mart Franchise Stores &ndash; Growing Across India
            </h2>

            <p>
              Greater Noida is one of the most important cities in The Buyzaar
              Mart&apos;s expansion roadmap, but our franchise network is
              growing steadily across North India and beyond.
            </p>

            <p>We are currently opening franchise stores in:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Greater Noida and Noida &mdash; Uttar Pradesh</li>
              <li>Faridabad and Gurugram &mdash; Haryana</li>
              <li>Ghaziabad and Meerut &mdash; Uttar Pradesh</li>
              <li>Delhi and surrounding NCR localities</li>
              <li>Agra, Lucknow, Kanpur &mdash; Uttar Pradesh</li>
              <li>Other Tier 2 and Tier 3 cities across North India</li>
            </ul>

            <p>
              Every Buyzaar Mart store, regardless of city, follows the same
              brand standards, the same FOCM model, and delivers the same
              trusted shopping experience. A customer who shops at a Buyzaar
              Mart in Greater Noida and then visits a store in Faridabad will
              immediately recognise the same quality, the same pricing
              philosophy, and the same community-first approach.
            </p>

            <p>
              Our vision is to build a pan-India network of neighbourhood
              supermarkets that are accessible, affordable, and genuinely
              trusted by the communities they serve. Every franchise partner who
              joins today is a part of making that vision real.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions &ndash; Retail Store Franchise in
              Greater Noida
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the minimum investment for a Buyzaar Mart retail
                  franchise in Greater Noida?
                </h3>
                <p className="mt-2">
                  The total investment is approximately ₹13 Lakh to ₹18 Lakh for
                  a Mini Mart (600&ndash;900 sq. ft.), covering franchise fee,
                  setup, branding, POS, inventory, and working capital. Property
                  rent is separate.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. Is prior retail or business experience needed to apply?
                </h3>
                <p className="mt-2">
                  No. The Buyzaar Mart provides complete training before launch.
                  No prior retail experience is required. Our team trains you
                  and your staff on everything needed to run the store well.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. What exactly is the FOCM model?
                </h3>
                <p className="mt-2">
                  FOCM stands for Franchise Owned, Company Managed. You own the
                  investment and earn the returns. Buyzaar Mart manages
                  operations, supply chain, billing systems, and marketing on
                  your behalf.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. What if products expire or get damaged in my store?
                </h3>
                <p className="mt-2">
                  Buyzaar Mart has a clear policy of taking back expired and
                  damaged goods from franchise stores. Your investment is
                  protected from stock losses, which is one of the rarest
                  benefits in Indian retail franchising.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. How long does it take to open the store after applying?
                </h3>
                <p className="mt-2">
                  Typically 30 to 60 days from the date of signing the franchise
                  agreement, depending on property condition and local permit
                  requirements in Greater Noida.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. What size of space do I need and where should it be
                  located in Greater Noida?
                </h3>
                <p className="mt-2">
                  You need 600 to 900 sq. ft. of commercial or semi-commercial
                  space. Ideal locations are sector market strips, colony
                  commercial shops, housing society ground floors, and
                  neighbourhood market areas across Greater Noida sectors.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. How do I apply for the Buyzaar Mart franchise in Greater
                  Noida?
                </h3>
                <p className="mt-2">
                  Visit{" "}
                  <a
                    href="https://www.thebuyzaarmart.com/franchise"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    www.thebuyzaarmart.com/franchise
                  </a>{" "}
                  and fill in the inquiry form. Our franchise team will contact
                  you promptly. You can also reach out at{" "}
                  <a
                    href="https://www.thebuyzaarmart.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    www.thebuyzaarmart.com/contact
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Greater Noida Franchise Today
              </h2>

              <p className="mb-4 text-gray-800">
                Ready to open your own retail store franchise in Greater Noida?
                The first step takes less than two minutes.
              </p>

              <p className="mb-4 text-gray-800">
                Fill in the inquiry form on our franchise page with your name,
                phone number, and proposed location in Greater Noida. Our
                franchise team will reach out promptly, answer all your
                questions, and guide you through every step of the process.
              </p>

              <h3 className="mb-3 text-lg font-medium text-gray-900 sm:text-xl">
                The Right Time. The Right Brand. The Right City.
              </h3>

              <p className="mb-4 text-gray-800">
                Greater Noida is growing. Its residents are ready for better
                retail. And The Buyzaar Mart is the brand that can help you
                deliver it &mdash; with a low investment, a complete support
                system, a proven model, and a genuine community-first approach.
              </p>

              <p className="mb-4 text-gray-800">
                You bring the space and the commitment. We bring the brand, the
                systems, the supply chain, and the support.
              </p>

              <p className="mb-4 text-gray-800">
                Apply today at{" "}
                <a
                  href="https://www.thebuyzaarmart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.thebuyzaarmart.com
                </a>{" "}
                and open your Buyzaar Mart retail store franchise in Greater
                Noida.
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">📞Phone / WhatsApp:</span>{" "}
                9217991727
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Business Hours:</span> Monday to
                Saturday, 10:00 AM &ndash; 6:00 PM
              </p>

              <p className="mt-4 text-gray-800">
                The Buyzaar Mart &mdash; &quot;Your Friendly Neighbourhood
                Store.&quot;
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="greater-noida"
            currentSlug="/greaternoida/retail-store-franchise-in-greater-noida"
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