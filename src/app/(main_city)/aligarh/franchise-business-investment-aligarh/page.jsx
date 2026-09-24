import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business Investment in Aligarh | The Buyzaar Mart",
  description:
    "Considering a franchise business investment in Aligarh? Explore The Buyzaar Mart's FOCM model, cost structure, risk comparison & step-by-step process. Apply now.",
  keywords: [
    "franchise business investment Aligarh",
    "business investment Aligarh",
    "franchise business opportunity Aligarh",
    "retail franchise business Aligarh",
    "Buyzaar Mart Aligarh",
    "low risk franchise business",
    "FOCM business model Aligarh",
    "grocery business investment Aligarh",
    "small business investment Aligarh",
    "franchise vs independent business",
    "business ownership Aligarh",
    "retail business opportunity Uttar Pradesh",
    "franchise business cost Aligarh",
    "business investment near AMU Aligarh",
    "entrepreneurship opportunity Aligarh",
    "franchise business support system",
    "Mini Mart business investment",
    "Super Mart business investment",
    "Hyper Mart business investment",
    "franchise business ROI Aligarh",
    "business investment North India",
    "franchise business documentation",
    "first time business owner franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/franchise-business-investment-aligarh",
  },
  openGraph: {
    title: "Franchise Business Investment in Aligarh | The Buyzaar Mart",
    description:
      "Considering a franchise business investment in Aligarh? Explore The Buyzaar Mart's FOCM model, cost structure, risk comparison & step-by-step process. Apply now.",
    url: "https://www.thebuyzaarmart.com/aligarh/franchise-business-investment-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business Investment in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business Investment in Aligarh | The Buyzaar Mart",
    description:
      "Considering a franchise business investment in Aligarh? Explore The Buyzaar Mart's FOCM model, cost structure, risk comparison & step-by-step process. Apply now.",
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