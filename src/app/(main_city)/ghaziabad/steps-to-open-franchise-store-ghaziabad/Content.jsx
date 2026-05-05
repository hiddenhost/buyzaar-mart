import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to open a Buyzaar Mart franchise store in Ghaziabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The full process from initial enquiry to grand opening takes 8-12 weeks, depending on site readiness, agreement timelines, and store size."
      }
    },
    {
      "@type": "Question",
      "name": "What do I personally need to do at each step to open a franchise store in Ghaziabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your primary responsibilities are providing site access for location survey, reviewing and signing the franchise agreement, ensuring staff availability for training, and being present for the grand opening. Buyzaar Mart handles store design, setup, inventory, technology, training, and launch marketing."
      }
    },
    {
      "@type": "Question",
      "name": "What if my proposed Ghaziabad location is not approved for a franchise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our team explains exactly why the site was not recommended and works with you to identify a stronger alternative location in Ghaziabad. A rejected site protects your investment before money is committed."
      }
    },
    {
      "@type": "Question",
      "name": "Is there anything I need to arrange before calling about a Ghaziabad franchise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. You don't need documents, a confirmed location, or a fixed budget to make your first call. Start the conversation at 9217991727 and our team guides you through what comes next."
      }
    },
    {
      "@type": "Question",
      "name": "What certifications does Buyzaar Mart carry for operating franchise stores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Buyzaar Mart is FSSAI Licensed, GST Registered, and MSME Certified by the Government of India."
      }
    }
  ]
};

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-0 order-1 lg:order-1">
          <div className="space-y-4 text-gray-700 leading-relaxed max-w-4xl font-serif font-medium">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mt-8">
              Steps to Open a Franchise Store in Ghaziabad – From Enquiry to Grand Opening
            </h2>

            <p>
              You've made the decision. You want to open a franchise store in Ghaziabad. Now you need to know exactly what happens next — step by step, week by week — from your first call to the day your store opens its doors.
            </p>

            <p>
              This page gives you that. No vague timelines. No hidden steps. Just a clear, honest walkthrough of every stage in opening a Buyzaar Mart franchise store in Ghaziabad — what you do, what we do, and what happens at each checkpoint along the way.
            </p>

            <p>
              Opening a franchise store in Ghaziabad with Buyzaar Mart typically takes 8 to 12 weeks from your first enquiry to grand opening. Here is exactly how those weeks are used.
            </p>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
              Step 1 — Submit Your Franchise Enquiry
            </h2>

            <p><strong>What you do:</strong> Fill in the franchise enquiry form on this page or call 9217991727 directly.</p>

            <p><strong>What we do:</strong> Our Ghaziabad franchise advisor contacts you within 24 hours to schedule your initial consultation.</p>

            <p><strong>What happens in the consultation:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>You share your preferred area within Ghaziabad — Indirapuram, Vasundhara, Raj Nagar Extension, Crossings Republik, Vaishali, Kaushambi, Siddharth Vihar, Loni, or anywhere else in the city</li>
              <li>You share your available space details if you already have a location in mind — size, floor, road visibility, ground floor or mall</li>
              <li>We explain the FOCM model (Franchise Owned, Company Managed), the three store formats (Mini Mart, Super Mart, Hyper Mart), and what each involves</li>
              <li>You get a clear picture of what the franchise partnership looks like before any commitment is made</li>
            </ul>

            <p><strong>Timeline:</strong> Day 1–3</p>

            <p><strong>What you need at this stage:</strong> Nothing more than a location idea and an open conversation. No documents, no deposits, no pressure.</p>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
              Step 2 — Location Survey and Site Approval
            </h2>

            <p><strong>What you do:</strong> Provide your proposed Ghaziabad site address and access for our team to visit.</p>

            <p><strong>What we do:</strong> Our team conducts a full on-ground location evaluation covering:</p>

            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Catchment analysis</strong> — How many households are within 500 metres of your proposed site? Is the residential density sufficient to support a Mini Mart, Super Mart, or Hyper Mart format?</li>
              <li><strong>Footfall assessment</strong> — What is the daily pedestrian and vehicular traffic pattern around the site? Is the store visible from the main approach road?</li>
              <li><strong>Competition mapping</strong> — Are there existing organized daily needs stores nearby? How close, how well-run, and how loyal is their customer base?</li>
              <li><strong>Site suitability check</strong> — Is the space structurally suitable for the recommended format? Ground floor, adequate frontage, power supply, and storage capacity are all assessed.</li>
            </ul>

            <p>Based on this evaluation, we make one of three recommendations:</p>

            <ul className="list-none list-inside ml-4 space-y-1">
              <li><span className="inline-block px-3 py-1 bg-100 text-green-800 rounded-full text-sm font-medium"></span>The location is strong. We recommend a specific format and move to the next step.</li>
              <li><span className="inline-block px-3 py-1 bg-100 text-yellow-800 rounded-full text-sm font-medium"></span>The location has potential with modifications or adjustments. We explain exactly what needs to change.</li>
              <li><span className="inline-block px-3 py-1 bg-100 text-red-800 rounded-full text-sm font-medium"></span>The location has fundamental issues that would limit your store's performance. We help you identify a stronger alternative in Ghaziabad rather than proceed with a site that will underperform.</li>
            </ul>

            <p><strong>Timeline:</strong> Week 1–2</p>

            <p><strong>Why this step matters:</strong> Location is the single biggest multiplier of franchise store success in Ghaziabad. The site evaluation is not a formality — it is the most important protection for your investment before any money is committed.</p>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
              Step 3 — Format Confirmation and Investment Breakdown
            </h2>

            <p><strong>What you do:</strong> Review the format recommendation and personalised investment breakdown our team prepares for your specific Ghaziabad location.</p>

            <p><strong>What we provide:</strong></p>

            <p>Based on your approved site, we confirm which format fits best:</p>

            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Mini Mart</h4>
                <p className="text-sm">Compact residential-colony store. Focused daily essentials product range. Designed for high-repeat daily footfall from nearby housing societies and colony markets. Best for smaller footprints in densely residential Ghaziabad localities.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Super Mart</h4>
                <p className="text-sm">Mid-sized organized store with a full daily needs range — groceries, FMCG, dairy, packaged foods, personal care, and household goods. For colony chowks, township commercial blocks, and main market locations.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Hyper Mart</h4>
                <p className="text-sm">Large-format flagship store for high-footfall road frontages and major commercial markets. Widest product range, largest catchment draw, highest revenue potential.</p>
              </div>
            </div>

            <p>Your personalised investment breakdown covers every component — interior setup, fixtures, initial inventory, technology, security deposit — specific to your Ghaziabad site. No generic ranges. No surprises after signing.</p>

            <p><strong>Timeline:</strong> Week 2</p>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
              Step 4 — Franchise Agreement Signing
            </h2>

            <p><strong>Timeline:</strong> Week 2–3</p>

            <p><strong>What the agreement covers:</strong></p>

            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Franchise term:</strong> 5 years, with renewal criteria defined at signing</li>
              <li><strong>Brand licensing:</strong> Formal, licensed use of The Buyzaar Mart trademark, logos, and brand identity for your Ghaziabad store</li>
              <li><strong>FOCM responsibilities:</strong> Exactly what Buyzaar Mart manages operationally and what you own as the franchisee — documented clearly</li>
              <li><strong>Hassle-Free Inventory Assurance:</strong> Expired and damaged goods are taken back by Buyzaar Mart — this is a contractual commitment, not a verbal assurance</li>
              <li><strong>Performance framework:</strong> KPI dashboards, regular audits, and quality review schedules</li>
              <li><strong>Marketing support:</strong> Grand opening campaign and ongoing digital marketing terms</li>
              <li><strong>Renewal criteria:</strong> What determines eligibility for franchise renewal at the end of 5 years</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
              Step 5 — Store Design and Interior Setup
            </h2>

            <p><strong>Timeline:</strong> Week 3–6 (depending on site condition and format size)</p>

            <p><strong>The Buyzaar Mart setup team takes complete responsibility for transforming your raw Ghaziabad retail space into a fully operational franchise store:</strong></p>

            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Store layout design</strong> — Category-optimized floor plan ensuring smooth customer flow, maximum product visibility, and efficient staff operation</li>
              <li><strong>Shelving and fixture installation</strong> — Full shelving racks, display units, refrigeration fixtures for dairy and chilled products, and checkout counter setup</li>
              <li><strong>Branding and signage</strong> — External fascia signage, internal brand elements, category labelling, and promotional display fixtures — all to Buyzaar Mart brand standards</li>
              <li><strong>POS system installation</strong> — Billing terminal, barcode scanner, receipt printer, and back-end software setup for real-time inventory and sales tracking</li>
              <li><strong>Security and safety compliance</strong> — Appropriate fire safety, storage compliance, and product handling infrastructure in line with FSSAI licensing requirements</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
              Step 6–8 — Inventory, Training, Grand Opening
            </h2>

            <p><strong>Timeline:</strong> Week 6–12</p>

            <p>Buyzaar Mart handles inventory stocking, staff training, and complete grand opening marketing. Your store opens fully stocked, fully trained, and with a launch campaign driving customers from day one.</p>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
              Your Full Timeline at a Glance
            </h2>

            <div className="overflow-x-auto mt-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Stage</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">What Happens</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Step 1</td>
                    <td className="border border-gray-300 px-4 py-2">Enquiry and initial consultation</td>
                    <td className="border border-gray-300 px-4 py-2">Day 1–3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Step 2</td>
                    <td className="border border-gray-300 px-4 py-2">Location survey and site approval</td>
                    <td className="border border-gray-300 px-4 py-2">Week 1–2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Step 3</td>
                    <td className="border border-gray-300 px-4 py-2">Format confirmation and investment breakdown</td>
                    <td className="border border-gray-300 px-4 py-2">Week 2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Step 4</td>
                    <td className="border border-gray-300 px-4 py-2">Franchise agreement signing</td>
                    <td className="border border-gray-300 px-4 py-2">Week 2–3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Step 5</td>
                    <td className="border border-gray-300 px-4 py-2">Store design and interior setup</td>
                    <td className="border border-gray-300 px-4 py-2">Week 3–6</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Step 6–8</td>
                    <td className="border border-gray-300 px-4 py-2">Inventory, training, grand opening</td>
                    <td className="border border-gray-300 px-4 py-2">Week 6–12</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
              Frequently Asked Questions — Steps to Open Franchise Store Ghaziabad
            </h2>

            <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q: How long does it take to open a Buyzaar Mart franchise store in Ghaziabad?
                </h3>
                <p className="mt-2">The full process from initial enquiry to grand opening takes 8–12 weeks, depending on site readiness, agreement timelines, and store size. The breakdown is detailed step by step above.</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q: What do I personally need to do at each step?
                </h3>
                <p className="mt-2">Your primary responsibilities are: providing site access for the location survey, reviewing and signing the franchise agreement, ensuring staff availability for training, and being present for the grand opening. Buyzaar Mart handles store design, setup, inventory, technology, training, and launch marketing.</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q: What if my proposed Ghaziabad location is not approved?
                </h3>
                <p className="mt-2">Our team will explain exactly why the site was not recommended and work with you to identify a stronger alternative location in Ghaziabad. A rejected site is not a dead end — it is protection for your investment before it is committed.</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q: Is there anything I need to arrange before calling?
                </h3>
                <p className="mt-2">No. You don't need documents, a confirmed location, or a fixed budget to make your first call. Start the conversation at 9217991727 and our team will guide you through what comes next based on your specific situation in Ghaziabad.</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q: What certifications does Buyzaar Mart carry for operating franchise stores?
                </h3>
                <p className="mt-2">Buyzaar Mart is FSSAI Licensed, GST Registered, and MSME Certified by the Government of India.</p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Take Step 1 Right Now
              </h2>

              <p className="text-gray-800 mb-4">
                Every franchise store in Ghaziabad that is open today started with one enquiry. The families in Raj Nagar Extension, Siddharth Vihar, Crossings Republik, and Vasundhara who will become your daily regulars don't know your store exists yet. In 8 to 12 weeks, they could.
              </p>

              <p className="text-gray-800 mb-4">
                Step 1 takes 60 seconds. Everything after it, we handle together.
              </p>

              <p className="text-gray-800 font-semibold mb-4">
                📞 Call / WhatsApp: 9217991727
              </p>

              <p className="text-gray-800 mb-4">
                Email:{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="text-green-700 hover:text-green-800 underline font-semibold"
                >
                  info@thebuyzaarmart.com
                </a>
              </p>

              <p className="text-gray-800">
                Monday – Saturday, 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>
          <CityInternalLinks city="ghaziabad" currentSlug="/ghaziabad/steps-to-open-franchise-store-ghaziabad" />
        </div>

        {/* Form Section */}
        <div className="w-[400px] lg:w-[500px] p-8 order-2 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <FranchiseEnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;