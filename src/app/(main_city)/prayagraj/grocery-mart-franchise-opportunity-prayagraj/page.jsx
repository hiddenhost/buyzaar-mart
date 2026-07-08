import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Franchise Opportunity in Prayagraj | Buyzaar Mart",
  description:
    "Explore a grocery mart franchise opportunity in Prayagraj with Buyzaar Mart. Growing demand, low competition, and strong support make now the right time to invest.",
  keywords: [
    "grocery mart franchise opportunity Prayagraj",
    "Buyzaar Mart franchise",
    "grocery franchise investment India",
    "retail franchise opportunity UP",
    "Tier-2 city grocery franchise",
    "franchise business opportunity Prayagraj",
    "grocery store franchise India",
    "mart franchise investment Prayagraj",
    "new franchise opportunity UP",
    "grocery retail franchise India",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/grocery-mart-franchise-opportunity-prayagraj",
  },
  openGraph: {
    title: "Grocery Mart Franchise Opportunity in Prayagraj | Buyzaar Mart",
    description:
      "Explore a grocery mart franchise opportunity in Prayagraj with Buyzaar Mart. Growing demand, low competition, and strong support make now the right time to invest.",
    url: "https://www.thebuyzaarmart.com/prayagraj/grocery-mart-franchise-opportunity-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Franchise Opportunity in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Mart Franchise Opportunity in Prayagraj | Buyzaar Mart",
    description:
      "Explore a grocery mart franchise opportunity in Prayagraj with Buyzaar Mart. Growing demand, low competition, and strong support make now the right time to invest.",
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