import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Neighbourhood Store Franchise Opportunity in Agra | The Buyzaar Mart",
  description:
    "Explore the best neighbourhood store franchise opportunity in Agra with The Buyzaar Mart. Affordable investment, full brand support, and high returns in Agra's growing retail market.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/neighbourhood-store-franchise-opportunity-agra",
  },
  openGraph: {
    title: "Neighbourhood Store Franchise Opportunity in Agra | The Buyzaar Mart",
    description:
      "Explore the best neighbourhood store franchise opportunity in Agra with The Buyzaar Mart. Affordable investment, full brand support, and high returns in Agra's growing retail market.",
    url: "https://www.thebuyzaarmart.com/agra/neighbourhood-store-franchise-opportunity-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Neighbourhood Store Franchise Opportunity in Agra | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighbourhood Store Franchise Opportunity in Agra | The Buyzaar Mart",
    description:
      "Explore the best neighbourhood store franchise opportunity in Agra with The Buyzaar Mart. Affordable investment, full brand support, and high returns in Agra's growing retail market.",
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