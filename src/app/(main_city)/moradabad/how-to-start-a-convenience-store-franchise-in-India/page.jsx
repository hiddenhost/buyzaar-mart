import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "How to Start a Convenience Store Franchise in India | Buyzaar Mart",
  description:
    "Step-by-step guide to starting a convenience store franchise in India with The Buyzaar Mart. Investment, process, formats, and support explained.",
  keywords: [
    "how to start convenience store franchise india",
    "convenience store business india",
    "buyzaar mart franchise india",
    "grocery franchise india",
    "low investment franchise india",
    "retail franchise process india",
    "mini mart franchise india",
    "supermarket franchise india",
    "small business franchise india",
    "convenience store investment india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/how-to-start-a-convenience-store-franchise-in-India",
  },
  openGraph: {
    title:
      "How to Start a Convenience Store Franchise in India | Buyzaar Mart",
    description:
      "Step-by-step guide to starting a convenience store franchise in India with The Buyzaar Mart. Investment, process, formats, and support explained.",
    url: "https://www.thebuyzaarmart.com/moradabad/how-to-start-a-convenience-store-franchise-in-India",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Convenience Store Franchise in India | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Start a Convenience Store Franchise in India | Buyzaar Mart",
    description:
      "Step-by-step guide to starting a convenience store franchise in India with The Buyzaar Mart. Investment, process, formats, and support explained.",
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
