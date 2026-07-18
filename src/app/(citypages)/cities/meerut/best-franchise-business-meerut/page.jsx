import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise Business in Meerut | The Buyzaar Mart Opportunity",
  description: "Explore the best franchise business in Meerut with The Buyzaar Mart. Low-risk entry, strong local demand, and expert support for success in grocery retail. Start your profitable venture today!",
  keywords: "start grocery business meerut, buyzaar mart meerut, grocery business investment meerut, grocery licenses meerut, profitable grocery business meerut",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/meerut/best-franchise-business-meerut",
  },
  // ✅ OPEN GRAPH  
  openGraph: {
    title: "Best Franchise Business in Meerut | The Buyzaar Mart Opportunity",
    description: "Explore the best franchise business in Meerut with The Buyzaar Mart. Low-risk entry, strong local demand, and expert support for success in grocery retail. Start your profitable venture today!",
    url: "https://www.thebuyzaarmart.com/cities/meerut/best-franchise-business-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise Business in Meerut | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise Business in Meerut | The Buyzaar Mart Opportunity",
    description: "Explore the best franchise business in Meerut with The Buyzaar Mart. Low-risk entry, strong local demand, and expert support for success in grocery retail. Start your profitable venture today!",
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