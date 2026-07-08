import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Essentials Franchise in Prayagraj | Buyzaar Mart",
  description:
    "Invest in a daily essentials franchise in Prayagraj with Buyzaar Mart. Stable demand, wide product range, and complete franchise support for steady growth.",
  keywords: [
    "daily essentials franchise Prayagraj",
    "Buyzaar Mart franchise",
    "grocery franchise Prayagraj",
    "household essentials store franchise",
    "retail franchise India",
    "essential goods franchise UP",
    "franchise business opportunity Prayagraj",
    "recession-proof franchise India",
    "convenience store franchise Prayagraj",
    "daily needs franchise investment",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/prayagraj/daily-essentials-franchise-prayagraj",
  },
  openGraph: {
    title: "Daily Essentials Franchise in Prayagraj | Buyzaar Mart",
    description:
      "Invest in a daily essentials franchise in Prayagraj with Buyzaar Mart. Stable demand, wide product range, and complete franchise support for steady growth.",
    url: "https://www.thebuyzaarmart.com/prayagraj/daily-essentials-franchise-prayagraj",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Essentials Franchise in Prayagraj | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Essentials Franchise in Prayagraj | Buyzaar Mart",
    description:
      "Invest in a daily essentials franchise in Prayagraj with Buyzaar Mart. Stable demand, wide product range, and complete franchise support for steady growth.",
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