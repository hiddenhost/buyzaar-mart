import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Near Me in Noida | The Buyzaar Mart",
  description:
    "Find a reliable supermarket near you in Noida with The Buyzaar Mart, offering fresh produce, groceries, and daily essentials across multiple sectors.",
  keywords: [
    "supermarket near me in Noida",
    "Noida supermarket",
    "grocery store near me Noida",
    "The Buyzaar Mart Noida",
    "best supermarket Noida",
    "local supermarket Noida",
    "grocery shopping Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/supermarket-near-me-in-noida",
  },
  openGraph: {
    title: "Supermarket Near Me in Noida | The Buyzaar Mart",
    description:
      "Find a reliable supermarket near you in Noida with The Buyzaar Mart, offering fresh produce, groceries, and daily essentials across multiple sectors.",
    url: "https://www.thebuyzaarmart.com/cities/noida/supermarket-near-me-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Near Me in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Near Me in Noida | The Buyzaar Mart",
    description:
      "Find a reliable supermarket near you in Noida with The Buyzaar Mart, offering fresh produce, groceries, and daily essentials across multiple sectors.",
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