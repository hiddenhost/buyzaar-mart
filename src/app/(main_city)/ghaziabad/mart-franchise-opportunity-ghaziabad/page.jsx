import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Opportunity Ghaziabad | The Buyzaar Mart",
  description:
    "Looking for a mart franchise opportunity in Ghaziabad? Join The Buyzaar Mart — India's trusted retail franchise with 18–20% margins, full support & proven model.",
  keywords:
    "start grocery business meerut, buyzaar mart meerut, grocery business investment meerut, grocery licenses meerut, profitable grocery business meerut",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/ghaziabad/supermarket-business-ghaziabad",
  },
  openGraph: {
    title: "Mart Franchise Opportunity Ghaziabad | The Buyzaar Mart",
    description:
      "Looking for a mart franchise opportunity in Ghaziabad? Join The Buyzaar Mart — India's trusted retail franchise with 18–20% margins, full support & proven model.",
    url: "https://www.thebuyzaarmart.com/ghaziabad/supermarket-business-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity Ghaziabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Opportunity Ghaziabad | The Buyzaar Mart",
    description:
      "Looking for a mart franchise opportunity in Ghaziabad? Join The Buyzaar Mart — India's trusted retail franchise with 18–20% margins, full support & proven model.",
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