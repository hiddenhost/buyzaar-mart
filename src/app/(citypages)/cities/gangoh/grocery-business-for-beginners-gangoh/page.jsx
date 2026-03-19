import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Business for Beginners Gangoh | The Buyzaar Mart Guide",
  description: "Start grocery business for beginners Gangoh with The Buyzaar Mart. Simple roadmap replaces 73 kirana complexity with institutional support, Saharanpur supply, proven execution. Launch your neighborhood store",
  keywords: [
    "grocery business for beginners gangoh, start grocery business gangoh, beginner grocery store gangoh, the buyzaar mart gangoh, grocery franchise gangoh beginners, mini mart gangoh, super mart gangoh, gangoh retail business, saharanpur grocery supply, beginner supermarket gangoh",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-business-for-beginners-gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Business for Beginners Gangoh | The Buyzaar Mart Guide",
    description: "Start grocery business for beginners Gangoh with The Buyzaar Mart. Simple roadmap replaces 73 kirana complexity with institutional support, Saharanpur supply, proven execution. Launch your neighborhood store",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-business-for-beginners-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Business for Beginners Gangoh | The Buyzaar Mart Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Grocery Business for Beginners Gangoh | The Buyzaar Mart Guide",
    description: "Start grocery business for beginners Gangoh with The Buyzaar Mart. Simple roadmap replaces 73 kirana complexity with institutional support, Saharanpur supply, proven execution. Launch your neighborhood store",
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
