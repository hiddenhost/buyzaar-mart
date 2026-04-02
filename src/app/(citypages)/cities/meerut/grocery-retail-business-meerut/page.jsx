import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Retail Business Meerut | The Buyzaar Mart",

  description:
    "Shop fresh groceries, daily essentials & household products at The Buyzaar Mart — Meerut's most trusted grocery retail store. Quality products, fair prices & doorstep delivery.",

  keywords:
    "mart franchise meerut, supermarket franchise meerut, buyzaar mart franchise meerut, grocery franchise meerut, retail franchise meerut, low investment mart franchise, high return franchise meerut, supermarket business meerut",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/meerut/grocery-retail-business-meerut",
  },

  openGraph: {
    title: "Grocery Retail Business Meerut | The Buyzaar Mart",
    description:
      "Shop fresh groceries, daily essentials & household products at The Buyzaar Mart — Meerut's most trusted grocery retail store. Quality products, fair prices & doorstep delivery.",
    url: "https://www.thebuyzaarmart.com/cities/meerut/grocery-retail-business-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart grocery retail store in Meerut",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grocery Retail Business Meerut | The Buyzaar Mart",
    description:
      "Shop fresh groceries, daily essentials & household products at The Buyzaar Mart — Meerut's most trusted grocery retail store. Quality products, fair prices & doorstep delivery.",
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