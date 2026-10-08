import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Opportunity in Gorakhpur | Buyzaar Mart",
  description:
    "Explore a supermarket franchise opportunity in Gorakhpur with The Buyzaar Mart. Super Mart and Hyper Mart formats from ₹15 Lakh with full support. Apply now!",
  keywords: [
    "supermarket franchise opportunity gorakhpur",
    "supermarket franchise opportunity in gorakhpur",
    "supermarket franchise gorakhpur",
    "supermarket franchise business gorakhpur",
    "open supermarket in gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "mini mart franchise gorakhpur",
    "the buyzaar mart gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "grocery franchise gorakhpur",
    "mart franchise gorakhpur",
    "retail franchise gorakhpur",
    "franchise opportunity gorakhpur",
    "franchise business in gorakhpur",
    "low investment supermarket franchise gorakhpur",
    "focm supermarket franchise gorakhpur",
    "fofo supermarket franchise gorakhpur",
    "supermarket business opportunity gorakhpur",
    "supermarket franchise uttar pradesh",
    "supermarket franchise opportunity india",
    "supermarket franchise india",
    "supermarket franchise cost india",
    "buyzaar mart dealership",
    "self service store franchise gorakhpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/supermarket-franchise-opportunity-gorakhpur",
  },
  openGraph: {
    title: "Supermarket Franchise Opportunity in Gorakhpur | Buyzaar Mart",
    description:
      "Explore a supermarket franchise opportunity in Gorakhpur with The Buyzaar Mart. Super Mart and Hyper Mart formats from ₹15 Lakh with full support. Apply now!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/supermarket-franchise-opportunity-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Opportunity in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Opportunity in Gorakhpur | Buyzaar Mart",
    description:
      "Explore a supermarket franchise opportunity in Gorakhpur with The Buyzaar Mart. Super Mart and Hyper Mart formats from ₹15 Lakh with full support. Apply now!",
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