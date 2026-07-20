import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Essentials Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Start a daily essentials franchise in Varanasi with The Buyzaar Mart. Explore product categories, investment details, franchise models, and the process to apply.",
  keywords: [
    "daily essentials franchise Varanasi",
    "Buyzaar Mart daily essentials franchise",
    "daily needs franchise Varanasi",
    "daily use products franchise Varanasi",
    "grocery franchise Varanasi",
    "supermarket franchise Varanasi",
    "mini mart franchise Varanasi",
    "neighbourhood mart franchise Varanasi",
    "convenience store franchise Varanasi",
    "retail franchise Varanasi",
    "FMCG franchise Varanasi",
    "organised retail franchise Varanasi",
    "grocery store franchise Varanasi",
    "daily essentials store franchise Varanasi",
    "daily needs supermarket Varanasi",
    "modern grocery franchise Varanasi",
    "food and grocery franchise Varanasi",
    "low investment grocery franchise Varanasi",
    "profitable grocery franchise Varanasi",
    "Buyzaar Mart franchise Varanasi",
    "retail business opportunity Varanasi",
    "franchise for daily essentials Varanasi",
    "daily household products franchise Varanasi",
    "grocery business franchise Varanasi",
    "best grocery franchise Varanasi",
    "daily essentials retail business Varanasi",
    "franchise for grocery store Varanasi",
    "organised grocery store Varanasi",
    "daily essentials mart Varanasi",
    "daily essentials business opportunity Varanasi"
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/daily-essentials-franchise-varanasi",
  },
  openGraph: {
    title: "Daily Essentials Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Start a daily essentials franchise in Varanasi with The Buyzaar Mart. Explore product categories, investment details, franchise models, and the process to apply.",
    url: "https://www.thebuyzaarmart.com/varanasi/daily-essentials-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Essentials Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Essentials Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Start a daily essentials franchise in Varanasi with The Buyzaar Mart. Explore product categories, investment details, franchise models, and the process to apply.",
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