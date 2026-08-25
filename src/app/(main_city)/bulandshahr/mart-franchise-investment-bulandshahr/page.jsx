import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Investment in Bulandshahr | The Buyzaar Mart",
  description:
    "Explore mart franchise investment in Bulandshahr with The Buyzaar Mart. Compare Mini Mart, Super Mart, and Hyper Mart formats with complete setup support.",
  keywords: [
    "mart franchise investment Bulandshahr",
    "mart franchise Bulandshahr",
    "franchise investment Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
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
    "how to invest in mart franchise",
    "franchise near Delhi NCR",
    "retail business investment UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/mart-franchise-investment-bulandshahr",
  },
  openGraph: {
    title: "Mart Franchise Investment in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore mart franchise investment in Bulandshahr with The Buyzaar Mart. Compare Mini Mart, Super Mart, and Hyper Mart formats with complete setup support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/mart-franchise-investment-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Investment in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Investment in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore mart franchise investment in Bulandshahr with The Buyzaar Mart. Compare Mini Mart, Super Mart, and Hyper Mart formats with complete setup support.",
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