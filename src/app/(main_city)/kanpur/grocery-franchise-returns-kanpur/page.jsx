import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Grocery Franchise Returns in Kanpur | The Buyzaar Mart Mini Mart & Hyper Mart",
  description:
    "Explore real grocery franchise returns in Kanpur with The Buyzaar Mart. Investment breakdown for Mini Mart and Hyper Mart, FOCM and FOCO models explained. Start from ₹15 Lakh.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/grocery-franchise-returns-kanpur",
  },
  openGraph: {
    title:
      "Grocery Franchise Returns in Kanpur | The Buyzaar Mart Mini Mart & Hyper Mart",
    description:
      "Explore real grocery franchise returns in Kanpur with The Buyzaar Mart. Investment breakdown for Mini Mart and Hyper Mart, FOCM and FOCO models explained. Start from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/kanpur/grocery-franchise-returns-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Franchise Returns in Kanpur | The Buyzaar Mart Mini Mart & Hyper Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Grocery Franchise Returns in Kanpur | The Buyzaar Mart Mini Mart & Hyper Mart",
    description:
      "Explore real grocery franchise returns in Kanpur with The Buyzaar Mart. Investment breakdown for Mini Mart and Hyper Mart, FOCM and FOCO models explained. Start from ₹15 Lakh.",
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