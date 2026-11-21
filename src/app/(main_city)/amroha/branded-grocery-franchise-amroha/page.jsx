import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Branded Grocery Franchise in Amroha | The Buyzaar Mart",
  description:
    "Open a branded grocery franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, 50+ FMCG brands, full support.",
  keywords: [
    "branded grocery franchise amroha",
    "branded grocery store franchise amroha",
    "branded supermarket franchise amroha",
    "grocery franchise amroha",
    "buyzaar mart franchise amroha",
    "supermarket franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "organised retail franchise amroha",
    "fmcg franchise amroha",
    "grocery franchise with branded products",
    "low investment grocery franchise amroha",
    "grocery franchise 15 lakh amroha",
    "grocery franchise under 20 lakh",
    "focm grocery franchise amroha",
    "foco grocery franchise amroha",
    "mini mart franchise amroha",
    "branded grocery franchise uttar pradesh",
    "franchise business opportunity amroha",
    "apply buyzaar mart franchise",
    "grocery franchise with training and support",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/branded-grocery-franchise-amroha",
  },
  openGraph: {
    title: "Branded Grocery Franchise in Amroha | The Buyzaar Mart",
    description:
      "Open a branded grocery franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, 50+ FMCG brands, full support.",
    url: "https://www.thebuyzaarmart.com/amroha/branded-grocery-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Branded Grocery Franchise in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branded Grocery Franchise in Amroha | The Buyzaar Mart",
    description:
      "Open a branded grocery franchise in Amroha with The Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, 50+ FMCG brands, full support.",
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