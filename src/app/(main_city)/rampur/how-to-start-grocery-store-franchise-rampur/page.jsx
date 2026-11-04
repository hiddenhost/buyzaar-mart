import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "How to Start a Grocery Franchise in Rampur | Buyzaar Mart",
  description:
    "Learn how to start a grocery store franchise in Rampur with The Buyzaar Mart. Total investment from ₹15 Lakh, training, POS billing and launch support.",
  keywords: [
    "how to start grocery store franchise Rampur",
    "grocery store franchise Rampur",
    "grocery franchise Rampur",
    "start grocery franchise Rampur",
    "grocery franchise steps Rampur",
    "open grocery store Rampur",
    "how to open a mart in Rampur",
    "Buyzaar Mart franchise Rampur",
    "mini mart franchise Rampur",
    "supermarket franchise Rampur",
    "mart franchise Rampur",
    "retail franchise Rampur",
    "franchise business Rampur",
    "franchise opportunity Rampur",
    "low investment grocery franchise",
    "grocery franchise under 20 lakh",
    "grocery franchise Uttar Pradesh",
    "grocery franchise near Moradabad",
    "FOCM grocery franchise",
    "franchise owned company managed",
    "POS enabled grocery store",
    "grocery franchise application process",
    "grocery store franchise documents required",
    "grocery franchise in Bilaspur Milak Suar",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/rampur/how-to-start-grocery-store-franchise-rampur",
  },
  openGraph: {
    title: "How to Start a Grocery Franchise in Rampur | Buyzaar Mart",
    description:
      "Learn how to start a grocery store franchise in Rampur with The Buyzaar Mart. Total investment from ₹15 Lakh, training, POS billing and launch support.",
    url: "https://www.thebuyzaarmart.com/rampur/how-to-start-grocery-store-franchise-rampur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Grocery Franchise in Rampur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Grocery Franchise in Rampur | Buyzaar Mart",
    description:
      "Learn how to start a grocery store franchise in Rampur with The Buyzaar Mart. Total investment from ₹15 Lakh, training, POS billing and launch support.",
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