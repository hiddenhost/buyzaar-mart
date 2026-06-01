import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Franchise Opportunity in Bareilly – The Buyzaar Mart | Start from ₹15 Lakh",
  description:
    "Explore the best franchise opportunity in Bareilly with The Buyzaar Mart. FOCM model, Mini Mart from ₹15 Lakh, 18–20% gross margins, 50+ FMCG brands & full support. Apply today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/franchise-opportunity-in-bareilly",
  },
  openGraph: {
    title:
      "Franchise Opportunity in Bareilly – The Buyzaar Mart | Start from ₹15 Lakh",
    description:
      "Explore the best franchise opportunity in Bareilly with The Buyzaar Mart. FOCM model, Mini Mart from ₹15 Lakh, 18–20% gross margins, 50+ FMCG brands & full support. Apply today!",
    url:
      "https://www.thebuyzaarmart.com/bareilly/franchise-opportunity-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Opportunity in Bareilly – The Buyzaar Mart | Start from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Franchise Opportunity in Bareilly – The Buyzaar Mart | Start from ₹15 Lakh",
    description:
      "Explore the best franchise opportunity in Bareilly with The Buyzaar Mart. FOCM model, Mini Mart from ₹15 Lakh, 18–20% gross margins, 50+ FMCG brands & full support. Apply today!",
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