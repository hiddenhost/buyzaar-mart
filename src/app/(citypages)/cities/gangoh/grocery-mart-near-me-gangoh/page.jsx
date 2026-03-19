import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Mart Near Me Gangoh | The Buyzaar Mart Launches Soon",
  description: "Find grocery mart near me Gangoh at The Buyzaar Mart—Gangoh's premier modern supermarket launching soon. Fresh daily, complete selection, neighborhood convenience for Saharanpur families. Your best local shopping destination awaits!",
  keywords: [
    "grocery mart near me gangoh, grocery mart gangoh, buyzaar mart gangoh, supermarket near me gangoh, grocery store gangoh, modern supermarket gangoh, grocery near me gangoh, saharanpur grocery mart, gangoh shopping near me, local supermarket gangoh",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-mart-near-me-gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Mart Near Me Gangoh | The Buyzaar Mart Launches Soon",
    description: "Find grocery mart near me Gangoh at The Buyzaar Mart—Gangoh's premier modern supermarket launching soon. Fresh daily, complete selection, neighborhood convenience for Saharanpur families. Your best local shopping destination awaits!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-mart-near-me-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Near Me Gangoh | The Buyzaar Mart Launches Soon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Grocery Mart Near Me Gangoh | The Buyzaar Mart Launches Soon",
    description: "Find grocery mart near me Gangoh at The Buyzaar Mart—Gangoh's premier modern supermarket launching soon. Fresh daily, complete selection, neighborhood convenience for Saharanpur families. Your best local shopping destination awaits!",
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
