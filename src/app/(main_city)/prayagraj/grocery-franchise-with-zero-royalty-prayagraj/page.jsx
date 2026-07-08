import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise With Zero Royalty in Prayagraj | Buyzaar Mart",
  description:
    "Explore a grocery franchise with a zero-royalty structure in Prayagraj with Buyzaar Mart. Better cash flow, transparent fees, and strong franchise support.",
  keywords: [
    "grocery franchise zero royalty Prayagraj",
    "Buyzaar Mart franchise",
    "zero royalty franchise India",
    "no royalty grocery franchise",
    "low fee franchise business Prayagraj",
    "franchise without royalty UP",
    "retail franchise zero fee India",
    "grocery store franchise Prayagraj",
    "franchise cost savings India",
    "zero royalty business opportunity",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-with-zero-royalty-prayagraj",
  },
  openGraph: {
    title: "Grocery Franchise With Zero Royalty in Prayagraj | Buyzaar Mart",
    description:
      "Explore a grocery franchise with a zero-royalty structure in Prayagraj with Buyzaar Mart. Better cash flow, transparent fees, and strong franchise support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/grocery-franchise-with-zero-royalty-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise With Zero Royalty in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise With Zero Royalty in Prayagraj | Buyzaar Mart",
    description:
      "Explore a grocery franchise with a zero-royalty structure in Prayagraj with Buyzaar Mart. Better cash flow, transparent fees, and strong franchise support.",
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