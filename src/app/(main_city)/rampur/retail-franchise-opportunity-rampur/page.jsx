import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Retail Franchise Opportunity in Rampur | Buyzaar Mart",
  description:
    "Explore a retail franchise opportunity in Rampur. See how organised retail works, store formats, the ₹15-20 lakh Mini Mart investment and how to apply.",
  keywords: [
    "retail franchise opportunity Rampur",
    "retail franchise in Rampur",
    "retail franchise opportunities",
    "retail business opportunity Rampur",
    "organised retail franchise India",
    "grocery franchise in Rampur",
    "supermarket franchise in Rampur",
    "Buyzaar Mart franchise Rampur",
    "Buyzaar Mart franchise",
    "franchise business in Rampur",
    "franchise opportunities in Rampur",
    "mini mart franchise Rampur",
    "low investment retail franchise",
    "grocery franchise 15 lakh",
    "supermarket franchise Uttar Pradesh",
    "retail franchise in UP",
    "FOCM franchise India",
    "The Buyzaar Mart",
    "retail store franchise with training and support",
    "FMCG store franchise India",
    "neighborhood supermarket franchise",
    "retail franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/retail-franchise-opportunity-rampur",
  },
  openGraph: {
    title: "Retail Franchise Opportunity in Rampur | Buyzaar Mart",
    description:
      "Explore a retail franchise opportunity in Rampur. See how organised retail works, store formats, the ₹15-20 lakh Mini Mart investment and how to apply.",
    url: "https://www.thebuyzaarmart.com/rampur/retail-franchise-opportunity-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Opportunity in Rampur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Opportunity in Rampur | Buyzaar Mart",
    description:
      "Explore a retail franchise opportunity in Rampur. See how organised retail works, store formats, the ₹15-20 lakh Mini Mart investment and how to apply.",
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