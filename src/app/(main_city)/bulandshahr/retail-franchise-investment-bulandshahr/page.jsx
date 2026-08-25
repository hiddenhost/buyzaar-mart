import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Investment in Bulandshahr | The Buyzaar Mart",
  description:
    "Explore retail franchise investment options in Bulandshahr with The Buyzaar Mart. Compare Mini Mart, Super Mart, and Hyper Mart formats with full setup support.",
  keywords: [
    "retail franchise investment Bulandshahr",
    "franchise investment Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "mart franchise Bulandshahr",
    "franchise cost Bulandshahr",
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
    "how to invest in franchise",
    "franchise near Delhi NCR",
    "retail business investment UP",
    "franchise ROI Bulandshahr",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/retail-franchise-investment-bulandshahr",
  },
  openGraph: {
    title: "Retail Franchise Investment in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore retail franchise investment options in Bulandshahr with The Buyzaar Mart. Compare Mini Mart, Super Mart, and Hyper Mart formats with full setup support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/retail-franchise-investment-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Investment in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Investment in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore retail franchise investment options in Bulandshahr with The Buyzaar Mart. Compare Mini Mart, Super Mart, and Hyper Mart formats with full setup support.",
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