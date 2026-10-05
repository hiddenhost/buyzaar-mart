import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Investment in Gorakhpur | The Buyzaar Mart",
  description:
    "Mart franchise investment in Gorakhpur with The Buyzaar Mart. Compare Mini, Super & Hyper Mart formats, costs from ₹15 Lakh, POS & training. Apply now!",
  keywords: [
    "mart franchise investment Gorakhpur",
    "mart franchise in Gorakhpur",
    "mini mart franchise Gorakhpur",
    "super mart franchise Gorakhpur",
    "hyper mart franchise Gorakhpur",
    "supermarket franchise Gorakhpur",
    "Buyzaar Mart franchise Gorakhpur",
    "grocery mart franchise",
    "mart franchise cost",
    "mart franchise Uttar Pradesh",
    "mini mart franchise cost India",
    "super mart investment",
    "hypermarket franchise India",
    "FOCM FOCO franchise",
    "franchise from 15 lakh",
    "low investment supermarket franchise",
    "retail mart franchise",
    "neighbourhood mart franchise",
    "kirana to mart franchise",
    "mart business Gorakhpur",
    "franchise business Gorakhpur",
    "zero royalty mart franchise",
    "franchise opportunity UP",
    "FMCG mart franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/mart-franchise-investment-gorakhpur",
  },
  openGraph: {
    title: "Mart Franchise Investment in Gorakhpur | The Buyzaar Mart",
    description:
      "Mart franchise investment in Gorakhpur with The Buyzaar Mart. Compare Mini, Super & Hyper Mart formats, costs from ₹15 Lakh, POS & training. Apply now!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/mart-franchise-investment-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Investment in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Investment in Gorakhpur | The Buyzaar Mart",
    description:
      "Mart franchise investment in Gorakhpur with The Buyzaar Mart. Compare Mini, Super & Hyper Mart formats, costs from ₹15 Lakh, POS & training. Apply now!",
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