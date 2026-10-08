import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise to Open in Mathura | Buyzaar Mart",
  description:
    "Looking for the best franchise to open in Mathura? See why a supermarket franchise works, with investment, margins, locations and how to apply for Buyzaar Mart.",
  keywords: [
    "best franchise to open in Mathura",
    "best franchise in Mathura",
    "franchise business in Mathura",
    "Mathura franchise opportunities",
    "supermarket franchise Mathura",
    "grocery franchise Mathura",
    "mart franchise in Mathura",
    "Buyzaar Mart franchise Mathura",
    "low investment franchise Mathura",
    "retail franchise Mathura",
    "profitable franchise business Mathura",
    "mini mart franchise Mathura",
    "FOCM franchise Mathura",
    "FOCO franchise Mathura",
    "supermarket franchise Uttar Pradesh",
    "best franchise business in India",
    "franchise under 20 lakh",
    "kirana store franchise",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "Mathura Vrindavan franchise",
    "FMCG franchise Mathura",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/best-franchise-to-open-in-mathura",
  },
  openGraph: {
    title: "Best Franchise to Open in Mathura | Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Mathura? See why a supermarket franchise works, with investment, margins, locations and how to apply for Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/mathura/best-franchise-to-open-in-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise to Open in Mathura | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise to Open in Mathura | Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Mathura? See why a supermarket franchise works, with investment, margins, locations and how to apply for Buyzaar Mart.",
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