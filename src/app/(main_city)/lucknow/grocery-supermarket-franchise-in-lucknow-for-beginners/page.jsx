import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";
export const metadata = {
  title: "How to Open a Grocery Franchise in Lucknow | The Buyzaar Mart",
  description:
    "Open a grocery franchise in Lucknow with The Buyzaar Mart — low investment, full brand support, and a step-by-step guide to start your store today.",
  keywords: [
    "grocery franchise Lucknow",
    "open grocery store Lucknow",
    "The Buyzaar Mart franchise",
    "supermarket franchise Lucknow",
    "Mini Mart franchise Lucknow",
    "low investment grocery franchise",
    "daily needs store franchise Lucknow",
    "retail franchise Uttar Pradesh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/grocery-supermarket-franchise-in-lucknow-for-beginners",
  },
  openGraph: {
    title: "How to Open a Grocery Franchise in Lucknow | The Buyzaar Mart",
    description:
      "Open a grocery franchise in Lucknow with The Buyzaar Mart — low investment, full brand support, and a step-by-step guide to start your store today.",
    url: "https://www.thebuyzaarmart.com/lucknow/grocery-supermarket-franchise-in-lucknow-for-beginners",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Grocery Franchise in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Grocery Franchise in Lucknow | The Buyzaar Mart",
    description:
      "Open a grocery franchise in Lucknow with The Buyzaar Mart — low investment, full brand support, and a step-by-step guide to start your store today.",
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