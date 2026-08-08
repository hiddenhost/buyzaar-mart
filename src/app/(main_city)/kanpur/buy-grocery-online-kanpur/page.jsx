import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Buy Grocery Online in Kanpur | Fresh & Affordable – The Buyzaar Mart",
  description:
    "Buy grocery online in Kanpur with The Buyzaar Mart. Order fresh fruits, vegetables & daily essentials at fair prices with quick home delivery. Order now!",
  keywords: [
    "buy grocery online Kanpur",
    "online grocery shopping Kanpur",
    "grocery home delivery Kanpur",
    "online grocery store Kanpur",
    "grocery delivery near me Kanpur",
    "order groceries online Kanpur",
    "monthly grocery online Kanpur",
    "fresh vegetables online Kanpur",
    "The Buyzaar Mart Kanpur",
    "grocery app Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/buy-grocery-online-kanpur",
  },
  openGraph: {
    title: "Buy Grocery Online in Kanpur | Fresh & Affordable – The Buyzaar Mart",
    description:
      "Buy grocery online in Kanpur with The Buyzaar Mart. Order fresh fruits, vegetables & daily essentials at fair prices with quick home delivery. Order now!",
    url: "https://www.thebuyzaarmart.com/kanpur/buy-grocery-online-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buy Grocery Online in Kanpur | Fresh & Affordable – The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Grocery Online in Kanpur | Fresh & Affordable – The Buyzaar Mart",
    description:
      "Buy grocery online in Kanpur with The Buyzaar Mart. Order fresh fruits, vegetables & daily essentials at fair prices with quick home delivery. Order now!",
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