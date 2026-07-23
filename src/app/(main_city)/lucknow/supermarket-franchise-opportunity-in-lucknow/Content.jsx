import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Supermarket Franchise Opportunity in Lucknow | The Buyzaar Mart",
  description:
    "Explore a low investment supermarket franchise opportunity in Lucknow with The Buyzaar Mart. Get high ROI, brand support, and complete business setup guidance.",
  url: "https://www.thebuyzaarmart.com/lucknow/supermarket-franchise-opportunity-in-lucknow",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Lucknow",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The Buyzaar Mart Supermarket Franchise Formats in Lucknow",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Small Format Store",
        description:
          "Low investment supermarket franchise format suited for compact locations and residential catchments in Lucknow.",
      },
      {
        "@type": "Offer",
        name: "Mid Format Supermarket",
        description:
          "Flexible supermarket format designed for growing residential and semi-commercial areas in Lucknow.",
      },
      {
        "@type": "Offer",
        name: "Large Format Supermarket",
        description:
          "Full supermarket format suited for high-footfall, larger commercial spaces and expanding localities in Lucknow.",
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
      name: "What is the minimum investment for a The Buyzaar Mart franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies by store size and location; smaller formats need lower investment, larger ones need more. Contact the franchise team for exact figures.",
      },
    },
    {
      "@type": "Question",
      name: "Is prior retail experience required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, The Buyzaar Mart provides training and operational support, making it suitable for first-time business owners.",
      },
    },
    {
      "@type": "Question",
      name: "What store size is needed for a franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Store size requirements start from a compact format and go up to larger supermarket layouts, depending on the model chosen.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas in Lucknow are best for this franchise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High-footfall residential areas like Gomti Nagar, Indira Nagar, Alambagh, and Jankipuram are generally preferred.",
      },
    },
    {
      "@type": "Question",
      name: "Does The Buyzaar Mart help with store setup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, support is provided for interiors, branding, inventory placement, and staff training.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to launch a store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timeline depends on location readiness and interiors but typically spans a few weeks after agreement finalisation.",
      },
    },
    {
      "@type": "Question",
      name: "Is this a good business for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the low investment format and franchise support make it accessible for new entrepreneurs.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for a The Buyzaar Mart franchise in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interested applicants can reach out through the official franchise inquiry channel to begin the process.",
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
          <div className="max-w-4xl space-y-6 font-serif font-medium leading-relaxed text-gray-700">
            <h1 className="mt-8 text-2xl font-medium text-gray-900 sm:text-3xl">
              Supermarket Franchise Opportunity in Lucknow | The Buyzaar Mart
            </h1>


            <p>
              Lucknow is growing fast, and so is the demand for organised retail. People here want clean stores, fair prices, and all their daily needs under one roof. This is exactly the gap The Buyzaar Mart fills, and it's why a supermarket franchise in Lucknow with The Buyzaar Mart is turning into one of the most talked-about business opportunities in the city.


              Retail in India is shifting rapidly, and Tier-2 cities are leading this change. Lucknow, being the capital of Uttar Pradesh, sits right at the centre of this shift. It has the population base of a metro, the affordability of a smaller city, and the aspirations of a rapidly urbanising market. For anyone exploring retail as a business option, this combination makes the timing especially favourable.


              If you're looking for a low investment supermarket franchise in Lucknow, here's everything you need to know, in simple, easy-to-read points.
            </p>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Lucknow Is the Right City for a Supermarket Franchise
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Lucknow is one of the fastest-growing cities in North India, with rising population and disposable income levels.</li>
              <li>The city has a mix of old residential colonies and new townships, both of which need organised grocery retail options.</li>
              <li>Local kirana stores still dominate, which means the organised supermarket segment has huge room to grow and capture market share.</li>
              <li>Government infrastructure push (metro, highways, smart city projects) is bringing more footfall and better connectivity to commercial areas.</li>
              <li>Young working professionals and nuclear families in Lucknow prefer one-stop supermarkets over multiple small shops for convenience.</li>
              <li>Areas like Gomti Nagar, Indira Nagar, Aliganj, Alambagh, Jankipuram, and Chinhat are seeing rapid residential growth, opening up fresh franchise locations.</li>
              <li>Lucknow's cost of commercial real estate is still lower than metro cities, which directly reduces the overall setup cost for a supermarket franchise.</li>
              <li>The city's expanding IT parks, educational institutions, and hospitals are creating new pockets of daily footfall around campuses and residential hubs.</li>
              <li>E-commerce awareness has made customers more quality and price conscious, and organised supermarkets fit this evolving mindset better than traditional shops.</li>
              <li>Migration from smaller towns of Uttar Pradesh into Lucknow for work and education is steadily increasing the customer base for daily-need retail formats.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart Franchise
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>The Buyzaar Mart offers a low investment supermarket franchise model, making it accessible for first-time entrepreneurs and small investors.</li>
              <li>The brand focuses on daily essentials, groceries, packaged foods, personal care, and household products, ensuring repeat customer visits and steady revenue.</li>
              <li>Franchise partners get access to an established supply chain, reducing procurement hassles and vendor management complexity.</li>
              <li>The Buyzaar Mart provides store layout planning, so partners don't need prior retail experience or design expertise.</li>
              <li>The brand handles vendor tie-ups and bulk purchasing, which helps keep product pricing competitive against local competitors.</li>
              <li>Marketing and branding support is provided to help new stores gain visibility quickly in their neighbourhood catchment.</li>
              <li>The Buyzaar Mart's model is designed for both compact stores and larger supermarket formats, giving flexibility based on your budget and available space.</li>
              <li>The brand's sourcing network helps maintain consistent product quality across categories like staples, snacks, dairy, and household items.</li>
              <li>Franchise partners benefit from a tested store format, so there's no need to experiment with layout, category mix, or pricing strategy from scratch.</li>
              <li>The Buyzaar Mart's growing presence means new franchisees join a network rather than starting an isolated, unknown store in the market.</li>
              <li>The brand keeps its focus on essential, everyday-use products, which naturally protects the business from seasonal demand swings and market volatility.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Key Features of The Buyzaar Mart Franchise Model
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Low to mid-range investment requirement compared to big national supermarket chains and QSR franchises.</li>
              <li>Flexible store size options starting from small format stores to full-sized supermarket layouts.</li>
              <li>Centralised billing and inventory software provided to franchise partners for streamlined operations.</li>
              <li>Regular training for store staff on customer service, billing systems, and store operations best practices.</li>
              <li>Continuous product range updates based on market trends and local demand patterns in Lucknow.</li>
              <li>Support with store branding, signage, and interior setup guidance to maintain brand consistency.</li>
              <li>Transparent franchise agreement with clear terms on revenue sharing, support services, and operational responsibilities.</li>
              <li>Assistance in demand forecasting so shelves stay stocked with fast-moving items and don't get overloaded with slow sellers.</li>
              <li>Periodic review visits or check-ins from the brand team to help franchise partners troubleshoot operational issues and optimize performance.</li>
              <li>Access to seasonal promotional campaigns and festive offers designed at the brand level, which local stores can run to boost footfall and sales.</li>
              <li>Standardised store branding elements, such as signage, uniforms, and price tags, that give every outlet a consistent, professional look across the city.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Investment Range for a The Buyzaar Mart Franchise in Lucknow
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Investment typically depends on store size, location, and format chosen for your supermarket franchise.</li>
              <li>Mini Mart format stores (600–1000 sq. ft.) require comparatively lower investment, ideal for first-time franchise owners.</li>
              <li>Larger supermarket formats (1000 sq. ft. and above) need higher setup cost but offer better margins and higher footfall potential.</li>
              <li>Investment generally covers store interiors, initial inventory, billing systems, signage, branding, and franchise fee.</li>
              <li>The Buyzaar Mart is positioned as a low investment supermarket franchise, keeping entry costs friendlier than most national retail brands.</li>
              <li>Exact figures vary store to store, so interested applicants are advised to connect directly with The Buyzaar Mart franchise team for a customised cost sheet.</li>
              <li>Working capital for the first few months should also be planned separately, since new stores usually take some time to build a steady, loyal customer base.</li>
              <li>Some partners choose to start with a smaller format and expand the same store once footfall and revenue stabilise, which spreads out the overall investment over time.</li>
              <li>Franchise fee structures may be one-time or partly linked to revenue sharing, depending on the agreement finalised with The Buyzaar Mart team.</li>
              <li>Compared to independent supermarket setups, the franchise route often works out more cost-efficient because bulk procurement and vendor relationships are already in place.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Who Can Apply for a The Buyzaar Mart Franchise
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Individuals looking to start their first retail business with a proven franchise model.</li>
              <li>Existing kirana or grocery store owners wanting to upgrade to an organised supermarket format under a recognized brand.</li>
              <li>Investors looking for a stable, recurring-revenue retail business in a growing Tier-2 city like Lucknow.</li>
              <li>Entrepreneurs with a suitable commercial space in residential or semi-commercial areas of Lucknow ready for conversion.</li>
              <li>People with basic business management skills and interest in day-to-day retail operations and customer service.</li>
              <li>Working professionals looking to build a secondary source of income through a managed retail outlet with brand support.</li>
              <li>Families or partners planning to run the business together, sharing day-to-day responsibilities like billing, stock checks, and staff supervision.</li>
              <li>NRIs or investors based outside Lucknow who want a locally-managed business with a trusted operating partner on ground for smooth operations.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Space and Location Requirements
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>A minimum carpet area is required, which increases based on the store format chosen for your supermarket franchise.</li>
              <li>Ground floor location with good road visibility is preferred for maximum customer awareness and footfall.</li>
              <li>High footfall areas such as near residential societies, markets, schools, and colleges work best for daily-need retail.</li>
              <li>Adequate parking space or easy accessibility adds value to the chosen location and improves customer convenience.</li>
              <li>The Buyzaar Mart's team typically assists in evaluating whether a location is suitable before finalising the franchise agreement.</li>
              <li>Corner plots or shops facing a main internal road within a residential colony tend to perform better than hidden inner-lane locations.</li>
              <li>Proximity to schools, hospitals, gyms, or office complexes can add steady, repeat footfall throughout the day from different customer segments.</li>
              <li>Store frontage and signage visibility from a distance matters as much as the total covered area for brand recall.</li>
              <li>Basic infrastructure readiness, such as power supply and drainage, should be checked before finalising any commercial space for your franchise.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Step-by-Step Process to Get a The Buyzaar Mart Franchise in Lucknow
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Submit an inquiry through the official franchise contact channel on The Buyzaar Mart website.</li>
              <li>Initial discussion with the franchise team about your budget, location, and store size preference for your supermarket.</li>
              <li>Site visit and evaluation of your proposed store location by the brand's territory assessment team.</li>
              <li>Franchise agreement discussion covering investment, revenue sharing, and support terms before signing.</li>
              <li>Store setup begins, including interiors, branding, shelving, refrigeration, and inventory placement as per brand standards.</li>
              <li>Staff hiring and training conducted before store launch to ensure smooth operations from day one.</li>
              <li>Grand store launch with marketing support from The Buyzaar Mart team to create local awareness and drive initial footfall.</li>
              <li>Post-launch handholding, where the brand team monitors early sales and helps fine-tune stock levels and pricing strategies.</li>
              <li>Ongoing coordination with the regional team for reordering, promotional offers, and any operational queries once the store is running smoothly.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Benefits of Owning a The Buyzaar Mart Supermarket Franchise
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Steady daily footfall since groceries and essentials are recurring purchases for every household.</li>
              <li>Lower business risk compared to seasonal or trend-based businesses like fashion or electronics retail.</li>
              <li>Established brand name helps build customer trust faster than starting an independent store from scratch.</li>
              <li>Support system reduces the learning curve for new entrepreneurs entering the retail sector.</li>
              <li>Opportunity to expand to multiple outlets once the first store stabilises and generates consistent revenue.</li>
              <li>Scalable business model suited to Lucknow's expanding residential map and growing consumer base.</li>
              <li>Predictable, non-seasonal cash flow since groceries and household items are purchased throughout the year by all demographics.</li>
              <li>Ability to build a loyal, local customer base through personalised service, something large-format hypermarkets often struggle with in neighbourhoods.</li>
              <li>Simplified operations through centralised billing and inventory tools, which reduce manual errors and save time on stock management.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Challenges to Keep in Mind
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Retail businesses require hands-on daily involvement, especially in the initial months while systems and routines are being established.</li>
              <li>Local competition from kirana stores and other retail chains needs to be studied before finalising a location for your franchise.</li>
              <li>Inventory management and shrinkage control require consistent monitoring to maintain profitability and reduce losses.</li>
              <li>Initial break-even period may vary based on location, footfall, and local competition intensity in your chosen area.</li>
              <li>Staff turnover in retail can be higher than other sectors, so having a backup hiring plan helps avoid operational gaps during transitions.</li>
              <li>Seasonal price fluctuations in certain categories, like fresh produce, need careful buying to avoid wastage and margin erosion.</li>
              <li>New franchise owners should be prepared for a learning curve in the first few months while systems and routines settle in and become second nature.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips to Succeed with Your Supermarket Franchise in Lucknow
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Choose a location with consistent residential footfall rather than only relying on main road visibility for your supermarket.</li>
              <li>Maintain product freshness and stock availability, especially for daily essentials that drive repeat customer visits.</li>
              <li>Focus on customer service, since repeat visits and word-of-mouth recommendations drive supermarket revenue in neighbourhood markets.</li>
              <li>Use local marketing (posters, offers, community engagement) alongside brand-level marketing support to maximize local awareness.</li>
              <li>Keep a close eye on inventory turnover to avoid overstocking slow-moving items that tie up capital unnecessarily.</li>
              <li>Build a habit of reviewing daily sales data to spot which product categories are performing and which need attention or promotional support.</li>
              <li>Train staff regularly on hygiene, courtesy, and quick billing, since these small details influence repeat visits and customer satisfaction scores.</li>
              <li>Encourage customer feedback and act on it quickly, especially in the store's early months when reputation is still being built in the community.</li>
              <li>Stay updated on nearby competitor pricing to keep your store's offerings attractive without compromising on margins or brand positioning.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Now Is a Good Time to Invest
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>Organised retail penetration in Tier-2 cities like Lucknow is still low compared to metro cities, meaning early movers get a significant first-mover advantage.</li>
              <li>Rising urbanisation and new residential projects are constantly creating fresh customer catchments for neighbourhood supermarkets.</li>
              <li>Consumer preference is visibly shifting from unorganised kirana shops to clean, organised supermarket formats with better product variety.</li>
              <li>A low investment supermarket franchise in Lucknow with an established brand like The Buyzaar Mart reduces the uncertainty that comes with starting an independent store from scratch.</li>
              <li>As more residential townships come up on the outskirts of Lucknow, first-mover franchise partners in these areas can build strong customer loyalty before competition catches up.</li>
              <li>Banks and financial institutions are increasingly open to funding organised retail franchise setups, making it easier to plan the required investment with institutional support.</li>
              <li>Entering now, while the brand is still expanding in the city, gives franchise partners a stronger say in choosing prime, less-saturated locations before they get taken.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              The Buyzaar Mart Website – Your Gateway to Franchise Information
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>The official website, www.thebuyzaarmart.com, serves as the central hub for all franchise-related information, investment details, and application processes.</li>
              <li>Prospective franchisees can explore detailed pages on store formats, investment breakdowns, city-specific opportunities, and the complete franchise onboarding journey.</li>
              <li>The website features a user-friendly inquiry form that connects you directly with the franchise development team for personalized guidance and quick responses.</li>
              <li>City-specific landing pages like this one provide localized insights into Lucknow's retail landscape, profitable localities, and market potential for supermarket franchises.</li>
              <li>Regular updates on the website keep investors informed about new store launches, expansion plans, and upcoming franchise opportunities across North India.</li>
              <li>The website also hosts comprehensive FAQs, testimonial sections, and contact information to address all queries before you make a commitment to the franchise.</li>
            </ul>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Choose The Buyzaar Mart Website for Your Franchise Journey
            </h2>


            <ul className="list-disc space-y-2 pl-6">
              <li>The Buyzaar Mart website is designed to provide complete transparency, from investment figures to operational support structures and franchise benefits.</li>
              <li>Every city page, including this Lucknow franchise opportunity page, is optimized with local market data, locality recommendations, and real-time contact options for quick connect.</li>
              <li>The website's structured layout ensures you can quickly find information on Mini Mart, Super Mart, and Hyper Mart formats without confusion or information overload.</li>
              <li>Secure online inquiry submission protects your data while ensuring fast response times from the franchise development team within 24-48 hours.</li>
              <li>Mobile-friendly design allows you to explore franchise opportunities on the go, whether you're in Lucknow, Delhi, or anywhere else in India or abroad.</li>
              <li>The website integrates seamlessly with the franchise team's CRM, ensuring your inquiry is tracked and followed up promptly without any communication gaps.</li>
              <li>By starting your franchise journey on the official website, you ensure you're dealing directly with the brand and not through unauthorized intermediaries or agents.</li>
            </ul>


            <p>
              Starting a supermarket franchise in Lucknow is no longer just an idea for big investors. With a low investment supermarket franchise model like The Buyzaar Mart, first-time entrepreneurs, working professionals, and small business owners now have a practical, structured path into organised retail. The city's growth story, combined with brand-level support on setup, sourcing, and operations, makes this a business opportunity worth serious consideration for anyone exploring retail in Lucknow today.
            </p>


            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions (FAQs)
            </h2>


            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  1. What is the minimum investment for a The Buyzaar Mart franchise?
                </h3>
                <p className="mt-2">
                  It varies by store size and location; smaller formats need lower investment, larger ones need more. Contact the franchise team for exact figures.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  2. Is prior retail experience required?
                </h3>
                <p className="mt-2">
                  No, The Buyzaar Mart provides training and operational support, making it suitable for first-time business owners and career changers.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  3. What store size is needed for a franchise?
                </h3>
                <p className="mt-2">
                  Store size requirements start from a compact format and go up to larger supermarket layouts, depending on the model chosen and your investment capacity.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  4. Which areas in Lucknow are best for this franchise?
                </h3>
                <p className="mt-2">
                  High-footfall residential areas like Gomti Nagar, Indira Nagar, Alambagh, and Jankipuram are generally preferred for optimum footfall and revenue potential.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  5. Does The Buyzaar Mart help with store setup?
                </h3>
                <p className="mt-2">
                  Yes, support is provided for interiors, branding, inventory placement, staff training, and complete store launch coordination.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  6. How long does it take to launch a store?
                </h3>
                <p className="mt-2">
                  Timeline depends on location readiness and interiors but typically spans a few weeks after agreement finalisation and site approval.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  7. Is this a good business for beginners?
                </h3>
                <p className="mt-2">
                  Yes, the low investment format and franchise support make it accessible for new entrepreneurs with no prior retail background.
                </p>
              </div>


              <div>
                <h3 className="font-medium text-gray-900">
                  8. How do I apply for a The Buyzaar Mart franchise in Lucknow?
                </h3>
                <p className="mt-2">
                  Interested applicants can reach out through the official franchise inquiry channel on the website to begin the application and discussion process.
                </p>
              </div>
            </div>


            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Start Your Supermarket Franchise Journey in Lucknow
              </h2>


              <p className="mb-4 text-gray-800">
                Lucknow's growing retail market offers a strong opportunity for a modern supermarket franchise with proven brand support.
              </p>


              <p className="mb-4 text-gray-800">
                Join The Buyzaar Mart network and build a local business focused on daily essentials, customer trust, and organised retail growth in your neighbourhood.
              </p>


              <p className="mb-4 text-gray-800">
                Visit{" "}
                <a
                  href="https://www.thebuyzaarmart.com"
                  className="font-semibold text-green-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.thebuyzaarmart.com
                </a>{" "}
                or walk into the nearest The Buyzaar Mart outlet to begin your franchise journey.
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
                  +91 9217991727
                </a>
              </p>


              <p className="text-gray-800">
                <span className="font-semibold">Business Hours:</span> Monday to Saturday, 09:00 AM – 07:00 PM
              </p>
            </div>
          </div>


          <CityInternalLinks
            city="lucknow"
            currentSlug="/lucknow/supermarket-franchise-opportunity-in-lucknow"
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