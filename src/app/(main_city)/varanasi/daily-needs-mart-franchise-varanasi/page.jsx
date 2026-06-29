import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Needs Mart Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Start a daily needs mart franchise in Varanasi with The Buyzaar Mart. Essential-focused retail, POS billing, and brand support for steady, recurring business.",
  keywords: [
    "daily needs mart franchise Varanasi",
    "The Buyzaar Mart Varanasi",
    "daily essentials store business",
    "daily use products franchise UP",
    "grocery and daily needs retail",
    "recurring revenue retail franchise",
    "POS billing daily needs store",
    "household essentials mart Varanasi",
    "everyday essentials franchise",
    "daily needs retail investment",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/varanasi/daily-needs-mart-franchise-varanasi",
  },
  openGraph: {
    title: "Daily Needs Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Start a daily needs mart franchise in Varanasi with The Buyzaar Mart. Essential-focused retail, POS billing, and brand support for steady, recurring business.",
    url: "https://www.thebuyzaarmart.com/varanasi/daily-needs-mart-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Mart Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Needs Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Start a daily needs mart franchise in Varanasi with The Buyzaar Mart. Essential-focused retail, POS billing, and brand support for steady, recurring business.",
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