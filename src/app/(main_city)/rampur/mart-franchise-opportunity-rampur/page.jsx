import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Mart Franchise Opportunity in Rampur | Buyzaar Mart",
  description:
    "Explore a mart franchise opportunity in Rampur. See store features, brand pillars, POS billing, the ₹15-20 lakh Mini Mart investment and how to apply.",
  keywords: [
    "mart franchise opportunity Rampur",
    "mart franchise opportunity",
    "mart franchise in Rampur",
    "supermarket franchise opportunity Rampur",
    "Buyzaar Mart franchise Rampur",
    "Buyzaar Mart franchise",
    "Buyzaar Mart store features",
    "mini mart franchise Rampur",
    "super mart franchise Rampur",
    "hyper mart franchise Rampur",
    "grocery franchise in Rampur",
    "retail franchise in Rampur",
    "franchise business in Rampur",
    "franchise opportunities in Rampur",
    "low investment mart franchise",
    "grocery franchise 15 lakh",
    "supermarket franchise Uttar Pradesh",
    "retail franchise in UP",
    "FOCM franchise India",
    "The Buyzaar Mart",
    "POS billing grocery franchise",
    "FMCG store franchise India",
    "neighborhood supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/mart-franchise-opportunity-rampur",
  },
  openGraph: {
    title: "Mart Franchise Opportunity in Rampur | Buyzaar Mart",
    description:
      "Explore a mart franchise opportunity in Rampur. See store features, brand pillars, POS billing, the ₹15-20 lakh Mini Mart investment and how to apply.",
    url: "https://www.thebuyzaarmart.com/rampur/mart-franchise-opportunity-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity in Rampur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Opportunity in Rampur | Buyzaar Mart",
    description:
      "Explore a mart franchise opportunity in Rampur. See store features, brand pillars, POS billing, the ₹15-20 lakh Mini Mart investment and how to apply.",
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