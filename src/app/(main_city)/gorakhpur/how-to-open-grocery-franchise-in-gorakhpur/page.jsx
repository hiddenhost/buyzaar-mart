import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Grocery Franchise in Gorakhpur | Buyzaar Mart",
  description:
    "Want to open a grocery franchise in Gorakhpur? Learn cost, FSSAI and GST needs, store formats and setup steps with The Buyzaar Mart. From ₹15 Lakh.",
  keywords: [
    "how to open grocery franchise in gorakhpur",
    "grocery franchise in gorakhpur",
    "grocery store franchise in gorakhpur",
    "the buyzaar mart",
    "buyzaar mart grocery franchise",
    "grocery franchise cost in gorakhpur",
    "low investment grocery franchise",
    "grocery franchise under 20 lakh",
    "grocery franchise in uttar pradesh",
    "supermarket franchise in gorakhpur",
    "mini mart franchise gorakhpur",
    "kirana franchise in gorakhpur",
    "FMCG franchise in gorakhpur",
    "FOCM franchise india",
    "grocery franchise with full support",
    "retail franchise in eastern UP",
    "start grocery business in gorakhpur",
    "grocery store licence FSSAI GST",
    "best grocery franchise in india",
    "neighborhood grocery franchise india",
    "franchise business opportunity gorakhpur",
    "daily needs store franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/how-to-open-grocery-franchise-in-gorakhpur",
  },
  openGraph: {
    title: "How to Open Grocery Franchise in Gorakhpur | Buyzaar Mart",
    description:
      "Want to open a grocery franchise in Gorakhpur? Learn cost, FSSAI and GST needs, store formats and setup steps with The Buyzaar Mart. From ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/how-to-open-grocery-franchise-in-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Grocery Franchise in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Grocery Franchise in Gorakhpur | Buyzaar Mart",
    description:
      "Want to open a grocery franchise in Gorakhpur? Learn cost, FSSAI and GST needs, store formats and setup steps with The Buyzaar Mart. From ₹15 Lakh.",
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