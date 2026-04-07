import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Business in Muzaffarnagar | The Buyzaar Mart",

  description:
    "Want to start a supermarket business in Muzaffarnagar? Join The Buyzaar Mart franchise with Mini Mart from just Rs. 15.25 Lakhs. Full support, proven model. Apply now!",

  keywords:
    "grocery store investment muzaffarnagar, buyzaar mart muzaffarnagar, grocery investment muzaffarnagar, high returns grocery muzaffarnagar, low risk grocery franchise muzaffarnagar, grocery business guide 2026 muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Supermarket Business in Muzaffarnagar | The Buyzaar Mart",

    description:
      "Want to start a supermarket business in Muzaffarnagar? Join The Buyzaar Mart franchise with Mini Mart from just Rs. 15.25 Lakhs. Full support, proven model. Apply now!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Business in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Business in Muzaffarnagar | The Buyzaar Mart",

    description:
      "Want to start a supermarket business in Muzaffarnagar? Join The Buyzaar Mart franchise with Mini Mart from just Rs. 15.25 Lakhs. Full support, proven model. Apply now!",

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