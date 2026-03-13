import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise in Saharanpur | Best Business Opportunity",

  description:
    "Find the right retail franchise opportunity in Saharanpur suited for entrepreneurs looking for a stable and growing business.",

  keywords:
    "retail franchise saharanpur, retail franchise opportunity saharanpur, retail business franchise saharanpur, local retail franchise saharanpur, best retail franchise saharanpur, retail store franchise saharanpur, retail business opportunity saharanpur, retail shop franchise saharanpur, retail franchise near saharanpur, retail chain franchise saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/retail-franchise-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Retail Franchise in Saharanpur | Best Business Opportunity",
    description:
      "Find the right retail franchise opportunity in Saharanpur suited for entrepreneurs looking for a stable and growing business.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/retail-franchise-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Retail Franchise Opportunity in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise in Saharanpur | Best Business Opportunity",
    description:
      "Find the right retail franchise opportunity in Saharanpur suited for entrepreneurs looking for a stable and growing business.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return (
    <>
      <Banner />
      <Content />
      <Services />
    </>
  );
}
