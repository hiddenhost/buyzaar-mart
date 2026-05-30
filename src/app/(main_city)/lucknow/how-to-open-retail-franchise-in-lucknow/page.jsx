import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Retail Franchise in Lucknow | The Buyzaar Mart – Step-by-Step Guide",
  description:
    "Want to know how to open a retail franchise in Lucknow? Follow The Buyzaar Mart's step-by-step guide. Choose Mini Mart under FOCM or FOCO model with full investment breakdown. Apply at thebuyzaarmart.com.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/how-to-open-retail-franchise-in-lucknow",
  },
  openGraph: {
    title: "How to Open Retail Franchise in Lucknow | The Buyzaar Mart – Step-by-Step Guide",
    description:
      "Want to know how to open a retail franchise in Lucknow? Follow The Buyzaar Mart's step-by-step guide. Choose Mini Mart under FOCM or FOCO model with full investment breakdown. Apply at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/lucknow/how-to-open-retail-franchise-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Retail Franchise in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Retail Franchise in Lucknow | The Buyzaar Mart – Step-by-Step Guide",
    description:
      "Want to know how to open a retail franchise in Lucknow? Follow The Buyzaar Mart's step-by-step guide. Choose Mini Mart under FOCM or FOCO model with full investment breakdown. Apply at thebuyzaarmart.com.",
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