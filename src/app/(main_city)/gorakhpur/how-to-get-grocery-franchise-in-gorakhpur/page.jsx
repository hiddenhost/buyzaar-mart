import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Get Grocery Franchise in Gorakhpur | Buyzaar Mart",
  description:
    "Learn how to get a grocery franchise in Gorakhpur. Compare options, verify terms, check cost from ₹15 Lakh and apply with The Buyzaar Mart.",
  keywords: [
    "how to get grocery franchise in gorakhpur",
    "get grocery franchise in gorakhpur",
    "grocery franchise in gorakhpur",
    "the buyzaar mart",
    "buyzaar mart grocery franchise",
    "grocery franchise approval process",
    "how to choose grocery franchise",
    "grocery franchise due diligence",
    "grocery franchise questions to ask",
    "grocery franchise cost in gorakhpur",
    "grocery franchise under 20 lakh",
    "low investment grocery franchise",
    "grocery franchise 15 lakh",
    "supermarket franchise in gorakhpur",
    "mini mart franchise gorakhpur",
    "franchise business in gorakhpur",
    "FOCM franchise india",
    "grocery franchise in uttar pradesh",
    "grocery franchise with full support",
    "best grocery franchise in india",
    "franchise application process india",
    "neighborhood grocery franchise india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/how-to-get-grocery-franchise-in-gorakhpur",
  },
  openGraph: {
    title: "How to Get Grocery Franchise in Gorakhpur | Buyzaar Mart",
    description:
      "Learn how to get a grocery franchise in Gorakhpur. Compare options, verify terms, check cost from ₹15 Lakh and apply with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/how-to-get-grocery-franchise-in-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Get Grocery Franchise in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get Grocery Franchise in Gorakhpur | Buyzaar Mart",
    description:
      "Learn how to get a grocery franchise in Gorakhpur. Compare options, verify terms, check cost from ₹15 Lakh and apply with The Buyzaar Mart.",
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