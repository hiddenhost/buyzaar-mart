import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "How to Become a Franchise Partner in Amroha | Buyzaar Mart",
  description:
    "Want to become a franchise partner in Amroha? See who can apply, models, documents, process and total investment of ₹15–20 lakh with The Buyzaar Mart.",
  url: "https://www.thebuyzaarmart.com/amroha/how-to-become-franchise-partner-in-amroha",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Amroha",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Amroha",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Franchise Partner Formats in Amroha",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Entry-level franchise partner format designed for residential colony shops, society-level commercial units, and neighbourhood-facing locations in Amroha.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "Mid-tier franchise partner format suited for main market locations, colony chowks, and busy residential sector roads in Amroha.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "Large-format supermarket franchise partner format suited for high-traffic commercial locations, township market areas, and premium residential zones in Amroha.",
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
      name: "How much total investment is needed to become a partner in Amroha?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart of 600–1000 sq ft needs about ₹15–20 lakh in total, depending on size, location and interiors.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, the company provides training, billing software and ongoing support.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my own shop or property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, once the team surveys it and approves it.",
      },
    },
    {
      "@type": "Question",
      name: "What minimum area is needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At least 600 sq ft of carpet area.",
      },
    },
    {
      "@type": "Question",
      name: "What does the partner pay for after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under FOCM, rent, salaries, electricity and other running costs.",
      },
    },
    {
      "@type": "Question",
      name: "Is there help with expired goods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Buyzaar Mart takes back expired and damaged goods.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FOCM runs for five years and FOCO for 10 years.",
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
              How to Become a Franchise Partner of The Buyzaar Mart in Amroha
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What It Means to Be a Franchise Partner
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>A franchise partner is a business owner who runs a branded store under a company’s name, systems and standards while owning the outlet and its daily results.</li>
              <li>The partnership works on shared interest: the company grows its network, and you grow your own store with the support of an established brand.</li>
              <li>Becoming a Buyzaar Mart partner means you join a network of supermarket and grocery stores built for urban and semi-urban households across India.</li>
              <li>The brand speaks of retail ownership as a legacy, so a store can become a family business that you build, grow and pass on.</li>
              <li>You are not an employee, because you invest, make local decisions, manage the store and earn from its performance.</li>
              <li>You are also not alone, because the company provides setup, technology, training, supply guidance and regular reviews.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Amroha Is Ready for a Franchise Partner
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Amroha serves a wide local population of households, traders, farmers and working families who buy groceries and household items every week.</li>
              <li>Daily-need retail keeps selling in all seasons, with extra demand around Eid, Diwali, Holi, wedding season and school reopening.</li>
              <li>Many shoppers still depend on small unorganised shops with limited range and no fixed billing, so organised stores have a clear opening.</li>
              <li>Nearby areas such as Hasanpur, Dhanaura and Gajraula add customers who are willing to travel to a store with better choice and quality.</li>
              <li>Customers are becoming comfortable with UPI payments, printed bills and loyalty offers, which suit a POS-enabled franchise.</li>
              <li>A trusted brand arriving early in the town can win customer loyalty before larger competitors enter.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Can Become a Partner
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>First-time entrepreneurs, since the franchise does not require previous retail experience and training is provided.</li>
              <li>Shop owners who want to upgrade an old kirana or general store into a modern branded outlet.</li>
              <li>Property owners with a suitable space of at least 600 sq ft who want to put it to productive use.</li>
              <li>Working professionals and retired persons who can invest and give regular time to supervise the store.</li>
              <li>Families who want a long-term local business that several members can contribute to.</li>
              <li>Investors who prefer a hands-off route and can meet the space conditions of the company-operated model.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Partnership Models Available
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>FOCM – Franchise Owned, Company Managed:</strong> You own the outlet and invest in the setup, while Buyzaar Mart provides operating systems, branding, technology, training and performance management.</li>
              <li>The company handles the location survey, layout, interior design, branding and store launch according to the chosen format.</li>
              <li>Rent, staff salaries, electricity and other running costs are paid by the franchisee.</li>
              <li>The term is five years, with support for renewal procedures at the end of the term.</li>
              <li>This model suits partners who want to be actively involved in running the store.</li>
              <li><strong>FOCO – Franchise Owned, Company Operated:</strong> The partner provides the space and capital, while the company operates the store, including staff, marketing and supply chain.</li>
              <li>A minimum store size of 2,000 sq ft is required, and the agreement is for 10 years.</li>
              <li>The partner earns a revenue share on monthly sales as defined in the agreement.</li>
              <li>Please confirm the latest terms with the team, since conditions may change.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Formats for Partners
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Mini Mart (600–1000 sq ft):</strong> Covers grocery and staples, beverages, snacks and biscuits, personal care, homecare and hygiene, and stationery.</li>
              <li><strong>Super Mart (1000–3000 sq ft):</strong> Adds dairy items and fruits and vegetables to the Mini Mart range.</li>
              <li><strong>Hyper Mart (3000–8000 sq ft):</strong> Adds gifts and toys and frozen ready-to-eat products for a complete shopping experience.</li>
              <li>Choose the format according to your space, local footfall, budget and the time you can give to the store.</li>
              <li>A Mini Mart is a practical starting point in most neighbourhoods, and you can discuss a larger format if you have a strong location.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment to Become a Partner in Amroha
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>A Buyzaar Mart Mini Store of 600–1000 sq ft requires a total investment of roughly ₹15 lakh to ₹20 lakh.</li>
              <li>The exact amount depends on the size of the store, its location, the arrangement and the interior work involved.</li>
              <li>Super Mart and Hyper Mart formats require a larger total investment, which the team can estimate for your property.</li>
              <li>Set aside additional working capital for rent, salaries and electricity during the early months.</li>
              <li>Use the investment calculator on the franchise page to check the estimate for your selected store type and area.</li>
              <li>Get the final cost, the agreement and the payment schedule confirmed in writing before you transfer any money.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Get as a Partner
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Brand identity:</strong> Licensed use of The Buyzaar Mart name, logo and uniform store design.</li>
              <li><strong>Site help:</strong> Location survey, approval and guidance on selecting the right premises.</li>
              <li><strong>Store setup:</strong> Layout, interior, branding and store assets arranged as per your format.</li>
              <li><strong>Technology:</strong> POS billing, sales tracking and customer relationship tools.</li>
              <li><strong>Supply support:</strong> Opening stock recommendations, replenishment guidance, procurement systems and logistics coordination.</li>
              <li><strong>Training:</strong> Initial training for you and your staff on operations, billing and customer service.</li>
              <li><strong>Marketing:</strong> Local campaigns, digital marketing, launch activities and brand materials.</li>
              <li><strong>Stock assurance:</strong> Expired and damaged goods are taken back by the brand.</li>
              <li><strong>Reviews:</strong> Regular audits, performance dashboards and improvement suggestions.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What the Company Expects from You
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide the initial capital investment and keep enough working capital for running the store.</li>
              <li>Arrange a suitable location, and pay rent, staff salaries, electricity and other running expenses under the FOCM model.</li>
              <li>Follow brand standards for store design, hygiene, merchandising, uniforms and customer service.</li>
              <li>Use the POS system correctly so that sales, stock and customer data are recorded honestly.</li>
              <li>Join the training programmes and share monthly reporting as required by the company.</li>
              <li>Maintain transparency in transactions, because store performance and customer experience affect the continuation of the franchise.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step Process to Become a Partner
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Step 1 – Inquiry:</strong> Fill the form on the website or call the team, and attend a call or meeting to understand the business.</li>
              <li><strong>Step 2 – Application:</strong> Submit the franchise application with identity proof, education proof, bank details and property papers.</li>
              <li><strong>Step 3 – Site visit and survey:</strong> The team checks population, purchasing capacity and local demand before approving the location, and a site visitation fee may apply as stated in the application declaration.</li>
              <li><strong>Step 4 – Agreement:</strong> Read the franchise agreement carefully, complete KYC and legal documentation, and sign it with the payment.</li>
              <li><strong>Step 5 – Store setup:</strong> The company arranges layout, interiors, branding, POS and opening stock.</li>
              <li><strong>Step 6 – Training:</strong> You and your staff are trained on store operations and customer engagement.</li>
              <li><strong>Step 7 – Grand opening:</strong> The store launches with local marketing and customer acquisition support.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents Required
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>ID proof of the applicant, such as Aadhaar, PAN or Voter ID.</li>
              <li>Certificate of your highest education, such as 10th, 12th, graduation or post-graduation.</li>
              <li>Bank details through a cancelled cheque or a copy of the passbook.</li>
              <li>Ownership papers or rental agreement for the proposed store.</li>
              <li>Signed declaration in PDF form submitted with the application.</li>
              <li>Keep all documents clear, correct and consistent, because false details can lead to disqualification or termination at any stage.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Points to Check Before Signing the Agreement
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Read the duration, renewal conditions and exit terms so that you know your rights and responsibilities.</li>
              <li>Confirm the exact total investment, the fee structure and what each payment covers.</li>
              <li>Understand which expenses the franchisee must bear and which services the company provides.</li>
              <li>Check the supply process, stock return policy and replenishment guidelines.</li>
              <li>Ask about training, support contacts and the audit and reporting schedule.</li>
              <li>Consider showing the agreement to a lawyer or chartered accountant before you sign.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Habits of a Successful Franchise Partner
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Visit the store daily during the first months, so that you learn customer behaviour and staff strengths.</li>
              <li>Follow the stocking guidance, but also add local products that Amroha families ask for.</li>
              <li>Check POS reports every week to know what is selling and what is blocking your money.</li>
              <li>Greet customers politely, keep the store clean and solve complaints quickly.</li>
              <li>Promote your store in WhatsApp groups, on social media and near schools and markets.</li>
              <li>Control expenses, keep accurate records and reinvest early profits in better service and range.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Questions to Ask Yourself Before Applying
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Can I arrange the total investment along with extra working capital without taking pressure on my family finances?</li>
              <li>Do I have a suitable location or the ability to find one with good footfall and fair rent?</li>
              <li>Am I ready to follow brand rules, reporting and audits instead of running the store completely my own way?</li>
              <li>Can I give regular time to the store, or do I have a trusted family member who can?</li>
              <li>Am I prepared to be patient, since a new store needs time to build trust and steady sales?</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Building the Right Team for Your Store
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Hire staff from the local area who know customers, understand local language and can build friendly relationships.</li>
              <li>Assign clear duties for billing, shelf stocking, receiving goods and customer help, so that nobody is confused in rush hours.</li>
              <li>Use the company training for your staff and repeat basic training whenever a new person joins.</li>
              <li>Reward honesty and good service, because staff behaviour decides whether customers return.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Earning Potential
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>The brand mentions an effective gross margin of 18–20%, which depends on location, size and sales volume.</li>
              <li>Gross margin is not take-home profit, since rent, salaries, electricity and other costs have to be paid from it.</li>
              <li>Profit usually grows as the store gains repeat customers and learns which products move fastest.</li>
              <li>Results cannot be guaranteed, and each partner’s income depends on location, service and management.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. How much total investment is needed to become a partner in Amroha?
                </h3>
                <p className="mt-2">
                  A Mini Mart of 600–1000 sq ft needs about ₹15–20 lakh in total, depending on size, location and interiors.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. Do I need prior experience?
                </h3>
                <p className="mt-2">
                  No, the company provides training, billing software and ongoing support.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. Can I use my own shop or property?
                </h3>
                <p className="mt-2">
                  Yes, once the team surveys it and approves it.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. What minimum area is needed?
                </h3>
                <p className="mt-2">
                  At least 600 sq ft of carpet area.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. What does the partner pay for after launch?
                </h3>
                <p className="mt-2">
                  Under FOCM, rent, salaries, electricity and other running costs.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. Is there help with expired goods?
                </h3>
                <p className="mt-2">
                  Yes, Buyzaar Mart takes back expired and damaged goods.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. How long is the agreement?
                </h3>
                <p className="mt-2">
                  FOCM runs for five years and FOCO for 10 years.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Franchise Partner Journey in Amroha
              </h2>

              <p className="mb-4 text-gray-800">
                Amroha&apos;s daily consumer economy offers one of the most reliable opportunities for a branded supermarket retail store.
              </p>

              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart franchise network and bring your neighborhood a modern daily needs store built on trust, convenience, and professional retail systems.
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
            city="amroha"
            currentSlug="/amroha/how-to-become-franchise-partner-in-amroha"
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