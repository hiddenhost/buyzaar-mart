import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";


export const metadata = {
  title: "Best Alternative to Modern Grocery Store in Kanpur | The Buyzaar Mart",
  description:
    "Looking for a nearby alternative to big-box modern grocery stores in Kanpur? The Buyzaar Mart offers the same organized retail benefits, closer to home. Visit today!",
  keywords: [
    "best alternative to modern grocery store Kanpur",
    "alternative to supermarket Kanpur",
    "neighbourhood grocery alternative Kanpur",
    "alternative to mall grocery store Kanpur",
    "local modern grocery store Kanpur",
    "The Buyzaar Mart alternative Kanpur",
    "best grocery store option Kanpur",
    "organized grocery alternative Kanpur",
    "nearby supermarket alternative Kanpur",
    "The Buyzaar Mart vs big grocery stores",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/best-alternative-to-modern-grocery-store-in-kanpur",
  },
  openGraph: {
    title: "Best Alternative to Modern Grocery Store in Kanpur | The Buyzaar Mart",
    description:
      "Looking for a nearby alternative to big-box modern grocery stores in Kanpur? The Buyzaar Mart offers the same organized retail benefits, closer to home. Visit today!",
    url: "https://www.thebuyzaarmart.com/kanpur/best-alternative-to-modern-grocery-store-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Best Alternative to Modern Grocery Store in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Alternative to Modern Grocery Store in Kanpur | The Buyzaar Mart",
    description:
      "Looking for a nearby alternative to big-box modern grocery stores in Kanpur? The Buyzaar Mart offers the same organized retail benefits, closer to home. Visit today!",
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