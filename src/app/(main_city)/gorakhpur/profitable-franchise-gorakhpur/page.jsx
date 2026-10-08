import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Profitable Franchise in Gorakhpur | The Buyzaar Mart",
  description:
    "Looking for a profitable franchise in Gorakhpur? Start a Buyzaar Mart grocery franchise from ₹15 Lakh with 18–20% gross margin and full support. Apply now!",
  keywords: [
    "profitable franchise gorakhpur",
    "profitable franchise in gorakhpur",
    "high profit franchise gorakhpur",
    "best profitable franchise gorakhpur",
    "franchise business in gorakhpur",
    "franchise opportunity gorakhpur",
    "grocery franchise gorakhpur",
    "supermarket franchise gorakhpur",
    "mart franchise gorakhpur",
    "the buyzaar mart gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "retail franchise gorakhpur",
    "low investment franchise gorakhpur",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "focm franchise gorakhpur",
    "franchise with high margin gorakhpur",
    "grocery franchise margin gorakhpur",
    "fmcg franchise gorakhpur",
    "profitable business in gorakhpur",
    "profitable franchise uttar pradesh",
    "profitable grocery franchise india",
    "supermarket franchise india",
    "buyzaar mart dealership",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/profitable-franchise-gorakhpur",
  },
  openGraph: {
    title: "Profitable Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Looking for a profitable franchise in Gorakhpur? Start a Buyzaar Mart grocery franchise from ₹15 Lakh with 18–20% gross margin and full support. Apply now!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/profitable-franchise-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Profitable Franchise in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profitable Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Looking for a profitable franchise in Gorakhpur? Start a Buyzaar Mart grocery franchise from ₹15 Lakh with 18–20% gross margin and full support. Apply now!",
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