import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Shop Franchise Opportunity in Rohilkhand Region | Buyzaar Mart",
  description:
    "Explore retail shop franchise opportunities across the Rohilkhand region with Buyzaar Mart. Organised retail, brand support & strong growth potential. Enquire now!",
  keywords: [
    "retail franchise Rohilkhand",
    "Buyzaar Mart franchise Rohilkhand",
    "mart franchise Bareilly Moradabad",
    "retail business opportunity UP",
    "grocery franchise Rohilkhand region",
    "organised retail Rohilkhand",
    "franchise opportunity Bareilly Rampur",
    "supermarket franchise Uttar Pradesh",
    "retail shop investment Rohilkhand",
    "branded mart franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/retail-shop-franchise-opportunity-in-rohilkhand-region",
  },
  openGraph: {
    title: "Retail Shop Franchise Opportunity in Rohilkhand Region | Buyzaar Mart",
    description:
      "Explore retail shop franchise opportunities across the Rohilkhand region with Buyzaar Mart. Organised retail, brand support & strong growth potential. Enquire now!",
    url: "https://www.thebuyzaarmart.com/bareilly/retail-shop-franchise-opportunity-in-rohilkhand-region",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Shop Franchise Opportunity in Rohilkhand Region | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Shop Franchise Opportunity in Rohilkhand Region | Buyzaar Mart",
    description:
      "Explore retail shop franchise opportunities across the Rohilkhand region with Buyzaar Mart. Organised retail, brand support & strong growth potential. Enquire now!",
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