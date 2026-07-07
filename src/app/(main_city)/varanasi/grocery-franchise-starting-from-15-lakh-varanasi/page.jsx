import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Starting From ₹15 Lakh in Varanasi | The Buyzaar Mart",
  description:
    "Start a grocery franchise in Varanasi from just ₹15 lakh with The Buyzaar Mart. Explore investment details, store formats, franchise models, and how to apply.",
  keywords: [
    "grocery franchise 15 lakh Varanasi",
    "low investment grocery franchise",
    "Buyzaar Mart Varanasi",
    "affordable grocery franchise India",
    "Mini Mart franchise Varanasi",
    "small investment supermarket franchise",
    "FOCM FOCO franchise",
    "retail franchise Uttar Pradesh",
    "budget grocery business Varanasi",
    "grocery store franchise starting investment",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/varanasi/grocery-franchise-starting-from-15-lakh-varanasi",
  },
  openGraph: {
    title: "Grocery Franchise Starting From ₹15 Lakh in Varanasi | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Varanasi from just ₹15 lakh with The Buyzaar Mart. Explore investment details, store formats, franchise models, and how to apply.",
    url: "https://www.thebuyzaarmart.com/varanasi/grocery-franchise-starting-from-15-lakh-varanasi",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Starting From ₹15 Lakh in Varanasi | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Starting From ₹15 Lakh in Varanasi | The Buyzaar Mart",
    description:
      "Start a grocery franchise in Varanasi from just ₹15 lakh with The Buyzaar Mart. Explore investment details, store formats, franchise models, and how to apply.",
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