import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Setup in Saharanpur | Complete Setup Guide",

  description:
    "Get complete guidance for grocery store setup in Saharanpur from planning to execution.",

  keywords:
    "grocery store setup saharanpur, grocery shop setup saharanpur, grocery store opening saharanpur, grocery store setup cost saharanpur, grocery store planning saharanpur, grocery store interior saharanpur, grocery store registration saharanpur, grocery store license saharanpur, grocery store startup saharanpur, grocery store setup near saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-store-setup-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Store Setup in Saharanpur | Complete Setup Guide",
    description:
      "Get complete guidance for grocery store setup in Saharanpur from planning to execution.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-store-setup-saharanpur",

    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Grocery Store Setup in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Setup in Saharanpur | Complete Setup Guide",
    description:
      "Get complete guidance for grocery store setup in Saharanpur from planning to execution.",
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
