import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Business Opportunity in Gangoh | The Buyzaar Mart Franchise",
  description: "Explore grocery business opportunity in Gangoh with The Buyzaar Mart franchise. Perfect timing for Saharanpur retail growth, low-risk model, complete support. Launch your profitable venture now!",
  keywords: [
    "grocery business opportunity gangoh, grocery franchise gangoh, the buyzaar mart franchise gangoh, start grocery business gangoh, gangoh retail opportunity, saharanpur grocery franchise, profitable grocery business gangoh, kirana modernization gangoh, organized retail gangoh, buyzaar mart opportunity",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-business-opportunity-in-gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Business Opportunity in Gangoh | The Buyzaar Mart Franchise",
    description: "Explore grocery business opportunity in Gangoh with The Buyzaar Mart franchise. Perfect timing for Saharanpur retail growth, low-risk model, complete support. Launch your profitable venture now!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-business-opportunity-in-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Business Opportunity in Gangoh | The Buyzaar Mart Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Grocery Business Opportunity in Gangoh | The Buyzaar Mart Franchise",
    description: "Explore grocery business opportunity in Gangoh with The Buyzaar Mart franchise. Perfect timing for Saharanpur retail growth, low-risk model, complete support. Launch your profitable venture now!",
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
