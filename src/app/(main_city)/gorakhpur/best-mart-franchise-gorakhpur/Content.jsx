import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Best Mart Franchise in Gorakhpur | The Buyzaar Mart",
  description: "Find the best mart franchise in Gorakhpur. Choose a Mini, Super or Hyper Mart from The Buyzaar Mart. Start from ₹15 Lakh with full support.",
  url: "https://www.thebuyzaarmart.com/gorakhpur/best-mart-franchise-gorakhpur",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: { "@type": "PostalAddress", addressLocality: "Gorakhpur", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  areaServed: { "@type": "City", name: "Gorakhpur" },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Formats in Gorakhpur",
    itemListElement: [
      { "@type": "Offer", name: "Mini Mart", description: "A 600 to 1,000 sq. ft. format for dense residential colonies and smaller commercial pockets." },
      { "@type": "Offer", name: "Super Mart", description: "A 1,000 to 3,000 sq. ft. format for main markets and busy community zones." },
      { "@type": "Offer", name: "Hyper Mart", description: "A 3,000 to 8,000 sq. ft. format for high-traffic commercial zones and large properties." }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which is the best mart franchise in Gorakhpur?", acceptedAnswer: { "@type": "Answer", text: "The best one fits your space and budget and offers stock protection, technology and support. The Buyzaar Mart offers three formats for this reason." } },
    { "@type": "Question", name: "What is the minimum investment?", acceptedAnswer: { "@type": "Answer", text: "A single unit starts from ₹15 Lakh, depending on format, area, stock and interiors." } },
    { "@type": "Question", name: "How much space does each format need?", acceptedAnswer: { "@type": "Answer", text: "A Mini Mart needs 600 to 1,000 sq. ft., a Super Mart 1,000 to 3,000 sq. ft. and a Hyper Mart 3,000 to 8,000 sq. ft." } },
    { "@type": "Question", name: "Do I need retail experience?", acceptedAnswer: { "@type": "Answer", text: "No. Training is provided, and the company-managed model handles daily operations." } },
    { "@type": "Question", name: "What margin does the brand indicate?", acceptedAnswer: { "@type": "Answer", text: "An effective gross margin of 18% to 20% on sales, which is not guaranteed." } },
    { "@type": "Question", name: "What happens to expired stock?", acceptedAnswer: { "@type": "Answer", text: "The company takes back expired and damaged goods." } },
    { "@type": "Question", name: "How long is the franchise term?", acceptedAnswer: { "@type": "Answer", text: "The term is 5 years, with renewal support." } },
    { "@type": "Question", name: "How do I apply?", acceptedAnswer: { "@type": "Answer", text: "Visit https://www.thebuyzaarmart.com or call 9217991727, Monday to Saturday, 9 AM to 7 PM." } }
  ]
};

