import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise in Agra | Grocery Retail Business Opportunity 2025",
  description:
    "Start your own Buyzaar Mart franchise in Agra. Low investment, proven FOCM model, full support. Join India's fastest-growing grocery retail franchise network today.",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/buyzaar-mart-franchise-agra",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise in Agra | Grocery Retail Business Opportunity 2025",
    description:
      "Start your own Buyzaar Mart franchise in Agra. Low investment, proven FOCM model, full support. Join India's fastest-growing grocery retail franchise network today.",
    url: "https://www.thebuyzaarmart.com/agra/buyzaar-mart-franchise-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Agra | Grocery Retail Business Opportunity 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Agra | Grocery Retail Business Opportunity 2025",
    description:
      "Start your own Buyzaar Mart franchise in Agra. Low investment, proven FOCM model, full support. Join India's fastest-growing grocery retail franchise network today.",
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
