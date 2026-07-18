import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Daily Needs Store Franchise Faridabad | Buyzaar Mart",
  description:
    "Start a daily needs store franchise in Faridabad with The Buyzaar Mart. Mini Mart, Super Mart & Hyper Mart formats. FOCM & FOCO models from ₹15 Lakh. Apply now!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/faridabad/daily-needs-store-franchise-faridabad",
  },
  openGraph: {
    title: "Daily Needs Store Franchise Faridabad | Buyzaar Mart",
    description:
      "Start a daily needs store franchise in Faridabad with The Buyzaar Mart. Mini Mart, Super Mart & Hyper Mart formats. FOCM & FOCO models from ₹15 Lakh. Apply now!",
    url: "https://www.thebuyzaarmart.com/faridabad/daily-needs-store-franchise-faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Needs Store Franchise Faridabad | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Needs Store Franchise Faridabad | Buyzaar Mart",
    description:
      "Start a daily needs store franchise in Faridabad with The Buyzaar Mart. Mini Mart, Super Mart & Hyper Mart formats. FOCM & FOCO models from ₹15 Lakh. Apply now!",
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