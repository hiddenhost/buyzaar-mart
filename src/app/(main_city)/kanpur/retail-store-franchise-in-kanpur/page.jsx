import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";
export const metadata = {
  title: "Retail Store Franchise in Kanpur | Start with The Buyzaar Mart from ₹15 Lakh",
  description:
    "Looking for a retail store franchise in Kanpur? Join The Buyzaar Mart — India's trusted grocery & supermarket franchise. Low investment, full support & proven FOCM model. Apply today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
  },
  openGraph: {
    title: "Retail Store Franchise in Kanpur | Start with The Buyzaar Mart from ₹15 Lakh",
    description:
      "Looking for a retail store franchise in Kanpur? Join The Buyzaar Mart — India's trusted grocery & supermarket franchise. Low investment, full support & proven FOCM model. Apply today!",
    url: "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Store Franchise in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Store Franchise in Kanpur | Start with The Buyzaar Mart from ₹15 Lakh",
    description:
      "Looking for a retail store franchise in Kanpur? Join The Buyzaar Mart — India's trusted grocery & supermarket franchise. Low investment, full support & proven FOCM model. Apply today!",
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