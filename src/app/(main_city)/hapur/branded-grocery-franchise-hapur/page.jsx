import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Branded Grocery Franchise Hapur | The Buyzaar Mart",
  description:
    "Start a branded grocery franchise in Hapur with The Buyzaar Mart. 50+ FMCG brand partners, uniform store identity, local marketing and training. Total investment from ₹15 lakh.",
  keywords: [
    "branded grocery franchise hapur",
    "grocery franchise hapur",
    "branded supermarket franchise hapur",
    "grocery store franchise in hapur",
    "supermarket franchise hapur",
    "mart franchise hapur",
    "buyzaar mart franchise hapur",
    "the buyzaar mart",
    "trusted grocery franchise brand",
    "FMCG brand partnerships franchise",
    "branded mart franchise",
    "mini mart franchise hapur",
    "super mart franchise hapur",
    "hyper mart franchise hapur",
    "FOCM franchise hapur",
    "FOCO franchise hapur",
    "low investment grocery franchise",
    "grocery franchise under 20 lakh",
    "supermarket franchise uttar pradesh",
    "grocery franchise NCR",
    "franchise business in hapur",
    "grocery franchise with training and support",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/branded-grocery-franchise-hapur",
  },
  openGraph: {
    title: "Branded Grocery Franchise Hapur | The Buyzaar Mart",
    description:
      "Start a branded grocery franchise in Hapur with The Buyzaar Mart. 50+ FMCG brand partners, uniform store identity, local marketing and training. Total investment from ₹15 lakh.",
    url: "https://www.thebuyzaarmart.com/hapur/branded-grocery-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Branded Grocery Franchise Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded Grocery Franchise Hapur | The Buyzaar Mart",
    description:
      "Start a branded grocery franchise in Hapur with The Buyzaar Mart. 50+ FMCG brand partners, uniform store identity, local marketing and training. Total investment from ₹15 lakh.",
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