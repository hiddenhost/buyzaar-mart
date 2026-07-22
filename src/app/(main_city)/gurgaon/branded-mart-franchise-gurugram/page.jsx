import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Branded Mart Franchise in Gurugram | The Buyzaar Mart",
  description:
    "Own a branded mart franchise in Gurugram with The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM support, and proven daily-needs retail format.",
  keywords: [
    "branded mart franchise Gurugram",
    "Buyzaar Mart Gurugram",
    "retail franchise Gurugram",
    "low investment supermarket franchise",
    "grocery franchise Gurugram",
    "FOCM franchise model",
    "daily needs store franchise",
    "branded supermarket franchise India",
    "low investment supermarket franchise Lucknow",
    "neighbourhood store franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurugram/branded-mart-franchise-in-gurugram",
  },
  openGraph: {
    title: "Branded Mart Franchise in Gurugram | The Buyzaar Mart",
    description:
      "Own a branded mart franchise in Gurugram with The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM support, and proven daily-needs retail format.",
    url: "https://www.thebuyzaarmart.com/gurugram/branded-mart-franchise-in-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Branded Mart Franchise in Gurugram | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded Mart Franchise in Gurugram | The Buyzaar Mart",
    description:
      "Own a branded mart franchise in Gurugram with The Buyzaar Mart. Low investment, FSSAI-licensed, FOCM support, and proven daily-needs retail format.",
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