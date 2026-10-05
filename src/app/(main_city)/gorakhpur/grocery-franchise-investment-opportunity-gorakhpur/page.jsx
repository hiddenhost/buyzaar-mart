import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Investment Opportunity Gorakhpur | Buyzaar",
  description:
    "Explore a grocery franchise investment opportunity in Gorakhpur with The Buyzaar Mart. Mini Mart from ₹15 Lakh, POS, training & inventory support. Apply now!",
  keywords: [
    "grocery franchise investment opportunity Gorakhpur",
    "grocery franchise opportunity Gorakhpur",
    "grocery franchise in Gorakhpur",
    "supermarket franchise opportunity Gorakhpur",
    "Buyzaar Mart franchise Gorakhpur",
    "mini mart franchise Gorakhpur",
    "super mart franchise Gorakhpur",
    "hyper mart franchise Gorakhpur",
    "franchise investment opportunity UP",
    "grocery business opportunity Gorakhpur",
    "low investment franchise Gorakhpur",
    "franchise from 15 lakh",
    "FOCM franchise model",
    "FOCO franchise model",
    "zero royalty franchise India",
    "neighbourhood grocery franchise",
    "FMCG retail franchise opportunity",
    "grocery store franchise cost",
    "franchise business in Gorakhpur",
    "supermarket franchise Uttar Pradesh",
    "passive income franchise India",
    "kirana upgrade franchise",
    "organised retail franchise",
    "daily needs store franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/grocery-franchise-investment-opportunity-gorakhpur",
  },
  openGraph: {
    title: "Grocery Franchise Investment Opportunity Gorakhpur | Buyzaar",
    description:
      "Explore a grocery franchise investment opportunity in Gorakhpur with The Buyzaar Mart. Mini Mart from ₹15 Lakh, POS, training & inventory support. Apply now!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/grocery-franchise-investment-opportunity-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment Opportunity Gorakhpur | Buyzaar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment Opportunity Gorakhpur | Buyzaar",
    description:
      "Explore a grocery franchise investment opportunity in Gorakhpur with The Buyzaar Mart. Mini Mart from ₹15 Lakh, POS, training & inventory support. Apply now!",
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