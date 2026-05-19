import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Start a Franchise Business Kanpur - The Buyzaar Mart Guide 2025",
  description:
    "Learn how to start a grocery franchise business in Kanpur from ₹15 Lakh with The Buyzaar Mart. Complete guide with investment details, ROI potential, and step-by-step process for Kanpur entrepreneurs.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/how-to-open-grocery-franchise-kanpur",
  },
  openGraph: {
    title: "How to Start a Franchise Business Kanpur - The Buyzaar Mart Guide 2025",
    description:
      "Learn how to start a grocery franchise business in Kanpur from ₹15 Lakh with The Buyzaar Mart. Complete guide with investment details, ROI potential, and step-by-step process for Kanpur entrepreneurs.",
    url: "https://www.thebuyzaarmart.com/kanpur/how-to-open-grocery-franchise-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Start a Franchise Business Kanpur - The Buyzaar Mart Guide 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Franchise Business Kanpur - The Buyzaar Mart Guide 2025",
    description:
      "Learn how to start a grocery franchise business in Kanpur from ₹15 Lakh with The Buyzaar Mart. Complete guide with investment details, ROI potential, and step-by-step process for Kanpur entrepreneurs.",
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