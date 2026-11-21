import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Franchise in Amroha | The Buyzaar Mart",
  description:
    "Looking for the best grocery franchise in Amroha? Open a Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training and full support.",
  keywords: [
    "best grocery franchise amroha",
    "best grocery franchise in amroha",
    "top grocery franchise amroha",
    "grocery franchise amroha",
    "grocery store franchise amroha",
    "grocery franchise opportunity amroha",
    "buyzaar mart franchise amroha",
    "supermarket franchise amroha",
    "mart franchise amroha",
    "retail franchise amroha",
    "low investment grocery franchise amroha",
    "grocery franchise 15 lakh amroha",
    "grocery franchise under 20 lakh",
    "profitable grocery franchise amroha",
    "focm grocery franchise amroha",
    "foco grocery franchise amroha",
    "mini mart franchise amroha",
    "grocery franchise uttar pradesh",
    "organised retail franchise amroha",
    "apply buyzaar mart franchise",
    "grocery franchise with training and support",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/best-grocery-franchise-amroha",
  },
  openGraph: {
    title: "Best Grocery Franchise in Amroha | The Buyzaar Mart",
    description:
      "Looking for the best grocery franchise in Amroha? Open a Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training and full support.",
    url: "https://www.thebuyzaarmart.com/amroha/best-grocery-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Franchise in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Franchise in Amroha | The Buyzaar Mart",
    description:
      "Looking for the best grocery franchise in Amroha? Open a Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, training and full support.",
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