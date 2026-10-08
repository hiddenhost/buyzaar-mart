import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Opportunity in Gorakhpur | The Buyzaar Mart",
  description:
    "Explore a franchise opportunity in Gorakhpur with The Buyzaar Mart. Open a Mini, Super or Hyper Mart from ₹15 Lakh with full support. Apply today!",
  keywords: [
    "franchise opportunity in gorakhpur",
    "franchise opportunity gorakhpur",
    "franchise business in gorakhpur",
    "franchise business opportunity gorakhpur",
    "best franchise opportunity gorakhpur",
    "retail franchise opportunity gorakhpur",
    "grocery franchise opportunity gorakhpur",
    "supermarket franchise gorakhpur",
    "mart franchise gorakhpur",
    "the buyzaar mart gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "low investment franchise gorakhpur",
    "focm franchise gorakhpur",
    "fofo franchise gorakhpur",
    "start franchise in gorakhpur",
    "franchise with low investment uttar pradesh",
    "franchise opportunity uttar pradesh",
    "retail franchise business india",
    "supermarket franchise india",
    "franchise business opportunity india",
    "buyzaar mart dealership",
    "passive income franchise gorakhpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/franchise-opportunity-in-gorakhpur",
  },
  openGraph: {
    title: "Franchise Opportunity in Gorakhpur | The Buyzaar Mart",
    description:
      "Explore a franchise opportunity in Gorakhpur with The Buyzaar Mart. Open a Mini, Super or Hyper Mart from ₹15 Lakh with full support. Apply today!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/franchise-opportunity-in-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Opportunity in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Opportunity in Gorakhpur | The Buyzaar Mart",
    description:
      "Explore a franchise opportunity in Gorakhpur with The Buyzaar Mart. Open a Mini, Super or Hyper Mart from ₹15 Lakh with full support. Apply today!",
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