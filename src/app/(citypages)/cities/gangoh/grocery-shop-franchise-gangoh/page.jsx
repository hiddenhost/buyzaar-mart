import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Grocery Shop Franchise Gangoh | The Buyzaar Mart – FOCM Model",
  description:
    "Want to open a grocery shop franchise in Gangoh? Join The Buyzaar Mart's FOCM model — company-managed, investor-owned retail stores with full support, proven tech, and real returns. Apply today!",
  keywords: [
    "mart franchise gangoh",
    "the buyzaar mart gangoh",
    "grocery mart franchise gangoh",
    "supermarket franchise gangoh",
    "buyzaar mart franchise gangoh",
    "focm franchise gangoh",
    "open mart in gangoh",
    "franchise business in gangoh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/grocery-shop-franchise-gangoh",
  },

  openGraph: {
    title:
      "Grocery Shop Franchise Gangoh | The Buyzaar Mart – FOCM Model",
    description:
      "Want to open a grocery shop franchise in Gangoh? Join The Buyzaar Mart's FOCM model — company-managed, investor-owned retail stores with full support, proven tech, and real returns. Apply today!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-shop-franchise-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Shop Franchise Gangoh | The Buyzaar Mart – FOCM Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Shop Franchise Gangoh | The Buyzaar Mart – FOCM Model",
    description:
      "Want to open a grocery shop franchise in Gangoh? Join The Buyzaar Mart's FOCM model — company-managed, investor-owned retail stores with full support, proven tech, and real returns. Apply today!",
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