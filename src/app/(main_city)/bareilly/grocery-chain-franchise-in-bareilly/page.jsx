import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Chain Franchise in Bareilly | Buyzaar Mart",
  description:
    "Join a growing grocery chain franchise in Bareilly with Buyzaar Mart. Proven retail model, brand support & strong return potential. Enquire today!",
  keywords: [
    "grocery chain franchise Bareilly",
    "Buyzaar Mart franchise",
    "grocery store chain Bareilly",
    "retail chain franchise India",
    "supermarket chain Bareilly",
    "organised grocery franchise",
    "branded grocery chain",
    "grocery business opportunity Bareilly",
    "mart chain franchise UP",
    "low investment grocery franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/grocery-chain-franchise-in-bareilly",
  },
  openGraph: {
    title: "Grocery Chain Franchise in Bareilly | Buyzaar Mart",
    description:
      "Join a growing grocery chain franchise in Bareilly with Buyzaar Mart. Proven retail model, brand support & strong return potential. Enquire today!",
    url: "https://www.thebuyzaarmart.com/bareilly/grocery-chain-franchise-in-bareilly",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Chain Franchise in Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Chain Franchise in Bareilly | Buyzaar Mart",
    description:
      "Join a growing grocery chain franchise in Bareilly with Buyzaar Mart. Proven retail model, brand support & strong return potential. Enquire today!",
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