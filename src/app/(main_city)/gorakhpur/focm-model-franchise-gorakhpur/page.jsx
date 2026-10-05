import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Model Franchise in Gorakhpur | The Buyzaar Mart",
  description:
    "Explore the FOCM model franchise in Gorakhpur from ₹15 Lakh. You own the store; The Buyzaar Mart manages operations with POS & training. Apply now!",
  keywords: [
    "FOCM model franchise Gorakhpur",
    "FOCM franchise Gorakhpur",
    "FOCM model franchise",
    "Franchise Owned Company Managed",
    "FOCM model meaning",
    "FOCM vs FOCO",
    "FOCO vs FOCM Gorakhpur",
    "company managed franchise India",
    "Buyzaar Mart FOCM",
    "Buyzaar Mart franchise Gorakhpur",
    "grocery franchise Gorakhpur",
    "supermarket franchise Gorakhpur",
    "mini mart franchise Gorakhpur",
    "franchise from 15 lakh",
    "low investment franchise Gorakhpur",
    "franchise for first-time entrepreneurs",
    "semi-absentee franchise",
    "franchise investment Uttar Pradesh",
    "franchise business Gorakhpur",
    "zero royalty franchise",
    "FOCM franchise cost",
    "FOCM franchise margin",
    "5 year franchise agreement",
    "retail franchise Gorakhpur",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/focm-model-franchise-gorakhpur",
  },
  openGraph: {
    title: "FOCM Model Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Explore the FOCM model franchise in Gorakhpur from ₹15 Lakh. You own the store; The Buyzaar Mart manages operations with POS & training. Apply now!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/focm-model-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Franchise in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Explore the FOCM model franchise in Gorakhpur from ₹15 Lakh. You own the store; The Buyzaar Mart manages operations with POS & training. Apply now!",
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