import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FMCG Business in Moradabad, Uttar Pradesh | The Buyzaar Mart",
  description:
    "Explore the FMCG business opportunity in Moradabad, UP with The Buyzaar Mart. Compare Mini Mart, Super Mart & Hyper Mart investment and area, starting from ₹15 lakh.",
  keywords: [
    "FMCG business Moradabad",
    "FMCG business Uttar Pradesh",
    "FMCG retail franchise Moradabad",
    "grocery franchise Moradabad",
    "The Buyzaar Mart Moradabad",
    "Mini Mart Super Mart Hyper Mart",
    "FMCG distribution Moradabad",
    "low investment FMCG business",
    "FMCG franchise investment UP",
    "daily needs store franchise Moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/fmcg-business-in-moradabad-uttar-pradesh",
  },
  openGraph: {
    title: "FMCG Business in Moradabad, Uttar Pradesh | The Buyzaar Mart",
    description:
      "Explore the FMCG business opportunity in Moradabad, UP with The Buyzaar Mart. Compare Mini Mart, Super Mart & Hyper Mart investment and area, starting from ₹15 lakh.",
    url: "https://www.thebuyzaarmart.com/moradabad/fmcg-business-in-moradabad-uttar-pradesh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FMCG Business in Moradabad, Uttar Pradesh | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMCG Business in Moradabad, Uttar Pradesh | The Buyzaar Mart",
    description:
      "Explore the FMCG business opportunity in Moradabad, UP with The Buyzaar Mart. Compare Mini Mart, Super Mart & Hyper Mart investment and area, starting from ₹15 lakh.",
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