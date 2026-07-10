import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Essentials Store Franchise in Gurgaon | Buyzaar Mart",
  description:
    "Start a daily essentials store franchise with Buyzaar Mart in Gurgaon. Explore benefits, investment options, store formats, and the application process today.",
  keywords: [
    "daily essentials store franchise Gurgaon",
    "Buyzaar Mart franchise Gurgaon",
    "grocery store franchise Gurugram",
    "retail franchise opportunity Gurgaon",
    "supermarket franchise Gurgaon",
    "organised retail business Gurugram",
    "franchise investment Gurgaon",
    "Buyzaar Mart Gurugram",
    "daily needs store franchise India",
    "franchise store setup Gurgaon",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/daily-essentials-store-franchise-gurgaon",
  },
  openGraph: {
    title: "Daily Essentials Store Franchise in Gurgaon | Buyzaar Mart",
    description:
      "Start a daily essentials store franchise with Buyzaar Mart in Gurgaon. Explore benefits, investment options, store formats, and the application process today.",
    url: "https://www.thebuyzaarmart.com/delhi/daily-essentials-store-franchise-gurgaon",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Essentials Store Franchise in Gurgaon | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Essentials Store Franchise in Gurgaon | Buyzaar Mart",
    description:
      "Start a daily essentials store franchise with Buyzaar Mart in Gurgaon. Explore benefits, investment options, store formats, and the application process today.",
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