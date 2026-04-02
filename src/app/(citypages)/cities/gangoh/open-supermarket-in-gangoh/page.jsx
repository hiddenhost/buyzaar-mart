import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Open Supermarket in Gangoh | The Buyzaar Mart – Shop Fresh Daily",
  description:
    "Looking for an open supermarket in Gangoh? The Buyzaar Mart offers fresh groceries, daily essentials & franchise opportunities. Visit us today!",
  keywords: [
    "retail franchise in gangoh",
    "the buyzaar mart gangoh",
    "supermart franchise gangoh",
    "minimart franchise gangoh",
    "grocery franchise gangoh",
    "modern grocery store franchise in gangoh",
    "retail business gangoh",
    "supermarket franchise gangoh",
    "buyzaar mart focm",
    "franchise business in gangoh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/open-supermarket-in-gangoh",
  },

  openGraph: {
    title: "Open Supermarket in Gangoh | The Buyzaar Mart – Shop Fresh Daily",
    description:
      "Looking for an open supermarket in Gangoh? The Buyzaar Mart offers fresh groceries, daily essentials & franchise opportunities. Visit us today!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/open-supermarket-in-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Open Supermarket in Gangoh | The Buyzaar Mart – Shop Fresh Daily",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Open Supermarket in Gangoh | The Buyzaar Mart – Shop Fresh Daily",
    description:
      "Looking for an open supermarket in Gangoh? The Buyzaar Mart offers fresh groceries, daily essentials & franchise opportunities. Visit us today!",
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