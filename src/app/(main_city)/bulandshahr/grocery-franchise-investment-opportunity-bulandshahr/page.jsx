import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Investment Opportunity in Bulandshahr | The Buyzaar Mart",
  description:
    "Discover a grocery franchise investment opportunity in Bulandshahr with The Buyzaar Mart. Mini Mart, Super Mart, and Hyper Mart formats with full setup support.",
  keywords: [
    "grocery franchise investment opportunity Bulandshahr",
    "grocery franchise opportunity Bulandshahr",
    "franchise investment opportunity Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "mart franchise Bulandshahr",
    "mini mart franchise Bulandshahr",
    "super mart franchise Bulandshahr",
    "hyper mart franchise Bulandshahr",
    "Buyzaar Mart Bulandshahr",
    "franchise opportunity Bulandshahr",
    "FOCO franchise model",
    "FOCM franchise model",
    "best franchise Bulandshahr",
    "supermarket franchise UP",
    "organized retail Bulandshahr",
    "franchise apply Bulandshahr",
    "how to invest in grocery franchise",
    "franchise near Delhi NCR",
    "grocery business opportunity UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/grocery-franchise-investment-opportunity-bulandshahr",
  },
  openGraph: {
    title: "Grocery Franchise Investment Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Discover a grocery franchise investment opportunity in Bulandshahr with The Buyzaar Mart. Mini Mart, Super Mart, and Hyper Mart formats with full setup support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/grocery-franchise-investment-opportunity-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Investment Opportunity in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Investment Opportunity in Bulandshahr | The Buyzaar Mart",
    description:
      "Discover a grocery franchise investment opportunity in Bulandshahr with The Buyzaar Mart. Mini Mart, Super Mart, and Hyper Mart formats with full setup support.",
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