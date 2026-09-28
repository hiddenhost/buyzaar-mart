import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Services from "@/app/components/Services";

export const metadata = {
  title: "How to Open a Grocery Franchise in Mathura | Category-Focused Guide",
  description:
    "Learn how to open a grocery franchise in Mathura — product categories, licensing, pricing, supply chain & staffing, with The Buyzaar Mart's franchise support.",
  keywords: [
    "how to open grocery franchise Mathura",
    "grocery franchise product categories",
    "grocery store licensing Mathura",
    "FSSAI grocery license Mathura",
    "grocery franchise supply chain Mathura",
    "grocery store staples FMCG Mathura",
    "perishable stock management grocery",
    "grocery franchise pricing strategy Mathura",
    "grocery store staffing needs",
    "grocery franchise investment Mathura",
    "Buyzaar Mart grocery franchise",
    "grocery franchise store formats Mathura",
    "grocery franchise vs kirana store Mathura",
    "grocery store marketing Mathura",
    "grocery franchise stock rotation",
    "open grocery store India",
    "grocery franchise business guide",
    "grocery franchise compliance requirements",
    "packaged FMCG franchise Mathura",
    "dairy perishables grocery store",
    "festive grocery demand Mathura",
    "grocery franchise challenges solutions Mathura",
  ],
  alternates: {
    canonical:
      "https://www.thebuyzaarmart.com/mathura/how-to-open-grocery-franchise-in-mathura",
  },
  openGraph: {
    title: "How to Open a Grocery Franchise in Mathura | Category-Focused Guide",
    description:
      "Learn how to open a grocery franchise in Mathura — product categories, licensing, pricing, supply chain & staffing, with The Buyzaar Mart's franchise support.",
    url: "https://www.thebuyzaarmart.com/mathura/how-to-open-grocery-franchise-in-mathura",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "How to Open a Grocery Franchise in Mathura | Category-Focused Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Open a Grocery Franchise in Mathura | Category-Focused Guide",
    description:
      "Learn how to open a grocery franchise in Mathura — product categories, licensing, pricing, supply chain & staffing, with The Buyzaar Mart's franchise support.",
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