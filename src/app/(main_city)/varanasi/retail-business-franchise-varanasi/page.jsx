import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Business Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Start a retail business franchise in Varanasi with The Buyzaar Mart. Explore store formats, pricing (Mini Mart ₹15 lakh onwards), franchise models, and how to apply.",
  keywords: [
    "retail business franchise Varanasi",
    "Buyzaar Mart Varanasi",
    "grocery franchise price India",
    "Mini Mart Super Mart Hyper Mart",
    "retail franchise Uttar Pradesh",
    "FOCM FOCO franchise",
    "supermarket franchise Varanasi",
    "low investment retail franchise",
    "organized retail Varanasi",
    "franchise business opportunity Varanasi",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/retail-business-franchise-varanasi",
  },
  openGraph: {
    title: "Retail Business Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Start a retail business franchise in Varanasi with The Buyzaar Mart. Explore store formats, pricing (Mini Mart ₹15 lakh onwards), franchise models, and how to apply.",
    url: "https://www.thebuyzaarmart.com/varanasi/retail-business-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Business Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Business Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Start a retail business franchise in Varanasi with The Buyzaar Mart. Explore store formats, pricing (Mini Mart ₹15 lakh onwards), franchise models, and how to apply.",
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