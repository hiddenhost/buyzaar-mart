import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Details Gorakhpur | Cost & Models",
  description:
    "Get Buyzaar Mart franchise details for Gorakhpur: investment from ₹15 lakh, FOCM & FOCO models, store sizes, support and how to apply. Call 9217991727.",
  keywords: [
    "Buyzaar Mart franchise details Gorakhpur",
    "Buyzaar Mart franchise Gorakhpur",
    "The Buyzaar Mart",
    "franchise details Gorakhpur",
    "grocery franchise details",
    "grocery franchise in Gorakhpur",
    "supermarket franchise Gorakhpur",
    "grocery franchise Uttar Pradesh",
    "grocery franchise 15 lakh",
    "franchise investment details India",
    "low investment grocery franchise India",
    "FOCM franchise India",
    "FOCO franchise India",
    "franchise owned company managed",
    "franchise owned company operated",
    "Mini Mart franchise Gorakhpur",
    "Super Mart franchise Gorakhpur",
    "Hyper Mart franchise Gorakhpur",
    "retail franchise Gorakhpur",
    "FMCG store franchise",
    "grocery franchise with full support",
    "supermarket franchise cost India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-franchise-details-gorakhpur",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Details Gorakhpur | Cost & Models",
    description:
      "Get Buyzaar Mart franchise details for Gorakhpur: investment from ₹15 lakh, FOCM & FOCO models, store sizes, support and how to apply. Call 9217991727.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/buyzaar-mart-franchise-details-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Details Gorakhpur | Cost & Models",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Details Gorakhpur | Cost & Models",
    description:
      "Get Buyzaar Mart franchise details for Gorakhpur: investment from ₹15 lakh, FOCM & FOCO models, store sizes, support and how to apply. Call 9217991727.",
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