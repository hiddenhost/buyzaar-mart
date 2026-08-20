import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Take Franchise of Grocery Mart in Hapur | The Buyzaar Mart",
  description:
    "Learn how to take a grocery mart franchise in Hapur with The Buyzaar Mart. Explore store formats, FOCM and FOCO models, investment support, and the step-by-step application process.",
  keywords: [
    "grocery franchise Hapur",
    "Buyzaar Mart Hapur",
    "franchise opportunity Hapur",
    "how to open grocery store Hapur",
    "supermarket franchise Hapur",
    "retail franchise Hapur",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "Mini Mart franchise Hapur",
    "Super Mart franchise Hapur",
    "Hyper Mart franchise Hapur",
    "grocery business Hapur",
    "best franchise in Hapur",
    "low investment franchise Hapur",
    "organised retail Hapur",
    "daily needs store franchise Hapur",
    "grocery retail business Hapur",
    "franchise apply Hapur",
    "how to start retail franchise Hapur",
    "neighbourhood store franchise Hapur",
    "supermarket business Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/how-to-take-franchise-of-grocery-mart-in-hapur",
  },
  openGraph: {
    title: "How to Take Franchise of Grocery Mart in Hapur | The Buyzaar Mart",
    description:
      "Learn how to take a grocery mart franchise in Hapur with The Buyzaar Mart. Explore store formats, FOCM and FOCO models, investment support, and the step-by-step application process.",
    url: "https://www.thebuyzaarmart.com/hapur/how-to-take-franchise-of-grocery-mart-in-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Take Franchise of Grocery Mart in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Take Franchise of Grocery Mart in Hapur | The Buyzaar Mart",
    description:
      "Learn how to take a grocery mart franchise in Hapur with The Buyzaar Mart. Explore store formats, FOCM and FOCO models, investment support, and the step-by-step application process.",
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