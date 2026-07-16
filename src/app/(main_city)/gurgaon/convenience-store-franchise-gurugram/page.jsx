import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Convenience Store Franchise in Gurugram | Buyzaar Mart",
  description:
    "Start a convenience store franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, full setup support & quick ROI. Enquire today!",
  keywords: [
    "convenience store franchise Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "convenience store business Gurugram",
    "retail franchise India",
    "mini mart franchise opportunity",
    "low investment supermarket franchise in Lucknow",
    "24x7 convenience store franchise",
    "small format retail franchise",
    "grocery convenience store India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/convenience-store-franchise-gurugram",
  },
  openGraph: {
    title: "Convenience Store Franchise in Gurugram | Buyzaar Mart",
    description:
      "Start a convenience store franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, full setup support & quick ROI. Enquire today!",
    url: "https://www.thebuyzaarmart.com/gurgaon/convenience-store-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Convenience Store Franchise in Gurugram | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convenience Store Franchise in Gurugram | Buyzaar Mart",
    description:
      "Start a convenience store franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, full setup support & quick ROI. Enquire today!",
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