import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Business Opportunity in Amroha | Buyzaar Mart",
  description:
    "Start a grocery franchise business in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training and full support.",
  keywords: [
    "grocery franchise business opportunity amroha",
    "grocery franchise business amroha",
    "grocery franchise opportunity amroha",
    "grocery franchise amroha",
    "grocery store franchise amroha",
    "buyzaar mart franchise amroha",
    "supermarket franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "grocery business opportunity amroha",
    "low investment grocery franchise amroha",
    "grocery franchise 15 lakh amroha",
    "grocery franchise under 20 lakh",
    "focm grocery franchise amroha",
    "foco grocery franchise amroha",
    "mini mart franchise amroha",
    "grocery franchise uttar pradesh",
    "organised retail franchise amroha",
    "apply buyzaar mart franchise",
    "franchise business opportunity amroha",
    "grocery franchise with training and support",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/grocery-franchise-business-opportunity-amroha",
  },
  openGraph: {
    title: "Grocery Franchise Business Opportunity in Amroha | Buyzaar Mart",
    description:
      "Start a grocery franchise business in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training and full support.",
    url: "https://www.thebuyzaarmart.com/amroha/grocery-franchise-business-opportunity-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Business Opportunity in Amroha | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Business Opportunity in Amroha | Buyzaar Mart",
    description:
      "Start a grocery franchise business in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training and full support.",
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