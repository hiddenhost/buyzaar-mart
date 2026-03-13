import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise Cost in Saharanpur | Setup Guide",

  description:
    "Learn about supermarket franchise cost in Saharanpur with guidance on investment, store size, and operational structure.",

  keywords:
    "supermarket franchise cost saharanpur, supermarket franchise investment saharanpur, supermarket franchise price saharanpur, supermarket franchise setup cost saharanpur, supermarket store franchise cost saharanpur, supermarket franchise fees saharanpur, supermarket franchise budget saharanpur, supermarket chain franchise cost saharanpur, supermarket franchise expenses saharanpur, supermarket franchise near saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/supermarket-franchise-cost-in-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Supermarket Franchise Cost in Saharanpur | Setup Guide",
    description:
      "Learn about supermarket franchise cost in Saharanpur with guidance on investment, store size, and operational structure.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/supermarket-franchise-cost-in-saharanpur",
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
    title: "Supermarket Franchise Cost in Saharanpur | Setup Guide",
    description:
      "Learn about supermarket franchise cost in Saharanpur with guidance on investment, store size, and operational structure.",
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
