import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise to Open in Amroha | The Buyzaar Mart",
  description:
    "Looking for the best franchise to open in Amroha? Start a Buyzaar Mart supermarket. Investment ₹15–20 lakh, 18–20% margin, full support.",
  keywords: [
    "best franchise to open in amroha",
    "best franchise in amroha",
    "best franchise business amroha",
    "franchise business opportunity amroha",
    "buyzaar mart franchise amroha",
    "supermarket franchise amroha",
    "grocery franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "low investment franchise amroha",
    "profitable franchise amroha",
    "franchise under 20 lakh amroha",
    "focm franchise amroha",
    "foco franchise amroha",
    "mini mart franchise amroha",
    "grocery franchise 15 lakh amroha",
    "franchise opportunity uttar pradesh",
    "organised retail franchise amroha",
    "apply buyzaar mart franchise",
    "franchise with training and support",
    "daily need franchise business",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/best-franchise-to-open-in-amroha",
  },
  openGraph: {
    title: "Best Franchise to Open in Amroha | The Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Amroha? Start a Buyzaar Mart supermarket. Investment ₹15–20 lakh, 18–20% margin, full support.",
    url: "https://www.thebuyzaarmart.com/amroha/best-franchise-to-open-in-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise to Open in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise to Open in Amroha | The Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Amroha? Start a Buyzaar Mart supermarket. Investment ₹15–20 lakh, 18–20% margin, full support.",
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