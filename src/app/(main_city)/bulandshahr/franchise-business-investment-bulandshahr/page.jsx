import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Franchise Business Investment in Bulandshahr | The Buyzaar Mart",
  description:
    "Plan your franchise business investment in Bulandshahr with The Buyzaar Mart. Compare FOCM and FOCO models, store formats, costs, and expected returns from ₹15 Lakh.",
  keywords: [
    "franchise business investment Bulandshahr",
    "franchise investment Bulandshahr",
    "Buyzaar Mart Bulandshahr",
    "business investment UP",
    "franchise cost Bulandshahr",
    "retail investment Bulandshahr",
    "franchise budget planning",
    "grocery franchise investment",
    "franchise under 20 lakh Bulandshahr",
    "franchise under 25 lakh Bulandshahr",
    "franchise ROI Bulandshahr",
    "franchise investment breakdown",
    "Mini Mart investment Bulandshahr",
    "Super Mart investment Bulandshahr",
    "Hyper Mart investment Bulandshahr",
    "best business investment Bulandshahr",
    "franchise business opportunity UP",
    "franchise partner Bulandshahr",
    "FOCM FOCO investment",
    "supermarket investment Bulandshahr",
    "low investment business Bulandshahr",
    "franchise finance planning",
    "retail franchise UP",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/franchise-business-investment-bulandshahr",
  },
  openGraph: {
    title: "Franchise Business Investment in Bulandshahr | The Buyzaar Mart",
    description:
      "Plan your franchise business investment in Bulandshahr with The Buyzaar Mart. Compare FOCM and FOCO models, store formats, costs, and expected returns from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/franchise-business-investment-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Business Investment in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Business Investment in Bulandshahr | The Buyzaar Mart",
    description:
      "Plan your franchise business investment in Bulandshahr with The Buyzaar Mart. Compare FOCM and FOCO models, store formats, costs, and expected returns from ₹15 Lakh.",
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