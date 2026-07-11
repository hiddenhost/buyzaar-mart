import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Retail Store Franchise in Lucknow | The Buyzaar Mart",
  description:
    "Learn how to start a retail store franchise in Lucknow with The Buyzaar Mart. Step-by-step process, FOCO and FOCM models, formats, investment and full support.",
  keywords: [
    "start retail franchise Lucknow",
    "how to open franchise store Lucknow",
    "grocery franchise Lucknow steps",
    "The Buyzaar Mart franchise process",
    "retail business Lucknow",
    "FOCO FOCM franchise Lucknow",
    "supermarket franchise opportunity UP",
    "how to start a supermarket business Lucknow",
    "franchise inquiry Lucknow",
    "retail franchise investment guide",
    "step by step franchise process India",
    "open grocery store Lucknow",
    "franchise agreement Lucknow",
    "franchise business planning UP",
    "new franchise opportunities Lucknow",
    "retail franchise for beginners India",
    "Buyzaar Mart franchise inquiry",
    "franchise store setup Lucknow",
    "grocery franchise checklist",
    "retail franchise support system",
    "franchise training and operations India",
    "franchise location selection Lucknow",
    "become a franchise owner Lucknow",
    "franchise business model comparison India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/how-to-start-a-retail-store-franchise-in-lucknow",
  },
  openGraph: {
    title: "How to Start a Retail Store Franchise in Lucknow | The Buyzaar Mart",
    description:
      "Learn how to start a retail store franchise in Lucknow with The Buyzaar Mart. Step-by-step process, FOCO and FOCM models, formats, investment and full support.",
    url: "https://www.thebuyzaarmart.com/lucknow/how-to-start-a-retail-store-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Retail Store Franchise in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Retail Store Franchise in Lucknow | The Buyzaar Mart",
    description:
      "Learn how to start a retail store franchise in Lucknow with The Buyzaar Mart. Step-by-step process, FOCO and FOCM models, formats, investment and full support.",
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