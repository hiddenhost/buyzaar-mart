import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business Investment in Gorakhpur | Buyzaar Mart",
  description:
    "Looking for franchise business investment in Gorakhpur? The Buyzaar Mart offers supermarket franchises from ₹15 Lakh with POS, training & support. Apply now!",
  keywords: [
    "franchise business investment Gorakhpur",
    "franchise business in Gorakhpur",
    "best franchise in Gorakhpur",
    "franchise opportunities Gorakhpur",
    "low investment franchise Gorakhpur",
    "franchise investment UP",
    "supermarket franchise Gorakhpur",
    "grocery franchise Gorakhpur",
    "retail franchise Gorakhpur",
    "Buyzaar Mart franchise",
    "franchise from 15 lakh",
    "mini mart franchise",
    "super mart franchise",
    "hyper mart franchise",
    "FOCM franchise model",
    "FOCO franchise model",
    "zero royalty franchise",
    "franchise business ideas Gorakhpur",
    "small investment business Gorakhpur",
    "profitable franchise India",
    "franchise for first-time entrepreneurs",
    "passive income franchise",
    "how to choose a franchise",
    "franchise cost and ROI",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/franchise-business-investment-gorakhpur",
  },
  openGraph: {
    title: "Franchise Business Investment in Gorakhpur | Buyzaar Mart",
    description:
      "Looking for franchise business investment in Gorakhpur? The Buyzaar Mart offers supermarket franchises from ₹15 Lakh with POS, training & support. Apply now!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/franchise-business-investment-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business Investment in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business Investment in Gorakhpur | Buyzaar Mart",
    description:
      "Looking for franchise business investment in Gorakhpur? The Buyzaar Mart offers supermarket franchises from ₹15 Lakh with POS, training & support. Apply now!",
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