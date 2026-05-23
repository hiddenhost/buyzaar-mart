import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Franchise Opportunity in Faridabad - The Buyzaar Mart",
  description:
    "Explore the Buyzaar Mart franchise opportunity in Faridabad. Start your grocery retail business with brand backing, operational support, marketing help, and investment starting from ₹15 Lakh.",
  url: "https://www.thebuyzaarmart.com/faridabad/franchise-opportunity-faridabad",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Faridabad",
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
      name: "What is the minimum investment required for a Buyzaar Mart franchise in Faridabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can start a Buyzaar Mart franchise from ₹15 Lakh, which covers store setup, initial inventory, POS system, and launch support.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior retail or business experience to apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Buyzaar Mart FOCM model is designed for first-time entrepreneurs. The company provides complete operational and management support.",
      },
    },
    {
      "@type": "Question",
      name: "What is the FOCM franchise model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM stands for Franchise Owned, Company Managed. You own the business and investment, while Buyzaar Mart manages daily operations, inventory, staff, and backend support.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to expired or damaged goods in my store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyzaar Mart has a unique buyback guarantee under which expired and damaged goods are taken back by the company, helping protect franchisee profit margins.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to launch a Buyzaar Mart store in Faridabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After documentation is complete, the team activates the store launch process. The full setup and grand opening can typically be completed in a few weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of marketing support does Buyzaar Mart provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The brand provides hyper-local marketing campaigns tailored specifically to your franchise location, including social media promotion, local advertising, and customer acquisition campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a franchise in Faridabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit www.thebuyzaarmart.com, fill out the franchise inquiry form, and the team will get back to you with the details required to get started.",
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
              Franchise Opportunity in Faridabad &ndash; Join The Buyzaar Mart
              Family
            </h1>

            <p>
              Faridabad is one of the fastest-growing industrial and residential
              cities in the National Capital Region. With a population of over
              18 lakh people and a rapidly expanding middle class, the demand
              for organized, reliable, and affordable grocery retail has never
              been higher.
            </p>

            <p>
              If you are looking for a smart business opportunity in Faridabad
              that offers steady income, strong brand backing, and end-to-end
              operational support, The Buyzaar Mart franchise is the answer you
              have been searching for.
            </p>

            <p>
              The Buyzaar Mart is a modern neighborhood supermarket chain
              committed to providing transparent, high-quality retail solutions
              that simplify everyday shopping. Built on a people-first
              philosophy, the brand empowers entrepreneurs and local business
              owners to run professionally managed grocery stores under a
              trusted brand name without the complexity of building from
              scratch.
            </p>

            <p>
              Whether you are a first-time entrepreneur, a working professional
              looking for a side business, or an experienced retailer wanting to
              scale under a recognized brand, a Buyzaar Mart franchise in
              Faridabad gives you everything you need to succeed.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Faridabad is the Perfect City for a Grocery Franchise
            </h2>

            <p>
              Faridabad, part of Haryana and located just 25 km from New Delhi,
              is no longer just an industrial hub. It has evolved into a
              thriving urban city with dense residential colonies, growing IT
              parks, organized townships like Sector 85, 86, 87, NIT areas, and
              newer sectors in Greater Faridabad.
            </p>

            <p>
              This rapid urbanization has created a massive, consistent demand
              for daily essentials, and organized retail is still catching up.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <strong>Rising urban population:</strong> Faridabad&apos;s
                population is growing at one of the fastest rates in NCR. More
                households mean more daily grocery demand, making it a natural
                fit for neighborhood supermarkets.
              </li>
              <li>
                <strong>Underpenetrated organized retail:</strong> Despite its
                size, Faridabad is still dominated by unorganized kirana stores.
                An organized, tech-enabled, brand-backed supermarket like
                Buyzaar Mart enjoys a clear competitive advantage in such a
                market.
              </li>
              <li>
                <strong>Strong purchasing power:</strong> Areas like Sector 15,
                16, 17, Neelam Chowk, Ballabhgarh, and Greater Faridabad have
                significant middle-class and upper-middle-class populations who
                prefer quality products, transparent pricing, and a clean
                shopping environment.
              </li>
              <li>
                <strong>Excellent connectivity:</strong> Faridabad is connected
                by NH-19, the Delhi-Faridabad Metro, and multiple state
                highways, making supply chain management and logistics highly
                efficient for franchise partners.
              </li>
              <li>
                <strong>Industrial workforce demand:</strong> With hundreds of
                factories and industrial zones, Faridabad has a large salaried
                workforce that relies on organized grocery stores for daily
                needs, creating a loyal, repeat customer base.
              </li>
            </ul>

            <p>
              Opening a Buyzaar Mart franchise in Faridabad means you are
              entering a market that is ready, hungry, and underserved by
              quality organized retail.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Buyzaar Mart Franchise Model &ndash; FOCM
            </h2>

            <p>
              One of the most talked-about features of The Buyzaar Mart
              franchise is its unique FOCM model, which stands for Franchise
              Owned, Company Managed.
            </p>

            <p>
              This model is specially designed for entrepreneurs who want to own
              a business without getting bogged down in the daily operational
              complexities that typically burden small business owners.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                You own the franchise and the business. The investment, the
                location, and the returns are yours.
              </li>
              <li>
                The company manages the operations, including store management,
                staff training, inventory planning, vendor relationships, POS
                systems, and backend support.
              </li>
            </ul>

            <p>
              This hybrid ownership model gives franchise partners the best of
              both worlds: business ownership with professional management. It
              is ideal for investors and entrepreneurs in Faridabad who want a
              reliable, hands-off business model backed by a growing brand.
            </p>

            <p>
              Beyond FOCM, Buyzaar Mart also offers a FOFO model for those who
              prefer to be more hands-on in running their store while still
              benefiting from the brand&apos;s infrastructure, supply chain, and
              marketing support.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment Details &ndash; Start Your Franchise from ₹15 Lakh
            </h2>

            <p>
              One of the most compelling reasons to consider a Buyzaar Mart
              franchise in Faridabad is the highly accessible investment
              structure. You can start your own supermarket franchise with an
              investment starting from ₹15 Lakh, making it one of the most
              affordable organized grocery franchise opportunities available in
              India today.
            </p>

            <p>This investment covers:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Complete store setup and interior design as per Buyzaar
                Mart&apos;s brand standards.
              </li>
              <li>
                Initial inventory stocking across all product categories.
              </li>
              <li>POS system and billing technology.</li>
              <li>Staff recruitment and training.</li>
              <li>Grand opening and local marketing campaign support.</li>
              <li>Ongoing operational backend support.</li>
            </ul>

            <p>
              Faridabad, with its relatively affordable commercial real estate
              compared to Delhi and Gurgaon, offers excellent opportunities to
              find suitable retail space within a budget. This makes the overall
              cost of setting up a Buyzaar Mart franchise here even more
              attractive.
            </p>

            <p>
              For entrepreneurs in Faridabad who have been waiting for the right
              business opportunity, this is it: a proven brand, a tested model,
              and a market ready to embrace organized grocery retail.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Key Features and Support You Get as a Buyzaar Mart Franchisee
            </h2>

            <p>
              The Buyzaar Mart franchise is built to ensure your success at
              every step. Here is a detailed look at the comprehensive support
              package available to all franchise partners.
            </p>

            <h3 className="font-medium text-gray-900">Rapid Local Visibility</h3>

            <p>
              Buyzaar Mart deploys a distinctive store launch strategy designed
              to create rapid local awareness in your area of Faridabad. From
              hoardings and flyers to social media campaigns targeted at local
              pin codes, every launch is engineered for maximum footfall from
              day one.
            </p>

            <h3 className="font-medium text-gray-900">Hyper-Local Marketing</h3>

            <p>
              The brand runs hyper-local marketing campaigns tailored
              specifically for your franchise location. This means promotions,
              offers, and advertising campaigns that speak directly to your
              neighborhood rather than generic, one-size-fits-all messaging.
            </p>

            <h3 className="font-medium text-gray-900">
              Complete Backend Operational Support
            </h3>

            <p>
              One of the biggest challenges in running a grocery store is
              managing the backend, including supplier coordination, inventory
              replenishment, billing, and compliance. Buyzaar Mart handles all
              of this for you, so you can focus on your customers.
            </p>

            <h3 className="font-medium text-gray-900">
              Customer Acquisition Solutions
            </h3>

            <p>
              The brand provides dedicated customer acquisition strategies to
              help you build a loyal customer base quickly. From loyalty
              programs to referral drives and community engagement, Buyzaar Mart
              ensures your store stays busy.
            </p>

            <h3 className="font-medium text-gray-900">
              Hassle-Free Inventory Assurance
            </h3>

            <p>
              This is perhaps one of the most unique benefits offered by
              Buyzaar Mart. In the grocery business, expired and damaged goods
              can directly affect profit margins. Buyzaar Mart takes back
              expired and damaged goods, giving franchise partners peace of mind
              and a layer of financial protection that very few other franchise
              brands offer.
            </p>

            <h3 className="font-medium text-gray-900">
              POS Technology and Billing Systems
            </h3>

            <p>
              Every Buyzaar Mart store is equipped with a modern, easy-to-use
              POS system that helps manage inventory, track sales, generate
              bills, and maintain records efficiently. This technology backbone
              supports smooth day-to-day operations.
            </p>

            <h3 className="font-medium text-gray-900">
              Staff Training and Management
            </h3>

            <p>
              From cashiers to store managers, Buyzaar Mart provides structured
              training programs so your team delivers consistent, high-quality
              customer service aligned with the brand&apos;s standards.
            </p>

            <h3 className="font-medium text-gray-900">
              Legal and Documentation Support
            </h3>

            <p>
              From KYC and legal documentation to agreement review and signing,
              Buyzaar Mart simplifies compliance and paperwork so you can focus
              on your business rather than bureaucratic formalities.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Apply for a Buyzaar Mart Franchise in Faridabad
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Step 1 &ndash; Submit an Inquiry
                </h3>
                <p className="mt-2">
                  Visit{" "}
                  <a
                    href="https://www.thebuyzaarmart.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    www.thebuyzaarmart.com
                  </a>{" "}
                  and fill out the franchise inquiry form. You will receive a
                  response from the team, who will guide you through the next
                  steps and answer your questions about the franchise
                  opportunity in Faridabad.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Step 2 &ndash; Documentation
                </h3>
                <p className="mt-2">
                  Once your inquiry is approved, you proceed with KYC and legal
                  documentation. The Buyzaar Mart team provides complete
                  compliance support and walks you through every document you
                  need to sign.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Step 3 &ndash; Store Launch
                </h3>
                <p className="mt-2">
                  After documentation is complete, the brand activates its store
                  launch strategy for your Faridabad location. This includes
                  local marketing campaigns, backend operational setup, initial
                  inventory stocking, POS installation, staff training, and a
                  full grand opening event with customer acquisition support.
                </p>
              </div>
            </div>

            <p>
              From inquiry to grand opening, the entire process is designed to
              be smooth, transparent, and fast.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Can Apply for a Buyzaar Mart Franchise?
            </h2>

            <p>
              The Buyzaar Mart franchise is open to a wide range of applicants.
              You do not need prior retail experience to apply. The brand is
              looking for passionate, motivated individuals who believe in
              community-driven retail and are committed to building a long-term
              business.
            </p>

            <p>Ideal franchise partner profiles include:</p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                First-time entrepreneurs in Faridabad looking for a low-risk,
                high-support business model.
              </li>
              <li>
                Working professionals seeking a reliable passive income stream
                through the FOCM model.
              </li>
              <li>
                Retired individuals or homemakers wanting to start a dignified,
                independent business.
              </li>
              <li>
                Existing kirana store owners who want to upgrade to a branded,
                organized format.
              </li>
              <li>
                Investors looking for a stable, recurring return from the
                grocery retail sector.
              </li>
              <li>
                Real estate owners in Faridabad who want to monetize commercial
                spaces productively.
              </li>
            </ul>

            <p>
              If you have the drive to build something meaningful and a space to
              set up a store, Buyzaar Mart will handle the rest.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose Buyzaar Mart Over Other Franchise Brands?
            </h2>

            <p>
              The Indian grocery franchise market has several players, but
              Buyzaar Mart stands out for multiple reasons that go beyond just
              brand recognition.
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Low entry investment from ₹15 Lakh, significantly lower than
                most organized grocery franchise brands.
              </li>
              <li>
                Expired and damaged goods return policy that helps protect
                franchisee profitability.
              </li>
              <li>
                FOCM model that is rare and highly valuable for entrepreneurs
                who do not want to be stuck in daily operations.
              </li>
              <li>
                Hyper-local, location-specific marketing rather than generic
                campaigns that ignore your neighborhood.
              </li>
              <li>
                Complete transparency from documentation to investment
                structure.
              </li>
              <li>
                A mission-driven brand focused not only on profits, but also on
                community wealth and dignified livelihoods.
              </li>
            </ul>

            <p>
              For anyone exploring a franchise opportunity in Faridabad, it is
              worth comparing these differentiators carefully before making a
              decision.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Faridabad Locations Ideal for a Buyzaar Mart Store
            </h2>

            <p>
              Faridabad has many high-potential micro-markets where a Buyzaar
              Mart store can thrive. Some of the most promising areas include:
            </p>

            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <strong>Sector 15, 16, and 17:</strong> Densely populated
                residential sectors with strong household demand.
              </li>
              <li>
                <strong>NIT Faridabad:</strong> A bustling commercial and
                residential zone with high daily footfall.
              </li>
              <li>
                <strong>Ballabhgarh:</strong> A rapidly developing area with
                growing residential and commercial activity.
              </li>
              <li>
                <strong>Greater Faridabad:</strong> Sectors 75, 82, 85, 86, 87,
                and 88 offer new townships with young families who prefer
                organized retail.
              </li>
              <li>
                <strong>Neelam Chowk and Old Faridabad:</strong> High foot
                traffic markets with significant daily shopper volumes.
              </li>
              <li>
                <strong>Surajkund Road:</strong> A well-connected area close to
                Delhi with a growing residential population.
              </li>
              <li>
                <strong>NHPC Colony and surrounding areas:</strong> Industrial
                workforce residential pockets with consistent grocery demand.
              </li>
            </ul>

            <p>
              If you are a property owner in any of these areas, your location
              could be ideal for a Buyzaar Mart franchise. Reach out through the
              official website to check location feasibility.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Grocery Retail Opportunity in India &ndash; Why Now Is the
              Right Time
            </h2>

            <p>
              India&apos;s grocery retail sector is one of the largest in the
              world, valued at over $700 billion and growing rapidly. The
              organized sector, however, still accounts for less than 15 percent
              of total grocery retail, meaning a very large portion of the
              market is still dominated by unorganized kirana stores.
            </p>

            <p>
              This presents a major opportunity for organized franchise brands
              like Buyzaar Mart. As Indian consumers become more
              quality-conscious, tech-savvy, and brand-aware, the shift from
              unorganized to organized retail is accelerating, and Faridabad is
              part of this transformation.
            </p>

            <p>
              For entrepreneurs in Faridabad, investing in a Buyzaar Mart
              franchise today means getting ahead of this curve with the
              advantage of being an early mover in an organized grocery brand in
              a fast-growing city.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Build a Legacy You Can Pass On
            </h2>

            <p>
              The Buyzaar Mart franchise is not just about running a store. It
              is about building a business legacy, something you can grow,
              scale, and eventually pass on to the next generation.
            </p>

            <p>
              The brand&apos;s long-term vision is to be a household name across
              India, and every franchise partner in Faridabad is a critical part
              of that story.
            </p>

            <p>
              By joining Buyzaar Mart, you become part of a retail journey that
              supports community empowerment, local employment, and sustainable
              family wealth creation.
            </p>

            <p>
              Apply today at{" "}
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

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the minimum investment required for a Buyzaar Mart
                  franchise in Faridabad?
                </h3>
                <p className="mt-2">
                  You can start a Buyzaar Mart franchise from ₹15 Lakh, which
                  covers store setup, initial inventory, POS system, and launch
                  support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. Do I need prior retail or business experience to apply?
                </h3>
                <p className="mt-2">
                  No. The Buyzaar Mart FOCM model is designed for first-time
                  entrepreneurs. The company provides complete operational and
                  management support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. What is the FOCM franchise model?
                </h3>
                <p className="mt-2">
                  FOCM stands for Franchise Owned, Company Managed. You own the
                  business and investment, while Buyzaar Mart manages daily
                  operations, inventory, staff, and backend support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. What happens to expired or damaged goods in my store?
                </h3>
                <p className="mt-2">
                  Buyzaar Mart has a unique buyback guarantee. Expired and
                  damaged goods are taken back by the company, helping protect
                  your profit margins.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. How long does it take to launch a Buyzaar Mart store in
                  Faridabad?
                </h3>
                <p className="mt-2">
                  After documentation is complete, the team activates the store
                  launch process. The setup and grand opening can typically be
                  completed in a few weeks.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. What kind of marketing support does Buyzaar Mart provide?
                </h3>
                <p className="mt-2">
                  The brand provides hyper-local marketing campaigns tailored to
                  your franchise location, including social media, local
                  advertising, and customer acquisition campaigns.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. How do I apply for a franchise in Faridabad?
                </h3>
                <p className="mt-2">
                  Visit{" "}
                  <a
                    href="https://www.thebuyzaarmart.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    www.thebuyzaarmart.com
                  </a>
                  , fill out the franchise inquiry form, and the team will get
                  back to you with the details required to get started.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Contact Us &ndash; Get in Touch with The Buyzaar Mart Team
              </h2>

              <p className="mb-4 text-gray-800">
                Ready to explore your franchise opportunity in Faridabad? The
                Buyzaar Mart team is just a message away. Whether you have
                questions about investment, location feasibility, the FOCM
                model, or the application process, a dedicated franchise advisor
                will guide you through every step.
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://www.thebuyzaarmart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.thebuyzaarmart.com
                </a>
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Franchise Inquiry Form:</span>{" "}
                Visit the Franchise page on the website and fill out the inquiry
                form for a quick response.
              </p>

              <p className="text-gray-800">
                <span className="font-semibold">Email us:</span>{" "}
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

              <p className="mt-4 text-gray-800">
                The Buyzaar Mart &mdash; &quot;Your Friendly Neighbourhood
                Store.&quot;
              </p>
            </div>
          </div>

          <CityInternalLinks
            city="faridabad"
            currentSlug="/faridabad/franchise-opportunity-faridabad"
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