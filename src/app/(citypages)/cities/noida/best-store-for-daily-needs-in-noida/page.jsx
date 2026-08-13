import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Store for Daily Needs in Noida | The Buyzaar Mart",
  description:
    "Discover the best store for daily needs in Noida with The Buyzaar Mart, offering groceries, fresh produce, and household essentials across sectors.",
  keywords: [
    "best store for daily needs in Noida",
    "daily needs store Noida",
    "grocery and daily essentials Noida",
    "The Buyzaar Mart Noida",
    "best supermarket Noida",
    "household essentials store Noida",
    "daily needs shopping Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/best-store-for-daily-needs-in-noida",
  },
  openGraph: {
    title: "Best Store for Daily Needs in Noida | The Buyzaar Mart",
    description:
      "Discover the best store for daily needs in Noida with The Buyzaar Mart, offering groceries, fresh produce, and household essentials across sectors.",
    url: "https://www.thebuyzaarmart.com/cities/noida/best-store-for-daily-needs-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Store for Daily Needs in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Store for Daily Needs in Noida | The Buyzaar Mart",
    description:
      "Discover the best store for daily needs in Noida with The Buyzaar Mart, offering groceries, fresh produce, and household essentials across sectors.",
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