import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "FOCM Mart Franchise in Rampur | The Buyzaar Mart",
  description:
    "Own a FOCM mart franchise in Rampur with The Buyzaar Mart. Company-managed systems, training and launch support. Total investment from ₹15 Lakh.",
  keywords: [
    "focm mart franchise rampur",
    "focm mart rampur",
    "focm franchise rampur",
    "focm model rampur",
    "franchise owned company managed rampur",
    "Buyzaar Mart rampur",
    "The Buyzaar Mart franchise",
    "mart franchise rampur",
    "supermarket franchise rampur",
    "grocery franchise rampur",
    "retail franchise rampur",
    "franchise opportunity in rampur",
    "grocery franchise 15 lakh",
    "low investment mart franchise",
    "Mini Mart franchise rampur",
    "Super Mart franchise rampur",
    "Hyper Mart franchise rampur",
    "supermarket franchise Uttar Pradesh",
    "supermarket franchise UP",
    "neighbourhood mart franchise India",
    "600 sq ft mart franchise",
    "Buyzaar Mart franchise apply",
    "FMCG store franchise rampur",
    "managed grocery franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/focm-mart-franchise-rampur",
  },
  openGraph: {
    title: "FOCM Mart Franchise in Rampur | The Buyzaar Mart",
    description:
      "Own a FOCM mart franchise in Rampur with The Buyzaar Mart. Company-managed systems, training and launch support. Total investment from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/rampur/focm-mart-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Mart Franchise in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Mart Franchise in Rampur | The Buyzaar Mart",
    description:
      "Own a FOCM mart franchise in Rampur with The Buyzaar Mart. Company-managed systems, training and launch support. Total investment from ₹15 Lakh.",
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