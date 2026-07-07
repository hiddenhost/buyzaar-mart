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
    "Buyzaar Mart Varanasi",
    "grocery franchise India",
    "FMCG franchise Varanasi",
    "household essentials store franchise",
    "retail franchise Uttar Pradesh",
    "Mini Mart Super Mart Hyper Mart",
    "stable retail business Varanasi",
    "low risk franchise business",
    "daily needs store franchise",
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