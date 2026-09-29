import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Franchise Opportunity in Mathura | The Buyzaar Mart",
  description:
    "Discover the FOCO franchise opportunity in Mathura with The Buyzaar Mart — passive, company-operated ownership, proven UP model, investment from ₹15 lakh.",
  keywords: [
    "foco franchise opportunity Mathura",
    "franchise owned company operated",
    "foco opportunity India",
    "Buyzaar Mart Mathura",
    "passive franchise opportunity Mathura",
    "company operated franchise UP",
    "foco vs focm opportunity",
    "grocery franchise foco opportunity",
    "low investment foco opportunity",
    "supermarket foco opportunity India",
    "foco franchise Uttar Pradesh",
    "passive retail opportunity India",
    "foco opportunity near Vrindavan",
    "foco franchise cost Mathura",
    "best foco opportunity India",
    "franchise opportunity assessment India",
    "foco franchise ROI Mathura",
    "hands off franchise opportunity",
    "foco opportunity support India",
    "emerging retail opportunity Mathura",
    "franchise opportunity Braj region",
    "foco opportunity Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/foco-franchise-opportunity-mathura",
  },
  openGraph: {
    title: "FOCO Franchise Opportunity in Mathura | The Buyzaar Mart",
    description:
      "Discover the FOCO franchise opportunity in Mathura with The Buyzaar Mart — passive, company-operated ownership, proven UP model, investment from ₹15 lakh.",
    url: "https://www.thebuyzaarmart.com/mathura/foco-franchise-opportunity-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Franchise Opportunity in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Franchise Opportunity in Mathura | The Buyzaar Mart",
    description:
      "Discover the FOCO franchise opportunity in Mathura with The Buyzaar Mart — passive, company-operated ownership, proven UP model, investment from ₹15 lakh.",
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