import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Grocery Franchise Business in Agra | The Buyzaar Mart",
  description:
    "Start a daily grocery franchise business in Agra with The Buyzaar Mart. Low investment, POS billing, full brand support. MiniMart to HyperMart formats. Enquire now!",
  keywords: [
    "daily grocery franchise Agra",
    "grocery franchise business Agra",
    "supermarket franchise Agra",
    "daily needs retail franchise",
    "Buyzaar Mart Agra franchise",
    "low investment grocery business Agra",
    "mini mart franchise Agra",
    "FOCM grocery franchise India",
    "neighborhood grocery franchise UP",
    "POS billing grocery franchise",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/daily-grocery-franchise-business-in-agra",
  },
  openGraph: {
    title: "Daily Grocery Franchise Business in Agra | The Buyzaar Mart",
    description:
      "Start a daily grocery franchise business in Agra with The Buyzaar Mart. Low investment, POS billing, full brand support. MiniMart to HyperMart formats. Enquire now!",
    url: "https://www.thebuyzaarmart.com/agra/daily-grocery-franchise-business-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Grocery Franchise Business in Agra | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Grocery Franchise Business in Agra | The Buyzaar Mart",
    description:
      "Start a daily grocery franchise business in Agra with The Buyzaar Mart. Low investment, POS billing, full brand support. MiniMart to HyperMart formats. Enquire now!",
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