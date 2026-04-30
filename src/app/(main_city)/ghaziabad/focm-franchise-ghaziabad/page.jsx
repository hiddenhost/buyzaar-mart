import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Franchise Ghaziabad | The Buyzaar Mart 2026",
  description:
    "Explore the FOCM franchise opportunity in Ghaziabad with The Buyzaar Mart. You invest, we manage. Earn 18–20% margins with zero operational hassle. Apply now.",
  keywords:
    "start grocery business meerut, buyzaar mart meerut, grocery business investment meerut, grocery licenses meerut, profitable grocery business meerut",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/ghaziabad/supermarket-business-ghaziabad",
  },
  openGraph: {
    title: "FOCM Franchise Ghaziabad | The Buyzaar Mart 2026",
    description:
      "Explore the FOCM franchise opportunity in Ghaziabad with The Buyzaar Mart. You invest, we manage. Earn 18–20% margins with zero operational hassle. Apply now.",
    url: "https://www.thebuyzaarmart.com/cities/ghaziabad/supermarket-business-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise Ghaziabad | The Buyzaar Mart 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Franchise Ghaziabad | The Buyzaar Mart 2026",
    description:
      "Explore the FOCM franchise opportunity in Ghaziabad with The Buyzaar Mart. You invest, we manage. Earn 18–20% margins with zero operational hassle. Apply now.",
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