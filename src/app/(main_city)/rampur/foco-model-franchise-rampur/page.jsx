import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "FOCO Model Franchise in Rampur | The Buyzaar Mart Supermarket",
  description:
    "FOCO model franchise in Rampur: invest, own a supermarket and let Buyzaar Mart run it. Know store size, revenue share, 10-year term and how to apply. Enquire now.",
  keywords: [
    "FOCO model franchise Rampur",
    "FOCO franchise Rampur",
    "FOCO franchise opportunity Rampur",
    "Buyzaar Mart FOCO model",
    "franchise owned company operated",
    "company operated supermarket franchise",
    "FOCO supermarket franchise Uttar Pradesh",
    "passive income franchise Rampur",
    "hands-off retail franchise",
    "supermarket franchise Rampur",
    "grocery franchise Rampur",
    "retail franchise Rampur",
    "FOCM vs FOCO",
    "Buyzaar Mart franchise Rampur",
    "FOCO mart franchise",
    "2000 sq ft supermarket franchise",
    "revenue sharing franchise India",
    "supermarket franchise India",
    "organised retail investment Rampur",
    "franchise business Rampur",
    "low involvement franchise",
    "FOCO franchise India",
    "managed supermarket franchise",
    "mart franchise Rampur",
    "retail franchise Uttar Pradesh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/foco-model-franchise-rampur",
  },
  openGraph: {
    title: "FOCO Model Franchise in Rampur | The Buyzaar Mart Supermarket",
    description:
      "FOCO model franchise in Rampur: invest, own a supermarket and let Buyzaar Mart run it. Know store size, revenue share, 10-year term and how to apply. Enquire now.",
    url: "https://www.thebuyzaarmart.com/rampur/foco-model-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Model Franchise in Rampur | The Buyzaar Mart Supermarket",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Model Franchise in Rampur | The Buyzaar Mart Supermarket",
    description:
      "FOCO model franchise in Rampur: invest, own a supermarket and let Buyzaar Mart run it. Know store size, revenue share, 10-year term and how to apply. Enquire now.",
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