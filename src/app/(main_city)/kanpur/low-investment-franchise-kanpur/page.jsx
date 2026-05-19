import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Low Investment Franchise Kanpur | The Buyzaar Mart - From ₹15 Lakh",
  description:
    "Start your grocery franchise in Kanpur from ₹15 lakh with The Buyzaar Mart. FOCM model, full support, proven business model & 18-20% ROI. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/retail-chain-franchise-kanpur",
  },
  openGraph: {
    title: "Low Investment Franchise Kanpur | The Buyzaar Mart - From ₹15 Lakh",
    description:
      "Start your grocery franchise in Kanpur from ₹15 lakh with The Buyzaar Mart. FOCM model, full support, proven business model & 18-20% ROI. Apply now!",
    url: "https://www.thebuyzaarmart.com/kanpur/retail-chain-franchise-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Low Investment Franchise Kanpur | The Buyzaar Mart - From ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Investment Franchise Kanpur | The Buyzaar Mart - From ₹15 Lakh",
    description:
      "Start your grocery franchise in Kanpur from ₹15 lakh with The Buyzaar Mart. FOCM model, full support, proven business model & 18-20% ROI. Apply now!",
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