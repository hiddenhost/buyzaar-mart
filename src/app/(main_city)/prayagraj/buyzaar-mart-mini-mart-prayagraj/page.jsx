import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "The Buyzaar Mart Mini Mart in Prayagraj | Franchise Opportunity",
  description:
    "Explore The Buyzaar Mart's Mini Mart franchise in Prayagraj — store design, product range, customer experience, and what makes this format the brand's flagship entry offering.",
  keywords: [
    "Buyzaar Mart Mini Mart Prayagraj",
    "Mini Mart store design",
    "The Buyzaar Mart franchise Prayagraj",
    "Mini Mart product range",
    "Buyzaar Mart brand Prayagraj",
    "grocery store franchise UP",
    "Mini Mart customer experience",
    "Buyzaar Mart store format",
    "neighbourhood grocery brand Prayagraj",
    "Mini Mart franchise opportunity",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/buyzaar-mart-mini-mart-prayagraj",
  },
  openGraph: {
    title: "The Buyzaar Mart Mini Mart in Prayagraj | Franchise Opportunity",
    description:
      "Explore The Buyzaar Mart's Mini Mart franchise in Prayagraj — store design, product range, customer experience, and what makes this format the brand's flagship entry offering.",
    url: "https://www.thebuyzaarmart.com/prayagraj/buyzaar-mart-mini-mart-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart Mini Mart in Prayagraj | Franchise Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Buyzaar Mart Mini Mart in Prayagraj | Franchise Opportunity",
    description:
      "Explore The Buyzaar Mart's Mini Mart franchise in Prayagraj — store design, product range, customer experience, and what makes this format the brand's flagship entry offering.",
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