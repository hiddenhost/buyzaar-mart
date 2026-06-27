import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Explore a supermarket franchise in Varanasi with The Buyzaar Mart. Get brand support, POS billing, store setup guidance, and a proven retail business model.",
  keywords: [
    "supermarket franchise Varanasi",
    "The Buyzaar Mart Varanasi",
    "grocery supermarket franchise UP",
    "retail franchise opportunity Varanasi",
    "supermarket business Varanasi",
    "POS billing supermarket",
    "mini supermarket franchise",
    "organized retail Varanasi",
    "supermarket investment Varanasi",
    "franchise store Varanasi",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/supermarket-franchise-in-varanasi",
  },
  openGraph: {
    title: "Supermarket Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Explore a supermarket franchise in Varanasi with The Buyzaar Mart. Get brand support, POS billing, store setup guidance, and a proven retail business model.",
    url: "https://www.thebuyzaarmart.com/varanasi/supermarket-franchise-in-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Explore a supermarket franchise in Varanasi with The Buyzaar Mart. Get brand support, POS billing, store setup guidance, and a proven retail business model.",
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