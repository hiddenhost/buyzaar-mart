import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business Opportunity in Lucknow | The Buyzaar Mart",
  description:
    "Explore the best franchise business opportunity in Lucknow with The Buyzaar Mart. Start a grocery & retail store from ₹15 Lakh with full support, FOCM model & proven brand. Apply today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/franchise-business-opportunity-in-lucknow",
  },
  openGraph: {
    title: "Franchise Business Opportunity in Lucknow | The Buyzaar Mart",
    description:
      "Explore the best franchise business opportunity in Lucknow with The Buyzaar Mart. Start a grocery & retail store from ₹15 Lakh with full support, FOCM model & proven brand. Apply today!",
    url: "https://www.thebuyzaarmart.com/lucknow/franchise-business-opportunity-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business Opportunity in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business Opportunity in Lucknow | The Buyzaar Mart",
    description:
      "Explore the best franchise business opportunity in Lucknow with The Buyzaar Mart. Start a grocery & retail store from ₹15 Lakh with full support, FOCM model & proven brand. Apply today!",
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