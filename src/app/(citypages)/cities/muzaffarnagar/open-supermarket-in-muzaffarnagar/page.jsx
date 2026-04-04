import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "The Buyzaar Mart | Best Open Supermarket in Muzaffarnagar for Fresh Groceries",

  description:
    "Looking for an open supermarket in Muzaffarnagar? The Buyzaar Mart offers fresh groceries, fruits, vegetables, household essentials & daily needs under one roof. Visit us today!",

  keywords:
    "open supermarket in muzaffarnagar, best supermarket in muzaffarnagar, fresh groceries muzaffarnagar, fruits and vegetables muzaffarnagar, household essentials muzaffarnagar, The Buyzaar Mart muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/top-supermarket-in-muzaffarnagar",
  },

  openGraph: {
    title: "The Buyzaar Mart | Best Open Supermarket in Muzaffarnagar for Fresh Groceries",

    description:
      "Looking for an open supermarket in Muzaffarnagar? The Buyzaar Mart offers fresh groceries, fruits, vegetables, household essentials & daily needs under one roof. Visit us today!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/top-supermarket-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Buyzaar Mart Open Supermarket in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Buyzaar Mart | Best Open Supermarket in Muzaffarnagar for Fresh Groceries",

    description:
      "Looking for an open supermarket in Muzaffarnagar? The Buyzaar Mart offers fresh groceries, fruits, vegetables, household essentials & daily needs under one roof. Visit us today!",

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