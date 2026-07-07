import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Small Mart Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Start a small mart franchise in Varanasi with The Buyzaar Mart. Explore low investment options, store setup, franchise models, and the step-by-step process to apply.",
  keywords: [
    "small mart franchise Varanasi",
    "Buyzaar Mart Varanasi",
    "Mini Mart franchise",
    "low investment grocery franchise",
    "small grocery store franchise India",
    "compact mart franchise Varanasi",
    "FOCM FOCO franchise",
    "retail franchise Uttar Pradesh",
    "budget franchise business Varanasi",
    "small format supermarket franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/small-mart-franchise-varanasi",
  },
  openGraph: {
    title: "Small Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Start a small mart franchise in Varanasi with The Buyzaar Mart. Explore low investment options, store setup, franchise models, and the step-by-step process to apply.",
    url: "https://www.thebuyzaarmart.com/varanasi/small-mart-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Small Mart Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Mart Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Start a small mart franchise in Varanasi with The Buyzaar Mart. Explore low investment options, store setup, franchise models, and the step-by-step process to apply.",
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