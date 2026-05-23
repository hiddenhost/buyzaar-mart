import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Most Profitable Franchise in Faridabad 2025 | The Buyzaar Mart",
  description:
    "Looking for a profitable franchise in Faridabad? Start your own Buyzaar Mart Supermart from ₹69.5 Lakh. FOCM/FOCO model, full brand support, POS system & supply chain included. Apply now.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/faridabad/most-profitable-franchise-faridabad",
  },
  openGraph: {
    title: "Most Profitable Franchise in Faridabad 2025 | The Buyzaar Mart",
    description:
      "Looking for a profitable franchise in Faridabad? Start your own Buyzaar Mart Supermart from ₹69.5 Lakh. FOCM/FOCO model, full brand support, POS system & supply chain included. Apply now.",
    url: "https://www.thebuyzaarmart.com/faridabad/most-profitable-franchise-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Most Profitable Franchise in Faridabad 2025 | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Most Profitable Franchise in Faridabad 2025 | The Buyzaar Mart",
    description:
      "Looking for a profitable franchise in Faridabad? Start your own Buyzaar Mart Supermart from ₹69.5 Lakh. FOCM/FOCO model, full brand support, POS system & supply chain included. Apply now.",
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