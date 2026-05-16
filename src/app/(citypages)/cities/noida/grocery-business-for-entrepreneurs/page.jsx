import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Business for Entrepreneurs in Noida | Join The Buyzaar Mart",

  description:
    "Discover grocery business for entrepreneurs in Noida with The Buyzaar Mart. A practical retail model focused on daily essentials with guided setup and local demand support.",

  keywords:
    "grocery business noida, entrepreneurs noida, buyzaar mart noida, supermarket business noida, retail business noida, grocery store noida, business opportunity noida, neighborhood grocery noida, noida retail opportunity, essential grocery business",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/grocery-business-plan-in-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Business for Entrepreneurs in Noida | Join The Buyzaar Mart",
    description: "Discover grocery business for entrepreneurs in Noida with The Buyzaar Mart. A practical retail model focused on daily essentials with guided setup and local demand support.",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-business-plan-in-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Business for Entrepreneurs in Noida - The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Business for Entrepreneurs in Noida | Join The Buyzaar Mart",
    description: "Discover grocery business for entrepreneurs in Noida with The Buyzaar Mart. A practical retail model focused on daily essentials with guided setup and local demand support.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
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
