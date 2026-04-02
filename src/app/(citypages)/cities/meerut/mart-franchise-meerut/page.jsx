import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Mart Franchise Meerut - The Buyzaar Mart | Low Investment, High Returns",

  description:
    "Looking for a profitable mart franchise in Meerut? Join The Buyzaar Mart with flexible investment options, strong brand support, and high-growth retail opportunities.",

  keywords:
    "mart franchise meerut, supermarket franchise meerut, buyzaar mart franchise meerut, grocery franchise meerut, retail franchise meerut, low investment mart franchise, high return franchise meerut, supermarket business meerut",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/meerut/mart-franchise-meerut",
  },

  openGraph: {
    title:
      "Mart Franchise Meerut - The Buyzaar Mart | Low Investment, High Returns",
    description:
      "Join The Buyzaar Mart in Meerut with flexible investment options, trusted brand backing, and a scalable retail franchise model.",
    url:
      "https://www.thebuyzaarmart.com/cities/meerut/mart-franchise-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart franchise opportunity in Meerut",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mart Franchise Meerut - The Buyzaar Mart | Low Investment, High Returns",
    description:
      "Looking for a profitable mart franchise in Meerut? Join The Buyzaar Mart with flexible investment options and brand support.",
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