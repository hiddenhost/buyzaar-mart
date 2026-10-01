import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise from ₹15 Lakh in Gorakhpur | Buyzaar Mart",
  description:
    "Start a grocery franchise in Gorakhpur from ₹15 Lakh with The Buyzaar Mart. Get 18–20% gross margin, POS, supply chain and launch support. Apply today.",
  keywords: [
    "grocery franchise starting from 15 lakh Gorakhpur",
    "grocery franchise in Gorakhpur",
    "supermarket franchise Gorakhpur",
    "15 lakh franchise business",
    "low investment grocery franchise",
    "grocery franchise under 20 lakh",
    "The Buyzaar Mart franchise",
    "Buyzaar Mart Gorakhpur",
    "mini mart franchise Gorakhpur",
    "grocery franchise Uttar Pradesh",
    "supermarket franchise cost India",
    "FOCM franchise India",
    "franchise owned company managed",
    "best franchise business in Gorakhpur",
    "retail franchise in UP",
    "FMCG store franchise",
    "neighborhood supermarket franchise",
    "grocery store franchise India",
    "affordable supermarket franchise",
    "grocery franchise with full support",
    "franchise business opportunity in Gorakhpur",
    "kirana to supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/grocery-franchise-starting-from-15-lakh-gorakhpur",
  },
  openGraph: {
    title: "Grocery Franchise from ₹15 Lakh in Gorakhpur | Buyzaar Mart",
    description:
      "Start a grocery franchise in Gorakhpur from ₹15 Lakh with The Buyzaar Mart. Get 18–20% gross margin, POS, supply chain and launch support. Apply today.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/grocery-franchise-starting-from-15-lakh-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise from ₹15 Lakh in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise from ₹15 Lakh in Gorakhpur | Buyzaar Mart",
    description:
      "Start a grocery franchise in Gorakhpur from ₹15 Lakh with The Buyzaar Mart. Get 18–20% gross margin, POS, supply chain and launch support. Apply today.",
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