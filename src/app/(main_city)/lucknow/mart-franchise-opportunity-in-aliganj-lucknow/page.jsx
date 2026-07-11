import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Opportunity in Aliganj, Lucknow | The Buyzaar Mart",
  description:
    "Explore a mart franchise opportunity in Aliganj, Lucknow with The Buyzaar Mart. FOCO and FOCM models, Mini Mart and Super Mart formats, low investment and full support.",
  keywords: [
    "mart franchise Aliganj Lucknow",
    "grocery franchise Aliganj",
    "mini mart franchise Aliganj",
    "The Buyzaar Mart Aliganj",
    "supermarket franchise Aliganj Lucknow",
    "FMCG franchise Aliganj",
    "retail franchise opportunity Lucknow",
    "franchise business Aliganj Jankipuram",
    "grocery store Aliganj residential colony",
    "Super Mart franchise Aliganj",
    "neighbourhood store franchise Aliganj",
    "retail investment Aliganj Lucknow",
    "daily needs store Aliganj",
    "FOCO franchise Aliganj",
    "FOCM franchise Aliganj",
    "middle class residential franchise Lucknow",
    "organized retail Aliganj Lucknow",
    "franchise property Aliganj",
    "grocery franchise near me Aliganj",
    "Buyzaar Mart residential locality Lucknow",
    "affordable franchise Aliganj",
    "local grocery brand Aliganj Lucknow",
    "franchise opportunity Jankipuram Lucknow",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/mart-franchise-opportunity-in-aliganj-lucknow",
  },
  openGraph: {
    title: "Mart Franchise Opportunity in Aliganj, Lucknow | The Buyzaar Mart",
    description:
      "Explore a mart franchise opportunity in Aliganj, Lucknow with The Buyzaar Mart. FOCO and FOCM models, Mini Mart and Super Mart formats, low investment and full support.",
    url: "https://www.thebuyzaarmart.com/lucknow/mart-franchise-opportunity-in-aliganj-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity in Aliganj, Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Opportunity in Aliganj, Lucknow | The Buyzaar Mart",
    description:
      "Explore a mart franchise opportunity in Aliganj, Lucknow with The Buyzaar Mart. FOCO and FOCM models, Mini Mart and Super Mart formats, low investment and full support.",
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