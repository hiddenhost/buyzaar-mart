import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Franchise in Hapur | The Buyzaar Mart",
  description:
    "Looking for the best grocery franchise in Hapur? The Buyzaar Mart offers POS billing, supply chain and full support. Total investment from ₹15 Lakh. Apply now.",
  keywords: [
    "best grocery franchise Hapur",
    "best grocery franchise in Hapur",
    "top grocery franchise Hapur",
    "best grocery store franchise Hapur",
    "grocery franchise Hapur",
    "Buyzaar Mart grocery franchise",
    "The Buyzaar Mart Hapur",
    "supermarket franchise Hapur",
    "retail franchise Hapur",
    "low investment grocery franchise Hapur",
    "grocery franchise from 15 lakh",
    "profitable grocery franchise Hapur",
    "FMCG store franchise Hapur",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "FOCM grocery franchise Hapur",
    "FOCO grocery franchise Hapur",
    "branded grocery franchise Hapur",
    "grocery franchise with full support",
    "grocery franchise with training",
    "grocery franchise Delhi NCR",
    "grocery franchise Uttar Pradesh",
    "franchise business opportunity Hapur",
    "neighbourhood grocery franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/best-grocery-franchise-hapur",
  },
  openGraph: {
    title: "Best Grocery Franchise in Hapur | The Buyzaar Mart",
    description:
      "Looking for the best grocery franchise in Hapur? The Buyzaar Mart offers POS billing, supply chain and full support. Total investment from ₹15 Lakh. Apply now.",
    url: "https://www.thebuyzaarmart.com/hapur/best-grocery-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Franchise in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Franchise in Hapur | The Buyzaar Mart",
    description:
      "Looking for the best grocery franchise in Hapur? The Buyzaar Mart offers POS billing, supply chain and full support. Total investment from ₹15 Lakh. Apply now.",
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