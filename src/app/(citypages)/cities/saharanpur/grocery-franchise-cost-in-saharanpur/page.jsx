import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Cost in Saharanpur | Investment Details",

  description:
    "Get detailed insights into grocery franchise cost in Saharanpur including investment range, setup support, and store planning.",

  keywords:
    "grocery franchise cost saharanpur, grocery franchise investment saharanpur, grocery franchise price saharanpur, grocery franchise setup cost saharanpur, grocery store franchise cost saharanpur, low cost grocery franchise saharanpur, grocery mart franchise cost saharanpur, grocery franchise fees saharanpur, grocery franchise expenses saharanpur, grocery franchise budget saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-franchise-cost-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Franchise Cost in Saharanpur | Investment Details",
    description:
      "Get detailed insights into grocery franchise cost in Saharanpur including investment range, setup support, and store planning.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-franchise-cost-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Grocery Franchise Cost in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Cost in Saharanpur | Investment Details",
    description:
      "Get detailed insights into grocery franchise cost in Saharanpur including investment range, setup support, and store planning.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
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
