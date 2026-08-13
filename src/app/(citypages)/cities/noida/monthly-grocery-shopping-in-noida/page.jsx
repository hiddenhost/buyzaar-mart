import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Monthly Grocery Shopping in Noida | The Buyzaar Mart",
  description:
    "Planning monthly grocery shopping in Noida? The Buyzaar Mart offers grocery staples, fresh produce, and household essentials to make bulk shopping easier.",
  keywords: [
    "monthly grocery shopping noida",
    "bulk grocery shopping noida",
    "grocery store noida",
    "buyzaar mart noida",
    "monthly grocery list noida",
    "household essentials noida",
    "grocery staples noida",
    "online grocery noida",
    "bulk buying grocery noida",
    "monthly shopping checklist noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/monthly-grocery-shopping-in-noida",
  },
  openGraph: {
    title: "Monthly Grocery Shopping in Noida | The Buyzaar Mart",
    description:
      "Planning monthly grocery shopping in Noida? The Buyzaar Mart offers grocery staples, fresh produce, and household essentials to make bulk shopping easier.",
    url: "https://www.thebuyzaarmart.com/cities/noida/monthly-grocery-shopping-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Monthly Grocery Shopping in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monthly Grocery Shopping in Noida | The Buyzaar Mart",
    description:
      "Planning monthly grocery shopping in Noida? The Buyzaar Mart offers grocery staples, fresh produce, and household essentials to make bulk shopping easier.",
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