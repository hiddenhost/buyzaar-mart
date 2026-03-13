import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Top Supermarket in Saharanpur | Leading Retail Store",


  description:
    "Explore top supermarkets in Saharanpur with strong retail presence and footfall.",
 

  keywords:
    "top supermarket in saharanpur, best supermarket saharanpur, popular supermarket saharanpur, leading supermarket saharanpur, supermarket near me saharanpur, trusted supermarket saharanpur, supermarket ratings saharanpur, supermarket reviews saharanpur, premium supermarket saharanpur, supermarket retail store saharanpur.",			

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/saharanpur/top-supermarket-franchise-in-saharanpur/leading-retail-store",
  },

  // ✅ OPEN GRAPH  
  openGraph: {
    title:
      " Explore Top Supermarket in Saharanpur | Leading Retail Store",
    description:
      " Explore top supermarkets in Saharanpur with strong retail presence and footfall.",
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
      "Top Supermarkets in Saharanpur | Best Grocery Stores Near You | The Buyzaar Mart",
    description:
      " Discover the top supermarkets in Saharanpur for fresh groceries, daily essentials, and unbeatable variety. The Buyzaar Mart leads with quality products, local favorites, and convenient shopping. Find the best stores today!",
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
