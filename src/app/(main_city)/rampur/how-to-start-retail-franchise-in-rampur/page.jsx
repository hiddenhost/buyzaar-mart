import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Retail Franchise in Rampur | Buyzaar Mart",
  description:
    "Planning a grocery store in Rampur? See the franchise steps, space needs, ₹15-20 lakh Mini Mart investment and the support Buyzaar Mart gives owners.",
  keywords: [
    "how to start retail franchise in Rampur",
    "retail franchise in Rampur",
    "supermarket franchise in Rampur",
    "grocery franchise in Rampur",
    "Buyzaar Mart franchise Rampur",
    "franchise business in Rampur",
    "low investment franchise Rampur",
    "grocery store franchise Uttar Pradesh",
    "supermarket franchise Uttar Pradesh",
    "mini mart franchise Rampur",
    "retail franchise in UP",
    "franchise opportunities in Rampur",
    "start grocery store in Rampur",
    "FOCM franchise India",
    "The Buyzaar Mart",
    "Buyzaar Mart franchise",
    "supermarket franchise cost India",
    "grocery franchise 15 lakh",
    "franchise with training and support",
    "FMCG store franchise India",
    "neighborhood supermarket franchise",
    "best franchise business in Rampur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/how-to-start-retail-franchise-in-rampur",
  },
  openGraph: {
    title: "How to Start a Retail Franchise in Rampur | Buyzaar Mart",
    description:
      "Planning a grocery store in Rampur? See the franchise steps, space needs, ₹15-20 lakh Mini Mart investment and the support Buyzaar Mart gives owners.",
    url: "https://www.thebuyzaarmart.com/rampur/how-to-start-retail-franchise-in-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Retail Franchise in Rampur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Retail Franchise in Rampur | Buyzaar Mart",
    description:
      "Planning a grocery store in Rampur? See the franchise steps, space needs, ₹15-20 lakh Mini Mart investment and the support Buyzaar Mart gives owners.",
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