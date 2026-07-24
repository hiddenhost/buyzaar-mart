import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise with POS System in Lucknow | The Buyzaar Mart",
  description:
    "Open a grocery store franchise in Lucknow with The Buyzaar Mart's integrated POS system. Real-time billing, inventory tracking, FOCO and FOCM models and full support.",
  keywords: [
    "grocery store franchise with pos system Lucknow",
    "franchise with billing system Lucknow",
    "The Buyzaar Mart POS",
    "retail franchise technology Lucknow",
    "grocery store technology franchise",
    "supermarket franchise Lucknow",
    "FMCG franchise UP",
    "POS billing software franchise India",
    "retail inventory management system franchise",
    "Mini Mart POS setup",
    "Super Mart POS system",
    "Hyper Mart billing technology",
    "standardized POS retail franchise",
    "franchise technology support Lucknow",
    "grocery billing system India",
    "retail franchise software integration",
    "POS system for small grocery store",
    "franchise inventory tracking technology",
    "digital billing grocery franchise",
    "tech-enabled retail franchise UP",
    "franchise POS training support",
    "automated billing supermarket franchise",
    "retail technology backbone franchise",
    "grocery franchise operational technology",
    "grocery store franchise with POS system Lucknow",
    "grocery franchise with POS system Lucknow",
    "supermarket franchise with POS system Lucknow",
    "mini mart franchise with POS system Lucknow",
    "retail franchise with POS system Lucknow",
    "POS enabled grocery franchise Lucknow",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/grocery-store-franchise-with-pos-system-lucknow",
  },
  openGraph: {
    title: "Grocery Store Franchise with POS System in Lucknow | The Buyzaar Mart",
    description:
      "Open a grocery store franchise in Lucknow with The Buyzaar Mart's integrated POS system. Real-time billing, inventory tracking, FOCO and FOCM models and full support.",
    url: "https://www.thebuyzaarmart.com/lucknow/grocery-store-franchise-with-pos-system-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise with POS System in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise with POS System in Lucknow | The Buyzaar Mart",
    description:
      "Open a grocery store franchise in Lucknow with The Buyzaar Mart's integrated POS system. Real-time billing, inventory tracking, FOCO and FOCM models and full support.",
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