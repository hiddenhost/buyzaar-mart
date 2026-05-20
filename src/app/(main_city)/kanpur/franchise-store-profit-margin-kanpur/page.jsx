import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Franchise Store Profit Margin Kanpur | The Buyzaar Mart Grocery Franchise",
  description:
    "Wondering about franchise store profit margin in Kanpur? Discover how The Buyzaar Mart delivers strong returns through FOCM & FOCO models, 10% revenue sharing, low waste guarantee & professionally managed operations. Learn more at thebuyzaarmart.com.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/franchise-store-profit-margin-kanpur",
  },
  openGraph: {
    title:
      "Franchise Store Profit Margin Kanpur | The Buyzaar Mart Grocery Franchise",
    description:
      "Wondering about franchise store profit margin in Kanpur? Discover how The Buyzaar Mart delivers strong returns through FOCM & FOCO models, 10% revenue sharing, low waste guarantee & professionally managed operations. Learn more at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/kanpur/franchise-store-profit-margin-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Store Profit Margin Kanpur | The Buyzaar Mart Grocery Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Franchise Store Profit Margin Kanpur | The Buyzaar Mart Grocery Franchise",
    description:
      "Wondering about franchise store profit margin in Kanpur? Discover how The Buyzaar Mart delivers strong returns through FOCM & FOCO models, 10% revenue sharing, low waste guarantee & professionally managed operations. Learn more at thebuyzaarmart.com.",
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