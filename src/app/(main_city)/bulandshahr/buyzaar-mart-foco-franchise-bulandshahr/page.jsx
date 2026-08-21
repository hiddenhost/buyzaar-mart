import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart FOCO Franchise Bulandshahr | Franchise Owned Company Operated",
  description:
    "Understand the Buyzaar Mart FOCO franchise model in Bulandshahr, a passive investment format where the company manages daily store operations for you.",
  keywords: [
    "buyzaar mart foco franchise bulandshahr",
    "foco franchise model",
    "franchise owned company operated",
    "foco grocery franchise",
    "passive investment retail franchise",
    "buyzaar mart foco model bulandshahr",
    "grocery franchise investment model",
    "low involvement franchise bulandshahr",
    "foco vs focm franchise",
    "supermarket investment opportunity bulandshahr",
    "buyzaar mart franchise models",
    "mini mart foco franchise",
    "super mart foco franchise",
    "hyper mart foco franchise",
    "buyzaar mart investor opportunity",
    "company operated grocery store bulandshahr",
    "passive income retail franchise",
    "retail investment bulandshahr uttar pradesh",
    "buyzaar mart supply chain support",
    "POS technology grocery franchise",
    "buyzaar mart contact number",
    "organized retail investment UP",
    "franchise business model comparison",
    "asset-backed retail investment",
    "revenue sharing grocery franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/buyzaar-mart-foco-franchise-bulandshahr",
  },
  openGraph: {
    title: "Buyzaar Mart FOCO Franchise Bulandshahr | Franchise Owned Company Operated",
    description:
      "Understand the Buyzaar Mart FOCO franchise model in Bulandshahr, a passive investment format where the company manages daily store operations for you.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/buyzaar-mart-foco-franchise-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart FOCO Franchise Bulandshahr | Franchise Owned Company Operated",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart FOCO Franchise Bulandshahr | Franchise Owned Company Operated",
    description:
      "Understand the Buyzaar Mart FOCO franchise model in Bulandshahr, a passive investment format where the company manages daily store operations for you.",
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