import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise With Support System in Agra | Buyzaar Mart",
  description:
    "Start a grocery franchise in Agra backed by Buyzaar Mart's full operational support system — setup, staffing, technology, and zero-royalty profit sharing.",
  keywords: [
    "grocery franchise with support system agra",
  "supported grocery franchise agra",
  "grocery franchise support agra",
  "business support grocery franchise agra",
  "franchise training and support agra",
  "end to end franchise support agra",
  "retail franchise support agra",
  "grocery business support agra",
  "grocery franchise assistance agra",
  "managed grocery franchise agra",
  "Buyzaar Mart support system",
  "Buyzaar Mart franchise agra",
  "Buyzaar Mart grocery franchise",
  "mini mart franchise agra",
  "small supermarket franchise agra",
  "grocery store franchise agra",
  "supermarket franchise agra",
  "neighbourhood mart franchise agra",
  "daily essentials franchise agra",
  "fmcg franchise agra",
  "organised retail franchise agra",
  "grocery retail franchise agra",
  "low investment grocery franchise agra",
  "best grocery franchise agra",
  "profitable grocery franchise agra",
  "grocery chain franchise agra",
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