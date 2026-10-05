import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "FOCM Franchise Opportunity in Gorakhpur | Buyzaar Mart",
  description:
    "Explore the FOCM franchise opportunity in Gorakhpur from ₹15 Lakh. Own the store, let The Buyzaar Mart manage operations. See who it suits & apply now.",
  keywords: [
    "FOCM franchise opportunity Gorakhpur",
    "FOCM franchise Gorakhpur",
    "FOCM model franchise",
    "Franchise Owned Company Managed opportunity",
    "Buyzaar Mart FOCM franchise",
    "Buyzaar Mart franchise Gorakhpur",
    "company managed franchise opportunity",
    "semi-passive franchise opportunity",
    "franchise for first-time entrepreneurs",
    "franchise for working professionals",
    "franchise for kirana owners",
    "grocery franchise opportunity Gorakhpur",
    "supermarket franchise opportunity Gorakhpur",
    "retail franchise Gorakhpur",
    "franchise from 15 lakh",
    "low investment franchise opportunity",
    "FOCM vs FOCO",
    "5 year franchise agreement",
    "zero royalty franchise",
    "franchise business Gorakhpur",
    "franchise opportunity Uttar Pradesh",
    "mini mart franchise Gorakhpur",
    "franchise investment Gorakhpur",
    "FOCM franchise returns",
    "The Buyzaar Mart",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/focm-franchise-opportunity-gorakhpur",
  },
  openGraph: {
    title: "FOCM Franchise Opportunity in Gorakhpur | Buyzaar Mart",
    description:
      "Explore the FOCM franchise opportunity in Gorakhpur from ₹15 Lakh. Own the store, let The Buyzaar Mart manage operations. See who it suits & apply now.",
    url: "https://www.thebuyzaarmart.com/gorakhpur/focm-franchise-opportunity-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "FOCM Franchise Opportunity in Gorakhpur | Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCM Franchise Opportunity in Gorakhpur | Buyzaar Mart",
    description:
      "Explore the FOCM franchise opportunity in Gorakhpur from ₹15 Lakh. Own the store, let The Buyzaar Mart manage operations. See who it suits & apply now!",
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