import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Our Stores | Buyzaar Mart Opened Supermarket Franchise Locations",
  description:
    "Explore real Buyzaar Mart opened stores across India. View multiple supermarket franchise locations, store interiors, layouts, and customer-ready retail environments built for success.",

  keywords: [
    "buyzaar mart stores",
    "buyzaar mart opened stores",
    "buyzaar mart supermarket locations",
    "supermarket franchise stores india",
    "grocery franchise store images",
    "retail franchise store layout",
    "buyzaar mart store gallery"
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/our-store",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Our Stores | Buyzaar Mart Opened Supermarket Franchise Locations",
    description:
      "View real Buyzaar Mart opened stores showcasing modern supermarket layouts, interiors, and successful franchise implementations across India.",
    url: "https://www.thebuyzaarmart.com/our-store",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Opened Supermarket Franchise Stores",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Our Stores | Buyzaar Mart Opened Franchise Locations",
    description:
      "See real Buyzaar Mart supermarket franchise stores with actual interiors and layouts from operational locations.",
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
