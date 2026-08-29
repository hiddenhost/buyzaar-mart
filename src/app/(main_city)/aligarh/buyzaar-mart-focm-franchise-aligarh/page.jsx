import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart FOCM Franchise Opportunity in Aligarh",
  description:
    "Explore The Buyzaar Mart FOCM franchise opportunity in Aligarh. Learn how the Franchise Owned, Company Managed model works, investment, and how to apply.",
  keywords: [
    "FOCM franchise Aligarh",
    "Buyzaar Mart FOCM Aligarh",
    "franchise owned company managed",
    "FOCM model franchise",
    "grocery franchise Aligarh",
    "supermarket franchise Aligarh",
    "retail franchise Aligarh",
    "active franchise model Aligarh",
    "franchise investment Aligarh",
    "franchise apply Aligarh",
    "mart franchise Aligarh",
    "franchise business Aligarh",
    "mini mart franchise Aligarh",
    "super mart franchise Aligarh",
    "hyper mart franchise Aligarh",
    "franchise opportunity Uttar Pradesh",
    "best franchise in Aligarh",
    "franchise partner Aligarh",
    "daily needs store franchise Aligarh",
    "FMCG retail franchise Aligarh",
    "low investment franchise Aligarh",
    "organized retail Aligarh",
    "franchise owner operated Aligarh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/buyzaar-mart-focm-franchise-aligarh",
  },
  openGraph: {
    title: "Buyzaar Mart FOCM Franchise Opportunity in Aligarh",
    description:
      "Explore The Buyzaar Mart FOCM franchise opportunity in Aligarh. Learn how the Franchise Owned, Company Managed model works, investment, and how to apply.",
    url: "https://www.thebuyzaarmart.com/aligarh/buyzaar-mart-focm-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCM Franchise Opportunity in Aligarh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCM Franchise Opportunity in Aligarh",
    description:
      "Explore The Buyzaar Mart FOCM franchise opportunity in Aligarh. Learn how the Franchise Owned, Company Managed model works, investment, and how to apply.",
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