import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Essentials Online Shopping in Kanpur | The Buyzaar Mart",
  description:
    "Discover how daily essentials online shopping is changing in Kanpur & why The Buyzaar Mart is the trusted neighbourhood choice for value and quality.",
  keywords: [
    "daily essentials online shopping Kanpur",
    "online grocery Kanpur",
    "daily needs online store Kanpur",
    "grocery delivery Kanpur",
    "buy daily essentials online Kanpur",
    "neighbourhood store Kanpur",
    "The Buyzaar Mart Kanpur",
    "online supermarket Kanpur",
    "FMCG online store Kanpur",
    "franchise business Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/daily-essentials-online-shopping-kanpur",
  },
  openGraph: {
    title: "Daily Essentials Online Shopping in Kanpur | The Buyzaar Mart",
    description:
      "Discover how daily essentials online shopping is changing in Kanpur & why The Buyzaar Mart is the trusted neighbourhood choice for value and quality.",
    url: "https://www.thebuyzaarmart.com/kanpur/daily-essentials-online-shopping-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Essentials Online Shopping in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Essentials Online Shopping in Kanpur | The Buyzaar Mart",
    description:
      "Discover how daily essentials online shopping is changing in Kanpur & why The Buyzaar Mart is the trusted neighbourhood choice for value and quality.",
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