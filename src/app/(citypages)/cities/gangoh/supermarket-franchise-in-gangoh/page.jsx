import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise in Gangoh | Low Investment & High Profit",
  description:
    "Start a supermarket franchise in Gangoh with low investment and excellent profit potential. Get complete setup support and build a successful retail business.",
  keywords: [
    "supermarket franchise in gangoh, best supermarket franchise in gangoh, low investment supermarket franchise gangoh, affordable supermarket franchise gangoh, supermarket business opportunity in gangoh, supermarket franchise cost in gangoh, profitable supermarket franchise gangoh, mini supermarket franchise gangoh, retail supermarket franchise gangoh, start a supermarket in gangoh, supermarket dealership in gangoh,"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh/supermarket-franchise-in-gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Supermarket Franchise in Gangoh | Affordable Opportunity",
    description:
      "Start a supermarket franchise in Gangoh with low investment and excellent profit potential. Get complete setup support and build a successful retail business.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/supermarket-franchise-in-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise in Gangoh | Low Investment & High Profit",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Gangoh | Low Investment & High Profit",
    description:
      "Start a supermarket franchise in Gangoh with low investment and excellent profit potential. Get complete setup support and build a successful retail business.",
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
