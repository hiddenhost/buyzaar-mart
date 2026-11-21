import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Best Mart Franchise in Amroha | The Buyzaar Mart",
  description:
    "Find the best mart franchise in Amroha. Choose Mini, Super or Hyper Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, full support.",
  keywords: [
    "best mart franchise amroha",
    "best mart franchise in amroha",
    "top mart franchise amroha",
    "mart franchise amroha",
    "mini mart franchise amroha",
    "super mart franchise amroha",
    "hyper mart franchise amroha",
    "buyzaar mart franchise amroha",
    "supermarket franchise amroha",
    "grocery franchise amroha",
    "retail franchise amroha",
    "mart franchise opportunity amroha",
    "low investment mart franchise amroha",
    "mart franchise under 20 lakh",
    "focm mart franchise amroha",
    "foco mart franchise amroha",
    "mart franchise uttar pradesh",
    "organised retail franchise amroha",
    "apply buyzaar mart franchise",
    "franchise business opportunity amroha",
    "mart franchise with training and support",
    "franchise near moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/amroha/best-mart-franchise-amroha",
  },
  openGraph: {
    title: "Best Mart Franchise in Amroha | The Buyzaar Mart",
    description:
      "Find the best mart franchise in Amroha. Choose Mini, Super or Hyper Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, full support.",
    url: "https://www.thebuyzaarmart.com/amroha/best-mart-franchise-amroha",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Mart Franchise in Amroha | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Mart Franchise in Amroha | The Buyzaar Mart",
    description:
      "Find the best mart franchise in Amroha. Choose Mini, Super or Hyper Buyzaar Mart. Investment ₹15–20 lakh, 18–20% margin, full support.",
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