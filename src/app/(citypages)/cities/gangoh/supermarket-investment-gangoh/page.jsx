import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Supermarket Investment Gangoh | The Buyzaar Mart Franchise Opportunity",
  description:
    "Looking for a profitable supermarket investment in Gangoh? The Buyzaar Mart offers a proven retail franchise with full support, top brands, and low-risk returns. Apply now and own your store today!",
  keywords: [
    "mart franchise gangoh",
    "the buyzaar mart gangoh",
    "grocery mart franchise gangoh",
    "supermarket franchise gangoh",
    "buyzaar mart franchise gangoh",
    "focm franchise gangoh",
    "open mart in gangoh",
    "franchise business in gangoh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/supermarket-investment-gangoh",
  },

  openGraph: {
    title:
      "Supermarket Investment Gangoh | The Buyzaar Mart Franchise Opportunity",
    description:
      "Looking for a profitable supermarket investment in Gangoh? The Buyzaar Mart offers a proven retail franchise with full support, top brands, and low-risk returns. Apply now and own your store today!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/supermarket-investment-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Investment Gangoh | The Buyzaar Mart Franchise Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Supermarket Investment Gangoh | The Buyzaar Mart Franchise Opportunity",
    description:
      "Looking for a profitable supermarket investment in Gangoh? The Buyzaar Mart offers a proven retail franchise with full support, top brands, and low-risk returns. Apply now and own your store today!",
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