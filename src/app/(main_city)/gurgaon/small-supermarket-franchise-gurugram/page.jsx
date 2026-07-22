import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Small Supermarket Franchise in Gurugram | The Buyzaar Mart",
  description:
    "Start a small supermarket franchise in Gurugram with The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM-managed daily needs retail format.",
  keywords: [
    "small supermarket franchise Gurugram",
    "Buyzaar Mart Gurugram",
    "low investment supermarket franchise",
    "grocery franchise Gurugram",
    "mini mart franchise",
    "FOCM franchise model",
    "daily needs store franchise",
    "retail business franchise Gurugram",
    "low investment supermarket franchise Lucknow",
    "neighbourhood supermarket franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/small-supermarket-franchise-gurugram",
  },
  openGraph: {
    title: "Small Supermarket Franchise in Gurugram | The Buyzaar Mart",
    description:
      "Start a small supermarket franchise in Gurugram with The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM-managed daily needs retail format.",
    url: "https://www.thebuyzaarmart.com/gurgaon/small-supermarket-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Small Supermarket Franchise in Gurugram | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Supermarket Franchise in Gurugram | The Buyzaar Mart",
    description:
      "Start a small supermarket franchise in Gurugram with The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM-managed daily needs retail format.",
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