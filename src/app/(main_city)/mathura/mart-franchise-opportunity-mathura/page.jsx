import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Opportunity in Mathura | The Buyzaar Mart",
  description:
    "Open a Mini, Super or Hyper Mart franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with POS, training and full support.",
  keywords: [
    "mart franchise opportunity Mathura",
    "mart franchise Mathura",
    "mini mart franchise Mathura",
    "super mart franchise Mathura",
    "hyper mart franchise Mathura",
    "Buyzaar Mart franchise Mathura",
    "The Buyzaar Mart",
    "supermarket franchise Mathura",
    "grocery franchise Mathura",
    "retail franchise Mathura",
    "low investment mart franchise",
    "mart franchise under 20 lakh",
    "mart franchise 15 lakh",
    "FOCM franchise Mathura",
    "FOCO franchise Mathura",
    "mart franchise Uttar Pradesh",
    "organised retail franchise Mathura",
    "neighbourhood mart franchise",
    "FMCG mart franchise Mathura",
    "branded mart franchise Mathura",
    "profitable mart franchise Mathura",
    "mart franchise with full support",
    "mart franchise with training",
    "how to open a mart in Mathura",
    "affordable supermarket franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/mart-franchise-opportunity-mathura",
  },
  openGraph: {
    title: "Mart Franchise Opportunity in Mathura | The Buyzaar Mart",
    description:
      "Open a Mini, Super or Hyper Mart franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with POS, training and full support.",
    url: "https://www.thebuyzaarmart.com/mathura/mart-franchise-opportunity-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity in Mathura | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Opportunity in Mathura | The Buyzaar Mart",
    description:
      "Open a Mini, Super or Hyper Mart franchise in Mathura with The Buyzaar Mart. Invest from ₹15 Lakh, earn an 18-20% margin with POS, training and full support.",
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