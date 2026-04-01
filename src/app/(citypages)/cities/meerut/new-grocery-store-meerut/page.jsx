import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "New Grocery Store in Meerut | The Buyzaar Mart – Fresh, Affordable & Convenient",

  description:
    "Looking for a new grocery store in Meerut? Discover The Buyzaar Mart for fresh products, great prices, and a modern shopping experience near you.",

  keywords:
    "mart franchise meerut, supermarket franchise meerut, buyzaar mart franchise meerut, grocery franchise meerut, retail franchise meerut, low investment mart franchise, high return franchise meerut, supermarket business meerut",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/meerut/new-grocery-store-in-meerut",
  },

  openGraph: {
    title:
      "New Grocery Store in Meerut | The Buyzaar Mart – Fresh, Affordable & Convenient",
    description:
      "Looking for a new grocery store in Meerut? Discover The Buyzaar Mart for fresh products, great prices, and a modern shopping experience near you.",
    url:
      "https://www.thebuyzaarmart.com/cities/meerut/new-grocery-store-in-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart new grocery store in Meerut",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "New Grocery Store in Meerut | The Buyzaar Mart – Fresh, Affordable & Convenient",
    description:
      "Looking for a new grocery store in Meerut? Discover The Buyzaar Mart for fresh products, great prices, and a modern shopping experience near you.",
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