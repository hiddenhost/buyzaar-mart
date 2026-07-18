import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Daily Needs Store Franchise in Greater Noida | The Buyzaar Mart FOCM Model",
  description:
    "Start a highly profitable daily needs store franchise in Greater Noida with The Buyzaar Mart. Invest in our risk-free, passive income FOCM business model today.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greaternoida/daily-needs-store-franchise-greater-noida",
  },
  openGraph: {
    title:
      "Daily Needs Store Franchise in Greater Noida | The Buyzaar Mart FOCM Model",
    description:
      "Start a highly profitable daily needs store franchise in Greater Noida with The Buyzaar Mart. Invest in our risk-free, passive income FOCM business model today.",
    url: "https://www.thebuyzaarmart.com/greaternoida/daily-needs-store-franchise-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Store Franchise in Greater Noida | The Buyzaar Mart FOCM Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Daily Needs Store Franchise in Greater Noida | The Buyzaar Mart FOCM Model",
    description:
      "Start a highly profitable daily needs store franchise in Greater Noida with The Buyzaar Mart. Invest in our risk-free, passive income FOCM business model today.",
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