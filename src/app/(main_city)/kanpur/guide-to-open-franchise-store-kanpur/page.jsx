import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Guide to Open The Buyzaar Mart Franchise Store in Kanpur",
  description:
    "Explore the complete guide to opening a highly profitable grocery supermarket franchise in Kanpur with The Buyzaar Mart. Learn about the hands-free FOCM model, investment, and Mini Mart, Supermart, or Franchise Mart formats.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/how-to-open-retail-store-franchise-kanpur",
  },
  openGraph: {
    title: "Guide to Open The Buyzaar Mart Franchise Store in Kanpur",
    description:
      "Explore the complete guide to opening a highly profitable grocery supermarket franchise in Kanpur with The Buyzaar Mart. Learn about the hands-free FOCM model, investment, and Mini Mart, Supermart, or Franchise Mart formats.",
    url: "https://www.thebuyzaarmart.com/kanpur/how-to-open-retail-store-franchise-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Guide to Open The Buyzaar Mart Franchise Store in Kanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide to Open The Buyzaar Mart Franchise Store in Kanpur",
    description:
      "Explore the complete guide to opening a highly profitable grocery supermarket franchise in Kanpur with The Buyzaar Mart. Learn about the hands-free FOCM model, investment, and Mini Mart, Supermart, or Franchise Mart formats.",
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