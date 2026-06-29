import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Mini Mart in Varanasi | Buyzaar Mart",
  description:
    "Buyzaar Mart Mini Mart offers compact neighbourhood grocery franchise opportunities in Varanasi with organized retail formats, company-managed operations, centralized procurement, digital billing, and full franchise support.",
  url: "https://www.thebuyzaarmart.com/varanasi/buyzaar-mart-mini-mart-varanasi",
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
    name: "Buyzaar Mart Mini Mart Franchise in Varanasi",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "Small-format neighbourhood grocery outlet designed for residential pockets, colony markets, and walkable catchment areas in Varanasi.",
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
      name: "What is a Buyzaar Mart Mini Mart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Buyzaar Mart Mini Mart is a small-format, organised neighbourhood grocery store operated under The Buyzaar Mart franchise brand. It is designed to provide Varanasi residents with a convenient, well-stocked, and trusted grocery shopping option within their residential area.",
      },
    },
    {
      "@type": "Question",
      name: "Where are Buyzaar Mart Mini Mart stores located in Varanasi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Buyzaar Mart Mini Mart network is expanding across Varanasi's key residential and commercial localities including Lanka, Sigra, Orderly Bazar, Shivpur, Mahmoorganj, Sarnath, Assi, and Nadesar.",
      },
    },
    {
      "@type": "Question",
      name: "What products are available at a Buyzaar Mart Mini Mart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mini Mart outlets stock packaged groceries and staples, personal care products, household cleaning items, beverages, baby care products, snacks, and dairy items at select outlets.",
      },
    },
    {
      "@type": "Question",
      name: "Are prices at Buyzaar Mart Mini Mart competitive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All products are sold at MRP with no hidden markups. The brand also runs promotional campaigns and passes on manufacturer and brand discounts directly to customers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I open a Buyzaar Mart Mini Mart franchise in my locality in Varanasi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Buyzaar Mart Mini Mart franchise is available across Varanasi. The format operates under the FOCM model where the company manages store operations.",
      },
    },
    {
      "@type": "Question",
      name: "How is the Buyzaar Mart Mini Mart format different from a Buyzaar Mart Standard or Super Store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Mini Mart is the smallest store format, designed for dense residential neighbourhoods where space is limited but daily footfall is high. Standard and Super Store formats are larger with a wider product selection.",
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
              Buyzaar Mart Mini Mart in Varanasi — Your Neighbourhood Store for Daily Essentials
            </h1>

            <p>
              Varanasi is a city that never slows down. From the early morning rush at the ghats to the evening bustle in the bazaars, life in Kashi moves at its own distinct pace. And within this pace, one thing remains constant — the daily need for fresh groceries, household essentials, and quality FMCG products that residents can access quickly, affordably, and without hassle.
            </p>

            <p>
              The Buyzaar Mart Mini Mart is designed exactly for this reality. A compact, organized, and fully stocked neighbourhood store format, the Buyzaar Mart Mini Mart brings modern retail convenience directly into the residential pockets, mohallas, and colony markets of Varanasi — without asking customers to travel to a distant mall or hypermarket.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What Is a Buyzaar Mart Mini Mart?
            </h2>

            <p>
              The Buyzaar Mart Mini Mart is a small-format retail outlet operating under The Buyzaar Mart brand, one of the fastest-growing FMCG franchise chains in Uttar Pradesh. Unlike large supermarkets that require significant travel and time, the Mini Mart format is strategically placed within walking distance of residential clusters.
            
              The Mini Mart format is designed to serve a very specific and important purpose: give every Varanasi household a clean, trusted, well-stocked grocery option within their immediate neighbourhood.
            </p>

            <p>
              Each Mini Mart outlet is branded, organized, and managed under The Buyzaar Mart&apos;s operational standards. This means every store you visit — whether in Lanka, Sigra, Shivpur, or Orderly Bazar — offers the same quality, the same product range, and the same shopping experience.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Will Find at a Buyzaar Mart Mini Mart in Varanasi
            </h2>

            <p>
              The Buyzaar Mart Mini Mart stocks a carefully curated selection of everyday essentials to cover the complete daily and weekly grocery needs of a typical Varanasi household.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Grocery and Staples — rice, atta, dal, sugar, salt, spices, cooking oils, and other pantry essentials from trusted national and regional brands.</li>
              <li>Packaged and Ready-to-Eat Foods — instant noodles, biscuits, namkeen, snacks, breakfast cereals, health drinks, and packaged juices for quick household consumption.</li>
              <li>Personal Care and Hygiene — soaps, shampoos, conditioners, toothpaste, toothbrushes, deodorants, skincare basics, and feminine hygiene products.</li>
              <li>Household Cleaning Products — detergents, dish soap, floor cleaners, toilet cleaners, and surface sprays from established brands at everyday prices.</li>
              <li>Baby Care Products — diapers, baby wipes, baby bath products, and infant nutrition where applicable.</li>
              <li>Beverages — cold drinks, packaged water, energy drinks, tea, coffee, and health beverages.</li>
              <li>Dairy and Fresh Products — milk pouches, butter, ghee, paneer, and curd stocked fresh for daily purchase at select outlets.</li>
            </ul>

            <p>
              This product depth means a typical household can fulfil nearly all their weekly grocery requirements at their nearest Buyzaar Mart Mini Mart, saving time and reducing the need for multiple shopping trips.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Varanasi Residents Are Choosing Buyzaar Mart Mini Mart
            </h2>

            <p>
              Varanasi has traditionally been served by a network of small kirana stores. While these stores have served communities for generations, they come with limitations such as limited product variety, inconsistent stock, no standardised pricing, and often a less-than-ideal shopping environment.

              The Buyzaar Mart Mini Mart addresses each of these gaps through an organized and clean store environment, consistent product availability, transparent pricing, proximity and convenience, and trusted brand quality.
            </p>

            <p>
              Every Mini Mart outlet maintains a clean, well-lit, and neatly arranged store layout. Products are clearly labelled and easy to find, making shopping quicker and more pleasant.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Buyzaar Mart Mini Mart Locations Across Varanasi
            </h2>

            <p>
              The Buyzaar Mart network is expanding rapidly across Varanasi&apos;s key residential and commercial zones. Current and upcoming Mini Mart presence covers neighbourhoods including Lanka, Sigra, Orderly Bazar, Shivpur, Mahmoorganj, Sarnath, Assi, Nadesar, Pahadia, and Ramnagar.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Lanka — serving the large student and residential population near Banaras Hindu University.</li>
              <li>Sigra — one of Varanasi&apos;s most densely populated urban localities with high daily footfall.</li>
              <li>Orderly Bazar — centrally located mixed-use area with strong household demand.</li>
              <li>Shivpur — a growing residential neighbourhood on the outskirts with increasing population density.</li>
              <li>Mahmoorganj — upscale residential locality with demand for quality branded FMCG products.</li>
              <li>Sarnath — expanding peri-urban zone with relatively underserved grocery retail.</li>
              <li>Assi — popular residential and cultural zone near the ghats with strong community retail behaviour.</li>
              <li>Nadesar — government quarters and mid-income families with steady grocery demand.</li>
              <li>Pahadia and Ramnagar — peripheral zones with limited organised retail options, ideal for Mini Mart placement.</li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Shopping Experience at Buyzaar Mart Mini Mart
            </h2>

            <p>
              Walking into a Buyzaar Mart Mini Mart in Varanasi is a noticeably different experience compared to a typical neighbourhood kirana. Customers can expect quick entry and navigation, standardised shelving, helpful store staff, digital billing and receipts, and regular promotions and offers.

              Compact store layout means you can locate and pick your items in minutes, without long aisles or wasted time. Products are categorised and shelved in consistent sections so even first-time visitors can shop with ease.
            </p>

            <p>
              Staff are trained by the corporate team to ensure consistent service quality, and billing is handled through an integrated POS system. Festival seasons in Varanasi such as Diwali, Holi, Dev Deepawali, and Navaratri are especially active periods for customer offers.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Open a Buyzaar Mart Mini Mart in Your Area — Franchise Opportunity
            </h2>

            <p>
              If you are a property owner or investor in Varanasi looking for a productive way to use a small commercial space, the Buyzaar Mart Mini Mart franchise format is worth exploring. The Mini Mart format has a relatively low space requirement, starting from as little as 600 square feet, making it one of the most accessible franchise formats in the organised grocery retail space.

              Under The Buyzaar Mart&apos;s FOCM model — Franchise Owned, Company Managed — you invest in the space and setup while the company handles complete store operations such as staffing, inventory, billing, and customer management.
            </p>

            <p>
              Key benefits for franchise investors include low entry investment compared to full-size supermarket formats, company-managed operations that reduce risk and effort, established brand identity and supply chain from day one, growing demand for organised retail in Varanasi&apos;s residential areas, and support from The Buyzaar Mart&apos;s corporate team throughout.
            </p>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  What is a Buyzaar Mart Mini Mart?
                </h3>
                <p className="mt-2">
                  A Buyzaar Mart Mini Mart is a small-format, organised neighbourhood grocery store operated under The Buyzaar Mart franchise brand. It is designed to provide Varanasi residents with a convenient, well-stocked, and trusted grocery shopping option within their residential area.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Where are Buyzaar Mart Mini Mart stores located in Varanasi?
                </h3>
                <p className="mt-2">
                  The Buyzaar Mart Mini Mart network is expanding across Varanasi&apos;s key residential and commercial localities including Lanka, Sigra, Orderly Bazar, Shivpur, Mahmoorganj, Sarnath, Assi, and Nadesar. Check the official Buyzaar Mart platform for the latest store locations near you.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  What products are available at a Buyzaar Mart Mini Mart?
                </h3>
                <p className="mt-2">
                  Mini Mart outlets stock a wide range of daily essentials including packaged groceries and staples, personal care products, household cleaning items, beverages, baby care products, snacks, and dairy items at select outlets. The full product range is updated regularly based on local demand.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Are prices at Buyzaar Mart Mini Mart competitive?
                </h3>
                <p className="mt-2">
                  Yes. All products are sold at MRP with no hidden markups. The brand regularly runs promotional campaigns and passes on manufacturer and brand discounts directly to customers.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Is Buyzaar Mart Mini Mart different from a regular kirana store?
                </h3>
                <p className="mt-2">
                  Yes. While a kirana store is typically owner-managed with limited product variety, the Buyzaar Mart Mini Mart is a branded, standardised, and professionally managed retail outlet. It offers a wider product range, digital billing, trained staff, and a consistent shopping experience across all outlets.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Can I open a Buyzaar Mart Mini Mart franchise in my locality in Varanasi?
                </h3>
                <p className="mt-2">
                  Yes. The Buyzaar Mart Mini Mart franchise is available across Varanasi. The format requires a minimum space of approximately 600 square feet and operates under the FOCM model where the company manages store operations. Submit a franchise inquiry to get complete details.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Does Buyzaar Mart Mini Mart offer home delivery in Varanasi?
                </h3>
                <p className="mt-2">
                  Home delivery features and availability may vary by outlet. Contact your nearest Buyzaar Mart Mini Mart store or check the official platform for delivery options in your locality.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  How is the Buyzaar Mart Mini Mart format different from a Buyzaar Mart Standard or Super Store?
                </h3>
                <p className="mt-2">
                  The Mini Mart is the smallest store format, designed for dense residential neighbourhoods where space is limited but daily footfall is high. Standard and Super Store formats are larger with a wider product selection and are suited for high-traffic commercial or market locations.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Mini Mart Franchise Journey in Varanasi
              </h2>

              <p className="mb-4 text-gray-800">
                Varanasi&apos;s residential neighborhoods offer strong demand for organized daily essentials retail.
              </p>

              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart franchise network and bring your area a modern neighbourhood store built on convenience, trust, and professional retail systems.
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
            city="varanasi"
            currentSlug="/varanasi/mini-mart-in-varanasi"
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