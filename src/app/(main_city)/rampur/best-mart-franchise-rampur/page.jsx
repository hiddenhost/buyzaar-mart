import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Best Mart Franchise in Rampur | Mini, Super & Hyper Mart",
  description:
    "Looking for the best mart franchise in Rampur? Compare Mini, Super and Hyper Mart formats, the ₹15-20 lakh Mini Mart investment, margins and how to apply.",
  keywords: [
    "best mart franchise in Rampur",
    "mart franchise in Rampur",
    "best mart franchise",
    "Buyzaar Mart franchise Rampur",
    "Buyzaar Mart franchise",
    "mini mart franchise Rampur",
    "super mart franchise Rampur",
    "hyper mart franchise Rampur",
    "supermarket franchise in Rampur",
    "grocery franchise in Rampur",
    "retail franchise in Rampur",
    "franchise business in Rampur",
    "franchise opportunities in Rampur",
    "low investment mart franchise",
    "grocery franchise 15 lakh",
    "supermarket franchise Uttar Pradesh",
    "mart franchise Uttar Pradesh",
    "FOCM franchise India",
    "The Buyzaar Mart",
    "mart franchise with training and support",
    "FMCG store franchise India",
    "neighborhood supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/best-mart-franchise-rampur",
  },
  openGraph: {
    title: "Best Mart Franchise in Rampur | Mini, Super & Hyper Mart",
    description:
      "Looking for the best mart franchise in Rampur? Compare Mini, Super and Hyper Mart formats, the ₹15-20 lakh Mini Mart investment, margins and how to apply.",
    url: "https://www.thebuyzaarmart.com/rampur/best-mart-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Mart Franchise in Rampur | Mini, Super & Hyper Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Mart Franchise in Rampur | Mini, Super & Hyper Mart",
    description:
      "Looking for the best mart franchise in Rampur? Compare Mini, Super and Hyper Mart formats, the ₹15-20 lakh Mini Mart investment, margins and how to apply.",
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