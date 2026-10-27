import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "How to Apply for Buyzaar Mart Franchise Rampur | Steps",
  description:
    "Learn how to apply for a Buyzaar Mart franchise in Rampur. See the steps, documents and total investment from ₹15 Lakh. Call +91 9217991727.",
  url: "https://www.thebuyzaarmart.com/rampur/how-to-apply-for-buyzaar-mart-franchise-rampur",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-43, Third Floor, Sector-6",
    addressLocality: "Noida",
    postalCode: "201301",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Rampur",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Franchise Formats in Rampur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Supermarket franchise format for Rampur spaces of 600–1000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Supermarket franchise format for Rampur spaces of 1000–3000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Destination supermarket franchise format for Rampur spaces of 3000–8000 sq ft.",
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
      name: "How can I apply for a Buyzaar Mart franchise in Rampur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill the inquiry form on thebuyzaarmart.com or call +91 9217991727, then complete the application, documentation and agreement.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The total investment starts from ₹15 Lakh and varies with store size, so confirm the exact figure for your space.",
      },
    },
    {
      "@type": "Question",
      name: "Which documents do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ID proof, education certificate, cancelled cheque or passbook copy and ownership or rental papers for the store.",
      },
    },
    {
      "@type": "Question",
      name: "Can I apply with a rented shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the form accepts ownership, rental or lease proof for the proposed premises.",
      },
    },
    {
      "@type": "Question",
      name: "Is the site visitation fee refundable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The declaration states that it is non-refundable once the visit is made.",
      },
    },
    {
      "@type": "Question",
      name: "How soon will the team reply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email inquiries receive a response within 24 hours, and the team works Monday to Saturday, 9:00 AM to 7:00 PM.",
      },
    },
    {
      "@type": "Question",
      name: "Is Buyzaar Mart FSSAI licensed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the website lists FSSAI licensed, GST registered and MSME certified status.",
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
              How to Apply for Buyzaar Mart Franchise in Rampur – Complete Application Guide
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Apply for a Buyzaar Mart Franchise in Rampur
            </h2>

            <h3 className="font-medium text-gray-900">
              Quick Overview of the Application
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Applying for a Buyzaar Mart franchise in Rampur is a simple three-part journey: submit an inquiry, complete documentation and agreement, and then prepare for your store launch with the company’s support.
              </li>
              <li>
                The Buyzaar Mart is a neighbourhood supermarket franchise brand with the promise “अपना बाजार – बचत का साथ, Quality की बात,” and the process is designed to make retail ownership simple and less risky for first-time entrepreneurs.
              </li>
              <li>
                This guide explains every stage in plain language so you know what to prepare, what to ask and what to avoid before you apply from Rampur.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Is This Franchise Right for You
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart works best for people who want to own a local grocery and daily-needs store while the company handles heavy backend work such as supply chain, inventory planning and billing systems.
              </li>
              <li>
                You should have a suitable shop or commercial space in Rampur, a clear plan for the total investment and the willingness to follow brand standards, training instructions and monthly reporting.
              </li>
              <li>
                If you want a fully hands-off investment, speak honestly with the team first, because the declaration in the application says franchisee performance and customer experience affect the continuity of the franchise.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Before You Apply: Preparation Checklist
            </h2>

            <h3 className="font-medium text-gray-900">
              Decide Your Store Format
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Mini Mart suits 600–1000 sq ft spaces with personal care, beverages, grocery and staples, homecare and hygiene, stationery, snacks and biscuits.
              </li>
              <li>
                Super Mart suits 1000–3000 sq ft and adds dairy items and fruits and vegetables, which helps families complete weekly shopping in one visit.
              </li>
              <li>
                Hyper Mart suits 3000–8000 sq ft and also adds gifts and toys and frozen ready-to-eat items for destination shopping.
              </li>
              <li>
                Measure your Rampur space honestly, because the format you pick decides your final total investment.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Know Your Total Investment
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart franchise starts from a total investment of ₹15 Lakh, and the final figure depends on your store type and area.
              </li>
              <li>
                The total includes stock, interior, software fee, franchise fee with 18% GST and security deposit, so you can plan the full commitment in one number.
              </li>
              <li>
                Use the investment calculator on the Franchise page to see an estimate for your square footage, then confirm the exact figure with the team in writing.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Arrange Your Property
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The franchisee secures and pays rent for the store, so finalise whether you will use your own property or take a shop on rent or lease in Rampur.
              </li>
              <li>
                Keep the ownership paper, rental agreement or lease proof ready, because the application needs it for the proposed store.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Gather Your Documents
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep an ID proof such as Aadhaar, PAN or Voter ID, a certificate of your highest education, a cancelled cheque or passbook copy and your property papers in clear scanned form.
              </li>
              <li>
                Matching names and details across all papers prevents delays during verification.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step: How to Apply
            </h2>

            <h3 className="font-medium text-gray-900">
              Step 1: Submit the Inquiry Form
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Open thebuyzaarmart.com and go to the Contact or Franchise page, where the form titled “I want to become an entrepreneur” is available.
              </li>
              <li>
                Fill in your full name, email address, phone number, state and city, choose Uttar Pradesh as the state and write Rampur as the city.
              </li>
              <li>
                Add your preferred store size, property status or any question in the optional message box, then press Submit Inquiry.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 2: Talk to the Franchise Team
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Call{" "}
                <a
                  href="tel:+919217991727"
                  className="font-semibold text-green-600 hover:underline"
                >
                  +91 9217991727
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>{" "}
                if you want a quicker conversation or have questions before submitting the form.
              </li>
              <li>
                The website states that email inquiries receive a response within 24 hours, and the team is available Monday to Saturday from 9:00 AM to 7:00 PM.
              </li>
              <li>
                Use this conversation to confirm your store format, total investment and the exact documents needed for your case.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 3: Fill the Franchise Application Form
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The application form collects personal details, identity proof, address proof, banking details and information about your proposed store location.
              </li>
              <li>
                You will be asked whether you own the proposed premises and must attach ownership, rent or lease proof.
              </li>
              <li>
                Fill every field carefully and keep your details consistent with your identity documents.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 4: Complete Declarations and Upload the Signed Copy
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The application includes an agent or employee declaration, where you state whether a Buyzaar representative guided you or you applied independently.
              </li>
              <li>
                You must also accept the main declaration and upload a signed declaration in PDF format after checking that all information is true and complete.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 5: KYC, Agreement and Compliance
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Complete KYC and legal documentation, review the franchise agreement carefully and sign it only after every clause is clear to you.
              </li>
              <li>
                The brand offers compliance support so the legal formalities remain simple for first-time business owners.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 6: Prepare for Store Launch
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                After the agreement, you work with the team on launch strategy, local marketing campaigns, operational backend support and customer acquisition.
              </li>
              <li>
                The brand’s distinctive launch approach is meant to create quick local visibility for your Rampur store.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Application Form Details You Should Know
            </h2>

            <h3 className="font-medium text-gray-900">
              Personal and Identity Details
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Date of birth, gender, marital status, identity proof type and address proof copy are part of the form, so keep your original documents ready while filling it.
              </li>
              <li>
                Aadhaar and Voter ID are the identity options shown in the form, and clear scans help avoid rejection.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Banking Details
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You need to attach a cancelled cheque or a copy of your passbook, so choose the bank account you plan to use for your business.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Proposed Store Location
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Mention your Rampur address, tell the team whether the property is owned and attach the supporting paper.
              </li>
              <li>
                A well-chosen location near homes, markets, schools or main roads improves footfall, so think about this before you apply.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Site Visitation Fee
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The declaration states that you agree to pay a site visitation fee and that it is completely non-refundable once the visit has been made.
              </li>
              <li>
                Ask the team to explain the amount and process before you agree, so there are no surprises later.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents Required to Apply
            </h2>

            <h3 className="font-medium text-gray-900">
              Applicant Documents
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Identity proof, which can be an Aadhaar card, PAN card or Voter ID.
              </li>
              <li>
                Education certificate showing your highest qualification, such as 10th, 12th, graduation or post-graduation.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Bank and Property Documents
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Cancelled cheque or passbook copy for bank verification.
              </li>
              <li>
                Ownership proof or rental agreement for the proposed Rampur store.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Smart Document Tips
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Scan documents in good light, keep file sizes reasonable and name each file clearly so the upload goes smoothly.
              </li>
              <li>
                Keep originals safe, since the team may ask you to clarify details during verification.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Receive After You Apply
            </h2>

            <h3 className="font-medium text-gray-900">
              Marketing and Brand Support
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Support includes TV advertisements, radio campaigns, social media marketing, promotional materials and local brand-building activities.
              </li>
              <li>
                Hyper-local marketing campaigns are tailored for each franchise location, which helps a new Rampur store become known quickly.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Inventory and Supply Chain
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Inventory is fully managed with regular stock replenishment, products sourced directly from manufacturers and automated supply chain management.
              </li>
              <li>
                The brand works with 50+ FMCG partners, so shelves can carry products that shoppers already trust.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Technology and Store Experience
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                A POS-enabled billing system and CRM tools support quick billing and stronger customer relationships.
              </li>
              <li>
                Uniform branding and localised product flexibility give your store a professional identity while still matching Rampur preferences.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Inventory Assurance
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Buyzaar Mart takes back expired and damaged goods, which reduces the worry about unsold or spoiled stock.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Readiness Self-Check Before You Submit
            </h2>

            <h3 className="font-medium text-gray-900">
              Business Readiness
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Confirm that you can arrange the full total investment without stretching your family budget, since a store needs working capital and patience in the early months.
              </li>
              <li>
                Decide who will manage the store daily, because staff supervision, billing accuracy and customer service shape how fast the store grows.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Location Readiness
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Visit your shortlisted Rampur spot at morning and evening hours and note footfall, parking, nearby housing and competing stores.
              </li>
              <li>
                Choose a visible entrance on a busy road or inside a residential cluster, because easy access brings repeat customers.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips for a Faster Response
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Mention your Rampur locality, store size in square feet and property status in the first message, so the team can reply with specific guidance.
              </li>
              <li>
                Use the same phone number and email on the form, call and email, which helps the team connect your inquiry quickly.
              </li>
              <li>
                Call during working hours from Monday to Saturday, and avoid Sundays because the office is closed.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Happens After You Submit
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The team contacts you to explain the franchise, share the brochure and guide you through documentation and the next steps.
              </li>
              <li>
                Keep your phone reachable for a few days after submission, and check your email and spam folder for replies.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Questions to Ask Before You Sign
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ask for the exact total investment for your store type and area, and request that it is explained in writing.
              </li>
              <li>
                Ask what the site visitation fee covers, what reports you must submit every month and what training you must complete.
              </li>
              <li>
                Ask how supply, replenishment and returns of expired goods work in practice, so you know the daily routine before you begin.
              </li>
              <li>
                Ask for the full agreement copy, and read it slowly with a trusted adviser if you want a second opinion.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Common Mistakes When Applying
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Uploading unclear, expired or mismatched documents, which slows verification and may force you to restart.
              </li>
              <li>
                Picking a store format that is too big for your space or budget instead of matching your actual area.
              </li>
              <li>
                Paying anyone outside the official franchise team or paying without written confirmation of what the amount covers.
              </li>
              <li>
                Ignoring the declaration terms, especially the non-refundable site visit fee and the monthly reporting duties.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Rampur Is Worth Applying For
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Rampur families buy staples, snacks, beverages, personal care and cleaning items every week, so grocery demand stays steady across the year.
              </li>
              <li>
                Navratri, Eid, Diwali and the wedding season create strong sales peaks, and the Buyzaar Mart blog shares practical stocking guides for such occasions.
              </li>
              <li>
                Shoppers increasingly prefer clean aisles, printed prices and fair billing, which an organised neighbourhood store delivers better than loose-sale shops.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. How can I apply for a Buyzaar Mart franchise in Rampur?
                </h3>
                <p className="mt-2">
                  Fill the inquiry form on thebuyzaarmart.com or call +91 9217991727, then complete the application, documentation and agreement.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. What is the total investment?
                </h3>
                <p className="mt-2">
                  The total investment starts from ₹15 Lakh and varies with store size, so confirm the exact figure for your space.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. Which documents do I need?
                </h3>
                <p className="mt-2">
                  ID proof, education certificate, cancelled cheque or passbook copy and ownership or rental papers for the store.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. Can I apply with a rented shop?
                </h3>
                <p className="mt-2">
                  Yes, the form accepts ownership, rental or lease proof for the proposed premises.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. Is the site visitation fee refundable?
                </h3>
                <p className="mt-2">
                  The declaration states that it is non-refundable once the visit is made.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. How soon will the team reply?
                </h3>
                <p className="mt-2">
                  Email inquiries receive a response within 24 hours, and the team works Monday to Saturday, 9:00 AM to 7:00 PM.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. Is Buyzaar Mart FSSAI licensed?
                </h3>
                <p className="mt-2">
                  Yes, the website lists FSSAI licensed, GST registered and MSME certified status.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Apply for Your Buyzaar Mart Franchise in Rampur
              </h2>

              <p className="mb-4 text-gray-800">
                Rampur offers a strong opportunity to open a structured, branded supermarket franchise.
              </p>

              <p className="mb-4 text-gray-800">
                Start your application today and take the first step toward owning a Buyzaar Mart in your neighbourhood.
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
            city="rampur"
            currentSlug="/rampur/how-to-apply-for-buyzaar-mart-franchise-rampur"
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