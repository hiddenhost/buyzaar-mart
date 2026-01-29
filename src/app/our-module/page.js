import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Our Module | Buyzaar Mart Franchise Business & Operating Model",
  description:
    "Understand Buyzaar Mart’s franchise module designed for scalable supermarket success. From store setup to operations, inventory, billing, and marketing support – everything you need to run a profitable retail franchise.",

  keywords: [
    "buyzaar mart module",
    "buyzaar mart franchise module",
    "supermarket franchise business model",
    "grocery franchise operating model",
    "retail franchise system india",
    "buyzaar mart operations module",
    "organized retail franchise model"
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/our-module",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Our Module | Buyzaar Mart Franchise Business & Operating Model",
    description:
      "Explore Buyzaar Mart’s structured franchise module covering store setup, inventory management, billing systems, and end-to-end operational support.",
    url: "https://www.thebuyzaarmart.com/our-module",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise Module and Business System",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Our Module | Buyzaar Mart Franchise System",
    description:
      "Learn how Buyzaar Mart’s franchise module simplifies supermarket operations and ensures scalable retail growth.",
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
