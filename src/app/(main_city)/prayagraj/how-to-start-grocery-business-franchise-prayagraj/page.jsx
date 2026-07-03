import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Grocery Business Franchise in Prayagraj | The Buyzaar Mart",
  description:
    "Learn how to start a grocery business franchise in Prayagraj with The Buyzaar Mart. Step-by-step process, investment details, store formats, and full operational support.",
  keywords: [
    "how to start grocery franchise Prayagraj",
    "start grocery business Prayagraj",
    "grocery franchise process",
    "The Buyzaar Mart franchise",
    "start supermarket franchise UP",
    "grocery business opportunity Prayagraj",
    "FOCM franchise process",
    "franchise investment Prayagraj",
    "retail franchise UP",
    "start FMCG store Prayagraj",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/how-to-start-grocery-business-franchise-prayagraj",
  },
  openGraph: {
    title: "How to Start a Grocery Business Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Learn how to start a grocery business franchise in Prayagraj with The Buyzaar Mart. Step-by-step process, investment details, store formats, and full operational support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/how-to-start-grocery-business-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Grocery Business Franchise in Prayagraj | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Grocery Business Franchise in Prayagraj | The Buyzaar Mart",
    description:
      "Learn how to start a grocery business franchise in Prayagraj with The Buyzaar Mart. Step-by-step process, investment details, store formats, and full operational support.",
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