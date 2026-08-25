import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Franchise Model in Bulandshahr | The Buyzaar Mart",
  description:
    "Explore the FOCM franchise model in Bulandshahr with The Buyzaar Mart. Own a Mini Mart, Super Mart or Hyper Mart from ₹15 Lakh with full company-managed support.",
  keywords: [
    "FOCM model Bulandshahr",
    "FOCM franchise Bulandshahr",
    "Buyzaar Mart Bulandshahr",
    "grocery franchise Bulandshahr",
    "supermarket franchise Bulandshahr",
    "franchise opportunity Bulandshahr",
    "FOCM vs FOCO franchise",
    "franchise owned company managed",
    "low investment franchise Bulandshahr",
    "retail franchise UP",
    "Mini Mart franchise Bulandshahr",
    "Super Mart franchise Bulandshahr",
    "Hyper Mart franchise Bulandshahr",
    "best grocery franchise UP",
    "FMCG franchise Bulandshahr",
    "franchise business Bulandshahr",
    "franchise under 20 lakh Bulandshahr",
    "company managed franchise",
    "franchise investment Bulandshahr",
    "daily needs store franchise Bulandshahr",
    "neighbourhood supermarket franchise",
    "franchise partner Bulandshahr",
    "franchise cost Bulandshahr",
    "grocery business Bulandshahr",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bulandshahr/focm-model-franchise-bulandshahr",
  },
  openGraph: {
    title: "FOCM Franchise Model in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore the FOCM franchise model in Bulandshahr with The Buyzaar Mart. Own a Mini Mart, Super Mart or Hyper Mart from ₹15 Lakh with full company-managed support.",
    url: "https://www.thebuyzaarmart.com/bulandshahr/focm-model-franchise-bulandshahr",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise Model in Bulandshahr | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Franchise Model in Bulandshahr | The Buyzaar Mart",
    description:
      "Explore the FOCM franchise model in Bulandshahr with The Buyzaar Mart. Own a Mini Mart, Super Mart or Hyper Mart from ₹15 Lakh with full company-managed support.",
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