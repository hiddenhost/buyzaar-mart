import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise in Prayagraj – The Buyzaar Mart Opportunity",
  description:
    "Start a supermarket franchise in Prayagraj with The Buyzaar Mart. Super Mart & Hyper Mart formats, full setup support, POS tech & flexible ownership models.",
  keywords: [
    "supermarket franchise prayagraj",
    "buyzaar mart supermarket",
    "super mart hyper mart franchise",
    "organized retail prayagraj",
    "supermarket business opportunity",
    "grocery supermarket franchise UP",
    "retail franchise investment prayagraj",
    "FOCO FOCM supermarket model",
    "neighborhood supermarket franchise",
    "supermarket store setup prayagraj",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/supermarket-franchise-in-prayagraj",
  },
  openGraph: {
    title: "Supermarket Franchise in Prayagraj – The Buyzaar Mart Opportunity",
    description:
      "Start a supermarket franchise in Prayagraj with The Buyzaar Mart. Super Mart & Hyper Mart formats, full setup support, POS tech & flexible ownership models.",
    url: "https://www.thebuyzaarmart.com/prayagraj/supermarket-franchise-in-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise in Prayagraj – The Buyzaar Mart Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Prayagraj – The Buyzaar Mart Opportunity",
    description:
      "Start a supermarket franchise in Prayagraj with The Buyzaar Mart. Super Mart & Hyper Mart formats, full setup support, POS tech & flexible ownership models.",
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