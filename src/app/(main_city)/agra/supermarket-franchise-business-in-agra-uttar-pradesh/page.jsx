import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Business in Agra, Uttar Pradesh | The Buyzaar Mart",
  description:
    "Start a profitable supermarket franchise business in Agra with The Buyzaar Mart. Low investment, high returns, full support — join India's fastest-growing grocery retail franchise today.",
  keywords: [
    "supermarket franchise in Agra",
    "grocery franchise Agra UP",
    "The Buyzaar Mart Agra franchise",
    "FMCG franchise Agra",
    "retail franchise opportunity Agra",
    "franchise business in Agra Uttar Pradesh",
    "mini mart franchise Agra",
    "super mart franchise Agra",
    "hyper mart franchise Agra",
    "grocery store franchise Agra",
    "low investment franchise Agra",
    "best franchise business Agra",
    "organized retail Agra",
    "FOCM franchise model Agra",
    "franchise investment Agra UP",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/supermarket-franchise-business-in-agra-uttar-pradesh",
  },
  openGraph: {
    title: "Supermarket Franchise Business in Agra, Uttar Pradesh | The Buyzaar Mart",
    description:
      "Start a profitable supermarket franchise business in Agra with The Buyzaar Mart. Low investment, high returns, full support — join India's fastest-growing grocery retail franchise today.",
    url: "https://www.thebuyzaarmart.com/agra/supermarket-franchise-business-in-agra-uttar-pradesh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Business in Agra, Uttar Pradesh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Business in Agra, Uttar Pradesh | The Buyzaar Mart",
    description:
      "Start a profitable supermarket franchise business in Agra with The Buyzaar Mart. Low investment, high returns, full support — join India's fastest-growing grocery retail franchise today.",
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