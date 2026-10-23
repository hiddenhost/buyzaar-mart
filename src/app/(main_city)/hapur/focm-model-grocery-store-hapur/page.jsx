import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Model Grocery Store in Hapur | Buyzaar Mart Franchise",
  description:
    "Open a FOCM model grocery store in Hapur with The Buyzaar Mart. Total investment from ₹15 Lakh with setup, supply chain, POS and full support. Apply now.",
  keywords: [
    "FOCM model grocery store Hapur",
    "FOCM grocery franchise Hapur",
    "grocery store franchise in Hapur",
    "supermarket franchise Hapur",
    "Buyzaar Mart Hapur",
    "The Buyzaar Mart franchise",
    "franchise owned company managed Hapur",
    "managed grocery franchise Hapur",
    "grocery franchise 15 lakh",
    "low investment grocery franchise Hapur",
    "mini mart franchise Hapur",
    "super mart franchise Hapur",
    "hyper mart franchise Hapur",
    "retail franchise Hapur",
    "FMCG store franchise Hapur",
    "neighbourhood supermarket franchise Hapur",
    "grocery franchise Uttar Pradesh",
    "grocery franchise NCR",
    "supermarket franchise Delhi NCR",
    "grocery franchise with full support",
    "grocery franchise with training and support",
    "best grocery franchise in Hapur",
    "grocery franchise opportunity Hapur",
    "FOFO grocery franchise Hapur",
    "how to start a grocery store in Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/focm-model-grocery-store-hapur",
  },
  openGraph: {
    title: "FOCM Model Grocery Store in Hapur | Buyzaar Mart Franchise",
    description:
      "Open a FOCM model grocery store in Hapur with The Buyzaar Mart. Total investment from ₹15 Lakh with setup, supply chain, POS and full support. Apply now.",
    url: "https://www.thebuyzaarmart.com/hapur/focm-model-grocery-store-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Model Grocery Store in Hapur | Buyzaar Mart Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Model Grocery Store in Hapur | Buyzaar Mart Franchise",
    description:
      "Open a FOCM model grocery store in Hapur with The Buyzaar Mart. Total investment from ₹15 Lakh with setup, supply chain, POS and full support. Apply now.",
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