import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Branded Grocery Franchise in Rampur | The Buyzaar Mart",
  description:
    "Branded grocery franchise in Rampur: open a trusted Buyzaar Mart with known brands, POS billing and supply support. ₹15–20 lakh total for Mini Mart. Apply now.",
  keywords: [
    "branded grocery franchise Rampur",
    "branded grocery store franchise Rampur",
    "branded mart franchise Rampur",
    "Buyzaar Mart franchise Rampur",
    "grocery franchise Rampur",
    "supermarket franchise Rampur",
    "retail franchise Rampur",
    "organised grocery franchise Rampur",
    "mini mart franchise Rampur",
    "super mart franchise Rampur",
    "hyper mart franchise Rampur",
    "FOCM franchise Rampur",
    "FOCO franchise Rampur",
    "grocery franchise 15 lakh",
    "grocery franchise under 20 lakh",
    "low investment grocery franchise",
    "grocery franchise Uttar Pradesh",
    "branded supermarket franchise India",
    "neighbourhood grocery franchise",
    "franchise business Rampur",
    "mart franchise Rampur",
    "FMCG store franchise Rampur",
    "grocery franchise with training and support",
    "POS enabled grocery franchise",
    "grocery franchise opportunity Rampur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/branded-grocery-franchise-rampur",
  },
  openGraph: {
    title: "Branded Grocery Franchise in Rampur | The Buyzaar Mart",
    description:
      "Branded grocery franchise in Rampur: open a trusted Buyzaar Mart with known brands, POS billing and supply support. ₹15–20 lakh total for Mini Mart. Apply now.",
    url: "https://www.thebuyzaarmart.com/rampur/branded-grocery-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Branded Grocery Franchise in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded Grocery Franchise in Rampur | The Buyzaar Mart",
    description:
      "Branded grocery franchise in Rampur: open a trusted Buyzaar Mart with known brands, POS billing and supply support. ₹15–20 lakh total for Mini Mart. Apply now.",
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