import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Organised Mart Franchise in Gurugram | Buyzaar Mart",
  description:
    "Start an organised mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, systemized operations & full support. Apply now!",
  keywords: [
    "organised mart franchise Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "organised retail franchise India",
    "systemized grocery store",
    "branded mart franchise Gurugram",
    "low investment supermarket franchise in Lucknow",
    "organised grocery business",
    "structured retail franchise",
    "modern trade franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/organised-mart-franchise-gurugram",
  },
  openGraph: {
    title: "Organised Mart Franchise in Gurugram | Buyzaar Mart",
    description:
      "Start an organised mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, systemized operations & full support. Apply now!",
    url: "https://www.thebuyzaarmart.com/gurgaon/organised-mart-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Organised Mart Franchise in Gurugram | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organised Mart Franchise in Gurugram | Buyzaar Mart",
    description:
      "Start an organised mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, systemized operations & full support. Apply now!",
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