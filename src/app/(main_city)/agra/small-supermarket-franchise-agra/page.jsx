import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Small Supermarket Franchise in Agra | Buyzaar Mart Investment Guide",
  description:
    "Start a small supermarket franchise in Agra with Buyzaar Mart. Explore store formats, investment, location tips, and the application process.",
  keywords: [
    "small supermarket franchise Agra",
    "mini supermarket franchise Agra",
    "Buyzaar Mart Agra",
    "low investment supermarket franchise",
    "small grocery store franchise Agra",
    "Buyzaar Mart Mini Mart",
    "Buyzaar Mart Super Mart",
    "compact supermarket franchise India",
    "supermarket franchise cost Agra",
    "small retail franchise Agra",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/small-supermarket-franchise-agra",
  },
  openGraph: {
    title: "Small Supermarket Franchise in Agra | Buyzaar Mart Investment Guide",
    description:
      "Start a small supermarket franchise in Agra with Buyzaar Mart. Explore store formats, investment, location tips, and the application process.",
    url: "https://www.thebuyzaarmart.com/agra/small-supermarket-franchise-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Small Supermarket Franchise in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Supermarket Franchise in Agra | Buyzaar Mart Investment Guide",
    description:
      "Start a small supermarket franchise in Agra with Buyzaar Mart. Explore store formats, investment, location tips, and the application process.",
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