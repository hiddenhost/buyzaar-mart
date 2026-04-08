import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "New Grocery Store Muzaffarnagar | The Buyzaar Mart - Fresh Deals Daily.",

  description:
    "Discover the new grocery store in Muzaffarnagar at The Buyzaar Mart. Shop fresh veggies, daily essentials, and trusted brands with local savings. Visit today!",

  keywords:
    "top grocery store muzaffarnagar, buyzaar mart muzaffarnagar, grocery store muzaffarnagar, fresh produce muzaffarnagar, daily needs muzaffarnagar, family packs muzaffarnagar, reliable shopping muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/new-grocery-store-muzaffarnagar",
  },

  openGraph: {
    title: "New Grocery Store Muzaffarnagar | The Buyzaar Mart - Fresh Deals Daily.",

    description:
      "Discover the new grocery store in Muzaffarnagar at The Buyzaar Mart. Shop fresh veggies, daily essentials, and trusted brands with local savings. Visit today!",

    url:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/new-grocery-store-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "New Grocery Store Muzaffarnagar | The Buyzaar Mart - Fresh Deals Daily.",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "New Grocery Store Muzaffarnagar | The Buyzaar Mart - Fresh Deals Daily.",

    description:
      "Discover the new grocery store in Muzaffarnagar at The Buyzaar Mart. Shop fresh veggies, daily essentials, and trusted brands with local savings. Visit today!",

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