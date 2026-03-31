import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Cost in Noida | The Buyzaar Mart Investment Guide",

  description:
    "Explore supermarket franchise cost in Noida through The Buyzaar Mart. Tailored guidance for setup, operations, and growth in high-demand neighborhoods.",

  keywords:
    "supermarket franchise cost in noida, noida supermarket franchise cost, supermarket investment guide noida, buyzaar mart noida, supermarket setup cost noida, grocery franchise cost noida, retail franchise cost noida, supermarket business noida, noida retail investment, supermarket opportunity noida",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/supermarket-franchise-cost-in-noida",
  },

  openGraph: {
    title: "Supermarket Franchise Cost in Noida | The Buyzaar Mart Investment Guide",
    description:
      "Explore supermarket franchise cost in Noida through The Buyzaar Mart. Tailored guidance for setup, operations, and growth in high-demand neighborhoods.",
    url: "https://www.thebuyzaarmart.com/cities/noida/supermarket-franchise-cost-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Cost in Noida | The Buyzaar Mart Investment Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Cost in Noida | The Buyzaar Mart Investment Guide",
    description:
      "Explore supermarket franchise cost in Noida through The Buyzaar Mart. Tailored guidance for setup, operations, and growth in high-demand neighborhoods.",
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