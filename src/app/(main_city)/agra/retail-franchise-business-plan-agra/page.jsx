import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Business Plan in Agra | The Buyzaar Mart",
  description:
    "Learn how to create a retail franchise business plan in Agra with The Buyzaar Mart. Explore market analysis, financials, and growth strategy tips.",
  keywords: [
    "retail franchise business plan agra",
    "grocery franchise business plan",
    "franchise business plan in agra",
    "retail franchise plan",
    "the buyzaar mart franchise",
    "grocery store business plan agra",
    "franchise opportunities agra",
    "retail business plan format",
    "franchise investment plan agra",
    "grocery franchise model agra",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/agra/retail-franchise-business-plan-agra",
  },
  openGraph: {
    title: "Retail Franchise Business Plan in Agra | The Buyzaar Mart",
    description:
      "Learn how to create a retail franchise business plan in Agra with The Buyzaar Mart. Explore market analysis, financials, and growth strategy tips.",
    url: "https://www.thebuyzaarmart.com/agra/retail-franchise-business-plan-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Business Plan in Agra | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Business Plan in Agra | The Buyzaar Mart",
    description:
      "Learn how to create a retail franchise business plan in Agra with The Buyzaar Mart. Explore market analysis, financials, and growth strategy tips.",
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