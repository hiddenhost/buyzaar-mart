import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Mart Franchise in Greater Noida | The Buyzaar Mart Opportunity ₹15 Lakh+",
  description:
    "Discover mart franchise opportunities in Greater Noida with The Buyzaar Mart. Low investment supermarket franchise from ₹15 Lakh. Full training, supply chain & ongoing support. Apply now for your business success.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greaternoida/mart-franchise-opportunity-greater-noida",
  },
  openGraph: {
    title:
      "Mart Franchise in Greater Noida | The Buyzaar Mart Opportunity ₹15 Lakh+",
    description:
      "Discover mart franchise opportunities in Greater Noida with The Buyzaar Mart. Low investment supermarket franchise from ₹15 Lakh. Full training, supply chain & ongoing support. Apply now for your business success.",
    url: "https://www.thebuyzaarmart.com/greaternoida/mart-franchise-opportunity-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Mart Franchise in Greater Noida | The Buyzaar Mart Opportunity ₹15 Lakh+",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mart Franchise in Greater Noida | The Buyzaar Mart Opportunity ₹15 Lakh+",
    description:
      "Discover mart franchise opportunities in Greater Noida with The Buyzaar Mart. Low investment supermarket franchise from ₹15 Lakh. Full training, supply chain & ongoing support. Apply now for your business success.",
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