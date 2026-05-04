import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Store Franchise in Gurgaon | The Buyzaar Mart",
  description:
    "Own a retail store franchise in Gurgaon with The Buyzaar Mart. FOCM model — you invest, we manage everything. FSSAI licensed. Call 9217991727 for a free consultation!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/retail-store-franchise-in-gurgaon",
  },
  openGraph: {
    title: "Retail Store Franchise in Gurgaon | The Buyzaar Mart",
    description:
      "Own a retail store franchise in Gurgaon with The Buyzaar Mart. FOCM model — you invest, we manage everything. FSSAI licensed. Call 9217991727 for a free consultation!",
    url: "https://www.thebuyzaarmart.com/gurgaon/retail-store-franchise-in-gurgaon",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Store Franchise in Gurgaon | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Store Franchise in Gurgaon | The Buyzaar Mart",
    description:
      "Own a retail store franchise in Gurgaon with The Buyzaar Mart. FOCM model — you invest, we manage everything. FSSAI licensed. Call 9217991727 for a free consultation!",
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