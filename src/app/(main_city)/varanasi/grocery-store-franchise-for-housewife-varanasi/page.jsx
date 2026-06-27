import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise for Housewives in Varanasi | The Buyzaar Mart",
  description:
    "A grocery store franchise for housewives in Varanasi with The Buyzaar Mart. Flexible operations, brand support, POS billing, and a manageable retail business model.",
  keywords: [
    "grocery franchise for housewives Varanasi",
    "women entrepreneur franchise",
    "The Buyzaar Mart Varanasi",
    "home based grocery business",
    "low investment franchise for women",
    "grocery store franchise UP",
    "flexible retail franchise",
    "small business for housewives",
    "POS billing grocery franchise",
    "women retail business Varanasi",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/grocery-store-franchise-for-housewife-varanasi",
  },
  openGraph: {
    title: "Grocery Store Franchise for Housewives in Varanasi | The Buyzaar Mart",
    description:
      "A grocery store franchise for housewives in Varanasi with The Buyzaar Mart. Flexible operations, brand support, POS billing, and a manageable retail business model.",
    url: "https://www.thebuyzaarmart.com/varanasi/grocery-store-franchise-for-housewife-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise for Housewives in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise for Housewives in Varanasi | The Buyzaar Mart",
    description:
      "A grocery store franchise for housewives in Varanasi with The Buyzaar Mart. Flexible operations, brand support, POS billing, and a manageable retail business model.",
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