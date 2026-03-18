import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Grocery Store Dealership in Noida | Partner with The Buyzaar Mart",

  description:
    "Secure grocery store dealership in Noida with The Buyzaar Mart. Exclusive distribution rights, reliable supply chain, comprehensive support, and prime territories for profitable retail partnerships in Noida's growth market.",

  keywords:
    "grocery store dealership noida, buyzaar mart dealership, noida grocery distribution, retail dealership noida, buyzaar mart partnership, grocery supply chain noida, dealership opportunity noida, exclusive grocery dealership, noida retail distribution, buyzaar mart franchise dealership",

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/cities/noida/grocery-mart-investment-noida",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Grocery Store Dealership in Noida | Partner with The Buyzaar Mart",
    description: "Secure grocery store dealership in Noida with The Buyzaar Mart. Exclusive distribution rights, reliable supply chain, comprehensive support, and prime territories for profitable retail partnerships in Noida's growth market.",
    url: "https://www.thebuyzaarmart.com/cities/noida/grocery-mart-investment-noida",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Grocery Store Dealership in Noida - Partner with The Buyzaar Mart",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Grocery Store Dealership in Noida | Partner with The Buyzaar Mart",
    description: "Secure grocery store dealership in Noida with The Buyzaar Mart. Exclusive distribution rights, reliable supply chain, comprehensive support, and prime territories for profitable retail partnerships in Noida's growth market.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
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
