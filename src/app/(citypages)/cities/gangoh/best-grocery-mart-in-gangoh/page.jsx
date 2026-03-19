import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Mart in Gangoh | The Buyzaar Mart Excellence",
  description: "Discover the best grocery mart in Gangoh at The Buyzaar Mart. Fresh daily essentials, wide selection, reliable service for Gangoh families. Your trusted neighborhood store—Gangoh's top choice!",
  keywords: [
    "best grocery mart in gangoh, grocery mart gangoh, the buyzaar mart gangoh, grocery store gangoh, supermarket gangoh, gangoh grocery store, fresh groceries gangoh, neighborhood grocery gangoh, reliable grocery gangoh, gangoh shopping",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh/best-grocery-mart-in-gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Grocery Mart in Gangoh | The Buyzaar Mart Excellence",
    description: "Discover the best grocery mart in Gangoh at The Buyzaar Mart. Fresh daily essentials, wide selection, reliable service for Gangoh families. Your trusted neighborhood store—Gangoh's top choice!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/best-grocery-mart-in-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Mart in Gangoh | The Buyzaar Mart Excellence",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Mart in Gangoh | The Buyzaar Mart Excellence",
    description: "Discover the best grocery mart in Gangoh at The Buyzaar Mart. Fresh daily essentials, wide selection, reliable service for Gangoh families. Your trusted neighborhood store—Gangoh's top choice!",
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
