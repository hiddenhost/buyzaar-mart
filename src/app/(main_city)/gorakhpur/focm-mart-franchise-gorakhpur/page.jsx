import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Mart Franchise Gorakhpur | The Buyzaar Mart",
  description:
    "Open a FOCM mart franchise in Gorakhpur with The Buyzaar Mart. You own the store, the company manages it. Start from ₹15 Lakh. Apply today!",
  keywords: [
    "focm mart franchise gorakhpur",
    "focm franchise gorakhpur",
    "mart franchise gorakhpur",
    "the buyzaar mart gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "grocery franchise gorakhpur",
    "supermarket franchise gorakhpur",
    "franchise owned company managed",
    "focm model franchise",
    "retail franchise gorakhpur",
    "franchise business in gorakhpur",
    "open mart in gorakhpur",
    "grocery mart franchise gorakhpur",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "low investment franchise gorakhpur",
    "franchise opportunity gorakhpur",
    "supermarket business gorakhpur",
    "buyzaar mart dealership",
    "passive income franchise gorakhpur",
    "grocery store franchise uttar pradesh",
    "franchise business opportunity india",
    "retail franchise business india",
    "best franchise in gorakhpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/focm-mart-franchise-gorakhpur",
  },
  openGraph: {
    title: "FOCM Mart Franchise Gorakhpur | The Buyzaar Mart",
    description:
      "Open a FOCM mart franchise in Gorakhpur with The Buyzaar Mart. You own the store, the company manages it. Start from ₹15 Lakh. Apply today!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/focm-mart-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Mart Franchise Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Mart Franchise Gorakhpur | The Buyzaar Mart",
    description:
      "Open a FOCM mart franchise in Gorakhpur with The Buyzaar Mart. You own the store, the company manages it. Start from ₹15 Lakh. Apply today!",
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