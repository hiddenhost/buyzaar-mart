import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Investment in Muzaffarnagar | The Buyzaar Mart Guide 2026",

  description: "Discover grocery store investment in Muzaffarnagar high returns, low risks. The Buyzaar Mart shares proven strategies, costs, and growth tips for success. Invest wisely!",

  keywords: "grocery store investment muzaffarnagar, buyzaar mart muzaffarnagar, grocery investment muzaffarnagar, high returns grocery muzaffarnagar, low risk grocery franchise muzaffarnagar, grocery business guide 2026 muzaffarnagar",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Store Investment in Muzaffarnagar | The Buyzaar Mart Guide 2026",

    description: "Discover grocery store investment in Muzaffarnagar high returns, low risks. The Buyzaar Mart shares proven strategies, costs, and growth tips for success. Invest wisely!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/grocery-mart-franchise-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Investment in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Investment in Muzaffarnagar | The Buyzaar Mart Guide 2026",

    description: "Discover grocery store investment in Muzaffarnagar high returns, low risks. The Buyzaar Mart shares proven strategies, costs, and growth tips for success. Invest wisely!",

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