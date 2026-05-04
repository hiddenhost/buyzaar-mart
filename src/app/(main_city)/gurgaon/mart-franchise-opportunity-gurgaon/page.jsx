import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Opportunity in Gurgaon | The Buyzaar Mart",
  description:
    "Explore the best mart franchise opportunity in Gurgaon with The Buyzaar Mart. FOCM model — you own, we manage. FSSAI licensed. Call 9217991727 to know more!",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gurgaon/mart-franchise-opportunity-in-gurgaon",
  },
  openGraph: {
    title: "Mart Franchise Opportunity in Gurgaon | The Buyzaar Mart",
    description:
      "Explore the best mart franchise opportunity in Gurgaon with The Buyzaar Mart. FOCM model — you own, we manage. FSSAI licensed. Call 9217991727 to know more!",
    url: "https://www.thebuyzaarmart.com/gurgaon/mart-franchise-opportunity-in-gurgaon",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity in Gurgaon | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Opportunity in Gurgaon | The Buyzaar Mart",
    description:
      "Explore the best mart franchise opportunity in Gurgaon with The Buyzaar Mart. FOCM model — you own, we manage. FSSAI licensed. Call 9217991727 to know more!",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },
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