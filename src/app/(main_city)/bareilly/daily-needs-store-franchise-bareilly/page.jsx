import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Daily Needs Store Franchise in Bareilly – The Buyzaar Mart | Start from ₹15 Lakh",
  description:
    "Want to open a daily needs store franchise in Bareilly? The Buyzaar Mart offers a proven FOCM model starting ₹15 Lakh with full setup, POS, 50+ FMCG brands & complete support. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/bareilly/daily-needs-store-franchise-in-bareilly",
  },
  openGraph: {
    title:
      "Daily Needs Store Franchise in Bareilly – The Buyzaar Mart | Start from ₹15 Lakh",
    description:
      "Want to open a daily needs store franchise in Bareilly? The Buyzaar Mart offers a proven FOCM model starting ₹15 Lakh with full setup, POS, 50+ FMCG brands & complete support. Apply now!",
    url: "https://www.thebuyzaarmart.com/bareilly/daily-needs-store-franchise-in-bareilly",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Store Franchise in Bareilly – The Buyzaar Mart | Start from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Daily Needs Store Franchise in Bareilly – The Buyzaar Mart | Start from ₹15 Lakh",
    description:
      "Want to open a daily needs store franchise in Bareilly? The Buyzaar Mart offers a proven FOCM model starting ₹15 Lakh with full setup, POS, 50+ FMCG brands & complete support. Apply now!",
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