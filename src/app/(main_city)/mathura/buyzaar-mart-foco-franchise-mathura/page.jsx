import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart FOCO Franchise in Mathura | Company-Operated Retail Model",
  description:
    "Invest in a Buyzaar Mart FOCO franchise in Mathura — company-operated retail model, low involvement, ₹15 Lakh investment, and full operational support.",
  keywords: [
    "Buyzaar Mart FOCO franchise Mathura",
    "FOCO franchise model India",
    "franchise owned company operated Mathura",
    "grocery FOCO franchise Mathura",
    "passive retail investment Mathura",
    "low involvement franchise Mathura",
    "Buyzaar Mart FOCO investment",
    "supermarket FOCO franchise",
    "FOCO vs FOFO franchise",
    "FOCO vs FOCM franchise",
    "company operated grocery store Mathura",
    "retail investment for professionals Mathura",
    "NRI franchise investment Mathura",
    "grocery franchise passive income Mathura",
    "FOCO franchise eligibility Mathura",
    "Buyzaar Mart FOCO profit sharing",
    "franchise without daily management Mathura",
    "supermarket investment model Mathura",
    "FOCO franchise application process",
    "grocery franchise ROI Mathura",
    "Buyzaar Mart company operated model",
    "FOCO retail franchise Uttar Pradesh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/buyzaar-mart-foco-franchise-mathura",
  },
  openGraph: {
    title: "Buyzaar Mart FOCO Franchise in Mathura | Company-Operated Retail Model",
    description:
      "Invest in a Buyzaar Mart FOCO franchise in Mathura — company-operated retail model, low involvement, ₹15 Lakh investment, and full operational support.",
    url: "https://www.thebuyzaarmart.com/mathura/buyzaar-mart-foco-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCO Franchise in Mathura | Company-Operated Retail Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCO Franchise in Mathura | Company-Operated Retail Model",
    description:
      "Invest in a Buyzaar Mart FOCO franchise in Mathura — company-operated retail model, low involvement, ₹15 Lakh investment, and full operational support.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },
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