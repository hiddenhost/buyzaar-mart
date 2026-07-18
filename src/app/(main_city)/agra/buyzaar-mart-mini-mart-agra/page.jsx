import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Mini Mart Franchise in Agra | Buyzaar Mart",
  description:
    "Open a Buyzaar Mart MiniMart franchise in Agra — low investment, POS billing & full brand support for residential localities. Enquire now to get started!",
  keywords: [
    "Buyzaar Mart MiniMart Agra",
    "mini mart franchise Agra",
    "low investment grocery franchise Agra",
    "small grocery store franchise India",
    "MiniMart format Buyzaar Mart",
    "entry level retail franchise Agra",
    "neighborhood mini mart franchise",
    "FOCM mini mart franchise",
    "grocery franchise residential colony Agra",
    "mini supermarket franchise UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/buyzaar-mart-mini-mart-agra",
  },
  openGraph: {
    title: "Buyzaar Mart Mini Mart Franchise in Agra | Buyzaar Mart",
    description:
      "Open a Buyzaar Mart MiniMart franchise in Agra — low investment, POS billing & full brand support for residential localities. Enquire now to get started!",
    url: "https://www.thebuyzaarmart.com/agra/buyzaar-mart-mini-mart-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Mini Mart Franchise in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Mini Mart Franchise in Agra | Buyzaar Mart",
    description:
      "Open a Buyzaar Mart MiniMart franchise in Agra — low investment, POS billing & full brand support for residential localities. Enquire now to get started!",
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