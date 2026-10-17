import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise to Open in Aligarh | The Buyzaar Mart",
  description:
    "Looking for the best franchise to open in Aligarh? Explore The Buyzaar Mart supermarket franchise: FOCM and FOCO models, 18–20% margin, full support. Apply now.",
  keywords: [
    "best franchise to open in Aligarh",
    "best franchise in Aligarh",
    "franchise business in Aligarh",
    "franchise opportunities in Aligarh",
    "profitable franchise Aligarh",
    "low investment franchise Aligarh",
    "supermarket franchise in Aligarh",
    "grocery franchise in Aligarh",
    "retail franchise Aligarh",
    "mart franchise Aligarh",
    "Buyzaar Mart franchise Aligarh",
    "FOCM franchise Aligarh",
    "FOCO franchise Aligarh",
    "best business to start in Aligarh",
    "new business ideas Aligarh",
    "franchise under 20 lakh",
    "best grocery franchise India",
    "supermarket franchise Uttar Pradesh",
    "FMCG franchise India",
    "top franchise in Uttar Pradesh",
    "franchise with training and support",
    "safe franchise investment India",
    "daily need business Aligarh",
    "The Buyzaar Mart",
    "franchise owned company managed",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/best-franchise-to-open-in-aligarh",
  },
  openGraph: {
    title: "Best Franchise to Open in Aligarh | The Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Aligarh? Explore The Buyzaar Mart supermarket franchise: FOCM and FOCO models, 18–20% margin, full support. Apply now.",
    url: "https://www.thebuyzaarmart.com/aligarh/best-franchise-to-open-in-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise to Open in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise to Open in Aligarh | The Buyzaar Mart",
    description:
      "Looking for the best franchise to open in Aligarh? Explore The Buyzaar Mart supermarket franchise: FOCM and FOCO models, 18–20% margin, full support. Apply now.",
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