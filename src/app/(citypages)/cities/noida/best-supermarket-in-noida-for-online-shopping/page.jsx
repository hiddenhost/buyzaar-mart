import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Supermarket in Noida for Online Shopping | The Buyzaar Mart",
  description:
    "Shop the best supermarket in Noida for online shopping with The Buyzaar Mart. Fresh groceries, daily essentials & fast delivery, all from one trusted brand.",
  keywords: [
    "best supermarket in Noida for online shopping",
    "online supermarket Noida",
    "supermarket online shopping Noida",
    "online grocery supermarket Noida",
    "best supermarket Noida",
    "online shopping grocery store Noida",
    "The Buyzaar Mart online supermarket",
    "order supermarket items online Noida",
    "online mart Noida",
    "supermarket home delivery Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/best-supermarket-in-noida-for-online-shopping",
  },
  openGraph: {
    title: "Best Supermarket in Noida for Online Shopping | The Buyzaar Mart",
    description:
      "Shop the best supermarket in Noida for online shopping with The Buyzaar Mart. Fresh groceries, daily essentials & fast delivery, all from one trusted brand.",
    url: "https://www.thebuyzaarmart.com/cities/noida/best-supermarket-in-noida-for-online-shopping",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Supermarket in Noida for Online Shopping | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Supermarket in Noida for Online Shopping | The Buyzaar Mart",
    description:
      "Shop the best supermarket in Noida for online shopping with The Buyzaar Mart. Fresh groceries, daily essentials & fast delivery, all from one trusted brand.",
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