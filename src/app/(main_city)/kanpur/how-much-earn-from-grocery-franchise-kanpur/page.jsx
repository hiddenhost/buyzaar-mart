import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "How Much Can You Earn from a Grocery Franchise in Kanpur? | The Buyzaar Mart",
  description:
    "Discover how much you can earn from a grocery franchise in Kanpur with The Buyzaar Mart. Explore the FOCM model, investment details, profit margins, and ROI. Start from ₹15 Lakh today.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/how-much-earn-from-grocery-franchise-kanpur",
  },
  openGraph: {
    title:
      "How Much Can You Earn from a Grocery Franchise in Kanpur? | The Buyzaar Mart",
    description:
      "Discover how much you can earn from a grocery franchise in Kanpur with The Buyzaar Mart. Explore the FOCM model, investment details, profit margins, and ROI. Start from ₹15 Lakh today.",
    url: "https://www.thebuyzaarmart.com/kanpur/how-much-earn-from-grocery-franchise-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How Much Can You Earn from a Grocery Franchise in Kanpur? | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How Much Can You Earn from a Grocery Franchise in Kanpur? | The Buyzaar Mart",
    description:
      "Discover how much you can earn from a grocery franchise in Kanpur with The Buyzaar Mart. Explore the FOCM model, investment details, profit margins, and ROI. Start from ₹15 Lakh today.",
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