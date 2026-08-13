import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Mart in Noida for Household Items | The Buyzaar Mart",

  description:
    "Find the best grocery mart in Noida for household items at The Buyzaar Mart. Homecare, hygiene, cleaning essentials & daily supplies, all under one roof.",

  keywords: [
    "best grocery mart in Noida for household items",
    "household items store Noida",
    "homecare products Noida",
    "cleaning supplies store Noida",
    "daily household essentials Noida",
    "grocery mart household products Noida",
    "The Buyzaar Mart household items",
    "homecare and hygiene Noida",
    "household goods supermarket Noida",
    "everyday essentials store Noida",
  ],

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/best-grocery-mart-in-noida-for-household-items",
  },

  openGraph: {
    title: "Best Grocery Mart in Noida for Household Items | The Buyzaar Mart",

    description:
      "Find the best grocery mart in Noida for household items at The Buyzaar Mart. Homecare, hygiene, cleaning essentials & daily supplies, all under one roof.",

    url: "https://www.thebuyzaarmart.com/cities/noida/best-grocery-mart-in-noida-for-household-items",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt:
          "Best Grocery Mart in Noida for Household Items | The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Grocery Mart in Noida for Household Items | The Buyzaar Mart",

    description:
      "Find the best grocery mart in Noida for household items at The Buyzaar Mart. Homecare, hygiene, cleaning essentials & daily supplies, all under one roof.",

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