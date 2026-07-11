import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise in Lucknow | The Buyzaar Mart Franchise Opportunity",
  description:
    "Open a grocery franchise in Lucknow with The Buyzaar Mart. Low investment FOCM and FOCO models, 3 store formats, full support. Apply now for your Lucknow outlet.",
  keywords: [
    "grocery franchise in Lucknow",
    "supermarket franchise Lucknow",
    "FMCG franchise Lucknow",
    "The Buyzaar Mart franchise",
    "grocery store franchise cost Lucknow",
    "mini mart franchise Lucknow",
    "franchise business Lucknow",
    "retail franchise opportunity Uttar Pradesh",
    "grocery franchise investment India",
    "supermarket business Lucknow",
    "franchise cost breakdown Lucknow",
    "Super Mart franchise Lucknow",
    "Hyper Mart franchise Lucknow",
    "FOCO FOCM franchise Lucknow",
    "grocery franchise for beginners UP",
    "retail business opportunity Lucknow",
    "organized grocery retail Lucknow",
    "franchise inquiry Lucknow",
    "low investment grocery franchise UP",
    "daily needs store franchise Lucknow",
    "grocery franchise ROI Lucknow",
    "best franchise business Lucknow",
    "Buyzaar Mart Lucknow franchise cost",
    "franchise partner Lucknow",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/how-to-open-a-grocery-franchise-in-lucknow",
  },
  openGraph: {
    title: "Grocery Franchise in Lucknow | The Buyzaar Mart Franchise Opportunity",
    description:
      "Open a grocery franchise in Lucknow with The Buyzaar Mart. Low investment FOCM and FOCO models, 3 store formats, full support. Apply now for your Lucknow outlet.",
    url: "https://www.thebuyzaarmart.com/lucknow/how-to-open-a-grocery-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise in Lucknow | The Buyzaar Mart Franchise Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise in Lucknow | The Buyzaar Mart Franchise Opportunity",
    description:
      "Open a grocery franchise in Lucknow with The Buyzaar Mart. Low investment FOCM and FOCO models, 3 store formats, full support. Apply now for your Lucknow outlet.",
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