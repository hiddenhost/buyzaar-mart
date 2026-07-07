import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Franchise Enquiry in Varanasi",
  description:
    "Buyzaar Mart franchise enquiry in Varanasi with zero-royalty grocery franchise formats, structured support, and guidance on investment, documents, and location selection.",
  url: "https://www.thebuyzaarmart.com/varanasi/buyzaar-mart-franchise-enquiry-in-varanasi",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Varanasi",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Buyzaar Mart Franchise Formats in Varanasi",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Entry-level grocery franchise format for smaller budgets and neighborhood locations in Varanasi.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Mid-sized grocery franchise format suited for busy market roads and larger catchment areas in Varanasi.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Large-format grocery store franchise designed for high-density or highway-facing locations in Varanasi.",
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
      name: "How do I make a franchise enquiry with Buyzaar Mart in Varanasi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can enquire via phone call, WhatsApp, email, or the website's Apply Now form.",
      },
    },
    {
      "@type": "Question",
      name: "What information should I provide during my initial enquiry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Share your preferred location, approximate budget, and store size preference for a relevant response.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a fee to make an enquiry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, submitting an enquiry and receiving initial information is free of cost.",
      },
    },
    {
      "@type": "Question",
      name: "How soon can I expect a response after enquiring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most enquiries receive an initial response within 24 to 48 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a location finalized before enquiring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you can enquire first and finalize your location during the consultation process.",
      },
    },
    {
      "@type": "Question",
      name: "What documents will I eventually need to apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Identity proof, address proof, property or rental documents, and basic financial proof are typically required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I enquire about more than one store format?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can discuss Mini Mart, Super Mart, and Hyper Mart options before deciding.",
      },
    },
    {
      "@type": "Question",
      name: "Is the investment amount fixed or does it vary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies based on your chosen area within each format's size range.",
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
              Buyzaar Mart Franchise Enquiry in Varanasi – Everything You Need to Know Before You Apply
            </h1>

            <p>
              If you're considering starting a grocery business in Varanasi, the first step is making a proper franchise enquiry — and knowing exactly what to ask, what documents to prepare, and what to expect from the process. Buyzaar Mart, with its zero-royalty model and structured support system, is one of the most enquired-about grocery franchise opportunities in the city right now. This guide breaks down the entire enquiry process in simple points, along with what happens after you submit your interest.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Varanasi Franchise Enquiries Are Rising
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Varanasi's retail sector is shifting from unorganized kirana stores to branded, organized formats, driving demand for structured franchise models.</li>
              <li>Growing residential development in areas like Sarnath, BHU, Ring Road, and Varuna Bridge is creating fresh catchment areas for new grocery outlets.</li>
              <li>Religious tourism and pilgrim footfall provide a steady, non-seasonal customer base that many first-time investors find attractive.</li>
              <li>Local entrepreneurs are increasingly looking for businesses that don't require deep technical expertise but offer stable, everyday demand.</li>
              <li>Word-of-mouth from existing franchise partners and visible store openings in the city are driving more enquiries from nearby districts like Chandauli, Jaunpur, and Mirzapur as well.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Happens When You Make an Enquiry
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Initial Contact – You reach out via phone, WhatsApp, email, or the website enquiry form expressing interest in a Buyzaar Mart franchise.</li>
              <li>Basic Screening Call – The team asks about your preferred location, budget range, and store size preference to understand your fit.</li>
              <li>Information Sharing – You receive details on investment breakdown, franchise formats, and support structure, often along with a downloadable brochure.</li>
              <li>Location Discussion – If you already have a property in mind, the team discusses its suitability (footfall, visibility, size).</li>
              <li>Follow-Up Consultation – A more detailed conversation covers documentation, agreement terms, and expected timelines.</li>
              <li>Site Visit (if applicable) – In some cases, a representative may visit or request photos/videos of the proposed location for feasibility assessment.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Information You Should Ask During Your Enquiry
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Ask for the complete investment breakdown — stock, interior, software fee, franchise fee, and security deposit — for your preferred store format.</li>
              <li>Confirm whether there are any recurring charges beyond the one-time setup cost (Buyzaar Mart's model has zero royalty).</li>
              <li>Ask about the minimum and maximum area requirements for each format: Mini Mart, Super Mart, and Hyper Mart.</li>
              <li>Clarify the expected timeline from agreement signing to store launch.</li>
              <li>Ask what kind of training, staffing support, and marketing assistance is included in the franchise package.</li>
              <li>Request references or examples of existing franchise stores, if possible, to understand real-world performance.</li>
              <li>Confirm the process for ongoing product replenishment and whether there are minimum order requirements.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Formats You Can Enquire About
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Mini Mart (600 – 1000 sq. ft.) – Suitable for smaller budgets and neighborhood locations. Total Investment starts at ₹15,25,000.</li>
              <li>Super Mart (1001 – 3000 sq. ft.) – Suited for busy market roads and larger customer catchment. Total Investment starts at ₹26,63,407.</li>
              <li>Hyper Mart (3001 – 8000 sq. ft.) – Best for large-format stores in high-density or highway-facing locations. Total Investment starts at ₹78,89,960.</li>
              <li>Each format's total investment covers stock, interior setup, software fee, franchise fee (inclusive of GST), and security deposit.</li>
              <li>Your enquiry team can help you decide which format matches your available budget and target location size.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents Typically Required for a Franchise Enquiry
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Identity proof (Aadhaar card, PAN card, or voter ID).</li>
              <li>Educational Certificate: Certificate of Highest Education - 10th/12th/Grad/Post-Grad</li>
              <li>Bank Details: Cancelled cheque/Copy of Passbook</li>
              <li>Property Documents for Proposed Store: Ownership/Rental Agreement</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Make Your Enquiry More Effective
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Be clear about your budget range upfront — this helps the team recommend the right format (Mini Mart, Super Mart, or Hyper Mart) instead of wasting time on mismatched options.</li>
              <li>Have your preferred location details ready, including approximate area, nearby landmarks, and footfall patterns (residential, commercial, or mixed).</li>
              <li>Ask specific questions rather than general ones — for example, ask about the exact security deposit refund policy rather than just what&apos;s included.</li>
              <li>Request the brochure and cost sheet in writing so you have a reference document for comparison and future discussion.</li>
              <li>If you're evaluating multiple franchise brands, prepare a comparison checklist (investment, royalty, support, brand recognition) before your enquiry call so you can ask targeted questions.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why a Proper Enquiry Process Matters
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>A detailed enquiry helps you avoid signing a franchise agreement based on incomplete or misleading information.</li>
              <li>Understanding the full investment breakdown in advance prevents budget surprises during the setup phase.</li>
              <li>Knowing the exact space requirements early helps you finalize a suitable property before committing financially.</li>
              <li>A clear enquiry process also helps you gauge the responsiveness and professionalism of the franchise team — a good indicator of the support you'll receive after signing up.</li>
              <li>Asking the right questions upfront reduces the chances of conflicts or misunderstandings later in the partnership.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Buyzaar Mart Looks for in an Enquiry
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Genuine interest in running a grocery retail business, whether full-time or as a managed investment.</li>
              <li>A suitable location — ideally ground floor, with good visibility and access, matching the area requirement of the chosen format.</li>
              <li>Sufficient investment capability to cover the total setup cost for the selected store format.</li>
              <li>Willingness to follow the standardized branding, layout, and operational guidelines that maintain consistency across all Buyzaar Mart outlets.</li>
              <li>Long-term commitment to running and growing the store, rather than a short-term or purely speculative investment.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step: From Enquiry to Franchise Approval
            </h2>

            <ol className="list-decimal space-y-2 pl-6">
              <li>Submit Enquiry – Reach out through phone, WhatsApp, email, or the website&apos;s Apply Now form with your basic details.</li>
              <li>Receive Initial Information – Get the investment breakdown, format options, and brochure from the team.</li>
              <li>Discuss Location &amp; Budget – Share your preferred location and budget so the team can suggest the best-fit format.</li>
              <li>Detailed Consultation – A follow-up call or meeting covers documentation, timelines, and agreement terms in depth.</li>
              <li>Site Feasibility Check – The proposed location is evaluated for footfall, visibility, and suitability.</li>
              <li>Finalize Investment Plan – Confirm the total investment based on your chosen area within the format range.</li>
              <li>Sign Franchise Agreement – Formalize the partnership with clear terms, including the zero-royalty commitment.</li>
              <li>Move to Store Setup – Once the agreement is signed, the process moves into interior work, stocking, and system installation.</li>
            </ol>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Enquiry Channels Available
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Phone Call – Direct conversation with the franchise team for immediate queries.</li>
              <li>WhatsApp – Quick, informal enquiry option for sharing basic details and receiving initial information.</li>
              <li>Email – Suitable for detailed enquiries where you want documented responses (investment breakdown, brochure, terms).</li>
              <li>Website Enquiry Form – A structured Apply Now form on the Buyzaar Mart website where you submit your details and preferences.</li>
              <li>In-Person Meeting – For applicants who prefer face-to-face discussion, especially useful once you're closer to finalizing your decision.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips for First-Time Franchise Applicants in Varanasi
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Don't rush into signing an agreement on your first call — take time to compare the investment breakdown against your budget and expected returns.</li>
              <li>Visit the proposed location at different times of day to independently assess footfall before finalizing it with the franchise team.</li>
              <li>If you're new to retail, ask specifically about the training and onboarding support included in your package.</li>
              <li>Keep a record of all conversations, especially verbal commitments made during calls, and get them confirmed in writing wherever possible.</li>
              <li>Talk to your local network or business community in Varanasi to see if anyone has firsthand experience with similar franchise models.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Red Flags to Watch for During Any Franchise Enquiry
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Reluctance to share a written investment breakdown or cost sheet when asked directly.</li>
              <li>Pressure tactics pushing you to sign an agreement quickly without adequate time to review terms.</li>
              <li>Vague answers about ongoing costs, replenishment terms, or support structure.</li>
              <li>No clarity on what happens if you want to exit the franchise agreement in the future.</li>
              <li>Unclear communication about who owns the brand rights and the legal terms of the franchise partnership.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  1. How do I make a franchise enquiry with Buyzaar Mart in Varanasi?
                </h3>
                <p className="mt-2">
                  You can enquire via phone call, WhatsApp, email, or the website's Apply Now form.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  2. What information should I provide during my initial enquiry?
                </h3>
                <p className="mt-2">
                  Share your preferred location, approximate budget, and store size preference for a relevant response.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  3. Is there a fee to make an enquiry?
                </h3>
                <p className="mt-2">
                  No, submitting an enquiry and receiving initial information is free of cost.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  4. How soon can I expect a response after enquiring?
                </h3>
                <p className="mt-2">
                  Most enquiries receive an initial response within 24-48 hours.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  5. Do I need a location finalized before enquiring?
                </h3>
                <p className="mt-2">
                  No, you can enquire first and finalize your location during the consultation process.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  6. What documents will I eventually need to apply?
                </h3>
                <p className="mt-2">
                  Identity proof, address proof, property/rental documents, and basic financial proof are typically required.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  7. Can I enquire about more than one store format?
                </h3>
                <p className="mt-2">
                  Yes, you can discuss Mini Mart, Super Mart, and Hyper Mart options before deciding.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  8. Is the investment amount fixed or does it vary?
                </h3>
                <p className="mt-2">
                  It varies based on your chosen area within each format's size range.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Franchise Enquiry in Varanasi
              </h2>

              <p className="mb-4 text-gray-800">
                A proper enquiry is the first step toward choosing the right grocery franchise format, location, and investment plan.
              </p>

              <p className="mb-4 text-gray-800">
                Contact Buyzaar Mart to discuss your budget, available space, and store format preferences with the team.
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

          <CityInternalLinks city="varanasi" currentSlug="/varanasi/buyzaar-mart-franchise-enquiry-in-varanasi" />
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