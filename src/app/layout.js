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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-94S5YHVRDH"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-94S5YHVRDH');
          `}
        </Script>
      </head>

      <body>
        <Navbar/>
        <main>{children}</main>
        <WhatsAppButton />
        <Footer/>
      </body>
    </html>
  );
}
