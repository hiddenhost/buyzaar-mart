import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Online Grocery Store Noida | Order Groceries Online with The Buyzaar Mart",

  description:
    "Shop at a trusted online grocery store in Noida. The Buyzaar Mart offers easy online ordering, fresh essentials & fast delivery across Noida sectors.",

  keywords: [
    "online grocery store Noida",
    "online grocery shopping Noida",
    "Noida online grocery",
    "grocery ordering app Noida",
    "online kirana store Noida",
    "digital grocery shopping Noida",
    "The Buyzaar Mart Noida online",
    "order groceries online Noida",
    "Noida grocery e-commerce",
    "grocery website Noida",
  ],

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/online-grocery-store-noida",
  },

  openGraph: {
    title:
      "Online Grocery Store Noida | Order Groceries Online with The Buyzaar Mart",

    description:
      "Shop at a trusted online grocery store in Noida. The Buyzaar Mart offers easy online ordering, fresh essentials & fast delivery across Noida sectors.",

    url: "https://www.thebuyzaarmart.com/cities/noida/online-grocery-store-noida",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt:
          "Online Grocery Store Noida | Order Groceries Online with The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Online Grocery Store Noida | Order Groceries Online with The Buyzaar Mart",

    description:
      "Shop at a trusted online grocery store in Noida. The Buyzaar Mart offers easy online ordering, fresh essentials & fast delivery across Noida sectors.",

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