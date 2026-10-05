import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Investment in Gorakhpur | Buyzaar Mart",
  description:
    "Explore retail franchise investment in Gorakhpur with The Buyzaar Mart. Mini Mart from ₹15 Lakh, FOCM & FOCO models, POS, training & full support. Apply today!",
  keywords: [
    "retail franchise investment Gorakhpur",
    "retail franchise in Gorakhpur",
    "supermarket franchise Gorakhpur",
    "grocery franchise Gorakhpur",
    "Buyzaar Mart franchise Gorakhpur",
    "mini mart franchise Gorakhpur",
    "super mart franchise Gorakhpur",
    "hyper mart franchise Gorakhpur",
    "franchise business in Gorakhpur",
    "best franchise in Gorakhpur",
    "low investment franchise Gorakhpur",
    "franchise opportunity Gorakhpur",
    "FOCM franchise model",
    "FOCO franchise model",
    "franchise from 15 lakh",
    "supermarket franchise Uttar Pradesh",
    "grocery store franchise India",
    "retail business Gorakhpur",
    "kirana store franchise",
    "neighbourhood store franchise",
    "zero royalty franchise",
    "franchise investment in UP",
    "start supermarket in Gorakhpur",
    "FMCG retail franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/retail-franchise-investment-gorakhpur",
  },
  openGraph: {
    title: "Retail Franchise Investment in Gorakhpur | Buyzaar Mart",
    description:
      "Explore retail franchise investment in Gorakhpur with The Buyzaar Mart. Mini Mart from ₹15 Lakh, FOCM & FOCO models, POS, training & full support. Apply today!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/retail-franchise-investment-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Investment in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Investment in Gorakhpur | Buyzaar Mart",
    description:
      "Explore retail franchise investment in Gorakhpur with The Buyzaar Mart. Mini Mart from ₹15 Lakh, FOCM & FOCO models, POS, training & full support. Apply today!",
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