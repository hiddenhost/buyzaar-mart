import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Model Franchise in Agra | Buyzaar Mart Investment Guide",
  description:
    "Explore the FOCM (Franchise Owned, Company Managed) franchise opportunity in Agra with Buyzaar Mart — model details, store formats, investment, and application process.",
  keywords: [
    "FOCM franchise Agra",
    "FOCM model franchise India",
    "Buyzaar Mart Agra",
    "franchise owned company managed Agra",
    "Buyzaar Mart investment",
    "FOCM store franchise",
    "grocery franchise Uttar Pradesh",
    "organized retail franchise Agra",
    "Buyzaar Mart FOCM franchise",
    "low investment franchise Agra",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/focm-model-franchise-in-agra",
  },
  openGraph: {
    title: "FOCM Model Franchise in Agra | Buyzaar Mart Investment Guide",
    description:
      "Explore the FOCM (Franchise Owned, Company Managed) franchise opportunity in Agra with Buyzaar Mart — model details, store formats, investment, and application process.",
    url: "https://www.thebuyzaarmart.com/agra/focm-model-franchise-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Franchise in Agra | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Franchise in Agra | Buyzaar Mart Investment Guide",
    description:
      "Explore the FOCM (Franchise Owned, Company Managed) franchise opportunity in Agra with Buyzaar Mart — model details, store formats, investment, and application process.",
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