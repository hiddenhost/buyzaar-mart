import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Buyzaar Mart Franchise in Saharanpur | Supermarket Franchise Investment",
  description:
    "Open your Buyzaar Mart supermarket franchise in Saharanpur with multiple store formats, complete training, strong supply chain, and dedicated marketing support. Apply now.",
  keywords:
    "buyzaar mart franchise saharanpur, supermarket franchise saharanpur, grocery franchise saharanpur, retail franchise opportunity saharanpur, franchise business saharanpur, buyzaar mart dealership saharanpur, supermarket franchise investment saharanpur, profitable franchise saharanpur",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title:
      "Buyzaar Mart Franchise in Saharanpur | Supermarket Franchise Opportunity",
    description:
      "Open your Buyzaar Mart supermarket franchise in Saharanpur with multiple store formats, complete training, strong supply chain, and dedicated marketing support. Apply now.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur",
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
      "Buyzaar Mart Franchise in Saharanpur | Supermarket Business Opportunity",
    description:
      "Open your Buyzaar Mart supermarket franchise in Saharanpur with multiple store formats, complete training, strong supply chain, and dedicated marketing support. Apply now.",
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
