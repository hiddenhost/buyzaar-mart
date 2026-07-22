import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Partner in Gurugram | Franchise Partnership Opportunity",
  description:
    "Become a Buyzaar Mart partner in Gurugram. FOCM model, FSSAI-licensed daily needs retail, investment from ₹15 Lakh. Apply for franchise partnership today.",
  keywords: [
    "Buyzaar Mart partner Gurugram",
    "become a Buyzaar Mart franchise partner",
    "retail franchise partnership Gurugram",
    "low investment supermarket franchise",
    "grocery franchise Gurugram",
    "FOCM franchise model",
    "Mini Mart Super Mart Hyper Mart",
    "franchise partner India",
    "low investment supermarket franchise Lucknow",
    "retail business franchise Gurugram",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/buyzaar-mart-partner-gurugram",
  },
  openGraph: {
    title: "Buyzaar Mart Partner in Gurugram | Franchise Partnership Opportunity",
    description:
      "Become a Buyzaar Mart partner in Gurugram. FOCM model, FSSAI-licensed daily needs retail, investment from ₹15 Lakh. Apply for franchise partnership today.",
    url: "https://www.thebuyzaarmart.com/gurgaon/buyzaar-mart-partner-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Partner in Gurugram | Franchise Partnership Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzaar Mart Partner in Gurugram | Franchise Partnership Opportunity",
    description:
      "Become a Buyzaar Mart partner in Gurugram. FOCM model, FSSAI-licensed daily needs retail, investment from ₹15 Lakh. Apply for franchise partnership today.",
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