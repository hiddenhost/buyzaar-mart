import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Franchise Store Revenue Kanpur | Mini Mart & Super Mart | The Buyzaar Mart",
  description:
    "Discover real franchise store revenue potential in Kanpur with The Buyzaar Mart. Compare Mini Mart and Super Mart formats under FOCM and FOCO models. Start from ₹15 Lakh.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/franchise-store-revenue-kanpur",
  },
  openGraph: {
    title:
      "Franchise Store Revenue Kanpur | Mini Mart & Super Mart | The Buyzaar Mart",
    description:
      "Discover real franchise store revenue potential in Kanpur with The Buyzaar Mart. Compare Mini Mart and Super Mart formats under FOCM and FOCO models. Start from ₹15 Lakh.",
    url: "https://www.thebuyzaarmart.com/kanpur/franchise-store-revenue-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Store Revenue Kanpur | Mini Mart & Super Mart | The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Franchise Store Revenue Kanpur | Mini Mart & Super Mart | The Buyzaar Mart",
    description:
      "Discover real franchise store revenue potential in Kanpur with The Buyzaar Mart. Compare Mini Mart and Super Mart formats under FOCM and FOCO models. Start from ₹15 Lakh.",
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