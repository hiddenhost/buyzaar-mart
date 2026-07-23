import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise for First-Time Investors in Delhi NCR | Buyzaar Mart",
  description:
    "Explore a grocery franchise opportunity for first-time investors in Delhi NCR with Buyzaar Mart. Learn about support, investment, and how to get started.",
  keywords: [
    "grocery franchise first time investor Delhi NCR",
    "Buyzaar Mart franchise beginners",
    "first time business franchise Delhi NCR",
    "retail franchise for new investors",
    "grocery store franchise Delhi NCR",
    "low risk franchise investment India",
    "Buyzaar Mart franchise support",
    "beginner friendly franchise India",
    "franchise opportunity NCR",
    "grocery business first time investor",
    "grocery franchise for first time investor delhi ncr",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/grocery-franchise-for-first-time-investor-delhi-ncr",
  },
  openGraph: {
    title: "Grocery Franchise for First-Time Investors in Delhi NCR | Buyzaar Mart",
    description:
      "Explore a grocery franchise opportunity for first-time investors in Delhi NCR with Buyzaar Mart. Learn about support, investment, and how to get started.",
    url: "https://www.thebuyzaarmart.com/delhi/grocery-franchise-for-first-time-investor-delhi-ncr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise for First-Time Investors in Delhi NCR | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise for First-Time Investors in Delhi NCR | Buyzaar Mart",
    description:
      "Explore a grocery franchise opportunity for first-time investors in Delhi NCR with Buyzaar Mart. Learn about support, investment, and how to get started.",
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