import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Grocery Store in Moradabad | The Buyzaar Mart",
  description:
    "Learn how to start a grocery store in Moradabad with licenses, location tips, and format-wise investment. Compare Mini Mart, Super Mart & Hyper Mart from ₹15 lakh.",
  keywords: [
    "start grocery store Moradabad",
    "how to open grocery store Moradabad",
    "grocery store business Moradabad",
    "The Buyzaar Mart Moradabad",
    "Mini Mart Super Mart Hyper Mart",
    "grocery franchise investment Moradabad",
    "FSSAI GST grocery store license",
    "low investment grocery business Uttar Pradesh",
    "supermarket franchise Moradabad",
    "daily needs store Moradabad",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/moradabad/start-grocery-store-in-moradabad",
  },
  openGraph: {
    title: "How to Start a Grocery Store in Moradabad | The Buyzaar Mart",
    description:
      "Learn how to start a grocery store in Moradabad with licenses, location tips, and format-wise investment. Compare Mini Mart, Super Mart & Hyper Mart from ₹15 lakh.",
    url: "https://www.thebuyzaarmart.com/moradabad/start-grocery-store-in-moradabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Grocery Store in Moradabad | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Grocery Store in Moradabad | The Buyzaar Mart",
    description:
      "Learn how to start a grocery store in Moradabad with licenses, location tips, and format-wise investment. Compare Mini Mart, Super Mart & Hyper Mart from ₹15 lakh.",
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