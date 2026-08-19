import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Business in Moradabad | The Buyzaar Mart",
  description:
    "Start a retail franchise business in Moradabad with The Buyzaar Mart. Proven grocery retail ecosystem, flexible ownership models, and full brand support.",
  keywords: [
    "retail franchise business moradabad",
    "buyzaar mart moradabad",
    "grocery retail franchise moradabad",
    "business ownership moradabad",
    "franchise investment moradabad",
    "organized retail moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/retail-franchise-business-in-moradabad",
  },
  openGraph: {
    title: "Retail Franchise Business in Moradabad | The Buyzaar Mart",
    description:
      "Start a retail franchise business in Moradabad with The Buyzaar Mart. Proven grocery retail ecosystem, flexible ownership models, and full brand support.",
    url: "https://www.thebuyzaarmart.com/moradabad/retail-franchise-business-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Business in Moradabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Business in Moradabad | The Buyzaar Mart",
    description:
      "Start a retail franchise business in Moradabad with The Buyzaar Mart. Proven grocery retail ecosystem, flexible ownership models, and full brand support.",
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