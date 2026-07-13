import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise With Zero Royalty in Agra | Buyzaar Mart",
  description:
    "Explore a zero-royalty grocery store franchise opportunity in Agra with Buyzaar Mart's Company-Managed, profit-sharing model. Investment, benefits, and process.",
  keywords: [
    "zero royalty franchise Agra",
    "grocery franchise no royalty",
    "Buyzaar Mart zero royalty",
    "profit sharing franchise Agra",
    "no royalty grocery store Agra",
    "Buyzaar Mart Agra franchise",
    "company managed franchise Agra",
    "low cost franchise no royalty",
    "grocery store franchise India",
    "Buyzaar Mart profit sharing model",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/grocery-store-franchise-with-zero-royalty-in-agra",
  },
  openGraph: {
    title: "Grocery Store Franchise With Zero Royalty in Agra | Buyzaar Mart",
    description:
      "Explore a zero-royalty grocery store franchise opportunity in Agra with Buyzaar Mart's Company-Managed, profit-sharing model. Investment, benefits, and process.",
    url: "https://www.thebuyzaarmart.com/agra/grocery-store-franchise-with-zero-royalty-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise With Zero Royalty in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise With Zero Royalty in Agra | Buyzaar Mart",
    description:
      "Explore a zero-royalty grocery store franchise opportunity in Agra with Buyzaar Mart's Company-Managed, profit-sharing model. Investment, benefits, and process.",
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