import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Business for Beginners Muzaffarnagar | Start with Buyzaar Mart",

  description:
    "Learn how to start a grocery business in Muzaffarnagar with low investment. Explore Buyzaar Mart’s FOCM model, investment breakdown, profits & step-by-step guide.",

  keywords:
    "top grocery store muzaffarnagar, buyzaar mart muzaffarnagar, grocery store muzaffarnagar, fresh produce muzaffarnagar, daily needs muzaffarnagar, family packs muzaffarnagar, reliable shopping muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-business-for-beginners-muzaffarnagar",
  },

  openGraph: {
    title: "Grocery Business for Beginners Muzaffarnagar | Start with Buyzaar Mart",

    description:
      "Learn how to start a grocery business in Muzaffarnagar with low investment. Explore Buyzaar Mart’s FOCM model, investment breakdown, profits & step-by-step guide.",

    url:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-business-for-beginners-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Business for Beginners Muzaffarnagar | Start with Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grocery Business for Beginners Muzaffarnagar | Start with Buyzaar Mart",

    description:
      "Learn how to start a grocery business in Muzaffarnagar with low investment. Explore Buyzaar Mart’s FOCM model, investment breakdown, profits & step-by-step guide.",

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