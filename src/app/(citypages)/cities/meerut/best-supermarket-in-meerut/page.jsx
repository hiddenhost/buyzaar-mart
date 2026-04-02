import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Super Market in Meerut | The Buyzaar Mart",
  description: "Searching for the best super market in Meerut? The Buyzaar Mart offers fresh groceries, fair prices, and a smooth shopping experience for every family. Visit or enquire today.",
  keywords: "best super market meerut, supermarket meerut, buyzaar mart meerut, grocery store meerut, fresh groceries meerut, buyzaar mart supermarket",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/best-super-market-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Best Super Market in Meerut | The Buyzaar Mart",
    description: "Searching for the best super market in Meerut? The Buyzaar Mart offers fresh groceries, fair prices, and a smooth shopping experience for every family. Visit or enquire today.",
    url: "https://www.thebuyzaarmart.com/cities/meerut/best-super-market-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Super Market in Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Best Super Market in Meerut | The Buyzaar Mart",
    description: "Searching for the best super market in Meerut? The Buyzaar Mart offers fresh groceries, fair prices, and a smooth shopping experience for every family. Visit or enquire today.",
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
