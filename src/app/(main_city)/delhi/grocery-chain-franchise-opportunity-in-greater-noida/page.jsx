import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Chain Franchise Opportunity in Greater Noida | Buyzaar Mart",
  description:
    "Explore a scalable grocery chain franchise opportunity in Greater Noida with Buyzaar Mart. Multiple formats, brand support, strong growth potential. Apply now!",
  keywords: [
    "grocery chain franchise Greater Noida",
    "Buyzaar Mart franchise Greater Noida",
    "multi-store franchise opportunity",
    "grocery franchise Greater Noida",
    "retail chain franchise India",
    "supermarket chain franchise",
    "franchise opportunity Greater Noida",
    "Buyzaar Mart chain franchise",
    "grocery business Greater Noida",
    "franchise expansion Greater Noida",
    "grocery chain franchise opportunity in greater noida",
    "grocery franchise Greater Noida",
    "supermarket franchise Greater Noida",
    "Buyzaar Mart franchise Greater Noida",
    "grocery franchise cost Greater Noida",
    "low investment franchise Greater Noida",
    "mini mart franchise Greater Noida",
    "retail franchise Greater Noida West",
    "FOCM franchise model",
    "best grocery chain franchise India"
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