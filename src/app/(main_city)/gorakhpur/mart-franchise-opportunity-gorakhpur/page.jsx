import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Mart Franchise Opportunity in Gorakhpur | The Buyzaar Mart",
  description:
    "Explore a mart franchise opportunity in Gorakhpur with The Buyzaar Mart. Choose a Mini, Super or Hyper Mart from ₹15 Lakh with full support. Apply today!",
  keywords: [
    "mart franchise opportunity gorakhpur",
    "mart franchise opportunity in gorakhpur",
    "mart franchise gorakhpur",
    "mart franchise business gorakhpur",
    "open a mart in gorakhpur",
    "the buyzaar mart gorakhpur",
    "buyzaar mart franchise gorakhpur",
    "mini mart franchise gorakhpur",
    "super mart franchise gorakhpur",
    "hyper mart franchise gorakhpur",
    "grocery mart franchise gorakhpur",
    "supermarket franchise gorakhpur",
    "retail franchise gorakhpur",
    "franchise opportunity gorakhpur",
    "franchise business in gorakhpur",
    "low investment mart franchise gorakhpur",
    "neighbourhood mart franchise gorakhpur",
    "focm mart franchise gorakhpur",
    "fofo mart franchise gorakhpur",
    "fmcg mart franchise gorakhpur",
    "mart franchise uttar pradesh",
    "mart franchise opportunity india",
    "supermarket franchise india",
    "buyzaar mart dealership",
    "daily need store franchise gorakhpur",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/gorakhpur/mart-franchise-opportunity-gorakhpur",
  },
  openGraph: {
    title: "Mart Franchise Opportunity in Gorakhpur | The Buyzaar Mart",
    description:
      "Explore a mart franchise opportunity in Gorakhpur with The Buyzaar Mart. Choose a Mini, Super or Hyper Mart from ₹15 Lakh with full support. Apply today!",
    url: "https://www.thebuyzaarmart.com/gorakhpur/mart-franchise-opportunity-gorakhpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise Opportunity in Gorakhpur | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mart Franchise Opportunity in Gorakhpur | The Buyzaar Mart",
    description:
      "Explore a mart franchise opportunity in Gorakhpur with The Buyzaar Mart. Choose a Mini, Super or Hyper Mart from ₹15 Lakh with full support. Apply today!",
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