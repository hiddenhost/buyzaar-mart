import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise in Prayagraj – Start Your Retail Business",
  description:
    "Open a Buyzaar Mart franchise in Prayagraj. Explore Mini Mart, Super Mart & Hyper Mart formats, FOCO or FOCM models, investment & full brand support.",
  keywords: [
    "buyzaar mart franchise prayagraj",
    "buyzaar mart prayagraj",
    "grocery franchise prayagraj",
    "supermarket franchise prayagraj",
    "retail business prayagraj",
    "daily needs store franchise",
    "mini mart franchise",
    "super mart franchise",
    "hyper mart franchise",
    "franchise business opportunity prayagraj",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/buyzaar-mart-franchise-prayagraj",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise in Prayagraj – Start Your Retail Business",
    description:
      "Open a Buyzaar Mart franchise in Prayagraj. Explore Mini Mart, Super Mart & Hyper Mart formats, FOCO or FOCM models, investment & full brand support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/buyzaar-mart-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise in Prayagraj – Start Your Retail Business",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise in Prayagraj – Start Your Retail Business",
    description:
      "Open a Buyzaar Mart franchise in Prayagraj. Explore Mini Mart, Super Mart & Hyper Mart formats, FOCO or FOCM models, investment & full brand support.",
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