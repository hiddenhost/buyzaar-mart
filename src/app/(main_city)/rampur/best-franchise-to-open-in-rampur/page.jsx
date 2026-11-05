import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Best Franchise to Open in Rampur | The Buyzaar Mart",
  description:
    "Looking for the best franchise to open in Rampur? Compare demand, support and costs, and see Buyzaar Mart’s FOCM and FOCO models. Total investment from ₹15 Lakh.",
  keywords: [
    "best franchise to open in rampur",
    "best franchise in rampur",
    "best franchise business rampur",
    "franchise opportunity in rampur",
    "franchise business in rampur",
    "profitable franchise rampur",
    "low investment franchise rampur",
    "retail franchise rampur",
    "grocery franchise rampur",
    "supermarket franchise rampur",
    "mart franchise rampur",
    "Buyzaar Mart rampur",
    "The Buyzaar Mart franchise",
    "FOCM franchise rampur",
    "FOCO franchise rampur",
    "Mini Mart franchise rampur",
    "Super Mart franchise rampur",
    "Hyper Mart franchise rampur",
    "grocery franchise 15 lakh",
    "supermarket franchise Uttar Pradesh",
    "supermarket franchise UP",
    "how to choose a franchise India",
    "franchise with full support",
    "Buyzaar Mart franchise apply",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/best-franchise-to-open-in-rampur",
  },
  openGraph: {
    title: "Best Franchise to Open in Rampur | The Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Rampur? Compare demand, support and costs, and see Buyzaar Mart’s FOCM and FOCO models. Total investment from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/rampur/best-franchise-to-open-in-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise to Open in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise to Open in Rampur | The Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Rampur? Compare demand, support and costs, and see Buyzaar Mart’s FOCM and FOCO models. Total investment from ₹15 Lakh.",
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