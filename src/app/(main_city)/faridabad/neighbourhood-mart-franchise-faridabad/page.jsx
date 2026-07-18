import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Neighbourhood Mart Franchise Faridabad | Buyzaar Mart",
  description:
    "Own a neighbourhood mart franchise in Faridabad with The Buyzaar Mart. FOCM & FOCO models from ₹15 Lakh. Full setup, supply chain, POS & brand support. Apply today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/faridabad/neighbourhood-mart-franchise-faridabad",
  },
  openGraph: {
    title: "Neighbourhood Mart Franchise Faridabad | Buyzaar Mart",
    description:
      "Own a neighbourhood mart franchise in Faridabad with The Buyzaar Mart. FOCM & FOCO models from ₹15 Lakh. Full setup, supply chain, POS & brand support. Apply today!",
    url: "https://www.thebuyzaarmart.com/faridabad/neighbourhood-mart-franchise-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Mart Franchise Faridabad | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighbourhood Mart Franchise Faridabad | Buyzaar Mart",
    description:
      "Own a neighbourhood mart franchise in Faridabad with The Buyzaar Mart. FOCM & FOCO models from ₹15 Lakh. Full setup, supply chain, POS & brand support. Apply today!",
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