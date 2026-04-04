import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Mart Franchise Muzaffarnagar | The Buyzaar Mart – Own Your Supermarket Franchise Today",

  description:
    "Looking for a mart franchise in Muzaffarnagar? The Buyzaar Mart offers a complete supermarket franchise opportunity with proven brand trust, FOCM model, full setup support, and clear profitability. Enquire today!",

  keywords:
    "open supermarket in muzaffarnagar, best supermarket in muzaffarnagar, fresh groceries muzaffarnagar, fruits and vegetables muzaffarnagar, household essentials muzaffarnagar, The Buyzaar Mart muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  openGraph: {
    title:
      "Mart Franchise Muzaffarnagar | The Buyzaar Mart – Own Your Supermarket Franchise Today",

    description:
      "Looking for a mart franchise in Muzaffarnagar? The Buyzaar Mart offers a complete supermarket franchise opportunity with proven brand trust, FOCM model, full setup support, and clear profitability. Enquire today!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mart Franchise Muzaffarnagar | The Buyzaar Mart – Own Your Supermarket Franchise Today",

    description:
      "Looking for a mart franchise in Muzaffarnagar? The Buyzaar Mart offers a complete supermarket franchise opportunity with proven brand trust, FOCM model, full setup support, and clear profitability. Enquire today!",

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