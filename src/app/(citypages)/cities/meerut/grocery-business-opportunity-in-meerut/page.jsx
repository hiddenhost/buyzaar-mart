import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Start a Profitable Grocery Business in Meerut with The Buyzaar Mart",
  description: "Discover profitable grocery business opportunities in Meerut with The Buyzaar Mart franchise. Low-risk, high-demand retail with full setup support. Start now!",
  keywords: "grocery business meerut, buyzaar mart franchise meerut, profitable grocery business, retail franchise meerut, supermarket opportunity meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/grocery-business-opportunity-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Start a Profitable Grocery Business in Meerut with The Buyzaar Mart",
    description: "Discover profitable grocery business opportunities in Meerut with The Buyzaar Mart franchise. Low-risk, high-demand retail with full setup support. Start now!",
    url: "https://www.thebuyzaarmart.com/cities/meerut/grocery-business-opportunity-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Start a Profitable Grocery Business in Meerut with The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Start a Profitable Grocery Business in Meerut with The Buyzaar Mart",
    description: "Discover profitable grocery business opportunities in Meerut with The Buyzaar Mart franchise. Low-risk, high-demand retail with full setup support. Start now!",
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
