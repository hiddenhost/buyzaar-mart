import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Franchise in Noida | The Buyzaar Mart Opportunity",

  description:
    "Discover the best grocery franchise in Noida with The Buyzaar Mart. Proven model, complete support, rapid ROI, and prime territories in high-growth sectors. Secure your spot in Noida's retail boom!",

  keywords:
    "best grocery franchise noida, grocery franchise noida, buyzaar mart franchise, grocery business noida, franchise opportunity noida, retail franchise noida, supermarket franchise noida, profitable franchise noida, grocery investment noida, noida retail opportunity",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/best-grocery-franchise-in-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Grocery Franchise in Noida | The Buyzaar Mart Opportunity",
    description: "Discover the best grocery franchise in Noida with The Buyzaar Mart. Proven model, complete support, rapid ROI, and prime territories in high-growth sectors. Secure your spot in Noida's retail boom!",
    url: "https://www.thebuyzaarmart.com/cities/noida/best-grocery-franchise-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart - Best Grocery Franchise in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Franchise in Noida | The Buyzaar Mart Opportunity",
    description: "Discover the best grocery franchise in Noida with The Buyzaar Mart. Proven model, complete support, rapid ROI, and prime territories in high-growth sectors. Secure your spot in Noida's retail boom!",
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
