import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Needs Store Franchise in Faridabad | Buyzaar Mart",
  description:
    "Start a daily needs store franchise in Faridabad with Buyzaar Mart. Low investment, brand support, and steady daily demand. Apply today!",
  keywords: [
    "daily needs store franchise Faridabad",
    "Buyzaar Mart franchise Faridabad",
    "grocery franchise Faridabad",
    "low investment franchise Faridabad",
    "small supermarket franchise Faridabad",
    "Mini Mart franchise",
    "retail franchise Faridabad",
    "affordable franchise Faridabad",
    "Buyzaar Mart daily needs store",
    "franchise business Faridabad",
  ],
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/delhi/daily-needs-store-franchise-in-faridabad",
  },
  openGraph: {
    title: "Daily Needs Store Franchise in Faridabad | Buyzaar Mart",
    description:
      "Start a daily needs store franchise in Faridabad with Buyzaar Mart. Low investment, brand support, and steady daily demand. Apply today!",
    url: "https://www.thebuyzaarmart.com/delhi/daily-needs-store-franchise-in-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Store Franchise in Faridabad | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Needs Store Franchise in Faridabad | Buyzaar Mart",
    description:
      "Start a daily needs store franchise in Faridabad with Buyzaar Mart. Low investment, brand support, and steady daily demand. Apply today!",
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