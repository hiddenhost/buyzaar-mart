import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Mart Franchise in Hapur | The Buyzaar Mart",
  description:
    "Start a FOCM mart franchise in Hapur with The Buyzaar Mart. Own your mart, company manages systems. Total investment from ₹15 Lakh. Apply now.",
  keywords: [
    "FOCM mart franchise Hapur",
    "FOCM franchise Hapur",
    "franchise owned company managed mart",
    "Buyzaar Mart FOCM Hapur",
    "The Buyzaar Mart franchise Hapur",
    "mart franchise Hapur",
    "supermarket franchise Hapur",
    "grocery mart franchise Hapur",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "managed mart franchise Hapur",
    "low investment mart franchise",
    "mart franchise from 15 lakh",
    "organised mart franchise Hapur",
    "neighbourhood mart franchise Hapur",
    "FMCG mart franchise Hapur",
    "retail mart franchise Hapur",
    "mart franchise Delhi NCR",
    "mart franchise Uttar Pradesh",
    "mart franchise with POS and training",
    "best mart franchise in Hapur",
    "mart business opportunity Hapur",
    "franchise business opportunity Hapur",
    "supermarket franchise with full support",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/focm-mart-franchise-hapur",
  },
  openGraph: {
    title: "FOCM Mart Franchise in Hapur | The Buyzaar Mart",
    description:
      "Start a FOCM mart franchise in Hapur with The Buyzaar Mart. Own your mart, company manages systems. Total investment from ₹15 Lakh. Apply now.",
    url: "https://www.thebuyzaarmart.com/hapur/focm-mart-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Mart Franchise in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Mart Franchise in Hapur | The Buyzaar Mart",
    description:
      "Start a FOCM mart franchise in Hapur with The Buyzaar Mart. Own your mart, company manages systems. Total investment from ₹15 Lakh. Apply now.",
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