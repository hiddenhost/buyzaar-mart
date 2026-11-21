import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Franchise Opportunity in Amroha | The Buyzaar Mart",
  description:
    "Start a supermarket with the FOCM franchise opportunity in Amroha. Investment ₹15–20 lakh, 18–20% margin, full training and support.",
  keywords: [
    "focm franchise opportunity amroha",
    "focm franchise amroha",
    "franchise owned company managed amroha",
    "focm model amroha",
    "buyzaar mart focm franchise",
    "buyzaar mart franchise amroha",
    "supermarket franchise opportunity amroha",
    "grocery franchise opportunity amroha",
    "retail franchise opportunity amroha",
    "mart franchise amroha",
    "mini mart franchise amroha",
    "super mart franchise amroha",
    "hyper mart franchise amroha",
    "franchise business opportunity amroha",
    "grocery franchise 15 lakh amroha",
    "low investment supermarket franchise amroha",
    "company managed franchise india",
    "supermarket franchise uttar pradesh",
    "organised retail franchise amroha",
    "apply buyzaar mart franchise",
    "franchise with training and support",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/focm-franchise-opportunity-amroha",
  },
  openGraph: {
    title: "FOCM Franchise Opportunity in Amroha | The Buyzaar Mart",
    description:
      "Start a supermarket with the FOCM franchise opportunity in Amroha. Investment ₹15–20 lakh, 18–20% margin, full training and support.",
    url: "https://www.thebuyzaarmart.com/amroha/focm-franchise-opportunity-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise Opportunity in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Franchise Opportunity in Amroha | The Buyzaar Mart",
    description:
      "Start a supermarket with the FOCM franchise opportunity in Amroha. Investment ₹15–20 lakh, 18–20% margin, full training and support.",
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