import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Essentials Franchise in Agra | Buyzaar Mart Investment Guide",
  description:
    "Explore the daily essentials franchise opportunity in Agra with Buyzaar Mart — store formats, investment, categories covered, and application process.",
  keywords: [
    "daily essentials franchise agra",
  "daily needs franchise agra",
  "daily use products franchise agra",
  "grocery essentials franchise agra",
  "essential goods franchise agra",
  "household essentials franchise agra",
  "everyday essentials franchise agra",
  "daily needs store franchise agra",
  "daily essentials store agra",
  "grocery store franchise agra",
  "mini mart franchise agra",
  "small supermarket franchise agra",
  "neighbourhood mart franchise agra",
  "retail franchise agra",
  "fmcg franchise agra",
  "organised retail franchise agra",
  "grocery retail franchise agra",
  "daily grocery franchise agra",
  "food and grocery franchise agra",
  "branded grocery franchise agra",
  "low investment grocery franchise agra",
  "mart franchise agra",
  "retail business opportunity agra",
  "grocery business franchise agra",
  "convenience store franchise agra",
  "best grocery franchise agra",
  "profitable retail franchise agra",
  "Buyzaar Mart daily essentials",
  "Buyzaar Mart Agra franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/daily-essentials-franchise-agra",
  },
  openGraph: {
    title: "Daily Essentials Franchise in Agra | Buyzaar Mart Investment Guide",
    description:
      "Explore the daily essentials franchise opportunity in Agra with Buyzaar Mart — store formats, investment, categories covered, and application process.",
    url: "https://www.thebuyzaarmart.com/agra/daily-essentials-franchise-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Essentials Franchise in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Essentials Franchise in Agra | Buyzaar Mart Investment Guide",
    description:
      "Explore the daily essentials franchise opportunity in Agra with Buyzaar Mart — store formats, investment, categories covered, and application process.",
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