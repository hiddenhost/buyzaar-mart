import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Chain Muzaffarnagar | Start Profitable Supermarket with Buyzaar Mart",

  description:
    "Start a profitable grocery chain in Muzaffarnagar with The Buyzaar Mart. Low investment, FOCM model, high ROI & full support. Apply now!",

  keywords:
    "top grocery store muzaffarnagar, buyzaar mart muzaffarnagar, grocery store muzaffarnagar, fresh produce muzaffarnagar, daily needs muzaffarnagar, family packs muzaffarnagar, reliable shopping muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-chain-muzaffarnagar",
  },

  openGraph: {
    title: "Grocery Chain Muzaffarnagar | Start Profitable Supermarket with Buyzaar Mart",

    description:
      "Start a profitable grocery chain in Muzaffarnagar with The Buyzaar Mart. Low investment, FOCM model, high ROI & full support. Apply now!",

    url:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-chain-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Chain Muzaffarnagar | Start Profitable Supermarket with Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grocery Chain Muzaffarnagar | Start Profitable Supermarket with Buyzaar Mart",

    description:
      "Start a profitable grocery chain in Muzaffarnagar with The Buyzaar Mart. Low investment, FOCM model, high ROI & full support. Apply now!",

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