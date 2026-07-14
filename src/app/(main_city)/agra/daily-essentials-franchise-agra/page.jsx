import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Essentials Franchise in Agra | Buyzaar Mart Investment Guide",
  description:
    "Explore the daily essentials franchise opportunity in Agra with Buyzaar Mart — store formats, investment, categories covered, and application process.",
  keywords: [
    "daily essentials franchise Agra",
    "grocery essentials franchise Agra",
    "Buyzaar Mart Agra",
    "household essentials retail franchise",
    "daily needs store franchise India",
    "Buyzaar Mart investment Agra",
    "essential goods franchise Agra",
    "grocery franchise Uttar Pradesh",
    "organized retail Agra",
    "Buyzaar Mart daily essentials",
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