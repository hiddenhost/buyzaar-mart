import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Starting from Rs 15 Lakh in Aligarh | The Buyzaar Mart",
  description:
    "Explore a grocery franchise starting from Rs 15 lakh in Aligarh. Learn what's included, store format, licenses, returns & how to get started with The Buyzaar Mart.",
  keywords: [
    "grocery franchise starting from 15 lakh Aligarh",
    "low investment grocery franchise India",
    "mini mart franchise cost",
    "affordable grocery franchise Aligarh",
    "budget franchise business India",
    "small investment retail franchise",
    "best grocery franchise under 20 lakh",
    "The Buyzaar Mart franchise",
    "franchise business Uttar Pradesh",
    "grocery mart franchise cost",
    "low cost supermarket franchise India",
    "franchise for first time entrepreneurs",
    "mini grocery store franchise India",
    "affordable retail franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/grocery-franchise-starting-from-15-lakh-aligarh",
  },
  openGraph: {
    title:
      "Grocery Franchise Starting from Rs 15 Lakh in Aligarh | The Buyzaar Mart",
    description:
      "Explore a grocery franchise starting from Rs 15 lakh in Aligarh. Learn what's included, store format, licenses, returns & how to get started with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/aligarh/grocery-franchise-starting-from-15-lakh-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Starting from Rs 15 Lakh in Aligarh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Franchise Starting from Rs 15 Lakh in Aligarh | The Buyzaar Mart",
    description:
      "Explore a grocery franchise starting from Rs 15 lakh in Aligarh. Learn what's included, store format, licenses, returns & how to get started with The Buyzaar Mart.",
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