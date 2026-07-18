import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grocery Franchise in Kanpur - The Buyzaar Mart",
  description:
    "Open a grocery franchise in Kanpur with The Buyzaar Mart. Choose from MiniMart, SuperMart, or HyperMart formats under FOFO, FOCO, or FOCM models with full operational support, supply chain access, and hyper-local marketing.",
  url: "https://www.thebuyzaarmart.com/kanpur/how-to-open-grocery-franchise-kanpur",
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
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between a MiniMart, SuperMart, and HyperMart franchise format?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MiniMart is a compact 600–800 sq ft store ideal for residential areas serving daily grocery needs. The SuperMart is a mid-size 1000–2,500 sq ft neighborhood store with a wider product range. The HyperMart is a large-format 2,500+ sq ft store that offers a complete family shopping experience across grocery, lifestyle, and general merchandise categories.",
      },
    },
    {
      "@type": "Question",
      name: "What is the FOCO model and how is it different from FOCM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the FOCO (Franchise Owned, Company Operated) model, the company takes complete operational control of the store while the franchisee retains ownership and earns a pre-agreed return. In the FOCM (Franchise Owned, Company Managed) model, operations are also handled by the company but may involve more collaborative decision-making with the franchise owner. Both are ideal for passive investors.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior grocery retail experience to open a Buyzaar Mart franchise in Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No prior retail experience is needed. Under the FOCO and FOCM models, The Buyzaar Mart handles all operations. Even under the FOFO model, the company provides complete training and operational guidelines to help you run the store successfully.",
      },
    },
    {
      "@type": "Question",
      name: "How much space do I need to open a grocery franchise in Kanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The space requirement depends on the format: MiniMart requires 300–800 sq ft, SuperMart requires 800–2,500 sq ft, and HyperMart requires 2,500 sq ft or more. The store can be in an owned or rented commercial space.",
      },
    },
    {
      "@type": "Question",
      name: "What is the expected timeline from enquiry to store launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The typical timeline from signing the franchise agreement to the store grand opening is 30 to 60 days, depending on the condition of the space, speed of approvals, and interior setup.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of ongoing support does The Buyzaar Mart provide after the store opens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Post-launch support includes supply chain management, marketing campaigns, regular operational audits, staff training updates, new product introductions, and access to the company's technology platform for real-time business monitoring.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start with a MiniMart and upgrade to a SuperMart or HyperMart later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Buyzaar Mart encourages franchisee growth. High-performing MiniMart and SuperMart operators are given priority access to upgrade opportunities, multi-unit franchise rights, and expansion to larger formats or additional locations in Kanpur and nearby cities.",
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
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1">
          <div className="max-w-4xl space-y-4 font-serif font-medium leading-relaxed text-gray-700">
            <h1 className="mt-8 text-2xl font-medium text-gray-900 sm:text-3xl">
              How to Open a Grocery Franchise in Kanpur with The Buyzaar Mart
            </h1>

            <p>
              The grocery retail sector in India is undergoing a historic
              transformation. What was once dominated by unorganized kirana
              stores is now rapidly shifting toward organized, branded retail
              formats that offer customers a better shopping experience,
              consistent product quality, and competitive pricing. At the heart
              of this retail revolution are franchise-based grocery chains that
              are expanding aggressively into cities like Kanpur, where demand
              for modern, reliable grocery stores is growing faster than ever
              before.
            </p>

            <p>
              If you are looking to open a grocery franchise in Kanpur, The
              Buyzaar Mart offers one of the most complete, scalable, and
              investor-friendly franchise opportunities in the organized grocery
              retail segment. With multiple store formats — MiniMart, SuperMart,
              and HyperMart — and flexible business models including FOFO, FOCO,
              and FOCM, The Buyzaar Mart gives you the freedom to invest at the
              scale that suits you while benefiting from a powerful brand, proven
              systems, and end-to-end operational support.
            </p>

            <p>
              This detailed guide is your complete resource for understanding how
              to open a grocery franchise in Kanpur with The Buyzaar Mart, what
              store formats are available, how the business models work, and what
              you can expect in terms of investment, returns, and brand support.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Grocery Franchise Sector Is Booming in Kanpur
            </h2>

            <p>
              Kanpur is the commercial capital of Uttar Pradesh and one of the
              most densely populated cities in North India. With a population of
              over 3 million and a rapidly urbanizing consumer base, the city
              presents enormous opportunities for organized grocery retail. Here
              is why the grocery franchise business in Kanpur is a smart
              investment right now:
            </p>

            <p>
              <strong>Massive Untapped Demand:</strong> The majority of grocery
              retail in Kanpur still happens through unorganized kirana stores.
              While these stores serve a purpose, they cannot match the product
              range, pricing consistency, hygiene standards, and shopping
              experience offered by a branded grocery franchise. This gap
              represents a significant market opportunity.
            </p>

            <p>
              <strong>Changing Consumer Preferences:</strong> Kanpur&apos;s
              consumers — especially the younger generation and working families
              — increasingly prefer shopping at organized outlets where they can
              find everything under one roof, enjoy transparent pricing, and
              trust product quality.
            </p>

            <p>
              <strong>Rising Household Incomes:</strong> With growing employment
              in sectors like education, healthcare, IT services, and
              manufacturing, disposable household incomes in Kanpur are rising.
              More money in pockets means more spending on quality grocery
              products.
            </p>

            <p>
              <strong>Urban Expansion:</strong> Newer residential colonies and
              townships are coming up across areas like Kalyanpur, Kakadeo,
              Kidwai Nagar, Barra, and Swaroop Nagar. These localities lack
              proper organized grocery stores, creating a direct opportunity for
              Buyzaar Mart franchisees.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Understanding the Three Store Formats — MiniMart, SuperMart, and
              HyperMart
            </h2>

            <p>
              One of the most distinctive features of The Buyzaar Mart franchise
              program is its multi-format approach. Depending on your investment
              capacity, available space, and target market, you can choose from
              three different store formats. Each format is designed to serve a
              specific type of customer base and commercial environment.
            </p>

            <h3 className="font-medium text-gray-900">MiniMart</h3>

            <p>
              The MiniMart is the entry-level franchise format offered by The
              Buyzaar Mart. It is designed for smaller localities, residential
              neighborhoods, and areas where a compact but well-stocked grocery
              store can serve the daily needs of a close-knit community.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <strong>Store Size:</strong> Typically between 600 and 800
                square feet.
              </li>
              <li>
                <strong>Target Locations:</strong> Residential colonies,
                apartment complexes, smaller commercial streets, and localities
                with moderate footfall but consistent daily demand.
              </li>
              <li>
                <strong>Product Range:</strong> A carefully curated selection of
                the most essential grocery and FMCG products — covering daily
                needs such as staples, packaged foods, personal care items, and
                household essentials.
              </li>
              <li>
                <strong>Investment Profile:</strong> The lowest entry investment
                among the three formats, making it the most accessible option
                for first-time franchisees or investors with limited capital.
              </li>
              <li>
                <strong>Ideal For:</strong> Local entrepreneurs, homemakers
                looking to start a business, individuals with a small commercial
                space, or investors exploring the grocery franchise sector for
                the first time.
              </li>
            </ul>

            <p>
              The MiniMart format is particularly powerful in Kanpur&apos;s many
              densely packed residential mohallas and colony areas, where
              residents value convenience and prefer a nearby, familiar store for
              their daily grocery needs.
            </p>

            <h3 className="font-medium text-gray-900">SuperMart</h3>

            <p>
              The SuperMart is the mid-tier franchise format and represents the
              sweet spot between investment size and revenue potential. It is a
              full-format neighborhood grocery store that carries a comprehensive
              range of products across all essential categories.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <strong>Store Size:</strong> Typically between 1,000 and 2,500
                square feet.
              </li>
              <li>
                <strong>Target Locations:</strong> Main market areas, busy
                locality roads, shopping complexes, and high-footfall
                neighborhoods with a larger catchment area.
              </li>
              <li>
                <strong>Product Range:</strong> A much wider selection including
                a broader range of branded FMCG products, more SKUs across each
                category, packaged and fresh food options, and a larger personal
                care and household section.
              </li>
              <li>
                <strong>Investment Profile:</strong> Moderate investment with
                strong revenue potential, designed to generate high daily
                transaction volumes.
              </li>
              <li>
                <strong>Ideal For:</strong> Experienced entrepreneurs,
                businessmen looking to diversify, investors with access to a
                larger commercial space, or professionals who want a
                well-established business format with proven revenue potential.
              </li>
            </ul>

            <p>
              The SuperMart format is ideal for Kanpur&apos;s busier localities
              — areas like Civil Lines, Swaroop Nagar, Kidwai Nagar, and
              Armapur, where consumers want the full grocery shopping experience
              without travelling to a distant large-format store.
            </p>

            <h3 className="font-medium text-gray-900">HyperMart</h3>

            <p>
              The HyperMart is The Buyzaar Mart&apos;s flagship large-format
              store concept. It is a complete retail destination that goes far
              beyond basic grocery to offer customers a one-stop shopping
              experience for all their household and lifestyle needs.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <strong>Store Size:</strong> Typically 3,000 square feet and
                above — often ranging from 3,000 to 8,000 square feet or more
                for premium locations.
              </li>
              <li>
                <strong>Target Locations:</strong> High-traffic commercial
                zones, standalone buildings, large retail complexes, areas with
                strong weekend shopping traffic, and locations with wide
                catchment areas that can draw customers from multiple localities.
              </li>
              <li>
                <strong>Product Range:</strong> The complete Buyzaar Mart
                product portfolio including fresh fruits and vegetables, frozen
                foods, specialty and organic products, home and kitchen goods,
                small appliances and electronics accessories, stationery and
                general merchandise, and expanded fashion and lifestyle basics.
              </li>
              <li>
                <strong>Investment Profile:</strong> Higher investment with the
                highest revenue potential and profitability, suited for investors
                who can commit to a larger space.
              </li>
              <li>
                <strong>Ideal For:</strong> High-net-worth investors, business
                groups or families, experienced retail operators, or individuals
                who want to build the most prominent grocery and lifestyle retail
                store in their locality.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Format Comparison at a Glance
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                      Store Format
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                      Size Range
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                      Investment Level
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      MiniMart
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      600 – 800 sq ft
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Low</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Daily needs, residential areas
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      SuperMart
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      1,000 – 2,500 sq ft
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Medium
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Neighborhood grocery, wide range
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      HyperMart
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      3,000+ sq ft
                    </td>
                    <td className="border border-gray-300 px-4 py-2">High</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Full family shopping destination
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step Process to Open a Grocery Franchise in Kanpur with
              The Buyzaar Mart
            </h2>

            <p>
              <strong>Step 1 — Submit Your Franchise Enquiry:</strong> Reach out
              to The Buyzaar Mart&apos;s franchise development team through
              their website, email, or phone. Share your basic details, location
              preference within Kanpur, and the store format and model you are
              interested in.
            </p>

            <p>
              <strong>Step 2 — Initial Consultation:</strong> A franchise
              advisor will schedule a call or meeting to understand your profile,
              explain the available models and formats in detail, walk you
              through the investment structure, and help you identify the format
              best suited to your goals.
            </p>

            <p>
              <strong>Step 3 — Location Identification and Approval:</strong>{" "}
              Find a suitable commercial space in Kanpur that meets the size
              requirements for your chosen format. The Buyzaar Mart&apos;s team
              will evaluate the location based on footfall, catchment area,
              competition, accessibility, and growth potential. Once the location
              is approved, you can move to the next step.
            </p>

            <p>
              <strong>Step 4 — Franchise Agreement:</strong> Both parties sign a
              comprehensive franchise agreement outlining the rights and
              responsibilities of each party, financial arrangements, operational
              standards, duration of the agreement, and renewal terms.
            </p>

            <p>
              <strong>Step 5 — Store Design and Setup:</strong> The Buyzaar
              Mart&apos;s design and infrastructure team takes over the complete
              store setup — including interior layout, shelving and racking
              systems, signage and branding, lighting, air conditioning, and
              billing counter setup. Every store is designed to reflect The
              Buyzaar Mart&apos;s signature look and feel.
            </p>

            <p>
              <strong>Step 6 — Technology Integration:</strong> Your store is
              integrated with The Buyzaar Mart&apos;s centralized POS system,
              inventory management platform, and analytics dashboard. This gives
              you real-time access to sales data, stock levels, and financial
              performance from anywhere.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment and Profitability Overview
            </h2>

            <p>
              The investment required for a Buyzaar Mart grocery franchise in
              Kanpur depends on the store format you choose and the franchise
              model you operate under. In general, the total investment covers:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <strong>Franchise Fee:</strong> The one-time fee for the right
                to operate under The Buyzaar Mart brand.
              </li>
              <li>
                <strong>Store Setup Cost:</strong> Interior construction,
                shelving, furniture, signage, lighting, air conditioning, and
                equipment.
              </li>
              <li>
                <strong>Initial Inventory:</strong> The first stock load to fill
                the store across all product categories.
              </li>
              <li>
                <strong>Technology and POS Setup:</strong> Hardware and software
                for billing, inventory management, and reporting.
              </li>
              <li>
                <strong>Working Capital:</strong> Funds to cover operational
                expenses for the initial months of operation.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Support System for Buyzaar Mart Franchise Partners in Kanpur
            </h2>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <strong>Supply Chain Excellence:</strong> The Buyzaar Mart has
                built direct relationships with manufacturers, distributors, and
                FMCG brand partners across India. Franchisees benefit from this
                negotiated supply chain, ensuring product availability and
                competitive purchase prices.
              </li>
              <li>
                <strong>Centralized Procurement:</strong> All product
                procurement is managed centrally, reducing the operational
                burden on franchisees and ensuring consistent quality and
                pricing across all stores.
              </li>
              <li>
                <strong>Marketing and Brand Building:</strong> Franchisees
                receive full access to The Buyzaar Mart&apos;s marketing
                resources, including digital campaigns, in-store promotional
                materials, festive offers, loyalty programs, and local area
                marketing support.
              </li>
              <li>
                <strong>Training and Development:</strong> Regular training
                programs keep store teams updated on new products, customer
                service best practices, and operational improvements.
              </li>
              <li>
                <strong>Technology Platform:</strong> A robust POS and inventory
                management system ensures seamless billing, accurate stock
                tracking, and real-time business visibility.
              </li>
              <li>
                <strong>Compliance and Legal Support:</strong> Guidance on GST
                registration, FSSAI licensing, trade licensing, and all other
                regulatory requirements to ensure your store operates fully
                compliant from day one.
              </li>
              <li>
                <strong>Performance Reviews:</strong> Regular store audits and
                performance reviews by The Buyzaar Mart&apos;s operations team
                help identify growth opportunities and resolve challenges
                quickly.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Legal and Regulatory Requirements for a Grocery Franchise in
              Kanpur
            </h2>

            <p>
              Operating a grocery franchise in Kanpur requires compliance with
              several legal and regulatory requirements. The Buyzaar Mart guides
              franchise partners through each of these:
            </p>

            <p>
              <strong>FSSAI License:</strong> Mandatory for any business that
              sells food products. The Food Safety and Standards Authority of
              India requires all food retail operators to obtain a valid FSSAI
              license before commencing operations.
            </p>

            <p>
              <strong>GST Registration:</strong> Required for businesses with an
              annual turnover above the prescribed threshold. Most grocery
              franchise stores will need GST registration from the outset.
            </p>

            <p>
              <strong>Trade License:</strong> Issued by the Kanpur Municipal
              Corporation, this license is mandatory for all commercial
              businesses operating within city limits.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FAQs About the Buyzaar Mart Grocery Franchise
            </h2>

            <p>
              <strong>
                Q1. What is the difference between a MiniMart, SuperMart, and
                HyperMart franchise format?
              </strong>{" "}
              The MiniMart is a compact 600–800 sq ft store ideal for
              residential areas serving daily grocery needs. The SuperMart is a
              mid-size 1,000–2,500 sq ft neighborhood store with a wider product
              range. The HyperMart is a large-format 2,500+ sq ft store that
              offers a complete family shopping experience across grocery,
              lifestyle, and general merchandise categories.
            </p>

            <p>
              <strong>
                Q2. What is the FOCO model and how is it different from FOCM?
              </strong>{" "}
              In the FOCO (Franchise Owned, Company Operated) model, the company
              takes complete operational control of the store while the
              franchisee retains ownership and earns a pre-agreed return. In the
              FOCM (Franchise Owned, Company Managed) model, operations are also
              handled by the company but may involve more collaborative
              decision-making with the franchise owner. Both are ideal for
              passive investors.
            </p>

            <p>
              <strong>
                Q3. Do I need prior grocery retail experience to open a Buyzaar
                Mart franchise in Kanpur?
              </strong>{" "}
              No prior retail experience is needed. Under the FOCO and FOCM
              models, The Buyzaar Mart handles all operations. Even under the
              FOFO model, the company provides complete training and operational
              guidelines to help you run the store successfully.
            </p>

            <p>
              <strong>
                Q4. How much space do I need to open a grocery franchise in
                Kanpur?
              </strong>{" "}
              The space requirement depends on the format: MiniMart requires
              300–800 sq ft, SuperMart requires 800–2,500 sq ft, and HyperMart
              requires 2,500 sq ft or more. The store can be in an owned or
              rented commercial space.
            </p>

            <p>
              <strong>
                Q5. What is the expected timeline from enquiry to store launch?
              </strong>{" "}
              The typical timeline from signing the franchise agreement to the
              store grand opening is 30 to 60 days, depending on the condition
              of the space, speed of approvals, and interior setup.
            </p>

            <p>
              <strong>
                Q6. What kind of ongoing support does The Buyzaar Mart provide
                after the store opens?
              </strong>{" "}
              Post-launch support includes supply chain management, marketing
              campaigns, regular operational audits, staff training updates, new
              product introductions, and access to the company&apos;s technology
              platform for real-time business monitoring.
            </p>

            <p>
              <strong>
                Q7. Can I start with a MiniMart and upgrade to a SuperMart or
                HyperMart later?
              </strong>{" "}
              Yes. The Buyzaar Mart encourages franchisee growth.
              High-performing MiniMart and SuperMart operators are given
              priority access to upgrade opportunities, multi-unit franchise
              rights, and expansion to larger formats or additional locations in
              Kanpur and nearby cities.
            </p>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Contact Us — The Buyzaar Mart Franchise Enquiry
              </h2>

              <p className="mb-4 text-gray-800">
                Are you ready to open a grocery franchise in Kanpur? Get in
                touch with The Buyzaar Mart franchise development team today.
                Whether you are interested in the compact MiniMart, the
                neighborhood SuperMart, or the flagship HyperMart format, our
                team will help you choose the right model and guide you from
                enquiry to grand opening.
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">📞 Call / WhatsApp:</span>{" "}
                9217991727
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Franchise Enquiry Email:</span>{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://www.thebuyzaarmart.com"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.thebuyzaarmart.com
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Business Hours:</span> Monday -
                Saturday: 9:00 AM - 7:00 PM
              </p>

              <p className="mt-4 font-semibold text-gray-800">
                Our franchise team is available Monday to Saturday, 10:00 AM to
                6:00 PM IST. A dedicated franchise advisor will connect with you
                within 24 to 48 business hours.
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="kanpur"
            currentSlug="/kanpur/how-to-open-grocery-franchise-kanpur"
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