import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Daily Needs Store Franchise Lucknow | The Buyzaar Mart – Start from ₹15 Lakh",
  description:
    "Looking for a daily needs store franchise in Lucknow? Partner with The Buyzaar Mart and launch your own Mini Mart or Super Mart under FOCM or FOCO model. Full brand support, POS system & training included. Apply today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/lucknow/daily-needs-store-franchise-lucknow",
  },
  openGraph: {
    title:
      "Daily Needs Store Franchise Lucknow | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Looking for a daily needs store franchise in Lucknow? Partner with The Buyzaar Mart and launch your own Mini Mart or Super Mart under FOCM or FOCO model. Full brand support, POS system & training included. Apply today!",
    url:
      "https://www.thebuyzaarmart.com/lucknow/daily-needs-store-franchise-lucknow",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Store Franchise Lucknow | The Buyzaar Mart – Start from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Daily Needs Store Franchise Lucknow | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Looking for a daily needs store franchise in Lucknow? Partner with The Buyzaar Mart and launch your own Mini Mart or Super Mart under FOCM or FOCO model. Full brand support, POS system & training included. Apply today!",
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