import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "FMCG Store Franchise Kanpur | The Buyzaar Mart | FOCM & FOCO Model",
  description:
    "Start your FMCG store franchise in Kanpur with The Buyzaar Mart. Explore the FOCM & FOCO franchise models, full investment breakdown, supply chain support & more. Apply from ₹15 Lakh. Visit thebuyzaarmart.com.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/fmcg-store-franchise-kanpur",
  },
  openGraph: {
    title:
      "FMCG Store Franchise Kanpur | The Buyzaar Mart | FOCM & FOCO Model",
    description:
      "Start your FMCG store franchise in Kanpur with The Buyzaar Mart. Explore the FOCM & FOCO franchise models, full investment breakdown, supply chain support & more. Apply from ₹15 Lakh. Visit thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/kanpur/fmcg-store-franchise-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Store Franchise Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FMCG Store Franchise Kanpur | The Buyzaar Mart | FOCM & FOCO Model",
    description:
      "Start your FMCG store franchise in Kanpur with The Buyzaar Mart. Explore the FOCM & FOCO franchise models, full investment breakdown, supply chain support & more. Apply from ₹15 Lakh. Visit thebuyzaarmart.com.",
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