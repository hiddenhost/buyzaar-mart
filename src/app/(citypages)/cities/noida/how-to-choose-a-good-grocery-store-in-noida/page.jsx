import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Choose a Good Grocery Store in Noida | The Buyzaar Mart Guide",

  description:
    "Learn how to choose a good grocery store in Noida with this simple checklist. See why The Buyzaar Mart ticks every box for quality, price & convenience.",

  keywords: [
    "how to choose a good grocery store in Noida",
    "best grocery store checklist Noida",
    "choosing a supermarket in Noida",
    "grocery store selection guide",
    "tips to pick grocery store Noida",
    "reliable grocery store Noida",
    "The Buyzaar Mart Noida",
    "grocery shopping guide Noida",
    "quality grocery store Noida",
    "organized retail Noida",
  ],

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/how-to-choose-a-good-grocery-store-in-noida",
  },

  openGraph: {
    title:
      "How to Choose a Good Grocery Store in Noida | The Buyzaar Mart Guide",

    description:
      "Learn how to choose a good grocery store in Noida with this simple checklist. See why The Buyzaar Mart ticks every box for quality, price & convenience.",

    url: "https://www.thebuyzaarmart.com/cities/noida/how-to-choose-a-good-grocery-store-in-noida",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt:
          "How to Choose a Good Grocery Store in Noida | The Buyzaar Mart Guide",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "How to Choose a Good Grocery Store in Noida | The Buyzaar Mart Guide",

    description:
      "Learn how to choose a good grocery store in Noida with this simple checklist. See why The Buyzaar Mart ticks every box for quality, price & convenience.",

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