import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Hypermart Franchise in Saharanpur | Large Retail Opportunity",
    description:
        "Enter large-scale retail with a hypermart franchise in Saharanpur designed for high volume and wide product range.",
  keywords:
    "hypermart franchise saharanpur, hypermarket franchise saharanpur, large retail franchise saharanpur, hypermart store franchise saharanpur, hypermart dealership saharanpur, hypermarket business saharanpur, hypermart franchise opportunity saharanpur, hypermart retail saharanpur, hypermart chain franchise saharanpur, hypermart investment saharanpur",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/hypermart-franchise-in-saharanpur",
  },

  // ✅ OPEN GRAPH  
  openGraph: {
    title:
      "Hypermart Franchise in Saharanpur | Large Retail Opportunity",
    description:
      "Enter large-scale retail with a hypermart franchise in Saharanpur designed for high volume and wide product range.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/hypermart-franchise-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Hypermart Franchise in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title:
      " Hypermart Franchise in Saharanpur | Large Retail Opportunity",
    description:
      "Enter large-scale retail with a hypermart franchise in Saharanpur designed for high volume and wide product range.",
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
