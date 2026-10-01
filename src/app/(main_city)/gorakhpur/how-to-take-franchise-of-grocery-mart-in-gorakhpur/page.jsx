import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Take Grocery Mart Franchise in Gorakhpur | The Buyzaar Mart",
  description:
    "Learn how to take a grocery mart franchise in Gorakhpur with The Buyzaar Mart. Investment from ₹15 lakh, FOCM and FOCO models, full support. Apply now.",
  keywords: [
    "how to take franchise of grocery mart in gorakhpur",
    "grocery mart franchise gorakhpur",
    "grocery franchise in gorakhpur",
    "supermarket franchise gorakhpur",
    "the buyzaar mart franchise",
    "buyzaar mart gorakhpur",
    "grocery store franchise gorakhpur",
    "grocery franchise 15 lakh",
    "low investment grocery franchise",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "FOCM franchise",
    "FOCO franchise",
    "retail franchise gorakhpur",
    "FMCG store franchise",
    "grocery franchise uttar pradesh",
    "supermarket franchise cost india",
    "neighbourhood grocery franchise",
    "franchise business gorakhpur",
    "grocery franchise with full support",
    "best grocery franchise in india",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/how-to-take-franchise-of-grocery-mart-in-gorakhpur",
  },
  openGraph: {
    title: "How to Take Grocery Mart Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Learn how to take a grocery mart franchise in Gorakhpur with The Buyzaar Mart. Investment from ₹15 lakh, FOCM and FOCO models, full support. Apply now.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/how-to-take-franchise-of-grocery-mart-in-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Take Grocery Mart Franchise in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Take Grocery Mart Franchise in Gorakhpur | The Buyzaar Mart",
    description:
      "Learn how to take a grocery mart franchise in Gorakhpur with The Buyzaar Mart. Investment from ₹15 lakh, FOCM and FOCO models, full support. Apply now.",
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