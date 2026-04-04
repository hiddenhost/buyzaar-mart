import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Franchise Muzaffarnagar | The Buyzaar Mart",

  description:
    "Start your own grocery store franchise in Muzaffarnagar with The Buyzaar Mart. Low investment, FOCM model, full support. Apply today and own a profitable supermarket!",

  keywords:
    "grocery store investment muzaffarnagar, buyzaar mart muzaffarnagar, grocery investment muzaffarnagar, high returns grocery muzaffarnagar, low risk grocery franchise muzaffarnagar, grocery business guide 2026 muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Store Franchise Muzaffarnagar | The Buyzaar Mart",

    description:
      "Start your own grocery store franchise in Muzaffarnagar with The Buyzaar Mart. Low investment, FOCM model, full support. Apply today and own a profitable supermarket!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Franchise Muzaffarnagar | The Buyzaar Mart",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Franchise Muzaffarnagar | The Buyzaar Mart",

    description:
      "Start your own grocery store franchise in Muzaffarnagar with The Buyzaar Mart. Low investment, FOCM model, full support. Apply today and own a profitable supermarket!",

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