import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Rampur | Supermarket Franchise",
  description:
    "Start a Buyzaar Mart franchise in Rampur with managed supply chain, POS billing and launch support. Total investment from ₹15 Lakh. Call +91 9217991727.",
  keywords: [
    "buyzaar mart franchise rampur",
    "the buyzaar mart franchise",
    "buyzaar mart franchise cost",
    "buyzaar mart franchise investment",
    "buyzaar mart franchise contact number",
    "buyzaar mart franchise apply online",
    "buyzaar mart franchise registration",
    "buyzaar mart franchise opportunity",
    "supermarket franchise in rampur",
    "grocery franchise in rampur",
    "mart franchise rampur",
    "retail franchise in rampur",
    "FOCM franchise rampur",
    "mini mart franchise rampur",
    "super mart franchise rampur",
    "hyper mart franchise rampur",
    "grocery franchise under 20 lakh",
    "low investment supermarket franchise",
    "supermarket franchise in uttar pradesh",
    "franchise business opportunity rampur",
    "neighbourhood supermarket franchise india",
    "supermarket franchise with full support",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-rampur",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Rampur | Supermarket Franchise",
    description:
      "Start a Buyzaar Mart franchise in Rampur with managed supply chain, POS billing and launch support. Total investment from ₹15 Lakh. Call +91 9217991727.",
    url: "https://www.thebuyzaarmart.com/rampur/buyzaar-mart-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Rampur | Supermarket Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Rampur | Supermarket Franchise",
    description:
      "Start a Buyzaar Mart franchise in Rampur with managed supply chain, POS billing and launch support. Total investment from ₹15 Lakh. Call +91 9217991727.",
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