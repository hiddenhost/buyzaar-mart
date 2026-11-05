import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Profitable Franchise in Rampur | Buyzaar Mart Grocery Store",
  description:
    "Looking for a profitable franchise in Rampur? Learn how the 18-20% margin works, the ₹15-20 lakh Mini Mart investment, costs, sales tips and how to apply.",
  keywords: [
    "profitable franchise in Rampur",
    "profitable franchise business in Rampur",
    "best profitable franchise Rampur",
    "high margin franchise Rampur",
    "grocery franchise in Rampur",
    "supermarket franchise in Rampur",
    "retail franchise in Rampur",
    "Buyzaar Mart franchise Rampur",
    "Buyzaar Mart franchise",
    "franchise business in Rampur",
    "franchise opportunities in Rampur",
    "mini mart franchise Rampur",
    "grocery franchise profit margin",
    "low investment grocery franchise",
    "grocery franchise 15 lakh",
    "supermarket franchise Uttar Pradesh",
    "grocery store franchise UP",
    "FOCM franchise India",
    "The Buyzaar Mart",
    "grocery franchise with training and support",
    "FMCG store franchise India",
    "neighborhood supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/profitable-franchise-rampur",
  },
  openGraph: {
    title: "Profitable Franchise in Rampur | Buyzaar Mart Grocery Store",
    description:
      "Looking for a profitable franchise in Rampur? Learn how the 18-20% margin works, the ₹15-20 lakh Mini Mart investment, costs, sales tips and how to apply.",
    url: "https://www.thebuyzaarmart.com/rampur/profitable-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Profitable Franchise in Rampur | Buyzaar Mart Grocery Store",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profitable Franchise in Rampur | Buyzaar Mart Grocery Store",
    description:
      "Looking for a profitable franchise in Rampur? Learn how the 18-20% margin works, the ₹15-20 lakh Mini Mart investment, costs, sales tips and how to apply.",
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