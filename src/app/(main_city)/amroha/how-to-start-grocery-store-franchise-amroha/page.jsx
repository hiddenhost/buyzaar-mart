import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Grocery Store Franchise in Amroha | Buyzaar",
  description:
    "Want to start a grocery store franchise in Amroha? See store sizes, layout, setup steps and the total investment of ₹15–20 lakh with The Buyzaar Mart.",
  keywords: [
    "grocery store franchise in Amroha",
    "how to start grocery store franchise Amroha",
    "grocery store franchise in Uttar Pradesh",
    "grocery store franchise in India",
    "Buyzaar Mart grocery store",
    "Buyzaar Mart franchise Amroha",
    "start grocery store in Amroha",
    "grocery store setup franchise",
    "supermarket franchise in Amroha",
    "mini mart franchise in UP",
    "super mart franchise",
    "hyper mart franchise",
    "low investment grocery store franchise",
    "grocery store franchise 15 lakh",
    "grocery store franchise total investment",
    "grocery store franchise without experience",
    "grocery store franchise with full support",
    "FOCM franchise model",
    "FOCO franchise model",
    "kirana store to supermarket franchise",
    "neighbourhood grocery store franchise",
    "FMCG store franchise",
    "franchise business in Amroha",
    "apply for grocery store franchise",
    "organised grocery retail franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/how-to-start-grocery-store-franchise-amroha",
  },
  openGraph: {
    title: "How to Start a Grocery Store Franchise in Amroha | Buyzaar",
    description:
      "Want to start a grocery store franchise in Amroha? See store sizes, layout, setup steps and the total investment of ₹15–20 lakh with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/amroha/how-to-start-grocery-store-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Grocery Store Franchise in Amroha | Buyzaar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Grocery Store Franchise in Amroha | Buyzaar",
    description:
      "Want to start a grocery store franchise in Amroha? See store sizes, layout, setup steps and the total investment of ₹15–20 lakh with The Buyzaar Mart.",
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