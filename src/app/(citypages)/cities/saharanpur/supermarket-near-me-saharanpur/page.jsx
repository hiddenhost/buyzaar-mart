import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Supermarket Near Me in Saharanpur | Trusted Local Stores",

  description:
    "Locate supermarkets near you in Saharanpur providing organized shopping and quality retail experience.",

  keywords:
    "supermarket near me saharanpur, nearby supermarket saharanpur, supermarket store near me saharanpur, local supermarket saharanpur, nearest supermarket saharanpur, supermarket open near saharanpur, best supermarket near me saharanpur, supermarket location saharanpur, retail supermarket near saharanpur, supermarket area saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/supermarket-near-me-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Supermarket Near Me in Saharanpur | Trusted Local Stores",
    description:
      "Locate supermarkets near you in Saharanpur providing organized shopping and quality retail experience.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/supermarket-near-me-saharanpur",
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
    title: "Supermarket Near Me in Saharanpur | Trusted Local Stores",
    description:
      "Locate supermarkets near you in Saharanpur providing organized shopping and quality retail experience.",
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

