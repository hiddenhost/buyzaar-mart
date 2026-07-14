import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Model Franchise in Agra | Buyzaar Mart Investment Guide",
  description:
    "Explore the FOCO (Franchise Owned, Company Operated) franchise opportunity in Agra with Buyzaar Mart — model details, store formats, investment, and revenue sharing.",
  keywords: [
    "foco model franchise agra",
  "FOCO franchise agra",
  "franchise owned company operated agra",
  "company operated franchise agra",
  "grocery franchise FOCO model agra",
  "retail FOCO franchise agra",
  "mart franchise FOCO agra",
  "Buyzaar Mart FOCO franchise",
  "Buyzaar Mart FOCO model agra",
  "FOCO grocery franchise agra",
  "supermarket FOCO franchise agra",
  "mini mart FOCO franchise agra",
  "low investment FOCO franchise agra",
  "organised retail FOCO franchise",
  "grocery store franchise agra",
  "supermarket franchise agra",
  "mini mart franchise agra",
  "small supermarket franchise agra",
  "grocery franchise agra",
  "retail franchise agra",
  "neighbourhood mart franchise agra",
  "daily essentials franchise agra",
  "fmcg franchise agra",
  "grocery retail franchise agra",
  "retail business opportunity agra",
  "franchise business agra",
  "best grocery franchise agra",
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