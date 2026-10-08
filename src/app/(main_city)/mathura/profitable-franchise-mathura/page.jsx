import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Profitable Franchise in Mathura | Buyzaar Mart Grocery",
  description:
    "Looking for a profitable franchise in Mathura? Learn how grocery franchise profit works, with margins, investment, formats, locations and how to apply.",
  keywords: [
    "profitable franchise Mathura",
    "profitable franchise in Mathura",
    "most profitable franchise business",
    "grocery franchise profit",
    "supermarket franchise Mathura",
    "grocery franchise Mathura",
    "Buyzaar Mart franchise Mathura",
    "mart franchise in Mathura",
    "low investment profitable franchise",
    "mini mart franchise Mathura",
    "franchise business in Mathura",
    "franchise margin India",
    "FOCM franchise Mathura",
    "FOCO franchise Mathura",
    "retail franchise Mathura",
    "grocery franchise cost",
    "Super Mart franchise",
    "Hyper Mart franchise",
    "FMCG franchise Mathura",
    "supermarket franchise Uttar Pradesh",
    "best franchise in Mathura",
    "Mathura Vrindavan franchise",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/profitable-franchise-mathura",
  },
  openGraph: {
    title: "Profitable Franchise in Mathura | Buyzaar Mart Grocery",
    description:
      "Looking for a profitable franchise in Mathura? Learn how grocery franchise profit works, with margins, investment, formats, locations and how to apply.",
    url: "https://www.thebuyzaarmart.com/mathura/profitable-franchise-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Profitable Franchise in Mathura | Buyzaar Mart Grocery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profitable Franchise in Mathura | Buyzaar Mart Grocery",
    description:
      "Looking for a profitable franchise in Mathura? Learn how grocery franchise profit works, with margins, investment, formats, locations and how to apply.",
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