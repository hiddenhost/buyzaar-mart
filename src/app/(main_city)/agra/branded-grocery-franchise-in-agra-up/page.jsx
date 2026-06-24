import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Branded Grocery Franchise in Agra UP | The Buyzaar Mart",
  description:
    "Start a branded grocery franchise in Agra UP with The Buyzaar Mart. Proven FMCG retail model, full operational support, and strong ROI in Uttar Pradesh's growing market.",
  keywords: [
    "branded grocery franchise in Agra UP",
    "grocery franchise Uttar Pradesh",
    "FMCG retail franchise Agra",
    "supermarket franchise UP",
    "branded retail store franchise Agra",
    "Buyzaar Mart franchise opportunity",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/branded-grocery-franchise-in-agra-up",
  },
  openGraph: {
    title: "Branded Grocery Franchise in Agra UP | The Buyzaar Mart",
    description:
      "Start a branded grocery franchise in Agra UP with The Buyzaar Mart. Proven FMCG retail model, full operational support, and strong ROI in Uttar Pradesh's growing market.",
    url: "https://www.thebuyzaarmart.com/agra/branded-grocery-franchise-in-agra-up",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Branded Grocery Franchise in Agra UP | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded Grocery Franchise in Agra UP | The Buyzaar Mart",
    description:
      "Start a branded grocery franchise in Agra UP with The Buyzaar Mart. Proven FMCG retail model, full operational support, and strong ROI in Uttar Pradesh's growing market.",
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