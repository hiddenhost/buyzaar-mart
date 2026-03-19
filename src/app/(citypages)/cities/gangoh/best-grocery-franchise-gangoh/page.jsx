import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Franchise in Gangoh | The Buyzaar Mart Opportunity (2026)",
  description: "Find the best grocery franchise in Gangoh with The Buyzaar Mart. Enjoy proven support, local relevance, and high returns for Saharanpur entrepreneurs. Start your successful store today—low risk, big rewards!",
  keywords: [
    "best grocery franchise in gangoh, grocery franchise gangoh, the buyzaar mart gangoh, grocery store franchise gangoh, supermarket franchise gangoh, profitable grocery franchise gangoh, low investment grocery franchise gangoh, kirana franchise gangoh, organized retail gangoh, saharanpur grocery franchise",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh/best-grocery-franchise-in-gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Grocery Franchise in Gangoh | The Buyzaar Mart Opportunity (2026)",
    description: "Find the best grocery franchise in Gangoh with The Buyzaar Mart. Enjoy proven support, local relevance, and high returns for Saharanpur entrepreneurs. Start your successful store today—low risk, big rewards!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/best-grocery-franchise-in-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Franchise in Gangoh | The Buyzaar Mart Opportunity (2026)",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Franchise in Gangoh | The Buyzaar Mart Opportunity (2026)",
    description: "Find the best grocery franchise in Gangoh with The Buyzaar Mart. Enjoy proven support, local relevance, and high returns for Saharanpur entrepreneurs. Start your successful store today—low risk, big rewards!",
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
