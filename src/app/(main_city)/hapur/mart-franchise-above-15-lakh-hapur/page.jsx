import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Above 15 Lakh in Hapur | The Buyzaar Mart",
  description:
    "Explore a mart franchise above 15 lakh in Hapur with The Buyzaar Mart. Learn about Super Mart and Hyper Mart formats, investment breakdown, margins, and the application process.",
  keywords: [
    "mart franchise above 15 lakh Hapur",
    "high investment grocery franchise Hapur",
    "Buyzaar Mart franchise Hapur",
    "Super Mart franchise Hapur",
    "Hyper Mart franchise Hapur",
    "large format grocery franchise Hapur",
    "FOCM franchise Hapur",
    "FOCO franchise Hapur",
    "best mart franchise Hapur",
    "supermarket franchise Hapur",
    "retail franchise investment Hapur",
    "franchise fee grocery Hapur",
    "franchise profit margin Hapur",
    "organised retail Hapur",
    "daily needs store franchise Hapur",
    "grocery retail business Hapur",
    "franchise apply Hapur",
    "HNI investor franchise Hapur",
    "scalable retail franchise Hapur",
    "neighbourhood store franchise Hapur",
    "premium grocery franchise Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/mart-franchise-above-15-lakh-hapur",
  },
  openGraph: {
    title: "Mart Franchise Above 15 Lakh in Hapur | The Buyzaar Mart",
    description:
      "Explore a mart franchise above 15 lakh in Hapur with The Buyzaar Mart. Learn about Super Mart and Hyper Mart formats, investment breakdown, margins, and the application process.",
    url: "https://www.thebuyzaarmart.com/hapur/mart-franchise-above-15-lakh-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Above 15 Lakh in Hapur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Above 15 Lakh in Hapur | The Buyzaar Mart",
    description:
      "Explore a mart franchise above 15 lakh in Hapur with The Buyzaar Mart. Learn about Super Mart and Hyper Mart formats, investment breakdown, margins, and the application process.",
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