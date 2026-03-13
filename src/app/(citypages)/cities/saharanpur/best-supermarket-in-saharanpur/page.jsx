import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Supermarket in Saharanpur | Top Local Retail Stores",

  description:
    "  Explore the best supermarkets in Saharanpur offering organized shopping experiences",

  keywords:
    " best supermarket in saharanpur, top supermarket saharanpur, leading supermarket saharanpur, popular supermarket saharanpur, supermarket near me saharanpur, premium supermarket saharanpur, trusted supermarket saharanpur, supermarket ratings saharanpur, supermarket reviews saharanpur, grocery supermarket saharanpur",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/best-supermarket-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title:
      "Best Supermarket in Saharanpur | top Quality & Delivery",
    description:
      " Explore the best supermarkets in Saharanpur offering organized shopping experiences",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/best-supermarket-in-saharanpur",

    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Opportunity in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title:
      "Best Supermarket in Saharanpur | top Quality & Delivery",
    description:
      "Explore the best supermarkets in Saharanpur offering organized shopping experiences.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
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
