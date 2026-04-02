import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Opportunity in Meerut | Join The Buyzaar Mart",

  description:
    "Looking for a profitable supermarket franchise opportunity in Meerut? Partner with The Buyzaar Mart and launch your own retail store with expert support, proven systems, and strong brand backing. Apply today!",

  keywords:
    "mart franchise meerut, supermarket franchise meerut, buyzaar mart franchise meerut, grocery franchise meerut, retail franchise meerut, low investment mart franchise, high return franchise meerut, supermarket business meerut",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/meerut/supermarket-franchise-opportunity-meerut",
  },

  openGraph: {
    title: "Supermarket Franchise Opportunity in Meerut | Join The Buyzaar Mart",
    description:
      "Looking for a profitable supermarket franchise opportunity in Meerut? Partner with The Buyzaar Mart and launch your own retail store with expert support, proven systems, and strong brand backing. Apply today!",
    url:
      "https://www.thebuyzaarmart.com/cities/meerut/supermarket-franchise-opportunity-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Opportunity in Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Opportunity in Meerut | Join The Buyzaar Mart",
    description:
      "Looking for a profitable supermarket franchise opportunity in Meerut? Partner with The Buyzaar Mart and launch your own retail store with expert support, proven systems, and strong brand backing. Apply today!",
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