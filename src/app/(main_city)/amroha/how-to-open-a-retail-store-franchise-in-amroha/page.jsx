import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Retail Store Franchise in Amroha | Buyzaar",
  description:
    "Want to open a retail store franchise in Amroha? See formats, store setup, process and the total investment of ₹15–20 lakh with The Buyzaar Mart. Apply now.",
  keywords: [
    "retail store franchise in Amroha",
    "how to open retail store franchise in Amroha",
    "retail store franchise in Uttar Pradesh",
    "retail store franchise in India",
    "Buyzaar Mart retail store",
    "Buyzaar Mart franchise Amroha",
    "retail store setup franchise",
    "open a retail store in Amroha",
    "low investment retail store franchise",
    "retail store franchise 15 lakh",
    "retail store franchise total investment",
    "retail store franchise without experience",
    "retail store franchise with full support",
    "supermarket franchise in Amroha",
    "grocery franchise in Amroha",
    "mini mart franchise in UP",
    "super mart franchise",
    "hyper mart franchise",
    "FOCM franchise model",
    "FOCO franchise model",
    "daily needs retail store franchise",
    "FMCG retail store franchise",
    "neighbourhood retail store franchise",
    "franchise business in Amroha",
    "apply for retail store franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/how-to-open-a-retail-store-franchise-in-amroha",
  },
  openGraph: {
    title: "How to Open a Retail Store Franchise in Amroha | Buyzaar",
    description:
      "Want to open a retail store franchise in Amroha? See formats, store setup, process and the total investment of ₹15–20 lakh with The Buyzaar Mart. Apply now.",
    url: "https://www.thebuyzaarmart.com/amroha/how-to-open-a-retail-store-franchise-in-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Retail Store Franchise in Amroha | Buyzaar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Retail Store Franchise in Amroha | Buyzaar",
    description:
      "Want to open a retail store franchise in Amroha? See formats, store setup, process and the total investment of ₹15–20 lakh with The Buyzaar Mart. Apply now.",
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