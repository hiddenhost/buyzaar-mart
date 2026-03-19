import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Franchise Business Gangoh | The Buyzaar Mart Profit Leadership",
  description: "Discover best franchise business Gangoh with The Buyzaar Mart. Proven grocery retail model dominates Saharanpur market, complete support systems. Secure Gangoh's premier franchise opportunity now!",
  keywords: [
    "best franchise business gangoh, franchise business in gangoh, grocery franchise gangoh, the buyzaar mart gangoh, profitable franchise gangoh, saharanpur franchise opportunity, gangoh business opportunity, retail franchise gangoh, organized retail franchise gangoh, low risk franchise gangoh",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh/best-franchise-business-gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Franchise Business Gangoh | The Buyzaar Mart Profit Leadership",
    description: "Discover best franchise business Gangoh with The Buyzaar Mart. Proven grocery retail model dominates Saharanpur market, complete support systems. Secure Gangoh's premier franchise opportunity now!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/best-franchise-business-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Franchise Business Gangoh | The Buyzaar Mart Profit Leadership",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Best Franchise Business Gangoh | The Buyzaar Mart Profit Leadership",
    description: "Discover best franchise business Gangoh with The Buyzaar Mart. Proven grocery retail model dominates Saharanpur market, complete support systems. Secure Gangoh's premier franchise opportunity now!",
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
