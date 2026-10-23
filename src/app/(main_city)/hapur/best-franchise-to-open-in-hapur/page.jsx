import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise to Open in Hapur | The Buyzaar Mart",
  description:
    "Looking for the best franchise to open in Hapur? The Buyzaar Mart offers a supermarket franchise with full support. Total investment from ₹15 Lakh. Apply now.",
  keywords: [
    "best franchise to open in Hapur",
    "best franchise in Hapur",
    "best franchise business in Hapur",
    "franchise to open in Hapur",
    "top franchise Hapur",
    "Buyzaar Mart franchise Hapur",
    "The Buyzaar Mart Hapur",
    "supermarket franchise Hapur",
    "grocery franchise Hapur",
    "retail franchise Hapur",
    "low investment franchise Hapur",
    "franchise from 15 lakh",
    "profitable franchise Hapur",
    "FMCG franchise Hapur",
    "franchise business opportunity Hapur",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "supermarket franchise Delhi NCR",
    "supermarket franchise Uttar Pradesh",
    "franchise with training and support",
    "franchise with full support",
    "safe franchise investment Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/best-franchise-to-open-in-hapur",
  },
  openGraph: {
    title: "Best Franchise to Open in Hapur | The Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Hapur? The Buyzaar Mart offers a supermarket franchise with full support. Total investment from ₹15 Lakh. Apply now.",
    url: "https://www.thebuyzaarmart.com/hapur/best-franchise-to-open-in-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise to Open in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise to Open in Hapur | The Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Hapur? The Buyzaar Mart offers a supermarket franchise with full support. Total investment from ₹15 Lakh. Apply now.",
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