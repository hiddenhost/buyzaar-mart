import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Supermarket Business Opportunity in Noida | Profitable Franchise & Investment Guide 2026",

  description:
    "Discover lucrative supermarket business opportunities in Noida with The Buyzaar Mart. Explore franchise options, investment costs, profitability, and why Noida is booming for grocery retail. Start your store today!",

  keywords:
    "hypermart franchise in noida, buyzaar mart noida, hypermarket franchise noida, retail franchise noida, supermarket franchise noida, the buyzaar mart franchise, noida retail business, hypermart business opportunity noida, buyzaar mart hypermart, franchise in noida",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/supermarket-business-opportunity-in-noida",
  },

  openGraph: {
    title:
      "Supermarket Business Opportunity in Noida | Profitable Franchise & Investment Guide 2026",
    description:
      "Discover lucrative supermarket business opportunities in Noida with The Buyzaar Mart. Explore franchise options, investment costs, profitability, and why Noida is booming for grocery retail. Start your store today!",
    url: "https://www.thebuyzaarmart.com/cities/noida/supermarket-business-opportunity-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Business Opportunity in Noida - Profitable Franchise & Investment Guide 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Supermarket Business Opportunity in Noida | Profitable Franchise & Investment Guide 2026",
    description:
      "Discover lucrative supermarket business opportunities in Noida with The Buyzaar Mart. Explore franchise options, investment costs, profitability, and why Noida is booming for grocery retail. Start your store today!",
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