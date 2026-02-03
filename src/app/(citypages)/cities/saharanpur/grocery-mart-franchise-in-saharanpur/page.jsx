import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "The Buyzaar Mart Grocery Franchise in Saharanpur | Start Your Business Today",
  description:
    "Looking for a grocery mart franchise in Saharanpur? The Buyzaar Mart offers profitable franchise opportunities with complete support. Start your grocery business today!",
  keywords:
    "buyzaar mart franchise saharanpur, supermarket franchise saharanpur, grocery franchise saharanpur, retail franchise opportunity saharanpur, franchise business saharanpur, buyzaar mart dealership saharanpur, supermarket franchise investment saharanpur, profitable franchise saharanpur",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-mart-franchise-in-saharanpur",
  },

  // ✅ OPEN GRAPH  
  openGraph: {
    title:
      " The Buyzaar Mart Grocery Franchise in Saharanpur | Start Your Business Today",
    description:
      "Looking for a grocery mart franchise in Saharanpur? The Buyzaar Mart offers profitable franchise opportunities with complete support. Start your grocery business today!",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/grocery-mart-franchise-in-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Opportunity in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title:
      " The Buyzaar Mart Grocery Franchise in Saharanpur | Start Your Business Today",
    description:
      "Looking for a grocery mart franchise in Saharanpur?  The Buyzaar Mart offers profitable franchise opportunities with complete support. Start your grocery business today!",
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
