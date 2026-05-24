import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title:
    "Retail Business Franchise in Greater Noida | The Buyzaar Mart – Start from ₹15 Lakh",
  description:
    "Launch your retail business franchise in Greater Noida with The Buyzaar Mart. FOCM model with company-managed operations, POS system, supply chain & full marketing support. Investment starts ₹15 Lakh. Apply now.",
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/greater-noida/retail-business-franchise-in-greater-noida",
  },
  openGraph: {
    title:
      "Retail Business Franchise in Greater Noida | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Launch your retail business franchise in Greater Noida with The Buyzaar Mart. FOCM model with company-managed operations, POS system, supply chain & full marketing support. Investment starts ₹15 Lakh. Apply now.",
    url: "https://www.thebuyzaarmart.com/greater-noida/retail-business-franchise-in-greater-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Retail Business Franchise in Greater Noida | The Buyzaar Mart – Start from ₹15 Lakh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Retail Business Franchise in Greater Noida | The Buyzaar Mart – Start from ₹15 Lakh",
    description:
      "Launch your retail business franchise in Greater Noida with The Buyzaar Mart. FOCM model with company-managed operations, POS system, supply chain & full marketing support. Investment starts ₹15 Lakh. Apply now.",
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