import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Supermarket Franchise Opportunity Gangoh | Buyzaar Mart Supermart FOCM Model.",
  description:
    "Explore a profitable supermarket franchise opportunity in Gangoh with The Buyzaar Mart’s FOCM model. Low-risk, high-return supermart franchise with clear investment breakdown, brand support, and passive income potential. Learn how to start today.",
  keywords: [
    "mart franchise gangoh",
    "the buyzaar mart gangoh",
    "grocery mart franchise gangoh",
    "supermarket franchise gangoh",
    "buyzaar mart franchise gangoh",
    "focm franchise gangoh",
    "open mart in gangoh",
    "franchise business in gangoh",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/supermarket-franchise-gangoh",
  },

  openGraph: {
    title:
      "Supermarket Franchise Opportunity Gangoh | Buyzaar Mart Supermart FOCM Model.",
    description:
      "Explore a profitable supermarket franchise opportunity in Gangoh with The Buyzaar Mart’s FOCM model. Low-risk, high-return supermart franchise with clear investment breakdown, brand support, and passive income potential. Learn how to start today.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/supermarket-franchise-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Opportunity Gangoh | Buyzaar Mart Supermart FOCM Model.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Supermarket Franchise Opportunity Gangoh | Buyzaar Mart Supermart FOCM Model.",
    description:
      "Explore a profitable supermarket franchise opportunity in Gangoh with The Buyzaar Mart’s FOCM model. Low-risk, high-return supermart franchise with clear investment breakdown, brand support, and passive income potential. Learn how to start today.",
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