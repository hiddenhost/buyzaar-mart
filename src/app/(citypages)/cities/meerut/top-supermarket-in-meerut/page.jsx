import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "The Buyzaar Mart – Top Supermarket for Fresh Groceries & Daily Essentials",
  description: "Shop at The Buyzaar Mart – your top supermarket for fresh produce, branded groceries, household essentials & more. Great prices, trusted quality, and a seamless shopping experience near you",
  keywords: "top supermarket meerut, buyzaar mart supermarket, fresh groceries meerut, daily essentials meerut, best grocery store meerut, buyzaar mart meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/best-super-market-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "The Buyzaar Mart – Top Supermarket for Fresh Groceries & Daily Essentials",
    description: "Shop at The Buyzaar Mart – your top supermarket for fresh produce, branded groceries, household essentials & more. Great prices, trusted quality, and a seamless shopping experience near you",
    url: "https://www.thebuyzaarmart.com/cities/meerut/best-super-market-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart – Top Supermarket for Fresh Groceries & Daily Essentials",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "The Buyzaar Mart – Top Supermarket for Fresh Groceries & Daily Essentials",
    description: "Shop at The Buyzaar Mart – your top supermarket for fresh produce, branded groceries, household essentials & more. Great prices, trusted quality, and a seamless shopping experience near you",
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
