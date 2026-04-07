import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Best Franchise Business Muzaffarnagar | The Buyzaar Mart – Grocery Retail Franchise Opportunity",

  description:
    "Looking for the best franchise business in Muzaffarnagar? The Buyzaar Mart offers a proven grocery supermarket franchise with full support, established brand trust, and a clear path to profitability. Enquire today!",

  keywords:
    "open supermarket in muzaffarnagar, best supermarket in muzaffarnagar, fresh groceries muzaffarnagar, fruits and vegetables muzaffarnagar, household essentials muzaffarnagar, The Buyzaar Mart muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/retail-franchise-in-muzaffarnagar",
  },

  openGraph: {
    title:
      "Best Franchise Business Muzaffarnagar | The Buyzaar Mart – Grocery Retail Franchise Opportunity",

    description:
      "Looking for the best franchise business in Muzaffarnagar? The Buyzaar Mart offers a proven grocery supermarket franchise with full support, established brand trust, and a clear path to profitability. Enquire today!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/retail-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "The Best Franchise Business in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Franchise Business Muzaffarnagar | The Buyzaar Mart – Grocery Retail Franchise Opportunity",

    description:
      "Looking for the best franchise business in Muzaffarnagar? The Buyzaar Mart offers a proven grocery supermarket franchise with full support, established brand trust, and a clear path to profitability. Enquire today!",

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