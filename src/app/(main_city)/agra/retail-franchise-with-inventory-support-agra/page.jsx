import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise with Inventory Support in Agra | Buyzaar Mart",
  description:
    "Start a retail franchise in Agra with full inventory support from Buyzaar Mart — buyback policy, organized supply chain & POS tracking. Low investment. Enquire now!",
  keywords: [
    "retail franchise with inventory support Agra",
    "grocery franchise inventory management",
    "retail franchise Agra low risk",
    "Buyzaar Mart inventory assurance",
    "supermarket franchise Agra",
    "inventory buyback policy franchise",
    "mini mart franchise Agra",
    "FOCM retail franchise India",
    "stock management grocery franchise",
    "low investment retail franchise Agra",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/retail-franchise-with-inventory-support-in-agra",
  },
  openGraph: {
    title: "Retail Franchise with Inventory Support in Agra | Buyzaar Mart",
    description:
      "Start a retail franchise in Agra with full inventory support from Buyzaar Mart — buyback policy, organized supply chain & POS tracking. Low investment. Enquire now!",
    url: "https://www.thebuyzaarmart.com/agra/retail-franchise-with-inventory-support-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise with Inventory Support in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise with Inventory Support in Agra | Buyzaar Mart",
    description:
      "Start a retail franchise in Agra with full inventory support from Buyzaar Mart — buyback policy, organized supply chain & POS tracking. Low investment. Enquire now!",
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