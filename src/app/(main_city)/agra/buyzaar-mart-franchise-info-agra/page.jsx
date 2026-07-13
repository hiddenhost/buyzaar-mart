import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Info Agra | Company-Managed Grocery Franchise",
  description:
    "Get complete Buyzaar Mart franchise information for Agra — model, store formats, investment, support system, and application process explained.",
  keywords: [
    "Buyzaar Mart franchise info Agra",
    "Buyzaar Mart franchise details",
    "grocery franchise information Agra",
    "company managed franchise Agra",
    "zero royalty franchise Agra",
    "Mini Mart Super Mart Hyper Mart",
    "franchise investment details Agra",
    "Buyzaar Mart Agra expansion",
    "retail franchise info Agra",
    "franchise process Agra",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/buyzaar-mart-franchise-info-agra",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Info Agra | Company-Managed Grocery Franchise",
    description:
      "Get complete Buyzaar Mart franchise information for Agra — model, store formats, investment, support system, and application process explained.",
    url: "https://www.thebuyzaarmart.com/agra/buyzaar-mart-franchise-info-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Info Agra | Company-Managed Grocery Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Info Agra | Company-Managed Grocery Franchise",
    description:
      "Get complete Buyzaar Mart franchise information for Agra — model, store formats, investment, support system, and application process explained.",
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