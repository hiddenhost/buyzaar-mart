import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Start an FOCM Grocery Franchise in Delhi | The Buyzaar Mart",
  description:
    "Looking for the best FOCM franchise in Delhi? Invest in The Buyzaar Mart's supermarket model. Zero operational headaches: you invest, we manage. High ROI!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/focm-grocery-franchise-delhi",
  },
  openGraph: {
    title: "Start an FOCM Grocery Franchise in Delhi | The Buyzaar Mart",
    description:
      "Looking for the best FOCM franchise in Delhi? Invest in The Buyzaar Mart's supermarket model. Zero operational headaches: you invest, we manage. High ROI!",
    url: "https://www.thebuyzaarmart.com/delhi/focm-grocery-franchise-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Start an FOCM Grocery Franchise in Delhi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start an FOCM Grocery Franchise in Delhi | The Buyzaar Mart",
    description:
      "Looking for the best FOCM franchise in Delhi? Invest in The Buyzaar Mart's supermarket model. Zero operational headaches: you invest, we manage. High ROI!",
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