import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Grocery Mart Near Me Meerut | Best Supermart Locations | The Buyzaar Mart",

  description:
    "Searching for a grocery mart near you in Meerut? Discover The Buyzaar Mart for fresh groceries, best prices, and a convenient shopping experience.",

  keywords:
    "mart franchise meerut, supermarket franchise meerut, buyzaar mart franchise meerut, grocery franchise meerut, retail franchise meerut, low investment mart franchise, high return franchise meerut, supermarket business meerut",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/meerut/grocery-mart-near-me-meerut",
  },

  openGraph: {
    title:
      "Grocery Mart Near Me Meerut | Best Supermart Locations | The Buyzaar Mart",
    description:
      "Searching for a grocery mart near you in Meerut? Discover The Buyzaar Mart for fresh groceries, best prices, and a convenient shopping experience.",
    url:
      "https://www.thebuyzaarmart.com/cities/meerut/grocery-mart-near-me-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart grocery mart in Meerut",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Mart Near Me Meerut | Best Supermart Locations | The Buyzaar Mart",
    description:
      "Searching for a grocery mart near you in Meerut? Discover The Buyzaar Mart for fresh groceries, best prices, and a convenient shopping experience.",
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