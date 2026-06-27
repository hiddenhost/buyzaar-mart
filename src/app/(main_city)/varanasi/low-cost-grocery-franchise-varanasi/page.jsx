import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Low Cost Grocery Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Start a low cost grocery franchise in Varanasi with The Buyzaar Mart. Affordable investment, POS billing support, and a proven retail model for new entrepreneurs.",
  keywords: [
    "low cost grocery franchise Varanasi",
    "affordable grocery franchise",
    "The Buyzaar Mart Varanasi",
    "small investment retail franchise",
    "budget grocery store franchise",
    "low investment supermarket Varanasi",
    "grocery franchise UP",
    "mini grocery franchise",
    "cheap retail franchise opportunity",
    "grocery business low budget",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/low-cost-grocery-franchise-varanasi",
  },
  openGraph: {
    title: "Low Cost Grocery Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Start a low cost grocery franchise in Varanasi with The Buyzaar Mart. Affordable investment, POS billing support, and a proven retail model for new entrepreneurs.",
    url: "https://www.thebuyzaarmart.com/varanasi/low-cost-grocery-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Low Cost Grocery Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Cost Grocery Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Start a low cost grocery franchise in Varanasi with The Buyzaar Mart. Affordable investment, POS billing support, and a proven retail model for new entrepreneurs.",
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