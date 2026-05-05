import Script from "next/script";
import WhatsAppButton from "./components/whatsappButton";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="1xJTJr0uSdwhdTBxR0WnngElicUHLE-bKW3LonoaFlw"
        />

        {/* Robots Meta */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* ✅ JSON-LD Schema (SERVER SIDE) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.thebuyzaarmart.com/#organization",
              name: "The Buyzaar Mart",
              legalName: "The Buyzaar Mart",
              url: "https://www.thebuyzaarmart.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
                width: 300,
                height: 100,
              },
              description:
                "The Buyzaar Mart is India's growing retail franchise network offering Franchise Owned Company Managed (FOCM) neighborhood supermarket stores across Uttar Pradesh and NCR.",
              foundingLocation: {
                "@type": "Place",
                name: "Noida, Uttar Pradesh, India",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "D-43, Third Floor, Sector-6",
                addressLocality: "Noida",
                addressRegion: "Uttar Pradesh",
                postalCode: "201301",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9217991727",
                  contactType: "customer service",
                  availableLanguage: ["Hindi", "English"],
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                    opens: "09:00",
                    closes: "19:00",
                  },
                },
                {
                  "@type": "ContactPoint",
                  telephone: "",
                  contactType: "franchise enquiry",
                  availableLanguage: ["Hindi", "English"],
                },
              ],
              email: "info@thebuyzaarmart.com",
              sameAs: [
                "https://www.facebook.com/people/The-BuyZaar-mart/61583918706055/",
                "https://www.instagram.com/thebuyzaarmart/",
                "https://www.linkedin.com/company/thebuyzaarmart/",
                "https://www.franchiseindia.com/brands/the-buyzaar-mart.115633",
                "https://www.franchisemart.in/retail-franchise/the-buyzaar-mart-franchise/",
                "https://franchiseworld.com/listing/the-buyzaar-mart",
                
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "FSSAI Licensed",
                  credentialCategory: "Food Safety License",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "GST Registered",
                  credentialCategory: "Tax Compliance",
                },
              ],
            }),
          }}
        />
      </head>

      <body>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GFVCPN9VKJ"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GFVCPN9VKJ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}