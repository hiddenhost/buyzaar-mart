import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Low Investment Supermarket Franchise in Lucknow | Buyzaar Mart",
  description:
    "Start your own grocery supermarket franchise in Lucknow with Buyzaar Mart. Low investment, full support, and a beginner-friendly business model. Enquire today!",
  keywords: [
    "supermarket franchise in Lucknow",
    "grocery franchise Lucknow",
    "low investment supermarket franchise",
    "Buyzaar Mart franchise",
    "grocery store franchise for beginners",
    "retail franchise Lucknow",
    "supermarket business opportunity Lucknow",
    "affordable supermarket franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/Grocery-supermarket-franchise-in-lucknow-for-beginners",
  },
  openGraph: {
    title: "Low Investment Supermarket Franchise in Lucknow | Buyzaar Mart",
    description:
      "Start your own grocery supermarket franchise in Lucknow with Buyzaar Mart. Low investment, full support, and a beginner-friendly business model. Enquire today!",
    url: "https://www.thebuyzaarmart.com/lucknow/Grocery-supermarket-franchise-in-lucknow-for-beginners",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Low Investment Supermarket Franchise in Lucknow | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Investment Supermarket Franchise in Lucknow | Buyzaar Mart",
    description:
      "Start your own grocery supermarket franchise in Lucknow with Buyzaar Mart. Low investment, full support, and a beginner-friendly business model. Enquire today!",
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