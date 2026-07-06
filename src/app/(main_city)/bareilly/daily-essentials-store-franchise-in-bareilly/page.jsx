import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Essentials Store Franchise in Bareilly | Buyzaar Mart",
  description:
    "Start a daily essentials store franchise in Bareilly with Buyzaar Mart. Steady demand, low-risk model, strong brand support. Explore the opportunity today!",
  keywords: [
    "daily essentials store franchise Bareilly",
    "Buyzaar Mart franchise",
    "daily needs store Bareilly",
    "grocery essentials franchise UP",
    "retail franchise Bareilly",
    "low investment franchise Bareilly",
    "daily needs supermarket franchise",
    "essentials retail business Bareilly",
    "Buyzaar Mart franchise cost",
    "small format retail franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/daily-essentials-store-franchise-in-bareilly",
  },
  openGraph: {
    title: "Daily Essentials Store Franchise in Bareilly | Buyzaar Mart",
    description:
      "Start a daily essentials store franchise in Bareilly with Buyzaar Mart. Steady demand, low-risk model, strong brand support. Explore the opportunity today!",
    url: "https://www.thebuyzaarmart.com/bareilly/daily-essentials-store-franchise-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Essentials Store Franchise in Bareilly | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Essentials Store Franchise in Bareilly | Buyzaar Mart",
    description:
      "Start a daily essentials store franchise in Bareilly with Buyzaar Mart. Steady demand, low-risk model, strong brand support. Explore the opportunity today!",
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