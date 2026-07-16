import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Needs Mart Franchise in Gurugram | Buyzaar Mart",
  description:
    "Own a daily needs mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, full setup support & fast returns. Apply now!",
  keywords: [
    "daily needs mart franchise Gurugram",
    "Buyzaar Mart franchise",
    "low investment supermarket franchise",
    "daily needs store Gurugram",
    "essential grocery franchise India",
    "daily needs supermarket",
    "low investment supermarket franchise in Lucknow",
    "franchise business opportunity Gurugram",
    "everyday essentials store franchise",
    "retail franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/daily-needs-mart-franchise-gurugram",
  },
  openGraph: {
    title: "Daily Needs Mart Franchise in Gurugram | Buyzaar Mart",
    description:
      "Own a daily needs mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, full setup support & fast returns. Apply now!",
    url: "https://www.thebuyzaarmart.com/gurgaon/daily-needs-mart-franchise-gurugram",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Mart Franchise in Gurugram | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Needs Mart Franchise in Gurugram | Buyzaar Mart",
    description:
      "Own a daily needs mart franchise in Gurugram with Buyzaar Mart. Low investment supermarket franchise model, full setup support & fast returns. Apply now!",
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