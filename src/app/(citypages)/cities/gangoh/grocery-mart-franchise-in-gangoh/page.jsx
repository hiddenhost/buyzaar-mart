import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Best Grocery Franchise in Gangoh | Affordable Business Opportunity",
  description:
    "Looking to start a grocery franchise in Gangoh? Launch a profitable store with affordable investment, strong margins, and expert operational support.",
  keywords: [
    "grocery mart franchise in gangoh, grocery franchise in gangoh, supermarket franchise in gangoh, best grocery franchise in gangoh, low investment grocery franchise gangoh, affordable grocery franchise gangoh, grocery store franchise gangoh, grocery business opportunity in gangoh, mini supermarket franchise gangoh, kirana franchise in gangoh, profitable grocery franchise gangoh,"
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/gangoh",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Best Grocery Franchise in Gangoh | Affordable Business Opportunity",
    description:
      "Looking to start a grocery franchise in Gangoh? Launch a profitable store with affordable investment, strong margins, and expert operational support.",
    url: "https://www.thebuyzaarmart.com/cities/gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Franchise in Gangoh | Affordable Business Opportunity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Franchise in Gangoh | Affordable Business Opportunity",
    description:
      "Looking to start a grocery franchise in Gangoh? Launch a profitable store with affordable investment, strong margins, and expert operational support.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return  (
    <>
    <Banner />
    <Content />
    <Services />
    </>
  );
}
