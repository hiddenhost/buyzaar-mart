import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buy Daily Essentials Online in Noida | The Buyzaar Mart",
  description:
    "Want to buy daily essentials online in Noida? Order fresh groceries, dairy & household items with fast delivery and trusted quality from The Buyzaar Mart.",
  keywords: [
    "buy daily essentials online in Noida",
    "online grocery Noida",
    "order groceries online Noida",
    "online essentials delivery Noida",
    "grocery delivery app Noida",
    "daily needs online Noida",
    "The Buyzaar Mart",
    "online supermarket Noida",
    "grocery home delivery Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/buy-daily-essentials-online-in-noida",
  },
  openGraph: {
    title: "Buy Daily Essentials Online in Noida | The Buyzaar Mart",
    description:
      "Want to buy daily essentials online in Noida? Order fresh groceries, dairy & household items with fast delivery and trusted quality from The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/cities/noida/buy-daily-essentials-online-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buy Daily Essentials Online in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Daily Essentials Online in Noida | The Buyzaar Mart",
    description:
      "Want to buy daily essentials online in Noida? Order fresh groceries, dairy & household items with fast delivery and trusted quality from The Buyzaar Mart.",
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