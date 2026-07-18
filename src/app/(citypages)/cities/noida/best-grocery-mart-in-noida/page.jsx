import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Mart in Noida | Top Quality at The Buyzaar Mart",

  description:
    "Find the best grocery mart in Noida at The Buyzaar Mart. Fresh produce, daily essentials, fast delivery, and unbeatable convenience for Sector 18 to Extension. Shop smarter today!",

  keywords:
    "best grocery mart noida, grocery mart noida, buyzaar mart noida, best supermarket noida, grocery store noida, fresh groceries noida, grocery delivery noida, top grocery store noida, noida extension grocery, sector 18 grocery",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/best-grocery-mart-in-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Grocery Mart in Noida | Top Quality at The Buyzaar Mart",
    description: "Find the best grocery mart in Noida at The Buyzaar Mart. Fresh produce, daily essentials, fast delivery, and unbeatable convenience for Sector 18 to Extension. Shop smarter today!",
    url: "https://www.thebuyzaarmart.com/cities/noida/best-grocery-mart-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart - Best Grocery Mart in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Mart in Noida | Top Quality at The Buyzaar Mart",
    description: "Find the best grocery mart in Noida at The Buyzaar Mart. Fresh produce, daily essentials, fast delivery, and unbeatable convenience for Sector 18 to Extension. Shop smarter today!",
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
