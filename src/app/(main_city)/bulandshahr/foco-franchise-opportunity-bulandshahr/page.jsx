import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
  description:
    "Explore the FOCO franchise opportunity in Bulandshahr with The Buyzaar Mart. A company-operated retail investment starting from ₹15 Lakh with structured returns.",
  keywords: [
    "FOCO franchise opportunity Bulandshahr",
    "FOCO Bulandshahr",
    "Buyzaar Mart franchise Bulandshahr",
    "franchise opportunity Bulandshahr",
    "passive franchise investment Bulandshahr",
    "company operated franchise",
    "retail investment Bulandshahr",
    "franchise business opportunity UP",
    "low investment franchise Bulandshahr",
    "best franchise Bulandshahr",
    "grocery franchise opportunity UP",
    "franchise under 20 lakh Bulandshahr",
    "supermarket franchise opportunity Bulandshahr",
    "FOCO vs FOCM franchise",
    "structured returns franchise",
    "franchise for investors Bulandshahr",
    "retail business opportunity Bulandshahr",
    "Mini Mart franchise opportunity",
    "Super Mart franchise opportunity",
    "Hyper Mart franchise opportunity",
    "franchise partner Bulandshahr",
    "organised retail opportunity UP",
    "franchise ROI Bulandshahr",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/foco-franchise-opportunity-bulandshahr",
  },
  openGraph: {
    title: "FOCO Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore the FOCO franchise opportunity in Bulandshahr with The Buyzaar Mart. A company-operated retail investment starting from ₹15 Lakh with structured returns.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/foco-franchise-opportunity-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Franchise Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore the FOCO franchise opportunity in Bulandshahr with The Buyzaar Mart. A company-operated retail investment starting from ₹15 Lakh with structured returns.",
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