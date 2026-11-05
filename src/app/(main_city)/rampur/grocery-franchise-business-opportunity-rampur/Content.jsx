import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grocery Franchise Business Opportunity Rampur | Buyzaar",
  description:
    "Plan a grocery franchise business in Rampur. See customers, competition, a 90-day launch plan, the ₹15-20 lakh Mini Mart investment, support and how to apply.",
  url: "https://www.thebuyzaarmart.com/rampur/grocery-franchise-business-opportunity-rampur",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rampur",
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
    name: "The Buyzaar Mart Grocery Franchise Formats in Rampur",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600-1000 sq ft grocery franchise format for first-time owners and residential neighbourhoods in Rampur, with a total investment of about ₹15 lakh to ₹20 lakh.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1000-3000 sq ft grocery franchise format for busy roads and larger markets, adding dairy items and fruits and vegetables.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3000-8000 sq ft grocery franchise format for large premises in high-footfall locations, adding gifts, toys and frozen ready-to-eat items.",
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
      name: "What is the total investment for a grocery franchise in Rampur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mini Mart of 600-1000 sq ft needs about ₹15 lakh to ₹20 lakh in total, and larger formats cost more.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need retail experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, training, billing software and ongoing support are provided.",
      },
    },
    {
      "@type": "Question",
      name: "What space is needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A minimum carpet area of 600 sq ft is required.",
      },
    },
    {
      "@type": "Question",
      name: "What margin can I expect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The model offers an effective gross margin of about 18% to 20%, depending on location and sales.",
      },
    },
    {
      "@type": "Question",
      name: "Who pays rent and salaries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the FOCM model, the franchise owner pays rent, staff salaries, electricity and running costs.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The FOCM term is five years, with renewal support at the end.",
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
              Grocery Franchise Business Opportunity in Rampur: Plan, Launch and Grow with The Buyzaar Mart
            </h1>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              A Grocery Franchise Business Opportunity in Rampur
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                A grocery franchise is a business opportunity where you run your own store under an established brand, with a ready model for store design, stock, billing, training and marketing.
              </li>
              <li>
                Families in Rampur buy staples, snacks, beverages, personal care and home care items every week, which gives a grocery business steady daily demand.
              </li>
              <li>
                The Buyzaar Mart offers a supermarket franchise built on the idea of &quot;Your Friendly Neighborhood Store&quot;, where owners build dignified livelihoods through neighbourhood retail.
              </li>
              <li>
                This guide treats the franchise as a real business plan: who your customers are, how to study competition, how to plan categories, how to run the first ninety days and how to grow.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Grocery Is a Dependable Business Opportunity
            </h2>


            <h3 className="font-medium text-gray-900">Constant Need</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Atta, rice, dal, oil, spices, soaps and cleaning products are bought again and again, so the business does not rely on a single season.
              </li>
              <li>
                Festivals such as Navratri, Diwali and Eid and wedding season add extra demand for special items.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Repeat Customers</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A trusted neighbourhood store earns repeat visits from the same families every week.
              </li>
              <li>
                Regular customers lower the effort needed to win each sale and make daily income more predictable.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Support from a Franchise Brand</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A tested layout, product mix guidance and supply coordination help new owners avoid common mistakes.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment for the Business
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                The total investment for a Buyzaar Mart Mini Mart franchise (600-1000 sq ft) is about ₹15 lakh to ₹20 lakh.
              </li>
              <li>
                The exact amount depends on store size, layout, location and the format you choose, and larger formats need a higher total.
              </li>
              <li>
                Use the investment calculator on the franchise page to estimate your cost, and confirm the final total with the franchise team before signing.
              </li>
              <li>
                Keep working capital ready for rent, staff salaries and electricity, because the franchise owner pays these running costs under the FOCM model.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Know Your Customers in Rampur
            </h2>


            <h3 className="font-medium text-gray-900">Families Shopping for the Month</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                These customers buy staples in bulk and value fair prices, wide choice and reliable stock.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Daily and Weekly Shoppers</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Nearby households pick up milk, snacks, soap, biscuits and small items on short visits, so convenience matters most.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Students and Young Residents</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Areas near schools and colleges need stationery, snacks, beverages and personal care items.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Festival and Wedding Shoppers</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                These customers buy gifting, fasting and special-occasion products in larger baskets for a short period.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Customers from Nearby Towns</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Shoppers from Swar, Bilaspur, Milak and Shahabad often visit Rampur for larger shopping and can become regular buyers.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Study Your Competition Before You Start
            </h2>


            <h3 className="font-medium text-gray-900">Visit Nearby Stores</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Note the range of products, price tags, shelf display, billing method and customer crowd at different times of day.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Find the Gaps</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Look for what nearby shops miss, such as clean display, clear pricing, proper bills, stock availability or wider choice.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Decide Your Edge</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Use the brand’s layout, POS billing and product mix to offer what traditional shops cannot easily match.
              </li>
              <li>
                Add service strengths such as polite staff, home delivery and phone ordering.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Choose the Right Store Format
            </h2>


            <h3 className="font-medium text-gray-900">Mini Mart (600-1000 sq ft)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A practical start for first-time owners and residential neighbourhoods.
              </li>
              <li>
                Covers personal care, beverages, grocery and staples, home care and hygiene, stationery, snacks and biscuits.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Super Mart (1000-3000 sq ft)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Suited to busy roads and larger markets where families shop for the month.
              </li>
              <li>
                Adds dairy items and fruits and vegetables.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Hyper Mart (3000-8000 sq ft)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Built for large premises in high-footfall locations.
              </li>
              <li>
                Adds gifts, toys and frozen ready-to-eat items.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How the Business Model Works
            </h2>


            <h3 className="font-medium text-gray-900">Franchise Owned Company Managed</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                You own the outlet and invest in the setup, while the company manages branding, technology, training and performance systems.
              </li>
              <li>
                The term is five years, with renewal support at the end.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">What the Company Handles</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Location survey and approval, layout, interior design and branding setup.
              </li>
              <li>
                Franchise agreement support, legal documentation and onboarding formalities.
              </li>
              <li>
                Operating standards, pricing and product mix strategy, audits and performance reviews.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">What You Handle</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Initial capital, shop space, staff and daily customer service.
              </li>
              <li>
                Rent, salaries, electricity and other running costs.
              </li>
              <li>
                Brand standards, training and monthly reporting.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Business Plan Checklist for Your Rampur Store
            </h2>


            <h3 className="font-medium text-gray-900">Capital Plan</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Decide your total investment and keep a cash reserve for the first months.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Location Plan</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Shortlist shops with strong footfall, visibility and easy access, and keep ownership or rental papers ready.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Team Plan</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Decide who manages the store daily and how many staff you need for billing, stocking and customer help.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Product Plan</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Start with the categories in your chosen format and adjust to local demand after reviewing POS reports.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Marketing Plan</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Prepare launch announcements, WhatsApp groups, local contacts and opening offers.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Compliance Plan</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Arrange GST registration, FSSAI licence or registration and local shop registration as required.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Your First 90 Days: A Simple Plan
            </h2>


            <h3 className="font-medium text-gray-900">Before Launch</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Finish site approval, agreement, store setup, stocking and training.
              </li>
              <li>
                Announce the opening date to nearby families, offices and colonies.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Days 1 to 30: Learn the Store</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Spend time at the store every day and watch which products sell fastest.
              </li>
              <li>
                Keep staples always in stock and fix display problems quickly.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Days 31 to 60: Tune the Range</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Use POS reports to reduce slow items and increase fast ones.
              </li>
              <li>
                Ask customers for feedback and adjust the product mix to local tastes.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Days 61 to 90: Build Loyalty</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Start phone ordering and home delivery for regular families.
              </li>
              <li>
                Use CRM tools to remember repeat buyers and share offers with them.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Seasonal Calendar for a Grocery Business
            </h2>


            <h3 className="font-medium text-gray-900">Festival Season</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Plan stock for Navratri, Diwali and Eid early, and use blog guides such as the Navratri vrat items list for fasting items.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Wedding Season</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Prepare bulk staples, dry fruits, gifting items and household needs for larger baskets.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">School Season</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep stationery, snacks and beverages ready near schools and colleges.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Everyday Months</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Focus on staples, personal care and home care, and run combo offers to keep footfall steady.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Earning Potential
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart model states an effective gross margin of around 18% to 20%, depending on location, store size and sales volume.
              </li>
              <li>
                Gross margin is not net profit, because rent, salaries, electricity and wastage are paid from it.
              </li>
              <li>
                Results depend on location, stock availability, service quality and cost control, so no income is guaranteed.
              </li>
              <li>
                Judge performance over several months, since regular customers build gradually.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Receive from The Buyzaar Mart
            </h2>


            <h3 className="font-medium text-gray-900">Store Design and Branding</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Layout, interiors, signage and uniform branding for a consistent identity.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Supply and Inventory</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Opening stock recommendations, replenishment guidelines and procurement systems.
              </li>
              <li>
                The company takes back expired and damaged goods, which reduces dead stock losses.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Technology</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                POS-enabled billing and CRM tools to track sales, stock and customers.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Training and Audits</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Initial training for owner and staff, followed by a dedicated support team, audits and performance dashboards.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Marketing</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A launch strategy, hyper-local campaigns and digital marketing support.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step Process to Start
            </h2>


            <h3 className="font-medium text-gray-900">Step 1: Inquiry</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Fill the inquiry form on thebuyzaarmart.com or call +91 9217991727.
              </li>
              <li>
                The team responds within 24 hours on working days.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 2: Application</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Complete the franchise application with identity, address, bank and store details.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 3: Site Survey and Approval</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The company checks population, purchasing capacity and local demand before approving your location.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 4: Agreement</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Review the agreement, complete KYC and make the payment as agreed.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Step 5: Setup, Training and Launch</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The team plans layout, interiors and branding, trains you and your staff, and supports your grand opening.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Documents Required
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                ID proof such as Aadhaar, PAN or Voter ID.
              </li>
              <li>
                Educational certificate showing your highest qualification.
              </li>
              <li>
                Cancelled cheque or bank passbook copy.
              </li>
              <li>
                Ownership paper or rental agreement for the proposed store.
              </li>
              <li>
                GST registration, FSSAI licence or registration and local shop registration as required.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Growth Roadmap After Your Store Stabilises
            </h2>


            <h3 className="font-medium text-gray-900">Strengthen the Core Range</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep staples, snacks, personal care and home care always available and well displayed.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Add Useful Categories</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Consider add-on categories such as kitchenware and home essentials to raise basket size, as discussed in the store guides on the Buyzaar Mart blog.
              </li>
              <li>
                Consider upgrading to a larger format if your location and footfall support it.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Serve Customers at Home</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Grow phone ordering and home delivery for regular families.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Build a Local Reputation</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep prices clear, service friendly and stock consistent, so that word of mouth brings new customers.
              </li>
            </ul>


            <h3 className="font-medium text-gray-900">Consider a Second Store</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A stable and well-managed first outlet can give you the confidence and experience to plan another one in a suitable location.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Risks to Plan For
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                A weak location with low footfall can slow sales.
              </li>
              <li>
                Rent and salaries are fixed costs, so the first months need a cash reserve.
              </li>
              <li>
                Overstocking slow items blocks cash, while empty shelves lose customers.
              </li>
              <li>
                Poor staff service reduces repeat visits.
              </li>
              <li>
                Returns are not fixed and depend on how well the store is run.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Visit a Running Store
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart lists running stores in Kanpur, Noida, Gangoh, Saharanpur and Haridwar, with an upcoming store in Ghaziabad.
              </li>
              <li>
                A store visit helps you judge layout, display, billing and customer flow in person.
              </li>
              <li>
                Talk to the owner about support, supply and daily operations before you decide.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand is FSSAI licensed, GST registered and MSME certified.
              </li>
              <li>
                It works with leading FMCG brand associations for quality and availability.
              </li>
              <li>
                No retail experience is needed, since training and ongoing support are included.
              </li>
              <li>
                Uniform branding gives customers a trusted shopping experience.
              </li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>


            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What is the total investment for a grocery franchise in Rampur?
                </h3>
                <p className="mt-2">
                  A Mini Mart of 600-1000 sq ft needs about ₹15 lakh to ₹20 lakh in total, and larger formats cost more.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Do I need retail experience?
                </h3>
                <p className="mt-2">
                  No, training, billing software and ongoing support are provided.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  What space is needed?
                </h3>
                <p className="mt-2">
                  A minimum carpet area of 600 sq ft is required.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  What margin can I expect?
                </h3>
                <p className="mt-2">
                  The model offers an effective gross margin of about 18% to 20%, depending on location and sales.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  Who pays rent and salaries?
                </h3>
                <p className="mt-2">
                  Under the FOCM model, the franchise owner pays rent, staff salaries, electricity and running costs.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  How long is the agreement?
                </h3>
                <p className="mt-2">
                  The FOCM term is five years, with renewal support at the end.
                </p>
              </div>
            </div>


            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Grocery Franchise Business in Rampur
              </h2>


              <p className="mb-4 text-gray-800">
                Rampur’s steady grocery demand offers a practical opportunity to plan, launch and grow a branded neighbourhood retail business.
              </p>


              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart franchise network and build a store supported by training, POS billing, inventory assurance and launch marketing.
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
            currentSlug="/rampur/grocery-franchise-business-opportunity-rampur"
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