import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise with POS Billing in Agra | Buyzaar Mart",
  description:
    "Open a grocery store franchise in Agra with integrated POS billing, full brand support & low investment. MiniMart to HyperMart formats. Enquire now!",
  keywords: [
    "grocery store franchise Agra",
    "grocery franchise with POS billing",
    "supermarket franchise Agra",
    "POS billing system grocery store",
    "Buyzaar Mart franchise Agra",
    "low investment grocery franchise UP",
    "mini mart franchise Agra",
    "retail franchise with billing software",
    "FOCM grocery franchise",
    "neighborhood store franchise India",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/grocery-store-franchise-with-pos-billing-in-agra",
  },
  openGraph: {
    title: "Grocery Store Franchise with POS Billing in Agra | Buyzaar Mart",
    description:
      "Open a grocery store franchise in Agra with integrated POS billing, full brand support & low investment. MiniMart to HyperMart formats. Enquire now!",
    url: "https://www.thebuyzaarmart.com/agra/grocery-store-franchise-with-pos-billing-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise with POS Billing in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise with POS Billing in Agra | Buyzaar Mart",
    description:
      "Open a grocery store franchise in Agra with integrated POS billing, full brand support & low investment. MiniMart to HyperMart formats. Enquire now!",
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