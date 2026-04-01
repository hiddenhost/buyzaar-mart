import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Wholesale Grocery Mart Meerut | Buyzaar Mart Franchise",

  description:
    "Start profitable wholesale grocery mart in Meerut with The Buyzaar Mart.",

  keywords:
    "mart franchise meerut, supermarket franchise meerut, buyzaar mart franchise meerut, grocery franchise meerut, retail franchise meerut, low investment mart franchise, high return franchise meerut, supermarket business meerut",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/meerut/wholesale-grocery-mart-meerut",
  },

  openGraph: {
    title: "Wholesale Grocery Mart Meerut | Buyzaar Mart Franchise",
    description:
      "Start profitable wholesale grocery mart in Meerut with The Buyzaar Mart.",
    url:
      "https://www.thebuyzaarmart.com/cities/meerut/wholesale-grocery-mart-meerut",
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
    title: "Wholesale Grocery Mart Meerut | Buyzaar Mart Franchise",
    description:
      "Start profitable wholesale grocery mart in Meerut with The Buyzaar Mart.",
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