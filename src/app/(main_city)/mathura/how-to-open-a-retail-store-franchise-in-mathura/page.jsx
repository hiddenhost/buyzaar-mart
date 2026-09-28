import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Retail Store Franchise in Mathura | Buyzaar Mart Guide",
  description:
    "Learn how to open a retail store franchise in Mathura. Customer-first tips on location, store design, launch, and investment from ₹15 Lakh with Buyzaar Mart.",
  keywords: [
    "how to open retail store franchise Mathura",
    "retail store franchise Mathura",
    "Buyzaar Mart retail store",
    "open retail store Mathura",
    "retail franchise Mathura guide",
    "neighborhood store franchise Mathura",
    "grocery retail store franchise",
    "retail store franchise investment Mathura",
    "retail store location selection Mathura",
    "store layout design franchise",
    "retail store launch plan Mathura",
    "customer-first retail franchise",
    "retail franchise Uttar Pradesh",
    "Mini Mart Super Mart Hyper Mart Mathura",
    "retail store franchise registrations",
    "FSSAI GST trade license retail store",
    "retail store franchise training support",
    "retail store repeat customers",
    "POS billing retail franchise",
    "retail franchise low investment Mathura",
    "retail store franchise checklist",
    "start retail store franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/how-to-open-a-retail-store-franchise-in-mathura",
  },
  openGraph: {
    title:
      "How to Open a Retail Store Franchise in Mathura | Buyzaar Mart Guide",
    description:
      "Learn how to open a retail store franchise in Mathura. Customer-first tips on location, store design, launch, and investment from ₹15 Lakh with Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/mathura/how-to-open-a-retail-store-franchise-in-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Retail Store Franchise in Mathura | Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Open a Retail Store Franchise in Mathura | Buyzaar Mart Guide",
    description:
      "Learn how to open a retail store franchise in Mathura. Customer-first tips on location, store design, launch, and investment from ₹15 Lakh with Buyzaar Mart.",
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