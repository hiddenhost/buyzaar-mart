import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Business for Beginners Meerut | Start with The Buyzaar Mart",

  description:
    "Start your grocery business in Meerut with The Buyzaar Mart. Perfect for beginners with expert support, modern systems, and a profitable retail model.",

  keywords:
    "mart franchise meerut, supermarket franchise meerut, buyzaar mart franchise meerut, grocery franchise meerut, retail franchise meerut, low investment mart franchise, high return franchise meerut, supermarket business meerut",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/meerut/grocery-business-for-beginners-meerut",
  },

  openGraph: {
    title: "Grocery Business for Beginners Meerut | Start with The Buyzaar Mart",
    description:
      "Start your grocery business in Meerut with The Buyzaar Mart. Perfect for beginners with expert support, modern systems, and a profitable retail model.",
    url:
      "https://www.thebuyzaarmart.com/cities/meerut/grocery-business-for-beginners-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart grocery business for beginners in Meerut",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grocery Business for Beginners Meerut | Start with The Buyzaar Mart",
    description:
      "Start your grocery business in Meerut with The Buyzaar Mart. Perfect for beginners with expert support, modern systems, and a profitable retail model.",
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