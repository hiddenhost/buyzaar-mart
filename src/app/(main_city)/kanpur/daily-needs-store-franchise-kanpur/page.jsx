import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Needs Store Franchise kanpur | The Buyzaar Mart — Start from ₹15 Lakh",
  description:
    "Open a daily needs store franchise in Kanpur with The Buyzaar Mart. FOCM model, ₹15 Lakh investment, minimart breakdown, full setup & marketing support included. Apply today!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/daily-needs-store-franchise-in-kanpur",
  },
  openGraph: {
    title: "Daily Needs Store Franchise kanpur | The Buyzaar Mart — Start from ₹15 Lakh",
    description:
      "Open a daily needs store franchise in Kanpur with The Buyzaar Mart. FOCM model, ₹15 Lakh investment, minimart breakdown, full setup & marketing support included. Apply today!",
    url: "https://www.thebuyzaarmart.com/kanpur/daily-needs-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Store Franchise Kanpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Needs Store Franchise kanpur | The Buyzaar Mart — Start from ₹15 Lakh",
    description:
      "Open a daily needs store franchise in Kanpur with The Buyzaar Mart. FOCM model, ₹15 Lakh investment, minimart breakdown, full setup & marketing support included. Apply today!",
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