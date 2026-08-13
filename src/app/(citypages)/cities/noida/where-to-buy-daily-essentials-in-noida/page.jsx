import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Where to Buy Daily Essentials in Noida | The Buyzaar Mart",
  description:
    "Wondering where to buy daily essentials in Noida? Explore the best grocery marts, local markets & delivery options for fresh, affordable shopping with The Buyzaar Mart.",
  keywords: [
    "where to buy daily essentials in Noida",
    "daily essentials Noida",
    "grocery shopping Noida",
    "best grocery mart in Noida",
    "daily essentials store near me",
    "household essentials Noida",
    "fresh vegetables Noida",
    "The Buyzaar Mart",
    "supermarket Noida sectors",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/where-to-buy-daily-essentials-in-noida",
  },
  openGraph: {
    title: "Where to Buy Daily Essentials in Noida | The Buyzaar Mart",
    description:
      "Wondering where to buy daily essentials in Noida? Explore the best grocery marts, local markets & delivery options for fresh, affordable shopping with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/cities/noida/where-to-buy-daily-essentials-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Where to Buy Daily Essentials in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Buy Daily Essentials in Noida | The Buyzaar Mart",
    description:
      "Wondering where to buy daily essentials in Noida? Explore the best grocery marts, local markets & delivery options for fresh, affordable shopping with The Buyzaar Mart.",
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