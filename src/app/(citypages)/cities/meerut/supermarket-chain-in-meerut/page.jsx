import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Chain Meerut | The Buyzaar Mart",

  description:
    "Discover The Buyzaar Mart — Meerut's fastest-growing grocery chain. Fresh produce, 5000+ products, unbeatable prices & home delivery. Your trusted retail chain in Meerut.",

  keywords:
    "mart franchise meerut, supermarket franchise meerut, buyzaar mart franchise meerut, grocery franchise meerut, retail franchise meerut, low investment mart franchise, high return franchise meerut, supermarket business meerut",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/meerut/grocery-chain-meerut",
  },

  openGraph: {
    title: "Grocery Chain Meerut | The Buyzaar Mart",
    description:
      "Discover The Buyzaar Mart — Meerut's fastest-growing grocery chain. Fresh produce, 5000+ products, unbeatable prices & home delivery. Your trusted retail chain in Meerut.",
    url:
      "https://www.thebuyzaarmart.com/cities/meerut/grocery-chain-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart grocery chain in Meerut",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grocery Chain Meerut | The Buyzaar Mart",
    description:
      "Discover The Buyzaar Mart — Meerut's fastest-growing grocery chain. Fresh produce, 5000+ products, unbeatable prices & home delivery. Your trusted retail chain in Meerut.",
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