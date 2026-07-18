import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Franchise with Billing System in Varanasi | Buyzaar Mart",
  description:
    "Start a grocery mart franchise in Varanasi with an integrated billing system. Explore Buyzaar Mart's POS software, investment, and franchise benefits.",
  keywords: [
    "grocery mart franchise with billing system Varanasi",
    "Buyzaar Mart franchise",
    "POS billing software franchise",
    "grocery store billing system",
    "retail franchise Varanasi",
    "supermarket franchise Varanasi",
    "grocery franchise business",
    "mart franchise investment",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/grocery-mart-franchise-with-billing-system-varanasi",
  },
  openGraph: {
    title: "Grocery Mart Franchise with Billing System in Varanasi | Buyzaar Mart",
    description:
      "Start a grocery mart franchise in Varanasi with an integrated billing system. Explore Buyzaar Mart's POS software, investment, and franchise benefits.",
    url: "https://www.thebuyzaarmart.com/varanasi/grocery-mart-franchise-with-billing-system-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Franchise with Billing System in Varanasi | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Mart Franchise with Billing System in Varanasi | Buyzaar Mart",
    description:
      "Start a grocery mart franchise in Varanasi with an integrated billing system. Explore Buyzaar Mart's POS software, investment, and franchise benefits.",
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