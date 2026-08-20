import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start Grocery Store Franchise Hapur | Step-by-Step Plan",
  description:
    "Learn how to start a grocery store franchise in Hapur with The Buyzaar Mart, covering planning, budgeting, formats, setup, and the complete process.",
  keywords: [
    "how to start grocery store franchise Hapur",
    "start grocery store franchise Hapur",
    "buyzaar mart Hapur",
    "grocery store business Hapur",
    "supermarket franchise Hapur",
    "mini mart grocery store Hapur",
    "super mart grocery store Hapur",
    "hyper mart grocery store Hapur",
    "grocery store planning Hapur",
    "grocery store budget Hapur",
    "grocery franchise setup Hapur",
    "retail franchise Uttar Pradesh",
    "grocery store licenses Hapur",
    "buyzaar mart franchise apply Hapur",
    "grocery store launch Hapur",
    "branded grocery store Hapur",
    "kirana upgrade franchise Hapur",
    "daily needs store franchise Hapur",
    "grocery store investment Hapur",
    "grocery store staff training Hapur",
    "organised grocery retail Hapur",
    "grocery store timeline Hapur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/hapur/how-to-start-grocery-store-franchise-hapur",
  },
  openGraph: {
    title: "How to Start Grocery Store Franchise Hapur | Step-by-Step Plan",
    description:
      "Learn how to start a grocery store franchise in Hapur with The Buyzaar Mart, covering planning, budgeting, formats, setup, and the complete process.",
    url: "https://www.thebuyzaarmart.com/hapur/how-to-start-grocery-store-franchise-hapur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start Grocery Store Franchise Hapur | Step-by-Step Plan",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start Grocery Store Franchise Hapur | Step-by-Step Plan",
    description:
      "Learn how to start a grocery store franchise in Hapur with The Buyzaar Mart, covering planning, budgeting, formats, setup, and the complete process.",
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