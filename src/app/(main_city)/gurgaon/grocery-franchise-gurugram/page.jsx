import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise in Gurugram | Buyzaar Mart Supermarket Franchise",
  description:
    "Start a profitable grocery franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, full support, and high ROI. Enquire now!",
  keywords: [
    "grocery franchise Gurugram",
    "supermarket franchise Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "grocery store franchise India",
    "retail franchise Gurugram",
    "low investment supermarket franchise in Lucknow",
    "supermarket business opportunity",
    "franchise business India",
    "grocery retail chain",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/grocery-franchise-gurugram",
  },
  openGraph: {
    title: "Grocery Franchise in Gurugram | Buyzaar Mart Supermarket Franchise",
    description:
      "Start a profitable grocery franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, full support, and high ROI. Enquire now!",
    url: "https://www.thebuyzaarmart.com/gurgaon/grocery-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise in Gurugram | Buyzaar Mart Supermarket Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise in Gurugram | Buyzaar Mart Supermarket Franchise",
    description:
      "Start a profitable grocery franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, full support, and high ROI. Enquire now!",
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