import React from "react";
import Content from "./Content";

export const metadata = {
  // ✅ TITLE
  title: "Supermarket Franchise in Faridabad | Buyzaar Mart",

  // ✅ DESCRIPTION
  description:
    "Own a Buyzaar Mart franchise in Faridabad from ₹15,25,000. Tap into Haryana's high-growth retail market with full support included. Limited slots — apply now!",

  keywords: [
    "supermarket franchise in Faridabad",
    "franchise opportunity in Faridabad",
    "grocery store franchise Faridabad",
    "Buyzaar Mart franchise Faridabad",
    "Buyzaar Mart dealership Faridabad",
    "franchise investment Faridabad",
    "supermarket franchise cost Faridabad",
    "best franchise to buy in Faridabad",
    "profitable business opportunity Faridabad",
    "supermarket franchise Sector 15 Faridabad",
    "grocery franchise NIT Faridabad",
    "retail franchise Greater Faridabad",
    "franchise business Ballabgarh",
    "supermarket franchise Sector 21 Faridabad",
    "supermarket franchise Haryana",
    "retail franchise opportunity Haryana",
    "franchise business Faridabad NCR",
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/faridabad",
  },

  openGraph: {
    title: "Franchise in Faridabad | Buyzaar Mart Supermarket",
    description:
      "Start a supermarket business in Sector 15, NIT, Greater Faridabad, or Ballabgarh from ₹15,25,000. Grow with Buyzaar Mart and apply today.",
    url: "https://www.thebuyzaarmart.com/faridabad",
    siteName: "The Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Supermarket Franchise Opportunity in Faridabad Haryana",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Franchise in Faridabad | Buyzaar Mart",
    description:
      "Own a Buyzaar Mart supermarket franchise in Faridabad from ₹15,25,000. High-potential Haryana market. Full training + ops support. Limited slots open.",
    images: ["https://www.thebuyzaarmart.com/images/buyzaar-logo.png"],
  },

  // ✅ ROBOTS
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },

  // ✅ FAVICON
  icons: {
    icon: "/images/buyzaar-logo.png",
  },
};

export default function Page() {
  return <Content />;
}