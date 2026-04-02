import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Grocery Store Investment Gangoh | The Buyzaar Mart – Supermart & Minimart FOCM Model",
  description:
    "Invest in The Buyzaar Mart – Gangoh's most trusted grocery store investment brand. Explore our Supermart & Minimart FOCM model, detailed investment breakdown, ROI potential, and franchise benefits. Start your retail journey today!",
  keywords: [
    "grocery store investment gangoh",
    "buyzaar mart gangoh",
    "supermart investment gangoh",
    "minimart investment gangoh",
    "focm model gangoh",
    "grocery franchise gangoh",
    "retail investment gangoh",
    "supermarket franchise uttar pradesh",
    "buyzaar mart supermart",
    "buyzaar mart minimart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/gangoh/grocery-store-investment-gangoh",
  },

  openGraph: {
    title:
      "Grocery Store Investment Gangoh | The Buyzaar Mart – Supermart & Minimart FOCM Model",
    description:
      "Invest in The Buyzaar Mart – Gangoh's most trusted grocery store investment brand. Explore our Supermart & Minimart FOCM model, detailed investment breakdown, ROI potential, and franchise benefits. Start your retail journey today!",
    url: "https://www.thebuyzaarmart.com/cities/gangoh/grocery-store-investment-gangoh",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Investment Gangoh | The Buyzaar Mart – Supermart & Minimart FOCM Model",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Store Investment Gangoh | The Buyzaar Mart – Supermart & Minimart FOCM Model",
    description:
      "Invest in The Buyzaar Mart – Gangoh's most trusted grocery store investment brand. Explore our Supermart & Minimart FOCM model, detailed investment breakdown, ROI potential, and franchise benefits. Start your retail journey today!",
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