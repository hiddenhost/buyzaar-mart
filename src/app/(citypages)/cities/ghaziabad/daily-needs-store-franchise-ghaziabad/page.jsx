import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Needs Store Franchise in Ghaziabad | The Buyzaar Mart",
  description:
    "Open a daily needs store franchise in Ghaziabad with The Buyzaar Mart. Inventory guarantee, hyper-local marketing & full support. Low investment, high return. Apply now.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/ghaziabad/daily-needs-store-franchise-ghaziabad",
  },
  openGraph: {
    title: "Daily Needs Store Franchise in Ghaziabad | The Buyzaar Mart",
    description:
      "Open a daily needs store franchise in Ghaziabad with The Buyzaar Mart. Inventory guarantee, hyper-local marketing & full support. Low investment, high return. Apply now.",
    url: "https://www.thebuyzaarmart.com/cities/ghaziabad/daily-needs-store-franchise-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Store Franchise in Ghaziabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Needs Store Franchise in Ghaziabad | The Buyzaar Mart",
    description:
      "Open a daily needs store franchise in Ghaziabad with The Buyzaar Mart. Inventory guarantee, hyper-local marketing & full support. Low investment, high return. Apply now.",
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