import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Franchise Cost in Noida | The Buyzaar Mart Investment Guide",

  description:
    "Learn about grocery franchise cost in Noida with The Buyzaar Mart. Get a clear overview of investment factors, support included, and why it's a smart choice for local entrepreneurs.",

  keywords:
    "grocery franchise cost noida, buyzaar mart franchise noida, noida grocery investment, supermarket franchise cost noida, retail franchise noida, grocery business cost noida, franchise investment noida, buyzaar mart investment guide, noida franchise opportunity, grocery startup cost noida",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/grocery-franchise-cost-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Franchise Cost in Noida | The Buyzaar Mart Investment Guide",
    description: "Learn about grocery franchise cost in Noida with The Buyzaar Mart. Get a clear overview of investment factors, support included, and why it's a smart choice for local entrepreneurs.",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-franchise-cost-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Cost in Noida - The Buyzaar Mart Investment Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Franchise Cost in Noida | The Buyzaar Mart Investment Guide",
    description: "Learn about grocery franchise cost in Noida with The Buyzaar Mart. Get a clear overview of investment factors, support included, and why it's a smart choice for local entrepreneurs.",
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
