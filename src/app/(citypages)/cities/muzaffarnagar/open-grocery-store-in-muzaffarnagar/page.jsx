import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Open Grocery Store in Muzaffarnagar | The Buyzaar Mart",

  description:
    "Visit The Buyzaar Mart — Muzaffarnagar's most trusted open grocery store. Wide range of FMCG, fresh essentials & daily needs at fair prices. Find your nearest store today!",

  keywords:
    "grocery store investment muzaffarnagar, buyzaar mart muzaffarnagar, grocery investment muzaffarnagar, high returns grocery muzaffarnagar, low risk grocery franchise muzaffarnagar, grocery business guide 2026 muzaffarnagar",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/muzaffarnagar/top-grocery-store-in-muzaffarnagar",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Open Grocery Store in Muzaffarnagar | The Buyzaar Mart",

    description:
      "Visit The Buyzaar Mart — Muzaffarnagar's most trusted open grocery store. Wide range of FMCG, fresh essentials & daily needs at fair prices. Find your nearest store today!",

    url: "https://www.thebuyzaarmart.com/cities/muzaffarnagar/top-grocery-store-in-muzaffarnagar",

    siteName: "The Buyzaar Mart",

    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Open Grocery Store in Muzaffarnagar",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Open Grocery Store in Muzaffarnagar | The Buyzaar Mart",

    description:
      "Visit The Buyzaar Mart — Muzaffarnagar's most trusted open grocery store. Wide range of FMCG, fresh essentials & daily needs at fair prices. Find your nearest store today!",

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