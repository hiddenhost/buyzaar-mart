import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Grocery Franchise in Gurugram | The Buyzaar Mart FOCM Model",
  description:
    "Start a retail grocery franchise in Gurugram with The Buyzaar Mart. Explore Mini Mart, Super Mart, and Hyper Mart formats, investment details, and FOCM support.",
  keywords: [
    "retail grocery franchise Gurugram",
    "Buyzaar Mart franchise Gurugram",
    "supermarket franchise Gurugram",
    "FOCM franchise model",
    "Mini Mart Super Mart Hyper Mart",
    "grocery store franchise investment",
    "daily needs retail franchise Gurugram",
    "franchise business Gurugram",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/retail-grocery-franchise-gurugram",
  },
  openGraph: {
    title: "Retail Grocery Franchise in Gurugram | The Buyzaar Mart FOCM Model",
    description:
      "Start a retail grocery franchise in Gurugram with The Buyzaar Mart. Explore Mini Mart, Super Mart, and Hyper Mart formats, investment details, and FOCM support.",
    url: "https://www.thebuyzaarmart.com/gurgaon/retail-grocery-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Grocery Franchise in Gurugram | The Buyzaar Mart FOCM Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Grocery Franchise in Gurugram | The Buyzaar Mart FOCM Model",
    description:
      "Start a retail grocery franchise in Gurugram with The Buyzaar Mart. Explore Mini Mart, Super Mart, and Hyper Mart formats, investment details, and FOCM support.",
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