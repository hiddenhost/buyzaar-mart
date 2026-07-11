import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Needs Franchise Business in Lucknow | The Buyzaar Mart",
  description:
    "Start a daily needs franchise business in Lucknow with The Buyzaar Mart. Stable demand, FOCO and FOCM models, 3 store formats and full supply chain support.",
  keywords: [
    "daily needs franchise Lucknow",
    "grocery franchise Lucknow",
    "FMCG franchise business Lucknow",
    "The Buyzaar Mart daily needs",
    "essentials franchise Lucknow",
    "retail franchise opportunity UP",
    "supermarket franchise Lucknow",
    "daily essentials store franchise India",
    "neighbourhood grocery franchise Lucknow",
    "kirana to organized retail Lucknow",
    "daily needs store business UP",
    "household essentials franchise Lucknow",
    "convenience store franchise Lucknow",
    "daily use products franchise India",
    "packaged food franchise Lucknow",
    "grocery and household franchise",
    "essentials retail business Lucknow",
    "daily needs supermarket UP",
    "community grocery franchise Lucknow",
    "everyday essentials store franchise",
    "franchise for daily consumables",
    "local grocery brand Lucknow",
    "daily needs retail investment India",
    "Buyzaar Mart essentials store",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/daily-needs-franchise-business-in-lucknow",
  },
  openGraph: {
    title: "Daily Needs Franchise Business in Lucknow | The Buyzaar Mart",
    description:
      "Start a daily needs franchise business in Lucknow with The Buyzaar Mart. Stable demand, FOCO and FOCM models, 3 store formats and full supply chain support.",
    url: "https://www.thebuyzaarmart.com/lucknow/daily-needs-franchise-business-in-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Franchise Business in Lucknow | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Needs Franchise Business in Lucknow | The Buyzaar Mart",
    description:
      "Start a daily needs franchise business in Lucknow with The Buyzaar Mart. Stable demand, FOCO and FOCM models, 3 store formats and full supply chain support.",
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