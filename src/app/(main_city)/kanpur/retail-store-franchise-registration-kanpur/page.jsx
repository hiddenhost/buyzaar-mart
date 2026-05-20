import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Retail Store Franchise Registration in Kanpur | The Buyzaar Mart - ₹15 Lakh Investment",
  description:
    "Learn how to register a retail store franchise in Kanpur with The Buyzaar Mart. Complete franchise registration process, legal requirements, investment details, and step-by-step guidance for aspiring entrepreneurs.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
  },
  openGraph: {
    title:
      "Retail Store Franchise Registration in Kanpur | The Buyzaar Mart - ₹15 Lakh Investment",
    description:
      "Learn how to register a retail store franchise in Kanpur with The Buyzaar Mart. Complete franchise registration process, legal requirements, investment details, and step-by-step guidance for aspiring entrepreneurs.",
    url: "https://www.thebuyzaarmart.com/kanpur/retail-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Store Franchise Registration in Kanpur | The Buyzaar Mart - ₹15 Lakh Investment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Retail Store Franchise Registration in Kanpur | The Buyzaar Mart - ₹15 Lakh Investment",
    description:
      "Learn how to register a retail store franchise in Kanpur with The Buyzaar Mart. Complete franchise registration process, legal requirements, investment details, and step-by-step guidance for aspiring entrepreneurs.",
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