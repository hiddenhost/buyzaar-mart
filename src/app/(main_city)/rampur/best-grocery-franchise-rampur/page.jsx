import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Best Grocery Franchise in Rampur | Buyzaar Mart Franchise",
  description:
    "Looking for the best grocery franchise in Rampur? Compare 10 key criteria, see the ₹15-20 lakh Mini Mart investment, margins, support and how to apply.",
  keywords: [
    "best grocery franchise in Rampur",
    "best grocery franchise",
    "grocery franchise in Rampur",
    "best supermarket franchise in Rampur",
    "Buyzaar Mart franchise Rampur",
    "Buyzaar Mart franchise",
    "supermarket franchise in Rampur",
    "retail franchise in Rampur",
    "top franchise business in Rampur",
    "franchise opportunities in Rampur",
    "mini mart franchise Rampur",
    "low investment grocery franchise",
    "grocery franchise 15 lakh",
    "grocery store franchise Uttar Pradesh",
    "supermarket franchise Uttar Pradesh",
    "retail franchise in UP",
    "FOCM franchise India",
    "The Buyzaar Mart",
    "grocery franchise with training and support",
    "grocery franchise with high margin",
    "FMCG store franchise India",
    "neighborhood supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/best-grocery-franchise-rampur",
  },
  openGraph: {
    title: "Best Grocery Franchise in Rampur | Buyzaar Mart Franchise",
    description:
      "Looking for the best grocery franchise in Rampur? Compare 10 key criteria, see the ₹15-20 lakh Mini Mart investment, margins, support and how to apply.",
    url: "https://www.thebuyzaarmart.com/rampur/best-grocery-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Franchise in Rampur | Buyzaar Mart Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Franchise in Rampur | Buyzaar Mart Franchise",
    description:
      "Looking for the best grocery franchise in Rampur? Compare 10 key criteria, see the ₹15-20 lakh Mini Mart investment, margins, support and how to apply.",
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