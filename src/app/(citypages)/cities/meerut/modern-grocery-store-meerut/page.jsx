import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Modern Grocery Store & Franchise Opportunity in Meerut | Start Your Buyzaar Mart Franchise Today",
    
  description:
    "Looking for a profitable grocery franchise in Meerut? The Buyzaar Mart offers a modern grocery shopping experience plus high-return franchise opportunities with full support, strong supply chain, and proven business model. Start your supermarket franchise today!",

  keywords:
    "grocery franchise meerut, supermarket franchise meerut, buyzaar mart franchise, grocery store franchise india, retail franchise opportunity meerut, profitable franchise india, modern grocery store meerut, start grocery business meerut, low investment franchise grocery, supermarket business opportunity",
    
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/meerut/modern-grocery-store-meerut",
  },

  openGraph: {
    title:
      "Modern Grocery Store & Franchise Opportunity in Meerut | Start Your Buyzaar Mart Franchise Today",
      
    description:
      "Own a profitable grocery franchise in Meerut with The Buyzaar Mart. Get complete setup support, trusted brand value, and a high-growth retail business model.",
      
    url:
      "https://www.thebuyzaarmart.com/cities/meerut/modern-grocery-store-meerut",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Grocery Franchise Opportunity in Meerut",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Start a Profitable Grocery Franchise in Meerut | The Buyzaar Mart",
      
    description:
      "Join The Buyzaar Mart and launch your own modern supermarket franchise in Meerut with expert support and strong ROI potential.",
      
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

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
