import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Wholesale Grocery Mart in Saharanpur | Bulk Retail Business",

  description:
    "Wholesale grocery marts in Saharanpur supplying bulk products for retailers, shops, and commercial buyers.",

  keywords:
    "wholesale grocery mart saharanpur, wholesale grocery store saharanpur, grocery wholesale market saharanpur, bulk grocery store saharanpur, grocery distributor saharanpur, wholesale grocery supplier saharanpur, grocery wholesale business saharanpur, FMCG wholesale grocery saharanpur, wholesale grocery shop saharanpur, grocery wholesale near saharanpur",

  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/cities/saharanpur/wholesale-grocery-mart-saharanpur",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Wholesale Grocery Mart in Saharanpur | Bulk Retail Business",
    description:
      "Wholesale grocery marts in Saharanpur supplying bulk products for retailers, shops, and commercial buyers.",
    url: "https://www.thebuyzaarmart.com/cities/saharanpur/wholesale-grocery-mart-saharanpur",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Opportunity in Saharanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Wholesale Grocery Mart in Saharanpur | Bulk Retail Business",
    description:
      "Wholesale grocery marts in Saharanpur supplying bulk products for retailers, shops, and commercial buyers.",
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


