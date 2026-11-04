import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Grocery Franchise from ₹15 Lakh in Rampur | The Buyzaar Mart",
  description:
    "Start a grocery franchise in Rampur from ₹15 lakh with The Buyzaar Mart. Full setup, POS, supply chain, training and marketing support. Apply today.",
  keywords: [
    "grocery franchise rampur",
    "grocery franchise starting from 15 lakh",
    "grocery franchise in rampur",
    "supermarket franchise rampur",
    "mart franchise rampur",
    "buyzaar mart franchise rampur",
    "the buyzaar mart",
    "low investment grocery franchise",
    "grocery franchise under 20 lakh",
    "mini mart franchise rampur",
    "FOCM franchise rampur",
    "retail franchise rampur",
    "grocery store franchise uttar pradesh",
    "supermarket franchise in india",
    "organised retail franchise",
    "FMCG store franchise",
    "grocery franchise with full support",
    "neighbourhood supermarket franchise",
    "how to start grocery franchise",
    "franchise business opportunity rampur",
    "grocery franchise 15 lakh",
    "affordable supermarket franchise india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/grocery-franchise-starting-from-15-lakh-rampur",
  },
  openGraph: {
    title: "Grocery Franchise from ₹15 Lakh in Rampur | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Rampur from ₹15 lakh with The Buyzaar Mart. Full setup, POS, supply chain, training and marketing support. Apply today.",
    url: "https://www.thebuyzaarmart.com/rampur/grocery-franchise-starting-from-15-lakh-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise from ₹15 Lakh in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise from ₹15 Lakh in Rampur | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Rampur from ₹15 lakh with The Buyzaar Mart. Full setup, POS, supply chain, training and marketing support. Apply today.",
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