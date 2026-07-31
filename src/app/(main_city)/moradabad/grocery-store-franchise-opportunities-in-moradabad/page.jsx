import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise Opportunities in Moradabad | The Buyzaar Mart",
  description:
    "Discover grocery store franchise opportunities in Moradabad with The Buyzaar Mart. Compare Mini Mart, Super Mart & Hyper Mart investment and area, starting from ₹15 lakh.",
  keywords: [
    "grocery store franchise opportunities Moradabad",
    "franchise opportunity Moradabad",
    "The Buyzaar Mart Moradabad",
    "Mini Mart Super Mart Hyper Mart",
    "supermarket franchise investment Moradabad",
    "low investment franchise Uttar Pradesh",
    "FOCM FOCO franchise model",
    "retail business opportunity Moradabad",
    "grocery franchise ROI",
    "daily needs store franchise Moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/grocery-store-franchise-opportunities-in-moradabad",
  },
  openGraph: {
    title: "Grocery Store Franchise Opportunities in Moradabad | The Buyzaar Mart",
    description:
      "Discover grocery store franchise opportunities in Moradabad with The Buyzaar Mart. Compare Mini Mart, Super Mart & Hyper Mart investment and area, starting from ₹15 lakh.",
    url: "https://www.thebuyzaarmart.com/moradabad/grocery-store-franchise-opportunities-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise Opportunities in Moradabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise Opportunities in Moradabad | The Buyzaar Mart",
    description:
      "Discover grocery store franchise opportunities in Moradabad with The Buyzaar Mart. Compare Mini Mart, Super Mart & Hyper Mart investment and area, starting from ₹15 lakh.",
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