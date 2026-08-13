import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Where to Buy Daily Needs in Noida | The Buyzaar Mart",
  description:
    "Looking for where to buy daily needs in Noida? Discover the best grocery marts, local markets & online options for fresh, affordable essentials with The Buyzaar Mart.",
  keywords: [
    "where to buy daily needs in Noida",
    "daily needs store Noida",
    "grocery shopping Noida",
    "best grocery mart in Noida",
    "daily essentials Noida",
    "supermarket in Noida",
    "household items Noida",
    "fresh vegetables Noida",
    "The Buyzaar Mart",
    "grocery store near me Noida",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/noida/where-to-buy-daily-needs-in-noida",
  },
  openGraph: {
    title: "Where to Buy Daily Needs in Noida | The Buyzaar Mart",
    description:
      "Looking for where to buy daily needs in Noida? Discover the best grocery marts, local markets & online options for fresh, affordable essentials with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/cities/noida/where-to-buy-daily-needs-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Where to Buy Daily Needs in Noida | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Buy Daily Needs in Noida | The Buyzaar Mart",
    description:
      "Looking for where to buy daily needs in Noida? Discover the best grocery marts, local markets & online options for fresh, affordable essentials with The Buyzaar Mart.",
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