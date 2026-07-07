import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Invest in a Grocery Franchise in Varanasi | The Buyzaar Mart",
  description:
    "Learn how to invest in a grocery franchise in Varanasi with The Buyzaar Mart. Explore franchise models, store formats, investment breakdown, and the step-by-step process.",
  keywords: [
    "grocery franchise Varanasi",
    "invest in grocery franchise",
    "Buyzaar Mart Varanasi",
    "FOCM FOCO franchise",
    "grocery store investment India",
    "supermarket franchise Varanasi",
    "retail franchise Uttar Pradesh",
    "Mini Mart Super Mart Hyper Mart",
    "low investment grocery franchise",
    "franchise business Varanasi",
    "Buyzaar Mart investment plan",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/how-to-invest-in-grocery-franchise-varanasi",
  },
  openGraph: {
    title: "How to Invest in a Grocery Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Learn how to invest in a grocery franchise in Varanasi with The Buyzaar Mart. Explore franchise models, store formats, investment breakdown, and the step-by-step process.",
    url: "https://www.thebuyzaarmart.com/varanasi/how-to-invest-in-grocery-franchise-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Invest in a Grocery Franchise in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Invest in a Grocery Franchise in Varanasi | The Buyzaar Mart",
    description:
      "Learn how to invest in a grocery franchise in Varanasi with The Buyzaar Mart. Explore franchise models, store formats, investment breakdown, and the step-by-step process.",
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