import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise Gangoh | The Buyzaar Mart – Hypermart & Minimart Opportunity",
  description:
    "Looking for a grocery store franchise in Gangoh? The Buyzaar Mart offers hypermart and minimart franchise models with proven systems, strong margins, and local community value. Join India’s growing retail network today.",
  keywords: [
    "best grocery mart in gangoh, grocery mart gangoh, the buyzaar mart gangoh, grocery store gangoh, supermarket gangoh, gangoh grocery store, fresh groceries gangoh, neighborhood grocery gangoh, reliable grocery gangoh, gangoh shopping",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-store-franchise-gangoh",
  },

  openGraph: {
    title: "Grocery Store Franchise Gangoh | The Buyzaar Mart – Hypermart & Minimart Opportunity",
    description:
      "Looking for a grocery store franchise in Gangoh? The Buyzaar Mart offers hypermart and minimart franchise models with proven systems, strong margins, and local community value. Join India’s growing retail network today.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-store-franchise-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise Gangoh | The Buyzaar Mart – Hypermart & Minimart Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise Gangoh | The Buyzaar Mart – Hypermart & Minimart Opportunity",
    description:
      "Looking for a grocery store franchise in Gangoh? The Buyzaar Mart offers hypermart and minimart franchise models with proven systems, strong margins, and local community value. Join India’s growing retail network today.",
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