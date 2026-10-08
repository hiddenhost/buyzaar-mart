import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Opportunity in Gorakhpur | Buyzaar Mart",
  description:
    "Explore a retail franchise opportunity in Gorakhpur with The Buyzaar Mart. Open a Mini, Super or Hyper Mart from ₹15 Lakh with full support. Apply today!",
  keywords: [
    "retail franchise opportunity gorakhpur",
    "retail franchise opportunity in gorakhpur",
    "retail franchise gorakhpur",
    "retail franchise business gorakhpur",
    "retail business opportunity gorakhpur",
    "grocery retail franchise gorakhpur",
    "supermarket franchise gorakhpur",
    "mart franchise gorakhpur",
    "the buyzaar mart gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "fmcg retail franchise gorakhpur",
    "franchise opportunity gorakhpur",
    "franchise business in gorakhpur",
    "low investment retail franchise gorakhpur",
    "focm retail franchise gorakhpur",
    "organised retail franchise gorakhpur",
    "retail franchise uttar pradesh",
    "retail franchise opportunity india",
    "retail franchise business india",
    "supermarket franchise india",
    "buyzaar mart dealership",
    "daily need retail franchise gorakhpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/retail-franchise-opportunity-gorakhpur",
  },
  openGraph: {
    title: "Retail Franchise Opportunity in Gorakhpur | Buyzaar Mart",
    description:
      "Explore a retail franchise opportunity in Gorakhpur with The Buyzaar Mart. Open a Mini, Super or Hyper Mart from ₹15 Lakh with full support. Apply today!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/retail-franchise-opportunity-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Opportunity in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Opportunity in Gorakhpur | Buyzaar Mart",
    description:
      "Explore a retail franchise opportunity in Gorakhpur with The Buyzaar Mart. Open a Mini, Super or Hyper Mart from ₹15 Lakh with full support. Apply today!",
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