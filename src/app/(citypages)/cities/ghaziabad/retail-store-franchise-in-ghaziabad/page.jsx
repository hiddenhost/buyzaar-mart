import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Retail Store Franchise in Ghaziabad 2025 | Best Neighbourhood Store Opportunity",
  description:
    "Want to open a retail store franchise in Ghaziabad? Discover why The Buyzaar Mart is the smartest franchise opportunity for Ghaziabad entrepreneurs — with full support, proven systems & hassle-free inventory. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/ghaziabad/supermarket-business-ghaziabad",
  },
  openGraph: {
    title:
      "Retail Store Franchise in Ghaziabad 2025 | Best Neighbourhood Store Opportunity",
    description:
      "Want to open a retail store franchise in Ghaziabad? Discover why The Buyzaar Mart is the smartest franchise opportunity for Ghaziabad entrepreneurs — with full support, proven systems & hassle-free inventory. Apply now!",
    url: "https://www.thebuyzaarmart.com/cities/ghaziabad/supermarket-business-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Store Franchise in Ghaziabad 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Retail Store Franchise in Ghaziabad 2025 | Best Neighbourhood Store Opportunity",
    description:
      "Want to open a retail store franchise in Ghaziabad? Discover why The Buyzaar Mart is the smartest franchise opportunity for Ghaziabad entrepreneurs — with full support, proven systems & hassle-free inventory. Apply now!",
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