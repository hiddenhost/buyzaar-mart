import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Our Mission | Buyzaar Mart Franchise & Retail Growth Vision",
  description:
    "Discover Buyzaar Mart’s mission to build a strong, profitable supermarket franchise network across India. Empowering entrepreneurs with trusted retail solutions, training, and supply chain support.",

  keywords: [
    "buyzaar mart mission",
    "buyzaar mart vision",
    "supermarket franchise mission",
    "retail franchise vision india",
    "grocery franchise business model",
    "buyzaar mart franchise network",
    "organized retail growth india"
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/our-mission",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Our Mission | Buyzaar Mart Franchise & Retail Growth Vision",
    description:
      "Buyzaar Mart’s mission is to empower entrepreneurs across India through a scalable supermarket franchise model with strong operational and supply chain support.",
    url: "https://www.thebuyzaarmart.com/our-mission",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Mission and Franchise Vision",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Our Mission | Buyzaar Mart Franchise Vision",
    description:
      "Learn about Buyzaar Mart’s mission to grow a trusted supermarket franchise ecosystem across India.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return <Content />;
}
