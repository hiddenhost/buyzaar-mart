import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Supermarket Near Me Meerut | The Buyzaar Mart Franchise Opportunity",

  description:
    "Looking for a supermarket near me in Meerut? Discover The Buyzaar Mart franchise - India's fastest-growing retail chain. Low investment, high returns. Own your grocery store today!",

  keywords:
    "mart franchise meerut, supermarket franchise meerut, buyzaar mart franchise meerut, grocery franchise meerut, retail franchise meerut, low investment mart franchise, high return franchise meerut, supermarket business meerut",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/meerut/supermarket-near-me-meerut",
  },

  openGraph: {
    title:
      "Supermarket Near Me Meerut | The Buyzaar Mart Franchise Opportunity",
    description:
      "Looking for a supermarket near me in Meerut? Discover The Buyzaar Mart franchise - India's fastest-growing retail chain. Low investment, high returns. Own your grocery store today!",
    url:
      "https://www.thebuyzaarmart.com/cities/meerut/supermarket-near-me-meerut",
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
    title:
      "Supermarket Near Me Meerut | The Buyzaar Mart Franchise Opportunity",
    description:
      "Looking for a supermarket near me in Meerut? Discover The Buyzaar Mart franchise - India's fastest-growing retail chain. Low investment, high returns. Own your grocery store today!",
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