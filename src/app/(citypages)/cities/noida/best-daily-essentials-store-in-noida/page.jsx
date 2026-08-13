import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Daily Essentials Store in Noida | The Buyzaar Mart",
  description:
    "Searching for the best daily essentials store in Noida? Discover what makes a store truly reliable and why The Buyzaar Mart is a top choice for fresh, affordable shopping.",
  keywords: [
    "best daily essentials store in Noida",
    "daily essentials store Noida",
    "best grocery store in Noida",
    "top supermarket Noida",
    "daily needs shop Noida",
    "best supermarket near me Noida",
    "household essentials store Noida",
    "The Buyzaar Mart",
    "grocery shopping Noida sectors",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/best-daily-essentials-store-in-noida",
  },
  openGraph: {
    title: "Best Daily Essentials Store in Noida | The Buyzaar Mart",
    description:
      "Searching for the best daily essentials store in Noida? Discover what makes a store truly reliable and why The Buyzaar Mart is a top choice for fresh, affordable shopping.",
    url: "https://www.thebuyzaarmart.com/cities/noida/best-daily-essentials-store-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Daily Essentials Store in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Daily Essentials Store in Noida | The Buyzaar Mart",
    description:
      "Searching for the best daily essentials store in Noida? Discover what makes a store truly reliable and why The Buyzaar Mart is a top choice for fresh, affordable shopping.",
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