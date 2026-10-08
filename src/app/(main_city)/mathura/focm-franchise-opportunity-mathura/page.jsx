import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Franchise Opportunity in Mathura | Buyzaar Mart",
  description:
    "Start a Buyzaar Mart supermarket in Mathura with the FOCM model. Check investment, margins, store formats, locations and how to apply today.",
  keywords: [
    "FOCM franchise opportunity Mathura",
    "Buyzaar Mart franchise Mathura",
    "supermarket franchise in Mathura",
    "grocery franchise Mathura",
    "mini mart franchise Mathura",
    "FOCM franchise model",
    "Buyzaar Mart FOCM",
    "retail franchise Mathura",
    "low investment franchise Mathura",
    "kirana store franchise Mathura",
    "supermarket franchise Uttar Pradesh",
    "franchise business in Mathura",
    "Mathura franchise opportunities",
    "FMCG franchise Mathura",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "Mini Mart franchise cost",
    "grocery store franchise India",
    "Buyzaar Mart franchise cost",
    "Mathura Vrindavan franchise",
    "best franchise in Mathura",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/focm-franchise-opportunity-mathura",
  },
  openGraph: {
    title: "FOCM Franchise Opportunity in Mathura | Buyzaar Mart",
    description:
      "Start a Buyzaar Mart supermarket in Mathura with the FOCM model. Check investment, margins, store formats, locations and how to apply today.",
    url: "https://www.thebuyzaarmart.com/mathura/focm-franchise-opportunity-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise Opportunity in Mathura | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Franchise Opportunity in Mathura | Buyzaar Mart",
    description:
      "Start a Buyzaar Mart supermarket in Mathura with the FOCM model. Check investment, margins, store formats, locations and how to apply today.",
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