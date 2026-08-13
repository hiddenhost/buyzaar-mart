import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Needs Store in Noida | Fresh Groceries at The Buyzaar Mart",
  description:
    "Shop fresh fruits, dairy, groceries, and household essentials at The Buyzaar Mart, your trusted daily needs store in Noida with quick service and fair pricing.",
  keywords: [
    "daily needs store in Noida",
    "grocery store in Noida",
    "daily needs mart Noida",
    "The Buyzaar Mart Noida",
    "fresh vegetables Noida",
    "household essentials Noida",
    "supermarket in Noida",
    "neighbourhood grocery store Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/daily-needs-store-in-noida",
  },
  openGraph: {
    title: "Daily Needs Store in Noida | Fresh Groceries at The Buyzaar Mart",
    description:
      "Shop fresh fruits, dairy, groceries, and household essentials at The Buyzaar Mart, your trusted daily needs store in Noida with quick service and fair pricing.",
    url: "https://www.thebuyzaarmart.com/cities/noida/daily-needs-store-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Store in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Needs Store in Noida | Fresh Groceries at The Buyzaar Mart",
    description:
      "Shop fresh fruits, dairy, groceries, and household essentials at The Buyzaar Mart, your trusted daily needs store in Noida with quick service and fair pricing.",
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