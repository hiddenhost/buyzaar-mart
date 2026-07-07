import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Opportunity for New Investors in Varanasi | Buyzaar Mart",
  description:
    "Looking for a grocery franchise opportunity in Varanasi? Explore Buyzaar Mart's investment plans, support system, and ideal setup for new investors.",
  keywords: [
    "grocery franchise opportunity for new investors Varanasi",
    "Buyzaar Mart franchise",
    "first time franchise business Varanasi",
    "low investment grocery franchise",
    "new investor retail franchise",
    "grocery store franchise Varanasi",
    "supermarket franchise for beginners",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/grocery-franchise-opportunity-for-new-investors-in-varanasi",
  },
  openGraph: {
    title: "Grocery Franchise Opportunity for New Investors in Varanasi | Buyzaar Mart",
    description:
      "Looking for a grocery franchise opportunity in Varanasi? Explore Buyzaar Mart's investment plans, support system, and ideal setup for new investors.",
    url: "https://www.thebuyzaarmart.com/varanasi/grocery-franchise-opportunity-for-new-investors-in-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Opportunity for New Investors in Varanasi | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Opportunity for New Investors in Varanasi | Buyzaar Mart",
    description:
      "Looking for a grocery franchise opportunity in Varanasi? Explore Buyzaar Mart's investment plans, support system, and ideal setup for new investors.",
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