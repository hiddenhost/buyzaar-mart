import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Franchise in Saharanpur | Apply for Dealership",

  description:
    "Apply for a supermarket franchise in Saharanpur and enter the organized retail market with full business guidance.",

  keywords:
    "supermarket franchise saharanpur, supermarket franchise opportunity saharanpur, supermarket dealership saharanpur, supermarket store franchise saharanpur, best supermarket franchise saharanpur, supermarket franchise near saharanpur, retail supermarket franchise saharanpur, supermarket chain franchise saharanpur, supermarket business franchise saharanpur, supermarket franchise investment saharanpur	",		


  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/supermarket-franchise-in-saharanpur/Apply-for-dealership",
  },

  // ✅ OPEN GRAPH  
  openGraph: {
    title:
      " Supermarket Franchise in Saharanpur | Apply for Dealership",
    description:
      "Apply for a supermarket franchise in Saharanpur and enter the organized retail market with full business guidance.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/the-buyzaar-mart-supermarket-franchise-in-saharanpur-start-your-business-today",
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
      " Supermarket Franchise in Saharanpur | Apply for Dealership",
    description:
      "Apply for a supermarket franchise in Saharanpur and enter the organized retail market with full business guidance.",
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
