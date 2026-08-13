import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Supermarket for Daily Needs in Noida | The Buyzaar Mart",

  description:
    "Looking for the best supermarket for daily needs in Noida? The Buyzaar Mart offers groceries, fresh produce, dairy, and household essentials under one roof.",

  keywords: [
    "best supermarket for daily needs in noida",
    "daily needs store noida",
    "supermarket noida",
    "grocery store noida",
    "buyzaar mart noida",
    "daily essentials noida",
    "household essentials noida",
    "fresh groceries noida",
    "online grocery noida",
    "neighbourhood supermarket noida",
  ],

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/best-supermarket-for-daily-needs-in-noida",
  },

  openGraph: {
    title: "Best Supermarket for Daily Needs in Noida | The Buyzaar Mart",

    description:
      "Looking for the best supermarket for daily needs in Noida? The Buyzaar Mart offers groceries, fresh produce, dairy, and household essentials under one roof.",

    url: "https://www.thebuyzaarmart.com/cities/noida/best-supermarket-for-daily-needs-in-noida",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Supermarket for Daily Needs in Noida | The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Supermarket for Daily Needs in Noida | The Buyzaar Mart",

    description:
      "Looking for the best supermarket for daily needs in Noida? The Buyzaar Mart offers groceries, fresh produce, dairy, and household essentials under one roof.",

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