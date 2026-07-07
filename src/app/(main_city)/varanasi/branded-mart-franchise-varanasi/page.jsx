import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Branded Mart Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Discover the branded mart franchise opportunity in Varanasi with The Buyzaar Mart. Explore store formats, franchise models, investment details, and how to apply.",
  keywords: [
    "branded mart franchise Varanasi",
    "Buyzaar Mart Varanasi",
    "grocery franchise Varanasi",
    "supermarket franchise Varanasi",
    "FOCM FOCO franchise",
    "branded grocery store India",
    "Mini Mart Super Mart Hyper Mart",
    "retail franchise Uttar Pradesh",
    "organized retail Varanasi",
    "low investment franchise India",
    "Buyzaar Mart franchise model",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/branded-mart-franchise-varanasi",
  },
  openGraph: {
    title: "Branded Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Discover the branded mart franchise opportunity in Varanasi with The Buyzaar Mart. Explore store formats, franchise models, investment details, and how to apply.",
    url: "https://www.thebuyzaarmart.com/varanasi/branded-mart-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Branded Mart Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Discover the branded mart franchise opportunity in Varanasi with The Buyzaar Mart. Explore store formats, franchise models, investment details, and how to apply.",
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