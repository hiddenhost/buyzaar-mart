import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Franchise Business in Greater Noida West - Build Your Own Retail Empire with The Buyzaar Mart",
  description:
    "Explore The Buyzaar Mart franchise business opportunity in Greater Noida West with Mini Mart, Super Mart, and Hyper Mart formats under the FOCM model, strong brand support, and investment starting from ₹15 Lakh.",
  url: "https://www.thebuyzaarmart.com/greater-noida-west/franchise-business-in-greater-noida-west",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greater Noida West",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Greater Noida West",
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
      name: "What is the minimum investment to start a franchise business in Greater Noida West with The Buyzaar Mart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum investment starts from ₹15 Lakh for the Mini Mart format covering 600 to 1,000 sq. ft. This includes opening stock, store interior, POS software, franchise fee including 18% GST, and a refundable security deposit. Super Mart and Hyper Mart investments are higher and depend on store area.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the Super Mart and Hyper Mart formats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Super Mart covers 1,001 to 3,000 sq. ft. and is ideal for sector market-facing shops and township commercial hubs with moderate investment. The Hyper Mart covers 3,001 to 8,000 sq. ft. and is designed for prime commercial locations with large catchment areas. Both formats include full POS, CRM, branding, and Buyzaar operational support.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail or business experience to run a Buyzaar Mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No experience is required. The FOCM model means Buyzaar handles supply chain, technology, staff training, and marketing. Full training and ongoing operational support are provided to every franchisee.",
      },
    },
    {
      "@type": "Question",
      name: "What gross margin can I expect from a Buyzaar Mart franchise in Greater Noida West?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Buyzaar Mart model is designed to deliver an effective gross margin of 18 to 20%. Actual monthly earnings depend on store format, location, daily footfall, and operational efficiency of the specific store.",
      },
    },
    {
      "@type": "Question",
      name: "Is my inventory risk protected as a Buyzaar Mart franchisee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Buyzaar offers hassle-free inventory assurance. Expired and damaged goods are taken back by the company. This protects the franchisee's working capital and removes the biggest hidden risk in grocery retail ownership.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Greater Noida West are best suited for a Buyzaar Mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Township commercial blocks in Gaur City, Supertech Eco Village, Mahagun Mywoods, ATS Happy Trails, and Nimbus Hyde Park are excellent for Mini Mart and Super Mart formats. High-footfall intersections near Gaur Chowk, Bisrakh Road, and the Knowledge Park V belt are well-suited for Super Mart and Hyper Mart formats.",
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
              Franchise Business in Greater Noida West &mdash; Build Your Own
              Retail Empire with The Buyzaar Mart
            </h1>

            <p>
              Greater Noida West, popularly known as Noida Extension, is no
              longer just an affordable housing destination. Over the last five
              years, it has transformed into one of the most densely populated
              and economically active corridors in the entire NCR region.
            </p>

            <p>
              With township after township delivering possession &mdash; Gaur
              City, Supertech Eco Village, ATS Happy Trails, Mahagun Mywoods,
              Nimbus Hyde Park, and dozens more &mdash; Greater Noida West is
              now home to hundreds of thousands of households who shop, spend,
              and demand quality retail every single day.
            </p>

            <p>
              Yet for all its residential energy, Greater Noida West still
              suffers from a critical shortage of organised, branded
              neighbourhood retail. The large supermarket chains have largely
              stayed away from the sector-level lanes and society-facing streets
              that form the real commercial fabric of this area.
            </p>

            <p>
              This is exactly the opportunity that The Buyzaar Mart franchise
              business in Greater Noida West is designed to fill &mdash; a
              neighbourhood supermarket built for the modern resident, available
              to local entrepreneurs at a genuinely affordable investment
              starting from ₹15 Lakh.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Greater Noida West Retail Opportunity: Why Now and Why Here
            </h2>

            <p>
              The numbers around Greater Noida West are striking for any retail
              entrepreneur paying attention. Gaur City alone is estimated to
              house over 1 lakh residents across its multiple phases.
            </p>

            <p>
              Township clusters along Bisrakh Road, Dadri Road, and the
              Knowledge Park V belt add hundreds of thousands more. The Aqua
              Line Metro now connects Greater Noida West to Noida Sector 51, and
              planned extensions will deepen that connectivity further.
            </p>

            <p>
              What this means for a franchise business is straightforward: you
              have a captive, concentrated, middle-to-upper-middle-class
              consumer base that is already spending significantly on groceries,
              FMCG products, personal care, home care, and daily essentials
              &mdash; every single day, every single month.
            </p>

            <p>
              Here is why the franchise opportunity in Greater Noida West is
              exceptional right now:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Residential density is among the highest in NCR for
                new-construction townships, meaning consistent and predictable
                daily footfall for any organised grocery store located within
                walking or e-rickshaw distance of large apartment complexes.
              </li>
              <li>
                Organised retail penetration at the sector-market and
                society-street level remains very low. Most residents still rely
                on unorganised kirana stores that lack variety, consistency, and
                pricing transparency. A well-branded Buyzaar Mart immediately
                stands out and attracts loyalty.
              </li>
              <li>
                The demographic profile &mdash; young working professionals,
                dual-income families, and aspirational first-time homeowners
                &mdash; is exactly the shopper who values quality, variety, and
                convenience over the cheapest available option. This supports
                higher average transaction values and better gross margin
                realisation.
              </li>
              <li>
                Commercial spaces in Greater Noida West &mdash; ground-floor
                shops in new buildings, sector-market-facing units, society
                commercial blocks &mdash; are still available at significantly
                lower rents compared to established Noida or Delhi markets,
                keeping operating costs low and profitability higher.
              </li>
            </ul>

            <p>
              In short, Greater Noida West presents a textbook franchise
              opportunity: high demand, low organised competition, affordable
              entry, and a customer base that is ready to spend. The Buyzaar
              Mart franchise business model is built to capture it.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Your Franchise Business Partner
            </h2>

            <p>
              The Buyzaar Mart is a rapidly growing neighbourhood supermarket
              franchise brand headquartered in Sector-6, Noida. The brand&apos;s
              tagline &mdash; &quot;Your Friendly Neighborhood Store&quot;
              &mdash; captures its core commercial promise: the pricing power
              and product variety of an organised supermarket, delivered with
              the warmth and accessibility of a neighbourhood store.
            </p>

            <p>
              The Buyzaar Mart is FSSAI licensed, GST registered, and MSME
              certified. Its supply chain includes partnerships with over 50 of
              India&apos;s most trusted FMCG companies: Tata Consumer, HUL, ITC,
              Nestle, P&amp;G, Dabur, Patanjali, Britannia, Parle, Godrej,
              Marico, Emami, Adani Wilmar, Cadbury, Coca-Cola, Himalaya,
              Reckitt, and many more.
            </p>

            <p>
              This means every Buyzaar Mart store opens with instant product
              credibility &mdash; your shelves are stocked with brands customers
              already trust and reach for daily.
            </p>

            <p>
              The brand currently operates running stores in Sector 44 Noida
              (Chalera), Gangoh, Behat Saharanpur, and Bahadrabad Haridwar, with
              upcoming stores expanding across NCR including Ghaziabad. The
              geographic focus of its expansion is firmly in Uttar Pradesh and
              NCR &mdash; making Greater Noida West a natural and strategic next
              territory for franchisee growth.
            </p>

            <p>
              The Buyzaar Mart operates on the FOCM (Franchise Owned, Company
              Managed) model, which is what truly differentiates it from most
              other franchise business opportunities in Greater Noida West.
              Under this model, you own the store and the returns, while
              Buyzaar manages the operational complexity &mdash; supply chain,
              technology, branding, marketing, staff training, and backend
              support.
            </p>

            <p>
              For a first-time business owner, this is the difference between
              struggling alone and succeeding with a proven system behind you.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Understanding the FOCM Franchise Model
            </h2>

            <p>
              Before choosing any franchise business in Greater Noida West, it
              is important to understand the model you are entering. The
              Buyzaar Mart&apos;s FOCM model works as follows:
            </p>

            <h3 className="font-medium text-gray-900">You Own:</h3>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>The investment made into the store.</li>
              <li>The physical store and its assets.</li>
              <li>The monthly revenue and income generated.</li>
              <li>
                The long-term business legacy &mdash; it is your store to grow
                and pass on.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">Buyzaar Manages:</h3>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Supply chain and product procurement from 50+ FMCG partners.</li>
              <li>
                Store interior design, branding, and uniform store experience.
              </li>
              <li>
                POS-enabled billing system and inventory management technology.
              </li>
              <li>
                CRM (Customer Relationship Management) setup and management.
              </li>
              <li>Staff training and ongoing operational guidance.</li>
              <li>
                Hyper-local marketing campaigns targeted to your specific
                location in Greater Noida West.
              </li>
              <li>
                Customer acquisition strategies for the store&apos;s launch and
                beyond.
              </li>
              <li>
                Expired and damaged stock buyback &mdash; your inventory risk is
                protected.
              </li>
            </ul>

            <p>
              This division of responsibilities is the reason why Buyzaar Mart
              franchisees do not need prior retail experience. The system is
              designed to make you profitable whether you are a first-time
              entrepreneur, a homemaker with a commercial space, a retired
              professional, or a salaried employee building a second income.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Store Formats: Mini Mart, Super Mart &amp; Hyper Mart
            </h2>

            <p>
              The Buyzaar Mart offers three store formats, each suited to a
              different investment level, space availability, and business
              ambition. Here is a detailed breakdown of all three &mdash; with a
              particular focus on how the Super Mart and Hyper Mart formats fit
              the Greater Noida West market.
            </p>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600 &ndash; 1,000 Sq. Ft.)
            </h3>

            <p>
              The Mini Mart is the entry-level format &mdash; perfect for
              society-level commercial blocks, lane-facing ground-floor shops,
              or smaller sector market units in Greater Noida West. It is
              designed for an entrepreneur who wants to start small, validate
              the model, and build confidence before scaling.
            </p>

            <p>
              <span className="font-semibold">Starting Investment:</span> From
              ₹15 Lakh
            </p>

            <p>
              The investment covers opening stock (FMCG and grocery essentials),
              store interior and branded fit-out, POS software licence fee,
              franchise fee (inclusive of 18% GST), and a refundable security
              deposit.
            </p>

            <h3 className="font-medium text-gray-900">
              Super Mart (1,001 &ndash; 3,000 Sq. Ft.)
            </h3>

            <p>
              The Super Mart is the most recommended franchise format for
              Greater Noida West and the most popular Buyzaar store type
              overall. At 1,001 to 3,000 sq. ft., it delivers the full
              neighbourhood supermarket experience &mdash; wide aisles, deep
              product range, strong customer dwell time, and the ability to
              serve entire locality clusters as a primary grocery destination.
            </p>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3,001 &ndash; 8,000 Sq. Ft.)
            </h3>

            <p>
              The Hyper Mart is The Buyzaar Mart&apos;s flagship large-format
              store &mdash; a full destination retail experience in 3,001 to
              8,000 sq. ft. of commercial space. It is designed for
              entrepreneurs with access to prime commercial real estate at
              competitive lease rates, or those who own substantial commercial
              property in high-footfall zones of Greater Noida West.
            </p>

            <p>
              <span className="font-semibold">Investment:</span> Higher, scaled
              to store area (use the calculator at{" "}
              <a
                href="https://www.thebuyzaarmart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.thebuyzaarmart.com
              </a>{" "}
              for a precise figure)
            </p>

            <p>
              The investment covers a comprehensive opening stock across
              thousands of SKUs, a premium store interior and customer
              experience design, multi-terminal POS and a full CRM ecosystem,
              franchise fee (inclusive of 18% GST), and refundable security
              deposit.
            </p>

            <p>
              Why the Hyper Mart works in Greater Noida West: Greater Noida
              West&apos;s major commercial intersections &mdash; near Gaur
              Chowk, the Bisrakh main road market, Noida Extension&apos;s
              township commercial hubs, and the Knowledge Park V belt &mdash;
              already have the footfall to support a large-format supermarket
              destination.
            </p>

            <p>
              A Buyzaar Hyper Mart in one of these locations can serve a
              catchment of 10,000&ndash;20,000 households, stocking thousands
              of SKUs across every daily-need category and competing directly
              with large chain stores while maintaining the hyper-local identity
              and pricing advantage of the Buyzaar brand.
            </p>

            <p>
              The Hyper Mart also maximises the brand&apos;s technology
              advantage &mdash; with multi-terminal POS, real-time inventory
              tracking, customer loyalty programs, and full CRM capabilities,
              the Hyper Mart becomes an extremely data-driven, efficient retail
              operation that continuously improves margin performance over time.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Key Reasons to Start a Franchise Business in Greater Noida West
              with Buyzaar Mart
            </h2>

            <ol className="ml-4 list-inside list-decimal space-y-2">
              <li>
                Consistent 18&ndash;20% gross margin. The Buyzaar Mart model is
                structured to deliver effective gross margins of 18 to 20%
                across all store formats.
              </li>
              <li>
                Expired &amp; damaged stock buyback. Buyzaar&apos;s hassle-free
                inventory assurance means the company takes back expired and
                damaged goods.
              </li>
              <li>
                50+ major FMCG brand partnerships. From Tata and HUL to Nestle
                and Parle, every Buyzaar store carries India&apos;s most trusted
                brands.
              </li>
              <li>
                POS + CRM technology from day one. Every store runs on a modern
                POS-enabled billing system with inventory management and
                customer relationship management built in.
              </li>
              <li>
                Hyper-local marketing support. Buyzaar runs targeted marketing
                campaigns specific to each franchise location.
              </li>
              <li>
                Uniform branding &amp; store design. Every Buyzaar Mart follows
                the same professional branding, signage, shelving design, store
                layout, and visual identity.
              </li>
              <li>
                No prior retail experience needed. The FOCM model means Buyzaar
                manages the operational complexity while you receive full
                training and backend support.
              </li>
            </ol>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Start Your Franchise Business in Greater Noida West
            </h2>

            <p>
              Getting started with The Buyzaar Mart is a three-step process:
            </p>

            <h3 className="font-medium text-gray-900">
              Step 1 &mdash; Submit an Inquiry
            </h3>

            <p>
              Visit{" "}
              <a
                href="https://www.thebuyzaarmart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.thebuyzaarmart.com
              </a>
              , fill in the quick inquiry form with your details (name, phone,
              email, state, city, message). The team responds within 24 hours.
            </p>

            <p>
              You can also call 9217991727 or email{" "}
              <a
                href="mailto:info@thebuyzaarmart.com"
                className="hover:underline"
              >
                info@thebuyzaarmart.com
              </a>
              .
            </p>

            <h3 className="font-medium text-gray-900">Step 2 &mdash; Documentation</h3>

            <p>
              After your inquiry is approved, you are guided through KYC and
              legal documentation, franchise agreement review and signing, and
              complete compliance support. The process is transparent, simple,
              and fully assisted.
            </p>

            <h3 className="font-medium text-gray-900">Step 3 &mdash; Store Launch</h3>

            <p>
              With documentation complete, Buyzaar&apos;s team drives your store
              launch from start to finish &mdash; interior setup, stock
              procurement, staff training, a local marketing campaign, and
              customer acquisition support. You are supported through and beyond
              the grand opening day.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Should Consider This Franchise Business in Greater Noida West
            </h2>

            <p>
              The Buyzaar Mart franchise is open to a wide range of aspiring
              entrepreneurs. You are a strong candidate if you are:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                A salaried professional in Noida, Delhi, or Greater Noida
                looking to build a second income or transition into full-time
                entrepreneurship with a proven model.
              </li>
              <li>
                A homemaker or housewife with access to a commercial space who
                wants a managed business that does not demand round-the-clock
                personal involvement.
              </li>
              <li>
                A retired government or private sector employee seeking a
                dignified, income-generating livelihood with low operational
                stress.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Buyzaar Mart Vision for Greater Noida West
            </h2>

            <p>
              The Buyzaar Mart&apos;s vision is to build a network of trusted
              neighbourhood stores across India with a focus on transparency,
              accessibility, and community care.
            </p>

            <p>
              In Greater Noida West, this vision finds one of its most natural
              homes &mdash; a rapidly urbanising area with a young, aspirational
              population that is ready for organised retail but has not yet been
              served by it at the neighbourhood level.
            </p>

            <p>
              The brand&apos;s four pillars &mdash; Simplicity, Reliability,
              Affordability &amp; Quality, and Ownership &amp; Legacy &mdash;
              are not just marketing language. They reflect the operational
              commitments that every Buyzaar franchisee experiences: from the
              reliability of supply and the simplicity of the managed operations
              model, to the affordability that retains customer loyalty and the
              legacy value that makes the store worth building and worth passing
              on.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the minimum investment to start a franchise
                  business in Greater Noida West with The Buyzaar Mart?
                </h3>
                <p className="mt-2">
                  The minimum investment starts from ₹15 Lakh for the Mini Mart
                  format (600&ndash;1,000 sq. ft.), covering opening stock,
                  store interior, POS software, franchise fee (18% GST
                  included), and a refundable security deposit. Super Mart and
                  Hyper Mart investments are higher and calculated based on
                  store area using the investment calculator at{" "}
                  <a
                    href="https://www.thebuyzaarmart.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    www.thebuyzaarmart.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. What is the difference between the Super Mart and Hyper
                  Mart formats?
                </h3>
                <p className="mt-2">
                  The Super Mart covers 1,001&ndash;3,000 sq. ft. and is ideal
                  for sector market-facing shops and township commercial hubs
                  with moderate investment. The Hyper Mart covers
                  3,001&ndash;8,000 sq. ft. and is designed for prime commercial
                  locations with large catchment areas. Both formats include
                  full POS, CRM, branding, and Buyzaar operational support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. Do I need retail or business experience to run a Buyzaar
                  Mart franchise?
                </h3>
                <p className="mt-2">
                  No experience is required. The FOCM (Franchise Owned, Company
                  Managed) model means Buyzaar handles supply chain, technology,
                  staff training, and marketing. Full training and ongoing
                  operational support are provided to every franchisee.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. What gross margin can I expect from a Buyzaar Mart
                  franchise in Greater Noida West?
                </h3>
                <p className="mt-2">
                  The Buyzaar Mart model is designed to deliver an effective
                  gross margin of 18&ndash;20%. Actual monthly earnings depend
                  on store format, location, daily footfall, and operational
                  efficiency of the specific store.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. Is my inventory risk protected as a Buyzaar Mart
                  franchisee?
                </h3>
                <p className="mt-2">
                  Yes. Buyzaar offers hassle-free inventory assurance
                  &mdash; expired and damaged goods are taken back by the
                  company. This protects the franchisee&apos;s working capital
                  and removes the biggest hidden risk in grocery retail
                  ownership.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. Which areas of Greater Noida West are best suited for a
                  Buyzaar Mart franchise?
                </h3>
                <p className="mt-2">
                  Township commercial blocks in Gaur City, Supertech Eco
                  Village, Mahagun Mywoods, ATS Happy Trails, and Nimbus Hyde
                  Park are excellent for Mini Mart and Super Mart formats.
                  High-footfall intersections near Gaur Chowk, Bisrakh Road, and
                  the Knowledge Park V belt are well-suited for Super Mart and
                  Hyper Mart formats.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                The Right Time. The Right Brand. The Right City.
              </h2>

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
                <span className="font-semibold">📞 Phone / WhatsApp:</span>{" "}
                9217991727
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Business Hours:</span> Monday to
                Saturday, 10:00 AM &ndash; 6:00 PM
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="greater-noida-west"
            currentSlug="/greater-noida-west/franchise-business-in-greater-noida-west"
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