import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Supermarket in Gangoh | The Buyzaar Mart Excellence",
  description: "Discover the best supermarket in Gangoh at The Buyzaar Mart. Premium quality, wide selection, modern service for Saharanpur families. Gangoh's premier shopping destination—experience superior retail!",
  keywords: [
    "best supermarket in gangoh, supermarket gangoh, the buyzaar mart gangoh, grocery supermarket gangoh, gangoh supermarket, premium supermarket gangoh, modern supermarket gangoh, saharanpur supermarket, gangoh shopping, buyzaar mart gangoh",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh/best-supermarket-in-gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Supermarket in Gangoh | The Buyzaar Mart Excellence",
    description: "Discover the best supermarket in Gangoh at The Buyzaar Mart. Premium quality, wide selection, modern service for Saharanpur families. Gangoh's premier shopping destination—experience superior retail!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/best-supermarket-in-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Supermarket in Gangoh | The Buyzaar Mart Excellence",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Best Supermarket in Gangoh | The Buyzaar Mart Excellence",
    description: "Discover the best supermarket in Gangoh at The Buyzaar Mart. Premium quality, wide selection, modern service for Saharanpur families. Gangoh's premier shopping destination—experience superior retail!",
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
