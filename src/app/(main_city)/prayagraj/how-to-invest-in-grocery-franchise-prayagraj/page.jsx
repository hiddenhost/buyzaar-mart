import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Invest in Grocery Franchise in Prayagraj | Buyzaar Mart",
  description:
    "Looking to invest in a grocery franchise in Prayagraj? Discover why Buyzaar Mart is the smart choice—low risk, high demand, and full franchise support.",
  keywords: [
    "grocery franchise Prayagraj",
    "invest in grocery franchise",
    "Buyzaar Mart franchise",
    "grocery store franchise India",
    "franchise business Prayagraj",
    "retail franchise investment",
    "supermarket franchise Prayagraj",
    "best grocery franchise UP",
    "grocery business opportunity Prayagraj",
    "low investment franchise India",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/how-to-invest-in-grocery-franchise-prayagraj",
  },
  openGraph: {
    title: "Invest in Grocery Franchise in Prayagraj | Buyzaar Mart",
    description:
      "Looking to invest in a grocery franchise in Prayagraj? Discover why Buyzaar Mart is the smart choice—low risk, high demand, and full franchise support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/how-to-invest-in-grocery-franchise-prayagraj",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Invest in Grocery Franchise in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest in Grocery Franchise in Prayagraj | Buyzaar Mart",
    description:
      "Looking to invest in a grocery franchise in Prayagraj? Discover why Buyzaar Mart is the smart choice—low risk, high demand, and full franchise support.",
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