import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Opportunity Gorakhpur | The Buyzaar Mart",
  description:
    "Explore a grocery franchise opportunity in Gorakhpur with The Buyzaar Mart. Start from ₹15 Lakh with 18–20% gross margin, full setup & support. Apply now!",
  keywords: [
    "grocery franchise opportunity gorakhpur",
    "grocery franchise gorakhpur",
    "grocery store franchise gorakhpur",
    "supermarket franchise gorakhpur",
    "mart franchise gorakhpur",
    "the buyzaar mart gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "retail franchise opportunity gorakhpur",
    "franchise business opportunity gorakhpur",
    "low investment grocery franchise gorakhpur",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "grocery business opportunity gorakhpur",
    "open grocery store in gorakhpur",
    "fmcg franchise gorakhpur",
    "focm grocery franchise gorakhpur",
    "fofo grocery franchise gorakhpur",
    "franchise opportunity gorakhpur",
    "grocery franchise uttar pradesh",
    "supermarket franchise india",
    "grocery franchise india",
    "buyzaar mart dealership",
    "neighbourhood store franchise gorakhpur",
    "profitable grocery franchise gorakhpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/grocery-franchise-opportunity-gorakhpur",
  },
  openGraph: {
    title: "Grocery Franchise Opportunity Gorakhpur | The Buyzaar Mart",
    description:
      "Explore a grocery franchise opportunity in Gorakhpur with The Buyzaar Mart. Start from ₹15 Lakh with 18–20% gross margin, full setup & support. Apply now!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/grocery-franchise-opportunity-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Opportunity Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Opportunity Gorakhpur | The Buyzaar Mart",
    description:
      "Explore a grocery franchise opportunity in Gorakhpur with The Buyzaar Mart. Start from ₹15 Lakh with 18–20% gross margin, full setup & support. Apply now!",
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