import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Retail Business Muzaffarnagar | The Buyzaar Mart",

  description:
    "Planning a grocery retail business in Muzaffarnagar? The Buyzaar Mart shares the FOCM model, full hypermart investment breakdown, and a proven path to retail success.",

  keywords:
    "top grocery store muzaffarnagar, buyzaar mart muzaffarnagar, grocery store muzaffarnagar, fresh produce muzaffarnagar, daily needs muzaffarnagar, family packs muzaffarnagar, reliable shopping muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-retail-business-muzaffarnagar",
  },

  openGraph: {
    title: "Grocery Retail Business Muzaffarnagar | The Buyzaar Mart",

    description:
      "Planning a grocery retail business in Muzaffarnagar? The Buyzaar Mart shares the FOCM model, full hypermart investment breakdown, and a proven path to retail success.",

    url:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-retail-business-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Retail Business Muzaffarnagar | The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grocery Retail Business Muzaffarnagar | The Buyzaar Mart",

    description:
      "Planning a grocery retail business in Muzaffarnagar? The Buyzaar Mart shares the FOCM model, full hypermart investment breakdown, and a proven path to retail success.",

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