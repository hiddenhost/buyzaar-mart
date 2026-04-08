import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Modern Grocery Store Muzaffarnagar | The Buyzaar Mart",

  description:
    "Open a modern grocery store in Muzaffarnagar with The Buyzaar Mart. See Mini Mart & Super Mart investment charts and ROI details. Join us today.",

  keywords:
    "top grocery store muzaffarnagar, buyzaar mart muzaffarnagar, grocery store muzaffarnagar, fresh produce muzaffarnagar, daily needs muzaffarnagar, family packs muzaffarnagar, reliable shopping muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/modern-grocery-store-muzaffarnagar",
  },

  openGraph: {
    title: "Modern Grocery Store Muzaffarnagar | The Buyzaar Mart",

    description:
      "Open a modern grocery store in Muzaffarnagar with The Buyzaar Mart. See Mini Mart & Super Mart investment charts and ROI details. Join us today.",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/modern-grocery-store-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Modern Grocery Store Muzaffarnagar | The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Modern Grocery Store Muzaffarnagar | The Buyzaar Mart",

    description:
      "Open a modern grocery store in Muzaffarnagar with The Buyzaar Mart. See Mini Mart & Super Mart investment charts and ROI details. Join us today.",

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