import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise in Amroha | Buyzaar Mart Franchise",
  description:
    "Get a grocery franchise in Amroha with Buyzaar Mart. Start from ₹15 lakh total investment with training, supply chain and POS support. Apply today.",
  keywords: [
    "grocery franchise in Amroha",
    "how to get grocery franchise in Amroha",
    "Buyzaar Mart franchise Amroha",
    "supermarket franchise Amroha",
    "mart franchise Amroha",
    "retail franchise Amroha",
    "grocery store franchise Amroha",
    "grocery franchise opportunity Amroha",
    "FOCM franchise Amroha",
    "mini mart franchise Amroha",
    "grocery franchise under 20 lakh",
    "grocery franchise 15 lakh",
    "low investment grocery franchise",
    "supermarket franchise Uttar Pradesh",
    "grocery franchise UP",
    "franchise business opportunity Amroha",
    "how to start grocery franchise",
    "apply for grocery franchise",
    "supermarket franchise in India",
    "neighborhood supermarket franchise",
    "retail store franchise India",
    "FMCG store franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/how-to-get-grocery-franchise-in-amroha",
  },
  openGraph: {
    title: "Grocery Franchise in Amroha | Buyzaar Mart Franchise",
    description:
      "Get a grocery franchise in Amroha with Buyzaar Mart. Start from ₹15 lakh total investment with training, supply chain and POS support. Apply today.",
    url: "https://www.thebuyzaarmart.com/amroha/how-to-get-grocery-franchise-in-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise in Amroha | Buyzaar Mart Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise in Amroha | Buyzaar Mart Franchise",
    description:
      "Get a grocery franchise in Amroha with Buyzaar Mart. Start from ₹15 lakh total investment with training, supply chain and POS support. Apply today.",
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