import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Top Grocery Store in Meerut | Best Supermarket Deals & Daily Essentials",
  description: "Searching for the top grocery store in Meerut? The Buyzaar Mart offers fresh products, fair prices, and a smooth shopping experience for every family. Visit or enquire today.",
  keywords: "top grocery store meerut, best supermarket meerut, buyzaar mart meerut, grocery store deals meerut, daily essentials meerut, supermarket meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/top-grocery-store-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Top Grocery Store in Meerut | Best Supermarket Deals & Daily Essentials",
    description: "Searching for the top grocery store in Meerut? The Buyzaar Mart offers fresh products, fair prices, and a smooth shopping experience for every family. Visit or enquire today.",
    url: "https://www.thebuyzaarmart.com/cities/meerut/top-grocery-store-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Top Grocery Store in Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Top Grocery Store in Meerut | Best Supermarket Deals & Daily Essentials",
    description: "Searching for the top grocery store in Meerut? The Buyzaar Mart offers fresh products, fair prices, and a smooth shopping experience for every family. Visit or enquire today.",
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
