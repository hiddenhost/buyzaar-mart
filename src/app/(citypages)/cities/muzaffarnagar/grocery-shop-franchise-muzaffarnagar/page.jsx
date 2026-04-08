import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Shop Franchise Muzaffarnagar – The Buyzaar Mart",

  description:
    "Start a grocery shop franchise in Muzaffarnagar with The Buyzaar Mart. Low investment, high returns, full support, and zero franchise fees. Enquire now!",

  keywords:
    "open supermarket in muzaffarnagar, best supermarket in muzaffarnagar, fresh groceries muzaffarnagar, fruits and vegetables muzaffarnagar, household essentials muzaffarnagar, The Buyzaar Mart muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-store-franchise-muzaffarnagar",
  },

  openGraph: {
    title: "Grocery Shop Franchise Muzaffarnagar – The Buyzaar Mart",

    description:
      "Start a grocery shop franchise in Muzaffarnagar with The Buyzaar Mart. Low investment, high returns, full support, and zero franchise fees. Enquire now!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-store-franchise-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Shop Franchise Muzaffarnagar – The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grocery Shop Franchise Muzaffarnagar – The Buyzaar Mart",

    description:
      "Start a grocery shop franchise in Muzaffarnagar with The Buyzaar Mart. Low investment, high returns, full support, and zero franchise fees. Enquire now!",

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