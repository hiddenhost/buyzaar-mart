import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Franchise Opportunity in Hapur | The Buyzaar Mart",
  description:
    "Explore the FOCM franchise opportunity in Hapur with The Buyzaar Mart. Own your store, we manage operations. Total investment from ₹15 Lakh. Apply now.",
  keywords: [
    "FOCM franchise opportunity Hapur",
    "FOCM franchise Hapur",
    "franchise owned company managed Hapur",
    "Buyzaar Mart franchise Hapur",
    "The Buyzaar Mart Hapur",
    "supermarket franchise opportunity Hapur",
    "grocery franchise opportunity Hapur",
    "retail franchise opportunity Hapur",
    "managed supermarket franchise Hapur",
    "low investment franchise Hapur",
    "franchise from 15 lakh",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "franchise business opportunity Hapur",
    "organised retail franchise Hapur",
    "FMCG franchise Hapur",
    "supermarket franchise Delhi NCR",
    "supermarket franchise Uttar Pradesh",
    "franchise with training and support",
    "franchise with POS and supply chain",
    "best franchise to start in Hapur",
    "neighbourhood supermarket franchise",
    "grocery franchise with full support",
    "retail business opportunity Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/focm-franchise-opportunity-hapur",
  },
  openGraph: {
    title: "FOCM Franchise Opportunity in Hapur | The Buyzaar Mart",
    description:
      "Explore the FOCM franchise opportunity in Hapur with The Buyzaar Mart. Own your store, we manage operations. Total investment from ₹15 Lakh. Apply now.",
    url: "https://www.thebuyzaarmart.com/hapur/focm-franchise-opportunity-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise Opportunity in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Franchise Opportunity in Hapur | The Buyzaar Mart",
    description:
      "Explore the FOCM franchise opportunity in Hapur with The Buyzaar Mart. Own your store, we manage operations. Total investment from ₹15 Lakh. Apply now.",
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