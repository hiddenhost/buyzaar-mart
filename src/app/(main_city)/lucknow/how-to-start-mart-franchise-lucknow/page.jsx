import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Mart Franchise in Lucknow | The Buyzaar Mart",
  description:
    "Want to start a mart franchise in Lucknow? Join The Buyzaar Mart — Lucknow's trusted grocery & supermarket franchise starting from ₹15 Lakh. FOCM model, full support & proven ROI. Apply today",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/how-to-start-a-mart-franchise-in-lucknow",
  },
  openGraph: {
    title: "How to Start a Mart Franchise in Lucknow | The Buyzaar Mart",
    description:
      "Want to start a mart franchise in Lucknow? Join The Buyzaar Mart — Lucknow's trusted grocery & supermarket franchise starting from ₹15 Lakh. FOCM model, full support & proven ROI. Apply today",
    url: "https://www.thebuyzaarmart.com/lucknow/how-to-start-a-mart-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Mart Franchise in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Mart Franchise in Lucknow | The Buyzaar Mart",
    description:
      "Want to start a mart franchise in Lucknow? Join The Buyzaar Mart — Lucknow's trusted grocery & supermarket franchise starting from ₹15 Lakh. FOCM model, full support & proven ROI. Apply today",
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