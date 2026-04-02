import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Start Grocery Business in Meerut | The Buyzaar Mart Guide",
  description: "Want to start a grocery business in Meerut? Get expert insights on investment, location, licensing & profit strategies with The Buyzaar Mart. Complete 2025 guide!",
  keywords: "start grocery business meerut, buyzaar mart meerut, grocery business investment meerut, grocery licenses meerut, profitable grocery business meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/supermarket-business-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Start Grocery Business in Meerut | The Buyzaar Mart Guide",
    description: "Want to start a grocery business in Meerut? Get expert insights on investment, location, licensing & profit strategies with The Buyzaar Mart. Complete 2025 guide!",
    url: "https://www.thebuyzaarmart.com/cities/meerut/supermarket-business-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Start Grocery Business in Meerut | The Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Start Grocery Business in Meerut | The Buyzaar Mart Guide",
    description: "Want to start a grocery business in Meerut? Get expert insights on investment, location, licensing & profit strategies with The Buyzaar Mart. Complete 2025 guide!",
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