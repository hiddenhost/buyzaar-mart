import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Franchise Enquiry Kanpur | The Buyzaar Mart Grocery & Supermarket Franchise",
  description:
    "Submit your franchise enquiry for Kanpur and join The Buyzaar Mart network. Start a grocery supermarket from ₹15 Lakh with FOCM & FOCO models, full brand support, POS system, supply chain, and training. Enquire now at thebuyzaarmart.com.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/kanpur/franchise-enquiry-kanpur",
  },
  openGraph: {
    title:
      "Franchise Enquiry Kanpur | The Buyzaar Mart Grocery & Supermarket Franchise",
    description:
      "Submit your franchise enquiry for Kanpur and join The Buyzaar Mart network. Start a grocery supermarket from ₹15 Lakh with FOCM & FOCO models, full brand support, POS system, supply chain, and training. Enquire now at thebuyzaarmart.com.",
    url: "https://www.thebuyzaarmart.com/kanpur/franchise-enquiry-kanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Franchise Enquiry Kanpur | The Buyzaar Mart Grocery & Supermarket Franchise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Franchise Enquiry Kanpur | The Buyzaar Mart Grocery & Supermarket Franchise",
    description:
      "Submit your franchise enquiry for Kanpur and join The Buyzaar Mart network. Start a grocery supermarket from ₹15 Lakh with FOCM & FOCO models, full brand support, POS system, supply chain, and training. Enquire now at thebuyzaarmart.com.",
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