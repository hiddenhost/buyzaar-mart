import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Franchise Opportunity in Amroha | The Buyzaar Mart",
  description:
    "Explore the FOCO franchise opportunity in Amroha. Company-run supermarket, about 10% revenue share, 10-year agreement. Apply now.",
  keywords: [
    "foco franchise opportunity amroha",
    "foco franchise amroha",
    "franchise owned company operated amroha",
    "foco model amroha",
    "buyzaar mart foco franchise",
    "buyzaar mart franchise amroha",
    "supermarket franchise opportunity amroha",
    "passive income franchise amroha",
    "company operated supermarket amroha",
    "retail franchise opportunity amroha",
    "grocery franchise amroha",
    "mart franchise amroha",
    "revenue share franchise india",
    "2000 sq ft supermarket franchise",
    "hands-off franchise business india",
    "foco supermarket franchise uttar pradesh",
    "organised retail investment amroha",
    "franchise business opportunity amroha",
    "apply buyzaar mart franchise",
    "foco vs focm franchise",
    "supermarket investment amroha",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/foco-franchise-opportunity-amroha",
  },
  openGraph: {
    title: "FOCO Franchise Opportunity in Amroha | The Buyzaar Mart",
    description:
      "Explore the FOCO franchise opportunity in Amroha. Company-run supermarket, about 10% revenue share, 10-year agreement. Apply now.",
    url: "https://www.thebuyzaarmart.com/amroha/foco-franchise-opportunity-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Franchise Opportunity in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Franchise Opportunity in Amroha | The Buyzaar Mart",
    description:
      "Explore the FOCO franchise opportunity in Amroha. Company-run supermarket, about 10% revenue share, 10-year agreement. Apply now.",
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