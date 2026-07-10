import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise Opportunity in Noida Extension | Organised Retail Business",
  description:
    "Explore an organised retail franchise opportunity with Buyzaar Mart in Noida Extension. Learn about benefits, investment, store setup, and how to apply today.",
  keywords: [
    "organised retail franchise Noida Extension",
    "Buyzaar Mart franchise",
    "retail franchise opportunity Noida",
    "supermarket franchise Greater Noida West",
    "grocery store franchise NCR",
    "retail business opportunity Noida Extension",
    "franchise investment retail India",
    "Buyzaar Mart Noida Extension",
    "organised retail business NCR",
    "franchise store setup Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/buyzaar-mart-franchise-opportunity-in-noida-extension",
  },
  openGraph: {
    title: "Buyzaar Mart Franchise Opportunity in Noida Extension | Organised Retail Business",
    description:
      "Explore an organised retail franchise opportunity with Buyzaar Mart in Noida Extension. Learn about benefits, investment, store setup, and how to apply today.",
    url: "https://www.thebuyzaarmart.com/delhi/buyzaar-mart-franchise-opportunity-in-noida-extension",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Opportunity in Noida Extension | Organised Retail Business",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Franchise Opportunity in Noida Extension | Organised Retail Business",
    description:
      "Explore an organised retail franchise opportunity with Buyzaar Mart in Noida Extension. Learn about benefits, investment, store setup, and how to apply today.",
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