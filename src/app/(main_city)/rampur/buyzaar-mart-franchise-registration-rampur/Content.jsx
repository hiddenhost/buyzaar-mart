import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Franchise Registration in Rampur | Apply Now",
  description:
    "Register for a Buyzaar Mart franchise in Rampur. See the application steps, documents, site survey, declaration terms and ₹15-20 lakh Mini Mart investment.",
  url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-registration-rampur",
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
    name: "The Buyzaar Mart Franchise Registration Formats in Rampur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Compact franchise registration format for Rampur, covering 600-1000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Full weekly shopping franchise registration format for Rampur, covering 1000-3000 sq ft.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Destination franchise registration format for large premises in Rampur, covering 3000-8000 sq ft.",
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
      name: "How do I register for a Buyzaar Mart franchise in Rampur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Submit the inquiry form, fill the franchise application, upload documents and attend the site survey and approval process.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ID proof, educational certificate, cancelled cheque or passbook copy and ownership or rental proof for the shop.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart of 600-1000 sq ft needs about ₹15 lakh to ₹20 lakh in total, and larger formats cost more.",
      },
    },
    {
      "@type": "Question",
      name: "Is the site visitation fee refundable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, the application declaration states that the fee is non-refundable once the visit has been made.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, training and ongoing support are provided.",
      },
    },
    {
      "@type": "Question",
      name: "Can I propose my own shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the team surveys your site and approves it after checking population, purchasing capacity and local demand.",
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
              Buyzaar Mart Franchise Registration in Rampur: Complete Application Guide
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Registering for a Buyzaar Mart Franchise in Rampur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Franchise registration is the first formal step toward owning a Buyzaar Mart store, and it includes an inquiry, an online application, document upload, a site survey and agreement signing.
              </li>
              <li>
                The Buyzaar Mart offers a supermarket franchise model built on the idea of “Your Friendly Neighborhood Store”, with store setup, billing technology, training and marketing support for owners.
              </li>
              <li>
                Rampur has steady demand for groceries, snacks, beverages and household products, so an organised branded store can build regular customers.
              </li>
              <li>
                This guide explains who can register, what the application form asks, which documents to upload, what the declaration means and how the process moves forward after you apply.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Is Buyzaar Mart Franchise Registration?
            </h2>

            <h3 className="font-medium text-gray-900">
              Meaning of Registration
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Registration means submitting your details and your proposed store information so the company can review your profile and your shop location in Rampur.
              </li>
              <li>
                It is not the same as opening the store, because approval, agreement signing and store setup follow after the application.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Why Registration Matters
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                It records your interest formally and starts the site survey and approval process.
              </li>
              <li>
                It helps the team understand your capital, space, location and experience before suggesting the right store format.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Who Handles Your Application
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The franchise team responds to inquiries within 24 hours on working days, from Monday to Saturday.
              </li>
              <li>
                The team can guide you on formats, documents and next steps through calls and meetings.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Can Register for a Franchise in Rampur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Individuals, family businesses and investors with the required capital and a suitable shop in Rampur can apply.
              </li>
              <li>
                No earlier retail experience is needed, because training, user-friendly billing software and ongoing support are part of the system.
              </li>
              <li>
                You need a minimum carpet area of 600 sq ft, either owned or on rent.
              </li>
              <li>
                You must be ready to follow brand SOPs, training requirements and monthly reporting rules.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment Before You Register
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The total investment for a Buyzaar Mart Mini Mart franchise (600-1000 sq ft) is about ₹15 lakh to ₹20 lakh.
              </li>
              <li>
                The final amount depends on store size, layout, location and the format you select, and larger formats need a higher total.
              </li>
              <li>
                Use the investment calculator on the franchise page to estimate your cost, then confirm the exact figure with the team before signing the agreement.
              </li>
              <li>
                Keep working capital ready for rent, staff salaries and electricity, since these running costs are paid by the franchise owner under the FOCM model.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats Available for Registration
            </h2>

            <h3 className="font-medium text-gray-900">
              Mini Mart (600-1000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Suitable for first-time owners and residential neighbourhoods in Rampur.
              </li>
              <li>
                Includes personal care, beverages, grocery and staples, home care and hygiene, stationery, snacks and biscuits.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Super Mart (1000-3000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Fits busy roads and larger markets where families do monthly shopping.
              </li>
              <li>
                Adds dairy items and fruits and vegetables.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Hyper Mart (3000-8000 sq ft)
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Meant for large premises in high-footfall locations.
              </li>
              <li>
                Adds gifts, toys and frozen ready-to-eat items for a complete supermarket range.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step Franchise Registration Process
            </h2>

            <h3 className="font-medium text-gray-900">
              Step 1: Submit an Inquiry
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Fill the inquiry form on thebuyzaarmart.com, call{" "}
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
                </a>
                .
              </li>
              <li>
                Attend a call or meeting to understand the model, formats, responsibilities and support.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 2: Fill the Franchise Application Form
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Enter your personal, identity, address and banking details in the online application.
              </li>
              <li>
                Add your proposed store location in Rampur and upload the required proof.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 3: Site Survey and Approval
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The team surveys the proposed location and checks population, purchasing capacity and local demand before approval.
              </li>
              <li>
                Work begins only after the site is approved by the company.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 4: Sign the Franchise Agreement
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Review the agreement carefully, complete KYC and legal documentation and make the payment as agreed.
              </li>
              <li>
                The company supports you with documentation and onboarding formalities.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Step 5: Store Setup and Franchise Kit Handover
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The team handles layout, interior design, branding and store setup as per your chosen format.
              </li>
              <li>
                You receive the franchise kit, POS billing system and operating guidelines before launch.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Franchise Application Form: What You Need to Fill
            </h2>

            <h3 className="font-medium text-gray-900">
              Personal Details
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Date of birth, gender and marital status.
              </li>
              <li>
                Basic contact information so the team can reach you easily.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Identity Proof
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Select the ID type, either Aadhaar or Voter ID, and attach a clear copy.
              </li>
              <li>
                Make sure the name on the ID matches the name used in the rest of your application.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Address Details
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Enter your full address and attach a copy of address proof.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Banking Details
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Attach a cancelled cheque or a passbook copy.
              </li>
              <li>
                Check that the account holder name and account details are readable.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Proposed Store Location
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                State whether you own the proposed premises or plan to take it on rent or lease.
              </li>
              <li>
                Attach ownership, rent or lease proof for the shop in Rampur.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Agent or Employee Declaration
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The form asks whether a Buyzaar representative guided you through the inquiry or whether you applied independently.
              </li>
              <li>
                Select the option that matches your experience, because it is used for internal performance tracking.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents Required for Registration
            </h2>

            <h3 className="font-medium text-gray-900">
              Applicant Documents
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                ID proof such as Aadhaar, PAN or Voter ID.
              </li>
              <li>
                Educational certificate showing your highest qualification, from 10th pass to post-graduation.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Financial Documents
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Cancelled cheque or a copy of the bank passbook.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Store Documents
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Ownership paper or rental agreement for the proposed store.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Registrations to Plan For
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                GST registration for billing and tax compliance.
              </li>
              <li>
                FSSAI licence or registration for selling packaged food items.
              </li>
              <li>
                Local shop and establishment registration as required by the municipal body.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Understanding the Declaration Before You Submit
            </h2>

            <h3 className="font-medium text-gray-900">
              Accuracy of Information
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You confirm that all details and documents you submit are true, correct and complete.
              </li>
              <li>
                False information, omitted facts or forged documents can lead to disqualification or termination of franchise rights without refund or legal claim.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Site Visitation Fee
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The form states that you understand the need for a site visitation fee.
              </li>
              <li>
                Once the visit has been made, the fee is non-refundable, so read this point carefully before you submit.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Compliance and Reporting
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You agree to follow operational rules, training mandates and monthly reporting procedures.
              </li>
              <li>
                Store performance, transparency of transactions and customer experience affect the continuity of the franchise.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Signed Declaration
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                You upload a signed declaration as a PDF with the application.
              </li>
              <li>
                Keep a copy of the signed document for your own records.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips for a Smooth Registration
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep clear scans of all documents ready before you open the form, so that uploads take only a few minutes.
              </li>
              <li>
                Use the same name spellings across ID proof, address proof and bank details.
              </li>
              <li>
                Confirm the shop’s size and ownership or rental status before you apply.
              </li>
              <li>
                Visit the location at different times of day to check footfall.
              </li>
              <li>
                Write down your questions about the model and ask the team before signing the agreement.
              </li>
              <li>
                Read the declaration slowly and clarify every point you do not understand.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              After You Submit: What Happens Next
            </h2>

            <h3 className="font-medium text-gray-900">
              Review of Your Application
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The franchise team reads your details, checks your documents and contacts you if anything is missing or unclear.
              </li>
              <li>
                Keep your phone and email active so that follow-up questions are answered quickly.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Location Review
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company evaluates your proposed site on population, purchasing capacity and local demand before giving approval.
              </li>
              <li>
                If the location is not suitable, discuss alternatives in Rampur with the team before you commit to a lease.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Agreement and Onboarding
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Once the site is approved, you review and sign the franchise agreement and complete KYC and payment as agreed.
              </li>
              <li>
                Onboarding then moves to store setup, stocking, training and launch planning.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Common Registration Mistakes to Avoid
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Uploading blurred or incomplete documents, which delays review.
              </li>
              <li>
                Using different name spellings across ID proof, address proof and bank records.
              </li>
              <li>
                Applying before confirming shop size, ownership or rent terms.
              </li>
              <li>
                Ignoring the declaration and the non-refundable site visitation fee clause.
              </li>
              <li>
                Skipping working capital planning for rent, salaries and electricity.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing the Right Location in Rampur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Select a place near dense housing colonies, busy chowks, schools, hospitals or market clusters.
              </li>
              <li>
                Prefer a ground-floor shop with wide frontage, signboard space and easy two-wheeler parking.
              </li>
              <li>
                Compare rent with expected sales so that your margin remains healthy.
              </li>
              <li>
                Study nearby grocery stores and note where they are weak in range, billing or display.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Get After Registration and Approval
            </h2>

            <h3 className="font-medium text-gray-900">
              Store Setup and Branding
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Layout, interiors, signage and uniform branding for a consistent store identity.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Inventory and Supply
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Opening stock recommendations, replenishment guidelines and procurement systems.
              </li>
              <li>
                Expired and damaged goods are taken back by the company, which reduces dead stock risk.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Technology
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                POS-enabled billing and CRM tools to track sales, stock and customer data.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Training and Audits
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Initial training for owner and staff, followed by guidance from a dedicated support team.
              </li>
              <li>
                Regular audits, dashboards and improvement plans.
              </li>
            </ul>

            <h3 className="font-medium text-gray-900">
              Marketing Support
            </h3>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Local campaigns and launch activities to build awareness in Rampur.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Profit Potential
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The model offers an effective gross margin of around 18% to 20%, depending on location, store size and sales volume.
              </li>
              <li>
                Net profit depends on rent, staff cost, electricity and wastage, so cost control is important.
              </li>
              <li>
                Returns build over time as footfall and repeat customers grow.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Register with The Buyzaar Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand is FSSAI licensed, GST registered and MSME certified.
              </li>
              <li>
                It works with leading FMCG brand associations for quality and availability.
              </li>
              <li>
                The franchise term under the FOCM model is five years, with renewal support at the end.
              </li>
              <li>
                Training, technology and continuous guidance make the business simpler for first-time owners.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  How do I register for a Buyzaar Mart franchise in Rampur?
                </h3>
                <p className="mt-2">
                  Submit the inquiry form, fill the franchise application, upload documents and attend the site survey and approval process.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What documents are needed?
                </h3>
                <p className="mt-2">
                  ID proof, educational certificate, cancelled cheque or passbook copy and ownership or rental proof for the shop.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What is the total investment?
                </h3>
                <p className="mt-2">
                  A Mini Mart of 600-1000 sq ft needs about ₹15 lakh to ₹20 lakh in total, and larger formats cost more.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Is the site visitation fee refundable?
                </h3>
                <p className="mt-2">
                  No, the application declaration states that the fee is non-refundable once the visit has been made.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No, training and ongoing support are provided.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Can I propose my own shop?
                </h3>
                <p className="mt-2">
                  Yes, the team surveys your site and approves it after checking population, purchasing capacity and local demand.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Register for a Buyzaar Mart Franchise in Rampur Today
              </h2>

              <p className="mb-4 text-gray-800">
                Rampur offers a strong opportunity to own a structured, branded neighbourhood supermarket.
              </p>

              <p className="mb-4 text-gray-800">
                Contact the team today to discuss your space, preferred format and registration steps.
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
            currentSlug="/rampur/buyzaar-mart-franchise-registration-rampur"
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