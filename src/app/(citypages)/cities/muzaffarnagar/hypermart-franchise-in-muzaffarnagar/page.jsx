import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Hypermart Franchise Muzaffarnagar | Buyzaar Mart | Low Cost High Profit",

  description: "Discover Buyzaar Mart hypermart franchise in Muzaffarnagar. 20-50L investment, quick ROI, full support. Ideal for UP entrepreneurs apply today!",

  keywords: "hypermart franchise muzaffarnagar, buyzaar mart muzaffarnagar, hypermart investment muzaffarnagar, low cost hypermart franchise, high profit hypermart muzaffarnagar, buyzaar mart franchise up",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Hypermart Franchise Muzaffarnagar | Buyzaar Mart | Low Cost High Profit",

    description: "Discover Buyzaar Mart hypermart franchise in Muzaffarnagar. 20-50L investment, quick ROI, full support. Ideal for UP entrepreneurs apply today!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Hypermart Franchise Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Hypermart Franchise Muzaffarnagar | Buyzaar Mart | Low Cost High Profit",

    description: "Discover Buyzaar Mart hypermart franchise in Muzaffarnagar. 20-50L investment, quick ROI, full support. Ideal for UP entrepreneurs apply today!",

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