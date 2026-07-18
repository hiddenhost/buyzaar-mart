import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Starting at 15 Lakh in Varanasi | Buyzaar Mart",
  description:
    "Start your own supermarket franchise in Varanasi at an investment of just ₹15 lakh with Buyzaar Mart. Explore store formats, benefits, and ROI details.",
  keywords: [
    "supermarket franchise starting at 15 lakh Varanasi",
    "low investment supermarket franchise",
    "Buyzaar Mart franchise",
    "mini mart franchise Varanasi",
    "affordable retail franchise Varanasi",
    "grocery franchise 15 lakh",
    "supermarket business Varanasi",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/supermarket-franchise-starting-at-15-lakh-varanasi",
  },
  openGraph: {
    title: "Supermarket Franchise Starting at 15 Lakh in Varanasi | Buyzaar Mart",
    description:
      "Start your own supermarket franchise in Varanasi at an investment of just ₹15 lakh with Buyzaar Mart. Explore store formats, benefits, and ROI details.",
    url: "https://www.thebuyzaarmart.com/varanasi/supermarket-franchise-starting-at-15-lakh-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Supermarket Franchise Starting at 15 Lakh in Varanasi | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise Starting at 15 Lakh in Varanasi | Buyzaar Mart",
    description:
      "Start your own supermarket franchise in Varanasi at an investment of just ₹15 lakh with Buyzaar Mart. Explore store formats, benefits, and ROI details.",
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