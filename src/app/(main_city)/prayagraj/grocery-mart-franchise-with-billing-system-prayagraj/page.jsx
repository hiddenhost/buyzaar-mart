import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Franchise With Billing System in Prayagraj | Buyzaar Mart",
  description:
    "Invest in a grocery mart franchise in Prayagraj with a built-in billing system. Buyzaar Mart offers real-time inventory tracking and complete POS support.",
  keywords: [
    "grocery mart franchise billing system Prayagraj",
    "Buyzaar Mart franchise",
    "POS system grocery franchise",
    "retail billing software franchise India",
    "grocery store franchise technology",
    "franchise billing support Prayagraj",
    "inventory management franchise UP",
    "grocery franchise POS India",
    "retail franchise technology Prayagraj",
    "franchise billing solution India",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/grocery-mart-franchise-with-billing-system-prayagraj",
  },
  openGraph: {
    title: "Grocery Mart Franchise With Billing System in Prayagraj | Buyzaar Mart",
    description:
      "Invest in a grocery mart franchise in Prayagraj with a built-in billing system. Buyzaar Mart offers real-time inventory tracking and complete POS support.",
    url: "https://www.thebuyzaarmart.com/prayagraj/grocery-mart-franchise-with-billing-system-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Franchise With Billing System in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Mart Franchise With Billing System in Prayagraj | Buyzaar Mart",
    description:
      "Invest in a grocery mart franchise in Prayagraj with a built-in billing system. Buyzaar Mart offers real-time inventory tracking and complete POS support.",
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