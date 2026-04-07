import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Start Supermarket Business Muzaffarnagar – Complete Guide & Franchise Opportunity | The Buyzaar Mart",

  description:
    "Want to start a supermarket business in Muzaffarnagar? Discover the complete setup guide, franchise model, investment details, and how The Buyzaar Mart franchise can help you build a profitable retail business. Read now!",

  keywords:
    "open supermarket in muzaffarnagar, best supermarket in muzaffarnagar, fresh groceries muzaffarnagar, fruits and vegetables muzaffarnagar, household essentials muzaffarnagar, The Buyzaar Mart muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/supermarket-franchise-in-muzaffarnagar",
  },

  openGraph: {
    title: "Start Supermarket Business Muzaffarnagar – Complete Guide & Franchise Opportunity | The Buyzaar Mart",

    description:
      "Want to start a supermarket business in Muzaffarnagar? Discover the complete setup guide, franchise model, investment details, and how The Buyzaar Mart franchise can help you build a profitable retail business. Read now!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/supermarket-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Start Supermarket Business in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Start Supermarket Business Muzaffarnagar – Complete Guide & Franchise Opportunity | The Buyzaar Mart",

    description:
      "Want to start a supermarket business in Muzaffarnagar? Discover the complete setup guide, franchise model, investment details, and how The Buyzaar Mart franchise can help you build a profitable retail business. Read now!",

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