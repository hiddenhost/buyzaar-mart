import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Mart in Meerut | The Buyzaar Mart",
  description: "Looking for the best grocery mart in Meerut? The Buyzaar Mart offers fresh products, smart prices, and a modern shopping experience for every family. Visit or enquire now.",
  keywords: "best grocery mart meerut, grocery mart meerut, buyzaar mart meerut, grocery store meerut, fresh groceries meerut, buyzaar mart grocery",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/best-grocery-mart-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Best Grocery Mart in Meerut | The Buyzaar Mart",
    description: "Looking for the best grocery mart in Meerut? The Buyzaar Mart offers fresh products, smart prices, and a modern shopping experience for every family. Visit or enquire now.",
    url: "https://www.thebuyzaarmart.com/cities/meerut/best-grocery-mart-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Mart in Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Mart in Meerut | The Buyzaar Mart",
    description: "Looking for the best grocery mart in Meerut? The Buyzaar Mart offers fresh products, smart prices, and a modern shopping experience for every family. Visit or enquire now.",
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
