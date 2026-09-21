import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Above Rs 15 Lakh in Aligarh | Super & Hyper Mart",
  description:
    "Explore mart franchise options above Rs 15 lakh in Aligarh. Compare Super Mart & Hyper Mart formats, investment, licenses, and returns with The Buyzaar Mart.",
  keywords: [
    "mart franchise above 15 lakh Aligarh",
    "super mart franchise cost",
    "hyper mart franchise India",
    "high investment retail franchise",
    "large format supermarket franchise",
    "FMCG franchise above 20 lakh",
    "best supermarket franchise India",
    "The Buyzaar Mart franchise",
    "franchise business Uttar Pradesh",
    "grocery mart franchise cost",
    "big investment franchise opportunity India",
    "large grocery store franchise",
    "franchise for experienced investors",
    "high revenue retail franchise India",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/aligarh/mart-franchise-above-15-lakh-aligarh",
  },
  openGraph: {
    title: "Mart Franchise Above Rs 15 Lakh in Aligarh | Super & Hyper Mart",
    description:
      "Explore mart franchise options above Rs 15 lakh in Aligarh. Compare Super Mart & Hyper Mart formats, investment, licenses, and returns with The Buyzaar Mart.",
    url: "https://www.thebuyzaarmart.com/aligarh/mart-franchise-above-15-lakh-aligarh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Above Rs 15 Lakh in Aligarh | Super & Hyper Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Above Rs 15 Lakh in Aligarh | Super & Hyper Mart",
    description:
      "Explore mart franchise options above Rs 15 lakh in Aligarh. Compare Super Mart & Hyper Mart formats, investment, licenses, and returns with The Buyzaar Mart.",
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