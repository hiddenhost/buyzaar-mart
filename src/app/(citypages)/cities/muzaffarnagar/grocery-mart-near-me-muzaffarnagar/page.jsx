import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Grocery Mart Near Me Muzaffarnagar | The Buyzaar Mart – Fresh Deals & Easy Shopping",

  description:
    "Searching for \"grocery mart near me Muzaffarnagar\"? Discover The Buyzaar Mart – top local supermarket with fresh produce, daily essentials, low prices near Bhopa Road & Civil Lines. Shop now or explore franchise options!",

  keywords:
    "open supermarket in muzaffarnagar, best supermarket in muzaffarnagar, fresh groceries muzaffarnagar, fruits and vegetables muzaffarnagar, household essentials muzaffarnagar, The Buyzaar Mart muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/best-grocery-mart-in-muzaffarnagar",
  },

  openGraph: {
    title:
      "Grocery Mart Near Me Muzaffarnagar | The Buyzaar Mart – Fresh Deals & Easy Shopping",

    description:
      "Searching for \"grocery mart near me Muzaffarnagar\"? Discover The Buyzaar Mart – top local supermarket with fresh produce, daily essentials, low prices near Bhopa Road & Civil Lines. Shop now or explore franchise options!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/best-grocery-mart-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Mart Near Me Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Mart Near Me Muzaffarnagar | The Buyzaar Mart – Fresh Deals & Easy Shopping",

    description:
      "Searching for \"grocery mart near me Muzaffarnagar\"? Discover The Buyzaar Mart – top local supermarket with fresh produce, daily essentials, low prices near Bhopa Road & Civil Lines. Shop now or explore franchise options!",

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