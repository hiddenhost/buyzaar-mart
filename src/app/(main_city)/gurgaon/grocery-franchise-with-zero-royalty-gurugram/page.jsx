import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise with Zero Royalty in Gurugram | The Buyzaar Mart",
  description:
    "Explore a grocery franchise with zero royalty in Gurugram through The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM-managed daily needs retail model.",
  keywords: [
    "grocery franchise zero royalty Gurugram",
    "Buyzaar Mart Gurugram",
    "no royalty grocery franchise",
    "low investment supermarket franchise",
    "grocery franchise Gurugram",
    "FOCM franchise model",
    "daily needs store franchise India",
    "retail business franchise Gurugram",
    "low investment supermarket franchise Lucknow",
    "zero royalty franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/grocery-franchise-with-zero-royalty-gurugram",
  },
  openGraph: {
    title: "Grocery Franchise with Zero Royalty in Gurugram | The Buyzaar Mart",
    description:
      "Explore a grocery franchise with zero royalty in Gurugram through The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM-managed daily needs retail model.",
    url: "https://www.thebuyzaarmart.com/gurgaon/grocery-franchise-with-zero-royalty-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise with Zero Royalty in Gurugram | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise with Zero Royalty in Gurugram | The Buyzaar Mart",
    description:
      "Explore a grocery franchise with zero royalty in Gurugram through The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM-managed daily needs retail model.",
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