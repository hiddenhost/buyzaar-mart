import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Grocery Business in Muzaffarnagar | The Buyzaar Mart Guide",

  description:
    "Want to start a grocery business in Muzaffarnagar? Learn the complete guide — investment breakdown, hypermart model, setup tips, and how The Buyzaar Mart can help you succeed. Read now!",

  keywords:
    "open supermarket in muzaffarnagar, best supermarket in muzaffarnagar, fresh groceries muzaffarnagar, fruits and vegetables muzaffarnagar, household essentials muzaffarnagar, The Buyzaar Mart muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-business-opportunity-in-muzaffarnagar",
  },

  openGraph: {
    title: "How to Start a Grocery Business in Muzaffarnagar | The Buyzaar Mart Guide",

    description:
      "Want to start a grocery business in Muzaffarnagar? Learn the complete guide — investment breakdown, hypermart model, setup tips, and how The Buyzaar Mart can help you succeed. Read now!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-business-opportunity-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Grocery Business in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Start a Grocery Business in Muzaffarnagar | The Buyzaar Mart Guide",

    description:
      "Want to start a grocery business in Muzaffarnagar? Learn the complete guide — investment breakdown, hypermart model, setup tips, and how The Buyzaar Mart can help you succeed. Read now!",

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