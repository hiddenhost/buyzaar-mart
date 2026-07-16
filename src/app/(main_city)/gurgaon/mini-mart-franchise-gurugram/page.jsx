import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mini Mart Franchise in Gurugram | Buyzaar Mart",
  description:
    "Open a mini mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, small footprint & quick setup. Enquire today!",
  keywords: [
    "mini mart franchise Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "small format retail franchise",
    "mini supermarket business India",
    "compact mart franchise",
    "low investment supermarket franchise in Lucknow",
    "small budget franchise Gurugram",
    "mini grocery store franchise",
    "micro retail franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/mini-mart-franchise-gurugram",
  },
  openGraph: {
    title: "Mini Mart Franchise in Gurugram | Buyzaar Mart",
    description:
      "Open a mini mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, small footprint & quick setup. Enquire today!",
    url: "https://www.thebuyzaarmart.com/gurgaon/mini-mart-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mini Mart Franchise in Gurugram | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Mart Franchise in Gurugram | Buyzaar Mart",
    description:
      "Open a mini mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, small footprint & quick setup. Enquire today!",
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