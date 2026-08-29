import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Apply for Buyzaar Mart Franchise in Aligarh | Step-by-Step Guide",
  description:
    "Complete guide on how to apply for The Buyzaar Mart franchise in Aligarh — documents needed, application steps, timeline, costs, and eligibility. Start your application today.",
  url: "https://www.thebuyzaarmart.com/aligarh/how-to-apply-for-buyzaar-mart-franchise-aligarh",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aligarh",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Aligarh",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Franchise Formats in Aligarh",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Compact franchise format suited to residential lanes and mid-density localities in Aligarh, typically needing 600–1,000 sq. ft.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Mid-sized franchise format for busier markets or wider residential catchments in Aligarh, offering a larger product range.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Large-format store of 3,000 sq. ft. and above in Aligarh, positioned as a complete shopping destination for groceries and household items.",
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
      name: "What is the first step to apply for a Buyzaar Mart franchise in Aligarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill out the franchise inquiry form at www.thebuyzaarmart.com or contact the team directly by phone or email.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are needed during the application process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard identity and address proof for KYC, along with review and signing of the franchise agreement.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the full application process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies by location readiness, but it generally moves through inquiry, site survey, documentation, setup, and training in sequence.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to already own a property to apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You can shortlist potential properties, and the franchise team will survey and approve the best option.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a difference in the application process for Mini Mart vs Hyper Mart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The core steps are the same; investment size, store setup timeline, and inventory planning scale with the format chosen.",
      },
    },
    {
      "@type": "Question",
      name: "Can I apply if I have no retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The FOCM model is specifically designed to support first-time entrepreneurs with full training and operational guidance.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after the store launches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ongoing support continues, including restocking guidance, performance reviews, marketing help, and the expired-goods buyback policy.",
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
              How to Apply for a Buyzaar Mart Franchise in Aligarh — Complete Application Guide
            </h1>

            <ul className="list-disc space-y-2 pl-6">
              <li>Applying for a Buyzaar Mart franchise in Aligarh follows a structured, step-by-step process designed to protect both the brand and the franchise applicant.</li>
              <li>This guide walks through exactly what happens from the moment an inquiry is submitted to the day the store opens, along with the documents, timelines, and costs involved at each stage.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Before You Apply — What to Prepare
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Decide on a preferred store format in advance: Mini Mart, Super Mart, or Hyper Mart, based on the budget and space you can realistically arrange in Aligarh.</li>
              <li>Identify one or two potential Aligarh localities you&apos;re considering, such as Dodhpur, Ramghat Road, Civil Lines, Sir Syed Nagar, Quarsi, or Swarna Jayanti Nagar.</li>
              <li>Have a rough sense of available capital, since the team will ask about investment range early in the conversation to recommend the right format.</li>
              <li>Check whether you already have access to a commercial property (owned or rentable) of the right size, or whether you&apos;ll need help from the team to identify one.</li>
              <li>Think through whether you want a hands-on role (FOCO) or a more managed, investment-style involvement (FOCM), since this shapes the rest of the application discussion.</li>
              <li>Keep basic personal identification and address proof ready in advance, since these are needed once the application moves to documentation.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 1 — Submit the Franchise Inquiry
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Visit www.thebuyzaarmart.com and fill out the franchise inquiry form with your name, contact number, email, and city (Aligarh).</li>
              <li>Alternatively, reach the franchise team directly by phone or email to express interest and ask preliminary questions.</li>
              <li>The inquiry form typically asks for your preferred investment range, so the team can suggest whether a Mini Mart, Super Mart, or Hyper Mart fits best.</li>
              <li>Applicants should expect a follow-up call or email from the franchise team within a short window after submitting the form.</li>
              <li>This is also the point to mention any specific Aligarh locality you&apos;re already considering, so the team can begin preliminary evaluation.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 2 — Initial Consultation Call
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>The franchise team conducts an introductory conversation to understand your location preference, available space, budget, and long-term goals for the business.</li>
              <li>This is the stage where FOCM vs FOCO is discussed in detail, so you can choose the model that matches how involved you want to be day-to-day.</li>
              <li>Questions about your background — whether salaried, business owner, or first-time entrepreneur — help the team tailor the onboarding and training plan.</li>
              <li>The team will typically walk through the investment breakdown for your chosen format at this stage, so there are no surprises later.</li>
              <li>This call is also a good opportunity to ask about expected profit margins, ongoing costs, and what support is included versus what the franchisee bears independently.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 3 — Location Shortlisting and Site Survey
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Shortlist two or three possible properties in Aligarh — whether owned or available for rent — and share them with the franchise team for evaluation.</li>
              <li>The team conducts a formal site survey, assessing footfall, residential density, visibility from the main road, accessibility, parking, and nearby competition.</li>
              <li>Localities with strong daily footfall, such as Ramghat Road or areas close to AMU, may be evaluated for a Super Mart or Hyper Mart format, while quieter colonies may be recommended for a Mini Mart.</li>
              <li>Based on survey findings, the company issues formal site approval for the best-fit location among the options shared.</li>
              <li>This step protects applicants from one of the costliest retail mistakes — signing a lease or purchasing a location that later proves commercially unviable.</li>
              <li>If none of the initially shortlisted properties are approved, the team can assist in identifying alternative options within the same locality.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 4 — Documentation and KYC
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Once a location is approved, onboarding documentation begins, starting with KYC verification.</li>
              <li>Applicants need to submit standard identity and address proof documents as part of this stage.</li>
              <li>The franchise agreement is shared for review, covering investment terms, franchise fee structure, operational responsibilities, and duration of the partnership.</li>
              <li>Applicants are encouraged to go through the agreement carefully and raise any questions before signing, since this document governs the entire working relationship.</li>
              <li>Compliance requirements — including FSSAI and GST registration for the store — are guided by the team during this phase so the outlet operates on proper legal footing from day one.</li>
              <li>Once documentation is reviewed and agreed upon, the agreement is signed and the franchise partnership is formally confirmed.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 5 — Store Design and Setup
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>After signing, the company handles interior design, store layout planning, shelving, and branding to ensure the outlet matches Buyzaar Mart&apos;s standard look and feel.</li>
              <li>Signage, storefront branding, and in-store visual merchandising are installed as part of this phase.</li>
              <li>POS (point-of-sale) technology is deployed for billing, inventory tracking, and sales reporting, replacing the need for manual registers or spreadsheets.</li>
              <li>Opening inventory is planned and procured based on the approved store format and local demand patterns identified during the site survey.</li>
              <li>Fixed setup costs — interiors, branding, and technology — are typically completed within a defined timeframe once the agreement is signed, though exact durations depend on property readiness.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 6 — Staff Hiring and Training
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Store staff are recruited either by the franchise owner or with support from the franchise team, depending on the chosen model.</li>
              <li>Training covers POS software usage, billing procedures, inventory management, stock rotation, and customer service standards.</li>
              <li>The franchise owner is also trained on how to read performance dashboards, track sales trends, and coordinate restocking with the supply chain team.</li>
              <li>This step ensures the store is operationally ready before the public launch, reducing early-stage mistakes that commonly affect first-time retail owners.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 7 — Store Launch and Marketing
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>The outlet is launched with a local marketing campaign designed to build awareness and drive footfall in the surrounding Aligarh neighborhood.</li>
              <li>Launch activities typically include area-specific promotions, opening discounts, and community outreach to establish the store as the go-to neighborhood option.</li>
              <li>Customer acquisition support in the early weeks helps convert first-time visitors into repeat shoppers, which is critical for building a stable base early on.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step 8 — Ongoing Operations and Review
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>After launch, sales and inventory performance are reviewed periodically with the franchise team to identify what&apos;s working and what needs adjustment.</li>
              <li>Restocking guidance, supplier coordination, and audit support continue on an ongoing basis, not just during the initial setup phase.</li>
              <li>The expired and damaged goods buyback policy remains active throughout the franchise term, protecting the owner&apos;s margins over the long run.</li>
              <li>As the store stabilizes, franchise owners can begin discussions about opening a second Aligarh location using the systems and staff-training playbook already in place.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment and Costs Involved in the Application
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Mini Mart: Investment starts from ₹15 Lakh for a 600–1,000 sq. ft. store, covering interiors, opening stock, POS software, and initial branding.</li>
              <li>Super Mart: A step up in investment for a larger footprint and wider product assortment, suited to busier Aligarh markets.</li>
              <li>Ongoing costs such as rent, staff salaries, electricity, and miscellaneous variable expenses are typically borne by the franchisee, separate from the one-time setup investment.</li>
              <li>A working capital buffer beyond the headline investment figure is advisable to comfortably cover the first few months of operating expenses before the store stabilizes.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Should Apply
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>First-time entrepreneurs in Aligarh with no retail background, since the FOCM model and structured training are built specifically for this profile.</li>
              <li>Salaried professionals looking for a side business or a passive investment through the FOCO or FOCM route.</li>
              <li>Local business families in Aligarh wanting to diversify into organized retail using a proven system rather than building one from scratch.</li>
              <li>HNI investors seeking a scalable retail asset in a growing tier-2 city with lower entry costs than metro markets.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              FAQs
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the first step to apply for a Buyzaar Mart franchise in Aligarh?
                </h3>
                <p className="mt-2">
                  Fill out the franchise inquiry form at www.thebuyzaarmart.com or contact the team directly by phone or email.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. What documents are needed during the application process?
                </h3>
                <p className="mt-2">
                  Standard identity and address proof for KYC, along with review and signing of the franchise agreement.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. How long does the full application process take?
                </h3>
                <p className="mt-2">
                  It varies by location readiness, but it generally moves through inquiry, site survey, documentation, setup, and training in sequence.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. Do I need to already own a property to apply?
                </h3>
                <p className="mt-2">
                  No. You can shortlist potential properties, and the franchise team will survey and approve the best option.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. Is there a difference in the application process for Mini Mart vs Hyper Mart?
                </h3>
                <p className="mt-2">
                  The core steps are the same; investment size, store setup timeline, and inventory planning scale with the format chosen.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. Can I apply if I have no retail experience?
                </h3>
                <p className="mt-2">
                  Yes. The FOCM model is specifically designed to support first-time entrepreneurs with full training and operational guidance.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. What happens after the store launches?
                </h3>
                <p className="mt-2">
                  Ongoing support continues, including restocking guidance, performance reviews, marketing help, and the expired-goods buyback policy.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Franchise Application in Aligarh
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Aligarh&apos;s daily consumer economy offers one of the most reliable opportunities for a branded grocery retail store.</li>
                <li>Join The Buyzaar Mart franchise network and bring your neighborhood a modern daily needs store built on trust, convenience, and professional retail systems.</li>
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
                  <span className="font-semibold">Business Hours:</span> Monday to Saturday, 09:00 AM – 07:00 PM
                </li>
              </ul>
            </div>
          </div>

          <CityInternalLinks
            city="aligarh"
            currentSlug="/aligarh/how-to-apply-for-buyzaar-mart-franchise-aligarh"
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