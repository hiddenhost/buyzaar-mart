import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Above 15 Lakh in Varanasi | Buyzaar Mart 2026",
  description:
    "Looking for a mart franchise above 15 lakh in Varanasi? Explore Buyzaar Mart's Super Mart & Hyper Mart formats, investment, area, ROI, and how to apply.",
  keywords: [
    "mart franchise above 15 lakh Varanasi",
    "Buyzaar Mart investment 15 lakh",
    "Super Mart franchise Varanasi",
    "Hyper Mart franchise Varanasi",
    "grocery franchise 15 to 25 lakh",
    "supermarket franchise investment UP",
    "high investment retail franchise Varanasi",
    "Buyzaar Mart ROI",
    "franchise business above 15 lakh India",
    "retail franchise budget Varanasi",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/mart-franchise-above-15-lakh-in-varanasi",
  },
  openGraph: {
    title: "Mart Franchise Above 15 Lakh in Varanasi | Buyzaar Mart 2026",
    description:
      "Looking for a mart franchise above 15 lakh in Varanasi? Explore Buyzaar Mart's Super Mart & Hyper Mart formats, investment, area, ROI, and how to apply.",
    url: "https://www.thebuyzaarmart.com/varanasi/mart-franchise-above-15-lakh-in-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Above 15 Lakh in Varanasi | Buyzaar Mart 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Above 15 Lakh in Varanasi | Buyzaar Mart 2026",
    description:
      "Looking for a mart franchise above 15 lakh in Varanasi? Explore Buyzaar Mart's Super Mart & Hyper Mart formats, investment, area, ROI, and how to apply.",
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