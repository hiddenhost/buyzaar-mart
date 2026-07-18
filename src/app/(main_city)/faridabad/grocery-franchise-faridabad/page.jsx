import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise in Faridabad | The Buyzaar Mart",
  description:
    "Looking for a grocery franchise in Faridabad? The Buyzaar Mart offers FOCM & FOCO models starting at ₹15 Lakh with full setup, supply chain & brand support. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/faridabad/grocery-franchise-faridabad",
  },
  openGraph: {
    title: "Grocery Franchise in Faridabad | The Buyzaar Mart",
    description:
      "Looking for a grocery franchise in Faridabad? The Buyzaar Mart offers FOCM & FOCO models starting at ₹15 Lakh with full setup, supply chain & brand support. Apply now!",
    url: "https://www.thebuyzaarmart.com/faridabad/grocery-franchise-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise in Faridabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise in Faridabad | The Buyzaar Mart",
    description:
      "Looking for a grocery franchise in Faridabad? The Buyzaar Mart offers FOCM & FOCO models starting at ₹15 Lakh with full setup, supply chain & brand support. Apply now!",
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