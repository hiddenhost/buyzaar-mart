import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Investment in Gorakhpur | Buyzaar Mart",
  description:
    "Plan your grocery franchise investment in Gorakhpur with The Buyzaar Mart. Mini Mart from ₹15 Lakh, POS, training & inventory support. Apply now!",
  keywords: [
    "grocery franchise investment Gorakhpur",
    "grocery franchise in Gorakhpur",
    "grocery store franchise Gorakhpur",
    "supermarket franchise Gorakhpur",
    "Buyzaar Mart grocery franchise",
    "mini mart franchise Gorakhpur",
    "super mart franchise Gorakhpur",
    "hyper mart franchise Gorakhpur",
    "kirana to supermarket franchise",
    "grocery business in Gorakhpur",
    "open grocery store Gorakhpur",
    "low investment grocery franchise",
    "grocery franchise from 15 lakh",
    "FOCM franchise model",
    "FOCO franchise model",
    "zero royalty grocery franchise",
    "FMCG franchise Gorakhpur",
    "daily needs store franchise",
    "grocery franchise Uttar Pradesh",
    "best grocery franchise in India",
    "neighbourhood supermarket franchise",
    "grocery franchise profit margin",
    "grocery franchise cost",
    "franchise business in Gorakhpur",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/grocery-franchise-investment-gorakhpur",
  },
  openGraph: {
    title: "Grocery Franchise Investment in Gorakhpur | Buyzaar Mart",
    description:
      "Plan your grocery franchise investment in Gorakhpur with The Buyzaar Mart. Mini Mart from ₹15 Lakh, POS, training & inventory support. Apply now!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/grocery-franchise-investment-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment in Gorakhpur | Buyzaar Mart",
    description:
      "Plan your grocery franchise investment in Gorakhpur with The Buyzaar Mart. Mini Mart from ₹15 Lakh, POS, training & inventory support. Apply now!",
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