import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Investment in Gangoh: Best Franchise Opportunities 2026 | The Buyzaar Mart",
  description: "Invest in a profitable grocery mart franchise in Gangoh with The Buyzaar Mart. Low investment, high returns, local support. Start your supermarket business today! Explore ROI, costs & benefits.",
  keywords: [
    "grocery mart investment gangoh, grocery franchise gangoh, buyzaar mart franchise gangoh, supermarket investment gangoh, grocery business investment gangoh, franchise opportunities gangoh 2026, low investment grocery franchise, profitable supermarket gangoh, gangoh retail investment, saharanpur grocery franchise",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-mart-investment-gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Mart Investment in Gangoh: Best Franchise Opportunities 2026 | The Buyzaar Mart",
    description: "Invest in a profitable grocery mart franchise in Gangoh with The Buyzaar Mart. Low investment, high returns, local support. Start your supermarket business today! Explore ROI, costs & benefits.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-mart-investment-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Investment in Gangoh: Best Franchise Opportunities 2026 | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Grocery Mart Investment in Gangoh: Best Franchise Opportunities 2026 | The Buyzaar Mart",
    description: "Invest in a profitable grocery mart franchise in Gangoh with The Buyzaar Mart. Low investment, high returns, local support. Start your supermarket business today! Explore ROI, costs & benefits.",
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
