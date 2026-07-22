import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Essentials Franchise in Gurugram | The Buyzaar Mart",
  description:
    "Start a daily essentials franchise in Gurugram with The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM-managed store for groceries, FMCG & household needs.",
  keywords: [
    "daily essentials franchise Gurugram",
    "Buyzaar Mart Gurugram",
    "daily needs store franchise",
    "low investment supermarket franchise",
    "grocery franchise Gurugram",
    "FOCM franchise model",
    "FMCG franchise India",
    "retail business franchise Gurugram",
    "low investment supermarket franchise Lucknow",
    "neighbourhood store franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/daily-essentials-franchise-gurugram",
  },
  openGraph: {
    title: "Daily Essentials Franchise in Gurugram | The Buyzaar Mart",
    description:
      "Start a daily essentials franchise in Gurugram with The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM-managed store for groceries, FMCG & household needs.",
    url: "https://www.thebuyzaarmart.com/gurgaon/daily-essentials-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Essentials Franchise in Gurugram | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Essentials Franchise in Gurugram | The Buyzaar Mart",
    description:
      "Start a daily essentials franchise in Gurugram with The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM-managed store for groceries, FMCG & household needs.",
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