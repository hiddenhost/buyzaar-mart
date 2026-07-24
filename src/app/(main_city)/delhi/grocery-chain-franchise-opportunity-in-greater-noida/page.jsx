import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Chain Franchise Opportunity in Greater Noida | Buyzaar Mart",
  description:
    "Explore a scalable grocery chain franchise opportunity in Greater Noida with Buyzaar Mart. Multiple formats, brand support, strong growth potential. Apply now!",
  keywords: [
    "grocery chain franchise opportunity in Greater Noida",
    "grocery chain franchise Greater Noida",
    "grocery franchise Greater Noida",
    "supermarket franchise Greater Noida",
    "mini mart franchise Greater Noida",
    "Buyzaar Mart franchise Greater Noida",
    "Buyzaar Mart grocery franchise Greater Noida",
    "Buyzaar Mart supermarket Greater Noida",
    "grocery store franchise Greater Noida",
    "retail franchise Greater Noida",
    "mart franchise Greater Noida",
    "franchise opportunity Greater Noida",
    "grocery business opportunity Greater Noida",
    "retail business opportunity Greater Noida",
    "low investment grocery franchise Greater Noida",
    "best grocery franchise Greater Noida",
    "small supermarket franchise Greater Noida",
    "convenience store franchise Greater Noida",
    "organized retail franchise Greater Noida",
    "daily essentials franchise Greater Noida",
    "profitable grocery franchise Greater Noida",
    "FMCG franchise Greater Noida",
    "franchise investment Greater Noida",
    "branded grocery store franchise Greater Noida",
    "neighbourhood grocery store franchise Greater Noida"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/grocery-chain-franchise-opportunity-in-greater-noida",
  },
  openGraph: {
    title: "Grocery Chain Franchise Opportunity in Greater Noida | Buyzaar Mart",
    description:
      "Explore a scalable grocery chain franchise opportunity in Greater Noida with Buyzaar Mart. Multiple formats, brand support, strong growth potential. Apply now!",
    url: "https://www.thebuyzaarmart.com/delhi/grocery-chain-franchise-opportunity-in-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Chain Franchise Opportunity in Greater Noida | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Chain Franchise Opportunity in Greater Noida | Buyzaar Mart",
    description:
      "Explore a scalable grocery chain franchise opportunity in Greater Noida with Buyzaar Mart. Multiple formats, brand support, strong growth potential. Apply now!",
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