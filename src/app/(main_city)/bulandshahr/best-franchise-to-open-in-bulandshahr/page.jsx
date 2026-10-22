import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise to Open in Bulandshahr | The Buyzaar Mart",
  description:
    "Looking for the best franchise to open in Bulandshahr? Start a Buyzaar Mart supermarket franchise from ₹15 Lakh with full setup, POS and training support.",
  keywords: [
    "best franchise to open in Bulandshahr",
    "best franchise in Bulandshahr",
    "franchise opportunity Bulandshahr",
    "franchise business Bulandshahr",
    "Buyzaar Mart franchise Bulandshahr",
    "supermarket franchise Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "mart franchise Bulandshahr",
    "low investment franchise Bulandshahr",
    "profitable franchise Bulandshahr",
    "franchise under 20 lakh",
    "best business to start in Bulandshahr",
    "franchise for first-time entrepreneurs",
    "supermarket franchise Uttar Pradesh",
    "grocery franchise UP",
    "supermarket franchise NCR",
    "FOCM franchise Bulandshahr",
    "franchise with training and support",
    "organised retail franchise Bulandshahr",
    "franchise in Khurja Sikandrabad Siyana",
    "small town franchise opportunity",
    "mini mart franchise Bulandshahr",
    "branded grocery franchise India",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/best-franchise-to-open-in-bulandshahr",
  },
  openGraph: {
    title: "Best Franchise to Open in Bulandshahr | The Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Bulandshahr? Start a Buyzaar Mart supermarket franchise from ₹15 Lakh with full setup, POS and training support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/best-franchise-to-open-in-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise to Open in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise to Open in Bulandshahr | The Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Bulandshahr? Start a Buyzaar Mart supermarket franchise from ₹15 Lakh with full setup, POS and training support.",
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