import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Franchise Grocery Store in Lucknow | The Buyzaar Mart",
  description:
    "Invest in a FOCO grocery franchise in Lucknow with The Buyzaar Mart. Company-operated stores, passive income model, 3 formats and full support.",
  keywords: [
    "FOCO franchise grocery Lucknow",
    "FOCO franchise store Lucknow",
    "company operated franchise Lucknow",
    "The Buyzaar Mart FOCO",
    "passive income grocery franchise",
    "grocery franchise investment Lucknow",
    "retail franchise UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/foco-franchise-grocery-store-lucknow",
  },
  openGraph: {
    title: "FOCO Franchise Grocery Store in Lucknow | The Buyzaar Mart",
    description:
      "Invest in a FOCO grocery franchise in Lucknow with The Buyzaar Mart. Company-operated stores, passive income model, 3 formats and full support.",
    url: "https://www.thebuyzaarmart.com/lucknow/foco-franchise-grocery-store-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Franchise Grocery Store in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Franchise Grocery Store in Lucknow | The Buyzaar Mart",
    description:
      "Invest in a FOCO grocery franchise in Lucknow with The Buyzaar Mart. Company-operated stores, passive income model, 3 formats and full support.",
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