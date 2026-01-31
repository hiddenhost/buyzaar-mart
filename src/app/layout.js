"use client";

import Script from "next/script";
import WhatsAppButton from "./components/whatsappButton";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="1xJTJr0uSdwhdTBxR0WnngElicUHLE-bKW3LonoaFlw"
        />
      </head>

      <body>
        {/* Google Analytics GA4 */}
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
