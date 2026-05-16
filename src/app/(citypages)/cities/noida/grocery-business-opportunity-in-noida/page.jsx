import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Business Opportunity in Noida | Top Investment & Startup Guide 2026",

  description:
    "Unlock the grocery business opportunity in Noida: High-profit potential, low-risk entry, local trends, and step-by-step startup guide. Ideal for entrepreneurs seeking steady retail income.",

  keywords:
    "grocery business opportunity noida, noida grocery startup, buyzaar mart noida, supermarket investment noida, retail startup noida, grocery franchise noida, business opportunity noida 2026, neighborhood store noida, noida retail investment, grocery business guide",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/grocery-business-opportunity-in-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Business Opportunity in Noida | Top Investment & Startup Guide 2026",
    description: "Unlock the grocery business opportunity in Noida: High-profit potential, low-risk entry, local trends, and step-by-step startup guide. Ideal for entrepreneurs seeking steady retail income.",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-business-opportunity-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Business Opportunity in Noida - Top Investment Guide 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Business Opportunity in Noida | Top Investment & Startup Guide 2026",
    description: "Unlock the grocery business opportunity in Noida: High-profit potential, low-risk entry, local trends, and step-by-step startup guide. Ideal for entrepreneurs seeking steady retail income.",
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
