import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Minimum Investment Retail Franchise Kanpur | The Buyzaar Mart - Start at ₹15L",
  description:
    "Start a retail franchise in Kanpur from just ₹15 lakh with The Buyzaar Mart. Mini Mart & Super Mart options, FOCM model, professional support & 18-20% margins. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/retail-chain-franchise-kanpur",
  },
  openGraph: {
    title:
      "Minimum Investment Retail Franchise Kanpur | The Buyzaar Mart - Start at ₹15L",
    description:
      "Start a retail franchise in Kanpur from just ₹15 lakh with The Buyzaar Mart. Mini Mart & Super Mart options, FOCM model, professional support & 18-20% margins. Apply now!",
    url: "https://www.thebuyzaarmart.com/kanpur/retail-chain-franchise-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Minimum Investment Retail Franchise Kanpur | The Buyzaar Mart - Start at ₹15L",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Minimum Investment Retail Franchise Kanpur | The Buyzaar Mart - Start at ₹15L",
    description:
      "Start a retail franchise in Kanpur from just ₹15 lakh with The Buyzaar Mart. Mini Mart & Super Mart options, FOCM model, professional support & 18-20% margins. Apply now!",
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