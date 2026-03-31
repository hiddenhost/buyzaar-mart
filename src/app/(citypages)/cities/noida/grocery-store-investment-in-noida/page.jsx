import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Grocery Store Investment in Noida: High-ROI Opportunities 2026 | The Buyzaar Mart",

  description:
    "Discover profitable grocery store investment in Noida with top locations, costs, and returns. The Buyzaar Mart shares expert insights on starting a high-growth retail business in Noida. Invest smart today!",

  keywords:
    "grocery store investment in noida, invest in grocery store noida, grocery business opportunities noida, retail investment noida, supermarket investment noida, grocery franchise noida, grocery store profit noida, start grocery business noida, noida grocery store setup, buyzaar mart noida",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/grocery-store-investment-in-noida",
  },

  openGraph: {
    title:
      "Grocery Store Investment in Noida: High-ROI Opportunities 2026 | The Buyzaar Mart",
    description:
      "Discover profitable grocery store investment in Noida with top locations, costs, and returns. The Buyzaar Mart shares expert insights on starting a high-growth retail business in Noida. Invest smart today!",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-store-investment-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Investment in Noida: High-ROI Opportunities 2026 | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Store Investment in Noida: High-ROI Opportunities 2026 | The Buyzaar Mart",
    description:
      "Discover profitable grocery store investment in Noida with top locations, costs, and returns. The Buyzaar Mart shares expert insights on starting a high-growth retail business in Noida. Invest smart today!",
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