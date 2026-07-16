import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Franchise Gurugram | The Buyzaar Mart",
  description:
    "Start a grocery mart franchise in Gurugram with The Buyzaar Mart. Low investment supermarket franchise options with full operational and marketing support.",
  keywords: [
    "grocery mart franchise Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "supermarket franchise Gurugram",
    "grocery franchise business India",
    "low investment supermarket franchise Lucknow",
    "FOCM FOCO franchise model",
    "mini mart super mart hyper mart",
    "grocery retail franchise NCR",
    "best franchise opportunities Gurugram",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/grocery-mart-franchise-gurugram",
  },
  openGraph: {
    title: "Grocery Mart Franchise Gurugram | The Buyzaar Mart",
    description:
      "Start a grocery mart franchise in Gurugram with The Buyzaar Mart. Low investment supermarket franchise options with full operational and marketing support.",
    url: "https://www.thebuyzaarmart.com/gurgaon/grocery-mart-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Franchise Gurugram | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Mart Franchise Gurugram | The Buyzaar Mart",
    description:
      "Start a grocery mart franchise in Gurugram with The Buyzaar Mart. Low investment supermarket franchise options with full operational and marketing support.",
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