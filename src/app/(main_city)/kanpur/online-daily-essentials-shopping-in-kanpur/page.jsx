import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Online Daily Essentials Shopping in Kanpur | The Buyzaar Mart",
  description:
    "Shop daily essentials online in Kanpur with The Buyzaar Mart – fresh groceries, FMCG brands, fair prices & doorstep convenience.",
  keywords: [
    "online daily essentials shopping Kanpur",
    "daily needs store Kanpur",
    "grocery shopping Kanpur",
    "neighbourhood mart Kanpur",
    "online grocery delivery Kanpur",
    "daily essentials store near me",
    "The Buyzaar Mart Kanpur",
    "best grocery store Kanpur",
    "FMCG store Kanpur",
    "supermarket franchise Kanpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/online-daily-essentials-shopping-in-kanpur",
  },
  openGraph: {
    title: "Online Daily Essentials Shopping in Kanpur | The Buyzaar Mart",
    description:
      "Shop daily essentials online in Kanpur with The Buyzaar Mart – fresh groceries, FMCG brands, fair prices & doorstep convenience.",
    url: "https://www.thebuyzaarmart.com/kanpur/online-daily-essentials-shopping-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Online Daily Essentials Shopping in Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Daily Essentials Shopping in Kanpur | The Buyzaar Mart",
    description:
      "Shop daily essentials online in Kanpur with The Buyzaar Mart – fresh groceries, FMCG brands, fair prices & doorstep convenience.",
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