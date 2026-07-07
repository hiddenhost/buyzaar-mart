import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise With Training Support in Varanasi | Price & Investment",
  description:
    "Start a mart franchise in Varanasi with complete training support from The Buyzaar Mart. Check store prices (Mini Mart ₹15 lakh onwards), investment details, and how to apply.",
  keywords: [
    "mart franchise training support Varanasi",
    "Buyzaar Mart Varanasi",
    "grocery franchise price India",
    "Mini Mart franchise 15 lakh",
    "retail franchise with support",
    "Super Mart Hyper Mart price",
    "FOCM FOCO franchise",
    "franchise business Varanasi",
    "low investment franchise India",
    "supermarket franchise training",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/mart-franchise-with-training-support-varanasi",
  },
  openGraph: {
    title: "Mart Franchise With Training Support in Varanasi | Price & Investment",
    description:
      "Start a mart franchise in Varanasi with complete training support from The Buyzaar Mart. Check store prices (Mini Mart ₹15 lakh onwards), investment details, and how to apply.",
    url: "https://www.thebuyzaarmart.com/varanasi/mart-franchise-with-training-support-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise With Training Support in Varanasi | Price & Investment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise With Training Support in Varanasi | Price & Investment",
    description:
      "Start a mart franchise in Varanasi with complete training support from The Buyzaar Mart. Check store prices (Mini Mart ₹15 lakh onwards), investment details, and how to apply.",
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