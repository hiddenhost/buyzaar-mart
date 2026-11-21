import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Retail Franchise Opportunity in Amroha | The Buyzaar Mart",
  description:
    "Explore a retail franchise opportunity in Amroha. Open a Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training and full support.",
  keywords: [
    "retail franchise opportunity amroha",
    "retail franchise amroha",
    "retail store franchise amroha",
    "retail business opportunity amroha",
    "buyzaar mart franchise amroha",
    "supermarket franchise amroha",
    "grocery franchise amroha",
    "mart franchise amroha",
    "organised retail franchise amroha",
    "retail franchise business india",
    "low investment retail franchise amroha",
    "retail franchise under 20 lakh",
    "franchise business opportunity amroha",
    "focm retail franchise amroha",
    "foco retail franchise amroha",
    "mini mart franchise amroha",
    "super mart franchise amroha",
    "hyper mart franchise amroha",
    "retail franchise uttar pradesh",
    "apply buyzaar mart franchise",
    "retail franchise with training and support",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/retail-franchise-opportunity-amroha",
  },
  openGraph: {
    title: "Retail Franchise Opportunity in Amroha | The Buyzaar Mart",
    description:
      "Explore a retail franchise opportunity in Amroha. Open a Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training and full support.",
    url: "https://www.thebuyzaarmart.com/amroha/retail-franchise-opportunity-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Franchise Opportunity in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Franchise Opportunity in Amroha | The Buyzaar Mart",
    description:
      "Explore a retail franchise opportunity in Amroha. Open a Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training and full support.",
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