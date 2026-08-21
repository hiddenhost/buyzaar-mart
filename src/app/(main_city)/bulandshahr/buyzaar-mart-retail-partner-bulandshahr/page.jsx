import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Retail Partner Bulandshahr | Become a Franchise Partner",
  description:
    "Become a Buyzaar Mart retail partner in Bulandshahr. Own a branded grocery store with full operational support, proven systems and a scalable growth path.",
  keywords: [
    "buyzaar mart retail partner bulandshahr",
    "become a retail partner bulandshahr",
    "franchise partner bulandshahr",
    "grocery retail partnership uttar pradesh",
    "buyzaar mart partnership opportunity",
    "supermarket business partner bulandshahr",
    "FOCO retail partner",
    "FOCM retail partner",
    "organized retail partnership bulandshahr",
    "retail partner benefits grocery franchise",
    "buyzaar mart brand partnership",
    "low investment retail partner opportunity",
    "neighbourhood store partner bulandshahr",
    "grocery chain partnership UP",
    "mini mart retail partner",
    "super mart retail partner",
    "hyper mart retail partner",
    "scalable retail business bulandshahr",
    "buyzaar mart growth partner",
    "retail business collaboration bulandshahr",
    "franchise ownership model bulandshahr",
    "buyzaar mart contact number",
    "retail entrepreneurship bulandshahr",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/buyzaar-mart-retail-partner-bulandshahr",
  },
  openGraph: {
    title: "Buyzaar Mart Retail Partner Bulandshahr | Become a Franchise Partner",
    description:
      "Become a Buyzaar Mart retail partner in Bulandshahr. Own a branded grocery store with full operational support, proven systems and a scalable growth path.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/buyzaar-mart-retail-partner-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Retail Partner Bulandshahr | Become a Franchise Partner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Retail Partner Bulandshahr | Become a Franchise Partner",
    description:
      "Become a Buyzaar Mart retail partner in Bulandshahr. Own a branded grocery store with full operational support, proven systems and a scalable growth path.",
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