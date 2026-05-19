import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Business Opportunity Kanpur | The Buyzaar Mart Franchise",
  description:
    "Explore the best grocery business opportunity in Kanpur with The Buyzaar Mart. Start your own Mini Mart, Super Mart, or Hyper Mart franchise from ₹15 Lakh with full setup, supply chain & ongoing support. Apply now",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/grocery-store-franchise-in-kanpur",
  },
  openGraph: {
    title: "Grocery Business Opportunity Kanpur | The Buyzaar Mart Franchise",
    description:
      "Explore the best grocery business opportunity in Kanpur with The Buyzaar Mart. Start your own Mini Mart, Super Mart, or Hyper Mart franchise from ₹15 Lakh with full setup, supply chain & ongoing support. Apply now",
    url: "https://www.thebuyzaarmart.com/kanpur/grocery-store-franchise-in-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Business Opportunity Kanpur | The Buyzaar Mart Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Business Opportunity Kanpur | The Buyzaar Mart Franchise",
    description:
      "Explore the best grocery business opportunity in Kanpur with The Buyzaar Mart. Start your own Mini Mart, Super Mart, or Hyper Mart franchise from ₹15 Lakh with full setup, supply chain & ongoing support. Apply now",
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