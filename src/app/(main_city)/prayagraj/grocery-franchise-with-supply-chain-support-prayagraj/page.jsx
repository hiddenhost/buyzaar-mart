import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise with Supply Chain Support in Prayagraj | The Buyzaar Mart",
  description:
    "Start a profitable grocery franchise in Prayagraj with The Buyzaar Mart. Get end-to-end supply chain support, centralized procurement, and proven FOCO/FOCM franchise models. Apply today.",
  keywords: [
    "grocery franchise Prayagraj",
    "grocery store franchise in Prayagraj",
    "FMCG franchise Prayagraj",
    "The Buyzaar Mart franchise",
    "grocery franchise with supply chain support",
    "supermarket franchise UP",
    "grocery business opportunity Prayagraj",
    "franchise store Prayagraj",
    "retail franchise Uttar Pradesh",
    "FOCO franchise grocery",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-with-supply-chain-support-prayagraj",
  },
  openGraph: {
    title: "Grocery Franchise with Supply Chain Support in Prayagraj | The Buyzaar Mart",
    description:
      "Start a profitable grocery franchise in Prayagraj with The Buyzaar Mart. Get end-to-end supply chain support, centralized procurement, and proven FOCO/FOCM franchise models. Apply today.",
    url: "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-with-supply-chain-support-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise with Supply Chain Support in Prayagraj | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise with Supply Chain Support in Prayagraj | The Buyzaar Mart",
    description:
      "Start a profitable grocery franchise in Prayagraj with The Buyzaar Mart. Get end-to-end supply chain support, centralized procurement, and proven FOCO/FOCM franchise models. Apply today.",
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