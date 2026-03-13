import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";
export const metadata = {
  title: "Retail Business Investment in Saharanpur | Smart Business Idea",

  description:
    "Explore retail business investment opportunities in Saharanpur across organized and local retail formats.",

  keywords:
    "retail business investment saharanpur, retail store investment saharanpur, retail shop investment saharanpur, retail business cost saharanpur, retail franchise investment saharanpur, retail startup investment saharanpur, retail business opportunity saharanpur, retail capital saharanpur, retail business funding saharanpur, retail business near saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/retail-business-investment-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Retail Business Investment in Saharanpur | Smart Business Idea",
    description:
      "Explore retail business investment opportunities in Saharanpur across organized and local retail formats.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/retail-business-investment-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Retail Franchise Opportunity in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Retail Business Investment in Saharanpur | Smart Business Idea",
    description:
      "Explore retail business investment opportunities in Saharanpur across organized and local retail formats.",
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

