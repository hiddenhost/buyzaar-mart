import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Best Online Grocery Store in Noida | The Buyzaar Mart – Fast Delivery",
  description:
    "Shop the best online grocery store in Noida with The Buyzaar Mart. Order fresh produce & daily essentials online with delivery in under 90 minutes. Shop now!",
  keywords: [
    "best online grocery store in Noida",
    "online grocery store Noida",
    "order groceries online Noida",
    "grocery delivery Noida",
    "online supermarket Noida",
    "grocery app Noida",
    "fast grocery delivery Noida",
    "The Buyzaar Mart online",
    "online kirana store Noida",
    "buy groceries online Noida",
    "doorstep grocery delivery Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/best-online-grocery-store-in-noida",
  },
  openGraph: {
    title: "Best Online Grocery Store in Noida | The Buyzaar Mart – Fast Delivery",
    description:
      "Shop the best online grocery store in Noida with The Buyzaar Mart. Order fresh produce & daily essentials online with delivery in under 90 minutes. Shop now!",
    url: "https://www.thebuyzaarmart.com/cities/noida/best-online-grocery-store-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Online Grocery Store in Noida | The Buyzaar Mart – Fast Delivery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Grocery Store in Noida | The Buyzaar Mart – Fast Delivery",
    description:
      "Shop the best online grocery store in Noida with The Buyzaar Mart. Order fresh produce & daily essentials online with delivery in under 90 minutes. Shop now!",
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