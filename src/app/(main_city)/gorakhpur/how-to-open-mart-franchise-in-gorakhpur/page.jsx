import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Mart Franchise in Gorakhpur | Buyzaar Mart",
  description:
    "Learn how to open a supermarket franchise in Gorakhpur with The Buyzaar Mart. Investment from ₹15 Lakh, FOCM model, POS and full support. Apply now.",
  keywords: [
    "how to open mart franchise in gorakhpur",
    "mart franchise in gorakhpur",
    "supermarket franchise in gorakhpur",
    "grocery franchise in gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "the buyzaar mart",
    "grocery store franchise gorakhpur",
    "low investment franchise gorakhpur",
    "franchise business in gorakhpur",
    "franchise opportunities in gorakhpur",
    "supermarket franchise in uttar pradesh",
    "grocery franchise in uttar pradesh",
    "grocery franchise under 20 lakh",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise",
    "FOCM franchise india",
    "retail franchise in eastern UP",
    "supermarket franchise cost india",
    "kirana store franchise gorakhpur",
    "FMCG store franchise india",
    "neighborhood supermarket franchise india",
    "best franchise business in gorakhpur",
    "how to start grocery franchise in india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/how-to-open-mart-franchise-in-gorakhpur",
  },
  openGraph: {
    title: "How to Open Mart Franchise in Gorakhpur | Buyzaar Mart",
    description:
      "Learn how to open a supermarket franchise in Gorakhpur with The Buyzaar Mart. Investment from ₹15 Lakh, FOCM model, POS and full support. Apply now.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/how-to-open-mart-franchise-in-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Mart Franchise in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Mart Franchise in Gorakhpur | Buyzaar Mart",
    description:
      "Learn how to open a supermarket franchise in Gorakhpur with The Buyzaar Mart. Investment from ₹15 Lakh, FOCM model, POS and full support. Apply now.",
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