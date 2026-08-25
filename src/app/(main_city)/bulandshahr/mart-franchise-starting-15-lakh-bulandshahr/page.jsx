import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Starting ₹15 Lakh in Bulandshahr | The Buyzaar Mart",
  description:
    "Start a mart franchise in Bulandshahr from ₹15 lakh with The Buyzaar Mart. Mini Mart format, FOCO and FOCM models, complete setup and training support.",
  keywords: [
    "mart franchise Bulandshahr",
    "franchise starting 15 lakh",
    "mini mart franchise Bulandshahr",
    "low investment mart franchise",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "franchise business Bulandshahr",
    "Buyzaar Mart Bulandshahr",
    "franchise opportunity Bulandshahr",
    "entry level franchise UP",
    "FOCO franchise model",
    "FOCM franchise model",
    "best franchise Bulandshahr",
    "supermarket franchise UP",
    "franchise investment Bulandshahr",
    "organized retail Bulandshahr",
    "franchise apply Bulandshahr",
    "how to start mart franchise",
    "franchise near Delhi NCR",
    "small investment franchise business",
    "neighbourhood store franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/mart-franchise-starting-15-lakh-bulandshahr",
  },
  openGraph: {
    title: "Mart Franchise Starting ₹15 Lakh in Bulandshahr | The Buyzaar Mart",
    description:
      "Start a mart franchise in Bulandshahr from ₹15 lakh with The Buyzaar Mart. Mini Mart format, FOCO and FOCM models, complete setup and training support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/mart-franchise-starting-15-lakh-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Starting ₹15 Lakh in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Starting ₹15 Lakh in Bulandshahr | The Buyzaar Mart",
    description:
      "Start a mart franchise in Bulandshahr from ₹15 lakh with The Buyzaar Mart. Mini Mart format, FOCO and FOCM models, complete setup and training support.",
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