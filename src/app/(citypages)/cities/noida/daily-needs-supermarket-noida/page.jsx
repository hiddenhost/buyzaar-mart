import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Needs Supermarket Noida | The Buyzaar Mart",

  description:
    "Looking for a dependable daily needs supermarket in Noida? The Buyzaar Mart offers groceries, fresh produce, dairy, and household essentials under one roof.",

  keywords: [
    "daily needs supermarket noida",
    "supermarket noida",
    "daily needs store noida",
    "grocery supermarket noida",
    "buyzaar mart noida",
    "household essentials noida",
    "fresh produce noida",
    "online grocery noida",
    "neighbourhood store noida",
    "daily essentials shopping noida",
  ],

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/daily-needs-supermarket-noida",
  },

  openGraph: {
    title: "Daily Needs Supermarket Noida | The Buyzaar Mart",

    description:
      "Looking for a dependable daily needs supermarket in Noida? The Buyzaar Mart offers groceries, fresh produce, dairy, and household essentials under one roof.",

    url: "https://www.thebuyzaarmart.com/cities/noida/daily-needs-supermarket-noida",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Supermarket Noida | The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Daily Needs Supermarket Noida | The Buyzaar Mart",

    description:
      "Looking for a dependable daily needs supermarket in Noida? The Buyzaar Mart offers groceries, fresh produce, dairy, and household essentials under one roof.",

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