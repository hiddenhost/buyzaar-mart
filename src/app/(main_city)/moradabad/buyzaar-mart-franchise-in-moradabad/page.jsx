import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Buyzaar Mart Franchise in Moradabad | Investment & Store Formats",
  description:
    "Get a Buyzaar Mart franchise in Moradabad. Explore Mini Mart, Super Mart & Hyper Mart formats, investment from ₹15 lakh, FOCM/FOCO models, and full setup support.",
  keywords: [
    "Buyzaar Mart franchise Moradabad",
    "The Buyzaar Mart Moradabad",
    "grocery franchise Moradabad",
    "supermarket franchise Moradabad",
    "Mini Mart Super Mart Hyper Mart",
    "FOCM FOCO franchise model",
    "low investment franchise Uttar Pradesh",
    "retail franchise opportunity Moradabad",
    "friendly neighbourhood store franchise",
    "daily needs store franchise Moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/buyzaar-mart-franchise-in-moradabad",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise in Moradabad | Investment & Store Formats",
    description:
      "Get a Buyzaar Mart franchise in Moradabad. Explore Mini Mart, Super Mart & Hyper Mart formats, investment from ₹15 lakh, FOCM/FOCO models, and full setup support.",
    url: "https://www.thebuyzaarmart.com/moradabad/buyzaar-mart-franchise-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Moradabad | Investment & Store Formats",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Moradabad | Investment & Store Formats",
    description:
      "Get a Buyzaar Mart franchise in Moradabad. Explore Mini Mart, Super Mart & Hyper Mart formats, investment from ₹15 lakh, FOCM/FOCO models, and full setup support.",
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