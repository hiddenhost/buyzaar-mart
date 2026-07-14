import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mini Mart Franchise in Agra | Buyzaar Mart Investment Guide",
  description:
    "Start a Mini Mart franchise in Agra with Buyzaar Mart. Explore investment, ideal locations, support systems, and the complete application process.",
  keywords: [
    "Mini Mart franchise Agra",
    "Buyzaar Mart Mini Mart",
    "small grocery franchise Agra",
    "mini supermarket franchise Agra",
    "Buyzaar Mart Agra investment",
    "low investment mart franchise",
    "Mini Mart cost Agra",
    "grocery franchise Uttar Pradesh",
    "Buyzaar Mart franchise application",
    "compact retail franchise Agra",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/agra/mini-mart-franchise-agra",
  },
  openGraph: {
    title: "Mini Mart Franchise in Agra | Buyzaar Mart Investment Guide",
    description:
      "Start a Mini Mart franchise in Agra with Buyzaar Mart. Explore investment, ideal locations, support systems, and the complete application process.",
    url: "https://www.thebuyzaarmart.com/agra/mini-mart-franchise-agra",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mini Mart Franchise in Agra | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Mart Franchise in Agra | Buyzaar Mart Investment Guide",
    description:
      "Start a Mini Mart franchise in Agra with Buyzaar Mart. Explore investment, ideal locations, support systems, and the complete application process.",
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