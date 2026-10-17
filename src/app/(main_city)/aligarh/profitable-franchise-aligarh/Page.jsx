import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Profitable Franchise in Aligarh | The Buyzaar Mart",
  description:
    "Looking for a profitable franchise in Aligarh? See how The Buyzaar Mart grocery franchise works: 18–20% gross margin, FOCM and FOCO models, costs and support.",
  keywords: [
    "profitable franchise Aligarh",
    "profitable franchise in Aligarh",
    "most profitable franchise Aligarh",
    "high profit franchise Aligarh",
    "franchise business in Aligarh",
    "franchise opportunities in Aligarh",
    "low investment franchise Aligarh",
    "profitable business Aligarh",
    "grocery franchise in Aligarh",
    "supermarket franchise in Aligarh",
    "Buyzaar Mart franchise Aligarh",
    "FOCM franchise Aligarh",
    "FOCO franchise Aligarh",
    "franchise profit margin India",
    "grocery franchise profit",
    "franchise under 20 lakh",
    "retail franchise Aligarh",
    "franchise with training and support",
    "daily need franchise Aligarh",
    "franchise revenue share India",
    "supermarket franchise margin",
    "Mini Mart franchise Aligarh",
    "profitable retail franchise India",
    "franchise owned company managed",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/profitable-franchise-aligarh",
  },
  openGraph: {
    title: "Profitable Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Looking for a profitable franchise in Aligarh? See how The Buyzaar Mart grocery franchise works: 18–20% gross margin, FOCM and FOCO models, costs and support.",
    url: "https://www.thebuyzaarmart.com/aligarh/profitable-franchise-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Profitable Franchise in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profitable Franchise in Aligarh | The Buyzaar Mart",
    description:
      "Looking for a profitable franchise in Aligarh? See how The Buyzaar Mart grocery franchise works: 18–20% gross margin, FOCM and FOCO models, costs and support.",
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