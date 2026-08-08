import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Monthly Grocery Shopping Online in Kanpur | The Buyzaar Mart",
  description:
    "Simplify monthly grocery shopping online in Kanpur with The Buyzaar Mart. Enjoy bulk savings, doorstep delivery, and a complete daily-needs range in one order.",
  keywords: [
    "monthly grocery shopping online Kanpur",
    "online grocery shopping Kanpur",
    "grocery delivery Kanpur",
    "grocery delivery near me Kanpur",
    "monthly grocery shopping Kanpur",
    "online supermarket Kanpur",
    "buy groceries online Kanpur",
    "grocery store online Kanpur",
    "daily essentials online Kanpur",
    "home delivery grocery Kanpur",
    "online grocery store Kanpur",
    "supermarket home delivery Kanpur",
    "household essentials online Kanpur",
    "online FMCG store Kanpur",
    "monthly ration shopping Kanpur",
    "online grocery offers Kanpur",
    "affordable online grocery Kanpur",
    "grocery shopping app Kanpur",
    "fresh groceries online Kanpur",
    "grocery delivery service Kanpur",
    "online supermarket for monthly shopping Kanpur",
    "doorstep grocery delivery Kanpur",
    "family grocery shopping Kanpur",
    "best online grocery store Kanpur",
    "grocery shopping with home delivery Kanpur",
    "daily needs online Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/monthly-grocery-shopping-online-kanpur",
  },
  openGraph: {
    title: "Monthly Grocery Shopping Online in Kanpur | The Buyzaar Mart",
    description:
      "Simplify monthly grocery shopping online in Kanpur with The Buyzaar Mart. Enjoy bulk savings, doorstep delivery, and a complete daily-needs range in one order.",
    url: "https://www.thebuyzaarmart.com/kanpur/monthly-grocery-shopping-online-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Monthly Grocery Shopping Online in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monthly Grocery Shopping Online in Kanpur | The Buyzaar Mart",
    description:
      "Simplify monthly grocery shopping online in Kanpur with The Buyzaar Mart. Enjoy bulk savings, doorstep delivery, and a complete daily-needs range in one order.",
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