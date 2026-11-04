import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mart Franchise Starting at ₹15 Lakh in Rampur | Buyzaar Mart",
  description:
    "Start a mart franchise from ₹15 lakh in Rampur with The Buyzaar Mart. Get a first-year roadmap, POS billing, supply chain, training and marketing support. Apply now.",
  url: "https://www.thebuyzaarmart.com/rampur/mart-franchise-starting-15-lakh-rampur",
  telephone: "+919217991727",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rampur",
    addressLocality: "Rampur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Rampur",
  },
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Franchise Formats",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart (600 to 1,000 sq ft)",
        description:
          "Covers grocery and staples, snacks and biscuits, beverages, personal care, home care and hygiene, and stationery. Total investment starts at ₹15 lakh and generally ranges between ₹15 lakh and ₹20 lakh.",
      },
      {
        "@type": "Offer",
        name: "Super Mart (1,000 to 3,000 sq ft)",
        description:
          "Adds dairy items and fruits and vegetables to the core range, suited to main road locations and busy markets in Rampur.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart (3,000 to 8,000 sq ft)",
        description:
          "Offers the full range including gifts and toys and frozen ready-to-eat items, creating a complete family shopping destination.",
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
      name: "What is the total investment for a mart franchise starting at ₹15 lakh in Rampur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Buyzaar Mart Mini Store starts at ₹15 lakh in total and generally ranges up to ₹20 lakh, depending on size, layout and location.",
      },
    },
    {
      "@type": "Question",
      name: "How much space do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart needs 600 to 1,000 sq ft, with a minimum of 600 sq ft carpet area.",
      },
    },
    {
      "@type": "Question",
      name: "What profit margin can I expect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyzaar indicates an average gross margin of 18% to 20%, which varies with location and sales volume.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Training, simple billing software and continuing support are provided.",
      },
    },
    {
      "@type": "Question",
      name: "What if goods expire or get damaged?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyzaar takes back expired and damaged goods under its inventory assurance.",
      },
    },
    {
      "@type": "Question",
      name: "Can I propose my own shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The team surveys it before final approval.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact the team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call 9217991727 or email info@thebuyzaarmart.com, and expect a response within 24 hours.",
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
              Mart Franchise Starting at ₹15 Lakh in Rampur: Your First-Year Roadmap with The Buyzaar Mart
            </h1>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why a Mart Franchise Starting at ₹15 Lakh Makes Sense in Rampur
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                A mart franchise starting at ₹15 lakh gives you entry into organised retail at a budget that many local entrepreneurs, traders and families can plan for, without needing a large corporate-style investment.
              </li>
              <li>
                Rampur shoppers increasingly look for clean, well-lit stores with fixed pricing, accurate billing and a wide choice of branded products, which is exactly what a franchise mart delivers.
              </li>
              <li>
                Daily-need goods such as staples, snacks, beverages, personal care and home care sell in every season, so a mart offers steadier demand than many other small businesses.
              </li>
              <li>
                You get a ready brand, tested systems and company guidance, which lowers the early risk of learning retail through trial and error.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Meet The Buyzaar Mart
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart is a neighbourhood supermarket franchise brand with its head office in Noida, Uttar Pradesh, and running stores in Kanpur, Noida, Gangoh, Saharanpur and Haridwar.
              </li>
              <li>
                Its brand line “अपना बाजार – बचत का साथ, Quality की बात” puts savings and quality at the centre of every store experience.
              </li>
              <li>
                The business is FSSAI licensed, GST registered and MSME certified, so you partner with a brand that follows food safety and tax compliance rules.
              </li>
              <li>
                More than 50 FMCG partners support the product range, helping your shelves carry names that customers in Rampur already know and trust.
              </li>
              <li>
                The brand&apos;s four pillars are simplicity, reliability, affordability with quality, and ownership with legacy, which together make retail easier for a first-time owner.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Total Investment for a Mart Franchise Starting at ₹15 Lakh
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                A Buyzaar Mart Mini Store of 600 to 1,000 sq ft starts at a total investment of ₹15 lakh and generally falls between ₹15 lakh and ₹20 lakh, based on store size, arrangement, location and the work needed at the premises.
              </li>
              <li>
                Bigger formats such as Super Mart and Hyper Mart require a higher total investment, which the team confirms after reviewing your site and area.
              </li>
              <li>
                The investment calculator on the Buyzaar website lets you select a store type and area to see an estimated total, which helps you plan before applying.
              </li>
              <li>
                Keep a separate monthly budget for shop rent, staff salaries and electricity, as these running costs are borne by the franchisee in the FOCM model.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why the Mini Mart Is the Smart Starting Format
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Mini Mart covers grocery and staples, snacks and biscuits, beverages, personal care, home care and hygiene, and stationery, which are the categories families buy most often.
              </li>
              <li>
                Its 600 to 1,000 sq ft size fits common shop spaces in residential and market areas of Rampur, so you can find a suitable premises more easily.
              </li>
              <li>
                A smaller store is simpler to staff, stock and supervise, which helps new owners learn the business with confidence.
              </li>
              <li>
                If your first store performs well, you can later discuss growth options, such as a larger format or another outlet, with the franchise team.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Mini Mart vs Traditional Kirana Store
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                A traditional kirana depends on the owner&apos;s own supplier contacts and memory, while a Buyzaar Mart uses a managed supply chain, replenishment guidance and a POS system to track stock.
              </li>
              <li>
                Branded interiors, uniform signage and clean display make a mart look more reliable to new customers than an unorganised shop.
              </li>
              <li>
                Technology-based billing reduces mistakes and gives you daily sales data, whereas manual notebooks often hide losses and slow-moving stock.
              </li>
              <li>
                The inventory assurance, under which expired and damaged goods are taken back, protects you from dead stock that many kirana owners absorb as a loss.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How the FOCM Model Works for You
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                FOCM stands for Franchise Owned, Company Managed, which means you own the outlet and invest in the setup while Buyzaar Mart manages operations, branding, technology, training and performance systems.
              </li>
              <li>
                The company handles location survey and approval, store layout, interior design and branding to maintain uniformity across outlets.
              </li>
              <li>
                You receive the right to use the Buyzaar trademarks and brand identity, and you follow standard operating processes for billing, inventory and customer service.
              </li>
              <li>
                The agreement term is five years, with renewal procedures and evaluation criteria discussed at the end of the term.
              </li>
              <li>
                If you hold a larger property of at least 2,000 sq ft and prefer a hands-off route, you can ask about the FOCO model, where the company operates the store.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Complete Support Package from Buyzaar Mart
            </h2>


            <h3 className="font-medium text-gray-900">Before Launch</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Site selection guidance and a survey of population, purchasing capacity and local demand help confirm that your location suits a mart.
              </li>
              <li>
                The team supports franchise agreement execution, KYC and legal documentation so formalities remain clear and simple.
              </li>
              <li>
                Store categorisation, layout, interiors and branding are arranged to match the Buyzaar format.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">At Launch</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A distinctive launch strategy and hyper-local marketing campaigns create fast visibility for your new store.
              </li>
              <li>
                Opening stock recommendations and a procurement system help you stock the right products from day one.
              </li>
              <li>
                Initial training for you and your staff covers operations, POS billing and customer engagement.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">After Launch</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A dedicated support team provides technical help, audits, performance dashboards and improvement suggestions.
              </li>
              <li>
                Local promotions, digital campaigns and brand materials continue to support customer acquisition.
              </li>
              <li>
                Replenishment guidance and pricing and product-mix advice keep your stock aligned with what Rampur customers prefer.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Your First-Year Roadmap
            </h2>


            <h3 className="font-medium text-gray-900">Months 1 to 2: Planning and Setup</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Finalise your location, submit documents, complete the site survey and sign the franchise agreement.
              </li>
              <li>
                Arrange working capital for rent, salaries and electricity so that early expenses do not create pressure.
              </li>
              <li>
                Prepare your team for training and agree on store timings that suit local shopping habits.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Months 3 to 6: Launch and Learning</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Open the store with launch promotions, and use POS reports to see which categories move fastest.
              </li>
              <li>
                Adjust your product mix and pack sizes with the franchise team to suit Rampur preferences.
              </li>
              <li>
                Collect customer feedback at the counter and fix gaps in availability, cleanliness and service quickly.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Months 7 to 12: Growth and Stability</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Plan festive stocking for Diwali, Karwa Chauth and wedding seasons, using the guidance in Buyzaar&apos;s blog articles.
              </li>
              <li>
                Use CRM tools to build repeat customers and plan offers around monthly shopping cycles.
              </li>
              <li>
                Review audit findings and performance dashboards, then decide whether to expand categories or consider a larger format.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Earning Potential You Can Expect
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Buyzaar highlights an effective gross margin of 18% to 20%, which varies with location, store size, sales volume and product mix.
              </li>
              <li>
                Net returns depend on daily sales and fixed costs such as rent, salaries and electricity, so careful budgeting is as important as strong sales.
              </li>
              <li>
                Smart stocking based on demand reduces waste and keeps cash moving, which supports healthier margins over time.
              </li>
              <li>
                Festive peaks, regular household purchases and steady repeat customers together help your store build consistent monthly sales.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choosing the Right Location in Rampur
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Select a shop near dense residential colonies or a busy neighbourhood market, so families can reach your store quickly on foot or by two-wheeler.
              </li>
              <li>
                Look for a ground-floor unit with clear road visibility, easy entry and parking space, because convenience brings regular customers back.
              </li>
              <li>
                Visit the area at different times of day to compare footfall, and note nearby competitors so you can discuss them with the franchise team during the site survey.
              </li>
              <li>
                Choose premises with a stable rental agreement, so your investment in interiors and branding remains protected for the full franchise term.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Mistakes to Avoid in Your First Year
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Do not select a low-footfall shop only to save on rent, because weak sales usually cost more than the rent you save.
              </li>
              <li>
                Do not overstock slow-moving items, and follow the opening stock and replenishment guidance from the franchise team.
              </li>
              <li>
                Do not skip training for your staff, because billing accuracy and polite service directly affect repeat visits.
              </li>
              <li>
                Do not ignore local taste, and use the localised product flexibility to include regional brands and pack sizes that suit Rampur families.
              </li>
              <li>
                Do not forget working capital for the first few months, since rent, salaries and electricity continue even before sales stabilise.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Creating a Great Customer Experience
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep shelves tidy, labelled and fully stocked so shoppers find what they need quickly and trust the store.
              </li>
              <li>
                Maintain clear pricing and fast billing, because waiting time and price confusion are the biggest reasons customers leave.
              </li>
              <li>
                Place daily staples where they are easy to reach, and keep snacks and beverages near the billing counter to encourage add-on purchases.
              </li>
              <li>
                Greet customers warmly and remember regular shoppers, because personal service is the biggest advantage a neighbourhood store has over large chains.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Should Apply
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                First-time business owners who want a structured retail model with training and support instead of starting alone.
              </li>
              <li>
                Existing kirana or general store owners who want to upgrade into a branded, organised mart.
              </li>
              <li>
                Property owners in Rampur with a suitable shop who want to turn their space into an income-generating business.
              </li>
              <li>
                Families who want to build a business they can run together and pass on, in line with the Buyzaar idea of ownership and legacy.
              </li>
              <li>
                Retail experience is not required, because training, billing software and ongoing assistance are part of the franchise.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents and Eligibility
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                You need at least 600 sq ft of carpet area, either owned or rented, at a location the franchise team approves after a survey.
              </li>
              <li>
                Submit an ID proof such as Aadhaar, PAN or Voter ID, along with a certificate of highest education.
              </li>
              <li>
                Provide bank details through a cancelled cheque or passbook copy, and ownership or rental agreement papers for the proposed store.
              </li>
              <li>
                You may propose your own location, and the team checks population, purchasing capacity and local demand before final approval.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Simple Steps to Apply in Rampur
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                Submit an inquiry on thebuyzaarmart.com or call{" "}
                <a
                  href="tel:+919217991727"
                  className="font-semibold text-green-600 hover:underline"
                >
                  9217991727
                </a>
                , then attend a call or meeting to understand the opportunity and total investment.
              </li>
              <li>
                Fill the franchise application form so that the team can survey your proposed site and confirm its suitability.
              </li>
              <li>
                Review and sign the franchise agreement after documentation, and make the payment as guided by the team.
              </li>
              <li>
                Begin store setup, receive the franchise kit and launch your mart with full marketing and operational support.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>


            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What is the total investment for a mart franchise starting at ₹15 lakh in Rampur?
                </h3>
                <p className="mt-2">
                  A Buyzaar Mart Mini Store starts at ₹15 lakh in total and generally ranges up to ₹20 lakh, depending on size, layout and location.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  How much space do I need?
                </h3>
                <p className="mt-2">
                  A Mini Mart needs 600 to 1,000 sq ft, with a minimum of 600 sq ft carpet area.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  What profit margin can I expect?
                </h3>
                <p className="mt-2">
                  Buyzaar indicates an average gross margin of 18% to 20%, which varies with location and sales volume.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No. Training, simple billing software and continuing support are provided.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  What if goods expire or get damaged?
                </h3>
                <p className="mt-2">
                  Buyzaar takes back expired and damaged goods under its inventory assurance.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Can I propose my own shop?
                </h3>
                <p className="mt-2">
                  Yes. The team surveys it before final approval.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  How do I contact the team?
                </h3>
                <p className="mt-2">
                  Call{" "}
                  <a
                    href="tel:+919217991727"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    9217991727
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:info@thebuyzaarmart.com"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    info@thebuyzaarmart.com
                  </a>
                  , and expect a response within 24 hours.
                </p>
              </div>
            </div>


            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Mart Franchise in Rampur from ₹15 Lakh
              </h2>


              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  The Buyzaar Mart offers a mart franchise starting at ₹15 lakh in Rampur, with a first-year roadmap, POS billing, supply chain, training and marketing support.
                </li>
                <li>
                  Mini Store total investment generally ranges between ₹15 lakh and ₹20 lakh, depending on store size, layout and location.
                </li>
                <li>
                  Submit an inquiry on thebuyzaarmart.com or call{" "}
                  <a
                    href="tel:+919217991727"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    9217991727
                  </a>{" "}
                  to begin the application process.
                </li>
                <li>
                  Keep ID proof, education certificate, bank details and property documents ready before applying.
                </li>
              </ul>
            </div>
          </div>


          <CityInternalLinks
            city="rampur"
            currentSlug="/rampur/mart-franchise-starting-15-lakh-rampur"
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