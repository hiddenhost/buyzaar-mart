import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise in Bulandshahr Starting From ₹15 Lakh | The Buyzaar Mart",
  description:
    "Start a grocery franchise in Bulandshahr with The Buyzaar Mart from ₹15 lakh. Explore FOCO and FOCM models, store formats, and full setup support.",
  keywords: [
    "grocery franchise Bulandshahr",
    "franchise in Bulandshahr",
    "supermarket franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "low investment franchise Bulandshahr",
    "franchise business Bulandshahr",
    "grocery store franchise UP",
    "Buyzaar Mart Bulandshahr",
    "franchise opportunity Bulandshahr",
    "mini mart franchise Bulandshahr",
    "FOCO franchise model",
    "FOCM franchise model",
    "grocery franchise 15 lakh",
    "best franchise Bulandshahr",
    "supermarket franchise UP",
    "franchise business opportunity Bulandshahr",
    "retail business Bulandshahr",
    "organized retail Bulandshahr",
    "franchise apply Bulandshahr",
    "how to start grocery franchise",
    "franchise investment Bulandshahr",
    "Buyzaar Mart franchise",
    "kirana to supermarket franchise",
    "franchise near Delhi NCR",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/grocery-franchise-starting-from-15-lakh-bulandshahr",
  },
  openGraph: {
    title: "Grocery Franchise in Bulandshahr Starting From ₹15 Lakh | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Bulandshahr with The Buyzaar Mart from ₹15 lakh. Explore FOCO and FOCM models, store formats, and full setup support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/grocery-franchise-starting-from-15-lakh-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise in Bulandshahr Starting From ₹15 Lakh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise in Bulandshahr Starting From ₹15 Lakh | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Bulandshahr with The Buyzaar Mart from ₹15 lakh. Explore FOCO and FOCM models, store formats, and full setup support.",
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