import React from "react";
import CityInternalLinks from "@/app/components/CityInternalLinks";
import FranchiseEnquiryForm from "@/app/components/FranchiseEnquiryForm";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Buyzaar Mart Franchise Contact in Amroha",
  description:
    "Contact The Buyzaar Mart for a supermarket franchise in Amroha. Call +91 9217991727 or email info@thebuyzaarmart.com. Total investment starts from ₹15 lakh. Reply within 24 hours.",
  url: "https://www.thebuyzaarmart.com/amroha/buyzaar-mart-franchise-contact-in-amroha",
  telephone: "+919217991727",
  email: "info@thebuyzaarmart.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-43, Third Floor, Sector-6, Noida-201301",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Amroha",
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Buyzaar Mart Franchise Formats for Amroha",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Mini Mart",
        description:
          "A 600 to 1,000 sq ft supermarket franchise format for residential colonies and compact commercial locations in Amroha.",
      },
      {
        "@type": "Offer",
        name: "Super Mart",
        description:
          "A 1,000 to 3,000 sq ft supermarket franchise format for busy markets and main roads in Amroha.",
      },
      {
        "@type": "Offer",
        name: "Hyper Mart",
        description:
          "A 3,000 to 8,000 sq ft large-format supermarket franchise for premium locations in Amroha.",
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
      name: "What is the contact number for Buyzaar Mart franchise in Amroha?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call +91 9217991727 from Monday to Saturday, between 9:00 AM and 7:00 PM.",
      },
    },
    {
      "@type": "Question",
      name: "What is the official email address?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Write to info@thebuyzaarmart.com for franchise questions and brochure requests.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the head office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is at D-43, Third Floor, Sector-6, Noida-201301, Uttar Pradesh.",
      },
    },
    {
      "@type": "Question",
      name: "How fast will the team reply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The website promises a response within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Is the office open on Sundays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, the office is closed on Sundays and works Monday to Saturday.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It starts from a total of ₹15 lakh, depending on the store format and area.",
      },
    },
    {
      "@type": "Question",
      name: "Can I contact the team without visiting Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can complete early discussions by phone, email or the website form.",
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
          __html: JSON.stringify(localBusinessSchema).replace(
            /</g,
            "\\u003c",
          ),
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
              Buyzaar Mart Franchise Contact in Amroha – Phone, Email, Office
              and Enquiry Details
            </h1>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              How to Contact The Buyzaar Mart From Amroha
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart offers one central franchise helpline for
                Amroha applicants, which is{" "}
                <a
                  href="tel:+919217991727"
                  className="text-green-600 hover:underline"
                >
                  +91 9217991727
                </a>
                , and calling this number is the quickest way to speak to the
                team about supermarket franchise opportunities in your city.
              </li>
              <li>
                You can also write to{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
                , which is the official email address for franchise questions,
                store details, brochure requests and general business
                communication.
              </li>
              <li>
                The contact page on thebuyzaarmart.com carries a form titled
                &quot;I want to become an entrepreneur&quot;, where you can
                submit your details and ask the team to get back to you.
              </li>
              <li>
                The brand promises a response within 24 hours, so you can
                expect to hear back quickly after you submit a form or send an
                email, whichever route you choose.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Phone Support and Calling Hours
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Phone support is available from Monday to Saturday, between
                9:00 AM and 7:00 PM, and the office remains closed on Sundays,
                so plan your call within these hours for the best chance of a
                live conversation.
              </li>
              <li>
                Before calling, keep your city, preferred store size and basic
                questions ready, so the conversation about models, support and
                the total investment stays clear and useful from the first
                minute.
              </li>
              <li>
                If your call goes unanswered during a busy period, send a short
                email or fill the contact form, and the team will follow up
                within 24 hours.
              </li>
              <li>
                Save the number{" "}
                <a
                  href="tel:+919217991727"
                  className="text-green-600 hover:underline"
                >
                  +91 9217991727
                </a>{" "}
                in your phone, because it is also the number used for franchise
                follow-ups after your enquiry, so you will recognise the call
                when it arrives.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Email Contact for Franchise Questions
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Write to{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>{" "}
                with a clear subject line such as &quot;Franchise enquiry –
                Amroha&quot;, so your message reaches the right person and
                receives a faster, more relevant reply.
              </li>
              <li>
                Mention your full name, phone number, city and preferred store
                format in the email body, along with whether you already own a
                property or plan to rent one.
              </li>
              <li>
                Email is ideal when you want a written record of your questions
                and the answers you receive, particularly when you wish to
                share the details with family members or partners before
                deciding.
              </li>
              <li>
                You may also ask for the franchise brochure by email, which
                helps you review the model calmly and prepare better questions
                for the team.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Contact Form on the Website
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The contact form on thebuyzaarmart.com asks for your full name,
                email address, phone number, state and city, with an optional
                message box where you can describe your plans in your own
                words.
              </li>
              <li>
                Choose Uttar Pradesh as your state and write Amroha as your
                city, so the team immediately understands your location and can
                discuss suitable store options for the area.
              </li>
              <li>
                Use the optional message to mention your preferred model, FOCM
                or FOCO, and your approximate available space, because this
                makes the first reply far more detailed.
              </li>
              <li>
                By submitting the form you agree to be contacted by the team,
                so use a phone number and email address you check regularly.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Head Office Address
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart head office is at D-43, Third Floor, Sector-6,
                Noida-201301, Uttar Pradesh, and this is the official address
                listed on the website for business communication.
              </li>
              <li>
                The address is useful for applicants who want to verify the
                company&apos;s location, share it with family or advisers, or
                plan a meeting with the franchise team.
              </li>
              <li>
                Since the office timings run from Monday to Saturday, schedule
                any visit in advance by phone, so the right person is available
                to meet you and answer your questions properly.
              </li>
              <li>
                The Noida office is separate from your Amroha location, so most
                early discussions, including enquiries, calls and document
                sharing, can be completed by phone and email without
                travelling.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Follow The Buyzaar Mart on Social Media
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The brand maintains pages on Facebook, Instagram and LinkedIn,
                which you can use to see store updates, brand activity and new
                openings before you contact the team.
              </li>
              <li>
                Following these pages helps you understand how the brand
                presents its stores and communicates with customers, which
                gives useful context before you invest.
              </li>
              <li>
                The website blog also shares retail tips and store management
                ideas, including seasonal stocking, festival planning, cash
                flow and customer service, which are helpful for new owners.
              </li>
              <li>
                Always use only the official channels listed on
                thebuyzaarmart.com when sharing personal details or documents,
                and verify any unfamiliar contact before you proceed.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Why Amroha Entrepreneurs Are Contacting Buyzaar Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Amroha is a district headquarters in western Uttar Pradesh,
                close to Moradabad and the Gajraula industrial belt, and it
                serves shoppers from the city and nearby areas such as Hasanpur
                and Dhanaura.
              </li>
              <li>
                Many households still depend on unorganised shops, so a branded
                supermarket with clear pricing, clean aisles and dependable
                stock stands out immediately in the local market.
              </li>
              <li>
                Daily-need products such as staples, snacks, beverages, personal
                care and home care are purchased repeatedly, which supports
                steady monthly sales for a well-run store.
              </li>
              <li>
                Early movers in organised retail can build loyal customers
                before larger competitors arrive, which is why many local
                entrepreneurs prefer to start conversations now.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              About The Buyzaar Mart
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart is a neighbourhood supermarket franchise brand
                headquartered in Noida, with the tagline &quot;अपना बाजार –
                बचत का साथ, Quality की बात&quot; and the idea of being your
                friendly neighbourhood store.
              </li>
              <li>
                Its mission is to empower communities through retail ownership,
                helping individuals build dignified livelihoods through stores
                that offer fairness, affordability and convenience.
              </li>
              <li>
                The brand is FSSAI licensed, GST registered and MSME certified,
                so you can contact the team knowing the business operates with
                proper compliance.
              </li>
              <li>
                Running stores operate in Kanpur, Noida, Gangoh, Saharanpur and
                Haridwar, with a new store coming up in Ghaziabad.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What You Can Discuss When You Contact the Team
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Franchise models: FOCM, where you own the store and the company
                manages operations under a five-year agreement, and FOCO, where
                the company operates the store under a ten-year agreement for
                stores starting from 2,000 sq ft.
              </li>
              <li>
                Store formats: Mini Mart, 600 to 1,000 sq ft, Super Mart, 1,000
                to 3,000 sq ft, and Hyper Mart, 3,000 to 8,000 sq ft, each with
                a different product range suited to different locations.
              </li>
              <li>
                Support: store location survey, interior and branding, POS
                billing, inventory control, training, audits, local marketing
                and launch assistance.
              </li>
              <li>
                Inventory assurance: the company takes back expired and damaged
                goods, which reduces the stock risk that worries most new
                retailers.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Total Investment to Confirm on Your Call
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Buyzaar Mart supermarket franchise starts from a total
                investment of ₹15 lakh, and the final amount depends on the
                store format and the area you choose for your Amroha outlet.
              </li>
              <li>
                The total covers stock, interior setup, software, the franchise
                fee with GST and the security deposit, so you can plan around
                one clear figure.
              </li>
              <li>
                The investment calculator on the website gives an estimate once
                you select a store type and enter your area in square feet,
                which you can use before calling.
              </li>
              <li>
                Ask the team to confirm the exact total for your chosen format
                during your conversation, so you understand your commitment
                before moving to documentation.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              What to Prepare Before You Contact the Team
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Keep your ID proof, address proof, educational certificate,
                bank details and property papers ready, since these are the
                documents required later in the franchise application.
              </li>
              <li>
                Decide roughly how much space you have and whether the property
                is owned or rented, because this helps the team suggest the
                right store format quickly.
              </li>
              <li>
                Think about whether you want to be active in daily operations
                or prefer a hands-off role, since this guides the choice
                between FOCM and FOCO.
              </li>
              <li>
                Write down your questions about support, training, margins and
                location approval, so nothing important is forgotten during the
                call.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              From First Contact to Store Launch
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Step 1, submit an inquiry: contact the team by form, phone or
                email, and receive a reply within 24 hours.
              </li>
              <li>
                Step 2, documentation: complete KYC and legal documentation,
                review the agreement and sign it with full compliance support.
              </li>
              <li>
                Step 3, store launch: go live with a launch strategy, local
                marketing campaigns, backend operational support and customer
                acquisition support.
              </li>
              <li>
                The brand highlights an effective gross margin of 18 to 20
                percent, backed by affordable pricing, a wide product range and
                steady footfall from daily needs.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Store Visits and Seeing the Brand in Person
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                The homepage lists running stores in Kanpur, Noida, Gangoh near
                the bus stand, Behat in Saharanpur and Bahadrabad in Haridwar,
                so you can choose a nearby outlet and see the store layout,
                product range and billing process with your own eyes.
              </li>
              <li>
                The website also has a store photos and videos page, which
                helps you understand the look of the interiors, shelf
                arrangement and branding even before you plan a visit.
              </li>
              <li>
                When you contact the team, ask which store is best for you to
                visit, and use that visit to observe customer footfall, product
                display, cleanliness and staff behaviour.
              </li>
              <li>
                A visit gives you first-hand confidence, and it also helps you
                imagine how the same format could work in your preferred
                location in Amroha.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Tips for a Productive Conversation With the Team
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Be clear about your budget range from the start, since this
                helps the team suggest the right store format and avoid time
                spent on options that do not fit your plans.
              </li>
              <li>
                Ask about the responsibilities of the franchisee and the
                company under your chosen model, including who pays for rent,
                salaries and electricity, so that expectations stay clear on
                both sides.
              </li>
              <li>
                Ask for the franchise brochure and read it before making a
                decision, and note down any point that needs further
                explanation during your follow-up call.
              </li>
              <li>
                Share your property details honestly, including whether the
                space is owned or rented, because the location survey and
                approval depend on accurate information.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Contact Details at a Glance
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Phone:{" "}
                <a
                  href="tel:+919217991727"
                  className="text-green-600 hover:underline"
                >
                  +91 9217991727
                </a>
                , Monday to Saturday, 9:00 AM to 7:00 PM.
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@thebuyzaarmart.com"
                  className="text-green-600 hover:underline"
                >
                  info@thebuyzaarmart.com
                </a>
                , with a response within 24 hours.
              </li>
              <li>
                Office: D-43, Third Floor, Sector-6, Noida-201301, Uttar
                Pradesh.
              </li>
              <li>
                Website:{" "}
                <a
                  href="http://www.thebuyzaarmart.com"
                  className="text-green-600 hover:underline"
                >
                  www.thebuyzaarmart.com
                </a>
                , with the inquiry form, brochure download and investment
                calculator.
              </li>
            </ul>

            <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  Q1. What is the contact number for Buyzaar Mart franchise in
                  Amroha?
                </h3>
                <p className="mt-2">
                  Call{" "}
                  <a
                    href="tel:+919217991727"
                    className="text-green-600 hover:underline"
                  >
                    +91 9217991727
                  </a>{" "}
                  from Monday to Saturday, between 9:00 AM and 7:00 PM.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q2. What is the official email address?
                </h3>
                <p className="mt-2">
                  Write to{" "}
                  <a
                    href="mailto:info@thebuyzaarmart.com"
                    className="text-green-600 hover:underline"
                  >
                    info@thebuyzaarmart.com
                  </a>{" "}
                  for franchise questions and brochure requests.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q3. Where is the head office?
                </h3>
                <p className="mt-2">
                  It is at D-43, Third Floor, Sector-6, Noida-201301, Uttar
                  Pradesh.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q4. How fast will the team reply?
                </h3>
                <p className="mt-2">
                  The website promises a response within 24 hours.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q5. Is the office open on Sundays?
                </h3>
                <p className="mt-2">
                  No, the office is closed on Sundays and works Monday to
                  Saturday.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q6. What is the total investment?
                </h3>
                <p className="mt-2">
                  It starts from a total of ₹15 lakh, depending on the store
                  format and area.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Q7. Can I contact the team without visiting Noida?
                </h3>
                <p className="mt-2">
                  Yes, you can complete early discussions by phone, email or
                  the website form.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-8">
              <h2 className="mb-4 text-xl font-medium text-gray-900 sm:text-2xl">
                Contact The Buyzaar Mart for a Franchise in Amroha
              </h2>

              <ul className="list-disc space-y-2 pl-6 text-gray-800">
                <li>
                  Speak to the franchise team about supermarket franchise
                  opportunities in Amroha.
                </li>
                <li>
                  Discuss FOCM and FOCO models, store formats, support, total
                  investment and the application process.
                </li>
                <li>
                  The team responds within 24 hours after receiving your
                  enquiry.
                </li>
                <li>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:info@thebuyzaarmart.com"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    info@thebuyzaarmart.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Phone / WhatsApp:</span>{" "}
                  <a
                    href="tel:+919217991727"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    +91 9217991727
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Office:</span> D-43, Third
                  Floor, Sector-6, Noida-201301, Uttar Pradesh
                </li>
                <li>
                  <span className="font-semibold">Business Hours:</span>{" "}
                  Monday to Saturday, 09:00 AM – 07:00 PM
                </li>
              </ul>
            </div>
          </div>

          <CityInternalLinks
            city="amroha"
            currentSlug="/amroha/buyzaar-mart-franchise-contact-in-amroha"
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