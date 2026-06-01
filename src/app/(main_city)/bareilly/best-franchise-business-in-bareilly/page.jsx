import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Best Franchise Business in Bareilly – The Buyzaar Mart | 3 Mart Formats from ₹15 Lakh",
  description:
    "Looking for the best franchise business in Bareilly? The Buyzaar Mart offers Mini Mart, Super Mart & Hyper Mart formats from ₹15 Lakh with FOCM model, 18–20% margins & full support. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/best-franchise-business-in-bareilly",
  },
  openGraph: {
    title:
      "Best Franchise Business in Bareilly – The Buyzaar Mart | 3 Mart Formats from ₹15 Lakh",
    description:
      "Looking for the best franchise business in Bareilly? The Buyzaar Mart offers Mini Mart, Super Mart & Hyper Mart formats from ₹15 Lakh with FOCM model, 18–20% margins & full support. Apply now!",
    url:
      "https://www.thebuyzaarmart.com/bareilly/best-franchise-business-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise Business in Bareilly – The Buyzaar Mart | 3 Mart Formats from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Franchise Business in Bareilly – The Buyzaar Mart | 3 Mart Formats from ₹15 Lakh",
    description:
      "Looking for the best franchise business in Bareilly? The Buyzaar Mart offers Mini Mart, Super Mart & Hyper Mart formats from ₹15 Lakh with FOCM model, 18–20% margins & full support. Apply now!",
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