const sections = [
  ["Looking for the Best Mart Franchise in Gorakhpur?", [
    "A mart franchise lets you open a modern neighbourhood store for groceries, FMCG and daily essentials with a brand, a system and support already in place.",
    "The best mart franchise in Gorakhpur is the one that fits your property size, your budget and the shopping habits of customers nearby.",
    "The Buyzaar Mart offers three formats, Mini Mart, Super Mart and Hyper Mart, so you can start at the right level instead of forcing one size on every location.",
    "Investment starts from ₹15 Lakh, and the brand indicates an effective gross margin of 18–20% on sales.",
    "This guide helps you compare the three formats, understand costs and choose with confidence."
  ]],
  ["Why Gorakhpur Is Ready for a Branded Mart", [
    "Gorakhpur is the administrative headquarters of the Gorakhpur division and a leading city of eastern Uttar Pradesh.",
    "It is also the headquarters of the North Eastern Railway zone, which keeps a steady movement of employees, students and families.",
    "Households here shop for groceries and daily goods every day, which supports regular store footfall.",
    "Cities across Uttar Pradesh, including Gorakhpur, are showing strong acceptance of organised retail formats.",
    "Shoppers look for variety under one roof, clear prices, clean displays and digital billing.",
    "A well-run mart can offer these features and build trust faster than a standalone shop.",
    "Rent and staffing in tier-2 cities are generally lower than in large metros.",
    "This helps a new mart manage fixed costs while it builds its customer base."
  ]],
  ["What Makes a Mart Franchise the Best?", [
    "Right size: the format must match your available space and the local customer base.",
    "Strong product range: customers should find daily needs from trusted brands under one roof.",
    "Stock protection: the brand should explain what happens to expired and damaged goods.",
    "Technology: POS billing and inventory tracking should be part of the store from day one.",
    "Support: setup, training, marketing and operational help should continue after launch.",
    "Transparency: costs, margin and agreement terms should be clear before you pay anything.",
    "Compliance: FSSAI, GST and MSME credentials should be available to check.",
    "The Buyzaar Mart meets each of these points, and the sections below show how."
  ]],
  ["Compare the Three Buyzaar Mart Formats", [
    "Mini Mart (600–1000 sq ft): Best for dense residential colonies and smaller commercial pockets. It offers personal care, beverages, grocery and staples, homecare and hygiene, stationery, snacks and biscuits. It needs less space and stock investment, which suits first-time owners. It works well when customers prefer quick, convenient shopping close to home.",
    "Super Mart (1000–3000 sq ft): Best for main market areas and busy community zones. It adds dairy items and fruits and vegetables to the Mini Mart range. It draws more frequent visits because customers can buy fresh and daily items together. It suits owners who have a larger property and want a broader product range.",
    "Hyper Mart (3000–8000 sq ft): Best for high-traffic commercial zones and large properties. It adds gifts, toys and frozen ready-to-eat products to the Super Mart range. It offers the widest selection and a premium shopping experience. It suits investors who are ready for a larger investment and a wider customer catchment."
  ]],
  ["Which Mart Format Is Best for You?", [
    "Choose a Mini Mart if your property is between 600 and 1000 sq ft, you want a lower starting investment, and your location is a residential colony with steady daily footfall.",
    "Choose a Super Mart if you have 1000 to 3000 sq ft near a main market or community centre and want to add dairy, fruits and vegetables to attract frequent customers.",
    "Choose a Hyper Mart if you own or can rent 3000 to 8000 sq ft in a busy commercial zone and want the widest range, including gifts, toys and frozen ready-to-eat items.",
    "Not sure yet? Share your location, space and budget with our team. We review the site and recommend the most suitable format."
  ]],
  ["Business Model Options", [
    "Company-Managed Mart (FOCM): FOCM means Franchise Owned, Company Managed. You invest and own the mart, while the company manages staffing, inventory, billing, marketing and performance tracking. It is best for salaried professionals, business owners and property owners with limited time.",
    "Owner-Operated Mart (FOCO): FOCO means Franchise Owned, Company Operated. You run the mart yourself with the brand's systems, training and supply chain support. It is best for entrepreneurs who want to lead the store personally."
  ]],
  ["What Your Mart Will Offer Customers", [
    "Wide product range: groceries, FMCG, personal care, beverages, snacks and household essentials under one roof.",
    "Affordable pricing: value-focused prices that keep families returning.",
    "Trusted brands: direct sourcing partnerships with 50+ FMCG companies.",
    "Modern billing: POS-enabled checkout with fewer errors and faster service.",
    "Customer relationships: CRM tools help the store understand repeat buyers.",
    "Local flexibility: the product mix can be adapted to local preferences.",
    "Uniform branding: consistent store design and branding give a professional, recognisable look."
  ]],
  ["Inventory Assurance for Mart Owners", [
    "Expired and damaged goods are taken back by the company.",
    "This reduces one of the largest risks in grocery and mart retail.",
    "Shelves stay stocked with fresh, in-date products, which protects customer trust.",
    "You can plan stock with more confidence and less fear of loss."
  ]],
  ["Investment and Margin Overview", [
    "The investment starts from ₹15 Lakh for a single unit and depends on format and area.",
    "It covers stock, interior, software fee, franchise fee (including 18% GST) and security deposit.",
    "The investment calculator on the franchise page gives an estimate for your chosen size.",
    "Rent for the premises is paid by the franchise partner.",
    "The brand indicates an effective gross margin of 18–20% on sales.",
    "Gross margin is calculated before rent, electricity, staff and other store expenses.",
    "Net earnings vary by location, footfall, format and store management, and returns are not guaranteed."
  ]],
  ["Technology Inside Every Buyzaar Mart", [
    "POS-enabled billing for fast and accurate checkout.",
    "Real-time inventory tracking to reduce stockouts and overstocking.",
    "CRM tools to track customer purchase patterns.",
    "Sales dashboards that show how your mart performs.",
    "Regular reporting so you always know how your investment is doing."
  ]],
  ["Support You Receive from the Company", [
    "Site selection assistance based on footfall, demographics and competition.",
    "Store interior design, branding and shelf layout guidance.",
    "Managed supply chain with regular stock replenishment.",
    "Staff training and field assistance.",
    "Launch campaigns, social media promotion and local brand building.",
    "A dedicated support team throughout the 5-year franchise term, with renewal support."
  ]],
  ["Location Checklist for a Gorakhpur Mart", [
    "Choose a commercial area or a high-density residential area.",
    "Visit the site on a weekday morning, a weekday evening and a weekend to judge footfall.",
    "Check road visibility, parking and ease of access.",
    "Look at nearby competition before you decide.",
    "Confirm the space meets the minimum 600 sq ft requirement.",
    "Keep a computer system and stable internet ready for POS billing.",
    "Share the site with our team for a location review."
  ]],
  ["Compliance and Trust Factors", [
    "FSSAI licensed.",
    "GST registered.",
    "MSME certified under the Ministry of MSME, Government of India.",
    "The parent company, Markview Fabrication Pvt Ltd, is a registered private limited company.",
    "Operational stores in Noida, Gangoh, Saharanpur (Behat) and Haridwar (Bahadrabad) can be visited before you invest.",
    "A standard franchise agreement keeps terms clear."
  ]],
  ["Common Concerns Answered", [
    "Will I have to manage staff and stock myself? Not under the company-managed model, where the team handles staffing, ordering and billing.",
    "Can I upgrade to a bigger format later? You can discuss expansion with our team once your first store is stable and demand is clear.",
    "Can I visit a working mart first? Yes. Visiting an operating store and speaking with the team is a smart step before you invest."
  ]],
  ["Who Can Open a Mart Franchise in Gorakhpur?", [
    "First-time entrepreneurs who want a tested retail system.",
    "Salaried professionals looking for an additional income source.",
    "Local business owners wanting to diversify into daily-need retail.",
    "Property owners with a suitable commercial space.",
    "Families planning a long-term business for the next generation.",
    "No prior retail experience is required under the company-managed model."
  ]],
  ["Documents Required", [
    "ID proof: Aadhaar, PAN or Voter ID.",
    "Educational certificate of your highest qualification.",
    "Bank details: cancelled cheque or passbook copy.",
    "Property documents: ownership proof or rental agreement."
  ]],
  ["How to Open Your Mart in 4 Steps", [
    "Step 1 – Inquiry: Submit the form on thebuyzaarmart.com or call 9217991727.",
    "Step 2 – Format and location review: Our team studies your site and recommends Mini Mart, Super Mart or Hyper Mart.",
    "Step 3 – Agreement and documents: Complete KYC and review the franchise agreement.",
    "Step 4 – Setup and launch: Interior, POS, staff training and marketing are completed before your grand opening.",
    "Our team is available Monday to Saturday, 9 AM to 7 PM, and responds within 24 hours."
  ]],
  ["Mart Franchise vs a Single Kirana Store", [
    "Range: a kirana carries limited products, while a mart offers wide categories under one roof.",
    "Billing: a kirana often bills manually, while a Buyzaar Mart uses POS and dashboards.",
    "Stock risk: a kirana owner bears expiry loss alone, while Buyzaar takes back expired and damaged goods.",
    "Brand: a kirana builds its name slowly, while a Buyzaar Mart starts with brand identity.",
    "Support: a kirana owner works alone, while franchise partners get training and a support team."
  ]],
  ["Growth Potential", [
    "Once your first mart is stable, you can plan more stores in Gorakhpur and nearby cities.",
    "The Buyzaar Mart supports multi-unit growth through structured expansion planning.",
    "Each mart creates local jobs and supports nearby suppliers."
  ]],
  ["Mistakes to Avoid When Choosing a Mart Franchise", [
    "Picking a format that is too large for local demand.",
    "Choosing a location only because rent is low.",
    "Ignoring the expiry and damaged stock policy.",
    "Skipping a visit to a working store.",
    "Judging only by the margin figure and not by costs and support.",
    "Expecting guaranteed profit, because no genuine franchise can promise it."
  ]]
];

