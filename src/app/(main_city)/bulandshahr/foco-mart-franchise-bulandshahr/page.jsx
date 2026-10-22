import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCO Mart Franchise in Bulandshahr | The Buyzaar Mart",
  description:
    "Invest in a FOCO mart franchise in Bulandshahr with The Buyzaar Mart. Company-operated supermarket, 10% revenue share, 10-year agreement. Apply today.",
  keywords: [
    "FOCO mart franchise Bulandshahr",
    "FOCO franchise Bulandshahr",
    "Buyzaar Mart FOCO franchise",
    "franchise owned company operated Bulandshahr",
    "supermarket franchise Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "mart franchise Bulandshahr",
    "passive income franchise Bulandshahr",
    "hands-off franchise investment",
    "company operated supermarket franchise",
    "supermarket franchise revenue sharing",
    "10 percent revenue share franchise",
    "2000 sq ft supermarket franchise",
    "FOCO franchise India",
    "supermarket franchise Uttar Pradesh",
    "grocery franchise UP",
    "supermarket franchise NCR",
    "organised retail franchise Bulandshahr",
    "franchise business opportunity Bulandshahr",
    "super mart franchise Bulandshahr",
    "hyper mart franchise Bulandshahr",
    "FOCO vs FOCM franchise",
    "franchise for property owners",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/foco-mart-franchise-bulandshahr",
  },
  openGraph: {
    title: "FOCO Mart Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Invest in a FOCO mart franchise in Bulandshahr with The Buyzaar Mart. Company-operated supermarket, 10% revenue share, 10-year agreement. Apply today.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/foco-mart-franchise-in-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCO Mart Franchise in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCO Mart Franchise in Bulandshahr | The Buyzaar Mart",
    description:
      "Invest in a FOCO mart franchise in Bulandshahr with The Buyzaar Mart. Company-operated supermarket, 10% revenue share, 10-year agreement. Apply today.",
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