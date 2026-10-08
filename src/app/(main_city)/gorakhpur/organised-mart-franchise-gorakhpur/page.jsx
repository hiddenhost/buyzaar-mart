import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Mart Franchise in Gorakhpur | The Buyzaar Mart",
  description:
    "Open an organised mart franchise in Gorakhpur with The Buyzaar Mart. POS billing, managed supply and stock take-back, from ₹15 Lakh. Apply today!",
  keywords: [
    "organised mart franchise gorakhpur",
    "organized mart franchise gorakhpur",
    "organised retail franchise gorakhpur",
    "organised retail gorakhpur",
    "organised grocery franchise gorakhpur",
    "mart franchise gorakhpur",
    "the buyzaar mart gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "branded mart franchise gorakhpur",
    "supermarket franchise gorakhpur",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "retail franchise gorakhpur",
    "franchise business in gorakhpur",
    "franchise opportunity gorakhpur",
    "low investment mart franchise gorakhpur",
    "focm mart franchise gorakhpur",
    "fofo mart franchise gorakhpur",
    "pos billing grocery franchise",
    "organised retail franchise uttar pradesh",
    "organised retail franchise india",
    "supermarket franchise india",
    "buyzaar mart dealership",
    "neighbourhood mart franchise gorakhpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/organised-mart-franchise-gorakhpur",
  },
  openGraph: {
    title: "Organised Mart Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Open an organised mart franchise in Gorakhpur with The Buyzaar Mart. POS billing, managed supply and stock take-back, from ₹15 Lakh. Apply today!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/organised-mart-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Mart Franchise in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Mart Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Open an organised mart franchise in Gorakhpur with The Buyzaar Mart. POS billing, managed supply and stock take-back, from ₹15 Lakh. Apply today!",
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