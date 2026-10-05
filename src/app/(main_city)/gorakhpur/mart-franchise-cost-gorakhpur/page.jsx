import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Cost in Gorakhpur | Buyzaar Mart Investment",
  description:
    "Check mart franchise cost in Gorakhpur: Mini, Super & Hyper Mart investment compared. Buyzaar Mart starts from ₹15 Lakh with POS & training. Apply now!",
  keywords: [
    "mart franchise cost Gorakhpur",
    "mart franchise cost in Gorakhpur",
    "mini mart franchise cost",
    "super mart franchise cost",
    "hyper mart franchise cost",
    "mart franchise investment Gorakhpur",
    "supermarket franchise cost Gorakhpur",
    "Buyzaar Mart franchise cost",
    "mart franchise fee",
    "mart franchise cost per sq ft",
    "mart franchise ROI",
    "mart franchise payback period",
    "mart franchise profit margin",
    "low investment mart franchise",
    "franchise from 15 lakh",
    "mini mart vs super mart",
    "super mart vs hyper mart",
    "FOCM FOCO cost",
    "zero royalty mart franchise",
    "mart franchise Uttar Pradesh",
    "retail mart franchise India",
    "grocery mart franchise Gorakhpur",
    "franchise business Gorakhpur",
    "mart setup cost",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/mart-franchise-cost-gorakhpur",
  },
  openGraph: {
    title: "Mart Franchise Cost in Gorakhpur | Buyzaar Mart Investment",
    description:
      "Check mart franchise cost in Gorakhpur: Mini, Super & Hyper Mart investment compared. Buyzaar Mart starts from ₹15 Lakh with POS & training. Apply now!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/mart-franchise-cost-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Cost in Gorakhpur | Buyzaar Mart Investment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Cost in Gorakhpur | Buyzaar Mart Investment",
    description:
      "Check mart franchise cost in Gorakhpur: Mini, Super & Hyper Mart investment compared. Buyzaar Mart starts from ₹15 Lakh with POS & training. Apply now!",
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