import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Retail Franchise Investment in Rampur | The Buyzaar Mart",
  description:
    "Planning retail franchise investment in Rampur? Know the total investment, store formats, FOCM model, returns, risk protection and support from The Buyzaar Mart.",
  keywords: [
    "retail franchise investment rampur",
    "retail franchise rampur",
    "retail franchise investment",
    "supermarket franchise rampur",
    "grocery franchise rampur",
    "mart franchise rampur",
    "buyzaar mart franchise rampur",
    "the buyzaar mart",
    "FOCM franchise rampur",
    "FOCO franchise rampur",
    "mini mart franchise rampur",
    "retail franchise business india",
    "franchise investment uttar pradesh",
    "low investment retail franchise",
    "grocery franchise starting 15 lakh",
    "organised retail franchise",
    "FMCG store franchise",
    "neighbourhood supermarket franchise",
    "supermarket franchise cost india",
    "retail franchise with full support",
    "franchise business opportunity rampur",
    "how to invest in retail franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/retail-franchise-investment-rampur",
  },
  openGraph: {
    title: "Retail Franchise Investment in Rampur | The Buyzaar Mart",
    description:
      "Planning retail franchise investment in Rampur? Know the total investment, store formats, FOCM model, returns, risk protection and support from The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/rampur/retail-franchise-investment-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Investment in Rampur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Investment in Rampur | The Buyzaar Mart",
    description:
      "Planning retail franchise investment in Rampur? Know the total investment, store formats, FOCM model, returns, risk protection and support from The Buyzaar Mart.",
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