import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Convenience Store Franchise Ghaziabad | The Buyzaar Mart",
  description:
    "Start your own convenience store franchise in Ghaziabad with The Buyzaar Mart. Low investment of ₹10–20 Lakhs, full backend support, POS billing, and hassle-free inventory. Apply today!",
  keywords:
    "start grocery business meerut, buyzaar mart meerut, grocery business investment meerut, grocery licenses meerut, profitable grocery business meerut",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/ghaziabad/convenience-store-franchise-ghaziabad",
  },
  openGraph: {
    title: "Convenience Store Franchise Ghaziabad | The Buyzaar Mart",
    description:
      "Start your own convenience store franchise in Ghaziabad with The Buyzaar Mart. Low investment of ₹10–20 Lakhs, full backend support, POS billing, and hassle-free inventory. Apply today!",
    url: "https://www.thebuyzaarmart.com/ghaziabad/convenience-store-franchise-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Convenience Store Franchise Ghaziabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convenience Store Franchise Ghaziabad | The Buyzaar Mart",
    description:
      "Start your own convenience store franchise in Ghaziabad with The Buyzaar Mart. Low investment of ₹10–20 Lakhs, full backend support, POS billing, and hassle-free inventory. Apply today!",
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