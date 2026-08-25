import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Above ₹15 Lakh in Bulandshahr | The Buyzaar Mart",
  description:
    "Explore a mart franchise above ₹15 lakh in Bulandshahr with The Buyzaar Mart. Super Mart and Hyper Mart formats, FOCO and FOCM models, full setup support.",
  keywords: [
    "mart franchise Bulandshahr",
    "franchise above 15 lakh",
    "super mart franchise Bulandshahr",
    "hyper mart franchise Bulandshahr",
    "grocery franchise Bulandshahr",
    "retail franchise Bulandshahr",
    "high investment franchise Bulandshahr",
    "franchise business Bulandshahr",
    "Buyzaar Mart Bulandshahr",
    "franchise opportunity Bulandshahr",
    "large format franchise UP",
    "FOCO franchise model",
    "FOCM franchise model",
    "best franchise Bulandshahr",
    "supermarket franchise UP",
    "franchise investment Bulandshahr",
    "organized retail Bulandshahr",
    "franchise apply Bulandshahr",
    "how to open mart franchise",
    "franchise near Delhi NCR",
    "retail business opportunity Bulandshahr",
    "big format grocery store franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/mart-franchise-above-15-lakh-bulandshahr",
  },
  openGraph: {
    title: "Mart Franchise Above ₹15 Lakh in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore a mart franchise above ₹15 lakh in Bulandshahr with The Buyzaar Mart. Super Mart and Hyper Mart formats, FOCO and FOCM models, full setup support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/mart-franchise-above-15-lakh-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Above ₹15 Lakh in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Above ₹15 Lakh in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore a mart franchise above ₹15 lakh in Bulandshahr with The Buyzaar Mart. Super Mart and Hyper Mart formats, FOCO and FOCM models, full setup support.",
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