import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Daily Needs Shopping Store in Noida | The Buyzaar Mart",
  description:
    "The Buyzaar Mart is a trusted daily needs shopping store in Noida, offering groceries, fresh produce, and household essentials across sectors.",
  keywords: [
    "daily needs shopping store in Noida",
    "daily needs store Noida",
    "grocery shopping Noida",
    "The Buyzaar Mart Noida",
    "household essentials Noida",
    "best daily needs store Noida",
    "everyday shopping Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/daily-needs-shopping-store-in-noida",
  },
  openGraph: {
    title: "Daily Needs Shopping Store in Noida | The Buyzaar Mart",
    description:
      "The Buyzaar Mart is a trusted daily needs shopping store in Noida, offering groceries, fresh produce, and household essentials across sectors.",
    url: "https://www.thebuyzaarmart.com/cities/noida/daily-needs-shopping-store-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Shopping Store in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Needs Shopping Store in Noida | The Buyzaar Mart",
    description:
      "The Buyzaar Mart is a trusted daily needs shopping store in Noida, offering groceries, fresh produce, and household essentials across sectors.",
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