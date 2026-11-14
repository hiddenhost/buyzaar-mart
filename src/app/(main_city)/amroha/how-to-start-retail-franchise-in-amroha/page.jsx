import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Retail Franchise in Amroha | Buyzaar Mart",
  description:
    "Planning a retail franchise in Amroha? Learn formats, documents, steps and the total investment of ₹15–20 lakh with The Buyzaar Mart. Apply now for support.",
  keywords: [
    "retail franchise in Amroha",
    "how to start retail franchise in Amroha",
    "retail franchise business in India",
    "retail store franchise in Uttar Pradesh",
    "Buyzaar Mart retail franchise",
    "supermarket franchise in Amroha",
    "grocery franchise in Amroha",
    "low investment retail franchise",
    "retail franchise 15 lakh",
    "retail franchise total investment",
    "FOCM franchise model",
    "FOCO franchise model",
    "franchise business in Amroha",
    "mini mart franchise in UP",
    "super mart franchise",
    "hyper mart franchise",
    "FMCG retail franchise",
    "organised retail franchise India",
    "retail franchise without experience",
    "retail franchise with full support",
    "supermarket franchise near Moradabad",
    "daily-need store franchise",
    "neighbourhood store franchise",
    "apply for retail franchise",
    "franchise opportunities in Uttar Pradesh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/how-to-start-retail-franchise-in-amroha",
  },
  openGraph: {
    title: "How to Start a Retail Franchise in Amroha | Buyzaar Mart",
    description:
      "Planning a retail franchise in Amroha? Learn formats, documents, steps and the total investment of ₹15–20 lakh with The Buyzaar Mart. Apply now for support.",
    url: "https://www.thebuyzaarmart.com/amroha/how-to-start-retail-franchise-in-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Retail Franchise in Amroha | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Retail Franchise in Amroha | Buyzaar Mart",
    description:
      "Planning a retail franchise in Amroha? Learn formats, documents, steps and the total investment of ₹15–20 lakh with The Buyzaar Mart. Apply now for support.",
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