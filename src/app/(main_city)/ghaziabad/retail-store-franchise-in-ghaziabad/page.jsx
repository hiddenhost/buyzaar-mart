import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";
import { Key } from "lucide-react";

export const metadata = {
  title:
    "Retail Store Franchise in Ghaziabad | The Buyzaar Mart",
  description:
    "Start a retail store franchise in Ghaziabad with The Buyzaar Mart. Investment from ₹10 lakhs, full setup & supply chain support. Book your free consultation now!",
  Keywords: [
    "retail store franchise in Ghaziabad",
    "neighbourhood store franchise in Ghaziabad",  
    "grocery store franchise in Ghaziabad",
    "convenience store franchise in Ghaziabad",
    "supermarket franchise in Ghaziabad",
    "best retail franchise in Ghaziabad",
    "retail business opportunity in Ghaziabad",
    "franchise for retail store in Ghaziabad",
    "retail store franchise cost in Ghaziabad",
    "how to start retail store franchise in Ghaziabad",
    "retail store franchise near me in Ghaziabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/ghaziabad/retail-store-franchise-in-ghaziabad",
  },
  openGraph: {
    title:
      "Retail Store Franchise in Ghaziabad | The Buyzaar Mart",
    description:
      "Start a retail store franchise in Ghaziabad with The Buyzaar Mart. Investment from ₹10 lakhs, full setup & supply chain support. Book your free consultation now!",
    url: "https://www.thebuyzaarmart.com/ghaziabad/retail-store-franchise-in-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Store Franchise in Ghaziabad 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Retail Store Franchise in Ghaziabad | The Buyzaar Mart",
    description:
      "Start a retail store franchise in Ghaziabad with The Buyzaar Mart. Investment from ₹10 lakhs, full setup & supply chain support. Book your free consultation now!",
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