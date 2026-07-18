import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Retail Franchise Ghaziabad 2026 | Step-by-Step Guide|",
  description:
    "Want to open a retail franchise in Ghaziabad? Follow this complete step-by-step guide — from choosing the right brand and legal documents to location selection and store launch. Start with The Buyzaar Mart today.",
  keywords:
    "start grocery business meerut, buyzaar mart meerut, grocery business investment meerut, grocery licenses meerut, profitable grocery business meerut",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/ghaziabad/how-to-open-a-retail-franchise-ghaziabad",
  },
  openGraph: {
    title: "How to Open a Retail Franchise Ghaziabad 2026 | Step-by-Step Guide|",
    description:
      "Want to open a retail franchise in Ghaziabad? Follow this complete step-by-step guide — from choosing the right brand and legal documents to location selection and store launch. Start with The Buyzaar Mart today.",
    url: "https://www.thebuyzaarmart.com/ghaziabad/how-to-open-a-retail-franchise-ghaziabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Retail Franchise Ghaziabad 2026 | Step-by-Step Guide|",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Retail Franchise Ghaziabad 2026 | Step-by-Step Guide|",
    description:
      "Want to open a retail franchise in Ghaziabad? Follow this complete step-by-step guide — from choosing the right brand and legal documents to location selection and store launch. Start with The Buyzaar Mart today.",
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