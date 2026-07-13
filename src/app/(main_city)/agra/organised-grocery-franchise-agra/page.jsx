import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Grocery Franchise in Agra | Buyzaar Mart",
  description:
    "Invest in an organised grocery franchise in Agra with Buyzaar Mart's zero-royalty, Company-Managed model. Explore store formats, investment, and process.",
  keywords: [
    "organised grocery franchise Agra",
    "Buyzaar Mart franchise Agra",
    "organized retail franchise Agra",
    "grocery store franchise Agra",
    "zero royalty franchise Agra",
    "branded grocery store Agra",
    "Mini Mart Super Mart Hyper Mart",
    "company managed franchise Agra",
    "retail investment Agra",
    "Buyzaar Mart organised retail",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/organised-grocery-franchise-in-agra",
  },
  openGraph: {
    title: "Organised Grocery Franchise in Agra | Buyzaar Mart",
    description:
      "Invest in an organised grocery franchise in Agra with Buyzaar Mart's zero-royalty, Company-Managed model. Explore store formats, investment, and process.",
    url: "https://www.thebuyzaarmart.com/agra/organised-grocery-franchise-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Grocery Franchise in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Grocery Franchise in Agra | Buyzaar Mart",
    description:
      "Invest in an organised grocery franchise in Agra with Buyzaar Mart's zero-royalty, Company-Managed model. Explore store formats, investment, and process.",
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