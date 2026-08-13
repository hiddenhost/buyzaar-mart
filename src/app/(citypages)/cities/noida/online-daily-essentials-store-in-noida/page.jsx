import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Online Daily Essentials Store in India | The Buyzaar Mart",
  description:
    "Looking for a reliable online daily essentials store in India? Shop fresh groceries, dairy & household items with fast delivery and trusted quality from The Buyzaar Mart.",
  keywords: [
    "online daily essentials store in India",
    "online grocery store India",
    "buy daily essentials online",
    "online supermarket India",
    "grocery delivery India",
    "daily needs app India",
    "online household essentials",
    "The Buyzaar Mart",
    "fresh grocery delivery India",
    "online essentials shopping India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/online-daily-essentials-store-in-india",
  },
  openGraph: {
    title: "Online Daily Essentials Store in India | The Buyzaar Mart",
    description:
      "Looking for a reliable online daily essentials store in India? Shop fresh groceries, dairy & household items with fast delivery and trusted quality from The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/online-daily-essentials-store-in-india",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Online Daily Essentials Store in India | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Daily Essentials Store in India | The Buyzaar Mart",
    description:
      "Looking for a reliable online daily essentials store in India? Shop fresh groceries, dairy & household items with fast delivery and trusted quality from The Buyzaar Mart.",
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