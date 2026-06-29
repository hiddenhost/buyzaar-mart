import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise in Prayagraj – Buyzaar Mart Business Opportunity",
  description:
    "Start a grocery franchise in Prayagraj with The Buyzaar Mart. Mini Mart, Super Mart & Hyper Mart formats, flexible models & full brand support. Enquire now!",
  keywords: [
    "grocery franchise prayagraj",
    "buyzaar mart prayagraj",
    "grocery store franchise",
    "supermarket franchise prayagraj",
    "daily essentials store franchise",
    "mini mart super mart hyper mart",
    "retail franchise opportunity prayagraj",
    "kirana to supermarket upgrade",
    "FOCO FOCM franchise model",
    "low investment grocery franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-prayagraj",
  },
  openGraph: {
    title: "Grocery Franchise in Prayagraj – Buyzaar Mart Business Opportunity",
    description:
      "Start a grocery franchise in Prayagraj with The Buyzaar Mart. Mini Mart, Super Mart & Hyper Mart formats, flexible models & full brand support. Enquire now!",
    url: "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise in Prayagraj – Buyzaar Mart Business Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise in Prayagraj – Buyzaar Mart Business Opportunity",
    description:
      "Start a grocery franchise in Prayagraj with The Buyzaar Mart. Mini Mart, Super Mart & Hyper Mart formats, flexible models & full brand support. Enquire now!",
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