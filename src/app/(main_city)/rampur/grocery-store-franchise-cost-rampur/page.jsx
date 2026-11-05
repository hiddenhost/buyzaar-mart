import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Grocery Store Franchise Cost in Rampur | The Buyzaar Mart",
  description:
    "Grocery store franchise cost in Rampur: ₹15–20 lakh total investment for a Buyzaar Mart Mini Mart with setup, POS, training and supply support. Apply now.",
  keywords: [
    "grocery store franchise cost Rampur",
    "grocery franchise cost in Rampur",
    "Buyzaar Mart franchise Rampur",
    "supermarket franchise Rampur",
    "grocery franchise Rampur Uttar Pradesh",
    "grocery franchise 15 lakh",
    "grocery franchise under 20 lakh",
    "low investment grocery franchise",
    "Mini Mart franchise Rampur",
    "FOCM franchise Rampur",
    "retail franchise Rampur",
    "mart franchise Rampur",
    "grocery franchise opportunity Rampur",
    "supermarket franchise cost India",
    "how to start grocery store in Rampur",
    "franchise business Rampur",
    "organised grocery store franchise",
    "grocery franchise with full support",
    "FMCG store franchise Rampur",
    "neighbourhood supermarket franchise",
    "Buyzaar Mart franchise apply",
    "grocery franchise Uttar Pradesh",
    "supermarket franchise North India",
    "grocery franchise with training and support",
    "grocery store franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/grocery-store-franchise-cost-rampur",
  },
  openGraph: {
    title: "Grocery Store Franchise Cost in Rampur | The Buyzaar Mart",
    description:
      "Grocery store franchise cost in Rampur: ₹15–20 lakh total investment for a Buyzaar Mart Mini Mart with setup, POS, training and supply support. Apply now.",
    url: "https://www.thebuyzaarmart.com/rampur/grocery-store-franchise-cost-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise Cost in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise Cost in Rampur | The Buyzaar Mart",
    description:
      "Grocery store franchise cost in Rampur: ₹15–20 lakh total investment for a Buyzaar Mart Mini Mart with setup, POS, training and supply support. Apply now.",
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