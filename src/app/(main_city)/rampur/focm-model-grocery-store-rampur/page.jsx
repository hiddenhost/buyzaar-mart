import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "FOCM Model Grocery Store in Rampur | The Buyzaar Mart",
  description:
    "Own a FOCM model grocery store in Rampur with The Buyzaar Mart. Company-managed operations, POS billing, training and launch support. Total investment from ₹15 Lakh.",
  keywords: [
    "focm model grocery store rampur",
    "focm grocery store rampur",
    "focm franchise rampur",
    "franchise owned company managed rampur",
    "Buyzaar Mart rampur",
    "The Buyzaar Mart franchise",
    "grocery franchise rampur",
    "grocery store franchise rampur",
    "supermarket franchise rampur",
    "mart franchise rampur",
    "retail franchise rampur",
    "grocery franchise 15 lakh",
    "low investment grocery franchise rampur",
    "Mini Mart franchise rampur",
    "Super Mart franchise rampur",
    "Hyper Mart franchise rampur",
    "grocery store franchise Uttar Pradesh",
    "supermarket franchise UP",
    "managed grocery franchise India",
    "neighbourhood supermarket franchise",
    "FMCG store franchise rampur",
    "grocery franchise with full support",
    "grocery franchise 18-20% margin",
    "Buyzaar Mart franchise apply",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/focm-model-grocery-store-rampur",
  },
  openGraph: {
    title: "FOCM Model Grocery Store in Rampur | The Buyzaar Mart",
    description:
      "Own a FOCM model grocery store in Rampur with The Buyzaar Mart. Company-managed operations, POS billing, training and launch support. Total investment from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/rampur/focm-model-grocery-store-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Grocery Store in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Grocery Store in Rampur | The Buyzaar Mart",
    description:
      "Own a FOCM model grocery store in Rampur with The Buyzaar Mart. Company-managed operations, POS billing, training and launch support. Total investment from ₹15 Lakh.",
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