const faqs = [
  ["Which is the best mart franchise in Gorakhpur?", "The best one fits your space and budget and offers stock protection, technology and support. The Buyzaar Mart offers three formats for this reason."],
  ["What is the minimum investment?", "A single unit starts from ₹15 Lakh, depending on format, area, stock and interiors."],
  ["How much space does each format need?", "A Mini Mart needs 600–1000 sq ft, a Super Mart 1000–3000 sq ft and a Hyper Mart 3000–8000 sq ft."],
  ["Do I need retail experience?", "No. Training is provided, and the company-managed model handles daily operations."],
  ["What margin does the brand indicate?", "An effective gross margin of 18–20% on sales, which is not guaranteed."],
  ["What happens to expired stock?", "The company takes back expired and damaged goods."],
  ["How long is the franchise term?", "The term is 5 years, with renewal support."],
  ["How do I apply?", "Visit thebuyzaarmart.com or call 9217991727, Monday to Saturday, 9 AM to 7 PM."]
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <script key="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\u003c") }} />
      <script key="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\u003c") }} />

      <div className="flex flex-col lg:flex-row">
        <div className="order-1 flex-1 px-4 py-0 sm:px-8 md:px-16 lg:order-1">
          <div className="max-w-4xl space-y-4 font-serif font-medium leading-relaxed text-gray-700">
            <h1 className="mt-8 text-2xl font-medium text-gray-900 sm:text-3xl">Best Mart Franchise in Gorakhpur – Choose the Right Buyzaar Mart Format for Your Space and Budget</h1>

            {sections.map(([title, points]) => (
              <section key={title}>
                <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">{title}</h2>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  {points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </section>
            ))}

            

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-4">
              {faqs.map(([question, answer]) => (
                <div key={question}>
                  <h3 className="font-medium text-gray-900">{question}</h3>
                  <p className="mt-2">{answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">Start Your Mart Franchise Journey in Gorakhpur</h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-800">
                <li>Choose Mini Mart, Super Mart or Hyper Mart based on your commercial space, local footfall and investment capacity.</li>
                <li>Get support for store setup, POS technology, inventory, training, supply chain, branding and local marketing.</li>
                <li>Investment starts from ₹15 Lakh, subject to the selected format, location, store area and final agreement terms.</li>
              </ul>
              <p className="mb-4 mt-6 text-gray-800"><span className="font-semibold">Email:</span> <a href="mailto:info@thebuyzaarmart.com" className="font-semibold text-green-600 hover:underline">info@thebuyzaarmart.com</a></p>
              <p className="mb-4 text-gray-800"><span className="font-semibold">Phone / WhatsApp:</span> <a href="tel:+919217991727" className="font-semibold text-green-600 hover:underline">9217991727</a></p>
              <p className="text-gray-800"><span className="font-semibold">Business Hours:</span> Monday to Saturday, 09:00 AM – 07:00 PM</p>
            </div>
          </div>

          <CityInternalLinks city="gorakhpur" currentSlug="/gorakhpur/best-mart-franchise-gorakhpur" />
        </div>

        <div className="order-2 w-full p-8 lg:order-2 lg:w-[500px]">
          <div className="lg:sticky lg:top-28"><FranchiseEnquiryForm /></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
