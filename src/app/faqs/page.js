import React from "react";
import Content from "./Content";

export const metadata = {
  title: "FAQs | Buyzaar Mart Franchise Questions & Answers",
  description:
    "Find answers to frequently asked questions about Buyzaar Mart franchise opportunities, investment, store setup, support, and the application process across India.",

  keywords: [
    "buyzaar mart faqs",
    "buyzaar mart franchise faqs",
    "supermarket franchise questions",
    "grocery franchise faqs india",
    "buyzaar mart franchise process",
    "franchise investment questions",
    "retail franchise support faqs"
  ],

  alternates: {
    canonical: "https://www.thebuyzaarmart.com/faqs",
  },

  // ✅ OPEN GRAPH
  openGraph: {
    title: "FAQs | Buyzaar Mart Franchise Questions & Answers",
    description:
      "Get clear answers to common questions about Buyzaar Mart supermarket franchise opportunities, investment requirements, and business support.",
    url: "https://www.thebuyzaarmart.com/faqs",
    siteName: "Buyzaar Mart",
    images: [
      {
        url: "https://www.thebuyzaarmart.com/images/buyzaar-logo.png",
        width: 1200,
        height: 630,
        alt: "Buyzaar Mart Franchise FAQs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary",
    title: "FAQs | Buyzaar Mart Franchise",
    description:
      "Frequently asked questions about Buyzaar Mart franchise opportunities, support, and investment.",
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
