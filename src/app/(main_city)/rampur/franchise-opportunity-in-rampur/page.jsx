import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Franchise Opportunity in Rampur | Buyzaar Mart Grocery Store",
  description:
    "Explore a franchise opportunity in Rampur with Buyzaar Mart. See who can apply, the ₹15-20 lakh Mini Mart investment, support, margins and how to apply.",
  keywords: [
    "franchise opportunity in Rampur",
    "franchise opportunities in Rampur",
    "retail franchise opportunity Rampur",
    "grocery franchise opportunity Rampur",
    "business opportunity in Rampur",
    "franchise business in Rampur",
    "Buyzaar Mart franchise Rampur",
    "Buyzaar Mart franchise",
    "supermarket franchise in Rampur",
    "grocery franchise in Rampur",
    "retail franchise in Rampur",
    "mini mart franchise Rampur",
    "low investment franchise Rampur",
    "grocery franchise 15 lakh",
    "supermarket franchise Uttar Pradesh",
    "retail franchise in UP",
    "FOCM franchise India",
    "FOCO franchise India",
    "The Buyzaar Mart",
    "franchise with training and support",
    "FMCG store franchise India",
    "neighborhood supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/franchise-opportunity-in-rampur",
  },
  openGraph: {
    title: "Franchise Opportunity in Rampur | Buyzaar Mart Grocery Store",
    description:
      "Explore a franchise opportunity in Rampur with Buyzaar Mart. See who can apply, the ₹15-20 lakh Mini Mart investment, support, margins and how to apply.",
    url: "https://www.thebuyzaarmart.com/rampur/franchise-opportunity-in-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Opportunity in Rampur | Buyzaar Mart Grocery Store",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Opportunity in Rampur | Buyzaar Mart Grocery Store",
    description:
      "Explore a franchise opportunity in Rampur with Buyzaar Mart. See who can apply, the ₹15-20 lakh Mini Mart investment, support, margins and how to apply.",
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