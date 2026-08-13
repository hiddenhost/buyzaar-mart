import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Online Shopping for Daily Needs in Noida | The Buyzaar Mart",
  description:
    "Shop online for daily needs in Noida with The Buyzaar Mart, offering fresh produce, groceries, and household essentials with reliable doorstep delivery.",
  keywords: [
    "online shopping for daily needs Noida",
    "online grocery shopping Noida",
    "daily essentials online Noida",
    "The Buyzaar Mart Noida",
    "online supermarket Noida",
    "doorstep delivery Noida",
    "online daily needs store Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/online-shopping-for-daily-needs-in-noida",
  },
  openGraph: {
    title: "Online Shopping for Daily Needs in Noida | The Buyzaar Mart",
    description:
      "Shop online for daily needs in Noida with The Buyzaar Mart, offering fresh produce, groceries, and household essentials with reliable doorstep delivery.",
    url: "https://www.thebuyzaarmart.com/cities/noida/online-shopping-for-daily-needs-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Online Shopping for Daily Needs in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Shopping for Daily Needs in Noida | The Buyzaar Mart",
    description:
      "Shop online for daily needs in Noida with The Buyzaar Mart, offering fresh produce, groceries, and household essentials with reliable doorstep delivery.",
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