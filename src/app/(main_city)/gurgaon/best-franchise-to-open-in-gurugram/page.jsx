import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise to Open in Gurugram | Buyzaar Mart Supermarket Franchise",
  description:
    "Looking for the best franchise to open in Gurugram? Discover why Buyzaar Mart's low investment supermarket franchise is a smart, high-demand business choice.",
  keywords: [
    "best franchise to open in Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "top franchise business Gurugram",
    "best retail franchise India",
    "profitable franchise opportunity",
    "low investment supermarket franchise in Lucknow",
    "franchise business ideas Gurugram",
    "best supermarket franchise",
    "franchise investment India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/best-franchise-to-open-in-gurugram",
  },
  openGraph: {
    title: "Best Franchise to Open in Gurugram | Buyzaar Mart Supermarket Franchise",
    description:
      "Looking for the best franchise to open in Gurugram? Discover why Buyzaar Mart's low investment supermarket franchise is a smart, high-demand business choice.",
    url: "https://www.thebuyzaarmart.com/gurgaon/best-franchise-to-open-in-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise to Open in Gurugram | Buyzaar Mart Supermarket Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise to Open in Gurugram | Buyzaar Mart Supermarket Franchise",
    description:
      "Looking for the best franchise to open in Gurugram? Discover why Buyzaar Mart's low investment supermarket franchise is a smart, high-demand business choice.",
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