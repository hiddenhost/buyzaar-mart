import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Mart Franchise in Gorakhpur | The Buyzaar Mart",
  description:
    "FOCO mart franchise in Gorakhpur from ₹15 Lakh. Compare Mini, Super & Hyper Mart formats; The Buyzaar Mart operates the store, you own it. Apply now!",
  keywords: [
    "FOCO mart franchise Gorakhpur",
    "FOCO mart franchise",
    "FOCO franchise Gorakhpur",
    "FOCO mini mart",
    "FOCO super mart",
    "FOCO hyper mart",
    "Franchise Owned Company Operated mart",
    "company operated mart franchise",
    "Buyzaar Mart FOCO",
    "Buyzaar Mart franchise Gorakhpur",
    "mini mart franchise Gorakhpur",
    "super mart franchise Gorakhpur",
    "hyper mart franchise Gorakhpur",
    "mart franchise investment Gorakhpur",
    "mart franchise cost Gorakhpur",
    "passive mart franchise",
    "hands-off mart franchise",
    "revenue sharing mart franchise",
    "franchise for shop owners",
    "FOCO vs FOCM mart",
    "supermarket franchise Gorakhpur",
    "franchise from 15 lakh",
    "franchise business Gorakhpur",
    "retail franchise Uttar Pradesh",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/foco-mart-franchise-gorakhpur",
  },
  openGraph: {
    title: "FOCO Mart Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "FOCO mart franchise in Gorakhpur from ₹15 Lakh. Compare Mini, Super & Hyper Mart formats; The Buyzaar Mart operates the store, you own it. Apply now!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/foco-mart-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Mart Franchise in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Mart Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "FOCO mart franchise in Gorakhpur from ₹15 Lakh. Compare Mini, Super & Hyper Mart formats; The Buyzaar Mart operates the store, you own it. Apply now!",
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