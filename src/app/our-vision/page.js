import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Our Vision | Buyzaar Mart Franchise Growth & Retail Innovation",
  description:
    "Explore Buyzaar Mart’s vision to become a leading supermarket franchise brand in India by empowering entrepreneurs with scalable retail solutions, innovation, and long-term business growth.",

  keywords: [
    "buyzaar mart vision",
    "buyzaar mart future goals",
    "supermarket franchise vision india",
    "retail franchise growth india",
    "grocery franchise business vision",
    "buyzaar mart expansion plan",
    "organized retail future india"
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/our-vision",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "Our Vision | Buyzaar Mart Franchise Growth & Retail Innovation",
    description:
      "Buyzaar Mart’s vision is to build India’s most trusted supermarket franchise network through innovation, efficiency, and entrepreneur-first growth.",
    url: "https://www.thebuyzaarmart.com/our-vision",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Vision and Franchise Growth Strategy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Our Vision | Buyzaar Mart Franchise Growth",
    description:
      "Discover Buyzaar Mart’s vision for building a scalable and profitable supermarket franchise ecosystem across India.",
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
