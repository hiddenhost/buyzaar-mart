import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Top Supermarket in Muzaffarnagar | The Buyzaar Mart Fresh Deals Daily",

  description: "Looking for the top supermarket in Muzaffarnagar? The Buyzaar Mart offers fresh groceries, daily essentials, and unbeatable deals. Shop local, save big - visit today!",

  keywords: "top supermarket muzaffarnagar, buyzaar mart muzaffarnagar, fresh groceries muzaffarnagar, daily essentials muzaffarnagar, supermarket deals muzaffarnagar, best grocery store muzaffarnagar",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Top Supermarket in Muzaffarnagar | The Buyzaar Mart Fresh Deals Daily",

    description: "Looking for the top supermarket in Muzaffarnagar? The Buyzaar Mart offers fresh groceries, daily essentials, and unbeatable deals. Shop local, save big - visit today!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Top Supermarket in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Top Supermarket in Muzaffarnagar | The Buyzaar Mart Fresh Deals Daily",

    description: "Looking for the top supermarket in Muzaffarnagar? The Buyzaar Mart offers fresh groceries, daily essentials, and unbeatable deals. Shop local, save big - visit today!",

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