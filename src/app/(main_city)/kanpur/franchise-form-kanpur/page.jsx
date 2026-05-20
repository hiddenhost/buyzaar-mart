import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Franchise Form Kanpur | Fill & Apply for The Buyzaar Mart Grocery Franchise",
  description:
    "Fill the franchise form for Kanpur and start your own Buyzaar Mart grocery supermarket from ₹15 Lakh. Choose FOCM or FOCO model with full brand setup, POS, supply chain & training. Apply now at thebuyzaarmart.com.",
  alternates: {
    canonical: "https://www.thebuyzaarmart.com/kanpur/franchise-form-kanpur",
  },
  openGraph: {
    title:
      "Franchise Form Kanpur | Fill & Apply for The Buyzaar Mart Grocery Franchise",
    description:
      "Fill the franchise form for Kanpur and start your own Buyzaar Mart grocery supermarket from ₹15 Lakh. Choose FOCM or FOCO model with full brand setup, POS, supply chain & training. Apply now at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/kanpur/franchise-form-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Form Kanpur | Fill & Apply for The Buyzaar Mart Grocery Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Franchise Form Kanpur | Fill & Apply for The Buyzaar Mart Grocery Franchise",
    description:
      "Fill the franchise form for Kanpur and start your own Buyzaar Mart grocery supermarket from ₹15 Lakh. Choose FOCM or FOCO model with full brand setup, POS, supply chain & training. Apply now at thebuyzaarmart.com.",
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