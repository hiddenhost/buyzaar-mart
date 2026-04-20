import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Grocery Franchise in Ghaziabad 2026 | Open Your Own Grocery Store with Buyzaar Mart",
  description:
    "Searching for a grocery franchise in Ghaziabad? The Buyzaar Mart offers a proven neighbourhood grocery store model with full operational support, hyper-local marketing & hassle-free inventory guarantee. Apply today at thebuyzaarmart.com.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/ghaziabad/grocery-franchise-in-ghaziabad",
  },
  openGraph: {
    title:
      "Grocery Franchise in Ghaziabad 2026 | Open Your Own Grocery Store with Buyzaar Mart",
    description:
      "Searching for a grocery franchise in Ghaziabad? The Buyzaar Mart offers a proven neighbourhood grocery store model with full operational support, hyper-local marketing & hassle-free inventory guarantee. Apply today at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/ghaziabad/grocery-franchise-in-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise in Ghaziabad 2026 | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Franchise in Ghaziabad 2026 | Open Your Own Grocery Store with Buyzaar Mart",
    description:
      "Searching for a grocery franchise in Ghaziabad? The Buyzaar Mart offers a proven neighbourhood grocery store model with full operational support, hyper-local marketing & hassle-free inventory guarantee. Apply today at thebuyzaarmart.com.",
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