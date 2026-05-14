import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Strategic Franchise Business Plan Delhi NCR 2026 | The Buyzaar Mart",
  description:
    "Launch a high-yield retail venture with the definitive franchise business plan for Delhi NCR. Explore The Buyzaar Mart’s FOCM models: Minimart, Supermart, and Hypermart. Secure 20% margins today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/delhi/strategic-franchise-business-plan-delhi-ncr-2026",
  },
  openGraph: {
    title: "Strategic Franchise Business Plan Delhi NCR 2026 | The Buyzaar Mart",
    description:
      "Launch a high-yield retail venture with the definitive franchise business plan for Delhi NCR. Explore The Buyzaar Mart’s FOCM models: Minimart, Supermart, and Hypermart. Secure 20% margins today!",
    url: "https://www.thebuyzaarmart.com/delhi/strategic-franchise-business-plan-delhi-ncr-2026",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Strategic Franchise Business Plan Delhi NCR 2026 | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Franchise Business Plan Delhi NCR 2026 | The Buyzaar Mart",
    description:
      "Launch a high-yield retail venture with the definitive franchise business plan for Delhi NCR. Explore The Buyzaar Mart’s FOCM models: Minimart, Supermart, and Hypermart. Secure 20% margins today!",
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