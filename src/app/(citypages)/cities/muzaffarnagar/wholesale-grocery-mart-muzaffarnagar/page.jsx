import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Wholesale Grocery Mart Muzaffarnagar | Best Bulk Grocery Store & Franchise Opportunity",

  description:
    "Looking for a wholesale grocery mart in Muzaffarnagar? Discover The Buyzaar Mart – best for bulk buying, low prices, and profitable grocery franchise opportunities. Start today!",

  keywords:
    "top grocery store muzaffarnagar, buyzaar mart muzaffarnagar, grocery store muzaffarnagar, fresh produce muzaffarnagar, daily needs muzaffarnagar, family packs muzaffarnagar, reliable shopping muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/wholesale-grocery-mart-muzaffarnagar",
  },

  openGraph: {
    title:
      "Wholesale Grocery Mart Muzaffarnagar | Best Bulk Grocery Store & Franchise Opportunity",

    description:
      "Looking for a wholesale grocery mart in Muzaffarnagar? Discover The Buyzaar Mart – best for bulk buying, low prices, and profitable grocery franchise opportunities. Start today!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/wholesale-grocery-mart-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Wholesale Grocery Mart Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Wholesale Grocery Mart Muzaffarnagar | Best Bulk Grocery Store & Franchise Opportunity",

    description:
      "Looking for a wholesale grocery mart in Muzaffarnagar? Discover The Buyzaar Mart – best for bulk buying, low prices, and profitable grocery franchise opportunities. Start today!",

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