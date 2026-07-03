import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise for Housewives in Prayagraj | The Buyzaar Mart",
  description:
    "Looking for a business opportunity as a housewife in Prayagraj? Start a grocery store franchise with The Buyzaar Mart — low involvement, full operational support, and steady income.",
  keywords: [
    "grocery franchise for housewife Prayagraj",
    "business for housewives Prayagraj",
    "women entrepreneur franchise UP",
    "The Buyzaar Mart franchise",
    "home business opportunity Prayagraj",
    "part time business for women",
    "grocery store franchise women",
    "passive income business Prayagraj",
    "FOCM franchise housewife",
    "small investment franchise Prayagraj",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/grocery-store-franchise-for-housewife-prayagraj",
  },
  openGraph: {
    title: "Grocery Store Franchise for Housewives in Prayagraj | The Buyzaar Mart",
    description:
      "Looking for a business opportunity as a housewife in Prayagraj? Start a grocery store franchise with The Buyzaar Mart — low involvement, full operational support, and steady income.",
    url: "https://www.thebuyzaarmart.com/prayagraj/grocery-store-franchise-for-housewife-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise for Housewives in Prayagraj | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise for Housewives in Prayagraj | The Buyzaar Mart",
    description:
      "Looking for a business opportunity as a housewife in Prayagraj? Start a grocery store franchise with The Buyzaar Mart — low involvement, full operational support, and steady income.",
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