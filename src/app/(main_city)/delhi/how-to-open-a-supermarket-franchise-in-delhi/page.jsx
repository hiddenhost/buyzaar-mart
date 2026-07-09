import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Supermarket Franchise in Delhi | Buyzaar Mart",
  description:
    "Learn how to open a supermarket franchise in Delhi with Buyzaar Mart. Step-by-step process, investment options, and full support. Apply now!",
  keywords: [
    "how to open supermarket franchise Delhi",
    "Buyzaar Mart franchise Delhi",
    "supermarket franchise process",
    "open grocery store Delhi",
    "franchise steps Delhi",
    "retail franchise opportunity Delhi",
    "franchise opportunity Delhi",
    "Buyzaar Mart Delhi",
    "supermarket business Delhi",
    "franchise application Delhi",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi-ncr/how-to-open-a-supermarket-franchise-in-delhi",
  },
  openGraph: {
    title: "How to Open a Supermarket Franchise in Delhi | Buyzaar Mart",
    description:
      "Learn how to open a supermarket franchise in Delhi with Buyzaar Mart. Step-by-step process, investment options, and full support. Apply now!",
    url: "https://www.thebuyzaarmart.com/delhi-ncr/how-to-open-a-supermarket-franchise-in-delhi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Supermarket Franchise in Delhi | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Supermarket Franchise in Delhi | Buyzaar Mart",
    description:
      "Learn how to open a supermarket franchise in Delhi with Buyzaar Mart. Step-by-step process, investment options, and full support. Apply now!",
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