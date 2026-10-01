import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open Supermarket Franchise in Gorakhpur | Buyzaar Mart",
  description:
    "Learn how to open a supermarket franchise in Gorakhpur with The Buyzaar Mart. Formats, space needs, cost from ₹15 Lakh, setup steps and full support.",
  keywords: [
    "how to open supermarket franchise in gorakhpur",
    "supermarket franchise in gorakhpur",
    "open supermarket in gorakhpur",
    "the buyzaar mart",
    "buyzaar mart supermarket franchise",
    "supermarket franchise cost india",
    "supermarket franchise under 20 lakh",
    "low investment supermarket franchise",
    "affordable supermarket franchise india",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise",
    "supermarket franchise in uttar pradesh",
    "supermarket franchise with full support",
    "FOCM franchise india",
    "franchise business in gorakhpur",
    "supermarket store size requirements",
    "neighborhood supermarket franchise india",
    "FMCG store franchise india",
    "retail franchise in eastern UP",
    "supermarket franchise setup guide",
    "one stop grocery store franchise",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/how-to-open-supermarket-franchise-in-gorakhpur",
  },
  openGraph: {
    title: "How to Open Supermarket Franchise in Gorakhpur | Buyzaar Mart",
    description:
      "Learn how to open a supermarket franchise in Gorakhpur with The Buyzaar Mart. Formats, space needs, cost from ₹15 Lakh, setup steps and full support.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/how-to-open-supermarket-franchise-in-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open Supermarket Franchise in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open Supermarket Franchise in Gorakhpur | Buyzaar Mart",
    description:
      "Learn how to open a supermarket franchise in Gorakhpur with The Buyzaar Mart. Formats, space needs, cost from ₹15 Lakh, setup steps and full support.",
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