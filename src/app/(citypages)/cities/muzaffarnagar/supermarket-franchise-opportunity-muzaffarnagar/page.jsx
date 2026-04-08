import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Opportunity Muzaffarnagar | Buyzaar Mart",

  description:
    "Start a supermarket franchise in Muzaffarnagar with Buyzaar Mart. Explore investment, profit, FOCM model & hypermart breakdown. Low-risk, high-growth business opportunity.",

  keywords:
    "top grocery store muzaffarnagar, buyzaar mart muzaffarnagar, grocery store muzaffarnagar, fresh produce muzaffarnagar, daily needs muzaffarnagar, family packs muzaffarnagar, reliable shopping muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/supermarket-franchise-opportunity-muzaffarnagar",
  },

  openGraph: {
    title: "Supermarket Franchise Opportunity Muzaffarnagar | Buyzaar Mart",

    description:
      "Start a supermarket franchise in Muzaffarnagar with Buyzaar Mart. Explore investment, profit, FOCM model & hypermart breakdown. Low-risk, high-growth business opportunity.",

    url:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/supermarket-franchise-opportunity-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Opportunity Muzaffarnagar | Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Opportunity Muzaffarnagar | Buyzaar Mart",

    description:
      "Start a supermarket franchise in Muzaffarnagar with Buyzaar Mart. Explore investment, profit, FOCM model & hypermart breakdown. Low-risk, high-growth business opportunity.",

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