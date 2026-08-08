import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Best Grocery Shopping Mall in Kanpur | The Buyzaar Mart",
  description:
    "Discover The Buyzaar Mart, the best grocery shopping mall in Kanpur, offering fresh produce, daily essentials & branded products under one roof at great prices.",
  keywords: [
    "best grocery shopping mall in Kanpur",
    "grocery mall Kanpur",
    "The Buyzaar Mart Kanpur",
    "best supermarket mall Kanpur",
    "family grocery shopping Kanpur",
    "one stop grocery mall Kanpur",
    "best shopping mall for groceries Kanpur",
    "grocery shopping experience Kanpur",
    "low investment supermarket franchise in Lucknow",
    "supermarket franchise Lucknow",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/best-grocery-shopping-mall-in-kanpur",
  },
  openGraph: {
    title: "Best Grocery Shopping Mall in Kanpur | The Buyzaar Mart",
    description:
      "Discover The Buyzaar Mart, the best grocery shopping mall in Kanpur, offering fresh produce, daily essentials & branded products under one roof at great prices.",
    url: "https://www.thebuyzaarmart.com/kanpur/best-grocery-shopping-mall-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Grocery Shopping Mall in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Grocery Shopping Mall in Kanpur | The Buyzaar Mart",
    description:
      "Discover The Buyzaar Mart, the best grocery shopping mall in Kanpur, offering fresh produce, daily essentials & branded products under one roof at great prices.",
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