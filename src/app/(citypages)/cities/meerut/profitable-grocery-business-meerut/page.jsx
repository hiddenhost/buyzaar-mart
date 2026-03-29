import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Profitable Grocery Business Meerut in Uttar Pradesh | Supermart Franchise Investment | The Buyzaar Mart",
  description: "Discover profitable grocery business opportunities in Meerut, Uttar Pradesh with The Buyzaar Mart franchise.",
  keywords: "start grocery business meerut, buyzaar mart meerut, grocery business investment meerut, grocery licenses meerut, profitable grocery business meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/supermarket-business-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Profitable Grocery Business Meerut in Uttar Pradesh | Supermart Franchise Investment | The Buyzaar Mart",
    description: "Discover profitable grocery business opportunities in Meerut, Uttar Pradesh with The Buyzaar Mart franchise.",
    url: "https://www.thebuyzaarmart.com/cities/meerut/supermarket-business-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Profitable Grocery Business Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Profitable Grocery Business Meerut in Uttar Pradesh | Supermart Franchise Investment | The Buyzaar Mart",
    description: "Discover profitable grocery business opportunities in Meerut, Uttar Pradesh with The Buyzaar Mart franchise.",
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