import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start Grocery Store Franchise Gorakhpur | Buyzaar Mart",
  description:
    "Learn how to start a grocery store franchise in Gorakhpur with The Buyzaar Mart. Cost from ₹15 Lakh, store setup, stocking, launch plan and full support.",
  keywords: [
    "how to start grocery store franchise gorakhpur",
    "grocery store franchise in gorakhpur",
    "start grocery store in gorakhpur",
    "grocery franchise in gorakhpur",
    "the buyzaar mart",
    "buyzaar mart grocery store franchise",
    "grocery store franchise cost",
    "grocery store setup guide",
    "grocery franchise under 20 lakh",
    "low investment grocery franchise",
    "grocery franchise 15 lakh",
    "mini mart franchise gorakhpur",
    "supermarket franchise in gorakhpur",
    "franchise business in gorakhpur",
    "FOCM franchise india",
    "grocery store franchise in uttar pradesh",
    "grocery franchise with training and support",
    "grocery store launch plan",
    "franchise store opening checklist",
    "neighborhood grocery store franchise",
    "FMCG store franchise india",
    "retail franchise in eastern UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/how-to-start-grocery-store-franchise-gorakhpur",
  },
  openGraph: {
    title: "How to Start Grocery Store Franchise Gorakhpur | Buyzaar Mart",
    description:
      "Learn how to start a grocery store franchise in Gorakhpur with The Buyzaar Mart. Cost from ₹15 Lakh, store setup, stocking, launch plan and full support.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/how-to-start-grocery-store-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start Grocery Store Franchise Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start Grocery Store Franchise Gorakhpur | Buyzaar Mart",
    description:
      "Learn how to start a grocery store franchise in Gorakhpur with The Buyzaar Mart. Cost from ₹15 Lakh, store setup, stocking, launch plan and full support.",
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