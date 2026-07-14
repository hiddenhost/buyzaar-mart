import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Franchise in Agra | Buyzaar Mart Investment Guide",
  description:
    "Explore the FOCO (Franchise Owned, Company Operated) franchise opportunity in Agra with Buyzaar Mart — model details, store formats, investment, and revenue sharing.",
  keywords: [
    "FOCO franchise Agra",
    "FOCO model franchise India",
    "Buyzaar Mart Agra",
    "franchise owned company operated Agra",
    "Buyzaar Mart investment",
    "FOCO store franchise",
    "passive investment franchise Agra",
    "grocery franchise Uttar Pradesh",
    "organized retail franchise Agra",
    "Buyzaar Mart FOCO franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/foco-model-franchise-agra",
  },
  openGraph: {
    title: "FOCO Model Franchise in Agra | Buyzaar Mart Investment Guide",
    description:
      "Explore the FOCO (Franchise Owned, Company Operated) franchise opportunity in Agra with Buyzaar Mart — model details, store formats, investment, and revenue sharing.",
    url: "https://www.thebuyzaarmart.com/agra/foco-model-franchise-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Franchise in Agra | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Franchise in Agra | Buyzaar Mart Investment Guide",
    description:
      "Explore the FOCO (Franchise Owned, Company Operated) franchise opportunity in Agra with Buyzaar Mart — model details, store formats, investment, and revenue sharing.",
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