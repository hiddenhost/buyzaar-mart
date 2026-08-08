import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Review of Modern Grocery Store in Kanpur | The Buyzaar Mart",
  description:
    "A detailed review of the modern grocery store experience in Kanpur — technology, layout, pricing & service at The Buyzaar Mart. See how it compares.",
  keywords: [
    "review of modern grocery store Kanpur",
    "modern grocery store Kanpur review",
    "best modern supermarket Kanpur",
    "The Buyzaar Mart Kanpur review",
    "organized retail review Kanpur",
    "modern retail store Kanpur review",
    "grocery technology Kanpur",
    "Kanpur supermarket review",
    "modern shopping experience Kanpur",
    "The Buyzaar Mart modern store",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/review-of-modern-grocery-store-kanpur",
  },
  openGraph: {
    title: "Review of Modern Grocery Store in Kanpur | The Buyzaar Mart",
    description:
      "A detailed review of the modern grocery store experience in Kanpur — technology, layout, pricing & service at The Buyzaar Mart. See how it compares.",
    url: "https://www.thebuyzaarmart.com/kanpur/review-of-modern-grocery-store-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Review of Modern Grocery Store in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Review of Modern Grocery Store in Kanpur | The Buyzaar Mart",
    description:
      "A detailed review of the modern grocery store experience in Kanpur — technology, layout, pricing & service at The Buyzaar Mart. See how it compares.",
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