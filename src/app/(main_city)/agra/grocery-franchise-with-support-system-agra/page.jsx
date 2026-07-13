import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise With Support System in Agra | Buyzaar Mart",
  description:
    "Start a grocery franchise in Agra backed by Buyzaar Mart's full operational support system — setup, staffing, technology, and zero-royalty profit sharing.",
  keywords: [
    "grocery franchise support system Agra",
    "Buyzaar Mart franchise Agra",
    "company managed grocery franchise",
    "franchise operational support Agra",
    "zero royalty franchise Agra",
    "franchise setup support",
    "Mini Mart Super Mart Hyper Mart",
    "retail franchise investment Agra",
    "Buyzaar Mart training support",
    "franchise opportunity Agra",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/grocery-franchise-with-support-system-in-agra",
  },
  openGraph: {
    title: "Grocery Franchise With Support System in Agra | Buyzaar Mart",
    description:
      "Start a grocery franchise in Agra backed by Buyzaar Mart's full operational support system — setup, staffing, technology, and zero-royalty profit sharing.",
    url: "https://www.thebuyzaarmart.com/agra/grocery-franchise-with-support-system-in-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise With Support System in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise With Support System in Agra | Buyzaar Mart",
    description:
      "Start a grocery franchise in Agra backed by Buyzaar Mart's full operational support system — setup, staffing, technology, and zero-royalty profit sharing.",
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